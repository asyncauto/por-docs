
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("files");
  let markdownIt = require("markdown-it");
  // let markdownItReplaceLink = require("markdown-it-replace-link");
  let markdownItObsidian = require("markdown-it-obsidian")();
  let markdownItOptions = {
    html: true,
  };
  let markdownLib = markdownIt(markdownItOptions)
    .use(markdownItObsidian)
  eleventyConfig.setLibrary("md", markdownLib);
  eleventyConfig.addPassthroughCopy("assets");

  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
