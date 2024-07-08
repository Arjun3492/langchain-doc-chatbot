"use strict";
(() => {
var exports = {};
exports.id = 812;
exports.ids = [812];
exports.modules = {

/***/ 4376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_pinecone_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4022);

const getNamespaces = async (req, res)=>{
    const pineconeApiKey = req.headers["x-api-key"];
    const targetIndex = req.headers["x-index-name"];
    const pineconeEnvironment = req.headers["x-environment"];
    const pinecone = await (0,_utils_pinecone_client__WEBPACK_IMPORTED_MODULE_0__/* .initPinecone */ .R)(pineconeApiKey, pineconeEnvironment);
    try {
        const index = pinecone.Index(targetIndex);
        const describeIndexStatsQuery = {
            describeIndexStatsRequest: {
                filter: {}
            }
        };
        const indexStatsResponse = await index.describeIndexStats();
        const namespaces = Object.keys(indexStatsResponse.namespaces);
        res.status(200).json(namespaces);
    } catch (error) {
        console.log("Error fetching namespaces", error);
        res.status(500).json({
            message: "Error fetching namespaces"
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNamespaces);


/***/ }),

/***/ 4022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "R": () => (/* binding */ initPinecone)
});

;// CONCATENATED MODULE: external "@pinecone-database/pinecone"
const pinecone_namespaceObject = require("@pinecone-database/pinecone");
;// CONCATENATED MODULE: ./utils/pinecone-client.ts

async function initPinecone(apiKey, environment) {
    try {
        const pinecone = new pinecone_namespaceObject.Pinecone({
            apiKey
        });
        return pinecone;
    } catch (error) {
        console.log("error", error);
        throw new Error("Failed to initialize Pinecone Client");
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4376));
module.exports = __webpack_exports__;

})();