"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[7],{8634:function(e,n,t){t.d(n,{Z:function(){return p}});var i=t(1413),a=t(9439),o=t(2791),s=t(5702),c=t(3838),l=t(3785),r=function(e){var n=e.api,t=void 0===n?"":n,i=(0,o.useState)({}),s=(0,a.Z)(i,2),c=s[0],r=s[1],d=(0,l.Z)({link:t}).setRow;return{setSelectedRow:(0,o.useCallback)((function(e){r(e)}),[]),onSaveAndInsertion:function(){void 0!==c.query_status&&d(c)},selectedRow:c}},d=t(184),u=function(e){var n=e.api,t=e.postApi,l=e.columns,u=e.hideTools,p=e.canAdd,_=e.canEdit,h=e.canDelete,m=e.rowKey,v=e.Modal,f=e.width,E=e.onSelectedRow,b=e.fetchOnFirstRun,x=void 0!==b&&b,S=e.params,T=(0,c.Z)({link:n,fetchOnFirstRun:x,params:S}),A=T.data,C=T.runFetch,j=r({api:t}),R=j.setSelectedRow,w=j.onSaveAndInsertion,g=j.selectedRow,Z=(0,o.useState)({}),k=(0,a.Z)(Z,2),L=k[0],D=k[1],O=(0,o.useState)(!1),I=(0,a.Z)(O,2),y=I[0],P=I[1],U=(0,o.useCallback)((function(){R({query_status:"n"}),P(!0)}),[R]),N=(0,o.useCallback)((function(){R((0,i.Z)((0,i.Z)({},L),{},{query_status:"u"})),P(!0)}),[L,R]),Y=(0,o.useCallback)((function(){P(!1)}),[]),B=(0,o.useCallback)((function(){P(!1),w(),C()}),[w,C]);return(0,d.jsxs)(d.Fragment,{children:[v&&(0,d.jsx)(v,{visible:y,onOK:B,onClose:Y,selectedRow:g,setSelectedRow:R}),(0,d.jsx)(s.Z,{dataSource:A,columns:l,hideTools:u,canAdd:p,canEdit:_,canDelete:h,rowkey:m,onAdd:U,onEdit:N,onDelete:function(){R((0,i.Z)((0,i.Z)({},L),{},{query_status:"d"})),w()},onSelectedRow:function(e){D(e),E&&E(e)},width:f})]})},p=(0,o.memo)(u)},5702:function(e,n,t){t.d(n,{Z:function(){return u}});var i=t(9439),a=t(2791),o=t(184),s=function(e){var n=e.icon,t=e.onClick,i=e.disabled,a=void 0===i||i,s=e.width,c=void 0===s?"30px":s,l=e.height,r=void 0===l?"30px":l,d=e.color,u=e.margin,p=void 0===u?"10px":u,_=e.padding;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("button",{style:{border:"none",width:c,height:r,backgroundColor:d,padding:_,margin:p,borderRadius:"20px"},hidden:!a,onClick:t,children:(0,o.jsx)("i",{className:n})})})},c=(0,a.memo)(s),l=t(898),r=t(9230),d=t(8535),u=function(e){var n=e.dataSource,t=e.rowkey,s=void 0===t?"rowkey":t,u=e.columns,p=e.hideTools,_=void 0===p||p,h=e.canEdit,m=void 0!==h&&h,v=e.canAdd,f=void 0!==v&&v,E=e.canDelete,b=void 0!==E&&E,x=e.onAdd,S=e.onEdit,T=e.onDelete,A=e.actionColumn,C=void 0!==A&&A,j=e.onAction,R=e.actionLabel,w=void 0===R?"":R,g=e.onSelectedRow,Z=e.canPrint,k=void 0!==Z&&Z,L=e.onPrint,D=e.addionalButtons,O=e.onSave,I=e.canSave,y=void 0!==I&&I,P=e.width,U=void 0===P?"100%":P,N=e.margin,Y=void 0===N?"":N,B=e.padding,M=void 0===B?"":B,Q=(0,r.$G)().t,F=(0,a.useState)(),z=(0,i.Z)(F,2),V=z[0],K=z[1],q=(0,a.useCallback)((function(e){return function(){g(e),K(e)}}),[g]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{style:{width:U,padding:M,margin:Y},children:[(0,o.jsxs)(d.Z,{width:"100%",padding:"0",margin:"5px 0",justifyContent:"center",hidden:_,children:[(0,o.jsx)(c,{icon:"fa-sharp fa-solid fa-plus",onClick:x,disabled:f}),(0,o.jsx)(c,{icon:"fa-sharp fa-solid fa-pen-clip",onClick:S,disabled:m}),(0,o.jsx)(c,{icon:"fa-sharp fa-solid fa-trash",onClick:T,disabled:b}),D&&D.map((function(e){return(0,o.jsx)(c,{icon:e.icon,onClick:e.onClick,disabled:e.disabled})})),(0,o.jsx)(c,{icon:"fa-solid fa-floppy-disk",onClick:O,disabled:y}),(0,o.jsx)(c,{icon:"fa-solid fa-print",onClick:L,disabled:k})]}),(0,o.jsx)("table",{className:"table m-0",children:(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{className:"table-secondary",children:[u.map((function(e){return(0,o.jsx)("th",{scope:"col",style:{maxWidth:e.width,minWidth:e.width},children:Q(e.title)})})),(0,o.jsx)("th",{hidden:!C,children:Q("actn")})]})})}),(0,o.jsx)("div",{className:"tbl-content",children:(0,o.jsx)("table",{className:"table ",children:(0,o.jsx)("tbody",{children:null===n||void 0===n?void 0:n.map((function(e){return(0,o.jsxs)("tr",{onClick:q(e),children:[u.map((function(n){return(0,o.jsx)("td",{className:"".concat(V===e?"table-success":"table-light"," "),style:{maxWidth:n.width,minWidth:n.width},children:e[n.dataIndex]})})),(0,o.jsx)("td",{className:"".concat(V===e?"table-success":"table-light"," "),hidden:!C,children:(0,o.jsx)(l.Z,{label:w,onClick:function(){j(e)}})})]},e[s])}))})})})]})})}},399:function(e,n){n.Z={QUERY_CUSTOMER_TABLE_DATA:"basicData/customers",POST_CUSTOMER_TABLE_DATA:"basicData/customers_dml",QUERY_SUPPLIER_TABLE_DATA:"basicData/suppliers",POST_SUPPLIER_TABLE_DATA:"basicData/suppliers_dml",POST_CUSTOMER_INVOICE_DETAILS:"invoices/customer_invoice_dml",POST_EMPLOYEE_ATTENDANCE:"employeesData/employee_attendance_dml",POST_EMPLOYEE_LEAVING:"employeesData/employee_leaving_dml",QUERY_EMPLOYEES_TABLE_DATA:"employeesData/employees",POST_EMPLOYEES_TABLE_DATA:"employeesData/employees_dml",QUERY_INVOICE_DETAIL_TABLE_DATA:"invoices/get_invoice_detail",QUERY_INVOICE_MASTER_TABLE_DATA:"invoices/get_invoice_master",QUERY_ITEMS_TABLE_DATA:"basicData/items",POST_ITEMS_TABLE_DATA:"basicData/items_dml",QUERY_PRINT_OPTIONS_TABLE_DAT:"basicData/print_options",POST_PRINT_OPTIONS_TABLE_DATA:"basicData/print_options_dml",USER_LOG_IN:"user_log_in",POST_SUPPLIER_INVOICE:"invoices/supplier_invoice_dml",QUERY_LABELS:"get_labels",QUERY_CHUNK_LABELS:"get_chunk_labels",QUERY_EMPLOYEE_NAME_LIST:"employeesData/pop_employee_name",QUERY_CUSTOMER_AND_SUPPLIER_LIST:"invoices/get_customer_supplier_list",QUERY_SUPPLIER_LIST:"basicData/supplier_pop_data",QUERY_ITEMS_LIST:"basicData/items_pop_data",QUERY_EMPLOYEE_SHEET_SALARY:"employeesData/employee_sheet",QUERY_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/get_casher_receipt_voucher_invoices"}},3838:function(e,n,t){var i=t(4165),a=t(5861),o=t(9439),s=t(2791),c=t(399),l=t(1227),r=t(1295);n.Z=function(e){var n=e.link,t=void 0===n?"":n,d=e.fetchOnFirstRun,u=(e.refreshTimeout,e.params),p=e.noAuthorization,_=void 0!==p&&p,h=(0,r.p)(),m=(0,l.Z)().authorization,v="http://144.24.209.19:9090/api/v1/".concat(c.Z[t]),f=(0,s.useState)([]),E=(0,o.Z)(f,2),b=E[0],x=E[1],S=(0,s.useCallback)((0,a.Z)((0,i.Z)().mark((function e(){var n,t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m&&!_){e.next=8;break}return e.next=3,fetch("".concat(v,"?authorization=").concat(m,"&").concat(new URLSearchParams(u)));case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,x(t);case 8:case"end":return e.stop()}}),e)}))),[m,_,u,v]);(0,s.useEffect)((function(){d&&S()}),[d,S,v,u]),(0,s.useEffect)((function(){b.response&&h({position:"top-right",title:"error",description:"".concat(JSON.stringify(b.response)),status:"error",duration:5e3,isClosable:!0})}),[b,h]);var T=(0,s.useCallback)((function(){S()}),[S]);return{data:b,runFetch:T,setData:x}}},8245:function(e,n,t){var i=t(4942),a=t(1413),o=t(9439),s=t(2791);n.Z=function(e){var n=e.initialValue,t=e.setSelectedRow,c=(0,s.useState)(),l=(0,o.Z)(c,2),r=l[0],d=l[1],u=(0,s.useState)({}),p=(0,o.Z)(u,2),_=p[0],h=p[1],m=(0,s.useCallback)((function(e){t&&t((0,a.Z)((0,a.Z)({},n),{},(0,i.Z)({},e.name,e.value))),h((0,a.Z)((0,a.Z)({},_),{},(0,i.Z)({},e.name,e.value))),d(r)}),[r,n,t,_]);(0,s.useEffect)((function(){t&&h(n)}),[n,t]),(0,s.useEffect)((function(){h(n)}),[]);var v=(0,s.useCallback)((function(){t(r)}),[r,t]);return{state:_,onChange:m,resetState:v}}},3785:function(e,n,t){var i=t(4165),a=t(5861),o=t(9439),s=t(2791),c=t(1227),l=t(399),r=t(1295);n.Z=function(e){var n=e.link,t=void 0===n?"":n,d=e.noAuthorization,u=void 0!==d&&d,p=(0,r.p)(),_="http://144.24.209.19:9090/api/v1/".concat(l.Z[t]),h=(0,s.useState)(),m=(0,o.Z)(h,2),v=m[0],f=m[1],E=(0,c.Z)().authorization,b=(0,s.useCallback)(function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n){var t,a,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!E&&!u){e.next=18;break}return n.authorization=E,t={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)},e.prev=3,e.next=6,fetch(_,t);case 6:return a=e.sent,e.next=9,a.json();case 9:return"success"===(o=e.sent).response?p({position:"top-right",title:"Success",description:"".concat(o.response),status:"success",duration:5e3,isClosable:!0}):p({position:"top-right",title:"Error",description:"".concat(o.response),status:"error",duration:9e3,isClosable:!0}),f(o),e.abrupt("return",o);case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(n){return e.apply(this,arguments)}}(),[E,u,p,_]);return{success:v,setRow:(0,s.useCallback)((function(e){b(e)}),[b])}}},7595:function(e,n,t){var i=t(2791),a=t(9230),o=t(176),s=t(4585),c=t(7886),l=t(184),r=function(e){var n=e.disabled,t=e.value,r=e.name,d=e.Label,u=void 0===d?"":d,p=e.onChange,_=e.width,h=void 0===_?"200px":_,m=e.type,v=void 0===m?"text":m,f=e.placeHolder,E=e.padding,b=e.margin,x=void 0===b?"10px":b,S=e.className,T=void 0===S?"":S,A=e.required,C=void 0!==A&&A,j=(0,a.$G)().t,R=(0,i.useCallback)((function(e){p({name:r,value:e.target.value})}),[r,p]);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(o.k,{direction:"column",w:h,padding:E,margin:x,children:[(0,l.jsx)(s.l,{children:j(u)}),(0,l.jsx)(c.I,{placeholder:f,size:"md",isDisabled:n,isRequired:C,onChange:R,width:"100%",className:T,value:t,type:v})]})})};n.Z=(0,i.memo)(r)},2080:function(e,n,t){var i=t(2791),a=t(9230),o=t(1820),s=t(3380),c=t(1078),l=t(7693),r=t(1461),d=t(7521),u=t(176),p=t(4653),_=t(4224),h=t(184),m=function(e){var n=e.children,t=e.visible,i=void 0!==t&&t,m=e.label,v=e.onClose,f=e.onOK,E=e.submitTitle,b=void 0===E?"smbt":E,x=e.width,S=void 0===x?"3xl":x,T=e.hideSaveButton,A=void 0!==T&&T,C=e.hideCloseButton,j=void 0!==C&&C,R=(0,a.$G)().t;return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(o.u_,{isOpen:i,onClose:v,size:S,children:[(0,h.jsx)(s.Z,{}),(0,h.jsxs)(c.h,{children:[(0,h.jsx)(l.x,{children:R(m)}),(0,h.jsx)(r.o,{}),(0,h.jsx)(d.f,{children:(0,h.jsx)(u.k,{w:"100%",padding:"5px",wrap:"wrap",children:n})}),(0,h.jsx)(p.m,{children:(0,h.jsxs)(u.k,{w:"25%",justifyContent:"space-around",children:[(0,h.jsx)(_.z,{colorScheme:"red",mr:3,onClick:v,hidden:j,children:R("cls")}),(0,h.jsx)(_.z,{colorScheme:"blue",onClick:f,hidden:A,children:R(b)})]})})]})]})})};n.Z=(0,i.memo)(m)},6007:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var i=t(2791),a=t(2080),o=t(7595),s=t(8245),c=t(184),l=function(e){var n=e.visible,t=e.onOK,i=e.onClose,l=e.setSelectedRow,r=e.selectedRow,d=(0,s.Z)({initialValue:r,setSelectedRow:l}),u=d.state,p=d.onChange,_=u.item_name,h=u.unit,m=u.base_price;return(0,c.jsxs)(a.Z,{visible:n,label:"Details",onOK:t,onClose:i,children:[(0,c.jsx)(o.Z,{name:"item_name",Label:"Name",onChange:p,value:_}),(0,c.jsx)(o.Z,{name:"unit",Label:"Unit",onChange:p,value:h}),(0,c.jsx)(o.Z,{name:"base_price",Label:"Base Price",onChange:p,value:m})]})},r=(0,i.memo)(l),d=t(8634),u=[{title:"itmnm",dataIndex:"name",width:20},{title:"unt",dataIndex:"unit",width:17},{title:"bsprc",dataIndex:"base_price",width:15}],p=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(d.Z,{api:"QUERY_ITEMS_TABLE_DATA",postApi:"POST_ITEMS_TABLE_DATA",columns:u,hideTools:!1,canEdit:!0,canAdd:!0,canDelete:!0,rowKey:"item_id",Modal:r,fetchOnFirstRun:!0})})},_=(0,i.memo)(p)}}]);
//# sourceMappingURL=7.7e856a3c.chunk.js.map