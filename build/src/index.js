"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./inc/index");
class ReactConnect {
    constructor(config) {
        this.copyTemplate = () => {
            this.config.map((item) => {
                index_1.readTemplateFile(item.reactViewTemplatePath)
                    .then((data) => {
                    if (data) {
                        index_1.writeTemplateFile(data, item.targetViewTemplatePath);
                    }
                });
            });
        };
        this.copyFiles = () => {
            this.config.map((item) => {
                index_1.copyFilesFromBuildFolder(item.reactBuildFolder, item.targetBuildFolder);
            });
        };
        this.config = config;
    }
}
exports.default = ReactConnect;
//# sourceMappingURL=index.js.map