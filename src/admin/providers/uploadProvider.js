var adminBro = require('@admin-bro/upload');
var fs = require("fs");
var path = require("path");

class UploadProvider extends adminBro.BaseProvider {
    constructor(bucket, assetPath) {
        // it requires bucket as a parameter to properly pass it to other methods
        super(bucket)

        this.assetPath = assetPath
    }

    async upload(file, key, context) {
        const fullPath = path.resolve(this.assetPath, key)
        const dirPath = path.dirname(fullPath)

        if (!fs.existsSync(dirPath)) {
            await fs.promises.mkdir(dirPath, { recursive: true })
        }
        await fs.promises.copyFile(file.path, fullPath)
        await fs.promises.unlink(file.path)
        return key
    }

    async delete(key, bucket, context) {
        const filePath =
            path.resolve(this.assetPath, key)

        if (fs.existsSync(filePath)) {
            await fs.promises.unlink(filePath)
            const dirPath = path.dirname(filePath)
            const otherFiles = await fs.promises.readdir(dirPath)
            if (otherFiles && otherFiles.length == 0) {
                await fs.promises.rmdir(dirPath)
            }
        }
    }

    path(key, bucket, context) {
        return "/" + bucket
    }
}

module.exports = UploadProvider;