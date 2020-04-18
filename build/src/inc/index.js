"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fse = require("fs-extra");
const fs = require("fs");
exports.readTemplateFile = (templatePath) => new Promise(resolve => {
    fs.readFile(templatePath, 'UTF-8', (err, data) => {
        if (err)
            return resolve(null);
        return resolve(data);
    });
});
exports.writeTemplateFile = (data, path) => new Promise(resolve => {
    fs.writeFile(path, data, 'UTF-8', (err) => {
        if (err) {
            console.log(err);
            return resolve(null);
        }
        console.log('File writen');
        return true;
    });
});
exports.copyFilesFromBuildFolder = (buildReactFolderPath, targetPublicAssetsPath) => new Promise(resolve => {
    fse.copy(buildReactFolderPath, targetPublicAssetsPath)
        .then(() => {
        console.log(`${buildReactFolderPath} was copied to ${targetPublicAssetsPath}`);
        resolve(true);
    })
        .catch(err => {
        console.log(JSON.stringify(err));
        resolve(false);
    });
});
exports.default = {
    readTemplateFile: exports.readTemplateFile,
    writeTemplateFile: exports.writeTemplateFile,
    copyFilesFromBuildFolder: exports.copyFilesFromBuildFolder
};
//# sourceMappingURL=index.js.map