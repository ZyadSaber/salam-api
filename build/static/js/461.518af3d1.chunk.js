"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[461],{8864:function(e,t,a){var n=a(2791),i=a(9230),s=a(184),o=function(e){var t=e.width,a=void 0===t?"200px":t,n=e.Options,o=e.onChange,l=e.Label,d=e.value,c=void 0===d?0:d,r=e.name,u=e.withLabel,_=void 0!==u&&u,h=e.margin,m=void 0===h?"10px":h,p=e.padding,v=(0,i.$G)().t;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"mb-1",style:{width:a,padding:p,margin:m},children:[(0,s.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:v(l)}),(0,s.jsxs)("select",{className:"form-select","aria-label":"Default select example",onChange:function(e){n.map((function(t){t.value===+e.target.value&&o(_?{value:t.value,label:t.label,name:r}:{value:t.value,name:r})}))},children:[(0,s.jsx)("option",{selected:!0,children:"Select"}),n.map((function(e){return(0,s.jsxs)("option",{value:e.value,selected:c===e.value&&!0,children:[" ",v(e.label)]},e.value)}))]})]})})};t.Z=(0,n.memo)(o)},6888:function(e,t,a){var n=a(2791),i=a(8864),s=a(3838),o=a(184),l=function(e){var t=e.width,a=e.Api,n=e.onChange,l=e.Label,d=e.name,c=void 0===d?"":d,r=e.value,u=void 0===r?0:r,_=e.withLabel,h=void 0!==_&&_,m=e.padding,p=e.margin,v=e.params,E=e.fetchOnFirstRun,f=void 0!==E&&E,b=(0,s.Z)({link:a,fetchOnFirstRun:f,params:v}).data;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.Z,{Options:b,onChange:n,Label:l,value:u,name:c,width:t,withLabel:h,margin:p,padding:m})})};t.Z=(0,n.memo)(l)},5702:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(9439),i=a(2791),s=a(184),o=function(e){var t=e.icon,a=e.onClick,n=e.disabled,i=void 0!==n&&n,o=e.width,l=void 0===o?"30px":o,d=e.height,c=void 0===d?"30px":d,r=e.color,u=e.margin,_=void 0===u?"10px":u,h=e.padding,m=e.hidden,p=void 0!==m&&m;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("button",{style:{border:"none",width:l,height:c,backgroundColor:r,padding:h,margin:_,borderRadius:"20px"},hidden:p,onClick:a,disabled:i,children:(0,s.jsx)("i",{className:t})})})},l=(0,i.memo)(o),d=a(898),c=a(9230),r=a(8535),u=function(e){var t=e.dataSource,a=e.rowKey,o=void 0===a?"rowKey":a,u=e.columns,_=e.hideTools,h=void 0===_||_,m=e.canEdit,p=void 0!==m&&m,v=e.canAdd,E=void 0!==v&&v,f=e.canDelete,b=void 0!==f&&f,x=e.onAdd,T=e.onEdit,g=e.onDelete,A=e.actionColumn,S=void 0!==A&&A,C=e.onAction,L=e.actionLabel,Z=void 0===L?"":L,R=e.onSelectedRow,j=e.canPrint,w=void 0!==j&&j,I=e.onPrint,O=e.additionalButtons,D=e.onSave,P=e.canSave,y=void 0!==P&&P,N=e.width,k=void 0===N?"100%":N,U=e.margin,Y=void 0===U?"":U,Q=e.padding,B=void 0===Q?"":Q,M=(0,c.$G)().t,F=(0,i.useState)(),z=(0,n.Z)(F,2),V=z[0],H=z[1],q=(0,i.useCallback)((function(e){return function(){R(e),H(e)}}),[R]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{style:{width:k,padding:B,margin:Y},children:[(0,s.jsxs)(r.Z,{width:"100%",padding:"0",margin:"5px 0",justifyContent:"center",hidden:h,children:[(0,s.jsx)(l,{icon:"fa-sharp fa-solid fa-plus",onClick:x,hidden:!E}),(0,s.jsx)(l,{icon:"fa-sharp fa-solid fa-pen-clip",onClick:T,hidden:!p,disabled:!V}),(0,s.jsx)(l,{icon:"fa-sharp fa-solid fa-trash",onClick:g,hidden:!b,disabled:!V}),O&&O.map((function(e){return(0,s.jsx)(l,{icon:e.icon,onClick:e.onClick,disabled:e.disabled,hidden:!1})})),(0,s.jsx)(l,{icon:"fa-solid fa-floppy-disk",onClick:D,hidden:!y,disabled:!y}),(0,s.jsx)(l,{icon:"fa-solid fa-print",onClick:I,hidden:!w,disabled:!w})]}),(0,s.jsx)("table",{className:"table m-0",children:(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"table-secondary",children:[u.map((function(e){return(0,s.jsx)("th",{scope:"col",style:{width:e.width},children:M(e.title)})})),(0,s.jsx)("th",{hidden:!S,children:M("actn")})]})})}),(0,s.jsx)("div",{className:"tbl-content",children:(0,s.jsx)("table",{className:"table ",children:(0,s.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){return(0,s.jsxs)("tr",{onClick:q(e),children:[u.map((function(t){return(0,s.jsx)("td",{className:"".concat(V===e?"table-success":"table-light"," "),style:{width:t.width},children:e[t.dataIndex]})})),(0,s.jsx)("td",{className:"".concat(V===e?"table-success":"table-light"," "),hidden:!S,children:(0,s.jsx)(d.Z,{label:Z,onClick:function(){C(e)}})})]},e[o])}))})})})]})})}},399:function(e,t){t.Z={QUERY_CUSTOMER_TABLE_DATA:"basicData/customers",POST_CUSTOMER_TABLE_DATA:"basicData/customers_dml",QUERY_SUPPLIER_TABLE_DATA:"basicData/suppliers",POST_SUPPLIER_TABLE_DATA:"basicData/suppliers_dml",POST_CUSTOMER_INVOICE_DETAILS:"invoices/customer_invoice_dml",POST_EMPLOYEE_ATTENDANCE:"employeesData/employee_attendance_dml",POST_EMPLOYEE_LEAVING:"employeesData/employee_leaving_dml",QUERY_EMPLOYEES_TABLE_DATA:"employeesData/employees",POST_EMPLOYEES_TABLE_DATA:"employeesData/employees_dml",QUERY_INVOICE_DETAIL_TABLE_DATA:"invoices/get_invoice_detail",QUERY_INVOICE_MASTER_TABLE_DATA:"invoices/get_invoice_master",QUERY_ITEMS_TABLE_DATA:"basicData/items",POST_ITEMS_TABLE_DATA:"basicData/items_dml",QUERY_PRINT_OPTIONS_TABLE_DAT:"basicData/print_options",POST_PRINT_OPTIONS_TABLE_DATA:"basicData/print_options_dml",USER_LOG_IN:"user_log_in",POST_SUPPLIER_INVOICE:"invoices/supplier_invoice_dml",QUERY_LABELS:"get_labels",QUERY_CHUNK_LABELS:"get_chunk_labels",QUERY_EMPLOYEE_NAME_LIST:"employeesData/pop_employee_name",QUERY_CUSTOMER_AND_SUPPLIER_LIST:"invoices/get_customer_supplier_list",QUERY_SUPPLIER_LIST:"basicData/supplier_pop_data",QUERY_CUSTOMERS_LIST:"basicData/customer_pop_data",QUERY_ITEMS_LIST:"basicData/items_pop_data",QUERY_PRINT_OPTIONS_LIST:"basicData/print_options_pop_data",QUERY_EMPLOYEE_SHEET_SALARY:"employeesData/employee_sheet",QUERY_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/get_casher_receipt_voucher_invoices",POST_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/post_casher_receipt_voucher_invoices_dml",QUERY_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_expense/get_casher_payment_voucher_invoices",POST_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_expense/post_casher_payment_voucher_invoices_dml",QUERY_MAIN_CHART_DATA:"home/dash_board_get_data",QUERY_EXPENSES_TYPES_TABLE_DATA:"basicData/expenses_types_data",POST_EXPENSES_TYPES_TABLE_DATA:"basicData/expenses_types_dml"}},3838:function(e,t,a){var n=a(4165),i=a(5861),s=a(9439),o=a(2791),l=a(399),d=a(1227),c=a(1295);t.Z=function(e){var t=e.link,a=void 0===t?"":t,r=e.fetchOnFirstRun,u=(e.refreshTimeout,e.params),_=e.noAuthorization,h=void 0!==_&&_,m=(0,c.p)(),p=(0,d.Z)().authorization,v="http://192.168.1.250:9090/api/v1/".concat(l.Z[a]),E=(0,o.useState)([]),f=(0,s.Z)(E,2),b=f[0],x=f[1],T=(0,o.useCallback)((0,i.Z)((0,n.Z)().mark((function e(){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p&&!h){e.next=8;break}return e.next=3,fetch("".concat(v,"?authorization=").concat(p,"&").concat(new URLSearchParams(u)));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,x(a);case 8:case"end":return e.stop()}}),e)}))),[p,h,u,v]);(0,o.useEffect)((function(){r&&T()}),[r,T,v,u]),(0,o.useEffect)((function(){b.response&&m({position:"top-right",title:"error",description:"".concat(JSON.stringify(b.response)),status:"error",duration:5e3,isClosable:!0})}),[b,m]);var g=(0,o.useCallback)((function(){T()}),[T]);return{data:b,runFetch:g,setData:x}}},8245:function(e,t,a){var n=a(4942),i=a(1413),s=a(9439),o=a(2791);t.Z=function(e){var t=e.initialValue,a=e.setSelectedRow,l=(0,o.useState)(),d=(0,s.Z)(l,2),c=d[0],r=d[1],u=(0,o.useState)({}),_=(0,s.Z)(u,2),h=_[0],m=_[1],p=(0,o.useCallback)((function(e){a&&a((0,i.Z)((0,i.Z)({},t),{},(0,n.Z)({},e.name,e.value))),m((0,i.Z)((0,i.Z)({},h),{},(0,n.Z)({},e.name,e.value))),r(c)}),[c,t,a,h]);(0,o.useEffect)((function(){a&&m(t)}),[t,a]),(0,o.useEffect)((function(){m(t)}),[]);var v=(0,o.useCallback)((function(){a(c)}),[c,a]);return{state:h,onChange:p,resetState:v}}},3785:function(e,t,a){var n=a(4165),i=a(5861),s=a(9439),o=a(2791),l=a(1227),d=a(399),c=a(1295);t.Z=function(e){var t=e.link,a=void 0===t?"":t,r=e.noAuthorization,u=void 0!==r&&r,_=e.additionalFunctionToRun,h=e.runOnSuccess,m=e.runOnFail,p=(0,c.p)(),v="http://192.168.1.250:9090/api/v1/".concat(d.Z[a]),E=(0,o.useState)(),f=(0,s.Z)(E,2),b=f[0],x=f[1],T=(0,l.Z)().authorization,g=(0,o.useCallback)(function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var a,i,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!T&&!u){e.next=18;break}return t.authorization=T,a={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)},e.prev=3,e.next=6,fetch(v,a);case 6:return i=e.sent,e.next=9,i.json();case 9:return"success"===(s=e.sent).response?(p({position:"top-right",title:"Success",description:"".concat(s.response),status:"success",duration:5e3,isClosable:!0}),h&&h()):(p({position:"top-right",title:"Error",description:"".concat(s.response),status:"error",duration:9e3,isClosable:!0}),m&&m()),x(s),_&&_(),e.abrupt("return",s);case 16:e.prev=16,e.t0=e.catch(3);case 18:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(t){return e.apply(this,arguments)}}(),[_,T,u,m,h,p,v]);return{success:b,setRow:(0,o.useCallback)((function(e){g(e)}),[g])}}},7595:function(e,t,a){var n=a(2791),i=a(9230),s=a(176),o=a(4585),l=a(7886),d=a(184),c=function(e){var t=e.disabled,a=e.value,c=e.name,r=e.Label,u=void 0===r?"":r,_=e.onChange,h=e.width,m=void 0===h?"200px":h,p=e.type,v=void 0===p?"text":p,E=e.placeHolder,f=e.padding,b=e.margin,x=void 0===b?"10px":b,T=e.className,g=void 0===T?"":T,A=e.required,S=void 0!==A&&A,C=(0,i.$G)().t,L=(0,n.useCallback)((function(e){_({name:c,value:e.target.value})}),[c,_]);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(s.k,{direction:"column",w:m,padding:f,margin:x,children:[(0,d.jsx)(o.l,{children:C(u)}),(0,d.jsx)(l.I,{placeholder:E,size:"md",isDisabled:t,isRequired:S,onChange:L,width:"100%",className:g,value:a,type:v})]})})};t.Z=(0,n.memo)(c)},9461:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var n=a(3433),i=a(1413),s=a(9439),o=a(2791),l=a(4942),d=a(6888),c=a(7595),r=a(8535),u=a(184),_=function(e){var t=e.activeItem,a=e.setActiveItem,n=e.itemChange,s=e.itemState,_=e.state,h=e.onChange,m=s.item_id,p=s.width,v=s.height,E=s.size,f=s.quantity,b=s.price,x=s.total,T=s.notes,g=s.print_id;(0,o.useEffect)((function(){a((0,i.Z)((0,i.Z)({},t),{},{size:+p*+v,total:+f*+b*+p*+v}))}),[v,p,f,b]);var A=(0,o.useCallback)((function(e){a((0,i.Z)((0,i.Z)({},t),{},(0,l.Z)({itemName:e.label},e.name,e.value)))}),[t,a]),S=(0,o.useCallback)((function(e){a((0,i.Z)((0,i.Z)({},t),{},(0,l.Z)({print_name:e.label},e.name,e.value)))}),[t,a]);return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(r.Z,{width:"100%",flexDirection:"column",margin:"0",padding:"0",children:[(0,u.jsxs)(r.Z,{margin:"0",padding:"0",children:[(0,u.jsx)(d.Z,{Api:"QUERY_CUSTOMERS_LIST",onChange:h,value:_.customer_id,Label:"cstmr",name:"customer_id",fetchOnFirstRun:!0}),(0,u.jsx)(c.Z,{name:"date",value:_.date,Label:"dt",onChange:h,type:"date"})]}),(0,u.jsxs)(r.Z,{margin:"0",padding:"0",children:[(0,u.jsx)(d.Z,{Api:"QUERY_PRINT_OPTIONS_LIST",onChange:S,value:g,Label:"prntnm",name:"print_id",withLabel:!0,fetchOnFirstRun:!0}),(0,u.jsx)(d.Z,{Api:"QUERY_ITEMS_LIST",onChange:A,value:m,Label:"itmnm",name:"item_id",withLabel:!0,fetchOnFirstRun:!0})]}),(0,u.jsxs)(r.Z,{margin:"0",padding:"0",children:[(0,u.jsx)(c.Z,{name:"width",value:p,Label:"wdth",onChange:n,width:"14%"}),(0,u.jsx)(c.Z,{name:"height",value:v,Label:"hght",onChange:n,width:"14%"}),(0,u.jsx)(c.Z,{name:"size",value:E,Label:"sz",onChange:n,disabled:!0,width:"14%"}),(0,u.jsx)(c.Z,{name:"quantity",value:f,Label:"qnty",onChange:n,width:"14%"}),(0,u.jsx)(c.Z,{name:"price",value:b,Label:"prc",onChange:n,width:"14%"}),(0,u.jsx)(c.Z,{name:"total",value:x,Label:"total",onChange:n,disabled:!0,width:"14%"}),(0,u.jsx)(c.Z,{name:"notes",value:T,Label:"nts",onChange:n,width:"14%"})]})]})})},h=(0,o.memo)(_),m=a(3785),p=a(8245),v=a(5702),E=[{title:"prntnm",width:"10%",dataIndex:"print_name"},{title:"itmnm",width:"10%",dataIndex:"itemName"},{title:"wdth",width:"10%",dataIndex:"width"},{title:"hght",width:"10%",dataIndex:"height"},{title:"sz",width:"10%",dataIndex:"size"},{title:"qnty",width:"10%",dataIndex:"quantity"},{title:"prc",width:"10%",dataIndex:"price"},{title:"total",width:"10%",dataIndex:"total"},{title:"nts",width:"10%",dataIndex:"notes"}],f=a(898),b=function(){var e=(0,o.useCallback)((function(){_({customer_id:0,date:"",items:[],query_status:"n",total:0,discount:0,total_after_discount:0,paid:0,credit:0})}),[]),t=(0,m.Z)({link:"POST_CUSTOMER_INVOICE_DETAILS",runOnSuccess:e}).setRow,a=(0,o.useState)({customer_id:0,date:"",items:[],query_status:"n",total:0,discount:0,total_after_discount:0,paid:0,credit:0}),l=(0,s.Z)(a,2),d=l[0],_=l[1],b=(0,o.useState)({item_id:0,width:0,height:0,size:0,quantity:0,price:0,total:0,notes:"",itemName:"",print_id:0,print_name:""}),x=(0,s.Z)(b,2),T=x[0],g=x[1],A=(0,p.Z)({initialValue:T,setSelectedRow:g}),S=A.state,C=A.onChange,L=(0,p.Z)({initialValue:d,setSelectedRow:_}),Z=L.state,R=L.onChange,j=(0,o.useCallback)((function(){_((0,i.Z)((0,i.Z)({},d),{},{items:[].concat((0,n.Z)(d.items),[T]),total:d.total+T.total})),g({item_id:0,width:0,height:0,size:0,quantity:0,price:0,total:0,notes:"",itemName:"",print_id:0,print_name:""})}),[T,d]),w=(0,o.useCallback)((function(){t(d)}),[d,t]);(0,o.useEffect)((function(){_((0,i.Z)((0,i.Z)({},d),{},{total_after_discount:d.total-d.discount,credit:d.total-d.discount-d.paid}))}),[d.total,d.discount,d.paid]);var I=[{icon:"fa-solid fa-broom",onClick:e}];return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(r.Z,{flexDirection:"column",width:"100%",children:[(0,u.jsx)(h,{itemState:S,itemChange:C,activeItem:T,setActiveItem:g,onChange:R,state:Z}),(0,u.jsx)(v.Z,{columns:E,dataSource:d.items,actionColumn:!0,actionLabel:"Delete",hideTools:!1,onAdd:j,onSelectedRow:g,canAdd:!0,additionalButtons:I}),(0,u.jsxs)(r.Z,{width:"100%",justifyContent:"space-around",children:[(0,u.jsx)(c.Z,{name:"total",disabled:!0,value:Z.total,Label:"total",width:"15%"}),(0,u.jsx)(c.Z,{name:"discount",value:Z.discount,Label:"dscnt",onChange:R,width:"15%"}),(0,u.jsx)(c.Z,{name:"totalAfterDiscount",disabled:!0,value:Z.total_after_discount,Label:"Tlaftrdsnt",width:"15%"}),(0,u.jsx)(c.Z,{name:"paid",value:Z.paid,Label:"paid",onChange:R,width:"15%"}),(0,u.jsx)(c.Z,{name:"credit",disabled:!0,value:Z.credit,Label:"Crdt",width:"15%"}),(0,u.jsx)(f.Z,{label:"sv",width:"15%",height:"50%",margin:"30px 0",onClick:w})]})]})})},x=(0,o.memo)(b)}}]);
//# sourceMappingURL=461.518af3d1.chunk.js.map