"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[684],{8864:function(e,n,t){var a=t(2791),i=t(9230),o=t(184),s=function(e){var n=e.width,t=void 0===n?"200px":n,a=e.Options,s=e.onChange,l=e.Label,c=e.value,r=void 0===c?0:c,d=e.name,u=e.withLabel,m=void 0!==u&&u,p=e.margin,h=void 0===p?"10px":p,_=e.padding,v=(0,i.$G)().t;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"mb-1",style:{width:t,padding:_,margin:h},children:[(0,o.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:v(l)}),(0,o.jsxs)("select",{className:"form-select","aria-label":"Default select example",onChange:function(e){a.map((function(n){n.value===+e.target.value&&s(m?{value:n.value,label:n.label,name:d}:{value:n.value,name:d})}))},children:[(0,o.jsx)("option",{selected:!0,children:"Select"}),a.map((function(e){return(0,o.jsxs)("option",{value:e.value,selected:r===e.value&&!0,children:[" ",v(e.label)]},e.value)}))]})]})})};n.Z=(0,a.memo)(s)},6888:function(e,n,t){var a=t(2791),i=t(8864),o=t(3838),s=t(184),l=function(e){var n=e.width,t=e.Api,a=e.onChange,l=e.Label,c=e.name,r=void 0===c?"":c,d=e.value,u=void 0===d?0:d,m=e.withLabel,p=void 0!==m&&m,h=e.padding,_=e.margin,v=e.params,f=e.fetchOnFirstRun,x=void 0!==f&&f,b=(0,o.Z)({link:t,fetchOnFirstRun:x,params:v}).data;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(i.Z,{Options:b,onChange:a,Label:l,value:u,name:r,width:n,withLabel:p,margin:_,padding:h})})};n.Z=(0,a.memo)(l)},8634:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(1413),i=t(9439),o=t(2791),s=t(5702),l=t(3838),c=t(3785),r=function(e){var n=e.api,t=void 0===n?"":n,a=(0,o.useState)({}),s=(0,i.Z)(a,2),l=s[0],r=s[1],d=(0,c.Z)({link:t}).setRow;return{setSelectedRow:(0,o.useCallback)((function(e){r(e)}),[]),onSaveAndInsertion:function(){void 0!==l.query_status&&d(l)},selectedRow:l}},d=t(184),u=function(e){var n=e.api,t=e.postApi,c=e.columns,u=e.hideTools,m=e.canAdd,p=e.canEdit,h=e.canDelete,_=e.rowKey,v=e.Modal,f=e.width,x=e.onSelectedRow,b=e.fetchOnFirstRun,E=void 0!==b&&b,g=e.params,A=(0,l.Z)({link:n,fetchOnFirstRun:E,params:g}),S=A.data,T=A.runFetch,w=r({api:t}),C=w.setSelectedRow,j=w.onSaveAndInsertion,R=w.selectedRow,y=(0,o.useState)({}),I=(0,i.Z)(y,2),L=I[0],Z=I[1],k=(0,o.useState)(!1),D=(0,i.Z)(k,2),O=D[0],P=D[1],N=(0,o.useCallback)((function(){C({query_status:"n"}),P(!0)}),[C]),U=(0,o.useCallback)((function(){C((0,a.Z)((0,a.Z)({},L),{},{query_status:"u"})),P(!0)}),[L,C]),Y=(0,o.useCallback)((function(){P(!1)}),[]),F=(0,o.useCallback)((function(){P(!1),j(),T()}),[j,T]);return(0,d.jsxs)(d.Fragment,{children:[v&&(0,d.jsx)(v,{visible:O,onOK:F,onClose:Y,selectedRow:R,setSelectedRow:C}),(0,d.jsx)(s.Z,{dataSource:S,columns:c,hideTools:u,canAdd:m,canEdit:p,canDelete:h,rowkey:_,onAdd:N,onEdit:U,onDelete:function(){C((0,a.Z)((0,a.Z)({},L),{},{query_status:"d"})),j()},onSelectedRow:function(e){Z(e),x&&x(e)},width:f})]})},m=(0,o.memo)(u)},5702:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(9439),i=t(2791),o=t(184),s=function(e){var n=e.icon,t=e.onClick,a=e.disabled,i=void 0===a||a,s=e.width,l=void 0===s?"30px":s,c=e.height,r=void 0===c?"30px":c,d=e.color,u=e.margin,m=void 0===u?"10px":u,p=e.padding;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("button",{style:{border:"none",width:l,height:r,backgroundColor:d,padding:p,margin:m,borderRadius:"20px"},hidden:!i,onClick:t,children:(0,o.jsx)("i",{className:n})})})},l=(0,i.memo)(s),c=t(898),r=t(9230),d=t(8535),u=function(e){var n=e.dataSource,t=e.rowkey,s=void 0===t?"rowkey":t,u=e.columns,m=e.hideTools,p=void 0===m||m,h=e.canEdit,_=void 0!==h&&h,v=e.canAdd,f=void 0!==v&&v,x=e.canDelete,b=void 0!==x&&x,E=e.onAdd,g=e.onEdit,A=e.onDelete,S=e.actionColumn,T=void 0!==S&&S,w=e.onAction,C=e.actionLabel,j=void 0===C?"":C,R=e.onSelectedRow,y=e.canPrint,I=void 0!==y&&y,L=e.onPrint,Z=e.addionalButtons,k=e.onSave,D=e.canSave,O=void 0!==D&&D,P=e.width,N=void 0===P?"100%":P,U=e.margin,Y=void 0===U?"":U,F=e.padding,B=void 0===F?"":F,M=(0,r.$G)().t,Q=(0,i.useState)(),V=(0,a.Z)(Q,2),z=V[0],q=V[1],G=(0,i.useCallback)((function(e){return function(){R(e),q(e)}}),[R]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{style:{width:N,padding:B,margin:Y},children:[(0,o.jsxs)(d.Z,{width:"100%",padding:"0",margin:"5px 0",justifyContent:"center",hidden:p,children:[(0,o.jsx)(l,{icon:"fa-sharp fa-solid fa-plus",onClick:E,disabled:f}),(0,o.jsx)(l,{icon:"fa-sharp fa-solid fa-pen-clip",onClick:g,disabled:_}),(0,o.jsx)(l,{icon:"fa-sharp fa-solid fa-trash",onClick:A,disabled:b}),Z&&Z.map((function(e){return(0,o.jsx)(l,{icon:e.icon,onClick:e.onClick,disabled:e.disabled})})),(0,o.jsx)(l,{icon:"fa-solid fa-floppy-disk",onClick:k,disabled:O}),(0,o.jsx)(l,{icon:"fa-solid fa-print",onClick:L,disabled:I})]}),(0,o.jsx)("table",{className:"table m-0",children:(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{className:"table-secondary",children:[u.map((function(e){return(0,o.jsx)("th",{scope:"col",style:{maxWidth:e.width,minWidth:e.width},children:M(e.title)})})),(0,o.jsx)("th",{hidden:!T,children:M("actn")})]})})}),(0,o.jsx)("div",{className:"tbl-content",children:(0,o.jsx)("table",{className:"table ",children:(0,o.jsx)("tbody",{children:null===n||void 0===n?void 0:n.map((function(e){return(0,o.jsxs)("tr",{onClick:G(e),children:[u.map((function(n){return(0,o.jsx)("td",{className:"".concat(z===e?"table-success":"table-light"," "),style:{maxWidth:n.width,minWidth:n.width},children:e[n.dataIndex]})})),(0,o.jsx)("td",{className:"".concat(z===e?"table-success":"table-light"," "),hidden:!T,children:(0,o.jsx)(c.Z,{label:j,onClick:function(){w(e)}})})]},e[s])}))})})})]})})}},399:function(e,n){n.Z={QUERY_CUSTOMER_TABLE_DATA:"basicData/customers",POST_CUSTOMER_TABLE_DATA:"basicData/customers_dml",QUERY_SUPPLIER_TABLE_DATA:"basicData/suppliers",POST_SUPPLIER_TABLE_DATA:"basicData/suppliers_dml",POST_CUSTOMER_INVOICE_DETAILS:"invoices/customer_invoice_dml",POST_EMPLOYEE_ATTENDANCE:"employeesData/employee_attendance_dml",POST_EMPLOYEE_LEAVING:"employeesData/employee_leaving_dml",QUERY_EMPLOYEES_TABLE_DATA:"employeesData/employees",POST_EMPLOYEES_TABLE_DATA:"employeesData/employees_dml",QUERY_INVOICE_DETAIL_TABLE_DATA:"invoices/get_invoice_detail",QUERY_INVOICE_MASTER_TABLE_DATA:"invoices/get_invoice_master",QUERY_ITEMS_TABLE_DATA:"basicData/items",POST_ITEMS_TABLE_DATA:"basicData/items_dml",QUERY_PRINT_OPTIONS_TABLE_DAT:"basicData/print_options",POST_PRINT_OPTIONS_TABLE_DATA:"basicData/print_options_dml",USER_LOG_IN:"user_log_in",POST_SUPPLIER_INVOICE:"invoices/supplier_invoice_dml",QUERY_LABELS:"get_labels",QUERY_CHUNK_LABELS:"get_chunk_labels",QUERY_EMPLOYEE_NAME_LIST:"employeesData/pop_employee_name",QUERY_CUSTOMER_AND_SUPPLIER_LIST:"invoices/get_customer_supplier_list",QUERY_SUPPLIER_LIST:"basicData/supplier_pop_data",QUERY_ITEMS_LIST:"basicData/items_pop_data",QUERY_EMPLOYEE_SHEET_SALARY:"employeesData/employee_sheet",QUERY_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/get_casher_receipt_voucher_invoices"}},3838:function(e,n,t){var a=t(4165),i=t(5861),o=t(9439),s=t(2791),l=t(399),c=t(1227),r=t(1295);n.Z=function(e){var n=e.link,t=void 0===n?"":n,d=e.fetchOnFirstRun,u=(e.refreshTimeout,e.params),m=e.noAuthorization,p=void 0!==m&&m,h=(0,r.p)(),_=(0,c.Z)().authorization,v="http://144.24.209.19:9090/api/v1/".concat(l.Z[t]),f=(0,s.useState)([]),x=(0,o.Z)(f,2),b=x[0],E=x[1],g=(0,s.useCallback)((0,i.Z)((0,a.Z)().mark((function e(){var n,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!_&&!p){e.next=8;break}return e.next=3,fetch("".concat(v,"?authorization=").concat(_,"&").concat(new URLSearchParams(u)));case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,E(t);case 8:case"end":return e.stop()}}),e)}))),[_,p,u,v]);(0,s.useEffect)((function(){d&&g()}),[d,g,v,u]),(0,s.useEffect)((function(){b.response&&h({position:"top-right",title:"error",description:"".concat(JSON.stringify(b.response)),status:"error",duration:5e3,isClosable:!0})}),[b,h]);var A=(0,s.useCallback)((function(){g()}),[g]);return{data:b,runFetch:A,setData:E}}},8245:function(e,n,t){var a=t(4942),i=t(1413),o=t(9439),s=t(2791);n.Z=function(e){var n=e.initialValue,t=e.setSelectedRow,l=(0,s.useState)(),c=(0,o.Z)(l,2),r=c[0],d=c[1],u=(0,s.useState)({}),m=(0,o.Z)(u,2),p=m[0],h=m[1],_=(0,s.useCallback)((function(e){t&&t((0,i.Z)((0,i.Z)({},n),{},(0,a.Z)({},e.name,e.value))),h((0,i.Z)((0,i.Z)({},p),{},(0,a.Z)({},e.name,e.value))),d(r)}),[r,n,t,p]);(0,s.useEffect)((function(){t&&h(n)}),[n,t]),(0,s.useEffect)((function(){h(n)}),[]);var v=(0,s.useCallback)((function(){t(r)}),[r,t]);return{state:p,onChange:_,resetState:v}}},3785:function(e,n,t){var a=t(4165),i=t(5861),o=t(9439),s=t(2791),l=t(1227),c=t(399),r=t(1295);n.Z=function(e){var n=e.link,t=void 0===n?"":n,d=e.noAuthorization,u=void 0!==d&&d,m=(0,r.p)(),p="http://144.24.209.19:9090/api/v1/".concat(c.Z[t]),h=(0,s.useState)(),_=(0,o.Z)(h,2),v=_[0],f=_[1],x=(0,l.Z)().authorization,b=(0,s.useCallback)(function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t,i,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!x&&!u){e.next=18;break}return n.authorization=x,t={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)},e.prev=3,e.next=6,fetch(p,t);case 6:return i=e.sent,e.next=9,i.json();case 9:return"success"===(o=e.sent).response?m({position:"top-right",title:"Success",description:"".concat(o.response),status:"success",duration:5e3,isClosable:!0}):m({position:"top-right",title:"Error",description:"".concat(o.response),status:"error",duration:9e3,isClosable:!0}),f(o),e.abrupt("return",o);case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(n){return e.apply(this,arguments)}}(),[x,u,m,p]);return{success:v,setRow:(0,s.useCallback)((function(e){b(e)}),[b])}}},7595:function(e,n,t){var a=t(2791),i=t(9230),o=t(176),s=t(4585),l=t(7886),c=t(184),r=function(e){var n=e.disabled,t=e.value,r=e.name,d=e.Label,u=void 0===d?"":d,m=e.onChange,p=e.width,h=void 0===p?"200px":p,_=e.type,v=void 0===_?"text":_,f=e.placeHolder,x=e.padding,b=e.margin,E=void 0===b?"10px":b,g=e.className,A=void 0===g?"":g,S=e.required,T=void 0!==S&&S,w=(0,i.$G)().t,C=(0,a.useCallback)((function(e){m({name:r,value:e.target.value})}),[r,m]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(o.k,{direction:"column",w:h,padding:x,margin:E,children:[(0,c.jsx)(s.l,{children:w(u)}),(0,c.jsx)(l.I,{placeholder:f,size:"md",isDisabled:n,isRequired:T,onChange:C,width:"100%",className:A,value:t,type:v})]})})};n.Z=(0,a.memo)(r)},7684:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var a=t(9439),i=t(2791),o=t(8634),s=[{title:"no",dataIndex:"invoice_id",width:"15%"},{title:"nm",dataIndex:"name",width:"20%"},{title:"dt",dataIndex:"date",width:"10%"},{title:"total",dataIndex:"total",width:"10%"}],l=[{title:"itmid",dataIndex:"item_id",width:"7%"},{title:"itmnm",dataIndex:"item_name",width:"15%"},{title:"wdth",dataIndex:"width",width:"5%"},{title:"hght",dataIndex:"height",width:"5%"},{title:"sz",dataIndex:"size",width:"5%"},{title:"qnty",dataIndex:"quantity",width:"5%"},{title:"prc",dataIndex:"price",width:"5%"},{title:"total",dataIndex:"total",width:"5%"}],c=[{label:"splr",value:"suppliers"},{label:"cstmr",value:"customers"}],r=t(9230),d=t(184),u=function(e){var n=e.name,t=e.options,a=e.width,o=e.onChange,s=e.value,l=e.Label,c=e.margin,u=void 0===c?"10px":c,m=e.padding,p=(0,r.$G)().t,h=(0,i.useCallback)((function(e){o({name:n,value:e})}),[n,o]);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"mb-1",style:{width:a,margin:u,padding:m},children:[(0,d.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:l}),(0,d.jsx)("div",{className:"radio flex-row form-control ",style:{display:"flex"},children:t.map((function(e){return(0,d.jsxs)("div",{className:"form-check",children:[(0,d.jsx)("input",{className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1",checked:e.checked||s===e.value,onClick:function(){h(e.value)}}),(0,d.jsx)("label",{className:"form-check-label",htmlFor:"flexRadioDefault1",children:p(e.label)})]})}))})]})})},m=(0,i.memo)(u),p=t(6888),h=t(7595),_=t(8535),v=function(e){var n=e.changeSearchParams,t=e.searchParams;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(_.Z,{bordered:!0,width:"100%",children:[(0,d.jsx)(m,{name:"invoice_type",options:c,value:t.invoice_type,onChange:n,Label:"Invoice Type"}),(0,d.jsx)(h.Z,{name:"invoice_number",Label:"No.",onChange:n,type:"number",value:t.invoice_number}),(0,d.jsx)(p.Z,{name:"person_id",Api:"QUERY_CUSTOMER_AND_SUPPLIER_LIST",Label:"nm",params:{invoice_type:t.invoice_type},value:t.name,fetchOnFirstRun:!0,onChange:n})]})})},f=(0,i.memo)(v),x=t(8245),b=function(){var e=(0,i.useState)({invoice_id:""}),n=(0,a.Z)(e,2),t=n[0],c=n[1],r=(0,x.Z)({initialValue:{invoice_type:"",invoice_number:"",person_id:"",date_from:"",date_to:""}}),u=r.state,m=r.onChange,p=u.invoice_type,h=u.invoice_number,v=u.person_id,b=(0,i.useCallback)((function(e){c(e)}),[]);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(_.Z,{width:"100%",margin:"0",padding:"0",flexDirection:"column",children:[(0,d.jsx)(f,{changeSearchParams:m,searchParams:u}),(0,d.jsxs)(_.Z,{width:"100%",margin:"0",padding:"0",justifyContent:"space-between",children:[(0,d.jsx)(_.Z,{width:"40%",children:(0,d.jsx)(o.Z,{columns:s,api:"QUERY_INVOICE_MASTER_TABLE_DATA",rowKey:"invoice_id",fetchOnFirstRun:!0,params:{invoice_type:p,invoice_number:h,person_id:v},onSelectedRow:b})}),(0,d.jsx)(_.Z,{width:"60%",children:(0,d.jsx)(o.Z,{columns:l,api:"QUERY_INVOICE_DETAIL_TABLE_DATA",rowKey:"row_key",fetchOnFirstRun:!0,params:{invoice_type:p,invoice_number:t.invoice_id}})})]})]})})},E=(0,i.memo)(b)}}]);
//# sourceMappingURL=684.6c42e55d.chunk.js.map