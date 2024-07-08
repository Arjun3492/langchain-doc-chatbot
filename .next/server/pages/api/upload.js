"use strict";
(() => {
var exports = {};
exports.id = 39;
exports.ids = [39];
exports.modules = {

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 2522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "multiparty"
const external_multiparty_namespaceObject = require("multiparty");
var external_multiparty_default = /*#__PURE__*/__webpack_require__.n(external_multiparty_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
;// CONCATENATED MODULE: ./pages/api/upload.ts



const config = {
    api: {
        bodyParser: false
    }
};
async function handler(req, res) {
    const form = new (external_multiparty_default()).Form();
    form.parse(req, async (err, fields, files)=>{
        if (err) {
            return res.status(400).json({
                message: "Error parsing form data"
            });
        }
        if (!files) {
            return res.status(400).json({
                error: "No file uploaded"
            });
        }
        const uploadedFiles = [];
        for (const file of Object.values(files)){
            if (!file || file.length === 0) {
                continue;
            }
            const uploadedFile = file[0];
            if (false) {} else {
                // In production, just use the file as is
                uploadedFiles.push(uploadedFile.path);
            }
        }
        if (uploadedFiles.length > 0) {
            return res.status(200).json({
                message: `Files ${uploadedFiles.join(", ")} uploaded and moved!`
            });
        } else {
            console.log("error uploading file");
            return res.status(400).json({
                message: "No files uploaded"
            });
        }
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2522));
module.exports = __webpack_exports__;

})();