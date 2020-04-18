"use strict";
exports.__esModule = true;
var fse = require("fs-extra");
var fs = require("fs");
exports.readTemplateFile = function (templatePath) { return new Promise(function (resolve) {
    fs.readFile(templatePath, 'UTF-8', function (err, data) {
        if (err)
            return resolve(null);
        return resolve(data);
    });
}); };
exports.writeTemplateFile = function (data, path) { return new Promise(function (resolve) {
    fs.writeFile(path, data, 'UTF-8', function (err) {
        if (err) {
            console.log(err);
            return resolve(null);
        }
        console.log('File writen');
        return true;
    });
}); };
exports.copyFilesFromBuildFolder = function (buildReactFolderPath, targetPublicAssetsPath) { return new Promise(function (resolve) {
    fse.copy(buildReactFolderPath, targetPublicAssetsPath)
        .then(function () {
        console.log(buildReactFolderPath + " was copied to " + targetPublicAssetsPath);
        resolve(true);
    })["catch"](function (err) {
        console.log(JSON.stringify(err));
        resolve(false);
    });
}); };
exports["default"] = {
    readTemplateFile: exports.readTemplateFile,
    writeTemplateFile: exports.writeTemplateFile,
    copyFilesFromBuildFolder: exports.copyFilesFromBuildFolder
};
