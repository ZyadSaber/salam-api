"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[9],{3224:(n,e,t)=>{t.d(e,{Z:()=>b});var a=t(2791);const o=()=>{const n=(0,a.useRef)(),e=(0,a.useCallback)((async()=>{var e;return await(null===(e=n.current)||void 0===e?void 0:e.handleOpen())}),[n]);return{PDFRef:n,handleOpenModal:e}};var i=t(6314),r=t(184);const s=(n,e)=>{let{reportName:t,params:o}=n;const[s,l]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{l(!0)}),[]),c=(0,a.useCallback)((()=>{l(!1)}),[]);(0,a.useImperativeHandle)(e,(()=>({handleOpen:d})));const u="http://144.24.209.19:9090/system_pdf_generate/".concat(t,"?").concat(new URLSearchParams(o));return(0,r.jsx)(i.Z,{label:"PDF Viewer",visible:s,onClose:c,noFooter:!0,width:"90%",height:"80%",children:(0,r.jsx)("object",{data:u,width:"100%",height:"100%",children:"Your browser does not support pdf files."})})},l=(0,a.memo)((0,a.forwardRef)(s));var d=t(890);const c=n=>{let{visible:e,onClose:t,onConfirm:o,message:s}=n;const l=(0,a.useCallback)((()=>{o(),t()}),[t,o]);return(0,r.jsx)(i.Z,{label:"cnfrmtn",visible:e,onClose:t,width:"25%",onOK:l,submitTitle:"cnfrm",children:s||"Are you want to continue ?"})},u=(0,a.memo)(c);var h=t(6903),p=t(7262);const m=(n,e)=>{let{api:t,postApi:s,columns:c,ModalContent:m,onClick:b,fetchOnFirstRun:g=!1,params:x,checkForParams:f=!1,modalWidth:v="60%",printProps:w,reportName:C,...Z}=n;const{data:k,runFetch:j,loading:_,setData:T,resetData:F}=(0,d.Z)({link:t,fetchOnFirstRun:g,params:x,checkForParams:f}),{onSaveAndInsertion:S}=(0,p.Z)({api:s,runFetch:j}),{PDFRef:y,handleOpenModal:R}=o(),[O,A]=(0,a.useState)({}),[P,I]=(0,a.useState)(!1),[N,D]=(0,a.useState)(!1),E=(0,a.useCallback)((()=>{A({query_status:"n"}),I(!0)}),[A]),q=(0,a.useCallback)((()=>{A({...O,query_status:"u"}),I(!0)}),[O,A]),z=(0,a.useCallback)((()=>{I(!1)}),[]),B=(0,a.useCallback)((()=>{D(!1)}),[]),M=(0,a.useCallback)((()=>{D(!0)}),[]),L=(0,a.useMemo)((()=>null===k||void 0===k?void 0:k.data),[null===k||void 0===k?void 0:k.data]),K=(0,a.useCallback)((()=>{O&&R()}),[R,O]);return(0,a.useImperativeHandle)(e,(()=>({runFetch:j,setTableData:T,resetTableData:F,getCurrentDataSource:()=>L}))),(0,r.jsxs)(r.Fragment,{children:[m&&(0,r.jsx)(i.Z,{visible:P,onClose:z,hideCloseButton:!0,hideSaveButton:!0,label:"dtls",noFooter:!0,width:v,children:(0,r.jsx)(m,{onClose:z,selectedRow:O,refreshTable:j})}),(0,r.jsx)(u,{visible:N,onConfirm:()=>{S({...O,query_status:"d"})},onClose:B}),(0,r.jsx)(l,{ref:y,reportName:C,params:w}),(0,r.jsx)(h.Z,{dataSource:null===k||void 0===k?void 0:k.data,columns:c,onAdd:E,onEdit:q,onPrint:K,onDelete:M,onSelectedRow:n=>{A(n),b&&b(n)},loading:_,...Z})]})},b=(0,a.memo)((0,a.forwardRef)(m))},7262:(n,e,t)=>{t.d(e,{Z:()=>i});var a=t(2791),o=t(4082);const i=n=>{let{api:e="",runFetch:t}=n;const{setRow:i}=(0,o.Z)({link:e,additionalFunctionToRun:t,method:"POST"}),{setRow:r}=(0,o.Z)({link:e,additionalFunctionToRun:t,method:"PUT"}),{setRow:s}=(0,o.Z)({link:e,additionalFunctionToRun:t,method:"Delete"});return{onSaveAndInsertion:(0,a.useCallback)((n=>{"n"===n.query_status?i(n):"u"===n.query_status?r(n):"d"===n.query_status&&s(n)}),[i,r,s])}}},1489:(n,e,t)=>{t.d(e,{Z:()=>s});var a=t(2791),o=t(81),i=t(184);const r=n=>{let{onOK:e,width:t="40%",label:a="sv",...r}=n;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(o.Z,{onClick:e,label:"sv",width:t,...r})})},s=(0,a.memo)(r)},4826:(n,e,t)=>{t.d(e,{Z:()=>p});var a,o,i=t(2791),r=t(9230),s=t(168),l=t(225);const d=l.Z.div(a||(a=(0,s.Z)(["\n  position: relative;\n  margin: ",";\n  padding: ",";\n  height: ",";\n  width: ",";\n"])),(n=>{let{margin:e}=n;return e}),(n=>{let{padding:e}=n;return e||"5px 0"}),(n=>{let{height:e}=n;return e}),(n=>{let{width:e}=n;return e})),c=l.Z.label(o||(o=(0,s.Z)(["\n  position: absolute;\n  top: ",";\n  left: 10px;\n  color: #999;\n  padding: 0;\n  margin: 0;\n  transition: top 0.3s, font-size 0.3s, background-color 0.5s;\n\n  ","\n"])),(n=>{let{top:e}=n;return e||"5px"}),(n=>{let{hasContent:e}=n;return e&&"\n    top: -5px;\n    font-size: 12px;\n    color: #007bff;\n    font-size: 14px;\n    background-color: white;\n  "}));var u=t(184);const h=n=>{let{hasContent:e,name:t,label:a="",height:o,width:i="200px",padding:s,margin:l,children:h,hidden:p,top:m}=n;const{t:b}=(0,r.$G)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(d,{width:i,height:o,margin:l,padding:s,hidden:p,children:[h,(0,u.jsx)(c,{top:m,htmlFor:t,hasContent:e,children:b(a)})]})})},p=(0,i.memo)(h)},3388:(n,e,t)=>{t.d(e,{Z:()=>i});var a=t(2791);const o=n=>{const e=(0,a.useRef)();return(0,a.useEffect)((()=>{e.current=n})),e.current},i=n=>{let{initialValues:e}=n;const[t,i]=(0,a.useState)(e),r=(0,a.useRef)(!1),s=o(e),l=(0,a.useCallback)((()=>!Object.is(JSON.stringify(s),JSON.stringify(e))),[e,s]);(0,a.useEffect)((()=>{l()&&i({...e})}),[l,e]);const d=(0,a.useCallback)((()=>{r.current=!1,i((()=>e))}),[e]);(0,a.useEffect)((()=>d),[]);const c=(0,a.useCallback)((n=>{const{name:e,value:a}=n;i({...t,[e]:a})}),[t]),u=(0,a.useCallback)((n=>{i({...t,...n})}),[t]),h=(0,a.useCallback)((n=>{i({...t,[n.name]:n.value,[n.selectLabelName]:n.label})}),[t]),p=(0,a.useCallback)((n=>{let{name:e,value:a}=n;i({...t,[e]:[...t[e],a]})}),[t]);return{state:t,onChange:c,resetForm:d,handleRootState:i,handleSelectWithLabelChange:h,handleArrayChange:p,handleMultiInput:u}}},4082:(n,e,t)=>{t.d(e,{Z:()=>s});var a=t(2791),o=t(1227),i=t(399),r=t(8382);const s=n=>{let{link:e="",noAuthorization:t=!1,additionalFunctionToRun:s,runOnSuccess:l,runOnFail:d,method:c="POST"}=n;const u=(0,r.p)(),h="http://144.24.209.19:9090/api/".concat(i.Z[e]),[p,m]=(0,a.useState)(),{authorization:b}=(0,o.Z)(),g=(0,a.useCallback)((async n=>{if(b||t){const t={method:c,headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(b)},body:JSON.stringify(n)};try{const n=await fetch(h,t),e=await n.json();return"success"===e.response?(u({position:"top-right",title:"Success",description:"".concat(e.response),status:"success",duration:5e3,isClosable:!0}),l&&l()):(u({position:"top-right",title:"Error",description:"".concat(e.message),status:"error",duration:9e3,isClosable:!0}),d&&d()),m(e),s&&s(),e}catch(e){}}}),[s,b,c,t,d,l,u,h]);return{success:p,setRow:(0,a.useCallback)((n=>{g(n)}),[g])}}},1561:(n,e,t)=>{t.d(e,{Z:()=>i});var a=t(2791),o=t(8382);const i=n=>{let{validateFelids:e,functionToRun:t,stateToValidate:i}=n;const r=(0,o.p)();return(0,a.useCallback)((()=>{let n=[];e.forEach((e=>{void 0===i[e]||i[e]||n.push(e)})),0!==n.length?r({position:"top-right",title:"Error",description:"\n      Make sure to fill this required fields\n      ".concat(n.toString(),"\n      "),status:"info",duration:5e3,isClosable:!0}):t()}),[t,i,r,e])}},9457:(n,e,t)=>{t.d(e,{Z:()=>h});var a,o=t(2791),i=t(4826),r=t(168),s=t(225),l=t(4360);const d=s.Z.input(a||(a=(0,r.Z)(["\n  width: 100%;\n  padding: 5px 7px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n\n  transition: border-color 0.3s;\n  box-sizing: border-box;\n  /* ","; */\n\n  &:focus {\n    outline: none !important;\n    border-color: #007bff;\n  }\n"])),(n=>{let{required:e}=n;return e&&"background-color:  ".concat(l.w.required)}));var c=t(184);const u=n=>{let{disabled:e,value:t,name:a,label:r="",onChange:s,height:l,width:u="200px",type:h="text",placeHolder:p,padding:m,margin:b,className:g,required:x,...f}=n;const v=(0,o.useCallback)((n=>{s({name:a,value:n.target.value})}),[a,s]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i.Z,{label:r,hasContent:t&&t.toString(),margin:b,padding:m,height:l,width:u,children:(0,c.jsx)(d,{placeholder:p,disabled:e,required:x,onChange:v,width:"100%",className:g,value:t,type:h,...f})})})},h=(0,o.memo)(u)},6314:(n,e,t)=>{t.d(e,{Z:()=>w});var a,o,i,r,s,l=t(2791),d=t(81),c=t(2125),u=t(168),h=t(225);const p=h.Z.div(a||(a=(0,u.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 2;\n"]))),m=h.Z.div(o||(o=(0,u.Z)(["\n  /* position: relative;\n    margin: 5% auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: ",";\n    height: ",";\n    background-color: white;\n    border-radius: 15px; */\n  /* max-height: 90vh;\n\tmax-width: 500px; */\n  width: ",";\n  height: ",";\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #fff;\n  border-radius: 15px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 15px 30px 0 rgba(#000, 0.25);\n  @media (max-width: 600px) {\n    width: 90%;\n  }\n"])),(n=>{let{width:e}=n;return e}),(n=>{let{height:e}=n;return e}),(n=>{let{width:e}=n;return e}),(n=>{let{height:e}=n;return e})),b=h.Z.div(i||(i=(0,u.Z)(["\n  padding: 15px 32px;\n  border-bottom: 1px solid #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),g=h.Z.div(r||(r=(0,u.Z)(["\n  margin: 10px 15px;\n  overflow-y: auto;\n  height: 100%;\n"]))),x=h.Z.div(s||(s=(0,u.Z)(['\n  padding: 35px 32px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  border-top: 1px solid #ddd;\n  gap: 12px;\n  position: relative;\n  &:after {\n    content: "";\n    display: block;\n    position: absolute;\n    top: -51px;\n    left: 24px;\n    right: 24px;\n    height: 50px;\n    flex-shrink: 0;\n    background-image: linear-gradient(to top, rgba(#fff, 0.75), transparent);\n    pointer-events: none;\n  }\n'])));var f=t(184);const v=n=>{let{children:e,visible:t=!1,label:a,onClose:o,onOK:i,submitTitle:r="smbt",width:s="90%",height:l="auto",hideSaveButton:u=!1,hideCloseButton:h=!1,noFooter:v=!1}=n;return(0,f.jsx)(f.Fragment,{children:t&&(0,f.jsx)(p,{hidden:!t,children:(0,f.jsxs)(m,{width:s,height:l,children:[(0,f.jsxs)(b,{children:[(0,f.jsx)(c.Z,{children:a}),(0,f.jsx)(d.Z,{label:"\xd7",width:"5%",backGround:"none",margin:"0",padding:"0","data-dismiss":"modal",onClick:o,fontWeight:"19px"})]}),(0,f.jsx)(g,{children:e}),!v&&(0,f.jsxs)(x,{hidden:v,children:[!u&&(0,f.jsx)(d.Z,{onClick:i,label:r,hidden:u,width:"20%",margin:"0"}),!h&&(0,f.jsx)(d.Z,{onClick:o,label:"cls",hidden:h,width:"20%",backGround:"red",margin:"0"})]})]})})})},w=(0,l.memo)(v)},4009:(n,e,t)=>{t.r(e),t.d(e,{default:()=>g});var a=t(2791),o=t(3224);const i=[{title:"no",dataIndex:"print_option_id",width:"20%"},{title:"prntnm",dataIndex:"print_option_name",width:"49%"},{title:"nts",dataIndex:"print_option_note",width:"30%"}];var r=t(9457),s=t(3388),l=t(1561),d=t(7262),c=t(1489),u=t(5410),h=t(184);const p=n=>{let{onClose:e,selectedRow:t,refreshTable:a}=n;const{state:o,onChange:i}=(0,s.Z)({initialValues:{...t}}),{onSaveAndInsertion:p}=(0,d.Z)({api:"POST_PRINT_OPTIONS_TABLE_DATA",runFetch:a}),m=(0,l.Z)({validateFelids:["print_option_name"],functionToRun:()=>{p(o),e()},stateToValidate:o}),{print_option_name:b,print_option_note:g}=o;return(0,h.jsxs)(u.Z,{width:"100%",wrap:!0,gap:"10px",children:[(0,h.jsx)(r.Z,{name:"print_option_name",label:"prntnm",onChange:i,value:b,width:"39%"}),(0,h.jsx)(r.Z,{name:"print_option_note",label:"nts",onChange:i,value:g,width:"39%"}),(0,h.jsx)(c.Z,{onOK:m,width:"19%"})]})},m=(0,a.memo)(p),b=()=>(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(o.Z,{api:"QUERY_PRINT_OPTIONS_TABLE_DAT",postApi:"POST_PRINT_OPTIONS_TABLE_DATA",columns:i,hideTools:!1,canEdit:!0,canAdd:!0,canDelete:!0,rowKey:"print_option_id",ModalContent:m,fetchOnFirstRun:!0,canExcel:!0})}),g=(0,a.memo)(b)}}]);
//# sourceMappingURL=9.a710de7f.chunk.js.map