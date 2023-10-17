const fs = require('fs')
const path = require('path')
const postcss = require('postcss')

// the file name as an entry point for postcss compilation
// also used to define the output filename in our output /assets folder.
const fileName = 'main.css'

module.exports = class {
  async data() {
    const rawFilepath = path.join(__dirname, fileName)
    return {
      permalink: `css/${fileName}`,
      rawFilepath,
      rawCss: await fs.readFileSync(rawFilepath),
      eleventyExcludeFromCollections: true,
    }
  }

  async render({ rawCss, rawFilepath }) {
    return await postcss([
      require('tailwindcss')('./tailwind.config.js'),
      require('autoprefixer'),
    ])
      .process(rawCss, { from: rawFilepath })
      .then((result) => result.css)
  }
}
