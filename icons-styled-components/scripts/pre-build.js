const fs = require('fs-extra')
const path = require('path')
const icons = require('css.gg/icons-json/icons.json')
const mustache = require('mustache')
const camelcase = require('lodash.camelcase')

const iconsTpl = fs.readFileSync(path.resolve(__dirname, '../template/icon.tsx.tpl'))
const entryTpl = fs.readFileSync(path.resolve(__dirname, '../template/index.tsx.tpl'))

Object.keys(icons).forEach(k => {
  const css = icons[k][0][0].css.replace(/(\.gg-[a-zA-Z\-]*)/g, '&')
  const name = `${camelcase(k)[0].toUpperCase()}${camelcase(k).slice(1)}`
  const result = mustache.render(iconsTpl.toString(), {
    styledname: `Styled${name}`,
    name,
    css,
  })
  fs.outputFileSync(path.resolve(__dirname, `../src/icons/${name}.tsx`), result)
})

const exportIcons = Object.keys(icons).map(k => {
  const name = `${camelcase(k)[0].toUpperCase()}${camelcase(k).slice(1)}`
  return {
    export: `export { ${name} } from './icons/${name}'`,
  }
})

const entry = mustache.render(entryTpl.toString(), {
  exports: exportIcons,
})
fs.outputFileSync(path.resolve(__dirname, `../src/index.ts`), entry)
