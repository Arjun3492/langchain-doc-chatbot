"use strict";
(() => {
var exports = {};
exports.id = 170;
exports.ids = [170];
exports.modules = {

/***/ 360:
/***/ ((module) => {

module.exports = import("langchain/chains");;

/***/ }),

/***/ 4405:
/***/ ((module) => {

module.exports = import("langchain/embeddings/openai");;

/***/ }),

/***/ 1561:
/***/ ((module) => {

module.exports = import("langchain/llms/openai");;

/***/ }),

/***/ 3244:
/***/ ((module) => {

module.exports = import("langchain/vectorstores/pinecone");;

/***/ }),

/***/ 9011:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var langchain_vectorstores_pinecone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3244);
/* harmony import */ var _utils_makechain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8661);
/* harmony import */ var _utils_pinecone_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4022);
/* harmony import */ var langchain_embeddings_openai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4405);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([langchain_vectorstores_pinecone__WEBPACK_IMPORTED_MODULE_0__, _utils_makechain__WEBPACK_IMPORTED_MODULE_1__, langchain_embeddings_openai__WEBPACK_IMPORTED_MODULE_3__]);
([langchain_vectorstores_pinecone__WEBPACK_IMPORTED_MODULE_0__, _utils_makechain__WEBPACK_IMPORTED_MODULE_1__, langchain_embeddings_openai__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




async function handler(req, res) {
    const { question , history , selectedNamespace , returnSourceDocuments , modelTemperature  } = req.body;
    const openAIapiKey = req.headers["x-openai-key"];
    const pineconeApiKey = req.headers["x-pinecone-key"];
    const pineconeEnvironment = req.headers["x-pinecone-environment"];
    const targetIndex = req.headers["x-pinecone-index-name"];
    const pinecone = await (0,_utils_pinecone_client__WEBPACK_IMPORTED_MODULE_2__/* .initPinecone */ .R)(pineconeApiKey, pineconeEnvironment);
    if (!openAIapiKey) {
        return res.status(500).json({
            error: "OpenAI API key not set"
        });
    }
    if (req.method !== "POST") {
        res.status(405).json({
            error: "Method not allowed"
        });
        return;
    }
    if (!question) {
        return res.status(400).json({
            message: "No question in the request"
        });
    }
    const sanitizedQuestion = question.trim().replaceAll("\n", " ");
    try {
        const index = pinecone.Index(targetIndex);
        const vectorStore = await langchain_vectorstores_pinecone__WEBPACK_IMPORTED_MODULE_0__.PineconeStore.fromExistingIndex(new langchain_embeddings_openai__WEBPACK_IMPORTED_MODULE_3__.OpenAIEmbeddings({
            apiKey: openAIapiKey
        }), {
            pineconeIndex: index,
            textKey: "text",
            namespace: selectedNamespace
        });
        const chain = (0,_utils_makechain__WEBPACK_IMPORTED_MODULE_1__/* .makeChain */ .F)(vectorStore, returnSourceDocuments, modelTemperature, openAIapiKey);
        const response = await chain.call({
            question: sanitizedQuestion,
            chat_history: history || []
        });
        res.status(200).json({
            text: response.text,
            sourceDocuments: response.sourceDocuments
        });
    } catch (error) {
        console.log("error", error);
        res.status(500).json({
            error: error.message || "Something went wrong"
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8661:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ makeChain)
/* harmony export */ });
/* harmony import */ var langchain_llms_openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1561);
/* harmony import */ var langchain_chains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(360);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([langchain_llms_openai__WEBPACK_IMPORTED_MODULE_0__, langchain_chains__WEBPACK_IMPORTED_MODULE_1__]);
([langchain_llms_openai__WEBPACK_IMPORTED_MODULE_0__, langchain_chains__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const CONDENSE_PROMPT = `Given the chat history and a follow-up question, rephrase the follow-up question to be a standalone question that encompasses all necessary context from the chat history.

Chat History:
{chat_history}

Follow-up input: {question}

Make sure your standalone question is self-contained, clear, and specific. Rephrased standalone question:`;
// --------------------------------------------------
const QA_PROMPT = `You are an intelligent AI assistant designed to interpret and answer questions and instructions based on specific provided documents. The context from these documents has been processed and made accessible to you. 

Your mission is to generate answers that are accurate, succinct, and comprehensive, drawing upon the information contained in the context of the documents. If the answer isn't readily found in the documents, you should make use of your training data and understood context to infer and provide the most plausible response.

You are also capable of evaluating, comparing and providing opinions based on the content of these documents. Hence, if asked to compare or analyze the documents, use your AI understanding to deliver an insightful response.

If the query isn't related to the document context, kindly inform the user that your primary task is to answer questions specifically related to the document context.

Here is the context from the documents:

Context: {context}

Here is the user's question:

Question: {question}

Provide your response in markdown format.`;
// Creates a ConversationalRetrievalQAChain object that uses an OpenAI model and a PineconeStore vectorstore
const makeChain = (vectorstore, returnSourceDocuments, modelTemperature, openAIapiKey)=>{
    const model = new langchain_llms_openai__WEBPACK_IMPORTED_MODULE_0__.OpenAI({
        temperature: modelTemperature,
        modelName: "gpt-3.5-turbo",
        openAIApiKey: openAIapiKey
    });
    // Configures the chain to use the QA_PROMPT and CONDENSE_PROMPT prompts and to not return the source documents
    const chain = langchain_chains__WEBPACK_IMPORTED_MODULE_1__.ConversationalRetrievalQAChain.fromLLM(model, vectorstore.asRetriever(), {
        qaTemplate: QA_PROMPT,
        questionGeneratorTemplate: CONDENSE_PROMPT,
        returnSourceDocuments
    });
    return chain;
};

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
var __webpack_exports__ = (__webpack_exec__(9011));
module.exports = __webpack_exports__;

})();