import {
    readTemplateFile,
    writeTemplateFile,
    copyFilesFromBuildFolder
} from './inc/index'

type TConfig = {
    reactViewTemplatePath: string,
    targetViewTemplatePath: string,
    reactBuildFolder: string,
    targetBuildFolder: string
}

class ReactConnect {
    private config: TConfig[];
    constructor(config: TConfig[]) {
        this.config = config;
    }
    copyTemplate = () => {
        this.config.map((item: TConfig) => {
            readTemplateFile(item.reactViewTemplatePath)
                .then((data: string) => {
                    if (data) {
                        writeTemplateFile(data, item.targetViewTemplatePath)
                    }
                })
        })
    }
    copyFiles = () => {
        this.config.map((item: TConfig) => {
            copyFilesFromBuildFolder(item.reactBuildFolder, item.targetBuildFolder)
        })
    }
}

export default ReactConnect;