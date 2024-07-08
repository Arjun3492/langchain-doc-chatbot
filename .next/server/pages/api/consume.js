"use strict";
(() => {
var exports = {};
exports.id = 4;
exports.ids = [4];
exports.modules = {

/***/ 246:
/***/ ((module) => {

module.exports = import("langchain/document_loaders/fs/directory");;

/***/ }),

/***/ 5819:
/***/ ((module) => {

module.exports = import("langchain/document_loaders/fs/docx");;

/***/ }),

/***/ 6777:
/***/ ((module) => {

module.exports = import("langchain/document_loaders/fs/pdf");;

/***/ }),

/***/ 9896:
/***/ ((module) => {

module.exports = import("langchain/document_loaders/fs/text");;

/***/ }),

/***/ 4405:
/***/ ((module) => {

module.exports = import("langchain/embeddings/openai");;

/***/ }),

/***/ 9170:
/***/ ((module) => {

module.exports = import("langchain/text_splitter");;

/***/ }),

/***/ 3244:
/***/ ((module) => {

module.exports = import("langchain/vectorstores/pinecone");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 3810:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var langchain_text_splitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9170);
/* harmony import */ var langchain_embeddings_openai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4405);
/* harmony import */ var langchain_vectorstores_pinecone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3244);
/* harmony import */ var langchain_document_loaders_fs_pdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6777);
/* harmony import */ var langchain_document_loaders_fs_directory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(246);
/* harmony import */ var langchain_document_loaders_fs_docx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5819);
/* harmony import */ var langchain_document_loaders_fs_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9896);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_pinecone_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4022);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([langchain_text_splitter__WEBPACK_IMPORTED_MODULE_0__, langchain_embeddings_openai__WEBPACK_IMPORTED_MODULE_1__, langchain_vectorstores_pinecone__WEBPACK_IMPORTED_MODULE_2__, langchain_document_loaders_fs_pdf__WEBPACK_IMPORTED_MODULE_3__, langchain_document_loaders_fs_directory__WEBPACK_IMPORTED_MODULE_4__, langchain_document_loaders_fs_docx__WEBPACK_IMPORTED_MODULE_5__, langchain_document_loaders_fs_text__WEBPACK_IMPORTED_MODULE_6__]);
([langchain_text_splitter__WEBPACK_IMPORTED_MODULE_0__, langchain_embeddings_openai__WEBPACK_IMPORTED_MODULE_1__, langchain_vectorstores_pinecone__WEBPACK_IMPORTED_MODULE_2__, langchain_document_loaders_fs_pdf__WEBPACK_IMPORTED_MODULE_3__, langchain_document_loaders_fs_directory__WEBPACK_IMPORTED_MODULE_4__, langchain_document_loaders_fs_docx__WEBPACK_IMPORTED_MODULE_5__, langchain_document_loaders_fs_text__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const filePath =  true ? "/tmp" : 0;
async function handler(req, res) {
    const openAIapiKey = req.headers["x-openai-key"];
    const pineconeApiKey = req.headers["x-pinecone-key"];
    const targetIndex = req.headers["x-index-name"];
    const pineconeEnvironment = req.headers["x-environment"];
    const pinecone = await (0,_utils_pinecone_client__WEBPACK_IMPORTED_MODULE_8__/* .initPinecone */ .R)(pineconeApiKey, pineconeEnvironment);
    const { namespaceName , chunkSize , overlapSize  } = req.query;
    try {
        // Load PDF files from the specified directory
        const directoryLoader = new langchain_document_loaders_fs_directory__WEBPACK_IMPORTED_MODULE_4__.DirectoryLoader(filePath, {
            ".pdf": (path)=>new langchain_document_loaders_fs_pdf__WEBPACK_IMPORTED_MODULE_3__.PDFLoader(path),
            ".docx": (path)=>new langchain_document_loaders_fs_docx__WEBPACK_IMPORTED_MODULE_5__.DocxLoader(path),
            ".txt": (path)=>new langchain_document_loaders_fs_text__WEBPACK_IMPORTED_MODULE_6__.TextLoader(path)
        });
        const rawDocs = await directoryLoader.load();
        // Split the PDF documents into smaller chunks
        const textSplitter = new langchain_text_splitter__WEBPACK_IMPORTED_MODULE_0__.RecursiveCharacterTextSplitter({
            chunkSize: Number(chunkSize),
            chunkOverlap: Number(overlapSize)
        });
        const docs = await textSplitter.splitDocuments(rawDocs);
        // OpenAI embeddings for the document chunks
        const embeddings = new langchain_embeddings_openai__WEBPACK_IMPORTED_MODULE_1__.OpenAIEmbeddings({
            apiKey: openAIapiKey
        });
        // Get the Pinecone index with the given name
        const index = pinecone.Index(targetIndex);
        // Store the document chunks in Pinecone with their embeddings
        await langchain_vectorstores_pinecone__WEBPACK_IMPORTED_MODULE_2__.PineconeStore.fromDocuments(docs, embeddings, {
            pineconeIndex: index,
            namespace: namespaceName,
            textKey: "text"
        });
        // Delete the PDF, DOCX and TXT files
        const filesToDelete = fs__WEBPACK_IMPORTED_MODULE_7___default().readdirSync(filePath).filter((file)=>file.endsWith(".pdf") || file.endsWith(".docx") || file.endsWith(".txt"));
        filesToDelete.forEach((file)=>{
            fs__WEBPACK_IMPORTED_MODULE_7___default().unlinkSync(`${filePath}/${file}`);
        });
        res.status(200).json({
            message: "Data ingestion complete"
        });
    } catch (error) {
        console.log("error", error);
        res.status(500).json({
            error: "Failed to ingest your data"
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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
var __webpack_exports__ = (__webpack_exec__(3810));
module.exports = __webpack_exports__;

})();