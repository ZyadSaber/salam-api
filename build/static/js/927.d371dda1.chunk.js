"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[927],{4209:(e,n,t)=>{t.d(n,{Z:()=>u});var a,i=t(2791),o=t(4826),l=t(168),r=t(225),d=t(5353);const s=(0,r.Z)(d.Z)(a||(a=(0,l.Z)(["\n  width: 100%;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  margin: 0;\n  background-color: white;\n  transition: border-color 0.3s;\n  box-sizing: border-box;\n\n  &:focus {\n    outline: none !important;\n    border-color: #007bff;\n  }\n"])));var c=t(184);const h=e=>{let{height:n="65px",width:t="200px",options:a,onChange:i,label:l,value:r,name:d,margin:h,padding:u,onSearch:p,hidden:m,disabled:g,loading:b,mode:x}=e;return(0,c.jsx)(o.Z,{label:l,hasContent:r&&r.toString(),margin:h,padding:u,height:n,width:t,hidden:m,top:"7px",children:(0,c.jsx)(s,{options:a,bordered:!1,allowClear:!0,showSearch:!0,onSearch:p,onChange:(e,n)=>{i({name:d,value:e,option:n})},filterOption:!1,loading:b,disabled:b||g,mode:x,placeholder:""})})},u=(0,i.memo)(h)},6888:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(2791),i=t(4209),o=t(890),l=t(184);const r=e=>{let{width:n,api:t,onChange:r,label:d,name:s="",value:c=0,withLabel:h=!1,padding:u,margin:p,params:m,selectLabelName:g="label_select",...b}=e;const{data:x,runFetch:v,loading:C}=(0,o.Z)({link:t,fetchOnFirstRun:!0,params:m,checkForParams:!0}),w=(0,a.useCallback)((e=>{}),[]);return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(i.Z,{options:x,onChange:r,label:d,value:c,name:s,width:n,withLabel:h,margin:p,padding:u,selectLabelName:g,onSearch:w,loading:C,...b})})},d=(0,a.memo)(r)},3224:(e,n,t)=>{t.d(n,{Z:()=>g});var a=t(2791);const i=()=>{const e=(0,a.useRef)(),n=(0,a.useCallback)((async()=>{var n;return await(null===(n=e.current)||void 0===n?void 0:n.handleOpen())}),[e]);return{PDFRef:e,handleOpenModal:n}};var o=t(6314),l=t(184);const r=(e,n)=>{let{reportName:t,params:i}=e;const[r,d]=(0,a.useState)(!1),s=(0,a.useCallback)((()=>{d(!0)}),[]),c=(0,a.useCallback)((()=>{d(!1)}),[]);(0,a.useImperativeHandle)(n,(()=>({handleOpen:s})));const h="http://144.24.209.19:9090/system_pdf_generate/".concat(t,"?").concat(new URLSearchParams(i));return(0,l.jsx)(o.Z,{label:"PDF Viewer",visible:r,onClose:c,noFooter:!0,width:"90%",height:"80%",children:(0,l.jsx)("object",{data:h,width:"100%",height:"100%",children:"Your browser does not support pdf files."})})},d=(0,a.memo)((0,a.forwardRef)(r));var s=t(890);const c=e=>{let{visible:n,onClose:t,onConfirm:i,message:r}=e;const d=(0,a.useCallback)((()=>{i(),t()}),[t,i]);return(0,l.jsx)(o.Z,{label:"cnfrmtn",visible:n,onClose:t,width:"25%",onOK:d,submitTitle:"cnfrm",children:r||"Are you want to continue ?"})},h=(0,a.memo)(c);var u=t(6903),p=t(7262);const m=(e,n)=>{let{api:t,postApi:r,columns:c,ModalContent:m,onClick:g,fetchOnFirstRun:b=!1,params:x,checkForParams:v=!1,modalWidth:C="60%",printProps:w,reportName:f,...Z}=e;const{data:_,runFetch:j,loading:k,setData:S,resetData:T}=(0,s.Z)({link:t,fetchOnFirstRun:b,params:x,checkForParams:v}),{onSaveAndInsertion:y}=(0,p.Z)({api:r,runFetch:j}),{PDFRef:D,handleOpenModal:F}=i(),[I,R]=(0,a.useState)({}),[A,O]=(0,a.useState)(!1),[E,P]=(0,a.useState)(!1),M=(0,a.useCallback)((()=>{R({query_status:"n"}),O(!0)}),[R]),Y=(0,a.useCallback)((()=>{R({...I,query_status:"u"}),O(!0)}),[I,R]),q=(0,a.useCallback)((()=>{O(!1)}),[]),N=(0,a.useCallback)((()=>{P(!1)}),[]),L=(0,a.useCallback)((()=>{P(!0)}),[]),z=(0,a.useMemo)((()=>null===_||void 0===_?void 0:_.data),[null===_||void 0===_?void 0:_.data]),V=(0,a.useCallback)((()=>{I&&F()}),[F,I]);return(0,a.useImperativeHandle)(n,(()=>({runFetch:j,setTableData:S,resetTableData:T,getCurrentDataSource:()=>z}))),(0,l.jsxs)(l.Fragment,{children:[m&&(0,l.jsx)(o.Z,{visible:A,onClose:q,hideCloseButton:!0,hideSaveButton:!0,label:"dtls",noFooter:!0,width:C,children:(0,l.jsx)(m,{onClose:q,selectedRow:I,refreshTable:j})}),(0,l.jsx)(h,{visible:E,onConfirm:()=>{y({...I,query_status:"d"})},onClose:N}),(0,l.jsx)(d,{ref:D,reportName:f,params:w}),(0,l.jsx)(u.Z,{dataSource:null===_||void 0===_?void 0:_.data,columns:c,onAdd:M,onEdit:Y,onPrint:V,onDelete:L,onSelectedRow:e=>{R(e),g&&g(e)},loading:k,...Z})]})},g=(0,a.memo)((0,a.forwardRef)(m))},6590:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(2791);const i=()=>{const e=(0,a.useRef)(),n=(0,a.useCallback)((async n=>{var t;return await(null===(t=e.current)||void 0===t?void 0:t.runFetch(n))}),[e]),t=(0,a.useCallback)((()=>{var n;return(null===(n=e.current)||void 0===n?void 0:n.getCurrentDataSource())||[]}),[e]),i=(0,a.useCallback)((n=>{var t;return(null===(t=e.current)||void 0===t?void 0:t.setTableData(n))||[]}),[e]),o=(0,a.useCallback)((()=>{var n;return(null===(n=e.current)||void 0===n?void 0:n.resetTableData())||[]}),[e]);return{tableRef:e,fetchTableData:n,getTableData:t,setTableData:i,resetTable:o}}},7262:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(2791),i=t(4082);const o=e=>{let{api:n="",runFetch:t}=e;const{setRow:o}=(0,i.Z)({link:n,additionalFunctionToRun:t,method:"POST"}),{setRow:l}=(0,i.Z)({link:n,additionalFunctionToRun:t,method:"PUT"}),{setRow:r}=(0,i.Z)({link:n,additionalFunctionToRun:t,method:"Delete"});return{onSaveAndInsertion:(0,a.useCallback)((e=>{"n"===e.query_status?o(e):"u"===e.query_status?l(e):"d"===e.query_status&&r(e)}),[o,l,r])}}},1489:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(2791),i=t(81),o=t(184);const l=e=>{let{onOK:n,width:t="40%",label:a="sv",...l}=e;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.Z,{onClick:n,label:"sv",width:t,...l})})},r=(0,a.memo)(l)},8216:(e,n,t)=>{t.d(n,{Z:()=>g});var a,i=t(2791),o=t(7892),l=t.n(o),r=t(4826),d=t(168),s=t(225),c=t(1535);const h=(0,s.Z)(c.Z)(a||(a=(0,d.Z)(["\n  ","\n  width: 100%;\n"])),(e=>{let{required:n}=e;return n&&"border: 1px solid red;"})),u={fullDate:"YYYY-MM-DD",weakDate:"MM-DD",monthFormat:"YYYY-MM",fullDateWithTime:"YYYY-MM-DD HH:mm:ss",fullDateWithTimeNoSecond:"YYYY-MM-DD HH:mm"};var p=t(184);const m=e=>{let{dateFormat:n="fullDate",label:t,value:a,width:i="200px",height:o,padding:d,margin:s,name:c,onChange:m,required:g=!1,showTime:b,...x}=e;const v=a?l()(a,u[n]):void 0;return(0,p.jsx)(r.Z,{label:t,width:i,height:o,padding:d,margin:s,hasContent:v&&(null===v||void 0===v?void 0:v.toString()),top:"7px",children:(0,p.jsx)(h,{defaultValue:v,value:v,format:u[n],showTime:b,width:"100%",onChange:(e,n)=>{m&&m({name:c,value:n})},placeholder:"",required:g,...x})})},g=(0,i.memo)(m)},4826:(e,n,t)=>{t.d(n,{Z:()=>p});var a,i,o=t(2791),l=t(9230),r=t(168),d=t(225);const s=d.Z.div(a||(a=(0,r.Z)(["\n  position: relative;\n  margin: ",";\n  padding: ",";\n  height: ",";\n  width: ",";\n"])),(e=>{let{margin:n}=e;return n}),(e=>{let{padding:n}=e;return n||"5px 0"}),(e=>{let{height:n}=e;return n}),(e=>{let{width:n}=e;return n})),c=d.Z.label(i||(i=(0,r.Z)(["\n  position: absolute;\n  top: ",";\n  left: 10px;\n  color: #999;\n  padding: 0;\n  margin: 0;\n  transition: top 0.3s, font-size 0.3s, background-color 0.5s;\n\n  ","\n"])),(e=>{let{top:n}=e;return n||"5px"}),(e=>{let{hasContent:n}=e;return n&&"\n    top: -5px;\n    font-size: 12px;\n    color: #007bff;\n    font-size: 14px;\n    background-color: white;\n  "}));var h=t(184);const u=e=>{let{hasContent:n,name:t,label:a="",height:i,width:o="200px",padding:r,margin:d,children:u,hidden:p,top:m}=e;const{t:g}=(0,l.$G)();return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(s,{width:o,height:i,margin:d,padding:r,hidden:p,children:[u,(0,h.jsx)(c,{top:m,htmlFor:t,hasContent:n,children:g(a)})]})})},p=(0,o.memo)(u)},5848:(e,n,t)=>{t.d(n,{_8:()=>i});const a=new Date,i="".concat(a.getFullYear(),"-").concat((a.getMonth()+1).toString().padStart(2,"0"),"-").concat(a.getDate().toString().padStart(2,"0")),o="".concat(a.getHours().toString().padStart(2,"0"),":").concat(a.getMinutes().toString().padStart(2,"0"),":").concat(a.getSeconds().toString().padStart(2,"0"));"".concat(i," ").concat(o)},3388:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(2791);const i=e=>{const n=(0,a.useRef)();return(0,a.useEffect)((()=>{n.current=e})),n.current},o=e=>{let{initialValues:n}=e;const[t,o]=(0,a.useState)(n),l=(0,a.useRef)(!1),r=i(n),d=(0,a.useCallback)((()=>!Object.is(JSON.stringify(r),JSON.stringify(n))),[n,r]);(0,a.useEffect)((()=>{d()&&o({...n})}),[d,n]);const s=(0,a.useCallback)((()=>{l.current=!1,o((()=>n))}),[n]);(0,a.useEffect)((()=>s),[]);const c=(0,a.useCallback)((e=>{const{name:n,value:a}=e;o({...t,[n]:a})}),[t]),h=(0,a.useCallback)((e=>{o({...t,...e})}),[t]),u=(0,a.useCallback)((e=>{o({...t,[e.name]:e.value,[e.selectLabelName]:e.label})}),[t]),p=(0,a.useCallback)((e=>{let{name:n,value:a}=e;o({...t,[n]:[...t[n],a]})}),[t]);return{state:t,onChange:c,resetForm:s,handleRootState:o,handleSelectWithLabelChange:u,handleArrayChange:p,handleMultiInput:h}}},4082:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(2791),i=t(1227),o=t(399),l=t(8382);const r=e=>{let{link:n="",noAuthorization:t=!1,additionalFunctionToRun:r,runOnSuccess:d,runOnFail:s,method:c="POST"}=e;const h=(0,l.p)(),u="http://144.24.209.19:9090/api/".concat(o.Z[n]),[p,m]=(0,a.useState)(),{authorization:g}=(0,i.Z)(),b=(0,a.useCallback)((async e=>{if(g||t){const t={method:c,headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(g)},body:JSON.stringify(e)};try{const e=await fetch(u,t),n=await e.json();return"success"===n.response?(h({position:"top-right",title:"Success",description:"".concat(n.response),status:"success",duration:5e3,isClosable:!0}),d&&d()):(h({position:"top-right",title:"Error",description:"".concat(n.message),status:"error",duration:9e3,isClosable:!0}),s&&s()),m(n),r&&r(),n}catch(n){}}}),[r,g,c,t,s,d,h,u]);return{success:p,setRow:(0,a.useCallback)((e=>{b(e)}),[b])}}},1561:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(2791),i=t(8382);const o=e=>{let{validateFelids:n,functionToRun:t,stateToValidate:o}=e;const l=(0,i.p)();return(0,a.useCallback)((()=>{let e=[];n.forEach((n=>{void 0===o[n]||o[n]||e.push(n)})),0!==e.length?l({position:"top-right",title:"Error",description:"\n      Make sure to fill this required fields\n      ".concat(e.toString(),"\n      "),status:"info",duration:5e3,isClosable:!0}):t()}),[t,o,l,n])}},9242:(e,n,t)=>{t.d(n,{Z:()=>p});var a,i=t(2791),o=t(4826),l=t(168),r=t(225),d=t(4184),s=t(4360);const c=(0,r.Z)(d.Z)(a||(a=(0,l.Z)(["\n  width: 100%;\n  /* padding: 5px 7px; */\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  transition: border-color 0.3s;\n  margin: 0;\n  box-sizing: border-box;\n  /* ","; */\n\n  &:focus {\n    outline: none !important;\n    border-color: #007bff;\n  }\n"])),(e=>{let{required:n}=e;return n&&"background-color:  ".concat(s.w.required)}));var h=t(184);const u=e=>{let{disabled:n,value:t,name:a,label:l,onChange:r,height:d,width:s="200px",padding:u,margin:p,max:m,min:g=0,...b}=e;const x=(0,i.useCallback)((e=>{r({name:a,value:e})}),[a,r]);return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(o.Z,{label:l,width:s,height:d,padding:u,margin:p,hasContent:t&&t.toString(),top:"7px",children:(0,h.jsx)(c,{disabled:n,value:t,name:a,onChange:x,padding:u,margin:p,max:m,min:g,...b})})})},p=(0,i.memo)(u)},9457:(e,n,t)=>{t.d(n,{Z:()=>u});var a,i=t(2791),o=t(4826),l=t(168),r=t(225),d=t(4360);const s=r.Z.input(a||(a=(0,l.Z)(["\n  width: 100%;\n  padding: 5px 7px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n\n  transition: border-color 0.3s;\n  box-sizing: border-box;\n  /* ","; */\n\n  &:focus {\n    outline: none !important;\n    border-color: #007bff;\n  }\n"])),(e=>{let{required:n}=e;return n&&"background-color:  ".concat(d.w.required)}));var c=t(184);const h=e=>{let{disabled:n,value:t,name:a,label:l="",onChange:r,height:d,width:h="200px",type:u="text",placeHolder:p,padding:m,margin:g,className:b,required:x,...v}=e;const C=(0,i.useCallback)((e=>{r({name:a,value:e.target.value})}),[a,r]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(o.Z,{label:l,hasContent:t&&t.toString(),margin:g,padding:m,height:d,width:h,children:(0,c.jsx)(s,{placeholder:p,disabled:n,required:x,onChange:C,width:"100%",className:b,value:t,type:u,...v})})})},u=(0,i.memo)(h)},6314:(e,n,t)=>{t.d(n,{Z:()=>w});var a,i,o,l,r,d=t(2791),s=t(81),c=t(2125),h=t(168),u=t(225);const p=u.Z.div(a||(a=(0,h.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 2;\n"]))),m=u.Z.div(i||(i=(0,h.Z)(["\n  /* position: relative;\n    margin: 5% auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: ",";\n    height: ",";\n    background-color: white;\n    border-radius: 15px; */\n  /* max-height: 90vh;\n\tmax-width: 500px; */\n  width: ",";\n  height: ",";\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #fff;\n  border-radius: 15px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 15px 30px 0 rgba(#000, 0.25);\n  @media (max-width: 600px) {\n    width: 90%;\n  }\n"])),(e=>{let{width:n}=e;return n}),(e=>{let{height:n}=e;return n}),(e=>{let{width:n}=e;return n}),(e=>{let{height:n}=e;return n})),g=u.Z.div(o||(o=(0,h.Z)(["\n  padding: 15px 32px;\n  border-bottom: 1px solid #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),b=u.Z.div(l||(l=(0,h.Z)(["\n  margin: 10px 15px;\n  overflow-y: auto;\n  height: 100%;\n"]))),x=u.Z.div(r||(r=(0,h.Z)(['\n  padding: 35px 32px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  border-top: 1px solid #ddd;\n  gap: 12px;\n  position: relative;\n  &:after {\n    content: "";\n    display: block;\n    position: absolute;\n    top: -51px;\n    left: 24px;\n    right: 24px;\n    height: 50px;\n    flex-shrink: 0;\n    background-image: linear-gradient(to top, rgba(#fff, 0.75), transparent);\n    pointer-events: none;\n  }\n'])));var v=t(184);const C=e=>{let{children:n,visible:t=!1,label:a,onClose:i,onOK:o,submitTitle:l="smbt",width:r="90%",height:d="auto",hideSaveButton:h=!1,hideCloseButton:u=!1,noFooter:C=!1}=e;return(0,v.jsx)(v.Fragment,{children:t&&(0,v.jsx)(p,{hidden:!t,children:(0,v.jsxs)(m,{width:r,height:d,children:[(0,v.jsxs)(g,{children:[(0,v.jsx)(c.Z,{children:a}),(0,v.jsx)(s.Z,{label:"\xd7",width:"5%",backGround:"none",margin:"0",padding:"0","data-dismiss":"modal",onClick:i,fontWeight:"19px"})]}),(0,v.jsx)(b,{children:n}),!C&&(0,v.jsxs)(x,{hidden:C,children:[!h&&(0,v.jsx)(s.Z,{onClick:o,label:l,hidden:h,width:"20%",margin:"0"}),!u&&(0,v.jsx)(s.Z,{onClick:i,label:"cls",hidden:u,width:"20%",backGround:"red",margin:"0"})]})]})})})},w=(0,d.memo)(C)},4663:(e,n,t)=>{t.d(n,{Z:()=>b});var a,i,o,l=t(2791),r=t(9230),d=t(4826),s=t(168),c=t(9256);const h=c.ZP.div(a||(a=(0,s.Z)(["\n  width: 100%;\n  padding: 5px 7px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  gap: 10px;\n  background-color: white;\n"]))),u=c.ZP.label(i||(i=(0,s.Z)(["\n  display: block;\n  font-size: 14px;\n"]))),p=c.ZP.input(o||(o=(0,s.Z)(["\n  margin-right: 5px;\n"])));var m=t(184);const g=e=>{let{name:n,options:t,width:a,onChange:i,value:o,label:s,margin:c,padding:g,height:b,hidden:x,disabled:v}=e;const{t:C}=(0,r.$G)(),w=(0,l.useCallback)((e=>{var t;i({name:n,value:null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.defaultValue})}),[n,i]);return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(d.Z,{width:a,height:b,padding:g,margin:c,label:s,hidden:x,top:"-8px",children:(0,m.jsx)(h,{children:t.map((e=>(0,m.jsxs)(u,{children:[(0,m.jsx)(p,{type:"radio",value:e.value,onClick:w,checked:e.value===o,disabled:v}),C(e.label)]})))})})})},b=(0,l.memo)(g)},2927:(e,n,t)=>{t.r(n),t.d(n,{default:()=>y});var a=t(2791),i=t(6590),o=t(3224),l=t(5410),r=t(3388),d=t(4663),s=t(5848);const c={invoice_type:"C",invoice_no:"",person_id:"",date_from:s._8,date_to:s._8},h=[{title:"no",dataIndex:"invoice_id",width:"7%"},{title:"nm",dataIndex:"holder_name",width:"18%"},{title:"dt",dataIndex:"invoice_date",width:"14.5%"},{title:"total",dataIndex:"invoice_total_before_discount",width:"12.5%",calculateAmount:!0},{title:"dscnt",dataIndex:"invoice_discount",calculateAmount:!0,width:"8%"},{title:"tlaftrdsnt",dataIndex:"invoice_total_after_discount",calculateAmount:!0,width:"12.5%"},{title:"dbt",dataIndex:"invoice_paid",calculateAmount:!0,width:"12.5%"},{title:"crdt",dataIndex:"invoice_credit",calculateAmount:!0,width:"12.5%"}],u=[{title:"itmnm",dataIndex:"item",width:"23%"},{title:"wdth",dataIndex:"width",width:"10%"},{title:"hght",dataIndex:"height",width:"10%"},{title:"sz",dataIndex:"size",width:"10%"},{title:"qnty",dataIndex:"quantity",width:"10%"},{title:"prc",dataIndex:"price",width:"10%"},{title:"total",dataIndex:"total",width:"10%"},{title:"nts",dataIndex:"notes",width:"14%"}],p=[{label:"splr",value:"S"},{label:"cstmr",value:"C"}];var m=t(6888),g=t(9242),b=t(8216),x=t(81),v=t(184);const C=e=>{let{fetchTableData:n,state:t,onChange:i}=e;const o=(0,a.useCallback)((()=>{n(t)}),[n,t]);return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(l.Z,{bordered:!0,width:"100%",wrap:!0,gap:"5px",children:[(0,v.jsx)(d.Z,{name:"invoice_type",options:p,value:t.invoice_type,onChange:i,label:"invctyp",width:"auto"}),(0,v.jsx)(g.Z,{name:"invoice_no",label:"no",onChange:i,value:t.invoice_no}),(0,v.jsx)(m.Z,{name:"holder_number",api:"QUERY_CUSTOMER_AND_SUPPLIER_LIST",label:"nm",params:{invoice_type:t.invoice_type},value:t.holder_number,fetchOnFirstRun:!0,onChange:i}),(0,v.jsx)(b.Z,{name:"date_from",value:t.date_from,label:"dtfrm",onChange:i}),(0,v.jsx)(b.Z,{name:"date_to",value:t.date_to,label:"dto",onChange:i}),(0,v.jsx)(x.Z,{onClick:o,label:"Search"})]})})},w=(0,a.memo)(C);var f=t(9457),Z=t(1561),_=t(7262),j=t(1489);const k=e=>{let{onClose:n,selectedRow:t,refreshTable:i}=e;const{state:o,onChange:d}=(0,r.Z)({initialValues:{...t}}),{onSaveAndInsertion:s}=(0,_.Z)({api:"POST_CUSTOMER_TABLE_DATA",runFetch:i}),c=(0,a.useCallback)((()=>{s(o),n()}),[n,s,o]),h=(0,Z.Z)({validateFelids:["customer_name"],functionToRun:c,stateToValidate:o});return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(l.Z,{width:"100%",children:["C"===o.invoice_type&&(0,v.jsx)(m.Z,{api:"QUERY_PRINT_OPTIONS_LIST",name:"invoice_print_option_id",value:o.invoice_print_option_id,onChange:d,label:"prntnm"}),(0,v.jsx)(m.Z,{api:"QUERY_ITEMS_LIST",name:"invoice_item_id",value:o.invoice_item_id,onChange:d,label:"itmnm"}),(0,v.jsx)(g.Z,{name:"width",value:o.width,onChange:d,min:0,label:"wdth"}),(0,v.jsx)(g.Z,{name:"height",value:o.height,onChange:d,min:0,label:"hght"}),(0,v.jsx)(g.Z,{name:"size",value:o.size,onChange:d,min:0,disabled:!0,label:"sz"}),(0,v.jsx)(g.Z,{name:"quantity",value:o.quantity,onChange:d,min:0,label:"qty"}),(0,v.jsx)(g.Z,{name:"price",value:o.price,onChange:d,min:0,label:"prc"}),(0,v.jsx)(g.Z,{name:"total",value:o.total,onChange:d,min:0,disabled:!0,label:"total"}),(0,v.jsx)(f.Z,{name:"notes",value:o.notes,onChange:d,disabled:!0,label:"nts"})]}),(0,v.jsx)(j.Z,{onClick:h,width:"20%"})]})},S=(0,a.memo)(k),T=()=>{const[e,n]=(0,a.useState)(0),{tableRef:t,fetchTableData:d}=(0,i.Z)(),{tableRef:s,fetchTableData:p}=(0,i.Z)(),m=(0,a.useCallback)((e=>{p({invoice_type:e.invoice_type,invoice_no:e.invoice_id}),n(e.invoice_id)}),[p]),{state:g,onChange:b}=(0,r.Z)({initialValues:c});return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(l.Z,{width:"100%",margin:"0",padding:"0",flexDirection:"column",children:[(0,v.jsx)(w,{fetchTableData:d,state:g,onChange:b}),(0,v.jsxs)(l.Z,{width:"100%",margin:"0",padding:"0",justifyContent:"space-between",children:[(0,v.jsx)(l.Z,{width:"49%",flexDirection:"column",children:(0,v.jsx)(o.Z,{ref:t,api:"QUERY_INVOICE_MASTER_TABLE_DATA",postApi:"C"===g.invoice_type?"POST_CUSTOMER_INVOICES":"POST_SUPPLIER_INVOICES",columns:h,rowKey:"invoice_id",onClick:m,height:"unset",hideTools:!1,canDelete:!0,useFloatingLabelsTotalCells:!0})}),(0,v.jsx)(l.Z,{width:"50%",flexDirection:"column",children:(0,v.jsx)(o.Z,{ref:s,api:"QUERY_INVOICE_DETAIL_TABLE_DATA",postApi:"POST_INVOICE_DETAIL_TABLE_DATA",columns:u,rowKey:"row_key",hideTools:!1,canPrint:!0,canAdd:!0,canEdit:!0,canDelete:!0,ModalContent:S,modalWidth:"80%",reportName:"C"===g.invoice_type?"customer":"supplier",printProps:{invoice_id:e}})})]})]})})},y=(0,a.memo)(T)}}]);
//# sourceMappingURL=927.d371dda1.chunk.js.map