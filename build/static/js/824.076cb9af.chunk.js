"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[824],{8864:function(e,n,t){var a=t(2791),i=t(9230),o=t(184),s=function(e){var n=e.width,t=void 0===n?"200px":n,a=e.Options,s=e.onChange,l=e.Label,c=e.value,d=void 0===c?0:c,r=e.name,u=e.withLabel,_=void 0!==u&&u,h=e.margin,m=void 0===h?"10px":h,p=e.padding,v=(0,i.$G)().t;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"mb-1",style:{width:t,padding:p,margin:m},children:[(0,o.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:v(l)}),(0,o.jsxs)("select",{className:"form-select","aria-label":"Default select example",onChange:function(e){a.map((function(n){n.value===+e.target.value&&s(_?{value:n.value,label:n.label,name:r}:{value:n.value,name:r})}))},children:[(0,o.jsx)("option",{selected:!0,children:"Select"}),a.map((function(e){return(0,o.jsxs)("option",{value:e.value,selected:d===e.value&&!0,children:[" ",v(e.label)]},e.value)}))]})]})})};n.Z=(0,a.memo)(s)},6888:function(e,n,t){var a=t(2791),i=t(8864),o=t(3838),s=t(184),l=function(e){var n=e.width,t=e.Api,a=e.onChange,l=e.Label,c=e.name,d=void 0===c?"":c,r=e.value,u=void 0===r?0:r,_=e.withLabel,h=void 0!==_&&_,m=e.padding,p=e.margin,v=e.params,f=e.fetchOnFirstRun,E=void 0!==f&&f,x=(0,o.Z)({link:t,fetchOnFirstRun:E,params:v}).data;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(i.Z,{Options:x,onChange:a,Label:l,value:u,name:d,width:n,withLabel:h,margin:p,padding:m})})};n.Z=(0,a.memo)(l)},8634:function(e,n,t){t.d(n,{Z:function(){return _}});var a=t(1413),i=t(9439),o=t(2791),s=t(5702),l=t(3838),c=t(3785),d=function(e){var n=e.api,t=void 0===n?"":n,a=(0,o.useState)({}),s=(0,i.Z)(a,2),l=s[0],d=s[1],r=(0,c.Z)({link:t}).setRow;return{setSelectedRow:(0,o.useCallback)((function(e){d(e)}),[]),onSaveAndInsertion:function(){void 0!==l.query_status&&r(l)},selectedRow:l}},r=t(184),u=function(e){var n=e.api,t=e.postApi,c=e.columns,u=e.hideTools,_=e.canAdd,h=e.canEdit,m=e.canDelete,p=e.rowKey,v=e.Modal,f=e.width,E=e.onSelectedRow,x=e.fetchOnFirstRun,b=void 0!==x&&x,A=e.params,T=(0,l.Z)({link:n,fetchOnFirstRun:b,params:A}),C=T.data,S=T.runFetch,g=d({api:t}),R=g.setSelectedRow,j=g.onSaveAndInsertion,w=g.selectedRow,L=(0,o.useState)({}),Z=(0,i.Z)(L,2),O=Z[0],D=Z[1],y=(0,o.useState)(!1),I=(0,i.Z)(y,2),k=I[0],P=I[1],U=(0,o.useCallback)((function(){R({query_status:"n"}),P(!0)}),[R]),N=(0,o.useCallback)((function(){R((0,a.Z)((0,a.Z)({},O),{},{query_status:"u"})),P(!0)}),[O,R]),Y=(0,o.useCallback)((function(){P(!1)}),[]),M=(0,o.useCallback)((function(){P(!1),j(),S()}),[j,S]);return(0,r.jsxs)(r.Fragment,{children:[v&&(0,r.jsx)(v,{visible:k,onOK:M,onClose:Y,selectedRow:w,setSelectedRow:R}),(0,r.jsx)(s.Z,{dataSource:C,columns:c,hideTools:u,canAdd:_,canEdit:h,canDelete:m,rowKey:p,onAdd:U,onEdit:N,onDelete:function(){R((0,a.Z)((0,a.Z)({},O),{},{query_status:"d"})),j()},onSelectedRow:function(e){D(e),E&&E(e)},width:f})]})},_=(0,o.memo)(u)},5702:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(9439),i=t(2791),o=t(184),s=function(e){var n=e.icon,t=e.onClick,a=e.disabled,i=void 0!==a&&a,s=e.width,l=void 0===s?"30px":s,c=e.height,d=void 0===c?"30px":c,r=e.color,u=e.margin,_=void 0===u?"10px":u,h=e.padding,m=e.hidden,p=void 0!==m&&m;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("button",{style:{border:"none",width:l,height:d,backgroundColor:r,padding:h,margin:_,borderRadius:"20px"},hidden:p,onClick:t,disabled:i,children:(0,o.jsx)("i",{className:n})})})},l=(0,i.memo)(s),c=t(898),d=t(9230),r=t(8535),u=function(e){var n=e.dataSource,t=e.rowKey,s=void 0===t?"rowKey":t,u=e.columns,_=e.hideTools,h=void 0===_||_,m=e.canEdit,p=void 0!==m&&m,v=e.canAdd,f=void 0!==v&&v,E=e.canDelete,x=void 0!==E&&E,b=e.onAdd,A=e.onEdit,T=e.onDelete,C=e.actionColumn,S=void 0!==C&&C,g=e.onAction,R=e.actionLabel,j=void 0===R?"":R,w=e.onSelectedRow,L=e.canPrint,Z=void 0!==L&&L,O=e.onPrint,D=e.additionalButtons,y=e.onSave,I=e.canSave,k=void 0!==I&&I,P=e.width,U=void 0===P?"100%":P,N=e.margin,Y=void 0===N?"":N,M=e.padding,B=void 0===M?"":M,F=(0,d.$G)().t,Q=(0,i.useState)(),H=(0,a.Z)(Q,2),V=H[0],z=H[1],K=(0,i.useCallback)((function(e){return function(){w(e),z(e)}}),[w]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{style:{width:U,padding:B,margin:Y},children:[(0,o.jsxs)(r.Z,{width:"100%",padding:"0",margin:"5px 0",justifyContent:"center",hidden:h,children:[(0,o.jsx)(l,{icon:"fa-sharp fa-solid fa-plus",onClick:b,hidden:!f}),(0,o.jsx)(l,{icon:"fa-sharp fa-solid fa-pen-clip",onClick:A,hidden:!p,disabled:!V}),(0,o.jsx)(l,{icon:"fa-sharp fa-solid fa-trash",onClick:T,hidden:!x,disabled:!V}),D&&D.map((function(e){return(0,o.jsx)(l,{icon:e.icon,onClick:e.onClick,disabled:e.disabled,hidden:!1})})),(0,o.jsx)(l,{icon:"fa-solid fa-floppy-disk",onClick:y,hidden:!k,disabled:!k}),(0,o.jsx)(l,{icon:"fa-solid fa-print",onClick:O,hidden:!Z,disabled:!Z})]}),(0,o.jsx)("table",{className:"table m-0",children:(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{className:"table-secondary",children:[u.map((function(e){return(0,o.jsx)("th",{scope:"col",style:{width:e.width},children:F(e.title)})})),(0,o.jsx)("th",{hidden:!S,children:F("actn")})]})})}),(0,o.jsx)("div",{className:"tbl-content",children:(0,o.jsx)("table",{className:"table ",children:(0,o.jsx)("tbody",{children:null===n||void 0===n?void 0:n.map((function(e){return(0,o.jsxs)("tr",{onClick:K(e),children:[u.map((function(n){return(0,o.jsx)("td",{className:"".concat(V===e?"table-success":"table-light"," "),style:{width:n.width},children:e[n.dataIndex]})})),(0,o.jsx)("td",{className:"".concat(V===e?"table-success":"table-light"," "),hidden:!S,children:(0,o.jsx)(c.Z,{label:j,onClick:function(){g(e)}})})]},e[s])}))})})})]})})}},399:function(e,n){n.Z={QUERY_CUSTOMER_TABLE_DATA:"basicData/customers",POST_CUSTOMER_TABLE_DATA:"basicData/customers_dml",QUERY_SUPPLIER_TABLE_DATA:"basicData/suppliers",POST_SUPPLIER_TABLE_DATA:"basicData/suppliers_dml",POST_CUSTOMER_INVOICE_DETAILS:"invoices/customer_invoice_dml",POST_EMPLOYEE_ATTENDANCE:"employeesData/employee_attendance_dml",POST_EMPLOYEE_LEAVING:"employeesData/employee_leaving_dml",QUERY_EMPLOYEES_TABLE_DATA:"employeesData/employees",POST_EMPLOYEES_TABLE_DATA:"employeesData/employees_dml",QUERY_INVOICE_DETAIL_TABLE_DATA:"invoices/get_invoice_detail",QUERY_INVOICE_MASTER_TABLE_DATA:"invoices/get_invoice_master",QUERY_ITEMS_TABLE_DATA:"basicData/items",POST_ITEMS_TABLE_DATA:"basicData/items_dml",QUERY_PRINT_OPTIONS_TABLE_DAT:"basicData/print_options",POST_PRINT_OPTIONS_TABLE_DATA:"basicData/print_options_dml",USER_LOG_IN:"user_log_in",POST_SUPPLIER_INVOICE:"invoices/supplier_invoice_dml",QUERY_LABELS:"get_labels",QUERY_CHUNK_LABELS:"get_chunk_labels",QUERY_EMPLOYEE_NAME_LIST:"employeesData/pop_employee_name",QUERY_CUSTOMER_AND_SUPPLIER_LIST:"invoices/get_customer_supplier_list",QUERY_SUPPLIER_LIST:"basicData/supplier_pop_data",QUERY_CUSTOMERS_LIST:"basicData/customer_pop_data",QUERY_ITEMS_LIST:"basicData/items_pop_data",QUERY_PRINT_OPTIONS_LIST:"basicData/print_options_pop_data",QUERY_EMPLOYEE_SHEET_SALARY:"employeesData/employee_sheet",QUERY_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/get_casher_receipt_voucher_invoices",POST_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/post_casher_receipt_voucher_invoices_dml",QUERY_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_expense/get_casher_payment_voucher_invoices",POST_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_expense/post_casher_payment_voucher_invoices_dml",QUERY_MAIN_CHART_DATA:"home/dash_board_get_data"}},3838:function(e,n,t){var a=t(4165),i=t(5861),o=t(9439),s=t(2791),l=t(399),c=t(1227),d=t(1295);n.Z=function(e){var n=e.link,t=void 0===n?"":n,r=e.fetchOnFirstRun,u=(e.refreshTimeout,e.params),_=e.noAuthorization,h=void 0!==_&&_,m=(0,d.p)(),p=(0,c.Z)().authorization,v="http://144.24.209.19:9090/api/v1/".concat(l.Z[t]),f=(0,s.useState)([]),E=(0,o.Z)(f,2),x=E[0],b=E[1],A=(0,s.useCallback)((0,i.Z)((0,a.Z)().mark((function e(){var n,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p&&!h){e.next=8;break}return e.next=3,fetch("".concat(v,"?authorization=").concat(p,"&").concat(new URLSearchParams(u)));case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,b(t);case 8:case"end":return e.stop()}}),e)}))),[p,h,u,v]);(0,s.useEffect)((function(){r&&A()}),[r,A,v,u]),(0,s.useEffect)((function(){x.response&&m({position:"top-right",title:"error",description:"".concat(JSON.stringify(x.response)),status:"error",duration:5e3,isClosable:!0})}),[x,m]);var T=(0,s.useCallback)((function(){A()}),[A]);return{data:x,runFetch:T,setData:b}}},8245:function(e,n,t){var a=t(4942),i=t(1413),o=t(9439),s=t(2791);n.Z=function(e){var n=e.initialValue,t=e.setSelectedRow,l=(0,s.useState)(),c=(0,o.Z)(l,2),d=c[0],r=c[1],u=(0,s.useState)({}),_=(0,o.Z)(u,2),h=_[0],m=_[1],p=(0,s.useCallback)((function(e){t&&t((0,i.Z)((0,i.Z)({},n),{},(0,a.Z)({},e.name,e.value))),m((0,i.Z)((0,i.Z)({},h),{},(0,a.Z)({},e.name,e.value))),r(d)}),[d,n,t,h]);(0,s.useEffect)((function(){t&&m(n)}),[n,t]),(0,s.useEffect)((function(){m(n)}),[]);var v=(0,s.useCallback)((function(){t(d)}),[d,t]);return{state:h,onChange:p,resetState:v}}},3785:function(e,n,t){var a=t(4165),i=t(5861),o=t(9439),s=t(2791),l=t(1227),c=t(399),d=t(1295);n.Z=function(e){var n=e.link,t=void 0===n?"":n,r=e.noAuthorization,u=void 0!==r&&r,_=(0,d.p)(),h="http://144.24.209.19:9090/api/v1/".concat(c.Z[t]),m=(0,s.useState)(),p=(0,o.Z)(m,2),v=p[0],f=p[1],E=(0,l.Z)().authorization,x=(0,s.useCallback)(function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t,i,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!E&&!u){e.next=18;break}return n.authorization=E,t={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)},e.prev=3,e.next=6,fetch(h,t);case 6:return i=e.sent,e.next=9,i.json();case 9:return"success"===(o=e.sent).response?_({position:"top-right",title:"Success",description:"".concat(o.response),status:"success",duration:5e3,isClosable:!0}):_({position:"top-right",title:"Error",description:"".concat(o.response),status:"error",duration:9e3,isClosable:!0}),f(o),e.abrupt("return",o);case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(n){return e.apply(this,arguments)}}(),[E,u,_,h]);return{success:v,setRow:(0,s.useCallback)((function(e){x(e)}),[x])}}},1875:function(e,n,t){var a=t(2791),i=t(9230),o=t(184),s=function(e){var n=e.name,t=e.Label,s=void 0===t?"name":t,l=e.placeHolder,c=e.width,d=void 0===c?"30%":c,r=e.height,u=void 0===r?"100px":r,_=e.padding,h=e.margin,m=void 0===h?"10px":h,p=e.onChange,v=e.value,f=e.disabled,E=(0,i.$G)().t,x=(0,a.useCallback)((function(e){p({name:n,value:e.target.value})}),[n,p]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"mb-1 d-inline-block",style:{height:u,width:d,padding:_,margin:m},children:[(0,o.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:E(s)}),(0,o.jsx)("textarea",{className:"form-control",placeholder:E(l),id:"floatingTextarea2Disabled",value:v,disabled:f,onChange:x})]})})};n.Z=(0,a.memo)(s)},7595:function(e,n,t){var a=t(2791),i=t(9230),o=t(176),s=t(4585),l=t(7886),c=t(184),d=function(e){var n=e.disabled,t=e.value,d=e.name,r=e.Label,u=void 0===r?"":r,_=e.onChange,h=e.width,m=void 0===h?"200px":h,p=e.type,v=void 0===p?"text":p,f=e.placeHolder,E=e.padding,x=e.margin,b=void 0===x?"10px":x,A=e.className,T=void 0===A?"":A,C=e.required,S=void 0!==C&&C,g=(0,i.$G)().t,R=(0,a.useCallback)((function(e){_({name:d,value:e.target.value})}),[d,_]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(o.k,{direction:"column",w:m,padding:E,margin:b,children:[(0,c.jsx)(s.l,{children:g(u)}),(0,c.jsx)(l.I,{placeholder:f,size:"md",isDisabled:n,isRequired:S,onChange:R,width:"100%",className:T,value:t,type:v})]})})};n.Z=(0,a.memo)(d)},2080:function(e,n,t){var a=t(2791),i=t(9230),o=t(1820),s=t(3380),l=t(1078),c=t(7693),d=t(1461),r=t(7521),u=t(176),_=t(4653),h=t(4224),m=t(184),p=function(e){var n=e.children,t=e.visible,a=void 0!==t&&t,p=e.label,v=e.onClose,f=e.onOK,E=e.submitTitle,x=void 0===E?"smbt":E,b=e.width,A=void 0===b?"3xl":b,T=e.hideSaveButton,C=void 0!==T&&T,S=e.hideCloseButton,g=void 0!==S&&S,R=(0,i.$G)().t;return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(o.u_,{isOpen:a,onClose:v,size:A,children:[(0,m.jsx)(s.Z,{}),(0,m.jsxs)(l.h,{children:[(0,m.jsx)(c.x,{children:R(p)}),(0,m.jsx)(d.o,{}),(0,m.jsx)(r.f,{children:(0,m.jsx)(u.k,{w:"100%",padding:"5px",wrap:"wrap",children:n})}),(0,m.jsx)(_.m,{children:(0,m.jsxs)(u.k,{w:"25%",justifyContent:"space-around",children:[(0,m.jsx)(h.z,{colorScheme:"red",mr:3,onClick:v,hidden:g,children:R("cls")}),(0,m.jsx)(h.z,{colorScheme:"blue",onClick:f,hidden:C,children:R(x)})]})})]})]})})};n.Z=(0,a.memo)(p)},5824:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var a=t(2791),i=t(8535),o=t(7595),s=t(8634),l=[{title:"dt",dataIndex:"date",width:"10%"},{title:"amnt",dataIndex:"amount",width:"10%"},{title:"vchrnm",dataIndex:"voucher_name",width:"10%"},{title:"cstmrnm",dataIndex:"customer_name",width:"15%"},{title:"splrnm",dataIndex:"supplier_name",width:"15%"},{title:"nts",dataIndex:"notes",width:"10%"}],c=[{label:"splr",value:1},{label:"cstmr",value:2}],d=t(8245),r=t(2080),u=t(1875),_=t(8864),h=t(6888),m=t(184),p=function(e){var n=e.visible,t=e.onOK,a=e.onClose,i=e.setSelectedRow,s=e.selectedRow,l=(0,d.Z)({initialValue:s,setSelectedRow:i}),p=l.state,v=l.onChange,f=p.date,E=p.voucher_type,x=p.person_id,b=p.amount,A=p.notes;return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(r.Z,{visible:n,label:"Details",onOK:t,onClose:a,children:[(0,m.jsx)(o.Z,{name:"date",type:"date",onChange:v,value:f,Label:"dt",width:"47%"}),(0,m.jsx)(o.Z,{name:"amount",type:"number",onChange:v,value:b,Label:"amnt",width:"47%"}),(0,m.jsx)(_.Z,{name:"voucher_type",onChange:v,value:E,Label:"vchr",width:"47%",Options:c}),(0,m.jsx)(h.Z,{name:"person_id",Api:"QUERY_CUSTOMER_AND_SUPPLIER_LIST",Label:"nm",params:{invoice_type:E},value:x,fetchOnFirstRun:!0,width:"47%",onChange:v}),(0,m.jsx)(u.Z,{width:"100%",name:"notes",onChange:v,value:A,Label:"nts"})]})})},v=(0,a.memo)(p),f=function(){var e=(0,d.Z)({initialValue:{date_from:"",date_to:""}}),n=e.state,t=e.onChange;return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(i.Z,{width:"100%",flexDirection:"column",children:[(0,m.jsxs)(i.Z,{width:"100%",children:[(0,m.jsx)(o.Z,{name:"date_from",type:"date",Label:"from",onChange:t}),(0,m.jsx)(o.Z,{name:"date_to",type:"date",Label:"to",onChange:t})]}),(0,m.jsx)(s.Z,{api:"QUERY_CASHER_PAYMENT_VOUCHER_TABLE_DATA",postApi:"POST_CASHER_PAYMENT_VOUCHER_TABLE_DATA",columns:l,hideTools:!1,canEdit:!0,canAdd:!0,canDelete:!0,rowKey:"payment_voucher_id",params:{date_from:n.date_from,date_to:n.date_to},Modal:v,fetchOnFirstRun:!0})]})})},E=(0,a.memo)(f)}}]);
//# sourceMappingURL=824.076cb9af.chunk.js.map