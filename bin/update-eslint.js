#!/usr/bin/env node
/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const Fs = require("fs");
const Path = require("path");
const spawn = require("cross-spawn");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * コマンドが eslint のディレクトリで実行されたかどうか確認します。
 * @returns {void}
 */
function checkCwd() {
    const path = process.cwd();
    const name = Path.basename(path);

    if (name !== "eslint") {
        throw new Error(`This is not 'eslint' directory: ${path}`);
    }
}

/**
 * 'node_modules/eslint' を作成します。これは eslint ルート ディレクトリの symlink です。
 * @returns {void}
 */
function linkEslint() {
    const target = process.cwd();
    const newPort = Path.join(process.cwd(), "node_modules", "eslint");
    Fs.symlinkSync(target, newPort, "junction");
}

/**
 * 'node_modules/eslint' を削除します。
 * @returns {void}
 */
function unlinkEslint() {
    try {
        Fs.unlinkSync("./node_modules/eslint");
    }
    catch (err) {
        if (err.ENOENT) {
            return;
        }
        throw err;
    }
}

/**
 * 'npm install' を実行して、最新の依存モジュールを取得します。
 * @returns {void}
 */
function update() {
    spawn("npm", ["install"], {stdio: "inherit"});
}

//------------------------------------------------------------------------------
// Main
//------------------------------------------------------------------------------

checkCwd();
unlinkEslint();
update();
linkEslint();
