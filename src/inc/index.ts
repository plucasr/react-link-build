import * as fse from 'fs-extra'
import * as fs from 'fs'


export const readTemplateFile = (templatePath: string) => new Promise<string>(resolve => {
    fs.readFile(templatePath, 'UTF-8', (err, data: string) => {
        if (err) return resolve(null);
        return resolve(data)
    })
})
export const writeTemplateFile = (data: string, path: string) => new Promise(resolve => {
    fs.writeFile(path, data, 'UTF-8', (err) => {
        if (err) {
            console.log(err)
            return resolve(null)
        }
        console.log('File writen')
        return true;
    })
})
export const copyFilesFromBuildFolder = (buildReactFolderPath: string, targetPublicAssetsPath: string) => new Promise(resolve => {
    fse.copy(buildReactFolderPath, targetPublicAssetsPath)
        .then(() => {
            console.log(`${buildReactFolderPath} was copied to ${targetPublicAssetsPath}`)
            resolve(true)
        })
        .catch(err => {
            console.log(JSON.stringify(err))
            resolve(false)
        })
})
export default {
    readTemplateFile,
    writeTemplateFile,
    copyFilesFromBuildFolder
}