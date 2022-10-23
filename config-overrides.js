const path=require('path')
module.exports = override(
    //配置快捷路径
    addWebpackAlias({
        '@': path.join(__dirname,'src'),
        '@scss': path.join(__dirname,'src/assets/styles')
    })
)