#!/usr/bin/env node
/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//-----------------------------------------------------------------------------
// Requirements
//-----------------------------------------------------------------------------

const path = require("path")

//-----------------------------------------------------------------------------
// Helpers
//-----------------------------------------------------------------------------

/**
 * Checks whether this directory is "eslint" or not.
 *
 * @returns {boolean} `true` if this directory is "eslint".
 */
function isESLintCore() {
    return path.basename(process.cwd()) === "eslint"
}

//-----------------------------------------------------------------------------
// Main
//-----------------------------------------------------------------------------
/*eslint-disable no-console, no-process-exit */

const rule = process.argv[2]
if (typeof rule !== "string" || !/^[a-z]+(?:-[a-z]+)*$/.test(rule)) {
    console.error(`Invalid Argument: ${rule}`)
    process.exit(1)
}

const generateFiles = require(`../lib/${
    isESLintCore() ? "eslint-template" : "eslint-plugin-template"
}`)
generateFiles(rule)

/*eslint-enable */
