import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(HtmlBasePlugin);

  // reduce README.md files to index.html
  eleventyConfig.addCollection("readme", (collection) => {
    return collection.getAllSorted().map((item) => {
      if (item.fileSlug === "README") {
        // Set the output path to the parent directory
        item.outputPath = item.outputPath.replace("/README", "");
      }
    });
  });

  eleventyConfig.addPassthroughCopy("source/_assets");

  eleventyConfig.addGlobalData("layout", "default.liquid");
}
