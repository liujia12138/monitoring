import './iconfont'

const svgFiles = require.context('./svg', false, /\.svg$/)

svgFiles.keys().map(item => svgFiles(item))