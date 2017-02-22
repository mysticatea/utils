/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//-----------------------------------------------------------------------------
// Requirements
//-----------------------------------------------------------------------------

const Fs = require("fs")

//-----------------------------------------------------------------------------
// Interface
//-----------------------------------------------------------------------------

module.exports = function generateFiles(rule) {
    Fs.writeFileSync(`lib/rules/${rule}.js`, `/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Creates AST event handlers for ${rule}.
 * 
 * @param {RuleContext} context - The rule context.
 * @returns {object} AST event handlers.
 */
function create(context) {
    var sourceCode = context.getSourceCode()

    return {
    }
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    create,
    meta: {
        docs: {
            description: "",
            category: "Possible Errors",
            category: "Best Practices",
            category: "Stylistic Issues",
            recommended: false
        },
        fixable: false,
        schema: [],
    },
}
`)

    Fs.writeFileSync(`tests/lib/rules/${rule}.js`, `/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/${rule}")
const RuleTester = require("eslint").RuleTester

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const tester = new RuleTester()

tester.run("${rule}", rule, {
    valid: [
    ],
    invalid: [
    ]
})
`)

    Fs.writeFileSync(`docs/rules/${rule}.md`, `#  (${rule})

## Rule Details

:-1: Examples of **incorrect** code for this rule:

\`\`\`js
/*eslint ${rule}: "error"*/

\`\`\`

:+1: Examples of **correct** code for this rule:

\`\`\`js
/*eslint ${rule}: "error"*/

\`\`\`

## Options

\`\`\`json
{
    "${rule}": ["error"]
}
\`\`\`

## When Not To Use It

If you don't want to ***, then it's safe to disable this rule.
`)
}
