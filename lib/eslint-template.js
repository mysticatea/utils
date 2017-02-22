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
 * @fileoverview Rule to
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "",
            category: "Possible Errors",
            category: "Best Practices",
            category: "Stylistic Issues",
            recommended: false
        },
        schema: []
    },

    create(context) {
        var sourceCode = context.getSourceCode();

        return {
        };
    }
};
`)

    Fs.writeFileSync(`tests/lib/rules/${rule}.js`, `/**
 * @fileoverview Tests for ${rule} rule.
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/${rule}");
const RuleTester = require("../../../lib/testers/rule-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

ruleTester.run("${rule}", rule, {
    valid: [
    ],
    invalid: [
    ]
});
`)

    Fs.writeFileSync(`docs/rules/${rule}.md`, `#  (${rule})

## Rule Details

Examples of **incorrect** code for this rule:

\`\`\`js
/*eslint ${rule}: "error"*/

\`\`\`

Examples of **correct** code for this rule:

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
