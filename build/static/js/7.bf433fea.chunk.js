"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[7],{8634:function(e,n,t){t.d(n,{Z:function(){return _}});var i=t(1413),a=t(9439),o=t(2791),s=t(5702),c=t(3838),r=t(3785),d=function(e){var n=e.api,t=void 0===n?"":n,i=e.runFetch,s=(0,o.useState)({}),c=(0,a.Z)(s,2),d=c[0],l=c[1],u=(0,r.Z)({link:t,additionalFunctionToRun:i}).setRow;return{setSelectedRow:(0,o.useCallback)((function(e){l(e)}),[]),onSaveAndInsertion:function(){void 0!==d.query_status&&u(d)},selectedRow:d}},l=t(184),u=function(e){var n=e.api,t=e.postApi,r=e.columns,u=e.hideTools,_=e.canAdd,p=e.canEdit,h=e.canDelete,E=e.rowKey,m=e.Modal,v=e.width,T=e.onSelectedRow,A=e.fetchOnFirstRun,f=void 0!==A&&A,S=e.params,b=(0,c.Z)({link:n,fetchOnFirstRun:f,params:S}),x=b.data,R=b.runFetch,C=d({api:t,runFetch:R}),j=C.setSelectedRow,D=C.onSaveAndInsertion,O=C.selectedRow,L=(0,o.useState)({}),g=(0,a.Z)(L,2),w=g[0],P=g[1],Z=(0,o.useState)(!1),k=(0,a.Z)(Z,2),I=k[0],y=k[1],U=(0,o.useCallback)((function(){j({query_status:"n"}),y(!0)}),[j]),N=(0,o.useCallback)((function(){j((0,i.Z)((0,i.Z)({},w),{},{query_status:"u"})),y(!0)}),[w,j]),Y=(0,o.useCallback)((function(){y(!1)}),[]),B=(0,o.useCallback)((function(){y(!1),D()}),[D]);return(0,l.jsxs)(l.Fragment,{children:[m&&(0,l.jsx)(m,{visible:I,onOK:B,onClose:Y,selectedRow:O,setSelectedRow:j}),(0,l.jsx)(s.Z,{dataSource:x,columns:r,hideTools:u,canAdd:_,canEdit:p,canDelete:h,rowKey:E,onAdd:U,onEdit:N,onDelete:function(){j((0,i.Z)((0,i.Z)({},w),{},{query_status:"d"})),D()},onSelectedRow:function(e){P(e),T&&T(e)},width:v})]})},_=(0,o.memo)(u)},5702:function(e,n,t){t.d(n,{Z:function(){return u}});var i=t(9439),a=t(2791),o=t(184),s=function(e){var n=e.icon,t=e.onClick,i=e.disabled,a=void 0!==i&&i,s=e.width,c=void 0===s?"30px":s,r=e.height,d=void 0===r?"30px":r,l=e.color,u=e.margin,_=void 0===u?"10px":u,p=e.padding,h=e.hidden,E=void 0!==h&&h;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("button",{style:{border:"none",width:c,height:d,backgroundColor:l,padding:p,margin:_,borderRadius:"20px"},hidden:E,onClick:t,disabled:a,children:(0,o.jsx)("i",{className:n})})})},c=(0,a.memo)(s),r=t(898),d=t(9230),l=t(8535),u=function(e){var n=e.dataSource,t=e.rowKey,s=void 0===t?"rowKey":t,u=e.columns,_=e.hideTools,p=void 0===_||_,h=e.canEdit,E=void 0!==h&&h,m=e.canAdd,v=void 0!==m&&m,T=e.canDelete,A=void 0!==T&&T,f=e.onAdd,S=e.onEdit,b=e.onDelete,x=e.actionColumn,R=void 0!==x&&x,C=e.onAction,j=e.actionLabel,D=void 0===j?"":j,O=e.onSelectedRow,L=e.canPrint,g=void 0!==L&&L,w=e.onPrint,P=e.additionalButtons,Z=e.onSave,k=e.canSave,I=void 0!==k&&k,y=e.width,U=void 0===y?"100%":y,N=e.margin,Y=void 0===N?"":N,B=e.padding,M=void 0===B?"":B,Q=(0,d.$G)().t,F=(0,a.useState)(),H=(0,i.Z)(F,2),V=H[0],z=H[1],K=(0,a.useCallback)((function(e){return function(){O(e),z(e)}}),[O]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{style:{width:U,padding:M,margin:Y},children:[(0,o.jsxs)(l.Z,{width:"100%",padding:"0",margin:"5px 0",justifyContent:"center",hidden:p,children:[(0,o.jsx)(c,{icon:"fa-sharp fa-solid fa-plus",onClick:f,hidden:!v}),(0,o.jsx)(c,{icon:"fa-sharp fa-solid fa-pen-clip",onClick:S,hidden:!E,disabled:!V}),(0,o.jsx)(c,{icon:"fa-sharp fa-solid fa-trash",onClick:b,hidden:!A,disabled:!V}),P&&P.map((function(e){return(0,o.jsx)(c,{icon:e.icon,onClick:e.onClick,disabled:e.disabled,hidden:!1})})),(0,o.jsx)(c,{icon:"fa-solid fa-floppy-disk",onClick:Z,hidden:!I,disabled:!I}),(0,o.jsx)(c,{icon:"fa-solid fa-print",onClick:w,hidden:!g,disabled:!g})]}),(0,o.jsx)("table",{className:"table m-0",children:(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{className:"table-secondary",children:[u.map((function(e){return(0,o.jsx)("th",{scope:"col",style:{width:e.width},children:Q(e.title)})})),(0,o.jsx)("th",{hidden:!R,children:Q("actn")})]})})}),(0,o.jsx)("div",{className:"tbl-content",children:(0,o.jsx)("table",{className:"table ",children:(0,o.jsx)("tbody",{children:null===n||void 0===n?void 0:n.map((function(e){return(0,o.jsxs)("tr",{onClick:K(e),children:[u.map((function(n){return(0,o.jsx)("td",{className:"".concat(V===e?"table-success":"table-light"," "),style:{width:n.width},children:e[n.dataIndex]})})),(0,o.jsx)("td",{className:"".concat(V===e?"table-success":"table-light"," "),hidden:!R,children:(0,o.jsx)(r.Z,{label:D,onClick:function(){C(e)}})})]},e[s])}))})})})]})})}},399:function(e,n){n.Z={QUERY_CUSTOMER_TABLE_DATA:"basicData/customers",POST_CUSTOMER_TABLE_DATA:"basicData/customers_dml",QUERY_SUPPLIER_TABLE_DATA:"basicData/suppliers",POST_SUPPLIER_TABLE_DATA:"basicData/suppliers_dml",POST_CUSTOMER_INVOICE_DETAILS:"invoices/customer_invoice_dml",POST_EMPLOYEE_ATTENDANCE:"employeesData/employee_attendance_dml",POST_EMPLOYEE_LEAVING:"employeesData/employee_leaving_dml",QUERY_EMPLOYEES_TABLE_DATA:"employeesData/employees",POST_EMPLOYEES_TABLE_DATA:"employeesData/employees_dml",QUERY_INVOICE_DETAIL_TABLE_DATA:"invoices/get_invoice_detail",QUERY_INVOICE_MASTER_TABLE_DATA:"invoices/get_invoice_master",QUERY_ITEMS_TABLE_DATA:"basicData/items",POST_ITEMS_TABLE_DATA:"basicData/items_dml",QUERY_PRINT_OPTIONS_TABLE_DAT:"basicData/print_options",POST_PRINT_OPTIONS_TABLE_DATA:"basicData/print_options_dml",USER_LOG_IN:"user_log_in",POST_SUPPLIER_INVOICE:"invoices/supplier_invoice_dml",QUERY_LABELS:"get_labels",QUERY_CHUNK_LABELS:"get_chunk_labels",QUERY_EMPLOYEE_NAME_LIST:"employeesData/pop_employee_name",QUERY_CUSTOMER_AND_SUPPLIER_LIST:"invoices/get_customer_supplier_list",QUERY_SUPPLIER_LIST:"basicData/supplier_pop_data",QUERY_CUSTOMERS_LIST:"basicData/customer_pop_data",QUERY_ITEMS_LIST:"basicData/items_pop_data",QUERY_PRINT_OPTIONS_LIST:"basicData/print_options_pop_data",QUERY_EMPLOYEE_SHEET_SALARY:"employeesData/employee_sheet",QUERY_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/get_casher_receipt_voucher_invoices",POST_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/post_casher_receipt_voucher_invoices_dml",QUERY_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_expense/get_casher_payment_voucher_invoices",POST_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_expense/post_casher_payment_voucher_invoices_dml",QUERY_MAIN_CHART_DATA:"home/dash_board_get_data",QUERY_EXPENSES_TYPES_TABLE_DATA:"basicData/expenses_types_data",POST_EXPENSES_TYPES_TABLE_DATA:"basicData/expenses_types_dml"}},3838:function(e,n,t){var i=t(4165),a=t(5861),o=t(9439),s=t(2791),c=t(399),r=t(1227),d=t(1295);n.Z=function(e){var n=e.link,t=void 0===n?"":n,l=e.fetchOnFirstRun,u=(e.refreshTimeout,e.params),_=e.noAuthorization,p=void 0!==_&&_,h=(0,d.p)(),E=(0,r.Z)().authorization,m="http://144.24.209.19:9090/api/v1/".concat(c.Z[t]),v=(0,s.useState)([]),T=(0,o.Z)(v,2),A=T[0],f=T[1],S=(0,s.useCallback)((0,a.Z)((0,i.Z)().mark((function e(){var n,t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!E&&!p){e.next=8;break}return e.next=3,fetch("".concat(m,"?authorization=").concat(E,"&").concat(new URLSearchParams(u)));case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,f(t);case 8:case"end":return e.stop()}}),e)}))),[E,p,u,m]);(0,s.useEffect)((function(){l&&S()}),[l,S,m,u]),(0,s.useEffect)((function(){A.response&&h({position:"top-right",title:"error",description:"".concat(JSON.stringify(A.response)),status:"error",duration:5e3,isClosable:!0})}),[A,h]);var b=(0,s.useCallback)((function(){S()}),[S]);return{data:A,runFetch:b,setData:f}}},8245:function(e,n,t){var i=t(4942),a=t(1413),o=t(9439),s=t(2791);n.Z=function(e){var n=e.initialValue,t=e.setSelectedRow,c=(0,s.useState)(),r=(0,o.Z)(c,2),d=r[0],l=r[1],u=(0,s.useState)({}),_=(0,o.Z)(u,2),p=_[0],h=_[1],E=(0,s.useCallback)((function(e){t&&t((0,a.Z)((0,a.Z)({},n),{},(0,i.Z)({},e.name,e.value))),h((0,a.Z)((0,a.Z)({},p),{},(0,i.Z)({},e.name,e.value))),l(d)}),[d,n,t,p]);(0,s.useEffect)((function(){t&&h(n)}),[n,t]),(0,s.useEffect)((function(){h(n)}),[]);var m=(0,s.useCallback)((function(){t(d)}),[d,t]);return{state:p,onChange:E,resetState:m}}},3785:function(e,n,t){var i=t(4165),a=t(5861),o=t(9439),s=t(2791),c=t(1227),r=t(399),d=t(1295);n.Z=function(e){var n=e.link,t=void 0===n?"":n,l=e.noAuthorization,u=void 0!==l&&l,_=e.additionalFunctionToRun,p=e.runOnSuccess,h=e.runOnFail,E=(0,d.p)(),m="http://144.24.209.19:9090/api/v1/".concat(r.Z[t]),v=(0,s.useState)(),T=(0,o.Z)(v,2),A=T[0],f=T[1],S=(0,c.Z)().authorization,b=(0,s.useCallback)(function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n){var t,a,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S&&!u){e.next=18;break}return n.authorization=S,t={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)},e.prev=3,e.next=6,fetch(m,t);case 6:return a=e.sent,e.next=9,a.json();case 9:return"success"===(o=e.sent).response?(E({position:"top-right",title:"Success",description:"".concat(o.response),status:"success",duration:5e3,isClosable:!0}),p&&p()):(E({position:"top-right",title:"Error",description:"".concat(o.response),status:"error",duration:9e3,isClosable:!0}),h&&h()),f(o),_&&_(),e.abrupt("return",o);case 16:e.prev=16,e.t0=e.catch(3);case 18:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(n){return e.apply(this,arguments)}}(),[_,S,u,h,p,E,m]);return{success:A,setRow:(0,s.useCallback)((function(e){b(e)}),[b])}}},7595:function(e,n,t){var i=t(2791),a=t(9230),o=t(176),s=t(4585),c=t(7886),r=t(184),d=function(e){var n=e.disabled,t=e.value,d=e.name,l=e.Label,u=void 0===l?"":l,_=e.onChange,p=e.width,h=void 0===p?"200px":p,E=e.type,m=void 0===E?"text":E,v=e.placeHolder,T=e.padding,A=e.margin,f=void 0===A?"10px":A,S=e.className,b=void 0===S?"":S,x=e.required,R=void 0!==x&&x,C=(0,a.$G)().t,j=(0,i.useCallback)((function(e){_({name:d,value:e.target.value})}),[d,_]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(o.k,{direction:"column",w:h,padding:T,margin:f,children:[(0,r.jsx)(s.l,{children:C(u)}),(0,r.jsx)(c.I,{placeholder:v,size:"md",isDisabled:n,isRequired:R,onChange:j,width:"100%",className:b,value:t,type:m})]})})};n.Z=(0,i.memo)(d)},2080:function(e,n,t){var i=t(2791),a=t(9230),o=t(1820),s=t(3380),c=t(1078),r=t(7693),d=t(1461),l=t(7521),u=t(176),_=t(4653),p=t(4224),h=t(184),E=function(e){var n=e.children,t=e.visible,i=void 0!==t&&t,E=e.label,m=e.onClose,v=e.onOK,T=e.submitTitle,A=void 0===T?"smbt":T,f=e.width,S=void 0===f?"3xl":f,b=e.hideSaveButton,x=void 0!==b&&b,R=e.hideCloseButton,C=void 0!==R&&R,j=(0,a.$G)().t;return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(o.u_,{isOpen:i,onClose:m,size:S,children:[(0,h.jsx)(s.Z,{}),(0,h.jsxs)(c.h,{children:[(0,h.jsx)(r.x,{children:j(E)}),(0,h.jsx)(d.o,{}),(0,h.jsx)(l.f,{children:(0,h.jsx)(u.k,{w:"100%",padding:"5px",wrap:"wrap",children:n})}),(0,h.jsx)(_.m,{children:(0,h.jsxs)(u.k,{w:"25%",justifyContent:"space-around",children:[(0,h.jsx)(p.z,{colorScheme:"red",mr:3,onClick:m,hidden:C,children:j("cls")}),(0,h.jsx)(p.z,{colorScheme:"blue",onClick:v,hidden:x,children:j(A)})]})})]})]})})};n.Z=(0,i.memo)(E)},6007:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var i=t(2791),a=t(2080),o=t(7595),s=t(8245),c=t(184),r=function(e){var n=e.visible,t=e.onOK,i=e.onClose,r=e.setSelectedRow,d=e.selectedRow,l=(0,s.Z)({initialValue:d,setSelectedRow:r}),u=l.state,_=l.onChange,p=u.item_name,h=u.unit,E=u.base_price;return(0,c.jsxs)(a.Z,{visible:n,label:"Details",onOK:t,onClose:i,children:[(0,c.jsx)(o.Z,{name:"item_name",Label:"Name",onChange:_,value:p}),(0,c.jsx)(o.Z,{name:"unit",Label:"Unit",onChange:_,value:h}),(0,c.jsx)(o.Z,{name:"base_price",Label:"Base Price",onChange:_,value:E})]})},d=(0,i.memo)(r),l=t(8634),u=[{title:"itmnm",dataIndex:"name",width:20},{title:"unt",dataIndex:"unit",width:17},{title:"bsprc",dataIndex:"base_price",width:15}],_=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(l.Z,{api:"QUERY_ITEMS_TABLE_DATA",postApi:"POST_ITEMS_TABLE_DATA",columns:u,hideTools:!1,canEdit:!0,canAdd:!0,canDelete:!0,rowKey:"item_id",Modal:d,fetchOnFirstRun:!0})})},p=(0,i.memo)(_)}}]);
//# sourceMappingURL=7.bf433fea.chunk.js.map