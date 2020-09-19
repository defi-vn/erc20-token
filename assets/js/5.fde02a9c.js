(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{352:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"erc20-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#erc20-token"}},[t._v("#")]),t._v(" ERC20 Token")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.npmjs.com/package/@vittominacori/erc20-token",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/npm/v/@vittominacori/erc20-token.svg?style=flat-square",alt:"NPM Package"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://travis-ci.com/vittominacori/erc20-token",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://travis-ci.com/vittominacori/erc20-token.svg?branch=master",alt:"Build Status"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://coveralls.io/github/vittominacori/erc20-token?branch=master",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://coveralls.io/repos/github/vittominacori/erc20-token/badge.svg?branch=master",alt:"Coverage Status"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/vittominacori/erc20-token/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/github/license/vittominacori/erc20-token.svg",alt:"MIT licensed"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("A simple Smart Contract for a Standard, Capped, Mintable, Burnable, Payable ERC20 Token.")]),t._v(" "),s("p",[t._v("Token has a Role Based Access Control so you can add the "),s("code",[t._v("MINTER")]),t._v(" permission to users or Smart Contracts.")]),t._v(" "),s("p",[t._v("Token has a "),s("code",[t._v("trasferEnabled")]),t._v(" property. Nobody can transfer tokens until the property will be enabled or you can define users as "),s("code",[t._v("OPERATOR")]),t._v(" allowed to transfer also if not enabled.")]),t._v(" "),s("p",[t._v("Token has the ERC1363 behaviors. "),s("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-1363",target:"_blank",rel:"noopener noreferrer"}},[t._v("ERC1363"),s("OutboundLink")],1),t._v(" is an ERC20 compatible token that can make a callback on the receiver contract to notify token transfers or token approvals.")]),t._v(" "),s("h2",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @vittominacori/erc20-token\n")])])]),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pragma")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("solidity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token version number"}},[t._v("0.7.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vittominacori/erc20-token/contracts/ERC20Base.sol"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("contract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyToken")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" ERC20Base "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("memory")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("memory")]),t._v(" symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint8")]),t._v(" decimals"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" cap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" initialSupply"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" transferEnabled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" mintingFinished\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ERC20Base")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" decimals"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" initialSupply"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transferEnabled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mintingFinished"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// your stuff")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"development"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#development"}},[t._v("#")]),t._v(" Development")]),t._v(" "),s("h3",{attrs:{id:"install-dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-dependencies"}},[t._v("#")]),t._v(" Install dependencies")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),s("h3",{attrs:{id:"usage-using-truffle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage-using-truffle"}},[t._v("#")]),t._v(" Usage (using Truffle)")]),t._v(" "),s("p",[t._v("Open the Truffle console")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run console\n")])])]),s("h4",{attrs:{id:"compile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compile"}},[t._v("#")]),t._v(" Compile")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run compile\n")])])]),s("h4",{attrs:{id:"test"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test"}},[t._v("#")]),t._v(" Test")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n")])])]),s("h3",{attrs:{id:"usage-using-buidler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage-using-buidler"}},[t._v("#")]),t._v(" Usage (using Buidler)")]),t._v(" "),s("p",[t._v("Open the Buidler console")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run buidler:console\n")])])]),s("h4",{attrs:{id:"compile-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compile-2"}},[t._v("#")]),t._v(" Compile")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run buidler:compile\n")])])]),s("h4",{attrs:{id:"test-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test-2"}},[t._v("#")]),t._v(" Test")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run buidler:test\n")])])]),s("h3",{attrs:{id:"code-coverage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-coverage"}},[t._v("#")]),t._v(" Code Coverage")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run coverage\n")])])]),s("h2",{attrs:{id:"linter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linter"}},[t._v("#")]),t._v(" Linter")]),t._v(" "),s("p",[t._v("Use Solhint")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run lint:sol\n")])])]),s("p",[t._v("Use ESLint")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run lint:js\n")])])]),s("p",[t._v("Use ESLint and fix")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run lint:fix\n")])])]),s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),s("p",[t._v("Code released under the "),s("a",{attrs:{href:"https://github.com/vittominacori/erc20-token/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[t._v("MIT License"),s("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);a.default=n.exports}}]);