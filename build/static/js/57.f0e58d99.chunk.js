"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[57],{8864:function(e,n,a){var t=a(2791),i=a(9230),o=a(184),s=function(e){var n=e.width,a=void 0===n?"200px":n,t=e.Options,s=e.onChange,l=e.Label,c=e.value,d=void 0===c?0:c,r=e.name,u=e.withLabel,_=void 0!==u&&u,h=e.margin,p=void 0===h?"10px":h,m=e.padding,v=(0,i.$G)().t;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"mb-1",style:{width:a,padding:m,margin:p},children:[(0,o.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:v(l)}),(0,o.jsxs)("select",{className:"form-select","aria-label":"Default select example",onChange:function(e){t.map((function(n){n.value===+e.target.value&&s(_?{value:n.value,label:n.label,name:r}:{value:n.value,name:r})}))},children:[(0,o.jsx)("option",{selected:!0,children:"Select"}),t.map((function(e){return(0,o.jsxs)("option",{value:e.value,selected:d===e.value&&!0,children:[" ",v(e.label)]},e.value)}))]})]})})};n.Z=(0,t.memo)(s)},6888:function(e,n,a){var t=a(2791),i=a(8864),o=a(3838),s=a(184),l=function(e){var n=e.width,a=e.Api,t=e.onChange,l=e.Label,c=e.name,d=void 0===c?"":c,r=e.value,u=void 0===r?0:r,_=e.withLabel,h=void 0!==_&&_,p=e.padding,m=e.margin,v=e.params,E=e.fetchOnFirstRun,f=void 0!==E&&E,x=(0,o.Z)({link:a,fetchOnFirstRun:f,params:v}).data;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(i.Z,{Options:x,onChange:t,Label:l,value:u,name:d,width:n,withLabel:h,margin:m,padding:p})})};n.Z=(0,t.memo)(l)},8634:function(e,n,a){a.d(n,{Z:function(){return _}});var t=a(1413),i=a(9439),o=a(2791),s=a(5702),l=a(3838),c=a(3785),d=function(e){var n=e.api,a=void 0===n?"":n,t=e.runFetch,s=(0,o.useState)({}),l=(0,i.Z)(s,2),d=l[0],r=l[1],u=(0,c.Z)({link:a,additionalFunctionToRun:t}).setRow;return{setSelectedRow:(0,o.useCallback)((function(e){r(e)}),[]),onSaveAndInsertion:function(){void 0!==d.query_status&&u(d)},selectedRow:d}},r=a(184),u=function(e){var n=e.api,a=e.postApi,c=e.columns,u=e.hideTools,_=e.canAdd,h=e.canEdit,p=e.canDelete,m=e.rowKey,v=e.Modal,E=e.width,f=e.onSelectedRow,x=e.fetchOnFirstRun,b=void 0!==x&&x,T=e.params,A=(0,l.Z)({link:n,fetchOnFirstRun:b,params:T}),S=A.data,C=A.runFetch,R=d({api:a,runFetch:C}),g=R.setSelectedRow,j=R.onSaveAndInsertion,w=R.selectedRow,L=(0,o.useState)({}),O=(0,i.Z)(L,2),Z=O[0],D=O[1],I=(0,o.useState)(!1),P=(0,i.Z)(I,2),y=P[0],k=P[1],U=(0,o.useCallback)((function(){g({query_status:"n"}),k(!0)}),[g]),N=(0,o.useCallback)((function(){g((0,t.Z)((0,t.Z)({},Z),{},{query_status:"u"})),k(!0)}),[Z,g]),Y=(0,o.useCallback)((function(){k(!1)}),[]),F=(0,o.useCallback)((function(){k(!1),j()}),[j]);return(0,r.jsxs)(r.Fragment,{children:[v&&(0,r.jsx)(v,{visible:y,onOK:F,onClose:Y,selectedRow:w,setSelectedRow:g}),(0,r.jsx)(s.Z,{dataSource:S,columns:c,hideTools:u,canAdd:_,canEdit:h,canDelete:p,rowKey:m,onAdd:U,onEdit:N,onDelete:function(){g((0,t.Z)((0,t.Z)({},Z),{},{query_status:"d"})),j()},onSelectedRow:function(e){D(e),f&&f(e)},width:E})]})},_=(0,o.memo)(u)},5702:function(e,n,a){a.d(n,{Z:function(){return u}});var t=a(9439),i=a(2791),o=a(184),s=function(e){var n=e.icon,a=e.onClick,t=e.disabled,i=void 0!==t&&t,s=e.width,l=void 0===s?"30px":s,c=e.height,d=void 0===c?"30px":c,r=e.color,u=e.margin,_=void 0===u?"10px":u,h=e.padding,p=e.hidden,m=void 0!==p&&p;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("button",{style:{border:"none",width:l,height:d,backgroundColor:r,padding:h,margin:_,borderRadius:"20px"},hidden:m,onClick:a,disabled:i,children:(0,o.jsx)("i",{className:n})})})},l=(0,i.memo)(s),c=a(898),d=a(9230),r=a(8535),u=function(e){var n=e.dataSource,a=e.rowKey,s=void 0===a?"rowKey":a,u=e.columns,_=e.hideTools,h=void 0===_||_,p=e.canEdit,m=void 0!==p&&p,v=e.canAdd,E=void 0!==v&&v,f=e.canDelete,x=void 0!==f&&f,b=e.onAdd,T=e.onEdit,A=e.onDelete,S=e.actionColumn,C=void 0!==S&&S,R=e.onAction,g=e.actionLabel,j=void 0===g?"":g,w=e.onSelectedRow,L=e.canPrint,O=void 0!==L&&L,Z=e.onPrint,D=e.additionalButtons,I=e.onSave,P=e.canSave,y=void 0!==P&&P,k=e.width,U=void 0===k?"100%":k,N=e.margin,Y=void 0===N?"":N,F=e.padding,B=void 0===F?"":F,M=(0,d.$G)().t,Q=(0,i.useState)(),H=(0,t.Z)(Q,2),V=H[0],z=H[1],K=(0,i.useCallback)((function(e){return function(){w(e),z(e)}}),[w]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{style:{width:U,padding:B,margin:Y},children:[(0,o.jsxs)(r.Z,{width:"100%",padding:"0",margin:"5px 0",justifyContent:"center",hidden:h,children:[(0,o.jsx)(l,{icon:"fa-sharp fa-solid fa-plus",onClick:b,hidden:!E}),(0,o.jsx)(l,{icon:"fa-sharp fa-solid fa-pen-clip",onClick:T,hidden:!m,disabled:!V}),(0,o.jsx)(l,{icon:"fa-sharp fa-solid fa-trash",onClick:A,hidden:!x,disabled:!V}),D&&D.map((function(e){return(0,o.jsx)(l,{icon:e.icon,onClick:e.onClick,disabled:e.disabled,hidden:!1})})),(0,o.jsx)(l,{icon:"fa-solid fa-floppy-disk",onClick:I,hidden:!y,disabled:!y}),(0,o.jsx)(l,{icon:"fa-solid fa-print",onClick:Z,hidden:!O,disabled:!O})]}),(0,o.jsx)("table",{className:"table m-0",children:(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{className:"table-secondary",children:[u.map((function(e){return(0,o.jsx)("th",{scope:"col",style:{width:e.width},children:M(e.title)})})),(0,o.jsx)("th",{hidden:!C,children:M("actn")})]})})}),(0,o.jsx)("div",{className:"tbl-content",children:(0,o.jsx)("table",{className:"table ",children:(0,o.jsx)("tbody",{children:null===n||void 0===n?void 0:n.map((function(e){return(0,o.jsxs)("tr",{onClick:K(e),children:[u.map((function(n){return(0,o.jsx)("td",{className:"".concat(V===e?"table-success":"table-light"," "),style:{width:n.width},children:e[n.dataIndex]})})),(0,o.jsx)("td",{className:"".concat(V===e?"table-success":"table-light"," "),hidden:!C,children:(0,o.jsx)(c.Z,{label:j,onClick:function(){R(e)}})})]},e[s])}))})})})]})})}},399:function(e,n){n.Z={QUERY_CUSTOMER_TABLE_DATA:"basicData/customers",POST_CUSTOMER_TABLE_DATA:"basicData/customers_dml",QUERY_SUPPLIER_TABLE_DATA:"basicData/suppliers",POST_SUPPLIER_TABLE_DATA:"basicData/suppliers_dml",POST_CUSTOMER_INVOICE_DETAILS:"invoices/customer_invoice_dml",POST_EMPLOYEE_ATTENDANCE:"employeesData/employee_attendance_dml",POST_EMPLOYEE_LEAVING:"employeesData/employee_leaving_dml",QUERY_EMPLOYEES_TABLE_DATA:"employeesData/employees",POST_EMPLOYEES_TABLE_DATA:"employeesData/employees_dml",QUERY_INVOICE_DETAIL_TABLE_DATA:"invoices/get_invoice_detail",QUERY_INVOICE_MASTER_TABLE_DATA:"invoices/get_invoice_master",QUERY_ITEMS_TABLE_DATA:"basicData/items",POST_ITEMS_TABLE_DATA:"basicData/items_dml",QUERY_PRINT_OPTIONS_TABLE_DAT:"basicData/print_options",POST_PRINT_OPTIONS_TABLE_DATA:"basicData/print_options_dml",USER_LOG_IN:"user_log_in",POST_SUPPLIER_INVOICE:"invoices/supplier_invoice_dml",QUERY_LABELS:"get_labels",QUERY_CHUNK_LABELS:"get_chunk_labels",QUERY_EMPLOYEE_NAME_LIST:"employeesData/pop_employee_name",QUERY_CUSTOMER_AND_SUPPLIER_LIST:"invoices/get_customer_supplier_list",QUERY_SUPPLIER_LIST:"basicData/supplier_pop_data",QUERY_CUSTOMERS_LIST:"basicData/customer_pop_data",QUERY_ITEMS_LIST:"basicData/items_pop_data",QUERY_PRINT_OPTIONS_LIST:"basicData/print_options_pop_data",QUERY_EMPLOYEE_SHEET_SALARY:"employeesData/employee_sheet",QUERY_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/get_casher_receipt_voucher_invoices",POST_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/post_casher_receipt_voucher_invoices_dml",QUERY_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_expense/get_casher_payment_voucher_invoices",POST_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_expense/post_casher_payment_voucher_invoices_dml",QUERY_MAIN_CHART_DATA:"home/dash_board_get_data",QUERY_EXPENSES_TYPES_TABLE_DATA:"basicData/expenses_types_data",POST_EXPENSES_TYPES_TABLE_DATA:"basicData/expenses_types_dml"}},3838:function(e,n,a){var t=a(4165),i=a(5861),o=a(9439),s=a(2791),l=a(399),c=a(1227),d=a(1295);n.Z=function(e){var n=e.link,a=void 0===n?"":n,r=e.fetchOnFirstRun,u=(e.refreshTimeout,e.params),_=e.noAuthorization,h=void 0!==_&&_,p=(0,d.p)(),m=(0,c.Z)().authorization,v="http://144.24.209.19:9090/api/v1/".concat(l.Z[a]),E=(0,s.useState)([]),f=(0,o.Z)(E,2),x=f[0],b=f[1],T=(0,s.useCallback)((0,i.Z)((0,t.Z)().mark((function e(){var n,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m&&!h){e.next=8;break}return e.next=3,fetch("".concat(v,"?authorization=").concat(m,"&").concat(new URLSearchParams(u)));case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,b(a);case 8:case"end":return e.stop()}}),e)}))),[m,h,u,v]);(0,s.useEffect)((function(){r&&T()}),[r,T,v,u]),(0,s.useEffect)((function(){x.response&&p({position:"top-right",title:"error",description:"".concat(JSON.stringify(x.response)),status:"error",duration:5e3,isClosable:!0})}),[x,p]);var A=(0,s.useCallback)((function(){T()}),[T]);return{data:x,runFetch:A,setData:b}}},8245:function(e,n,a){var t=a(4942),i=a(1413),o=a(9439),s=a(2791);n.Z=function(e){var n=e.initialValue,a=e.setSelectedRow,l=(0,s.useState)(),c=(0,o.Z)(l,2),d=c[0],r=c[1],u=(0,s.useState)({}),_=(0,o.Z)(u,2),h=_[0],p=_[1],m=(0,s.useCallback)((function(e){a&&a((0,i.Z)((0,i.Z)({},n),{},(0,t.Z)({},e.name,e.value))),p((0,i.Z)((0,i.Z)({},h),{},(0,t.Z)({},e.name,e.value))),r(d)}),[d,n,a,h]);(0,s.useEffect)((function(){a&&p(n)}),[n,a]),(0,s.useEffect)((function(){p(n)}),[]);var v=(0,s.useCallback)((function(){a(d)}),[d,a]);return{state:h,onChange:m,resetState:v}}},3785:function(e,n,a){var t=a(4165),i=a(5861),o=a(9439),s=a(2791),l=a(1227),c=a(399),d=a(1295);n.Z=function(e){var n=e.link,a=void 0===n?"":n,r=e.noAuthorization,u=void 0!==r&&r,_=e.additionalFunctionToRun,h=e.runOnSuccess,p=e.runOnFail,m=(0,d.p)(),v="http://144.24.209.19:9090/api/v1/".concat(c.Z[a]),E=(0,s.useState)(),f=(0,o.Z)(E,2),x=f[0],b=f[1],T=(0,l.Z)().authorization,A=(0,s.useCallback)(function(){var e=(0,i.Z)((0,t.Z)().mark((function e(n){var a,i,o;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!T&&!u){e.next=18;break}return n.authorization=T,a={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)},e.prev=3,e.next=6,fetch(v,a);case 6:return i=e.sent,e.next=9,i.json();case 9:return"success"===(o=e.sent).response?(m({position:"top-right",title:"Success",description:"".concat(o.response),status:"success",duration:5e3,isClosable:!0}),h&&h()):(m({position:"top-right",title:"Error",description:"".concat(o.response),status:"error",duration:9e3,isClosable:!0}),p&&p()),b(o),_&&_(),e.abrupt("return",o);case 16:e.prev=16,e.t0=e.catch(3);case 18:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(n){return e.apply(this,arguments)}}(),[_,T,u,p,h,m,v]);return{success:x,setRow:(0,s.useCallback)((function(e){A(e)}),[A])}}},1875:function(e,n,a){var t=a(2791),i=a(9230),o=a(184),s=function(e){var n=e.name,a=e.Label,s=void 0===a?"name":a,l=e.placeHolder,c=e.width,d=void 0===c?"30%":c,r=e.height,u=void 0===r?"100px":r,_=e.padding,h=e.margin,p=void 0===h?"10px":h,m=e.onChange,v=e.value,E=e.disabled,f=(0,i.$G)().t,x=(0,t.useCallback)((function(e){m({name:n,value:e.target.value})}),[n,m]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"mb-1 d-inline-block",style:{height:u,width:d,padding:_,margin:p},children:[(0,o.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:f(s)}),(0,o.jsx)("textarea",{className:"form-control",placeholder:f(l),id:"floatingTextarea2Disabled",value:v,disabled:E,onChange:x})]})})};n.Z=(0,t.memo)(s)},7595:function(e,n,a){var t=a(2791),i=a(9230),o=a(176),s=a(4585),l=a(7886),c=a(184),d=function(e){var n=e.disabled,a=e.value,d=e.name,r=e.Label,u=void 0===r?"":r,_=e.onChange,h=e.width,p=void 0===h?"200px":h,m=e.type,v=void 0===m?"text":m,E=e.placeHolder,f=e.padding,x=e.margin,b=void 0===x?"10px":x,T=e.className,A=void 0===T?"":T,S=e.required,C=void 0!==S&&S,R=(0,i.$G)().t,g=(0,t.useCallback)((function(e){_({name:d,value:e.target.value})}),[d,_]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(o.k,{direction:"column",w:p,padding:f,margin:b,children:[(0,c.jsx)(s.l,{children:R(u)}),(0,c.jsx)(l.I,{placeholder:E,size:"md",isDisabled:n,isRequired:C,onChange:g,width:"100%",className:A,value:a,type:v})]})})};n.Z=(0,t.memo)(d)},2080:function(e,n,a){var t=a(2791),i=a(9230),o=a(1820),s=a(3380),l=a(1078),c=a(7693),d=a(1461),r=a(7521),u=a(176),_=a(4653),h=a(4224),p=a(184),m=function(e){var n=e.children,a=e.visible,t=void 0!==a&&a,m=e.label,v=e.onClose,E=e.onOK,f=e.submitTitle,x=void 0===f?"smbt":f,b=e.width,T=void 0===b?"3xl":b,A=e.hideSaveButton,S=void 0!==A&&A,C=e.hideCloseButton,R=void 0!==C&&C,g=(0,i.$G)().t;return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(o.u_,{isOpen:t,onClose:v,size:T,children:[(0,p.jsx)(s.Z,{}),(0,p.jsxs)(l.h,{children:[(0,p.jsx)(c.x,{children:g(m)}),(0,p.jsx)(d.o,{}),(0,p.jsx)(r.f,{children:(0,p.jsx)(u.k,{w:"100%",padding:"5px",wrap:"wrap",children:n})}),(0,p.jsx)(_.m,{children:(0,p.jsxs)(u.k,{w:"25%",justifyContent:"space-around",children:[(0,p.jsx)(h.z,{colorScheme:"red",mr:3,onClick:v,hidden:R,children:g("cls")}),(0,p.jsx)(h.z,{colorScheme:"blue",onClick:E,hidden:S,children:g(x)})]})})]})]})})};n.Z=(0,t.memo)(m)},3057:function(e,n,a){a.r(n),a.d(n,{default:function(){return f}});var t=a(2791),i=a(8535),o=a(7595),s=a(8634),l=[{title:"dt",dataIndex:"date",width:"10%"},{title:"amnt",dataIndex:"amount",width:"10%"},{title:"vchrnm",dataIndex:"voucher_name",width:"10%"},{title:"cstmrnm",dataIndex:"customer_name",width:"15%"},{title:"splrnm",dataIndex:"supplier_name",width:"15%"},{title:"nts",dataIndex:"notes",width:"10%"}],c=[{label:"splr",value:1},{label:"cstmr",value:2}],d=a(8245),r=a(2080),u=a(1875),_=a(8864),h=a(6888),p=a(184),m=function(e){var n=e.visible,a=e.onOK,t=e.onClose,i=e.setSelectedRow,s=e.selectedRow,l=(0,d.Z)({initialValue:s,setSelectedRow:i}),m=l.state,v=l.onChange,E=m.date,f=m.voucher_type,x=m.person_id,b=m.amount,T=m.notes;return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(r.Z,{visible:n,label:"Details",onOK:a,onClose:t,children:[(0,p.jsx)(o.Z,{name:"date",type:"date",onChange:v,value:E,Label:"dt",width:"47%"}),(0,p.jsx)(o.Z,{name:"amount",type:"number",onChange:v,value:b,Label:"amnt",width:"47%"}),(0,p.jsx)(_.Z,{name:"voucher_type",onChange:v,value:f,Label:"vchr",width:"47%",Options:c}),(0,p.jsx)(h.Z,{name:"person_id",Api:"QUERY_CUSTOMER_AND_SUPPLIER_LIST",Label:"nm",params:{invoice_type:f},value:x,fetchOnFirstRun:!0,width:"47%",onChange:v}),(0,p.jsx)(u.Z,{width:"100%",name:"notes",onChange:v,value:T,Label:"nts"})]})})},v=(0,t.memo)(m),E=function(){var e=(0,d.Z)({initialValue:{date_from:"",date_to:""}}),n=e.state,a=e.onChange;return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(i.Z,{width:"100%",flexDirection:"column",children:[(0,p.jsxs)(i.Z,{width:"100%",children:[(0,p.jsx)(o.Z,{name:"date_from",type:"date",Label:"from",onChange:a}),(0,p.jsx)(o.Z,{name:"date_to",type:"date",Label:"to",onChange:a})]}),(0,p.jsx)(s.Z,{api:"QUERY_CASHER_RECEIPT_VOUCHER_TABLE_DATA",postApi:"POST_CASHER_RECEIPT_VOUCHER_TABLE_DATA",columns:l,hideTools:!1,canEdit:!0,canAdd:!0,canDelete:!0,rowKey:"receipt_voucher_id",params:{date_from:n.date_from,date_to:n.date_to},Modal:v,fetchOnFirstRun:!0})]})})},f=(0,t.memo)(E)}}]);
//# sourceMappingURL=57.f0e58d99.chunk.js.map