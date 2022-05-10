module.exports = {
    plugins: {
        autoprefixer: {},
        'postcss-px-to-viewport': {
            viewportWidth: 375, // 设计图尺寸
            minPixelValue: 2
        }
    }
}
