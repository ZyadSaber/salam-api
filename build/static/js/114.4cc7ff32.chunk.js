"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[114],{8634:function(e,n,t){t.d(n,{Z:function(){return _}});var a=t(1413),i=t(9439),o=t(2791),s=t(5702),c=t(3838),l=t(3785),d=function(e){var n=e.api,t=void 0===n?"":n,a=(0,o.useState)({}),s=(0,i.Z)(a,2),c=s[0],d=s[1],r=(0,l.Z)({link:t}).setRow;return{setSelectedRow:(0,o.useCallback)((function(e){d(e)}),[]),onSaveAndInsertion:function(){void 0!==c.query_status&&r(c)},selectedRow:c}},r=t(184),u=function(e){var n=e.api,t=e.postApi,l=e.columns,u=e.hideTools,_=e.canAdd,h=e.canEdit,p=e.canDelete,m=e.rowKey,v=e.Modal,E=e.width,f=e.onSelectedRow,b=e.fetchOnFirstRun,A=void 0!==b&&b,x=e.params,T=(0,c.Z)({link:n,fetchOnFirstRun:A,params:x}),S=T.data,C=T.runFetch,g=d({api:t}),R=g.setSelectedRow,j=g.onSaveAndInsertion,w=g.selectedRow,L=(0,o.useState)({}),Z=(0,i.Z)(L,2),y=Z[0],O=Z[1],D=(0,o.useState)(!1),k=(0,i.Z)(D,2),I=k[0],P=k[1],U=(0,o.useCallback)((function(){R({query_status:"n"}),P(!0)}),[R]),Y=(0,o.useCallback)((function(){R((0,a.Z)((0,a.Z)({},y),{},{query_status:"u"})),P(!0)}),[y,R]),N=(0,o.useCallback)((function(){P(!1)}),[]),B=(0,o.useCallback)((function(){P(!1),j(),C()}),[j,C]);return(0,r.jsxs)(r.Fragment,{children:[v&&(0,r.jsx)(v,{visible:I,onOK:B,onClose:N,selectedRow:w,setSelectedRow:R}),(0,r.jsx)(s.Z,{dataSource:S,columns:l,hideTools:u,canAdd:_,canEdit:h,canDelete:p,rowkey:m,onAdd:U,onEdit:Y,onDelete:function(){R((0,a.Z)((0,a.Z)({},y),{},{query_status:"d"})),j()},onSelectedRow:function(e){O(e),f&&f(e)},width:E})]})},_=(0,o.memo)(u)},5702:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(9439),i=t(2791),o=t(184),s=function(e){var n=e.icon,t=e.onClick,a=e.disabled,i=void 0!==a&&a,s=e.width,c=void 0===s?"30px":s,l=e.height,d=void 0===l?"30px":l,r=e.color,u=e.margin,_=void 0===u?"10px":u,h=e.padding,p=e.hidden,m=void 0!==p&&p;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("button",{style:{border:"none",width:c,height:d,backgroundColor:r,padding:h,margin:_,borderRadius:"20px"},hidden:!m,onClick:t,disabled:i,children:(0,o.jsx)("i",{className:n})})})},c=(0,i.memo)(s),l=t(898),d=t(9230),r=t(8535),u=function(e){var n=e.dataSource,t=e.rowkey,s=void 0===t?"rowkey":t,u=e.columns,_=e.hideTools,h=void 0===_||_,p=e.canEdit,m=void 0!==p&&p,v=e.canAdd,E=void 0!==v&&v,f=e.canDelete,b=void 0!==f&&f,A=e.onAdd,x=e.onEdit,T=e.onDelete,S=e.actionColumn,C=void 0!==S&&S,g=e.onAction,R=e.actionLabel,j=void 0===R?"":R,w=e.onSelectedRow,L=e.canPrint,Z=void 0!==L&&L,y=e.onPrint,O=e.addionalButtons,D=e.onSave,k=e.canSave,I=void 0!==k&&k,P=e.width,U=void 0===P?"100%":P,Y=e.margin,N=void 0===Y?"":Y,B=e.padding,M=void 0===B?"":B,Q=(0,d.$G)().t,F=(0,i.useState)(),H=(0,a.Z)(F,2),V=H[0],z=H[1],K=(0,i.useCallback)((function(e){return function(){w(e),z(e)}}),[w]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{style:{width:U,padding:M,margin:N},children:[(0,o.jsxs)(r.Z,{width:"100%",padding:"0",margin:"5px 0",justifyContent:"center",hidden:h,children:[(0,o.jsx)(c,{icon:"fa-sharp fa-solid fa-plus",onClick:A,hidden:E}),(0,o.jsx)(c,{icon:"fa-sharp fa-solid fa-pen-clip",onClick:x,hidden:m,disabled:!V}),(0,o.jsx)(c,{icon:"fa-sharp fa-solid fa-trash",onClick:T,hidden:b,disabled:!V}),O&&O.map((function(e){return(0,o.jsx)(c,{icon:e.icon,onClick:e.onClick,hidden:e.hidden})})),(0,o.jsx)(c,{icon:"fa-solid fa-floppy-disk",onClick:D,disabled:I}),(0,o.jsx)(c,{icon:"fa-solid fa-print",onClick:y,disabled:Z})]}),(0,o.jsx)("table",{className:"table m-0",children:(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{className:"table-secondary",children:[u.map((function(e){return(0,o.jsx)("th",{scope:"col",style:{width:e.width},children:Q(e.title)})})),(0,o.jsx)("th",{hidden:!C,children:Q("actn")})]})})}),(0,o.jsx)("div",{className:"tbl-content",children:(0,o.jsx)("table",{className:"table ",children:(0,o.jsx)("tbody",{children:null===n||void 0===n?void 0:n.map((function(e){return(0,o.jsxs)("tr",{onClick:K(e),children:[u.map((function(n){return(0,o.jsx)("td",{className:"".concat(V===e?"table-success":"table-light"," "),style:{width:n.width},children:e[n.dataIndex]})})),(0,o.jsx)("td",{className:"".concat(V===e?"table-success":"table-light"," "),hidden:!C,children:(0,o.jsx)(l.Z,{label:j,onClick:function(){g(e)}})})]},e[s])}))})})})]})})}},399:function(e,n){n.Z={QUERY_CUSTOMER_TABLE_DATA:"basicData/customers",POST_CUSTOMER_TABLE_DATA:"basicData/customers_dml",QUERY_SUPPLIER_TABLE_DATA:"basicData/suppliers",POST_SUPPLIER_TABLE_DATA:"basicData/suppliers_dml",POST_CUSTOMER_INVOICE_DETAILS:"invoices/customer_invoice_dml",POST_EMPLOYEE_ATTENDANCE:"employeesData/employee_attendance_dml",POST_EMPLOYEE_LEAVING:"employeesData/employee_leaving_dml",QUERY_EMPLOYEES_TABLE_DATA:"employeesData/employees",POST_EMPLOYEES_TABLE_DATA:"employeesData/employees_dml",QUERY_INVOICE_DETAIL_TABLE_DATA:"invoices/get_invoice_detail",QUERY_INVOICE_MASTER_TABLE_DATA:"invoices/get_invoice_master",QUERY_ITEMS_TABLE_DATA:"basicData/items",POST_ITEMS_TABLE_DATA:"basicData/items_dml",QUERY_PRINT_OPTIONS_TABLE_DAT:"basicData/print_options",POST_PRINT_OPTIONS_TABLE_DATA:"basicData/print_options_dml",USER_LOG_IN:"user_log_in",POST_SUPPLIER_INVOICE:"invoices/supplier_invoice_dml",QUERY_LABELS:"get_labels",QUERY_CHUNK_LABELS:"get_chunk_labels",QUERY_EMPLOYEE_NAME_LIST:"employeesData/pop_employee_name",QUERY_CUSTOMER_AND_SUPPLIER_LIST:"invoices/get_customer_supplier_list",QUERY_SUPPLIER_LIST:"basicData/supplier_pop_data",QUERY_CUSTOMERS_LIST:"basicData/customer_pop_data",QUERY_ITEMS_LIST:"basicData/items_pop_data",QUERY_EMPLOYEE_SHEET_SALARY:"employeesData/employee_sheet",QUERY_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/get_casher_receipt_voucher_invoices",POST_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/post_casher_receipt_voucher_invoices_dml",QUERY_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_expense/get_casher_payment_voucher_invoices",POST_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_expense/post_casher_payment_voucher_invoices_dml",QUERY_MAIN_CHART_DATA:"home/dash_board_get_data"}},3838:function(e,n,t){var a=t(4165),i=t(5861),o=t(9439),s=t(2791),c=t(399),l=t(1227),d=t(1295);n.Z=function(e){var n=e.link,t=void 0===n?"":n,r=e.fetchOnFirstRun,u=(e.refreshTimeout,e.params),_=e.noAuthorization,h=void 0!==_&&_,p=(0,d.p)(),m=(0,l.Z)().authorization,v="http://144.24.209.19:9090/api/v1/".concat(c.Z[t]),E=(0,s.useState)([]),f=(0,o.Z)(E,2),b=f[0],A=f[1],x=(0,s.useCallback)((0,i.Z)((0,a.Z)().mark((function e(){var n,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m&&!h){e.next=8;break}return e.next=3,fetch("".concat(v,"?authorization=").concat(m,"&").concat(new URLSearchParams(u)));case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,A(t);case 8:case"end":return e.stop()}}),e)}))),[m,h,u,v]);(0,s.useEffect)((function(){r&&x()}),[r,x,v,u]),(0,s.useEffect)((function(){b.response&&p({position:"top-right",title:"error",description:"".concat(JSON.stringify(b.response)),status:"error",duration:5e3,isClosable:!0})}),[b,p]);var T=(0,s.useCallback)((function(){x()}),[x]);return{data:b,runFetch:T,setData:A}}},8245:function(e,n,t){var a=t(4942),i=t(1413),o=t(9439),s=t(2791);n.Z=function(e){var n=e.initialValue,t=e.setSelectedRow,c=(0,s.useState)(),l=(0,o.Z)(c,2),d=l[0],r=l[1],u=(0,s.useState)({}),_=(0,o.Z)(u,2),h=_[0],p=_[1],m=(0,s.useCallback)((function(e){t&&t((0,i.Z)((0,i.Z)({},n),{},(0,a.Z)({},e.name,e.value))),p((0,i.Z)((0,i.Z)({},h),{},(0,a.Z)({},e.name,e.value))),r(d)}),[d,n,t,h]);(0,s.useEffect)((function(){t&&p(n)}),[n,t]),(0,s.useEffect)((function(){p(n)}),[]);var v=(0,s.useCallback)((function(){t(d)}),[d,t]);return{state:h,onChange:m,resetState:v}}},3785:function(e,n,t){var a=t(4165),i=t(5861),o=t(9439),s=t(2791),c=t(1227),l=t(399),d=t(1295);n.Z=function(e){var n=e.link,t=void 0===n?"":n,r=e.noAuthorization,u=void 0!==r&&r,_=(0,d.p)(),h="http://144.24.209.19:9090/api/v1/".concat(l.Z[t]),p=(0,s.useState)(),m=(0,o.Z)(p,2),v=m[0],E=m[1],f=(0,c.Z)().authorization,b=(0,s.useCallback)(function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t,i,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f&&!u){e.next=18;break}return n.authorization=f,t={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)},e.prev=3,e.next=6,fetch(h,t);case 6:return i=e.sent,e.next=9,i.json();case 9:return"success"===(o=e.sent).response?_({position:"top-right",title:"Success",description:"".concat(o.response),status:"success",duration:5e3,isClosable:!0}):_({position:"top-right",title:"Error",description:"".concat(o.response),status:"error",duration:9e3,isClosable:!0}),E(o),e.abrupt("return",o);case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(n){return e.apply(this,arguments)}}(),[f,u,_,h]);return{success:v,setRow:(0,s.useCallback)((function(e){b(e)}),[b])}}},7595:function(e,n,t){var a=t(2791),i=t(9230),o=t(176),s=t(4585),c=t(7886),l=t(184),d=function(e){var n=e.disabled,t=e.value,d=e.name,r=e.Label,u=void 0===r?"":r,_=e.onChange,h=e.width,p=void 0===h?"200px":h,m=e.type,v=void 0===m?"text":m,E=e.placeHolder,f=e.padding,b=e.margin,A=void 0===b?"10px":b,x=e.className,T=void 0===x?"":x,S=e.required,C=void 0!==S&&S,g=(0,i.$G)().t,R=(0,a.useCallback)((function(e){_({name:d,value:e.target.value})}),[d,_]);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(o.k,{direction:"column",w:p,padding:f,margin:A,children:[(0,l.jsx)(s.l,{children:g(u)}),(0,l.jsx)(c.I,{placeholder:E,size:"md",isDisabled:n,isRequired:C,onChange:R,width:"100%",className:T,value:t,type:v})]})})};n.Z=(0,a.memo)(d)},2080:function(e,n,t){var a=t(2791),i=t(9230),o=t(1820),s=t(3380),c=t(1078),l=t(7693),d=t(1461),r=t(7521),u=t(176),_=t(4653),h=t(4224),p=t(184),m=function(e){var n=e.children,t=e.visible,a=void 0!==t&&t,m=e.label,v=e.onClose,E=e.onOK,f=e.submitTitle,b=void 0===f?"smbt":f,A=e.width,x=void 0===A?"3xl":A,T=e.hideSaveButton,S=void 0!==T&&T,C=e.hideCloseButton,g=void 0!==C&&C,R=(0,i.$G)().t;return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(o.u_,{isOpen:a,onClose:v,size:x,children:[(0,p.jsx)(s.Z,{}),(0,p.jsxs)(c.h,{children:[(0,p.jsx)(l.x,{children:R(m)}),(0,p.jsx)(d.o,{}),(0,p.jsx)(r.f,{children:(0,p.jsx)(u.k,{w:"100%",padding:"5px",wrap:"wrap",children:n})}),(0,p.jsx)(_.m,{children:(0,p.jsxs)(u.k,{w:"25%",justifyContent:"space-around",children:[(0,p.jsx)(h.z,{colorScheme:"red",mr:3,onClick:v,hidden:g,children:R("cls")}),(0,p.jsx)(h.z,{colorScheme:"blue",onClick:E,hidden:S,children:R(b)})]})})]})]})})};n.Z=(0,a.memo)(m)},4114:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var a=t(2791),i=t(2080),o=t(8245),s=t(7595),c=t(184),l=function(e){var n=e.visible,t=e.onOK,a=e.onClose,l=e.setSelectedRow,d=e.selectedRow,r=(0,o.Z)({initialValue:d,setSelectedRow:l}),u=r.onChange,_=r.state;return(0,c.jsxs)(i.Z,{visible:n,label:"dtls",onOK:t,onClose:a,children:[(0,c.jsx)(s.Z,{name:"name",value:_.name,onChange:u,Label:"nm",width:"30%"}),(0,c.jsx)(s.Z,{name:"date_of_hiring",value:_.date_of_hiring,onChange:u,Label:"dtfhrng",width:"30%",type:"date"}),(0,c.jsx)(s.Z,{name:"phone",value:_.phone,onChange:u,Label:"phn",width:"30%",type:"number"}),(0,c.jsx)(s.Z,{name:"address",value:_.address,onChange:u,Label:"adrs",width:"30%"}),(0,c.jsx)(s.Z,{name:"mobile",value:_.mobile,onChange:u,Label:"mbl",width:"30%",type:"number"}),(0,c.jsx)(s.Z,{name:"email",value:_.email,onChange:u,Label:"eml",width:"30%"}),(0,c.jsx)(s.Z,{name:"job_title",value:_.job_title,onChange:u,Label:"jbtl",width:"22%"}),(0,c.jsx)(s.Z,{name:"salary",value:_.salary,onChange:u,Label:"slry",width:"22%",type:"number"}),(0,c.jsx)(s.Z,{name:"attendance_time",value:_.attendance_time,onChange:u,Label:"atndnctm",width:"22%",type:"time"}),(0,c.jsx)(s.Z,{name:"leaving_time",value:_.leaving_time,onChange:u,Label:"lvngtm",width:"22%",type:"time"})]})},d=(0,a.memo)(l),r=t(8634),u=[{title:"nm",dataIndex:"name",width:15},{title:"dtfhrng",dataIndex:"date_of_hiring",width:12},{title:"slry",dataIndex:"salary",width:10},{title:"atndnctm",dataIndex:"attendance_time",width:10},{title:"lvngtm",dataIndex:"leaving_time",width:10},{title:"phn",dataIndex:"phone",width:15},{title:"mbl",dataIndex:"mobile",width:15},{title:"adrs",dataIndex:"address",width:20}],_=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(r.Z,{api:"QUERY_EMPLOYEES_TABLE_DATA",postApi:"POST_EMPLOYEES_TABLE_DATA",columns:u,hideTools:!1,canEdit:!0,canAdd:!0,canDelete:!0,rowKey:"employee_id",Modal:d,fetchOnFirstRun:!0})})},h=(0,a.memo)(_)}}]);
//# sourceMappingURL=114.4cc7ff32.chunk.js.map