"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[446],{3224:(e,t,n)=>{n.d(t,{Z:()=>x});var i=n(2791);const a=()=>{const e=(0,i.useRef)(),t=(0,i.useCallback)((async()=>{var t;return await(null===(t=e.current)||void 0===t?void 0:t.handleOpen())}),[e]);return{PDFRef:e,handleOpenModal:t}};var o=n(6314),s=n(184);const d=(e,t)=>{let{reportName:n,params:a}=e;const[d,r]=(0,i.useState)(!1),l=(0,i.useCallback)((()=>{r(!0)}),[]),c=(0,i.useCallback)((()=>{r(!1)}),[]);(0,i.useImperativeHandle)(t,(()=>({handleOpen:l})));const u="http://144.24.209.19:9090/system_pdf_generate/".concat(n,"?").concat(new URLSearchParams(a));return(0,s.jsx)(o.Z,{label:"PDF Viewer",visible:d,onClose:c,noFooter:!0,width:"90%",height:"80%",children:(0,s.jsx)("object",{data:u,width:"100%",height:"100%",children:"Your browser does not support pdf files."})})},r=(0,i.memo)((0,i.forwardRef)(d));var l=n(890);const c=e=>{let{visible:t,onClose:n,onConfirm:a,message:d}=e;const r=(0,i.useCallback)((()=>{a(),n()}),[n,a]);return(0,s.jsx)(o.Z,{label:"cnfrmtn",visible:t,onClose:n,width:"25%",onOK:r,submitTitle:"cnfrm",children:d||"Are you want to continue ?"})},u=(0,i.memo)(c);var h=n(6903),p=n(7262);const m=(e,t)=>{let{api:n,postApi:d,columns:c,ModalContent:m,onClick:x,fetchOnFirstRun:b=!1,params:v,checkForParams:w=!1,modalWidth:g="60%",printProps:_,reportName:f,...C}=e;const{data:k,runFetch:j,loading:y,setData:Z,resetData:I}=(0,l.Z)({link:n,fetchOnFirstRun:b,params:v,checkForParams:w}),{onSaveAndInsertion:F}=(0,p.Z)({api:d,runFetch:j}),{PDFRef:R,handleOpenModal:S}=a(),[T,O]=(0,i.useState)({}),[D,A]=(0,i.useState)(!1),[E,P]=(0,i.useState)(!1),N=(0,i.useCallback)((()=>{O({query_status:"n"}),A(!0)}),[O]),q=(0,i.useCallback)((()=>{O({...T,query_status:"u"}),A(!0)}),[T,O]),U=(0,i.useCallback)((()=>{A(!1)}),[]),L=(0,i.useCallback)((()=>{P(!1)}),[]),Y=(0,i.useCallback)((()=>{P(!0)}),[]),z=(0,i.useMemo)((()=>null===k||void 0===k?void 0:k.data),[null===k||void 0===k?void 0:k.data]),B=(0,i.useCallback)((()=>{T&&S()}),[S,T]);return(0,i.useImperativeHandle)(t,(()=>({runFetch:j,setTableData:Z,resetTableData:I,getCurrentDataSource:()=>z}))),(0,s.jsxs)(s.Fragment,{children:[m&&(0,s.jsx)(o.Z,{visible:D,onClose:U,hideCloseButton:!0,hideSaveButton:!0,label:"dtls",noFooter:!0,width:g,children:(0,s.jsx)(m,{onClose:U,selectedRow:T,refreshTable:j})}),(0,s.jsx)(u,{visible:E,onConfirm:()=>{F({...T,query_status:"d"})},onClose:L}),(0,s.jsx)(r,{ref:R,reportName:f,params:_}),(0,s.jsx)(h.Z,{dataSource:null===k||void 0===k?void 0:k.data,columns:c,onAdd:N,onEdit:q,onPrint:B,onDelete:Y,onSelectedRow:e=>{O(e),x&&x(e)},loading:y,...C})]})},x=(0,i.memo)((0,i.forwardRef)(m))},7262:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(2791),a=n(4082);const o=e=>{let{api:t="",runFetch:n}=e;const{setRow:o}=(0,a.Z)({link:t,additionalFunctionToRun:n,method:"POST"}),{setRow:s}=(0,a.Z)({link:t,additionalFunctionToRun:n,method:"PUT"}),{setRow:d}=(0,a.Z)({link:t,additionalFunctionToRun:n,method:"Delete"});return{onSaveAndInsertion:(0,i.useCallback)((e=>{"n"===e.query_status?o(e):"u"===e.query_status?s(e):"d"===e.query_status&&d(e)}),[o,s,d])}}},4082:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(2791),a=n(1227),o=n(399),s=n(8382);const d=e=>{let{link:t="",noAuthorization:n=!1,additionalFunctionToRun:d,runOnSuccess:r,runOnFail:l,method:c="POST"}=e;const u=(0,s.p)(),h="http://144.24.209.19:9090/api/".concat(o.Z[t]),[p,m]=(0,i.useState)(),{authorization:x}=(0,a.Z)(),b=(0,i.useCallback)((async e=>{if(x||n){const n={method:c,headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(x)},body:JSON.stringify(e)};try{const e=await fetch(h,n),t=await e.json();return"success"===t.response?(u({position:"top-right",title:"Success",description:"".concat(t.response),status:"success",duration:5e3,isClosable:!0}),r&&r()):(u({position:"top-right",title:"Error",description:"".concat(t.message),status:"error",duration:9e3,isClosable:!0}),l&&l()),m(t),d&&d(),t}catch(t){}}}),[d,x,c,n,l,r,u,h]);return{success:p,setRow:(0,i.useCallback)((e=>{b(e)}),[b])}}},6314:(e,t,n)=>{n.d(t,{Z:()=>_});var i,a,o,s,d,r=n(2791),l=n(81),c=n(2125),u=n(168),h=n(225);const p=h.Z.div(i||(i=(0,u.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 2;\n"]))),m=h.Z.div(a||(a=(0,u.Z)(["\n  /* position: relative;\n    margin: 5% auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: ",";\n    height: ",";\n    background-color: white;\n    border-radius: 15px; */\n  /* max-height: 90vh;\n\tmax-width: 500px; */\n  width: ",";\n  height: ",";\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #fff;\n  border-radius: 15px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 15px 30px 0 rgba(#000, 0.25);\n  @media (max-width: 600px) {\n    width: 90%;\n  }\n"])),(e=>{let{width:t}=e;return t}),(e=>{let{height:t}=e;return t}),(e=>{let{width:t}=e;return t}),(e=>{let{height:t}=e;return t})),x=h.Z.div(o||(o=(0,u.Z)(["\n  padding: 15px 32px;\n  border-bottom: 1px solid #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),b=h.Z.div(s||(s=(0,u.Z)(["\n  margin: 10px 15px;\n  overflow-y: auto;\n  height: 100%;\n"]))),v=h.Z.div(d||(d=(0,u.Z)(['\n  padding: 35px 32px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  border-top: 1px solid #ddd;\n  gap: 12px;\n  position: relative;\n  &:after {\n    content: "";\n    display: block;\n    position: absolute;\n    top: -51px;\n    left: 24px;\n    right: 24px;\n    height: 50px;\n    flex-shrink: 0;\n    background-image: linear-gradient(to top, rgba(#fff, 0.75), transparent);\n    pointer-events: none;\n  }\n'])));var w=n(184);const g=e=>{let{children:t,visible:n=!1,label:i,onClose:a,onOK:o,submitTitle:s="smbt",width:d="90%",height:r="auto",hideSaveButton:u=!1,hideCloseButton:h=!1,noFooter:g=!1}=e;return(0,w.jsx)(w.Fragment,{children:n&&(0,w.jsx)(p,{hidden:!n,children:(0,w.jsxs)(m,{width:d,height:r,children:[(0,w.jsxs)(x,{children:[(0,w.jsx)(c.Z,{children:i}),(0,w.jsx)(l.Z,{label:"\xd7",width:"5%",backGround:"none",margin:"0",padding:"0","data-dismiss":"modal",onClick:a,fontWeight:"19px"})]}),(0,w.jsx)(b,{children:t}),!g&&(0,w.jsxs)(v,{hidden:g,children:[!u&&(0,w.jsx)(l.Z,{onClick:o,label:s,hidden:u,width:"20%",margin:"0"}),!h&&(0,w.jsx)(l.Z,{onClick:a,label:"cls",hidden:h,width:"20%",backGround:"red",margin:"0"})]})]})})})},_=(0,r.memo)(g)},1446:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var i=n(2791),a=n(890),o=(n(550),n(3623)),s=n(9230),d=n(5410),r=n(184);const l=e=>{let{mode:t="bar",width:n,height:i,margin:a,padding:l,label:c="chart",dataSource:u}=e;const{t:h}=(0,s.$G)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(d.Z,{flexDirection:"column",width:n,height:i,margin:a,padding:l,children:[(0,r.jsx)(d.Z,{width:"100%",justifyContent:"center",children:(0,r.jsx)("p",{children:h(c)})}),u&&(()=>{switch(t){case"line":return(0,r.jsx)(o.kL,{type:"line",data:u});case"pie":return(0,r.jsx)(o.kL,{type:"pie",data:u});case"bar":return(0,r.jsx)(o.kL,{type:"bar",data:u})}})()]})})},c=(0,i.memo)(l),u=e=>{let{api:t,params:n,...o}=e;const[s,d]=(0,i.useState)({labels:[],datasets:[{label:"",data:[]}]}),{data:l}=(0,a.Z)({link:t,fetchOnFirstRun:!0,params:n});return(0,i.useEffect)((()=>{Array.isArray(l)||d(l)}),[l]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(c,{dataSource:s,...o})})},h=(0,i.memo)(u);var p=n(3224),m=n(6314);const x=[{title:"itmnm",dataIndex:"item",width:"20%"},{title:"wdth",dataIndex:"width",width:"10%"},{title:"hght",dataIndex:"height",width:"10%"},{title:"sz",dataIndex:"size",width:"10%"},{title:"qnty",dataIndex:"quantity",width:"10%"},{title:"prc",dataIndex:"price",width:"10%"},{title:"total",dataIndex:"total",width:"10%"},{title:"nts",dataIndex:"notes",width:"18%"}],b=e=>{let{visible:t,onClose:n,invoiceType:i,invoiceNumber:a,withEdit:o}=e;return(0,r.jsx)(m.Z,{visible:t,label:"C"===i?"cstmrs":"splrs",onClose:n,noFooter:!0,children:(0,r.jsx)(p.Z,{api:"QUERY_INVOICE_DETAIL_TABLE_DATA",rowKey:"row_key",params:{invoice_type:i,invoice_no:a},columns:x,hideTools:!o,canDelete:!0,fetchOnFirstRun:!0,checkForParams:!1})})},v=(0,i.memo)(b),w=[{title:"no",dataIndex:"customer_invoice_id",width:"8%"},{title:"nm",dataIndex:"invoice_holder_name",width:"37%"},{title:"total",dataIndex:"customer_invoice_total",width:"10%"},{title:"dscnt",dataIndex:"customer_invoice_discount",width:"10%"},{title:"tlaftrdsnt",dataIndex:"customer_invoice_after_discount",width:"13%"},{title:"paid",dataIndex:"customer_invoice_paid",width:"10%"},{title:"crdt",dataIndex:"customer_invoice_credit",width:"10%"}],g=[{title:"no",dataIndex:"supplier_invoice_id",width:"8%"},{title:"nm",dataIndex:"invoice_holder_name",width:"37%"},{title:"total",dataIndex:"supplier_invoice_total",width:"10%"},{title:"dscnt",dataIndex:"supplier_invoice_discount",width:"10%"},{title:"tlaftrdsnt",dataIndex:"supplier_invoice_after_discount",width:"13%"},{title:"paid",dataIndex:"supplier_invoice_paid",width:"10%"},{title:"crdt",dataIndex:"supplier_invoice_credit",width:"10%"}],_=()=>{const[{invoiceType:e,invoiceNumber:t,visible:n},a]=(0,i.useState)({invoiceType:"",invoiceNumber:0,visible:!1}),o=(0,i.useCallback)((()=>{a({invoiceType:"",invoiceNumber:0,visible:!1})}),[]),s=(0,i.useCallback)((e=>{a({invoiceType:"C",invoiceNumber:e.customer_invoice_id,visible:!0})}),[]),l=(0,i.useCallback)((e=>{a({invoiceType:"S",invoiceNumber:e.supplier_invoice_id,visible:!0})}),[]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.Z,{width:"100%",children:[(0,r.jsxs)(d.Z,{width:"75%",flexDirection:"column",children:[(0,r.jsx)(p.Z,{api:"QUERY_CUSTOMERS_INVOICES_FOR_TODAY",rowKey:"customer_invoice_id",columns:w,fetchOnFirstRun:!0,label:"cstmrs",width:"100%",fixedHeight:"300px",onDoubleClick:s,noPagination:!0}),(0,r.jsx)(p.Z,{api:"QUERY_SUPPLIERS_INVOICES_FOR_TODAY",rowKey:"supplier_invoice_id",columns:g,fetchOnFirstRun:!0,width:"100%",fixedHeight:"300px",label:"splrs",onDoubleClick:l,noPagination:!0})]}),(0,r.jsx)(d.Z,{width:"25%",flexDirection:"column",children:(0,r.jsx)(h,{api:"QUERY_INVOICES_CHART_DATA",label:"invcs",mode:"pie",width:"90%"})})]}),(0,r.jsx)(v,{invoiceType:e,invoiceNumber:t,visible:n,onClose:o,withEdit:!1})]})},f=(0,i.memo)(_)}}]);
//# sourceMappingURL=446.376c4b58.chunk.js.map