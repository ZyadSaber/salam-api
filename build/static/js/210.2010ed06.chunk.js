"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[210],{8864:function(e,t,a){var n=a(2791),i=a(9230),s=a(184),o=function(e){var t=e.width,a=void 0===t?"200px":t,n=e.Options,o=e.onChange,l=e.Label,d=e.value,c=void 0===d?0:d,r=e.name,u=e.withLabel,h=void 0!==u&&u,_=e.margin,m=void 0===_?"10px":_,p=e.padding,v=(0,i.$G)().t;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"mb-1",style:{width:a,padding:p,margin:m},children:[(0,s.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:v(l)}),(0,s.jsxs)("select",{className:"form-select","aria-label":"Default select example",onChange:function(e){n.map((function(t){t.value===+e.target.value&&o(h?{value:t.value,label:t.label,name:r}:{value:t.value,name:r})}))},children:[(0,s.jsx)("option",{selected:!0,children:"Select"}),n.map((function(e){return(0,s.jsxs)("option",{value:e.value,selected:c===e.value&&!0,children:[" ",v(e.label)]},e.value)}))]})]})})};t.Z=(0,n.memo)(o)},6888:function(e,t,a){var n=a(2791),i=a(8864),s=a(3838),o=a(184),l=function(e){var t=e.width,a=e.Api,n=e.onChange,l=e.Label,d=e.name,c=void 0===d?"":d,r=e.value,u=void 0===r?0:r,h=e.withLabel,_=void 0!==h&&h,m=e.padding,p=e.margin,v=e.params,f=e.fetchOnFirstRun,E=void 0!==f&&f,b=(0,s.Z)({link:a,fetchOnFirstRun:E,params:v}).data;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.Z,{Options:b,onChange:n,Label:l,value:u,name:c,width:t,withLabel:_,margin:p,padding:m})})};t.Z=(0,n.memo)(l)},5702:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(9439),i=a(2791),s=a(184),o=function(e){var t=e.icon,a=e.onClick,n=e.disabled,i=void 0!==n&&n,o=e.width,l=void 0===o?"30px":o,d=e.height,c=void 0===d?"30px":d,r=e.color,u=e.margin,h=void 0===u?"10px":u,_=e.padding,m=e.hidden,p=void 0!==m&&m;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("button",{style:{border:"none",width:l,height:c,backgroundColor:r,padding:_,margin:h,borderRadius:"20px"},hidden:!p,onClick:a,disabled:i,children:(0,s.jsx)("i",{className:t})})})},l=(0,i.memo)(o),d=a(898),c=a(9230),r=a(8535),u=function(e){var t=e.dataSource,a=e.rowkey,o=void 0===a?"rowkey":a,u=e.columns,h=e.hideTools,_=void 0===h||h,m=e.canEdit,p=void 0!==m&&m,v=e.canAdd,f=void 0!==v&&v,E=e.canDelete,b=void 0!==E&&E,x=e.onAdd,g=e.onEdit,C=e.onDelete,A=e.actionColumn,T=void 0!==A&&A,S=e.onAction,L=e.actionLabel,Z=void 0===L?"":L,j=e.onSelectedRow,w=e.canPrint,R=void 0!==w&&w,I=e.onPrint,D=e.addionalButtons,O=e.onSave,P=e.canSave,y=void 0!==P&&P,k=e.width,U=void 0===k?"100%":k,N=e.margin,Y=void 0===N?"":N,B=e.padding,M=void 0===B?"":B,Q=(0,c.$G)().t,z=(0,i.useState)(),F=(0,n.Z)(z,2),V=F[0],H=F[1],q=(0,i.useCallback)((function(e){return function(){j(e),H(e)}}),[j]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{style:{width:U,padding:M,margin:Y},children:[(0,s.jsxs)(r.Z,{width:"100%",padding:"0",margin:"5px 0",justifyContent:"center",hidden:_,children:[(0,s.jsx)(l,{icon:"fa-sharp fa-solid fa-plus",onClick:x,hidden:f}),(0,s.jsx)(l,{icon:"fa-sharp fa-solid fa-pen-clip",onClick:g,hidden:p,disabled:!V}),(0,s.jsx)(l,{icon:"fa-sharp fa-solid fa-trash",onClick:C,hidden:b,disabled:!V}),D&&D.map((function(e){return(0,s.jsx)(l,{icon:e.icon,onClick:e.onClick,hidden:e.hidden})})),(0,s.jsx)(l,{icon:"fa-solid fa-floppy-disk",onClick:O,disabled:y}),(0,s.jsx)(l,{icon:"fa-solid fa-print",onClick:I,disabled:R})]}),(0,s.jsx)("table",{className:"table m-0",children:(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"table-secondary",children:[u.map((function(e){return(0,s.jsx)("th",{scope:"col",style:{width:e.width},children:Q(e.title)})})),(0,s.jsx)("th",{hidden:!T,children:Q("actn")})]})})}),(0,s.jsx)("div",{className:"tbl-content",children:(0,s.jsx)("table",{className:"table ",children:(0,s.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){return(0,s.jsxs)("tr",{onClick:q(e),children:[u.map((function(t){return(0,s.jsx)("td",{className:"".concat(V===e?"table-success":"table-light"," "),style:{width:t.width},children:e[t.dataIndex]})})),(0,s.jsx)("td",{className:"".concat(V===e?"table-success":"table-light"," "),hidden:!T,children:(0,s.jsx)(d.Z,{label:Z,onClick:function(){S(e)}})})]},e[o])}))})})})]})})}},399:function(e,t){t.Z={QUERY_CUSTOMER_TABLE_DATA:"basicData/customers",POST_CUSTOMER_TABLE_DATA:"basicData/customers_dml",QUERY_SUPPLIER_TABLE_DATA:"basicData/suppliers",POST_SUPPLIER_TABLE_DATA:"basicData/suppliers_dml",POST_CUSTOMER_INVOICE_DETAILS:"invoices/customer_invoice_dml",POST_EMPLOYEE_ATTENDANCE:"employeesData/employee_attendance_dml",POST_EMPLOYEE_LEAVING:"employeesData/employee_leaving_dml",QUERY_EMPLOYEES_TABLE_DATA:"employeesData/employees",POST_EMPLOYEES_TABLE_DATA:"employeesData/employees_dml",QUERY_INVOICE_DETAIL_TABLE_DATA:"invoices/get_invoice_detail",QUERY_INVOICE_MASTER_TABLE_DATA:"invoices/get_invoice_master",QUERY_ITEMS_TABLE_DATA:"basicData/items",POST_ITEMS_TABLE_DATA:"basicData/items_dml",QUERY_PRINT_OPTIONS_TABLE_DAT:"basicData/print_options",POST_PRINT_OPTIONS_TABLE_DATA:"basicData/print_options_dml",USER_LOG_IN:"user_log_in",POST_SUPPLIER_INVOICE:"invoices/supplier_invoice_dml",QUERY_LABELS:"get_labels",QUERY_CHUNK_LABELS:"get_chunk_labels",QUERY_EMPLOYEE_NAME_LIST:"employeesData/pop_employee_name",QUERY_CUSTOMER_AND_SUPPLIER_LIST:"invoices/get_customer_supplier_list",QUERY_SUPPLIER_LIST:"basicData/supplier_pop_data",QUERY_CUSTOMERS_LIST:"basicData/customer_pop_data",QUERY_ITEMS_LIST:"basicData/items_pop_data",QUERY_EMPLOYEE_SHEET_SALARY:"employeesData/employee_sheet",QUERY_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/get_casher_receipt_voucher_invoices",POST_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/post_casher_receipt_voucher_invoices_dml",QUERY_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_expense/get_casher_payment_voucher_invoices",POST_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_expense/post_casher_payment_voucher_invoices_dml",QUERY_MAIN_CHART_DATA:"home/dash_board_get_data"}},3838:function(e,t,a){var n=a(4165),i=a(5861),s=a(9439),o=a(2791),l=a(399),d=a(1227),c=a(1295);t.Z=function(e){var t=e.link,a=void 0===t?"":t,r=e.fetchOnFirstRun,u=(e.refreshTimeout,e.params),h=e.noAuthorization,_=void 0!==h&&h,m=(0,c.p)(),p=(0,d.Z)().authorization,v="http://144.24.209.19:9090/api/v1/".concat(l.Z[a]),f=(0,o.useState)([]),E=(0,s.Z)(f,2),b=E[0],x=E[1],g=(0,o.useCallback)((0,i.Z)((0,n.Z)().mark((function e(){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p&&!_){e.next=8;break}return e.next=3,fetch("".concat(v,"?authorization=").concat(p,"&").concat(new URLSearchParams(u)));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,x(a);case 8:case"end":return e.stop()}}),e)}))),[p,_,u,v]);(0,o.useEffect)((function(){r&&g()}),[r,g,v,u]),(0,o.useEffect)((function(){b.response&&m({position:"top-right",title:"error",description:"".concat(JSON.stringify(b.response)),status:"error",duration:5e3,isClosable:!0})}),[b,m]);var C=(0,o.useCallback)((function(){g()}),[g]);return{data:b,runFetch:C,setData:x}}},8245:function(e,t,a){var n=a(4942),i=a(1413),s=a(9439),o=a(2791);t.Z=function(e){var t=e.initialValue,a=e.setSelectedRow,l=(0,o.useState)(),d=(0,s.Z)(l,2),c=d[0],r=d[1],u=(0,o.useState)({}),h=(0,s.Z)(u,2),_=h[0],m=h[1],p=(0,o.useCallback)((function(e){a&&a((0,i.Z)((0,i.Z)({},t),{},(0,n.Z)({},e.name,e.value))),m((0,i.Z)((0,i.Z)({},_),{},(0,n.Z)({},e.name,e.value))),r(c)}),[c,t,a,_]);(0,o.useEffect)((function(){a&&m(t)}),[t,a]),(0,o.useEffect)((function(){m(t)}),[]);var v=(0,o.useCallback)((function(){a(c)}),[c,a]);return{state:_,onChange:p,resetState:v}}},3785:function(e,t,a){var n=a(4165),i=a(5861),s=a(9439),o=a(2791),l=a(1227),d=a(399),c=a(1295);t.Z=function(e){var t=e.link,a=void 0===t?"":t,r=e.noAuthorization,u=void 0!==r&&r,h=(0,c.p)(),_="http://144.24.209.19:9090/api/v1/".concat(d.Z[a]),m=(0,o.useState)(),p=(0,s.Z)(m,2),v=p[0],f=p[1],E=(0,l.Z)().authorization,b=(0,o.useCallback)(function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var a,i,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!E&&!u){e.next=18;break}return t.authorization=E,a={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)},e.prev=3,e.next=6,fetch(_,a);case 6:return i=e.sent,e.next=9,i.json();case 9:return"success"===(s=e.sent).response?h({position:"top-right",title:"Success",description:"".concat(s.response),status:"success",duration:5e3,isClosable:!0}):h({position:"top-right",title:"Error",description:"".concat(s.response),status:"error",duration:9e3,isClosable:!0}),f(s),e.abrupt("return",s);case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}(),[E,u,h,_]);return{success:v,setRow:(0,o.useCallback)((function(e){b(e)}),[b])}}},7595:function(e,t,a){var n=a(2791),i=a(9230),s=a(176),o=a(4585),l=a(7886),d=a(184),c=function(e){var t=e.disabled,a=e.value,c=e.name,r=e.Label,u=void 0===r?"":r,h=e.onChange,_=e.width,m=void 0===_?"200px":_,p=e.type,v=void 0===p?"text":p,f=e.placeHolder,E=e.padding,b=e.margin,x=void 0===b?"10px":b,g=e.className,C=void 0===g?"":g,A=e.required,T=void 0!==A&&A,S=(0,i.$G)().t,L=(0,n.useCallback)((function(e){h({name:c,value:e.target.value})}),[c,h]);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(s.k,{direction:"column",w:m,padding:E,margin:x,children:[(0,d.jsx)(o.l,{children:S(u)}),(0,d.jsx)(l.I,{placeholder:f,size:"md",isDisabled:t,isRequired:T,onChange:L,width:"100%",className:C,value:a,type:v})]})})};t.Z=(0,n.memo)(c)},7210:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var n=a(3433),i=a(1413),s=a(9439),o=a(2791),l=a(5702),d=a(7595),c=a(3785),r=a(8245),u=[{title:"itmnm",width:"11.1%",dataIndex:"itemName"},{title:"wdth",width:"11.1%",dataIndex:"width"},{title:"hght",width:"11.1%",dataIndex:"height"},{title:"sz",width:"11.1%",dataIndex:"size"},{title:"qnty",width:"11.1%",dataIndex:"quantity"},{title:"prc",width:"11.1%",dataIndex:"price"},{title:"total",width:"11.1%",dataIndex:"total"},{title:"nts",width:"11.1%",dataIndex:"notes"}],h=a(4942),_=a(6888),m=a(8535),p=a(184),v=function(e){var t=e.activeItem,a=e.setActiveItem,n=e.itemChange,s=e.itemState,l=e.state,c=e.onChange,r=s.item_id,u=s.width,v=s.height,f=s.size,E=s.quantity,b=s.price,x=s.total,g=s.notes;(0,o.useEffect)((function(){a((0,i.Z)((0,i.Z)({},t),{},{size:+u*+v,total:+E*+b*+u*+v}))}),[v,u,E,b]);var C=(0,o.useCallback)((function(e){a((0,i.Z)((0,i.Z)({},t),{},(0,h.Z)({itemName:e.label},e.name,e.value)))}),[t,a]);return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(m.Z,{width:"100%",flexDirection:"column",margin:"0",padding:"0",children:[(0,p.jsxs)(m.Z,{margin:"0",padding:"0",children:[(0,p.jsx)(_.Z,{Api:"QUERY_SUPPLIER_LIST",onChange:c,value:l.supplier_id,Label:"splr",name:"supplier_id",fetchOnFirstRun:!0}),(0,p.jsx)(d.Z,{name:"date",value:l.date,Label:"dt",onChange:c,type:"date"})]}),(0,p.jsx)(m.Z,{margin:"0",padding:"0",children:(0,p.jsx)(_.Z,{Api:"QUERY_ITEMS_LIST",onChange:C,value:r,Label:"itmnm",name:"item_id",withLabel:!0,fetchOnFirstRun:!0})}),(0,p.jsxs)(m.Z,{margin:"0",padding:"0",children:[(0,p.jsx)(d.Z,{name:"width",value:u,Label:"wdth",onChange:n,width:"14%"}),(0,p.jsx)(d.Z,{name:"height",value:v,Label:"hght",onChange:n,width:"14%"}),(0,p.jsx)(d.Z,{name:"size",value:f,Label:"sz",onChange:n,disabled:!0,width:"14%"}),(0,p.jsx)(d.Z,{name:"quantity",value:E,Label:"qty",onChange:n,width:"14%"}),(0,p.jsx)(d.Z,{name:"price",value:b,Label:"prc",onChange:n,width:"14%"}),(0,p.jsx)(d.Z,{name:"total",value:x,Label:"total",onChange:n,disabled:!0,width:"14%"}),(0,p.jsx)(d.Z,{name:"notes",value:g,Label:"nts",onChange:n,width:"14%"})]})]})})},f=(0,o.memo)(v),E=function(){var e=(0,c.Z)({link:"POST_SUPPLIER_INVOICE"}).setRow,t=(0,o.useState)({supplier_id:0,date:"",items:[],query_status:"n",total:0,discount:0,total_after_discount:0,paid:0,credit:0}),a=(0,s.Z)(t,2),h=a[0],_=a[1],v=(0,o.useState)({item_id:0,width:0,height:0,size:0,quantity:0,price:0,total:0,notes:"",itemName:""}),E=(0,s.Z)(v,2),b=E[0],x=E[1],g=(0,r.Z)({initialValue:b,setSelectedRow:x}),C=g.state,A=g.onChange,T=(0,r.Z)({initialValue:h,setSelectedRow:_}),S=T.state,L=T.onChange,Z=(0,o.useCallback)((function(){_({supplier_id:0,date:"",items:[],query_status:"n",total:0,discount:0,total_after_discount:0,paid:0,credit:0})}),[]),j=(0,o.useCallback)((function(){_((0,i.Z)((0,i.Z)({},h),{},{items:[].concat((0,n.Z)(h.items),[b]),total:h.total+b.total})),x({item_id:0,width:0,height:0,size:0,quantity:0,price:0,total:0,notes:"",itemName:""})}),[b,h]),w=(0,o.useCallback)((function(){e(h),Z()}),[h,Z,e]);(0,o.useEffect)((function(){_((0,i.Z)((0,i.Z)({},h),{},{total_after_discount:h.total-h.discount,credit:h.total-h.discount-h.paid}))}),[h.total,h.discount,h.paid]);var R=[{icon:"fa-solid fa-broom",onClick:Z}];return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(m.Z,{flexDirection:"column",width:"100%",children:[(0,p.jsx)(f,{itemState:C,itemChange:A,activeItem:b,setActiveItem:x,onChange:L,state:S}),(0,p.jsx)(l.Z,{columns:u,dataSource:h.items,actionColumn:!0,actionLabel:"Delete",hideTools:!1,onAdd:j,onSave:w,onSelectedRow:x,canAdd:!0,canSave:!0,addionalButtons:R}),(0,p.jsxs)(m.Z,{width:"100%",justifyContent:"space-around",children:[(0,p.jsx)(d.Z,{name:"total",disabled:!0,value:S.total,Label:"total",width:"15%"}),(0,p.jsx)(d.Z,{name:"discount",value:S.discount,Label:"dscnt",onChange:L,width:"15%"}),(0,p.jsx)(d.Z,{name:"totalAfterDiscount",disabled:!0,value:S.total_after_discount,Label:"Tlaftrdsnt",width:"15%"}),(0,p.jsx)(d.Z,{name:"paid",value:S.paid,Label:"paid",onChange:L,width:"15%"}),(0,p.jsx)(d.Z,{name:"credit",disabled:!0,value:S.credit,Label:"Crdt",width:"15%"})]})]})})},b=(0,o.memo)(E)}}]);
//# sourceMappingURL=210.2010ed06.chunk.js.map