import fs from "fs"
import path from "path"
import esbuild from "esbuild"
import glob from "glob"

const srcDir = "./src"
const distDir = "./dist"

new Promise(async (r, x) => {
    glob(`${srcDir}/**/*.+(html|css|svg|png|jpg)`, (err, files) => {
        for (const file of files) {
            const target = path.join(distDir, path.relative(srcDir, file))
            fs.copyFile(file, target, error => {
                if (error) {
                    console.error({ error })
                    process.exitCode = 1
                }
            })
        }
        r()
    })
}).then(async () => {
    try {
        await esbuild.build({
            entryPoints: [`${srcDir}/entrypoint.js`],
            bundle: true,
            outdir: distDir
        })
        console.log("Build complete")
    } catch (error) {
        console.error(error)
        process.exitCode = 1
    }
})
