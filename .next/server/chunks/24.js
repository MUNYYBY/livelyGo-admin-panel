"use strict";
exports.id = 24;
exports.ids = [24];
exports.modules = {

/***/ 2024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2120);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_core_hooks_useBgColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9550);
// ** React Imports


// ** MUI Imports


// ** Hooks Imports

const Avatar = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    // ** Props
    const { sx , src , skin , color  } = props;
    // ** Hook
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const bgColors = (0,src_core_hooks_useBgColor__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const getAvatarStyles = (skin, skinColor)=>{
        let avatarStyles;
        if (skin === "light") {
            avatarStyles = {
                ...bgColors[`${skinColor}Light`]
            };
        } else if (skin === "light-static") {
            avatarStyles = {
                color: bgColors[`${skinColor}Light`].color,
                backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.lighten)(theme.palette[skinColor].main, 0.88)
            };
        } else {
            avatarStyles = {
                ...bgColors[`${skinColor}Filled`]
            };
        }
        return avatarStyles;
    };
    const colors = {
        primary: getAvatarStyles(skin, "primary"),
        secondary: getAvatarStyles(skin, "secondary"),
        success: getAvatarStyles(skin, "success"),
        error: getAvatarStyles(skin, "error"),
        warning: getAvatarStyles(skin, "warning"),
        info: getAvatarStyles(skin, "info")
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2___default()), {
        ref: ref,
        ...props,
        sx: !src && skin && color ? Object.assign(colors[color], sx) : sx
    });
});
Avatar.defaultProps = {
    skin: "filled",
    color: "primary"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Avatar);


/***/ })

};
;