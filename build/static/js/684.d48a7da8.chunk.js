"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[684],{8864:function(e,n,t){var a=t(2791),i=t(9230),o=t(184),s=function(e){var n=e.width,t=void 0===n?"200px":n,a=e.Options,s=e.onChange,c=e.Label,l=e.value,d=void 0===l?0:l,r=e.name,u=e.withLabel,_=void 0!==u&&u,p=e.margin,h=void 0===p?"10px":p,m=e.padding,v=(0,i.$G)().t;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"mb-1",style:{width:t,padding:m,margin:h},children:[(0,o.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:v(c)}),(0,o.jsxs)("select",{className:"form-select","aria-label":"Default select example",onChange:function(e){a.map((function(n){n.value===+e.target.value&&s(_?{value:n.value,label:n.label,name:r}:{value:n.value,name:r})}))},children:[(0,o.jsx)("option",{selected:!0,children:"Select"}),a.map((function(e){return(0,o.jsxs)("option",{value:e.value,selected:d===e.value&&!0,children:[" ",v(e.label)]},e.value)}))]})]})})};n.Z=(0,a.memo)(s)},6888:function(e,n,t){var a=t(2791),i=t(8864),o=t(3838),s=t(184),c=function(e){var n=e.width,t=e.Api,a=e.onChange,c=e.Label,l=e.name,d=void 0===l?"":l,r=e.value,u=void 0===r?0:r,_=e.withLabel,p=void 0!==_&&_,h=e.padding,m=e.margin,v=e.params,E=e.fetchOnFirstRun,f=void 0!==E&&E,x=(0,o.Z)({link:t,fetchOnFirstRun:f,params:v}).data;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(i.Z,{Options:x,onChange:a,Label:c,value:u,name:d,width:n,withLabel:p,margin:m,padding:h})})};n.Z=(0,a.memo)(c)},8634:function(e,n,t){t.d(n,{Z:function(){return _}});var a=t(1413),i=t(9439),o=t(2791),s=t(5702),c=t(3838),l=t(3785),d=function(e){var n=e.api,t=void 0===n?"":n,a=e.runFetch,s=(0,o.useState)({}),c=(0,i.Z)(s,2),d=c[0],r=c[1],u=(0,l.Z)({link:t,additionalFunctionToRun:a}).setRow;return{setSelectedRow:(0,o.useCallback)((function(e){r(e)}),[]),onSaveAndInsertion:function(){void 0!==d.query_status&&u(d)},selectedRow:d}},r=t(184),u=function(e){var n=e.api,t=e.postApi,l=e.columns,u=e.hideTools,_=e.canAdd,p=e.canEdit,h=e.canDelete,m=e.rowKey,v=e.Modal,E=e.width,f=e.onSelectedRow,x=e.fetchOnFirstRun,b=void 0!==x&&x,T=e.params,A=(0,c.Z)({link:n,fetchOnFirstRun:b,params:T}),S=A.data,R=A.runFetch,g=d({api:t,runFetch:R}),C=g.setSelectedRow,w=g.onSaveAndInsertion,j=g.selectedRow,L=(0,o.useState)({}),I=(0,i.Z)(L,2),y=I[0],D=I[1],O=(0,o.useState)(!1),Z=(0,i.Z)(O,2),P=Z[0],k=Z[1],N=(0,o.useCallback)((function(){C({query_status:"n"}),k(!0)}),[C]),U=(0,o.useCallback)((function(){C((0,a.Z)((0,a.Z)({},y),{},{query_status:"u"})),k(!0)}),[y,C]),Y=(0,o.useCallback)((function(){k(!1)}),[]),F=(0,o.useCallback)((function(){k(!1),w()}),[w]);return(0,r.jsxs)(r.Fragment,{children:[v&&(0,r.jsx)(v,{visible:P,onOK:F,onClose:Y,selectedRow:j,setSelectedRow:C}),(0,r.jsx)(s.Z,{dataSource:S,columns:l,hideTools:u,canAdd:_,canEdit:p,canDelete:h,rowKey:m,onAdd:N,onEdit:U,onDelete:function(){C((0,a.Z)((0,a.Z)({},y),{},{query_status:"d"})),w()},onSelectedRow:function(e){D(e),f&&f(e)},width:E})]})},_=(0,o.memo)(u)},5702:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(9439),i=t(2791),o=t(184),s=function(e){var n=e.icon,t=e.onClick,a=e.disabled,i=void 0!==a&&a,s=e.width,c=void 0===s?"30px":s,l=e.height,d=void 0===l?"30px":l,r=e.color,u=e.margin,_=void 0===u?"10px":u,p=e.padding,h=e.hidden,m=void 0!==h&&h;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("button",{style:{border:"none",width:c,height:d,backgroundColor:r,padding:p,margin:_,borderRadius:"20px"},hidden:m,onClick:t,disabled:i,children:(0,o.jsx)("i",{className:n})})})},c=(0,i.memo)(s),l=t(898),d=t(9230),r=t(8535),u=function(e){var n=e.dataSource,t=e.rowKey,s=void 0===t?"rowKey":t,u=e.columns,_=e.hideTools,p=void 0===_||_,h=e.canEdit,m=void 0!==h&&h,v=e.canAdd,E=void 0!==v&&v,f=e.canDelete,x=void 0!==f&&f,b=e.onAdd,T=e.onEdit,A=e.onDelete,S=e.actionColumn,R=void 0!==S&&S,g=e.onAction,C=e.actionLabel,w=void 0===C?"":C,j=e.onSelectedRow,L=e.canPrint,I=void 0!==L&&L,y=e.onPrint,D=e.additionalButtons,O=e.onSave,Z=e.canSave,P=void 0!==Z&&Z,k=e.width,N=void 0===k?"100%":k,U=e.margin,Y=void 0===U?"":U,F=e.padding,B=void 0===F?"":F,Q=(0,d.$G)().t,M=(0,i.useState)(),V=(0,a.Z)(M,2),H=V[0],z=V[1],q=(0,i.useCallback)((function(e){return function(){j(e),z(e)}}),[j]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{style:{width:N,padding:B,margin:Y},children:[(0,o.jsxs)(r.Z,{width:"100%",padding:"0",margin:"5px 0",justifyContent:"center",hidden:p,children:[(0,o.jsx)(c,{icon:"fa-sharp fa-solid fa-plus",onClick:b,hidden:!E}),(0,o.jsx)(c,{icon:"fa-sharp fa-solid fa-pen-clip",onClick:T,hidden:!m,disabled:!H}),(0,o.jsx)(c,{icon:"fa-sharp fa-solid fa-trash",onClick:A,hidden:!x,disabled:!H}),D&&D.map((function(e){return(0,o.jsx)(c,{icon:e.icon,onClick:e.onClick,disabled:e.disabled,hidden:!1})})),(0,o.jsx)(c,{icon:"fa-solid fa-floppy-disk",onClick:O,hidden:!P,disabled:!P}),(0,o.jsx)(c,{icon:"fa-solid fa-print",onClick:y,hidden:!I,disabled:!I})]}),(0,o.jsx)("table",{className:"table m-0",children:(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{className:"table-secondary",children:[u.map((function(e){return(0,o.jsx)("th",{scope:"col",style:{width:e.width},children:Q(e.title)})})),(0,o.jsx)("th",{hidden:!R,children:Q("actn")})]})})}),(0,o.jsx)("div",{className:"tbl-content",children:(0,o.jsx)("table",{className:"table ",children:(0,o.jsx)("tbody",{children:null===n||void 0===n?void 0:n.map((function(e){return(0,o.jsxs)("tr",{onClick:q(e),children:[u.map((function(n){return(0,o.jsx)("td",{className:"".concat(H===e?"table-success":"table-light"," "),style:{width:n.width},children:e[n.dataIndex]})})),(0,o.jsx)("td",{className:"".concat(H===e?"table-success":"table-light"," "),hidden:!R,children:(0,o.jsx)(l.Z,{label:w,onClick:function(){g(e)}})})]},e[s])}))})})})]})})}},399:function(e,n){n.Z={QUERY_CUSTOMER_TABLE_DATA:"basicData/customers",POST_CUSTOMER_TABLE_DATA:"basicData/customers_dml",QUERY_SUPPLIER_TABLE_DATA:"basicData/suppliers",POST_SUPPLIER_TABLE_DATA:"basicData/suppliers_dml",POST_CUSTOMER_INVOICE_DETAILS:"invoices/customer_invoice_dml",POST_EMPLOYEE_ATTENDANCE:"employeesData/employee_attendance_dml",POST_EMPLOYEE_LEAVING:"employeesData/employee_leaving_dml",QUERY_EMPLOYEES_TABLE_DATA:"employeesData/employees",POST_EMPLOYEES_TABLE_DATA:"employeesData/employees_dml",QUERY_INVOICE_DETAIL_TABLE_DATA:"invoices/get_invoice_detail",QUERY_INVOICE_MASTER_TABLE_DATA:"invoices/get_invoice_master",QUERY_ITEMS_TABLE_DATA:"basicData/items",POST_ITEMS_TABLE_DATA:"basicData/items_dml",QUERY_PRINT_OPTIONS_TABLE_DAT:"basicData/print_options",POST_PRINT_OPTIONS_TABLE_DATA:"basicData/print_options_dml",USER_LOG_IN:"user_log_in",POST_SUPPLIER_INVOICE:"invoices/supplier_invoice_dml",QUERY_LABELS:"get_labels",QUERY_CHUNK_LABELS:"get_chunk_labels",QUERY_EMPLOYEE_NAME_LIST:"employeesData/pop_employee_name",QUERY_CUSTOMER_AND_SUPPLIER_LIST:"invoices/get_customer_supplier_list",QUERY_SUPPLIER_LIST:"basicData/supplier_pop_data",QUERY_CUSTOMERS_LIST:"basicData/customer_pop_data",QUERY_ITEMS_LIST:"basicData/items_pop_data",QUERY_PRINT_OPTIONS_LIST:"basicData/print_options_pop_data",QUERY_EMPLOYEE_SHEET_SALARY:"employeesData/employee_sheet",QUERY_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/get_casher_receipt_voucher_invoices",POST_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/post_casher_receipt_voucher_invoices_dml",QUERY_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_expense/get_casher_payment_voucher_invoices",POST_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_expense/post_casher_payment_voucher_invoices_dml",QUERY_MAIN_CHART_DATA:"home/dash_board_get_data",QUERY_EXPENSES_TYPES_TABLE_DATA:"basicData/expenses_types_data",POST_EXPENSES_TYPES_TABLE_DATA:"basicData/expenses_types_dml"}},3838:function(e,n,t){var a=t(4165),i=t(5861),o=t(9439),s=t(2791),c=t(399),l=t(1227),d=t(1295);n.Z=function(e){var n=e.link,t=void 0===n?"":n,r=e.fetchOnFirstRun,u=(e.refreshTimeout,e.params),_=e.noAuthorization,p=void 0!==_&&_,h=(0,d.p)(),m=(0,l.Z)().authorization,v="http://144.24.209.19:9090/api/v1/".concat(c.Z[t]),E=(0,s.useState)([]),f=(0,o.Z)(E,2),x=f[0],b=f[1],T=(0,s.useCallback)((0,i.Z)((0,a.Z)().mark((function e(){var n,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m&&!p){e.next=8;break}return e.next=3,fetch("".concat(v,"?authorization=").concat(m,"&").concat(new URLSearchParams(u)));case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,b(t);case 8:case"end":return e.stop()}}),e)}))),[m,p,u,v]);(0,s.useEffect)((function(){r&&T()}),[r,T,v,u]),(0,s.useEffect)((function(){x.response&&h({position:"top-right",title:"error",description:"".concat(JSON.stringify(x.response)),status:"error",duration:5e3,isClosable:!0})}),[x,h]);var A=(0,s.useCallback)((function(){T()}),[T]);return{data:x,runFetch:A,setData:b}}},8245:function(e,n,t){var a=t(4942),i=t(1413),o=t(9439),s=t(2791);n.Z=function(e){var n=e.initialValue,t=e.setSelectedRow,c=(0,s.useState)(),l=(0,o.Z)(c,2),d=l[0],r=l[1],u=(0,s.useState)({}),_=(0,o.Z)(u,2),p=_[0],h=_[1],m=(0,s.useCallback)((function(e){t&&t((0,i.Z)((0,i.Z)({},n),{},(0,a.Z)({},e.name,e.value))),h((0,i.Z)((0,i.Z)({},p),{},(0,a.Z)({},e.name,e.value))),r(d)}),[d,n,t,p]);(0,s.useEffect)((function(){t&&h(n)}),[n,t]),(0,s.useEffect)((function(){h(n)}),[]);var v=(0,s.useCallback)((function(){t(d)}),[d,t]);return{state:p,onChange:m,resetState:v}}},3785:function(e,n,t){var a=t(4165),i=t(5861),o=t(9439),s=t(2791),c=t(1227),l=t(399),d=t(1295);n.Z=function(e){var n=e.link,t=void 0===n?"":n,r=e.noAuthorization,u=void 0!==r&&r,_=e.additionalFunctionToRun,p=e.runOnSuccess,h=e.runOnFail,m=(0,d.p)(),v="http://144.24.209.19:9090/api/v1/".concat(l.Z[t]),E=(0,s.useState)(),f=(0,o.Z)(E,2),x=f[0],b=f[1],T=(0,c.Z)().authorization,A=(0,s.useCallback)(function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t,i,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!T&&!u){e.next=18;break}return n.authorization=T,t={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)},e.prev=3,e.next=6,fetch(v,t);case 6:return i=e.sent,e.next=9,i.json();case 9:return"success"===(o=e.sent).response?(m({position:"top-right",title:"Success",description:"".concat(o.response),status:"success",duration:5e3,isClosable:!0}),p&&p()):(m({position:"top-right",title:"Error",description:"".concat(o.response),status:"error",duration:9e3,isClosable:!0}),h&&h()),b(o),_&&_(),e.abrupt("return",o);case 16:e.prev=16,e.t0=e.catch(3);case 18:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(n){return e.apply(this,arguments)}}(),[_,T,u,h,p,m,v]);return{success:x,setRow:(0,s.useCallback)((function(e){A(e)}),[A])}}},7595:function(e,n,t){var a=t(2791),i=t(9230),o=t(176),s=t(4585),c=t(7886),l=t(184),d=function(e){var n=e.disabled,t=e.value,d=e.name,r=e.Label,u=void 0===r?"":r,_=e.onChange,p=e.width,h=void 0===p?"200px":p,m=e.type,v=void 0===m?"text":m,E=e.placeHolder,f=e.padding,x=e.margin,b=void 0===x?"10px":x,T=e.className,A=void 0===T?"":T,S=e.required,R=void 0!==S&&S,g=(0,i.$G)().t,C=(0,a.useCallback)((function(e){_({name:d,value:e.target.value})}),[d,_]);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(o.k,{direction:"column",w:h,padding:f,margin:b,children:[(0,l.jsx)(s.l,{children:g(u)}),(0,l.jsx)(c.I,{placeholder:E,size:"md",isDisabled:n,isRequired:R,onChange:C,width:"100%",className:A,value:t,type:v})]})})};n.Z=(0,a.memo)(d)},7684:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var a=t(9439),i=t(2791),o=t(8634),s=[{title:"no",dataIndex:"invoice_id",width:"15%"},{title:"nm",dataIndex:"name",width:"20%"},{title:"dt",dataIndex:"date",width:"10%"},{title:"total",dataIndex:"total",width:"10%"}],c=[{title:"itmid",dataIndex:"item_id",width:"7%"},{title:"itmnm",dataIndex:"item_name",width:"15%"},{title:"wdth",dataIndex:"width",width:"5%"},{title:"hght",dataIndex:"height",width:"5%"},{title:"sz",dataIndex:"size",width:"5%"},{title:"qnty",dataIndex:"quantity",width:"5%"},{title:"prc",dataIndex:"price",width:"5%"},{title:"total",dataIndex:"total",width:"5%"}],l=[{label:"splr",value:1},{label:"cstmr",value:2}],d=t(9230),r=t(184),u=function(e){var n=e.name,t=e.options,a=e.width,o=e.onChange,s=e.value,c=e.Label,l=e.margin,u=void 0===l?"10px":l,_=e.padding,p=(0,d.$G)().t,h=(0,i.useCallback)((function(e){o({name:n,value:e})}),[n,o]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"mb-1",style:{width:a,margin:u,padding:_},children:[(0,r.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:c}),(0,r.jsx)("div",{className:"radio flex-row form-control ",style:{display:"flex"},children:t.map((function(e){return(0,r.jsxs)("div",{className:"form-check",children:[(0,r.jsx)("input",{className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1",checked:e.checked||s===e.value,onClick:function(){h(e.value)}}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"flexRadioDefault1",children:p(e.label)})]})}))})]})})},_=(0,i.memo)(u),p=t(6888),h=t(7595),m=t(8535),v=function(e){var n=e.changeSearchParams,t=e.searchParams;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(m.Z,{bordered:!0,width:"100%",children:[(0,r.jsx)(_,{name:"invoice_type",options:l,value:t.invoice_type,onChange:n,Label:"Invoice Type"}),(0,r.jsx)(h.Z,{name:"invoice_number",Label:"No.",onChange:n,type:"number",value:t.invoice_number}),(0,r.jsx)(p.Z,{name:"person_id",Api:"QUERY_CUSTOMER_AND_SUPPLIER_LIST",Label:"nm",params:{invoice_type:t.invoice_type},value:t.name,fetchOnFirstRun:!0,onChange:n})]})})},E=(0,i.memo)(v),f=t(8245),x=function(){var e=(0,i.useState)({invoice_id:""}),n=(0,a.Z)(e,2),t=n[0],l=n[1],d=(0,f.Z)({initialValue:{invoice_type:"",invoice_number:"",person_id:"",date_from:"",date_to:""}}),u=d.state,_=d.onChange,p=u.invoice_type,h=u.invoice_number,v=u.person_id,x=(0,i.useCallback)((function(e){l(e)}),[]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(m.Z,{width:"100%",margin:"0",padding:"0",flexDirection:"column",children:[(0,r.jsx)(E,{changeSearchParams:_,searchParams:u}),(0,r.jsxs)(m.Z,{width:"100%",margin:"0",padding:"0",justifyContent:"space-between",children:[(0,r.jsx)(m.Z,{width:"40%",children:(0,r.jsx)(o.Z,{columns:s,api:"QUERY_INVOICE_MASTER_TABLE_DATA",rowKey:"invoice_id",fetchOnFirstRun:!0,params:{invoice_type:p,invoice_number:h,person_id:v},onSelectedRow:x})}),(0,r.jsx)(m.Z,{width:"60%",children:(0,r.jsx)(o.Z,{columns:c,api:"QUERY_INVOICE_DETAIL_TABLE_DATA",rowKey:"row_key",fetchOnFirstRun:!0,params:{invoice_type:p,invoice_number:t.invoice_id}})})]})]})})},b=(0,i.memo)(x)}}]);
//# sourceMappingURL=684.d48a7da8.chunk.js.map