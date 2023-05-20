"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[9],{8634:function(e,n,t){t.d(n,{Z:function(){return _}});var i=t(1413),a=t(9439),o=t(2791),s=t(5702),c=t(3838),r=t(3785),d=function(e){var n=e.api,t=void 0===n?"":n,i=e.runFetch,s=(0,o.useState)({}),c=(0,a.Z)(s,2),d=c[0],l=c[1],u=(0,r.Z)({link:t,additionalFunctionToRun:i}).setRow;return{setSelectedRow:(0,o.useCallback)((function(e){l(e)}),[]),onSaveAndInsertion:function(){void 0!==d.query_status&&u(d)},selectedRow:d}},l=t(184),u=function(e){var n=e.api,t=e.postApi,r=e.columns,u=e.hideTools,_=e.canAdd,p=e.canEdit,h=e.canDelete,E=e.rowKey,m=e.Modal,v=e.width,T=e.onSelectedRow,f=e.fetchOnFirstRun,A=void 0!==f&&f,S=e.params,b=(0,c.Z)({link:n,fetchOnFirstRun:A,params:S}),x=b.data,R=b.runFetch,C=d({api:t,runFetch:R}),O=C.setSelectedRow,j=C.onSaveAndInsertion,D=C.selectedRow,P=(0,o.useState)({}),L=(0,a.Z)(P,2),w=L[0],g=L[1],Z=(0,o.useState)(!1),I=(0,a.Z)(Z,2),k=I[0],y=I[1],N=(0,o.useCallback)((function(){O({query_status:"n"}),y(!0)}),[O]),U=(0,o.useCallback)((function(){O((0,i.Z)((0,i.Z)({},w),{},{query_status:"u"})),y(!0)}),[w,O]),Y=(0,o.useCallback)((function(){y(!1)}),[]),B=(0,o.useCallback)((function(){y(!1),j()}),[j]);return(0,l.jsxs)(l.Fragment,{children:[m&&(0,l.jsx)(m,{visible:k,onOK:B,onClose:Y,selectedRow:D,setSelectedRow:O}),(0,l.jsx)(s.Z,{dataSource:x,columns:r,hideTools:u,canAdd:_,canEdit:p,canDelete:h,rowKey:E,onAdd:N,onEdit:U,onDelete:function(){O((0,i.Z)((0,i.Z)({},w),{},{query_status:"d"})),j()},onSelectedRow:function(e){g(e),T&&T(e)},width:v})]})},_=(0,o.memo)(u)},5702:function(e,n,t){t.d(n,{Z:function(){return u}});var i=t(9439),a=t(2791),o=t(184),s=function(e){var n=e.icon,t=e.onClick,i=e.disabled,a=void 0!==i&&i,s=e.width,c=void 0===s?"30px":s,r=e.height,d=void 0===r?"30px":r,l=e.color,u=e.margin,_=void 0===u?"10px":u,p=e.padding,h=e.hidden,E=void 0!==h&&h;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("button",{style:{border:"none",width:c,height:d,backgroundColor:l,padding:p,margin:_,borderRadius:"20px"},hidden:E,onClick:t,disabled:a,children:(0,o.jsx)("i",{className:n})})})},c=(0,a.memo)(s),r=t(898),d=t(9230),l=t(8535),u=function(e){var n=e.dataSource,t=e.rowKey,s=void 0===t?"rowKey":t,u=e.columns,_=e.hideTools,p=void 0===_||_,h=e.canEdit,E=void 0!==h&&h,m=e.canAdd,v=void 0!==m&&m,T=e.canDelete,f=void 0!==T&&T,A=e.onAdd,S=e.onEdit,b=e.onDelete,x=e.actionColumn,R=void 0!==x&&x,C=e.onAction,O=e.actionLabel,j=void 0===O?"":O,D=e.onSelectedRow,P=e.canPrint,L=void 0!==P&&P,w=e.onPrint,g=e.additionalButtons,Z=e.onSave,I=e.canSave,k=void 0!==I&&I,y=e.width,N=void 0===y?"100%":y,U=e.margin,Y=void 0===U?"":U,B=e.padding,M=void 0===B?"":B,Q=(0,d.$G)().t,F=(0,a.useState)(),H=(0,i.Z)(F,2),V=H[0],z=H[1],K=(0,a.useCallback)((function(e){return function(){D(e),z(e)}}),[D]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{style:{width:N,padding:M,margin:Y},children:[(0,o.jsxs)(l.Z,{width:"100%",padding:"0",margin:"5px 0",justifyContent:"center",hidden:p,children:[(0,o.jsx)(c,{icon:"fa-sharp fa-solid fa-plus",onClick:A,hidden:!v}),(0,o.jsx)(c,{icon:"fa-sharp fa-solid fa-pen-clip",onClick:S,hidden:!E,disabled:!V}),(0,o.jsx)(c,{icon:"fa-sharp fa-solid fa-trash",onClick:b,hidden:!f,disabled:!V}),g&&g.map((function(e){return(0,o.jsx)(c,{icon:e.icon,onClick:e.onClick,disabled:e.disabled,hidden:!1})})),(0,o.jsx)(c,{icon:"fa-solid fa-floppy-disk",onClick:Z,hidden:!k,disabled:!k}),(0,o.jsx)(c,{icon:"fa-solid fa-print",onClick:w,hidden:!L,disabled:!L})]}),(0,o.jsx)("table",{className:"table m-0",children:(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{className:"table-secondary",children:[u.map((function(e){return(0,o.jsx)("th",{scope:"col",style:{width:e.width},children:Q(e.title)})})),(0,o.jsx)("th",{hidden:!R,children:Q("actn")})]})})}),(0,o.jsx)("div",{className:"tbl-content",children:(0,o.jsx)("table",{className:"table ",children:(0,o.jsx)("tbody",{children:null===n||void 0===n?void 0:n.map((function(e){return(0,o.jsxs)("tr",{onClick:K(e),children:[u.map((function(n){return(0,o.jsx)("td",{className:"".concat(V===e?"table-success":"table-light"," "),style:{width:n.width},children:e[n.dataIndex]})})),(0,o.jsx)("td",{className:"".concat(V===e?"table-success":"table-light"," "),hidden:!R,children:(0,o.jsx)(r.Z,{label:j,onClick:function(){C(e)}})})]},e[s])}))})})})]})})}},399:function(e,n){n.Z={QUERY_CUSTOMER_TABLE_DATA:"basicData/customers",POST_CUSTOMER_TABLE_DATA:"basicData/customers_dml",QUERY_SUPPLIER_TABLE_DATA:"basicData/suppliers",POST_SUPPLIER_TABLE_DATA:"basicData/suppliers_dml",POST_CUSTOMER_INVOICE_DETAILS:"invoices/customer_invoice_dml",POST_EMPLOYEE_ATTENDANCE:"employeesData/employee_attendance_dml",POST_EMPLOYEE_LEAVING:"employeesData/employee_leaving_dml",QUERY_EMPLOYEES_TABLE_DATA:"employeesData/employees",POST_EMPLOYEES_TABLE_DATA:"employeesData/employees_dml",QUERY_INVOICE_DETAIL_TABLE_DATA:"invoices/get_invoice_detail",QUERY_INVOICE_MASTER_TABLE_DATA:"invoices/get_invoice_master",QUERY_ITEMS_TABLE_DATA:"basicData/items",POST_ITEMS_TABLE_DATA:"basicData/items_dml",QUERY_PRINT_OPTIONS_TABLE_DAT:"basicData/print_options",POST_PRINT_OPTIONS_TABLE_DATA:"basicData/print_options_dml",USER_LOG_IN:"user_log_in",POST_SUPPLIER_INVOICE:"invoices/supplier_invoice_dml",QUERY_LABELS:"get_labels",QUERY_CHUNK_LABELS:"get_chunk_labels",QUERY_EMPLOYEE_NAME_LIST:"employeesData/pop_employee_name",QUERY_CUSTOMER_AND_SUPPLIER_LIST:"invoices/get_customer_supplier_list",QUERY_SUPPLIER_LIST:"basicData/supplier_pop_data",QUERY_CUSTOMERS_LIST:"basicData/customer_pop_data",QUERY_ITEMS_LIST:"basicData/items_pop_data",QUERY_PRINT_OPTIONS_LIST:"basicData/print_options_pop_data",QUERY_EMPLOYEE_SHEET_SALARY:"employeesData/employee_sheet",QUERY_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/get_casher_receipt_voucher_invoices",POST_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/post_casher_receipt_voucher_invoices_dml",QUERY_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_expense/get_casher_payment_voucher_invoices",POST_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_expense/post_casher_payment_voucher_invoices_dml",QUERY_MAIN_CHART_DATA:"home/dash_board_get_data",QUERY_EXPENSES_TYPES_TABLE_DATA:"basicData/expenses_types_data",POST_EXPENSES_TYPES_TABLE_DATA:"basicData/expenses_types_dml"}},3838:function(e,n,t){var i=t(4165),a=t(5861),o=t(9439),s=t(2791),c=t(399),r=t(1227),d=t(1295);n.Z=function(e){var n=e.link,t=void 0===n?"":n,l=e.fetchOnFirstRun,u=(e.refreshTimeout,e.params),_=e.noAuthorization,p=void 0!==_&&_,h=(0,d.p)(),E=(0,r.Z)().authorization,m="http://144.24.209.19:9090/api/v1/".concat(c.Z[t]),v=(0,s.useState)([]),T=(0,o.Z)(v,2),f=T[0],A=T[1],S=(0,s.useCallback)((0,a.Z)((0,i.Z)().mark((function e(){var n,t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!E&&!p){e.next=8;break}return e.next=3,fetch("".concat(m,"?authorization=").concat(E,"&").concat(new URLSearchParams(u)));case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,A(t);case 8:case"end":return e.stop()}}),e)}))),[E,p,u,m]);(0,s.useEffect)((function(){l&&S()}),[l,S,m,u]),(0,s.useEffect)((function(){f.response&&h({position:"top-right",title:"error",description:"".concat(JSON.stringify(f.response)),status:"error",duration:5e3,isClosable:!0})}),[f,h]);var b=(0,s.useCallback)((function(){S()}),[S]);return{data:f,runFetch:b,setData:A}}},8245:function(e,n,t){var i=t(4942),a=t(1413),o=t(9439),s=t(2791);n.Z=function(e){var n=e.initialValue,t=e.setSelectedRow,c=(0,s.useState)(),r=(0,o.Z)(c,2),d=r[0],l=r[1],u=(0,s.useState)({}),_=(0,o.Z)(u,2),p=_[0],h=_[1],E=(0,s.useCallback)((function(e){t&&t((0,a.Z)((0,a.Z)({},n),{},(0,i.Z)({},e.name,e.value))),h((0,a.Z)((0,a.Z)({},p),{},(0,i.Z)({},e.name,e.value))),l(d)}),[d,n,t,p]);(0,s.useEffect)((function(){t&&h(n)}),[n,t]),(0,s.useEffect)((function(){h(n)}),[]);var m=(0,s.useCallback)((function(){t(d)}),[d,t]);return{state:p,onChange:E,resetState:m}}},3785:function(e,n,t){var i=t(4165),a=t(5861),o=t(9439),s=t(2791),c=t(1227),r=t(399),d=t(1295);n.Z=function(e){var n=e.link,t=void 0===n?"":n,l=e.noAuthorization,u=void 0!==l&&l,_=e.additionalFunctionToRun,p=e.runOnSuccess,h=e.runOnFail,E=(0,d.p)(),m="http://144.24.209.19:9090/api/v1/".concat(r.Z[t]),v=(0,s.useState)(),T=(0,o.Z)(v,2),f=T[0],A=T[1],S=(0,c.Z)().authorization,b=(0,s.useCallback)(function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n){var t,a,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S&&!u){e.next=18;break}return n.authorization=S,t={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)},e.prev=3,e.next=6,fetch(m,t);case 6:return a=e.sent,e.next=9,a.json();case 9:return"success"===(o=e.sent).response?(E({position:"top-right",title:"Success",description:"".concat(o.response),status:"success",duration:5e3,isClosable:!0}),p&&p()):(E({position:"top-right",title:"Error",description:"".concat(o.response),status:"error",duration:9e3,isClosable:!0}),h&&h()),A(o),_&&_(),e.abrupt("return",o);case 16:e.prev=16,e.t0=e.catch(3);case 18:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(n){return e.apply(this,arguments)}}(),[_,S,u,h,p,E,m]);return{success:f,setRow:(0,s.useCallback)((function(e){b(e)}),[b])}}},7595:function(e,n,t){var i=t(2791),a=t(9230),o=t(176),s=t(4585),c=t(7886),r=t(184),d=function(e){var n=e.disabled,t=e.value,d=e.name,l=e.Label,u=void 0===l?"":l,_=e.onChange,p=e.width,h=void 0===p?"200px":p,E=e.type,m=void 0===E?"text":E,v=e.placeHolder,T=e.padding,f=e.margin,A=void 0===f?"10px":f,S=e.className,b=void 0===S?"":S,x=e.required,R=void 0!==x&&x,C=(0,a.$G)().t,O=(0,i.useCallback)((function(e){_({name:d,value:e.target.value})}),[d,_]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(o.k,{direction:"column",w:h,padding:T,margin:A,children:[(0,r.jsx)(s.l,{children:C(u)}),(0,r.jsx)(c.I,{placeholder:v,size:"md",isDisabled:n,isRequired:R,onChange:O,width:"100%",className:b,value:t,type:m})]})})};n.Z=(0,i.memo)(d)},2080:function(e,n,t){var i=t(2791),a=t(9230),o=t(1820),s=t(3380),c=t(1078),r=t(7693),d=t(1461),l=t(7521),u=t(176),_=t(4653),p=t(4224),h=t(184),E=function(e){var n=e.children,t=e.visible,i=void 0!==t&&t,E=e.label,m=e.onClose,v=e.onOK,T=e.submitTitle,f=void 0===T?"smbt":T,A=e.width,S=void 0===A?"3xl":A,b=e.hideSaveButton,x=void 0!==b&&b,R=e.hideCloseButton,C=void 0!==R&&R,O=(0,a.$G)().t;return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(o.u_,{isOpen:i,onClose:m,size:S,children:[(0,h.jsx)(s.Z,{}),(0,h.jsxs)(c.h,{children:[(0,h.jsx)(r.x,{children:O(E)}),(0,h.jsx)(d.o,{}),(0,h.jsx)(l.f,{children:(0,h.jsx)(u.k,{w:"100%",padding:"5px",wrap:"wrap",children:n})}),(0,h.jsx)(_.m,{children:(0,h.jsxs)(u.k,{w:"25%",justifyContent:"space-around",children:[(0,h.jsx)(p.z,{colorScheme:"red",mr:3,onClick:m,hidden:C,children:O("cls")}),(0,h.jsx)(p.z,{colorScheme:"blue",onClick:v,hidden:x,children:O(f)})]})})]})]})})};n.Z=(0,i.memo)(E)},4009:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var i=t(2791),a=t(8634),o=[{title:"no",dataIndex:"print_id",width:33.3},{title:"prntnm",dataIndex:"print_option",width:33.3},{title:"nts",dataIndex:"note",width:33.3}],s=t(2080),c=t(7595),r=t(8245),d=t(184),l=function(e){var n=e.visible,t=e.onOK,i=e.onClose,a=e.setSelectedRow,o=e.selectedRow,l=(0,r.Z)({initialValue:o,setSelectedRow:a}),u=l.state,_=l.onChange,p=u.print_option,h=u.note;return(0,d.jsxs)(s.Z,{visible:n,label:"Details",onOK:t,onClose:i,children:[(0,d.jsx)(c.Z,{name:"print_option",onChange:_,value:p,Label:"Print Option"}),(0,d.jsx)(c.Z,{name:"note",onChange:_,value:h,Label:"Notes"})]})},u=(0,i.memo)(l),_=function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a.Z,{api:"QUERY_PRINT_OPTIONS_TABLE_DAT",postApi:"POST_PRINT_OPTIONS_TABLE_DATA",columns:o,hideTools:!1,canEdit:!0,canAdd:!0,canDelete:!0,rowKey:"print_id",Modal:u,fetchOnFirstRun:!0})})},p=(0,i.memo)(_)}}]);
//# sourceMappingURL=9.04130a31.chunk.js.map