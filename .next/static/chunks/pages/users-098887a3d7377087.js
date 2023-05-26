(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[892],{4964:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users",function(){return t(8484)}])},792:function(e,r,t){"use strict";var o=t(5893),i=t(6886);let a=e=>{let{title:r,subtitle:t}=e;return(0,o.jsxs)(i.ZP,{item:!0,xs:12,children:[r,t||null]})};r.Z=a},9550:function(e,r,t){"use strict";var o=t(2734),i=t(5026);let a=()=>{let e=(0,o.Z)();return{primaryFilled:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main},primaryLight:{color:e.palette.primary.main,backgroundColor:(0,i.E)(e.palette.primary.main,.16)},secondaryFilled:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main},secondaryLight:{color:e.palette.secondary.main,backgroundColor:(0,i.E)(e.palette.secondary.main,.16)},successFilled:{color:e.palette.success.contrastText,backgroundColor:e.palette.success.main},successLight:{color:e.palette.success.main,backgroundColor:(0,i.E)(e.palette.success.main,.16)},errorFilled:{color:e.palette.error.contrastText,backgroundColor:e.palette.error.main},errorLight:{color:e.palette.error.main,backgroundColor:(0,i.E)(e.palette.error.main,.16)},warningFilled:{color:e.palette.warning.contrastText,backgroundColor:e.palette.warning.main},warningLight:{color:e.palette.warning.main,backgroundColor:(0,i.E)(e.palette.warning.main,.16)},infoFilled:{color:e.palette.info.contrastText,backgroundColor:e.palette.info.main},infoLight:{color:e.palette.info.main,backgroundColor:(0,i.E)(e.palette.info.main,.16)}}};r.Z=a},8484:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return ev}});var o=t(5893),i=t(7294);t(1664);var a=t(6886),n=t(3795),l=t(5861),s=t(792),d=t(3366),c=t(7462),p=t(6010),u=t(4780),m=t(7579),x=t(8216),h=t(9964),f=t(6628),g=t(629),Z=t(1657),v=t(1496),b=t(1588),w=t(4867);function y(e){return(0,w.Z)("MuiDialog",e)}let C=(0,b.Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),k=(0,i.createContext)({});var j=t(4808),W=t(2734);let S=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],D=(0,v.ZP)(j.Z,{name:"MuiDialog",slot:"Backdrop",overrides:(e,r)=>r.backdrop})({zIndex:-1}),M=e=>{let{classes:r,scroll:t,maxWidth:o,fullWidth:i,fullScreen:a}=e,n={root:["root"],container:["container",`scroll${(0,x.Z)(t)}`],paper:["paper",`paperScroll${(0,x.Z)(t)}`,`paperWidth${(0,x.Z)(String(o))}`,i&&"paperFullWidth",a&&"paperFullScreen"]};return(0,u.Z)(n,y,r)},P=(0,v.ZP)(h.Z,{name:"MuiDialog",slot:"Root",overridesResolver:(e,r)=>r.root})({"@media print":{position:"absolute !important"}}),N=(0,v.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.container,r[`scroll${(0,x.Z)(t.scroll)}`]]}})(({ownerState:e})=>(0,c.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===e.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===e.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),A=(0,v.ZP)(g.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.paper,r[`scrollPaper${(0,x.Z)(t.scroll)}`],r[`paperWidth${(0,x.Z)(String(t.maxWidth))}`],t.fullWidth&&r.paperFullWidth,t.fullScreen&&r.paperFullScreen]}})(({theme:e,ownerState:r})=>(0,c.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===r.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===r.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!r.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===r.maxWidth&&{maxWidth:"px"===e.breakpoints.unit?Math.max(e.breakpoints.values.xs,444):`${e.breakpoints.values.xs}${e.breakpoints.unit}`,[`&.${C.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},r.maxWidth&&"xs"!==r.maxWidth&&{maxWidth:`${e.breakpoints.values[r.maxWidth]}${e.breakpoints.unit}`,[`&.${C.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[r.maxWidth]+64)]:{maxWidth:"calc(100% - 64px)"}}},r.fullWidth&&{width:"calc(100% - 64px)"},r.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${C.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),T=i.forwardRef(function(e,r){let t=(0,Z.Z)({props:e,name:"MuiDialog"}),a=(0,W.Z)(),n={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{"aria-describedby":l,"aria-labelledby":s,BackdropComponent:u,BackdropProps:x,children:h,className:v,disableEscapeKeyDown:b=!1,fullScreen:w=!1,fullWidth:y=!1,maxWidth:C="sm",onBackdropClick:j,onClose:T,open:R,PaperComponent:F=g.Z,PaperProps:_={},scroll:E="paper",TransitionComponent:B=f.Z,transitionDuration:$=n,TransitionProps:L}=t,Y=(0,d.Z)(t,S),I=(0,c.Z)({},t,{disableEscapeKeyDown:b,fullScreen:w,fullWidth:y,maxWidth:C,scroll:E}),O=M(I),H=i.useRef(),X=e=>{H.current=e.target===e.currentTarget},G=e=>{H.current&&(H.current=null,j&&j(e),T&&T(e,"backdropClick"))},z=(0,m.Z)(s),K=i.useMemo(()=>({titleId:z}),[z]);return(0,o.jsx)(P,(0,c.Z)({className:(0,p.Z)(O.root,v),closeAfterTransition:!0,components:{Backdrop:D},componentsProps:{backdrop:(0,c.Z)({transitionDuration:$,as:u},x)},disableEscapeKeyDown:b,onClose:T,open:R,ref:r,onClick:G,ownerState:I},Y,{children:(0,o.jsx)(B,(0,c.Z)({appear:!0,in:R,timeout:$,role:"presentation"},L,{children:(0,o.jsx)(N,{className:(0,p.Z)(O.container),onMouseDown:X,ownerState:I,children:(0,o.jsx)(A,(0,c.Z)({as:F,elevation:24,role:"dialog","aria-describedby":l,"aria-labelledby":z},_,{className:(0,p.Z)(O.paper,_.className),ownerState:I,children:(0,o.jsx)(k.Provider,{value:K,children:h})}))})}))}))});function R(e){return(0,w.Z)("MuiDialogActions",e)}(0,b.Z)("MuiDialogActions",["root","spacing"]);let F=["className","disableSpacing"],_=e=>{let{classes:r,disableSpacing:t}=e;return(0,u.Z)({root:["root",!t&&"spacing"]},R,r)},E=(0,v.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,!t.disableSpacing&&r.spacing]}})(({ownerState:e})=>(0,c.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),B=i.forwardRef(function(e,r){let t=(0,Z.Z)({props:e,name:"MuiDialogActions"}),{className:i,disableSpacing:a=!1}=t,n=(0,d.Z)(t,F),l=(0,c.Z)({},t,{disableSpacing:a}),s=_(l);return(0,o.jsx)(E,(0,c.Z)({className:(0,p.Z)(s.root,i),ownerState:l,ref:r},n))});function $(e){return(0,w.Z)("MuiDialogContent",e)}function L(e){return(0,w.Z)("MuiDialogTitle",e)}(0,b.Z)("MuiDialogContent",["root","dividers"]);let Y=(0,b.Z)("MuiDialogTitle",["root"]),I=["className","dividers"],O=e=>{let{classes:r,dividers:t}=e;return(0,u.Z)({root:["root",t&&"dividers"]},$,r)},H=(0,v.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,t.dividers&&r.dividers]}})(({theme:e,ownerState:r})=>(0,c.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},r.dividers?{padding:"16px 24px",borderTop:`1px solid ${(e.vars||e).palette.divider}`,borderBottom:`1px solid ${(e.vars||e).palette.divider}`}:{[`.${Y.root} + &`]:{paddingTop:0}})),X=i.forwardRef(function(e,r){let t=(0,Z.Z)({props:e,name:"MuiDialogContent"}),{className:i,dividers:a=!1}=t,n=(0,d.Z)(t,I),l=(0,c.Z)({},t,{dividers:a}),s=O(l);return(0,o.jsx)(H,(0,c.Z)({className:(0,p.Z)(s.root,i),ownerState:l,ref:r},n))});function G(e){return(0,w.Z)("MuiDialogContentText",e)}(0,b.Z)("MuiDialogContentText",["root"]);let z=["children","className"],K=e=>{let{classes:r}=e,t=(0,u.Z)({root:["root"]},G,r);return(0,c.Z)({},r,t)},U=(0,v.ZP)(l.Z,{shouldForwardProp:e=>(0,v.FO)(e)||"classes"===e,name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,r)=>r.root})({}),q=i.forwardRef(function(e,r){let t=(0,Z.Z)({props:e,name:"MuiDialogContentText"}),{className:i}=t,a=(0,d.Z)(t,z),n=K(a);return(0,o.jsx)(U,(0,c.Z)({component:"p",variant:"body1",color:"text.secondary",ref:r,ownerState:a,className:(0,p.Z)(n.root,i)},t,{classes:n}))}),J=["className","id"],Q=e=>{let{classes:r}=e;return(0,u.Z)({root:["root"]},L,r)},V=(0,v.ZP)(l.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,r)=>r.root})({padding:"16px 24px",flex:"0 0 auto"}),ee=i.forwardRef(function(e,r){let t=(0,Z.Z)({props:e,name:"MuiDialogTitle"}),{className:a,id:n}=t,l=(0,d.Z)(t,J),s=Q(t),{titleId:u=n}=i.useContext(k);return(0,o.jsx)(V,(0,c.Z)({component:"h2",className:(0,p.Z)(s.root,a),ownerState:t,ref:r,variant:"h6",id:u},l))});var er=t(6242),et=t(3321),eo=t(8445),ei=t(3998),ea=t(2224),en=t(1609),el=t(9661),es=t(1796),ed=t(9550);let ec=(0,i.forwardRef)((e,r)=>{let{sx:t,src:i,skin:a,color:n}=e,l=(0,W.Z)(),s=(0,ed.Z)(),d=(e,r)=>"light"===e?{...s["".concat(r,"Light")]}:"light-static"===e?{color:s["".concat(r,"Light")].color,backgroundColor:(0,es.$n)(l.palette[r].main,.88)}:{...s["".concat(r,"Filled")]},c={primary:d(a,"primary"),secondary:d(a,"secondary"),success:d(a,"success"),error:d(a,"error"),warning:d(a,"warning"),info:d(a,"info")};return(0,o.jsx)(el.Z,{ref:r,...e,sx:!i&&a&&n?Object.assign(c[n],t):t})});ec.defaultProps={skin:"filled",color:"primary"};var ep=t(2867),eu=t(7288),em=t(6501),ex=t(381),eh=t.n(ex);let ef=e=>{let{id:r,newAdmin:t,status:a}=e,{getAuthToken:n}=(0,eu.a)(),[l,s]=(0,i.useState)(!1),d=()=>{s(!0)},c=()=>{s(!1)},p=()=>{c(),(0,ep._8)(r).then(e=>{e.error?em.ZP.error("Error while ".concat("active"==a?"Blocking":"Activating"," user with id ").concat(r),{position:"bottom-right"}):(t(!0),em.ZP.success("Successfully ".concat("active"==a?"Blocked":"Activated"," user with id:").concat(r),{position:"bottom-right"}))})};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(ea.Z,{onClick:d,sx:{"& svg":{mr:2}},children:[(0,o.jsx)(en.Z,{icon:"tabler:user-off",fontSize:20}),"active"==a?"Block":"Activate"]}),(0,o.jsxs)(T,{open:l,onClose:c,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,o.jsxs)(ee,{id:"alert-dialog-title",children:["Confirm "," ","active"==a?"Block":"Activate"]}),(0,o.jsx)(X,{children:(0,o.jsxs)(q,{id:"alert-dialog-description",children:["Are you sure you want to ","active"==a?"Block":"Activate"," this user?"]})}),(0,o.jsxs)(B,{children:[(0,o.jsx)(et.Z,{onClick:c,children:"Cancel"}),(0,o.jsx)(et.Z,{onClick:p,autoFocus:!0,children:"active"==a?"Block":"Activate"})]})]})]})},eg=e=>{let[r,t]=(0,i.useState)(!1),[a,n]=(0,i.useState)(!1),{user:s}=(0,eu.a)();return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(er.Z,{children:[(0,o.jsx)(eo.Z,{title:"All Users"}),(0,o.jsx)(ei._,{autoHeight:!0,rows:e.row||[],columns:[{flex:.04,minWidth:50,field:"# ID",renderCell:e=>(0,o.jsx)(l.Z,{variant:"body2",sx:{color:"text.primary"},children:e.row.user.id})},{flex:.12,minWidth:90,field:"Name",renderCell:e=>(0,o.jsxs)(l.Z,{variant:"body2",sx:{color:"text.primary"},children:[e.row.first_name," ",e.row.last_name]})},{flex:.1,minWidth:120,headerName:"userName",field:"userName",renderCell:e=>(0,o.jsx)(l.Z,{variant:"body2",sx:{color:"text.primary"},children:e.row.user.user_name})},{flex:.1,minWidth:120,headerName:"Email",field:"Email",renderCell:e=>(0,o.jsx)(l.Z,{variant:"body2",sx:{color:"text.primary"},children:e.row.user.email})},{flex:.1,minWidth:120,headerName:"Phone",field:"Phone",renderCell:e=>(0,o.jsx)(l.Z,{variant:"body2",sx:{color:"text.primary"},children:e.row.phone_number})},{flex:.06,minWidth:120,headerName:"Gender",field:"Gender",renderCell:e=>(0,o.jsx)(l.Z,{variant:"body2",sx:{color:"text.primary"},children:e.row.gender})},{flex:.06,minWidth:120,headerName:"Streams",field:"Streams",renderCell:e=>(0,o.jsx)(l.Z,{variant:"body2",sx:{color:"text.primary"},children:e.row.user._count.Stream})},{flex:.06,minWidth:120,headerName:"Hearts",field:"Hearts",renderCell:e=>(0,o.jsx)(l.Z,{variant:"body2",sx:{color:"text.primary"},children:e.row.user.hearts})},{flex:.06,minWidth:120,headerName:"Status",field:"Status",renderCell:e=>(0,o.jsx)(l.Z,{variant:"body2",sx:{color:"text.primary"},children:e.row.user.status})},{flex:.08,minWidth:110,field:"Created on",valueGetter:e=>e.row.createdAt,renderCell:e=>(0,o.jsx)(l.Z,{variant:"body2",sx:{color:"text.primary"},children:eh()(e.row.createdAt).format("DD/MM/YYYY")})},{flex:.125,minWidth:200,field:"actions",headerName:"Actions",renderCell:r=>(0,o.jsx)(ef,{id:r.row.user.id,newAdmin:e.newAdmin,status:r.row.user.status})}],disableSelectionOnClick:!0,getRowId:e=>e.id})]})})},eZ=()=>{let[e,r]=(0,i.useState)(null),{getAuthToken:t}=(0,eu.a)(),[d,c]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{(0,ep.AW)().then(e=>{e.error||r(e)})},[]),(0,i.useEffect)(()=>{d&&(0,ep.AW)().then(e=>{c(!1),e.error||r(e)})},[d]),(0,o.jsxs)(a.ZP,{container:!0,spacing:6,children:[(0,o.jsx)(s.Z,{title:(0,o.jsx)(l.Z,{variant:"h5",children:(0,o.jsx)(n.Z,{children:"Users"})}),subtitle:(0,o.jsx)(l.Z,{variant:"body2",children:"This page shows all the users in the system. You can perform all the operations and all other things as well"})}),(0,o.jsx)(a.ZP,{item:!0,xs:12,children:(0,o.jsx)(eg,{row:e,newAdmin:c})})]})};var ev=eZ}},function(e){e.O(0,[885,147,135,998,774,888,179],function(){return e(e.s=4964)}),_N_E=e.O()}]);