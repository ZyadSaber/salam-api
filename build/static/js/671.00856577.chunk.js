"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[671],{8634:function(e,n,t){t.d(n,{Z:function(){return h}});var a=t(1413),i=t(9439),o=t(2791),s=t(5702),c=t(3838),l=t(3785),d=function(e){var n=e.api,t=void 0===n?"":n,a=(0,o.useState)({}),s=(0,i.Z)(a,2),c=s[0],d=s[1],r=(0,l.Z)({link:t}).setRow;return{setSelectedRow:(0,o.useCallback)((function(e){d(e)}),[]),onSaveAndInsertion:function(){void 0!==c.query_status&&r(c)},selectedRow:c}},r=t(184),u=function(e){var n=e.api,t=e.postApi,l=e.columns,u=e.hideTools,h=e.canAdd,p=e.canEdit,_=e.canDelete,m=e.rowKey,v=e.Modal,E=e.width,f=e.onSelectedRow,b=e.fetchOnFirstRun,x=void 0!==b&&b,A=e.params,S=(0,c.Z)({link:n,fetchOnFirstRun:x,params:A}),T=S.data,C=S.runFetch,j=d({api:t}),R=j.setSelectedRow,w=j.onSaveAndInsertion,g=j.selectedRow,Z=(0,o.useState)({}),k=(0,i.Z)(Z,2),L=k[0],D=k[1],O=(0,o.useState)(!1),I=(0,i.Z)(O,2),y=I[0],P=I[1],U=(0,o.useCallback)((function(){R({query_status:"n"}),P(!0)}),[R]),N=(0,o.useCallback)((function(){R((0,a.Z)((0,a.Z)({},L),{},{query_status:"u"})),P(!0)}),[L,R]),Y=(0,o.useCallback)((function(){P(!1)}),[]),B=(0,o.useCallback)((function(){P(!1),w(),C()}),[w,C]);return(0,r.jsxs)(r.Fragment,{children:[v&&(0,r.jsx)(v,{visible:y,onOK:B,onClose:Y,selectedRow:g,setSelectedRow:R}),(0,r.jsx)(s.Z,{dataSource:T,columns:l,hideTools:u,canAdd:h,canEdit:p,canDelete:_,rowkey:m,onAdd:U,onEdit:N,onDelete:function(){R((0,a.Z)((0,a.Z)({},L),{},{query_status:"d"})),w()},onSelectedRow:function(e){D(e),f&&f(e)},width:E})]})},h=(0,o.memo)(u)},5702:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(9439),i=t(2791),o=t(184),s=function(e){var n=e.icon,t=e.onClick,a=e.disabled,i=void 0===a||a,s=e.width,c=void 0===s?"30px":s,l=e.height,d=void 0===l?"30px":l,r=e.color,u=e.margin,h=void 0===u?"10px":u,p=e.padding;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("button",{style:{border:"none",width:c,height:d,backgroundColor:r,padding:p,margin:h,borderRadius:"20px"},hidden:!i,onClick:t,children:(0,o.jsx)("i",{className:n})})})},c=(0,i.memo)(s),l=t(898),d=t(9230),r=t(8535),u=function(e){var n=e.dataSource,t=e.rowkey,s=void 0===t?"rowkey":t,u=e.columns,h=e.hideTools,p=void 0===h||h,_=e.canEdit,m=void 0!==_&&_,v=e.canAdd,E=void 0!==v&&v,f=e.canDelete,b=void 0!==f&&f,x=e.onAdd,A=e.onEdit,S=e.onDelete,T=e.actionColumn,C=void 0!==T&&T,j=e.onAction,R=e.actionLabel,w=void 0===R?"":R,g=e.onSelectedRow,Z=e.canPrint,k=void 0!==Z&&Z,L=e.onPrint,D=e.addionalButtons,O=e.onSave,I=e.canSave,y=void 0!==I&&I,P=e.width,U=void 0===P?"100%":P,N=e.margin,Y=void 0===N?"":N,B=e.padding,M=void 0===B?"":B,Q=(0,d.$G)().t,F=(0,i.useState)(),z=(0,a.Z)(F,2),V=z[0],K=z[1],q=(0,i.useCallback)((function(e){return function(){g(e),K(e)}}),[g]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{style:{width:U,padding:M,margin:Y},children:[(0,o.jsxs)(r.Z,{width:"100%",padding:"0",margin:"5px 0",justifyContent:"center",hidden:p,children:[(0,o.jsx)(c,{icon:"fa-sharp fa-solid fa-plus",onClick:x,disabled:E}),(0,o.jsx)(c,{icon:"fa-sharp fa-solid fa-pen-clip",onClick:A,disabled:m}),(0,o.jsx)(c,{icon:"fa-sharp fa-solid fa-trash",onClick:S,disabled:b}),D&&D.map((function(e){return(0,o.jsx)(c,{icon:e.icon,onClick:e.onClick,disabled:e.disabled})})),(0,o.jsx)(c,{icon:"fa-solid fa-floppy-disk",onClick:O,disabled:y}),(0,o.jsx)(c,{icon:"fa-solid fa-print",onClick:L,disabled:k})]}),(0,o.jsx)("table",{className:"table m-0",children:(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{className:"table-secondary",children:[u.map((function(e){return(0,o.jsx)("th",{scope:"col",style:{maxWidth:e.width,minWidth:e.width},children:Q(e.title)})})),(0,o.jsx)("th",{hidden:!C,children:Q("actn")})]})})}),(0,o.jsx)("div",{className:"tbl-content",children:(0,o.jsx)("table",{className:"table ",children:(0,o.jsx)("tbody",{children:null===n||void 0===n?void 0:n.map((function(e){return(0,o.jsxs)("tr",{onClick:q(e),children:[u.map((function(n){return(0,o.jsx)("td",{className:"".concat(V===e?"table-success":"table-light"," "),style:{maxWidth:n.width,minWidth:n.width},children:e[n.dataIndex]})})),(0,o.jsx)("td",{className:"".concat(V===e?"table-success":"table-light"," "),hidden:!C,children:(0,o.jsx)(l.Z,{label:w,onClick:function(){j(e)}})})]},e[s])}))})})})]})})}},399:function(e,n){n.Z={QUERY_CUSTOMER_TABLE_DATA:"basicData/customers",POST_CUSTOMER_TABLE_DATA:"basicData/customers_dml",QUERY_SUPPLIER_TABLE_DATA:"basicData/suppliers",POST_SUPPLIER_TABLE_DATA:"basicData/suppliers_dml",POST_CUSTOMER_INVOICE_DETAILS:"invoices/customer_invoice_dml",POST_EMPLOYEE_ATTENDANCE:"employeesData/employee_attendance_dml",POST_EMPLOYEE_LEAVING:"employeesData/employee_leaving_dml",QUERY_EMPLOYEES_TABLE_DATA:"employeesData/employees",POST_EMPLOYEES_TABLE_DATA:"employeesData/employees_dml",QUERY_INVOICE_DETAIL_TABLE_DATA:"invoices/get_invoice_detail",QUERY_INVOICE_MASTER_TABLE_DATA:"invoices/get_invoice_master",QUERY_ITEMS_TABLE_DATA:"basicData/items",POST_ITEMS_TABLE_DATA:"basicData/items_dml",QUERY_PRINT_OPTIONS_TABLE_DAT:"basicData/print_options",POST_PRINT_OPTIONS_TABLE_DATA:"basicData/print_options_dml",USER_LOG_IN:"user_log_in",POST_SUPPLIER_INVOICE:"invoices/supplier_invoice_dml",QUERY_LABELS:"get_labels",QUERY_CHUNK_LABELS:"get_chunk_labels",QUERY_EMPLOYEE_NAME_LIST:"employeesData/pop_employee_name",QUERY_CUSTOMER_AND_SUPPLIER_LIST:"invoices/get_customer_supplier_list",QUERY_SUPPLIER_LIST:"basicData/supplier_pop_data",QUERY_ITEMS_LIST:"basicData/items_pop_data",QUERY_EMPLOYEE_SHEET_SALARY:"employeesData/employee_sheet",QUERY_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/get_casher_receipt_voucher_invoices"}},3838:function(e,n,t){var a=t(4165),i=t(5861),o=t(9439),s=t(2791),c=t(399),l=t(1227),d=t(1295);n.Z=function(e){var n=e.link,t=void 0===n?"":n,r=e.fetchOnFirstRun,u=(e.refreshTimeout,e.params),h=e.noAuthorization,p=void 0!==h&&h,_=(0,d.p)(),m=(0,l.Z)().authorization,v="http://144.24.209.19:9090/api/v1/".concat(c.Z[t]),E=(0,s.useState)([]),f=(0,o.Z)(E,2),b=f[0],x=f[1],A=(0,s.useCallback)((0,i.Z)((0,a.Z)().mark((function e(){var n,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m&&!p){e.next=8;break}return e.next=3,fetch("".concat(v,"?authorization=").concat(m,"&").concat(new URLSearchParams(u)));case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,x(t);case 8:case"end":return e.stop()}}),e)}))),[m,p,u,v]);(0,s.useEffect)((function(){r&&A()}),[r,A,v,u]),(0,s.useEffect)((function(){b.response&&_({position:"top-right",title:"error",description:"".concat(JSON.stringify(b.response)),status:"error",duration:5e3,isClosable:!0})}),[b,_]);var S=(0,s.useCallback)((function(){A()}),[A]);return{data:b,runFetch:S,setData:x}}},8245:function(e,n,t){var a=t(4942),i=t(1413),o=t(9439),s=t(2791);n.Z=function(e){var n=e.initialValue,t=e.setSelectedRow,c=(0,s.useState)(),l=(0,o.Z)(c,2),d=l[0],r=l[1],u=(0,s.useState)({}),h=(0,o.Z)(u,2),p=h[0],_=h[1],m=(0,s.useCallback)((function(e){t&&t((0,i.Z)((0,i.Z)({},n),{},(0,a.Z)({},e.name,e.value))),_((0,i.Z)((0,i.Z)({},p),{},(0,a.Z)({},e.name,e.value))),r(d)}),[d,n,t,p]);(0,s.useEffect)((function(){t&&_(n)}),[n,t]),(0,s.useEffect)((function(){_(n)}),[]);var v=(0,s.useCallback)((function(){t(d)}),[d,t]);return{state:p,onChange:m,resetState:v}}},3785:function(e,n,t){var a=t(4165),i=t(5861),o=t(9439),s=t(2791),c=t(1227),l=t(399),d=t(1295);n.Z=function(e){var n=e.link,t=void 0===n?"":n,r=e.noAuthorization,u=void 0!==r&&r,h=(0,d.p)(),p="http://144.24.209.19:9090/api/v1/".concat(l.Z[t]),_=(0,s.useState)(),m=(0,o.Z)(_,2),v=m[0],E=m[1],f=(0,c.Z)().authorization,b=(0,s.useCallback)(function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t,i,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f&&!u){e.next=18;break}return n.authorization=f,t={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)},e.prev=3,e.next=6,fetch(p,t);case 6:return i=e.sent,e.next=9,i.json();case 9:return"success"===(o=e.sent).response?h({position:"top-right",title:"Success",description:"".concat(o.response),status:"success",duration:5e3,isClosable:!0}):h({position:"top-right",title:"Error",description:"".concat(o.response),status:"error",duration:9e3,isClosable:!0}),E(o),e.abrupt("return",o);case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(n){return e.apply(this,arguments)}}(),[f,u,h,p]);return{success:v,setRow:(0,s.useCallback)((function(e){b(e)}),[b])}}},7595:function(e,n,t){var a=t(2791),i=t(9230),o=t(176),s=t(4585),c=t(7886),l=t(184),d=function(e){var n=e.disabled,t=e.value,d=e.name,r=e.Label,u=void 0===r?"":r,h=e.onChange,p=e.width,_=void 0===p?"200px":p,m=e.type,v=void 0===m?"text":m,E=e.placeHolder,f=e.padding,b=e.margin,x=void 0===b?"10px":b,A=e.className,S=void 0===A?"":A,T=e.required,C=void 0!==T&&T,j=(0,i.$G)().t,R=(0,a.useCallback)((function(e){h({name:d,value:e.target.value})}),[d,h]);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(o.k,{direction:"column",w:_,padding:f,margin:x,children:[(0,l.jsx)(s.l,{children:j(u)}),(0,l.jsx)(c.I,{placeholder:E,size:"md",isDisabled:n,isRequired:C,onChange:R,width:"100%",className:S,value:t,type:v})]})})};n.Z=(0,a.memo)(d)},2080:function(e,n,t){var a=t(2791),i=t(9230),o=t(1820),s=t(3380),c=t(1078),l=t(7693),d=t(1461),r=t(7521),u=t(176),h=t(4653),p=t(4224),_=t(184),m=function(e){var n=e.children,t=e.visible,a=void 0!==t&&t,m=e.label,v=e.onClose,E=e.onOK,f=e.submitTitle,b=void 0===f?"smbt":f,x=e.width,A=void 0===x?"3xl":x,S=e.hideSaveButton,T=void 0!==S&&S,C=e.hideCloseButton,j=void 0!==C&&C,R=(0,i.$G)().t;return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(o.u_,{isOpen:a,onClose:v,size:A,children:[(0,_.jsx)(s.Z,{}),(0,_.jsxs)(c.h,{children:[(0,_.jsx)(l.x,{children:R(m)}),(0,_.jsx)(d.o,{}),(0,_.jsx)(r.f,{children:(0,_.jsx)(u.k,{w:"100%",padding:"5px",wrap:"wrap",children:n})}),(0,_.jsx)(h.m,{children:(0,_.jsxs)(u.k,{w:"25%",justifyContent:"space-around",children:[(0,_.jsx)(p.z,{colorScheme:"red",mr:3,onClick:v,hidden:j,children:R("cls")}),(0,_.jsx)(p.z,{colorScheme:"blue",onClick:E,hidden:T,children:R(b)})]})})]})]})})};n.Z=(0,a.memo)(m)},9671:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var a=t(2791),i=t(2080),o=t(7595),s=t(8245),c=t(184),l=function(e){var n=e.visible,t=e.onOK,a=e.onClose,l=e.setSelectedRow,d=e.selectedRow,r=(0,s.Z)({initialValue:d,setSelectedRow:l}),u=r.state,h=r.onChange,p=u.name,_=u.email,m=u.phone,v=u.mobile,E=u.address;return(0,c.jsxs)(i.Z,{visible:n,label:"Details",onOK:t,onClose:a,children:[(0,c.jsx)(o.Z,{name:"name",Label:"Name",onChange:h,value:p}),(0,c.jsx)(o.Z,{name:"email",Label:"Email",onChange:h,value:_}),(0,c.jsx)(o.Z,{name:"phone",Label:"Phone",onChange:h,value:m}),(0,c.jsx)(o.Z,{name:"mobile",Label:"Mobile",onChange:h,value:v}),(0,c.jsx)(o.Z,{name:"address",Label:"Address",onChange:h,value:E})]})},d=(0,a.memo)(l),r=t(8634),u=[{title:"nm",dataIndex:"name",width:"20%"},{title:"eml",dataIndex:"email",width:17},{title:"phn",dataIndex:"phone",width:15},{title:"mbl",dataIndex:"mobile",width:15},{title:"adrs",dataIndex:"address",width:20}],h=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(r.Z,{api:"QUERY_CUSTOMER_TABLE_DATA",postApi:"POST_CUSTOMER_TABLE_DATA",columns:u,hideTools:!1,canEdit:!0,canAdd:!0,canDelete:!0,rowKey:"customer_id",Modal:d,fetchOnFirstRun:!0})})},p=(0,a.memo)(h)}}]);
//# sourceMappingURL=671.00856577.chunk.js.map