"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[671],{3224:(e,n,t)=>{t.d(n,{Z:()=>g});var a=t(2791);const o=()=>{const e=(0,a.useRef)(),n=(0,a.useCallback)((async()=>{var n;return await(null===(n=e.current)||void 0===n?void 0:n.handleOpen())}),[e]);return{PDFRef:e,handleOpenModal:n}};var i=t(6314),r=t(184);const s=(e,n)=>{let{reportName:t,params:o}=e;const[s,l]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{l(!0)}),[]),c=(0,a.useCallback)((()=>{l(!1)}),[]);(0,a.useImperativeHandle)(n,(()=>({handleOpen:d})));const u="http://144.24.209.19:9090/system_pdf_generate/".concat(t,"?").concat(new URLSearchParams(o));return(0,r.jsx)(i.Z,{label:"PDF Viewer",visible:s,onClose:c,noFooter:!0,width:"90%",height:"80%",children:(0,r.jsx)("object",{data:u,width:"100%",height:"100%",children:"Your browser does not support pdf files."})})},l=(0,a.memo)((0,a.forwardRef)(s));var d=t(890);const c=e=>{let{visible:n,onClose:t,onConfirm:o,message:s}=e;const l=(0,a.useCallback)((()=>{o(),t()}),[t,o]);return(0,r.jsx)(i.Z,{label:"cnfrmtn",visible:n,onClose:t,width:"25%",onOK:l,submitTitle:"cnfrm",children:s||"Are you want to continue ?"})},u=(0,a.memo)(c);var h=t(6903),p=t(7262);const m=(e,n)=>{let{api:t,postApi:s,columns:c,ModalContent:m,onClick:g,fetchOnFirstRun:b=!1,params:x,checkForParams:f=!1,modalWidth:v="60%",printProps:C,reportName:w,...Z}=e;const{data:k,runFetch:j,loading:F,setData:S,resetData:T}=(0,d.Z)({link:t,fetchOnFirstRun:b,params:x,checkForParams:f}),{onSaveAndInsertion:y}=(0,p.Z)({api:s,runFetch:j}),{PDFRef:R,handleOpenModal:_}=o(),[O,A]=(0,a.useState)({}),[E,D]=(0,a.useState)(!1),[P,q]=(0,a.useState)(!1),I=(0,a.useCallback)((()=>{A({query_status:"n"}),D(!0)}),[A]),M=(0,a.useCallback)((()=>{A({...O,query_status:"u"}),D(!0)}),[O,A]),N=(0,a.useCallback)((()=>{D(!1)}),[]),z=(0,a.useCallback)((()=>{q(!1)}),[]),B=(0,a.useCallback)((()=>{q(!0)}),[]),L=(0,a.useMemo)((()=>null===k||void 0===k?void 0:k.data),[null===k||void 0===k?void 0:k.data]),U=(0,a.useCallback)((()=>{O&&_()}),[_,O]);return(0,a.useImperativeHandle)(n,(()=>({runFetch:j,setTableData:S,resetTableData:T,getCurrentDataSource:()=>L}))),(0,r.jsxs)(r.Fragment,{children:[m&&(0,r.jsx)(i.Z,{visible:E,onClose:N,hideCloseButton:!0,hideSaveButton:!0,label:"dtls",noFooter:!0,width:v,children:(0,r.jsx)(m,{onClose:N,selectedRow:O,refreshTable:j})}),(0,r.jsx)(u,{visible:P,onConfirm:()=>{y({...O,query_status:"d"})},onClose:z}),(0,r.jsx)(l,{ref:R,reportName:w,params:C}),(0,r.jsx)(h.Z,{dataSource:null===k||void 0===k?void 0:k.data,columns:c,onAdd:I,onEdit:M,onPrint:U,onDelete:B,onSelectedRow:e=>{A(e),g&&g(e)},loading:F,...Z})]})},g=(0,a.memo)((0,a.forwardRef)(m))},7262:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(2791),o=t(4082);const i=e=>{let{api:n="",runFetch:t}=e;const{setRow:i}=(0,o.Z)({link:n,additionalFunctionToRun:t,method:"POST"}),{setRow:r}=(0,o.Z)({link:n,additionalFunctionToRun:t,method:"PUT"}),{setRow:s}=(0,o.Z)({link:n,additionalFunctionToRun:t,method:"Delete"});return{onSaveAndInsertion:(0,a.useCallback)((e=>{"n"===e.query_status?i(e):"u"===e.query_status?r(e):"d"===e.query_status&&s(e)}),[i,r,s])}}},1489:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(2791),o=t(81),i=t(184);const r=e=>{let{onOK:n,width:t="40%",label:a="sv",...r}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(o.Z,{onClick:n,label:"sv",width:t,...r})})},s=(0,a.memo)(r)},4826:(e,n,t)=>{t.d(n,{Z:()=>p});var a,o,i=t(2791),r=t(9230),s=t(168),l=t(225);const d=l.Z.div(a||(a=(0,s.Z)(["\n  position: relative;\n  margin: ",";\n  padding: ",";\n  height: ",";\n  width: ",";\n"])),(e=>{let{margin:n}=e;return n}),(e=>{let{padding:n}=e;return n||"5px 0"}),(e=>{let{height:n}=e;return n}),(e=>{let{width:n}=e;return n})),c=l.Z.label(o||(o=(0,s.Z)(["\n  position: absolute;\n  top: ",";\n  left: 10px;\n  color: #999;\n  padding: 0;\n  margin: 0;\n  transition: top 0.3s, font-size 0.3s, background-color 0.5s;\n\n  ","\n"])),(e=>{let{top:n}=e;return n||"5px"}),(e=>{let{hasContent:n}=e;return n&&"\n    top: -5px;\n    font-size: 12px;\n    color: #007bff;\n    font-size: 14px;\n    background-color: white;\n  "}));var u=t(184);const h=e=>{let{hasContent:n,name:t,label:a="",height:o,width:i="200px",padding:s,margin:l,children:h,hidden:p,top:m}=e;const{t:g}=(0,r.$G)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(d,{width:i,height:o,margin:l,padding:s,hidden:p,children:[h,(0,u.jsx)(c,{top:m,htmlFor:t,hasContent:n,children:g(a)})]})})},p=(0,i.memo)(h)},3388:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(2791);const o=e=>{const n=(0,a.useRef)();return(0,a.useEffect)((()=>{n.current=e})),n.current},i=e=>{let{initialValues:n}=e;const[t,i]=(0,a.useState)(n),r=(0,a.useRef)(!1),s=o(n),l=(0,a.useCallback)((()=>!Object.is(JSON.stringify(s),JSON.stringify(n))),[n,s]);(0,a.useEffect)((()=>{l()&&i({...n})}),[l,n]);const d=(0,a.useCallback)((()=>{r.current=!1,i((()=>n))}),[n]);(0,a.useEffect)((()=>d),[]);const c=(0,a.useCallback)((e=>{const{name:n,value:a}=e;i({...t,[n]:a})}),[t]),u=(0,a.useCallback)((e=>{i({...t,...e})}),[t]),h=(0,a.useCallback)((e=>{i({...t,[e.name]:e.value,[e.selectLabelName]:e.label})}),[t]),p=(0,a.useCallback)((e=>{let{name:n,value:a}=e;i({...t,[n]:[...t[n],a]})}),[t]);return{state:t,onChange:c,resetForm:d,handleRootState:i,handleSelectWithLabelChange:h,handleArrayChange:p,handleMultiInput:u}}},4082:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(2791),o=t(1227),i=t(399),r=t(8382);const s=e=>{let{link:n="",noAuthorization:t=!1,additionalFunctionToRun:s,runOnSuccess:l,runOnFail:d,method:c="POST"}=e;const u=(0,r.p)(),h="http://144.24.209.19:9090/api/".concat(i.Z[n]),[p,m]=(0,a.useState)(),{authorization:g}=(0,o.Z)(),b=(0,a.useCallback)((async e=>{if(g||t){const t={method:c,headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(g)},body:JSON.stringify(e)};try{const e=await fetch(h,t),n=await e.json();return"success"===n.response?(u({position:"top-right",title:"Success",description:"".concat(n.response),status:"success",duration:5e3,isClosable:!0}),l&&l()):(u({position:"top-right",title:"Error",description:"".concat(n.message),status:"error",duration:9e3,isClosable:!0}),d&&d()),m(n),s&&s(),n}catch(n){}}}),[s,g,c,t,d,l,u,h]);return{success:p,setRow:(0,a.useCallback)((e=>{b(e)}),[b])}}},1561:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(2791),o=t(8382);const i=e=>{let{validateFelids:n,functionToRun:t,stateToValidate:i}=e;const r=(0,o.p)();return(0,a.useCallback)((()=>{let e=[];n.forEach((n=>{void 0===i[n]||i[n]||e.push(n)})),0!==e.length?r({position:"top-right",title:"Error",description:"\n      Make sure to fill this required fields\n      ".concat(e.toString(),"\n      "),status:"info",duration:5e3,isClosable:!0}):t()}),[t,i,r,n])}},9457:(e,n,t)=>{t.d(n,{Z:()=>h});var a,o=t(2791),i=t(4826),r=t(168),s=t(225),l=t(4360);const d=s.Z.input(a||(a=(0,r.Z)(["\n  width: 100%;\n  padding: 5px 7px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n\n  transition: border-color 0.3s;\n  box-sizing: border-box;\n  /* ","; */\n\n  &:focus {\n    outline: none !important;\n    border-color: #007bff;\n  }\n"])),(e=>{let{required:n}=e;return n&&"background-color:  ".concat(l.w.required)}));var c=t(184);const u=e=>{let{disabled:n,value:t,name:a,label:r="",onChange:s,height:l,width:u="200px",type:h="text",placeHolder:p,padding:m,margin:g,className:b,required:x,...f}=e;const v=(0,o.useCallback)((e=>{s({name:a,value:e.target.value})}),[a,s]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i.Z,{label:r,hasContent:t&&t.toString(),margin:g,padding:m,height:l,width:u,children:(0,c.jsx)(d,{placeholder:p,disabled:n,required:x,onChange:v,width:"100%",className:b,value:t,type:h,...f})})})},h=(0,o.memo)(u)},6314:(e,n,t)=>{t.d(n,{Z:()=>C});var a,o,i,r,s,l=t(2791),d=t(81),c=t(2125),u=t(168),h=t(225);const p=h.Z.div(a||(a=(0,u.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 2;\n"]))),m=h.Z.div(o||(o=(0,u.Z)(["\n  /* position: relative;\n    margin: 5% auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: ",";\n    height: ",";\n    background-color: white;\n    border-radius: 15px; */\n  /* max-height: 90vh;\n\tmax-width: 500px; */\n  width: ",";\n  height: ",";\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #fff;\n  border-radius: 15px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 15px 30px 0 rgba(#000, 0.25);\n  @media (max-width: 600px) {\n    width: 90%;\n  }\n"])),(e=>{let{width:n}=e;return n}),(e=>{let{height:n}=e;return n}),(e=>{let{width:n}=e;return n}),(e=>{let{height:n}=e;return n})),g=h.Z.div(i||(i=(0,u.Z)(["\n  padding: 15px 32px;\n  border-bottom: 1px solid #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),b=h.Z.div(r||(r=(0,u.Z)(["\n  margin: 10px 15px;\n  overflow-y: auto;\n  height: 100%;\n"]))),x=h.Z.div(s||(s=(0,u.Z)(['\n  padding: 35px 32px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  border-top: 1px solid #ddd;\n  gap: 12px;\n  position: relative;\n  &:after {\n    content: "";\n    display: block;\n    position: absolute;\n    top: -51px;\n    left: 24px;\n    right: 24px;\n    height: 50px;\n    flex-shrink: 0;\n    background-image: linear-gradient(to top, rgba(#fff, 0.75), transparent);\n    pointer-events: none;\n  }\n'])));var f=t(184);const v=e=>{let{children:n,visible:t=!1,label:a,onClose:o,onOK:i,submitTitle:r="smbt",width:s="90%",height:l="auto",hideSaveButton:u=!1,hideCloseButton:h=!1,noFooter:v=!1}=e;return(0,f.jsx)(f.Fragment,{children:t&&(0,f.jsx)(p,{hidden:!t,children:(0,f.jsxs)(m,{width:s,height:l,children:[(0,f.jsxs)(g,{children:[(0,f.jsx)(c.Z,{children:a}),(0,f.jsx)(d.Z,{label:"\xd7",width:"5%",backGround:"none",margin:"0",padding:"0","data-dismiss":"modal",onClick:o,fontWeight:"19px"})]}),(0,f.jsx)(b,{children:n}),!v&&(0,f.jsxs)(x,{hidden:v,children:[!u&&(0,f.jsx)(d.Z,{onClick:i,label:r,hidden:u,width:"20%",margin:"0"}),!h&&(0,f.jsx)(d.Z,{onClick:o,label:"cls",hidden:h,width:"20%",backGround:"red",margin:"0"})]})]})})})},C=(0,l.memo)(v)},9671:(e,n,t)=>{t.r(n),t.d(n,{default:()=>b});var a=t(2791),o=t(3224),i=t(9457),r=t(3388),s=t(1561),l=t(7262),d=t(5410),c=t(1489),u=t(184);const h=e=>{let{onClose:n,selectedRow:t,refreshTable:o}=e;const{state:h,onChange:p}=(0,r.Z)({initialValues:{...t}}),{onSaveAndInsertion:m}=(0,l.Z)({api:"POST_CUSTOMER_TABLE_DATA",runFetch:o}),g=(0,a.useCallback)((()=>{m(h),n()}),[n,m,h]),b=(0,s.Z)({validateFelids:["customer_name"],functionToRun:g,stateToValidate:h}),{customer_name:x,email:f,phone:v,address:C}=h;return(0,u.jsxs)(d.Z,{flexDirection:"column",padding:"0",margin:"0",children:[(0,u.jsxs)(d.Z,{width:"100%",padding:"0",margin:"0",wrap:!0,gap:"5px",children:[(0,u.jsx)(i.Z,{name:"customer_name",label:"Name",onChange:p,value:x,required:!0,width:"47%"}),(0,u.jsx)(i.Z,{name:"email",label:"Email",onChange:p,value:f,width:"47%"}),(0,u.jsx)(i.Z,{name:"phone",label:"Phone",onChange:p,value:v,width:"47%"}),(0,u.jsx)(i.Z,{name:"address",label:"Address",onChange:p,value:C,width:"100%"})]}),(0,u.jsx)(c.Z,{onClick:b})]})},p=(0,a.memo)(h),m=[{title:"nm",dataIndex:"customer_name",width:"23%"},{title:"eml",dataIndex:"email",width:"15%"},{title:"phn",dataIndex:"phone",width:"15%"},{title:"adrs",dataIndex:"address",width:"15%"},{title:"created_at",dataIndex:"created_at",width:"15%"},{title:"updated_at",dataIndex:"updated_at",width:"15%"}],g=()=>(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(o.Z,{api:"QUERY_CUSTOMER_TABLE_DATA",postApi:"POST_CUSTOMER_TABLE_DATA",columns:m,hideTools:!1,canEdit:!0,canAdd:!0,canDelete:!0,canExcel:!0,rowKey:"customer_id",ModalContent:p,fetchOnFirstRun:!0,modalWidth:"40%"})}),b=(0,a.memo)(g)}}]);
//# sourceMappingURL=671.cf536532.chunk.js.map