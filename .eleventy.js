const globalData = {
  layout: "default.html",
  title: "D&D Player Primer",
  background_image:
    "https://images.ctfassets.net/swt2dsco9mfe/4KV6I7rwmZ0y7bJvDFmmHQ/f0580242bada9b910ad18a59bd779ec6/SCAG_2560x1600_Wallpaper.jpeg",
  background_position: "center",
};

module.exports = function (eleventyConfig) {
  if (process.env.pathPrefix)
    eleventyConfig.pathPrefix = process.env.pathPrefix;

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
};
