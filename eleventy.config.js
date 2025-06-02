import { HtmlBasePlugin } from "@11ty/eleventy";

const globalData = {
  layout: "default.html",
  title: "D&D Player Primer",
  background_image:
    "https://media.dndbeyond.com/compendium-images/phb/MKDHZ1nxSXDDLOw2/phb-2024-cover.jpeg",
  background_position: "center",
};

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

  Object.entries(globalData).forEach(([key, value]) => {
    eleventyConfig.addGlobalData(key, value);
  });

  return {
    dir: {
      input: "source",
      output: "build",
    },
    layout: "default.html",
  };
}
