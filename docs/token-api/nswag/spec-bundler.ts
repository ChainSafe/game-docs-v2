const openapiCore = require('@redocly/openapi-core');
const utils = require("util")
const pathToEntryPoint = './docs/token-api/spec/v1.spec.yaml';

exports.mergeSpec = function (): Promise<{ spec }> {
    return new Promise<{ spec }>(async (resolve, reject) => {
        openapiCore.loadConfig('./docs/token-api/spec/.redocly.yaml').then(async (config) => {
            // Lint spec before bundling
            const lintResults = await openapiCore.lint({ ref: pathToEntryPoint, config });
            if (lintResults.length !== 0) {
                let err = "[" + lintResults.length + "] LINT ERRORS:\n"
                let isError = false
                for (let i = 0; i < lintResults.length; i++) {
                    if (lintResults[i].severity != 'warn') {
                        err += lintResults[i].message + ";\n"
                        isError = true
                    }
                }
                if (isError) {
                    reject(err)
                    return
                }
            }

            // Bundle spec components together
            const merge = await openapiCore.bundle({ ref: pathToEntryPoint, config });
            if (Object.keys(merge.problems).length !== 0) {
                let err = "[" + merge.problems.length + "] BUNDLE ERRORS:\n"
                for (let i = 0; i < merge.problems.length; i++) {
                    err += merge.problems[i].message + ";\n"
                }
                reject(err)
                return
            }
            resolve({ spec: JSON.stringify(merge.bundle.parsed, null, 2) })
        }).catch((error) => {
            reject("linter config loading error: " + error)
        });
    })
}

