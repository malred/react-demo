/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

const loaderUtils = require('loader-utils');
const path = require('path');

module.exports = function getLocalIdent(
    context,
    localIdentName,
    localName,
    options
) {
    // Use the filename or folder name, based on some uses the index.js / index.module.(css|scss|sass) project style
//增加less
    const fileNameOrFolder = context.resourcePath.match(
        /index\.module\.(css|scss|sass|less)$/
    )
        ? '[folder]'
        : '[name]';
    // Create a hash based on a the file location and class name. Will be unique across a project, and close to globally unique.
//hash 设置为5位
    const hash = loaderUtils.getHashDigest(
        path.posix.relative(context.rootContext, context.resourcePath) + localName,
        'md5',
        'base64',
        5
    );
    // Use loaderUtils to find the file or folder name
// 展示由什么组成 例如：my_text__158hU
    const className = loaderUtils.interpolateName(
        context,
        fileNameOrFolder + '_' + localName + '__' + hash,
        options
    );
    // remove the .module that appears in every classname when based on the file.
    return className.replace('.module_', '_');
};
module.exports = override(
    //配置快捷路径
    addWebpackAlias({
        '@': path.join(__dirname,'src'),
        '@scss': path.join(__dirname,'src/assets/styles')
    })
)