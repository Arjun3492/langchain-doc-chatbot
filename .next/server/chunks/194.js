exports.id = 194;
exports.ids = [194];
exports.modules = {

/***/ 3348:
/***/ ((module) => {

// Exports
module.exports = {
	"loading": "loading-dots_loading__LomzL",
	"spacer": "loading-dots_spacer__nBBvk",
	"blink": "loading-dots_blink__yy72w",
	"loading2": "loading-dots_loading2___zCAu"
};


/***/ }),

/***/ 4391:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function ChunkSizeModal({ open , setOpen  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Root, {
        show: open,
        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
            as: "div",
            className: "relative z-10",
            onClose: setOpen,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "fixed inset-0 z-10 overflow-y-auto",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                            enterTo: "opacity-100 translate-y-0 sm:scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                            leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Panel, {
                                className: "relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mt-3 text-center sm:mt-5",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Title, {
                                                    as: "h3",
                                                    className: "text-base font-semibold leading-6 text-gray-900",
                                                    children: "Chunk size"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mt-2",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "text-sm text-gray-500",
                                                        children: [
                                                            "Values in the range of 500-1,200 tokens are suitable for average-length documents (a few pages) and strike a balance between capturing context and computational efficiency. The default is set to 1,200 tokens, which is a good starting point for most use cases.",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                            "Values in the range of 2,000-4,000 tokens are suitable for long documents (10+ pages). Longer documents are more computationally expensive, but the extra context may result in better responses."
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-5 sm:mt-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            className: "inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                            onClick: ()=>setOpen(false),
                                            children: "Go back to dashboard"
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChunkSizeModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_loading_dots_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3348);
/* harmony import */ var _styles_loading_dots_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_loading_dots_module_css__WEBPACK_IMPORTED_MODULE_1__);


const LoadingDots = ({ color , style ="small" , className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        className: `${className} ${style === "small" ? (_styles_loading_dots_module_css__WEBPACK_IMPORTED_MODULE_1___default().loading2) : (_styles_loading_dots_module_css__WEBPACK_IMPORTED_MODULE_1___default().loading)}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                style: {
                    backgroundColor: color
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                style: {
                    backgroundColor: color
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                style: {
                    backgroundColor: color
                }
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingDots);
LoadingDots.defaultProps = {
    style: "small"
};


/***/ }),

/***/ 8705:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const LoadingState = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "flex items-center justify-center h-screen",
        children: /*#__PURE__*/ _jsx("p", {
            className: "text-5xl font-bold text-white",
            children: "Loading..."
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (LoadingState)));


/***/ }),

/***/ 2410:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function OverlapSizeModal({ open , setOpen  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Root, {
        show: open,
        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
            as: "div",
            className: "relative z-10",
            onClose: setOpen,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "fixed inset-0 z-10 overflow-y-auto",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                            enterTo: "opacity-100 translate-y-0 sm:scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                            leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Panel, {
                                className: "relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mt-3 text-center sm:mt-5",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Title, {
                                                    as: "h3",
                                                    className: "text-base font-semibold leading-6 text-gray-900",
                                                    children: "Overlap size"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mt-2",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "text-sm text-gray-500",
                                                        children: [
                                                            "Regardless of the chunk size, an overlap of 10-20% is generally recommended to capture contextual information at the boundaries.",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                            "If your texts contain important contextual information at the boundaries, or if you want to capture dependencies between adjacent chunks more comprehensively, you can increase the overlap size to 30-50% of the chunk size."
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-5 sm:mt-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            className: "inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                            onClick: ()=>setOpen(false),
                                            children: "Dismiss"
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OverlapSizeModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8457:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_classNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3572);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_classNames__WEBPACK_IMPORTED_MODULE_2__]);
_utils_classNames__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Textarea = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className , ...props }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
        className: (0,_utils_classNames__WEBPACK_IMPORTED_MODULE_2__/* .classNames */ .A)("flex h-20 w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-transparent focus:ring-red-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    });
});
Textarea.displayName = "Textarea";
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Textarea)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3171:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cw": () => (/* reexport safe */ _ChunkSizeModal__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "hX": () => (/* reexport safe */ _OverlapSizeModal__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "xg": () => (/* reexport safe */ _LoadingDots__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _ChunkSizeModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4391);
/* harmony import */ var _LoadingDots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8298);
/* harmony import */ var _LoadingState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8705);
/* harmony import */ var _OverlapSizeModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2410);
/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8457);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ChunkSizeModal__WEBPACK_IMPORTED_MODULE_0__, _OverlapSizeModal__WEBPACK_IMPORTED_MODULE_3__, _TextArea__WEBPACK_IMPORTED_MODULE_4__]);
([_ChunkSizeModal__WEBPACK_IMPORTED_MODULE_0__, _OverlapSizeModal__WEBPACK_IMPORTED_MODULE_3__, _TextArea__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9425:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EX": () => (/* reexport safe */ _useKeys__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "JR": () => (/* reexport safe */ _useNamespaces__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "PD": () => (/* reexport safe */ _useChats__WEBPACK_IMPORTED_MODULE_2__.Z)
/* harmony export */ });
/* harmony import */ var _useNamespaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(607);
/* harmony import */ var _useKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2308);
/* harmony import */ var _useChats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4636);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useChats__WEBPACK_IMPORTED_MODULE_2__]);
_useChats__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4636:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5611);
/* harmony import */ var _libs_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7047);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nanoid__WEBPACK_IMPORTED_MODULE_1__]);
nanoid__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useChats = (namespace)=>{
    const [allConversations, setAllConversations] = (0,_libs_localStorage__WEBPACK_IMPORTED_MODULE_2__/* .useLocalStorage */ ._)("allConversations", {});
    const [allChats, setAllChats] = (0,_libs_localStorage__WEBPACK_IMPORTED_MODULE_2__/* .useLocalStorage */ ._)("allChats", []);
    const chatList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>allChats.filter((chat)=>chat.namespace === namespace), [
        allChats,
        namespace
    ]);
    const [chatNames, setChatNames] = (0,_libs_localStorage__WEBPACK_IMPORTED_MODULE_2__/* .useLocalStorage */ ._)(`chatNames-${namespace}`, {});
    const [selectedChatId, setSelectedChatId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const getConversation = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((chatId)=>{
        return allConversations[chatId] || {
            messages: [],
            history: []
        };
    }, [
        allConversations
    ]);
    function updateConversation(chatId, conversation) {
        const updatedConversations = {
            ...allConversations,
            [chatId]: conversation
        };
        setAllConversations(updatedConversations);
    }
    function updateChatName(chatId, newChatName) {
        const updatedChatNames = {
            ...chatNames,
            [chatId]: newChatName
        };
        setChatNames(updatedChatNames);
    }
    function createChat() {
        const newChatId = (0,nanoid__WEBPACK_IMPORTED_MODULE_1__.nanoid)();
        const updatedAllChats = [
            ...allChats,
            {
                namespace,
                chatId: newChatId
            }
        ];
        setAllChats(updatedAllChats);
        const initialConversation = {
            messages: [
                {
                    message: "Hi, what would you like to know about these documents?",
                    type: "apiMessage"
                }
            ],
            history: []
        };
        updateConversation(newChatId, initialConversation);
        return newChatId;
    }
    function deleteChat(chatIdToDelete) {
        const updatedAllChats = allChats.filter((chat)=>chat.chatId !== chatIdToDelete);
        setAllChats(updatedAllChats);
        if (chatIdToDelete === selectedChatId) {
            const deletedChatIndex = allChats.findIndex((chat)=>chat.chatId === chatIdToDelete);
            let newSelectedChatId = "";
            if (updatedAllChats[deletedChatIndex]) {
                newSelectedChatId = updatedAllChats[deletedChatIndex].chatId;
            } else if (deletedChatIndex > 0) {
                newSelectedChatId = updatedAllChats[deletedChatIndex - 1].chatId;
            }
            setSelectedChatId(newSelectedChatId);
        }
    }
    const filteredChatList = chatList.filter((chat)=>chat.namespace === namespace);
    return {
        chatList,
        selectedChatId,
        setSelectedChatId,
        createChat,
        deleteChat,
        chatNames,
        updateChatName,
        filteredChatList,
        getConversation,
        updateConversation
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useChats);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ hooks_useKeys)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./libs/localStorageKeys.ts
const setItem = (key, value)=>{
    if (false) {}
};
const getItem = (key)=>{
    if (false) {}
    return null;
};

;// CONCATENATED MODULE: ./hooks/useKeys.ts


const useKeys = ()=>{
    const [keys, setKeys] = (0,external_react_.useState)({
        openAIapiKey: getItem("openAIapiKey") || "",
        pineconeApiKey: getItem("pineconeApiKey") || "",
        pineconeEnvironment: getItem("pineconeEnvironment") || "",
        pineconeIndexName: getItem("pineconeIndexName") || ""
    });
    const setKey = (keyName, keyValue)=>{
        setKeys((prev)=>({
                ...prev,
                [keyName]: keyValue
            }));
    };
    const setOpenAIapiKey = (value)=>setKey("openAIapiKey", value);
    const setPineconeApiKey = (value)=>setKey("pineconeApiKey", value);
    const setPineconeEnvironment = (value)=>setKey("pineconeEnvironment", value);
    const setPineconeIndexName = (value)=>setKey("pineconeIndexName", value);
    const handleKeyChange = (storageKey, keyValue)=>{
        setItem(storageKey, keyValue);
        setKey(storageKey, keyValue);
    };
    const handleSubmitKeys = ()=>{
        for (const [storageKey, keyValue] of Object.entries(keys)){
            handleKeyChange(storageKey, keyValue);
        }
    };
    return {
        ...keys,
        setOpenAIapiKey,
        setPineconeApiKey,
        setPineconeEnvironment,
        setPineconeIndexName,
        handleKeyChange,
        handleSubmitKeys
    };
};
/* harmony default export */ const hooks_useKeys = (useKeys);


/***/ }),

/***/ 607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


const useNamespaces = (pineconeApiKey, pineconeIndexName, pineconeEnvironment)=>{
    const [namespaces, setNamespaces] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [selectedNamespace, setSelectedNamespace] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [isLoadingNamespaces, setIsLoadingNamespaces] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const fetchNamespaces = async ()=>{
            try {
                const response = await fetch(`/document-chatbot/api/getNamespaces`, {
                    headers: {
                        "X-Api-Key": pineconeApiKey,
                        "X-Index-Name": pineconeIndexName,
                        "X-Environment": pineconeEnvironment
                    }
                });
                const data = await response.json();
                if (response.ok) {
                    setNamespaces(data);
                    setIsLoadingNamespaces(false);
                    if (data.length > 0) {
                        setSelectedNamespace(data[0]);
                    }
                } else {
                    console.error(data.error);
                }
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchNamespaces();
    }, [
        pineconeApiKey,
        pineconeIndexName,
        pineconeEnvironment
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const namespaceFromUrl = router.query.namespace;
        if (typeof namespaceFromUrl === "string") {
            setSelectedNamespace(namespaceFromUrl);
        }
    }, [
        router.query.namespace
    ]);
    return {
        namespaces,
        selectedNamespace,
        setSelectedNamespace,
        isLoadingNamespaces
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useNamespaces);


/***/ }),

/***/ 7047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ useLocalStorage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{
        if (false) {}
        return initialValue;
    });
    const setValue = (value)=>{
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    };
    return [
        storedValue,
        setValue
    ];
}


/***/ }),

/***/ 3572:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ classNames)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8097);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([tailwind_merge__WEBPACK_IMPORTED_MODULE_1__]);
tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function classNames(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.twMerge)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;