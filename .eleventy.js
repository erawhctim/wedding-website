const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };
  
  const mdLib = markdownIt(options);
  eleventyConfig.setLibrary("md", mdLib);
  eleventyConfig.addFilter("markdownify", (content) => mdLib.render(content));
  
  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};