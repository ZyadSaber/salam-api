"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[114],{8634:function(e,n,t){t.d(n,{Z:function(){return _}});var a=t(1413),i=t(9439),o=t(2791),s=t(5702),d=t(3838),c=t(3785),l=function(e){var n=e.api,t=void 0===n?"":n,a=(0,o.useState)({}),s=(0,i.Z)(a,2),d=s[0],l=s[1],r=(0,c.Z)({link:t}).setRow;return{setSelectedRow:(0,o.useCallback)((function(e){l(e)}),[]),onSaveAndInsertion:function(){void 0!==d.query_status&&r(d)},selectedRow:d}},r=t(184),u=function(e){var n=e.api,t=e.postApi,c=e.columns,u=e.hideTools,_=e.canAdd,h=e.canEdit,p=e.canDelete,m=e.rowKey,v=e.Modal,E=e.width,f=e.onSelectedRow,b=e.fetchOnFirstRun,A=void 0!==b&&b,x=e.params,T=(0,d.Z)({link:n,fetchOnFirstRun:A,params:x}),S=T.data,C=T.runFetch,R=l({api:t}),g=R.setSelectedRow,j=R.onSaveAndInsertion,w=R.selectedRow,L=(0,o.useState)({}),Z=(0,i.Z)(L,2),O=Z[0],y=Z[1],D=(0,o.useState)(!1),I=(0,i.Z)(D,2),k=I[0],P=I[1],U=(0,o.useCallback)((function(){g({query_status:"n"}),P(!0)}),[g]),N=(0,o.useCallback)((function(){g((0,a.Z)((0,a.Z)({},O),{},{query_status:"u"})),P(!0)}),[O,g]),Y=(0,o.useCallback)((function(){P(!1)}),[]),B=(0,o.useCallback)((function(){P(!1),j(),C()}),[j,C]);return(0,r.jsxs)(r.Fragment,{children:[v&&(0,r.jsx)(v,{visible:k,onOK:B,onClose:Y,selectedRow:w,setSelectedRow:g}),(0,r.jsx)(s.Z,{dataSource:S,columns:c,hideTools:u,canAdd:_,canEdit:h,canDelete:p,rowKey:m,onAdd:U,onEdit:N,onDelete:function(){g((0,a.Z)((0,a.Z)({},O),{},{query_status:"d"})),j()},onSelectedRow:function(e){y(e),f&&f(e)},width:E})]})},_=(0,o.memo)(u)},5702:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(9439),i=t(2791),o=t(184),s=function(e){var n=e.icon,t=e.onClick,a=e.disabled,i=void 0!==a&&a,s=e.width,d=void 0===s?"30px":s,c=e.height,l=void 0===c?"30px":c,r=e.color,u=e.margin,_=void 0===u?"10px":u,h=e.padding,p=e.hidden,m=void 0!==p&&p;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("button",{style:{border:"none",width:d,height:l,backgroundColor:r,padding:h,margin:_,borderRadius:"20px"},hidden:m,onClick:t,disabled:i,children:(0,o.jsx)("i",{className:n})})})},d=(0,i.memo)(s),c=t(898),l=t(9230),r=t(8535),u=function(e){var n=e.dataSource,t=e.rowKey,s=void 0===t?"rowKey":t,u=e.columns,_=e.hideTools,h=void 0===_||_,p=e.canEdit,m=void 0!==p&&p,v=e.canAdd,E=void 0!==v&&v,f=e.canDelete,b=void 0!==f&&f,A=e.onAdd,x=e.onEdit,T=e.onDelete,S=e.actionColumn,C=void 0!==S&&S,R=e.onAction,g=e.actionLabel,j=void 0===g?"":g,w=e.onSelectedRow,L=e.canPrint,Z=void 0!==L&&L,O=e.onPrint,y=e.additionalButtons,D=e.onSave,I=e.canSave,k=void 0!==I&&I,P=e.width,U=void 0===P?"100%":P,N=e.margin,Y=void 0===N?"":N,B=e.padding,M=void 0===B?"":B,Q=(0,l.$G)().t,F=(0,i.useState)(),H=(0,a.Z)(F,2),V=H[0],z=H[1],K=(0,i.useCallback)((function(e){return function(){w(e),z(e)}}),[w]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{style:{width:U,padding:M,margin:Y},children:[(0,o.jsxs)(r.Z,{width:"100%",padding:"0",margin:"5px 0",justifyContent:"center",hidden:h,children:[(0,o.jsx)(d,{icon:"fa-sharp fa-solid fa-plus",onClick:A,hidden:!E}),(0,o.jsx)(d,{icon:"fa-sharp fa-solid fa-pen-clip",onClick:x,hidden:!m,disabled:!V}),(0,o.jsx)(d,{icon:"fa-sharp fa-solid fa-trash",onClick:T,hidden:!b,disabled:!V}),y&&y.map((function(e){return(0,o.jsx)(d,{icon:e.icon,onClick:e.onClick,disabled:e.disabled,hidden:!1})})),(0,o.jsx)(d,{icon:"fa-solid fa-floppy-disk",onClick:D,hidden:!k,disabled:!k}),(0,o.jsx)(d,{icon:"fa-solid fa-print",onClick:O,hidden:!Z,disabled:!Z})]}),(0,o.jsx)("table",{className:"table m-0",children:(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{className:"table-secondary",children:[u.map((function(e){return(0,o.jsx)("th",{scope:"col",style:{width:e.width},children:Q(e.title)})})),(0,o.jsx)("th",{hidden:!C,children:Q("actn")})]})})}),(0,o.jsx)("div",{className:"tbl-content",children:(0,o.jsx)("table",{className:"table ",children:(0,o.jsx)("tbody",{children:null===n||void 0===n?void 0:n.map((function(e){return(0,o.jsxs)("tr",{onClick:K(e),children:[u.map((function(n){return(0,o.jsx)("td",{className:"".concat(V===e?"table-success":"table-light"," "),style:{width:n.width},children:e[n.dataIndex]})})),(0,o.jsx)("td",{className:"".concat(V===e?"table-success":"table-light"," "),hidden:!C,children:(0,o.jsx)(c.Z,{label:j,onClick:function(){R(e)}})})]},e[s])}))})})})]})})}},399:function(e,n){n.Z={QUERY_CUSTOMER_TABLE_DATA:"basicData/customers",POST_CUSTOMER_TABLE_DATA:"basicData/customers_dml",QUERY_SUPPLIER_TABLE_DATA:"basicData/suppliers",POST_SUPPLIER_TABLE_DATA:"basicData/suppliers_dml",POST_CUSTOMER_INVOICE_DETAILS:"invoices/customer_invoice_dml",POST_EMPLOYEE_ATTENDANCE:"employeesData/employee_attendance_dml",POST_EMPLOYEE_LEAVING:"employeesData/employee_leaving_dml",QUERY_EMPLOYEES_TABLE_DATA:"employeesData/employees",POST_EMPLOYEES_TABLE_DATA:"employeesData/employees_dml",QUERY_INVOICE_DETAIL_TABLE_DATA:"invoices/get_invoice_detail",QUERY_INVOICE_MASTER_TABLE_DATA:"invoices/get_invoice_master",QUERY_ITEMS_TABLE_DATA:"basicData/items",POST_ITEMS_TABLE_DATA:"basicData/items_dml",QUERY_PRINT_OPTIONS_TABLE_DAT:"basicData/print_options",POST_PRINT_OPTIONS_TABLE_DATA:"basicData/print_options_dml",USER_LOG_IN:"user_log_in",POST_SUPPLIER_INVOICE:"invoices/supplier_invoice_dml",QUERY_LABELS:"get_labels",QUERY_CHUNK_LABELS:"get_chunk_labels",QUERY_EMPLOYEE_NAME_LIST:"employeesData/pop_employee_name",QUERY_CUSTOMER_AND_SUPPLIER_LIST:"invoices/get_customer_supplier_list",QUERY_SUPPLIER_LIST:"basicData/supplier_pop_data",QUERY_CUSTOMERS_LIST:"basicData/customer_pop_data",QUERY_ITEMS_LIST:"basicData/items_pop_data",QUERY_PRINT_OPTIONS_LIST:"basicData/print_options_pop_data",QUERY_EMPLOYEE_SHEET_SALARY:"employeesData/employee_sheet",QUERY_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/get_casher_receipt_voucher_invoices",POST_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/post_casher_receipt_voucher_invoices_dml",QUERY_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_expense/get_casher_payment_voucher_invoices",POST_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_expense/post_casher_payment_voucher_invoices_dml",QUERY_MAIN_CHART_DATA:"home/dash_board_get_data"}},3838:function(e,n,t){var a=t(4165),i=t(5861),o=t(9439),s=t(2791),d=t(399),c=t(1227),l=t(1295);n.Z=function(e){var n=e.link,t=void 0===n?"":n,r=e.fetchOnFirstRun,u=(e.refreshTimeout,e.params),_=e.noAuthorization,h=void 0!==_&&_,p=(0,l.p)(),m=(0,c.Z)().authorization,v="http://144.24.209.19:9090/api/v1/".concat(d.Z[t]),E=(0,s.useState)([]),f=(0,o.Z)(E,2),b=f[0],A=f[1],x=(0,s.useCallback)((0,i.Z)((0,a.Z)().mark((function e(){var n,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m&&!h){e.next=8;break}return e.next=3,fetch("".concat(v,"?authorization=").concat(m,"&").concat(new URLSearchParams(u)));case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,A(t);case 8:case"end":return e.stop()}}),e)}))),[m,h,u,v]);(0,s.useEffect)((function(){r&&x()}),[r,x,v,u]),(0,s.useEffect)((function(){b.response&&p({position:"top-right",title:"error",description:"".concat(JSON.stringify(b.response)),status:"error",duration:5e3,isClosable:!0})}),[b,p]);var T=(0,s.useCallback)((function(){x()}),[x]);return{data:b,runFetch:T,setData:A}}},8245:function(e,n,t){var a=t(4942),i=t(1413),o=t(9439),s=t(2791);n.Z=function(e){var n=e.initialValue,t=e.setSelectedRow,d=(0,s.useState)(),c=(0,o.Z)(d,2),l=c[0],r=c[1],u=(0,s.useState)({}),_=(0,o.Z)(u,2),h=_[0],p=_[1],m=(0,s.useCallback)((function(e){t&&t((0,i.Z)((0,i.Z)({},n),{},(0,a.Z)({},e.name,e.value))),p((0,i.Z)((0,i.Z)({},h),{},(0,a.Z)({},e.name,e.value))),r(l)}),[l,n,t,h]);(0,s.useEffect)((function(){t&&p(n)}),[n,t]),(0,s.useEffect)((function(){p(n)}),[]);var v=(0,s.useCallback)((function(){t(l)}),[l,t]);return{state:h,onChange:m,resetState:v}}},3785:function(e,n,t){var a=t(4165),i=t(5861),o=t(9439),s=t(2791),d=t(1227),c=t(399),l=t(1295);n.Z=function(e){var n=e.link,t=void 0===n?"":n,r=e.noAuthorization,u=void 0!==r&&r,_=(0,l.p)(),h="http://144.24.209.19:9090/api/v1/".concat(c.Z[t]),p=(0,s.useState)(),m=(0,o.Z)(p,2),v=m[0],E=m[1],f=(0,d.Z)().authorization,b=(0,s.useCallback)(function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t,i,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f&&!u){e.next=18;break}return n.authorization=f,t={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)},e.prev=3,e.next=6,fetch(h,t);case 6:return i=e.sent,e.next=9,i.json();case 9:return"success"===(o=e.sent).response?_({position:"top-right",title:"Success",description:"".concat(o.response),status:"success",duration:5e3,isClosable:!0}):_({position:"top-right",title:"Error",description:"".concat(o.response),status:"error",duration:9e3,isClosable:!0}),E(o),e.abrupt("return",o);case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(n){return e.apply(this,arguments)}}(),[f,u,_,h]);return{success:v,setRow:(0,s.useCallback)((function(e){b(e)}),[b])}}},7595:function(e,n,t){var a=t(2791),i=t(9230),o=t(176),s=t(4585),d=t(7886),c=t(184),l=function(e){var n=e.disabled,t=e.value,l=e.name,r=e.Label,u=void 0===r?"":r,_=e.onChange,h=e.width,p=void 0===h?"200px":h,m=e.type,v=void 0===m?"text":m,E=e.placeHolder,f=e.padding,b=e.margin,A=void 0===b?"10px":b,x=e.className,T=void 0===x?"":x,S=e.required,C=void 0!==S&&S,R=(0,i.$G)().t,g=(0,a.useCallback)((function(e){_({name:l,value:e.target.value})}),[l,_]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(o.k,{direction:"column",w:p,padding:f,margin:A,children:[(0,c.jsx)(s.l,{children:R(u)}),(0,c.jsx)(d.I,{placeholder:E,size:"md",isDisabled:n,isRequired:C,onChange:g,width:"100%",className:T,value:t,type:v})]})})};n.Z=(0,a.memo)(l)},2080:function(e,n,t){var a=t(2791),i=t(9230),o=t(1820),s=t(3380),d=t(1078),c=t(7693),l=t(1461),r=t(7521),u=t(176),_=t(4653),h=t(4224),p=t(184),m=function(e){var n=e.children,t=e.visible,a=void 0!==t&&t,m=e.label,v=e.onClose,E=e.onOK,f=e.submitTitle,b=void 0===f?"smbt":f,A=e.width,x=void 0===A?"3xl":A,T=e.hideSaveButton,S=void 0!==T&&T,C=e.hideCloseButton,R=void 0!==C&&C,g=(0,i.$G)().t;return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(o.u_,{isOpen:a,onClose:v,size:x,children:[(0,p.jsx)(s.Z,{}),(0,p.jsxs)(d.h,{children:[(0,p.jsx)(c.x,{children:g(m)}),(0,p.jsx)(l.o,{}),(0,p.jsx)(r.f,{children:(0,p.jsx)(u.k,{w:"100%",padding:"5px",wrap:"wrap",children:n})}),(0,p.jsx)(_.m,{children:(0,p.jsxs)(u.k,{w:"25%",justifyContent:"space-around",children:[(0,p.jsx)(h.z,{colorScheme:"red",mr:3,onClick:v,hidden:R,children:g("cls")}),(0,p.jsx)(h.z,{colorScheme:"blue",onClick:E,hidden:S,children:g(b)})]})})]})]})})};n.Z=(0,a.memo)(m)},4114:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var a=t(2791),i=t(2080),o=t(8245),s=t(7595),d=t(184),c=function(e){var n=e.visible,t=e.onOK,a=e.onClose,c=e.setSelectedRow,l=e.selectedRow,r=(0,o.Z)({initialValue:l,setSelectedRow:c}),u=r.onChange,_=r.state;return(0,d.jsxs)(i.Z,{visible:n,label:"dtls",onOK:t,onClose:a,children:[(0,d.jsx)(s.Z,{name:"name",value:_.name,onChange:u,Label:"nm",width:"30%"}),(0,d.jsx)(s.Z,{name:"date_of_hiring",value:_.date_of_hiring,onChange:u,Label:"dtfhrng",width:"30%",type:"date"}),(0,d.jsx)(s.Z,{name:"phone",value:_.phone,onChange:u,Label:"phn",width:"30%",type:"number"}),(0,d.jsx)(s.Z,{name:"address",value:_.address,onChange:u,Label:"adrs",width:"30%"}),(0,d.jsx)(s.Z,{name:"mobile",value:_.mobile,onChange:u,Label:"mbl",width:"30%",type:"number"}),(0,d.jsx)(s.Z,{name:"email",value:_.email,onChange:u,Label:"eml",width:"30%"}),(0,d.jsx)(s.Z,{name:"job_title",value:_.job_title,onChange:u,Label:"jbtl",width:"22%"}),(0,d.jsx)(s.Z,{name:"salary",value:_.salary,onChange:u,Label:"slry",width:"22%",type:"number"}),(0,d.jsx)(s.Z,{name:"attendance_time",value:_.attendance_time,onChange:u,Label:"atndnctm",width:"22%",type:"time"}),(0,d.jsx)(s.Z,{name:"leaving_time",value:_.leaving_time,onChange:u,Label:"lvngtm",width:"22%",type:"time"})]})},l=(0,a.memo)(c),r=t(8634),u=[{title:"nm",dataIndex:"name",width:15},{title:"dtfhrng",dataIndex:"date_of_hiring",width:12},{title:"slry",dataIndex:"salary",width:10},{title:"atndnctm",dataIndex:"attendance_time",width:10},{title:"lvngtm",dataIndex:"leaving_time",width:10},{title:"phn",dataIndex:"phone",width:15},{title:"mbl",dataIndex:"mobile",width:15},{title:"adrs",dataIndex:"address",width:20}],_=function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(r.Z,{api:"QUERY_EMPLOYEES_TABLE_DATA",postApi:"POST_EMPLOYEES_TABLE_DATA",columns:u,hideTools:!1,canEdit:!0,canAdd:!0,canDelete:!0,rowKey:"employee_id",Modal:l,fetchOnFirstRun:!0})})},h=(0,a.memo)(_)}}]);
//# sourceMappingURL=114.c54eac52.chunk.js.map