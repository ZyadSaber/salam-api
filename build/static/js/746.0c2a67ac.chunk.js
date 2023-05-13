"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[746],{8634:function(e,t,n){n.d(t,{Z:function(){return _}});var i=n(1413),a=n(9439),s=n(2791),o=n(5702),c=n(3838),d=n(3785),r=function(e){var t=e.api,n=void 0===t?"":t,i=(0,s.useState)({}),o=(0,a.Z)(i,2),c=o[0],r=o[1],l=(0,d.Z)({link:n}).setRow;return{setSelectedRow:(0,s.useCallback)((function(e){r(e)}),[]),onSaveAndInsertion:function(){void 0!==c.query_status&&l(c)},selectedRow:c}},l=n(184),u=function(e){var t=e.api,n=e.postApi,d=e.columns,u=e.hideTools,_=e.canAdd,p=e.canEdit,h=e.canDelete,m=e.rowKey,E=e.Modal,A=e.width,f=e.onSelectedRow,T=e.fetchOnFirstRun,v=void 0!==T&&T,x=e.params,b=(0,c.Z)({link:t,fetchOnFirstRun:v,params:x}),S=b.data,R=b.runFetch,w=r({api:n}),C=w.setSelectedRow,j=w.onSaveAndInsertion,g=w.selectedRow,D=(0,s.useState)({}),I=(0,a.Z)(D,2),L=I[0],O=I[1],k=(0,s.useState)(!1),y=(0,a.Z)(k,2),P=y[0],Z=y[1],U=(0,s.useCallback)((function(){C({query_status:"n"}),Z(!0)}),[C]),N=(0,s.useCallback)((function(){C((0,i.Z)((0,i.Z)({},L),{},{query_status:"u"})),Z(!0)}),[L,C]),Y=(0,s.useCallback)((function(){Z(!1)}),[]),M=(0,s.useCallback)((function(){Z(!1),j(),R()}),[j,R]);return(0,l.jsxs)(l.Fragment,{children:[E&&(0,l.jsx)(E,{visible:P,onOK:M,onClose:Y,selectedRow:g,setSelectedRow:C}),(0,l.jsx)(o.Z,{dataSource:S,columns:d,hideTools:u,canAdd:_,canEdit:p,canDelete:h,rowkey:m,onAdd:U,onEdit:N,onDelete:function(){C((0,i.Z)((0,i.Z)({},L),{},{query_status:"d"})),j()},onSelectedRow:function(e){O(e),f&&f(e)},width:A})]})},_=(0,s.memo)(u)},5702:function(e,t,n){n.d(t,{Z:function(){return u}});var i=n(9439),a=n(2791),s=n(184),o=function(e){var t=e.icon,n=e.onClick,i=e.disabled,a=void 0!==i&&i,o=e.width,c=void 0===o?"30px":o,d=e.height,r=void 0===d?"30px":d,l=e.color,u=e.margin,_=void 0===u?"10px":u,p=e.padding,h=e.hidden,m=void 0!==h&&h;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("button",{style:{border:"none",width:c,height:r,backgroundColor:l,padding:p,margin:_,borderRadius:"20px"},hidden:!m,onClick:n,disabled:a,children:(0,s.jsx)("i",{className:t})})})},c=(0,a.memo)(o),d=n(898),r=n(9230),l=n(8535),u=function(e){var t=e.dataSource,n=e.rowkey,o=void 0===n?"rowkey":n,u=e.columns,_=e.hideTools,p=void 0===_||_,h=e.canEdit,m=void 0!==h&&h,E=e.canAdd,A=void 0!==E&&E,f=e.canDelete,T=void 0!==f&&f,v=e.onAdd,x=e.onEdit,b=e.onDelete,S=e.actionColumn,R=void 0!==S&&S,w=e.onAction,C=e.actionLabel,j=void 0===C?"":C,g=e.onSelectedRow,D=e.canPrint,I=void 0!==D&&D,L=e.onPrint,O=e.addionalButtons,k=e.onSave,y=e.canSave,P=void 0!==y&&y,Z=e.width,U=void 0===Z?"100%":Z,N=e.margin,Y=void 0===N?"":N,M=e.padding,Q=void 0===M?"":M,B=(0,r.$G)().t,F=(0,a.useState)(),H=(0,i.Z)(F,2),V=H[0],z=H[1],K=(0,a.useCallback)((function(e){return function(){g(e),z(e)}}),[g]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{style:{width:U,padding:Q,margin:Y},children:[(0,s.jsxs)(l.Z,{width:"100%",padding:"0",margin:"5px 0",justifyContent:"center",hidden:p,children:[(0,s.jsx)(c,{icon:"fa-sharp fa-solid fa-plus",onClick:v,hidden:A}),(0,s.jsx)(c,{icon:"fa-sharp fa-solid fa-pen-clip",onClick:x,hidden:m,disabled:!V}),(0,s.jsx)(c,{icon:"fa-sharp fa-solid fa-trash",onClick:b,hidden:T,disabled:!V}),O&&O.map((function(e){return(0,s.jsx)(c,{icon:e.icon,onClick:e.onClick,hidden:e.hidden})})),(0,s.jsx)(c,{icon:"fa-solid fa-floppy-disk",onClick:k,disabled:P}),(0,s.jsx)(c,{icon:"fa-solid fa-print",onClick:L,disabled:I})]}),(0,s.jsx)("table",{className:"table m-0",children:(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"table-secondary",children:[u.map((function(e){return(0,s.jsx)("th",{scope:"col",style:{width:e.width},children:B(e.title)})})),(0,s.jsx)("th",{hidden:!R,children:B("actn")})]})})}),(0,s.jsx)("div",{className:"tbl-content",children:(0,s.jsx)("table",{className:"table ",children:(0,s.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){return(0,s.jsxs)("tr",{onClick:K(e),children:[u.map((function(t){return(0,s.jsx)("td",{className:"".concat(V===e?"table-success":"table-light"," "),style:{width:t.width},children:e[t.dataIndex]})})),(0,s.jsx)("td",{className:"".concat(V===e?"table-success":"table-light"," "),hidden:!R,children:(0,s.jsx)(d.Z,{label:j,onClick:function(){w(e)}})})]},e[o])}))})})})]})})}},399:function(e,t){t.Z={QUERY_CUSTOMER_TABLE_DATA:"basicData/customers",POST_CUSTOMER_TABLE_DATA:"basicData/customers_dml",QUERY_SUPPLIER_TABLE_DATA:"basicData/suppliers",POST_SUPPLIER_TABLE_DATA:"basicData/suppliers_dml",POST_CUSTOMER_INVOICE_DETAILS:"invoices/customer_invoice_dml",POST_EMPLOYEE_ATTENDANCE:"employeesData/employee_attendance_dml",POST_EMPLOYEE_LEAVING:"employeesData/employee_leaving_dml",QUERY_EMPLOYEES_TABLE_DATA:"employeesData/employees",POST_EMPLOYEES_TABLE_DATA:"employeesData/employees_dml",QUERY_INVOICE_DETAIL_TABLE_DATA:"invoices/get_invoice_detail",QUERY_INVOICE_MASTER_TABLE_DATA:"invoices/get_invoice_master",QUERY_ITEMS_TABLE_DATA:"basicData/items",POST_ITEMS_TABLE_DATA:"basicData/items_dml",QUERY_PRINT_OPTIONS_TABLE_DAT:"basicData/print_options",POST_PRINT_OPTIONS_TABLE_DATA:"basicData/print_options_dml",USER_LOG_IN:"user_log_in",POST_SUPPLIER_INVOICE:"invoices/supplier_invoice_dml",QUERY_LABELS:"get_labels",QUERY_CHUNK_LABELS:"get_chunk_labels",QUERY_EMPLOYEE_NAME_LIST:"employeesData/pop_employee_name",QUERY_CUSTOMER_AND_SUPPLIER_LIST:"invoices/get_customer_supplier_list",QUERY_SUPPLIER_LIST:"basicData/supplier_pop_data",QUERY_CUSTOMERS_LIST:"basicData/customer_pop_data",QUERY_ITEMS_LIST:"basicData/items_pop_data",QUERY_EMPLOYEE_SHEET_SALARY:"employeesData/employee_sheet",QUERY_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/get_casher_receipt_voucher_invoices",POST_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/post_casher_receipt_voucher_invoices_dml",QUERY_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_expense/get_casher_payment_voucher_invoices",POST_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_expense/post_casher_payment_voucher_invoices_dml",QUERY_MAIN_CHART_DATA:"home/dash_board_get_data"}},3838:function(e,t,n){var i=n(4165),a=n(5861),s=n(9439),o=n(2791),c=n(399),d=n(1227),r=n(1295);t.Z=function(e){var t=e.link,n=void 0===t?"":t,l=e.fetchOnFirstRun,u=(e.refreshTimeout,e.params),_=e.noAuthorization,p=void 0!==_&&_,h=(0,r.p)(),m=(0,d.Z)().authorization,E="http://144.24.209.19:9090/api/v1/".concat(c.Z[n]),A=(0,o.useState)([]),f=(0,s.Z)(A,2),T=f[0],v=f[1],x=(0,o.useCallback)((0,a.Z)((0,i.Z)().mark((function e(){var t,n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m&&!p){e.next=8;break}return e.next=3,fetch("".concat(E,"?authorization=").concat(m,"&").concat(new URLSearchParams(u)));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,v(n);case 8:case"end":return e.stop()}}),e)}))),[m,p,u,E]);(0,o.useEffect)((function(){l&&x()}),[l,x,E,u]),(0,o.useEffect)((function(){T.response&&h({position:"top-right",title:"error",description:"".concat(JSON.stringify(T.response)),status:"error",duration:5e3,isClosable:!0})}),[T,h]);var b=(0,o.useCallback)((function(){x()}),[x]);return{data:T,runFetch:b,setData:v}}},3785:function(e,t,n){var i=n(4165),a=n(5861),s=n(9439),o=n(2791),c=n(1227),d=n(399),r=n(1295);t.Z=function(e){var t=e.link,n=void 0===t?"":t,l=e.noAuthorization,u=void 0!==l&&l,_=(0,r.p)(),p="http://144.24.209.19:9090/api/v1/".concat(d.Z[n]),h=(0,o.useState)(),m=(0,s.Z)(h,2),E=m[0],A=m[1],f=(0,c.Z)().authorization,T=(0,o.useCallback)(function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){var n,a,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f&&!u){e.next=18;break}return t.authorization=f,n={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)},e.prev=3,e.next=6,fetch(p,n);case 6:return a=e.sent,e.next=9,a.json();case 9:return"success"===(s=e.sent).response?_({position:"top-right",title:"Success",description:"".concat(s.response),status:"success",duration:5e3,isClosable:!0}):_({position:"top-right",title:"Error",description:"".concat(s.response),status:"error",duration:9e3,isClosable:!0}),A(s),e.abrupt("return",s);case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}(),[f,u,_,p]);return{success:E,setRow:(0,o.useCallback)((function(e){T(e)}),[T])}}},3746:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var i=n(2791),a=n(9439),s=(n(550),n(3623)),o=n(9230),c=n(8535),d=n(184),r=function(e){var t=e.mode,n=void 0===t?"bar":t,i=e.width,a=e.height,r=e.margin,l=e.padding,u=e.label,_=void 0===u?"chart":u,p=e.dataSource,h=(0,o.$G)().t;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(c.Z,{flexDirection:"column",width:i,height:a,margin:r,padding:l,children:[(0,d.jsx)(c.Z,{width:"100%",justifyContent:"center",children:(0,d.jsx)("p",{children:h(_)})}),function(){switch(n){case"line":return(0,d.jsx)(s.kL,{type:"line",data:p});case"pie":return(0,d.jsx)(s.kL,{type:"pie",data:p});case"bar":return(0,d.jsx)(s.kL,{type:"bar",data:p})}}()]})})},l=(0,i.memo)(r),u=n(3838),_=function(e){var t=e.api,n=e.params,s=e.width,o=e.height,c=e.padding,r=e.margin,_=e.label,p=e.mode,h=(0,i.useState)({labels:[],datasets:[{label:"",data:[]}]}),m=(0,a.Z)(h,2),E=m[0],A=m[1],f=(0,u.Z)({link:t,fetchOnFirstRun:!0,params:n}).data;return(0,i.useEffect)((function(){Array.isArray(f)||A(f)}),[f]),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(l,{dataSource:E,width:s,height:o,padding:c,margin:r,label:_,mode:p})})},p=(0,i.memo)(_),h=n(8634),m=[{title:"nm",dataIndex:"name",width:"20%"},{title:"eml",dataIndex:"email",width:17},{title:"phn",dataIndex:"phone",width:15},{title:"mbl",dataIndex:"mobile",width:15},{title:"adrs",dataIndex:"address",width:20}],E=[{title:"nm",dataIndex:"name",width:"20%"},{title:"eml",dataIndex:"email",width:17},{title:"phn",dataIndex:"phone",width:15},{title:"mbl",dataIndex:"mobile",width:15},{title:"adrs",dataIndex:"address",width:20}],A=function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(c.Z,{width:"100%",children:[(0,d.jsxs)(c.Z,{width:"75%",flexDirection:"column",children:[(0,d.jsx)(h.Z,{api:"",rowKey:"",columns:m,fetchOnFirstRun:!0}),(0,d.jsx)(h.Z,{api:"",rowKey:"",columns:E,fetchOnFirstRun:!0})]}),(0,d.jsxs)(c.Z,{width:"25%",flexDirection:"column",children:[(0,d.jsx)(p,{api:"QUERY_MAIN_CHART_DATA",label:"vault",mode:"pie",width:"100%"}),(0,d.jsx)(p,{api:"QUERY_MAIN_CHART_DATA",label:"vault",mode:"pie",width:"100%"})]})]})})},f=(0,i.memo)(A)}}]);
//# sourceMappingURL=746.0c2a67ac.chunk.js.map