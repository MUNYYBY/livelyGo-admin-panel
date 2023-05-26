"use strict";
exports.id = 288;
exports.ids = [288];
exports.modules = {

/***/ 2867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AW": () => (/* binding */ getAllUsers),
/* harmony export */   "Ae": () => (/* binding */ getAllStreams),
/* harmony export */   "T5": () => (/* binding */ API_URL),
/* harmony export */   "_8": () => (/* binding */ BlockUser),
/* harmony export */   "uR": () => (/* binding */ EndStream)
/* harmony export */ });
var axios = __webpack_require__(2167);
//dev url
// export const API_URL = 'http://localhost:4001/api/v1/'
//production url
const API_URL = "http://13.127.232.204:4001/api/v1/";
//async function which get all the users
async function getAllUsers() {
    var config = {
        method: "get",
        url: API_URL + "all_users"
    };
    return axios(config).then((response)=>{
        return response.data.users;
    }).catch((error)=>{
        console.log(error);
        return {
            error: "Some error occured!:" + error
        };
    });
}
//async function which block a certain user
async function BlockUser(userId) {
    var config = {
        method: "post",
        url: API_URL + "block_user?userId=" + userId
    };
    return axios(config).then((response)=>{
        return response.data;
    }).catch((error)=>{
        console.log(error);
        return {
            error: "Some error occured!:" + error
        };
    });
}
//async function which get all the streams
async function getAllStreams() {
    var config = {
        method: "get",
        url: API_URL + "all_streams_admin"
    };
    return axios(config).then((response)=>{
        return response.data.streams;
    }).catch((error)=>{
        console.log(error);
        return {
            error: "Some error occured!:" + error
        };
    });
}
//async function will end a stream
async function EndStream(streamId) {
    var config = {
        method: "post",
        url: API_URL + "end_stream?streamId=" + streamId
    };
    return axios(config).then((response)=>{
        return response.data;
    }).catch((error)=>{
        console.log(error);
        return {
            error: "Some error occured!:" + error
        };
    });
}


/***/ }),

/***/ 5639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* binding */ AuthContext),
  "H": () => (/* binding */ AuthProvider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./Client/request.js
var request = __webpack_require__(2867);
;// CONCATENATED MODULE: ./src/configs/auth.js

/* harmony default export */ const auth = ({
    meEndpoint: "/auth/me",
    adminLoginEndpoint: request/* API_URL */.T5 + "login_admin",
    registerEndpoint: "/jwt/register",
    storageTokenKeyName: "accessToken",
    onTokenExpiration: "logout" // logout | refreshToken
});

;// CONCATENATED MODULE: ./src/context/AuthContext.js
// ** React Imports


// ** Next Import

// ** Axios

// ** Config

// ** Defaults
const defaultProvider = {
    user: null,
    loading: true,
    setUser: ()=>null,
    setLoading: ()=>Boolean,
    login: ()=>Promise.resolve(),
    logout: ()=>Promise.resolve(),
    register: ()=>Promise.resolve()
};
const AuthContext = /*#__PURE__*/ (0,external_react_.createContext)(defaultProvider);
const AuthProvider = ({ children  })=>{
    // ** States
    const [user, setUser] = (0,external_react_.useState)(defaultProvider.user);
    const [loading, setLoading] = (0,external_react_.useState)(defaultProvider.loading);
    // ** Hooks
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        const initAuth = async ()=>{
            setLoading(true);
            const storedToken1 = window.localStorage.getItem(auth.storageTokenKeyName);
            const storedToken2 = JSON.parse(storedToken1);
            const userDataCheck = window.localStorage.getItem("userData");
            console.log(JSON.parse(userDataCheck));
            if (storedToken2 && userDataCheck) {
                setUser(JSON.parse(userDataCheck));
                setLoading(false);
            } else {
                setLoading(false);
                handleLogout();
            }
        };
        initAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // ** Call the following function when and check which type
    // ** Of user is trying to login
    const handleLogin = (params, errorCallback)=>{
        external_axios_default().post(auth.adminLoginEndpoint, {
            email: params.email,
            password: params.password
        }).then(async (response)=>{
            console.log(response.data);
            const res = response.data;
            const userData = {
                id: res.id,
                userName: res.userName,
                name: res.first_name + " " + res.last_name,
                role: "admin"
            };
            const tokenData = {
                token: response.data.token
            };
            window.localStorage.setItem(auth.storageTokenKeyName, JSON.stringify(tokenData));
            window.localStorage.setItem("userData", JSON.stringify(userData));
            const returnUrl = router.query.returnUrl;
            setUser(userData);
            const redirectURL = returnUrl && returnUrl !== "/" ? returnUrl : "/";
            router.replace(redirectURL);
        }).catch((err)=>{
            console.log(err);
            if (errorCallback) errorCallback(err);
        });
    };
    const handleLogout = ()=>{
        setUser(null);
        window.localStorage.removeItem("userData");
        window.localStorage.removeItem(auth.storageTokenKeyName);
        router.push("/login");
    };
    const handleRegister = (params, errorCallback)=>{
        external_axios_default().post(auth.registerEndpoint, params).then((res)=>{
            if (res.data.error) {
                if (errorCallback) errorCallback(res.data.error);
            } else {
                handleLogin({
                    email: params.email,
                    password: params.password
                });
            }
        }).catch((err)=>errorCallback ? errorCallback(err) : null);
    };
    const values = {
        user,
        loading,
        setUser,
        setLoading,
        login: handleLogin,
        logout: handleLogout,
        register: handleRegister
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(AuthContext.Provider, {
        value: values,
        children: children
    });
};



/***/ }),

/***/ 7288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5639);


const useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(src_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__/* .AuthContext */ .V);


/***/ })

};
;