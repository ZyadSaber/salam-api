"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[133],{8864:function(e,a,n){var t=n(2791),i=n(9230),s=n(184),o=function(e){var a=e.width,n=void 0===a?"200px":a,t=e.Options,o=e.onChange,l=e.Label,r=e.value,c=void 0===r?0:r,d=e.name,u=e.withLabel,m=void 0!==u&&u,p=e.margin,_=void 0===p?"10px":p,h=e.padding,v=(0,i.$G)().t;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"mb-1",style:{width:n,padding:h,margin:_},children:[(0,s.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:v(l)}),(0,s.jsxs)("select",{className:"form-select","aria-label":"Default select example",onChange:function(e){t.map((function(a){a.value===+e.target.value&&o(m?{value:a.value,label:a.label,name:d}:{value:a.value,name:d})}))},children:[(0,s.jsx)("option",{selected:!0,children:"Select"}),t.map((function(e){return(0,s.jsxs)("option",{value:e.value,selected:c===e.value&&!0,children:[" ",v(e.label)]},e.value)}))]})]})})};a.Z=(0,t.memo)(o)},6888:function(e,a,n){var t=n(2791),i=n(8864),s=n(3838),o=n(184),l=function(e){var a=e.width,n=e.Api,t=e.onChange,l=e.Label,r=e.name,c=void 0===r?"":r,d=e.value,u=void 0===d?0:d,m=e.withLabel,p=void 0!==m&&m,_=e.padding,h=e.margin,v=e.params,E=e.fetchOnFirstRun,f=void 0!==E&&E,b=(0,s.Z)({link:n,fetchOnFirstRun:f,params:v}).data;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.Z,{Options:b,onChange:t,Label:l,value:u,name:c,width:a,withLabel:p,margin:h,padding:_})})};a.Z=(0,t.memo)(l)},399:function(e,a){a.Z={QUERY_CUSTOMER_TABLE_DATA:"basicData/customers",POST_CUSTOMER_TABLE_DATA:"basicData/customers_dml",QUERY_SUPPLIER_TABLE_DATA:"basicData/suppliers",POST_SUPPLIER_TABLE_DATA:"basicData/suppliers_dml",POST_CUSTOMER_INVOICE_DETAILS:"invoices/customer_invoice_dml",POST_EMPLOYEE_ATTENDANCE:"employeesData/employee_attendance_dml",POST_EMPLOYEE_LEAVING:"employeesData/employee_leaving_dml",QUERY_EMPLOYEES_TABLE_DATA:"employeesData/employees",POST_EMPLOYEES_TABLE_DATA:"employeesData/employees_dml",QUERY_INVOICE_DETAIL_TABLE_DATA:"invoices/get_invoice_detail",QUERY_INVOICE_MASTER_TABLE_DATA:"invoices/get_invoice_master",QUERY_ITEMS_TABLE_DATA:"basicData/items",POST_ITEMS_TABLE_DATA:"basicData/items_dml",QUERY_PRINT_OPTIONS_TABLE_DAT:"basicData/print_options",POST_PRINT_OPTIONS_TABLE_DATA:"basicData/print_options_dml",USER_LOG_IN:"user_log_in",POST_SUPPLIER_INVOICE:"invoices/supplier_invoice_dml",QUERY_LABELS:"get_labels",QUERY_CHUNK_LABELS:"get_chunk_labels",QUERY_EMPLOYEE_NAME_LIST:"employeesData/pop_employee_name",QUERY_CUSTOMER_AND_SUPPLIER_LIST:"invoices/get_customer_supplier_list",QUERY_SUPPLIER_LIST:"basicData/supplier_pop_data",QUERY_ITEMS_LIST:"basicData/items_pop_data",QUERY_EMPLOYEE_SHEET_SALARY:"employeesData/employee_sheet",QUERY_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/get_casher_receipt_voucher_invoices"}},3838:function(e,a,n){var t=n(4165),i=n(5861),s=n(9439),o=n(2791),l=n(399),r=n(1227),c=n(1295);a.Z=function(e){var a=e.link,n=void 0===a?"":a,d=e.fetchOnFirstRun,u=(e.refreshTimeout,e.params),m=e.noAuthorization,p=void 0!==m&&m,_=(0,c.p)(),h=(0,r.Z)().authorization,v="http://144.24.209.19:9090/api/v1/".concat(l.Z[n]),E=(0,o.useState)([]),f=(0,s.Z)(E,2),b=f[0],g=f[1],x=(0,o.useCallback)((0,i.Z)((0,t.Z)().mark((function e(){var a,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h&&!p){e.next=8;break}return e.next=3,fetch("".concat(v,"?authorization=").concat(h,"&").concat(new URLSearchParams(u)));case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,g(n);case 8:case"end":return e.stop()}}),e)}))),[h,p,u,v]);(0,o.useEffect)((function(){d&&x()}),[d,x,v,u]),(0,o.useEffect)((function(){b.response&&_({position:"top-right",title:"error",description:"".concat(JSON.stringify(b.response)),status:"error",duration:5e3,isClosable:!0})}),[b,_]);var T=(0,o.useCallback)((function(){x()}),[x]);return{data:b,runFetch:T,setData:g}}},8245:function(e,a,n){var t=n(4942),i=n(1413),s=n(9439),o=n(2791);a.Z=function(e){var a=e.initialValue,n=e.setSelectedRow,l=(0,o.useState)(),r=(0,s.Z)(l,2),c=r[0],d=r[1],u=(0,o.useState)({}),m=(0,s.Z)(u,2),p=m[0],_=m[1],h=(0,o.useCallback)((function(e){n&&n((0,i.Z)((0,i.Z)({},a),{},(0,t.Z)({},e.name,e.value))),_((0,i.Z)((0,i.Z)({},p),{},(0,t.Z)({},e.name,e.value))),d(c)}),[c,a,n,p]);(0,o.useEffect)((function(){n&&_(a)}),[a,n]),(0,o.useEffect)((function(){_(a)}),[]);var v=(0,o.useCallback)((function(){n(c)}),[c,n]);return{state:p,onChange:h,resetState:v}}},3785:function(e,a,n){var t=n(4165),i=n(5861),s=n(9439),o=n(2791),l=n(1227),r=n(399),c=n(1295);a.Z=function(e){var a=e.link,n=void 0===a?"":a,d=e.noAuthorization,u=void 0!==d&&d,m=(0,c.p)(),p="http://144.24.209.19:9090/api/v1/".concat(r.Z[n]),_=(0,o.useState)(),h=(0,s.Z)(_,2),v=h[0],E=h[1],f=(0,l.Z)().authorization,b=(0,o.useCallback)(function(){var e=(0,i.Z)((0,t.Z)().mark((function e(a){var n,i,s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f&&!u){e.next=18;break}return a.authorization=f,n={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)},e.prev=3,e.next=6,fetch(p,n);case 6:return i=e.sent,e.next=9,i.json();case 9:return"success"===(s=e.sent).response?m({position:"top-right",title:"Success",description:"".concat(s.response),status:"success",duration:5e3,isClosable:!0}):m({position:"top-right",title:"Error",description:"".concat(s.response),status:"error",duration:9e3,isClosable:!0}),E(s),e.abrupt("return",s);case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(a){return e.apply(this,arguments)}}(),[f,u,m,p]);return{success:v,setRow:(0,o.useCallback)((function(e){b(e)}),[b])}}},1875:function(e,a,n){var t=n(2791),i=n(9230),s=n(184),o=function(e){var a=e.name,n=e.Label,o=void 0===n?"name":n,l=e.placeHolder,r=e.width,c=void 0===r?"30%":r,d=e.height,u=void 0===d?"100px":d,m=e.padding,p=e.margin,_=void 0===p?"10px":p,h=e.onChange,v=e.value,E=e.disabled,f=(0,i.$G)().t,b=(0,t.useCallback)((function(e){h({name:a,value:e.target.value})}),[a,h]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"mb-1 d-inline-block",style:{height:u,width:c,padding:m,margin:_},children:[(0,s.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:f(o)}),(0,s.jsx)("textarea",{className:"form-control",placeholder:f(l),id:"floatingTextarea2Disabled",value:v,disabled:E,onChange:b})]})})};a.Z=(0,t.memo)(o)},7595:function(e,a,n){var t=n(2791),i=n(9230),s=n(176),o=n(4585),l=n(7886),r=n(184),c=function(e){var a=e.disabled,n=e.value,c=e.name,d=e.Label,u=void 0===d?"":d,m=e.onChange,p=e.width,_=void 0===p?"200px":p,h=e.type,v=void 0===h?"text":h,E=e.placeHolder,f=e.padding,b=e.margin,g=void 0===b?"10px":b,x=e.className,T=void 0===x?"":x,A=e.required,C=void 0!==A&&A,S=(0,i.$G)().t,L=(0,t.useCallback)((function(e){m({name:c,value:e.target.value})}),[c,m]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(s.k,{direction:"column",w:_,padding:f,margin:g,children:[(0,r.jsx)(o.l,{children:S(u)}),(0,r.jsx)(l.I,{placeholder:E,size:"md",isDisabled:a,isRequired:C,onChange:L,width:"100%",className:T,value:n,type:v})]})})};a.Z=(0,t.memo)(c)},2080:function(e,a,n){var t=n(2791),i=n(9230),s=n(1820),o=n(3380),l=n(1078),r=n(7693),c=n(1461),d=n(7521),u=n(176),m=n(4653),p=n(4224),_=n(184),h=function(e){var a=e.children,n=e.visible,t=void 0!==n&&n,h=e.label,v=e.onClose,E=e.onOK,f=e.submitTitle,b=void 0===f?"smbt":f,g=e.width,x=void 0===g?"3xl":g,T=e.hideSaveButton,A=void 0!==T&&T,C=e.hideCloseButton,S=void 0!==C&&C,L=(0,i.$G)().t;return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(s.u_,{isOpen:t,onClose:v,size:x,children:[(0,_.jsx)(o.Z,{}),(0,_.jsxs)(l.h,{children:[(0,_.jsx)(r.x,{children:L(h)}),(0,_.jsx)(c.o,{}),(0,_.jsx)(d.f,{children:(0,_.jsx)(u.k,{w:"100%",padding:"5px",wrap:"wrap",children:a})}),(0,_.jsx)(m.m,{children:(0,_.jsxs)(u.k,{w:"25%",justifyContent:"space-around",children:[(0,_.jsx)(p.z,{colorScheme:"red",mr:3,onClick:v,hidden:S,children:L("cls")}),(0,_.jsx)(p.z,{colorScheme:"blue",onClick:E,hidden:A,children:L(b)})]})})]})]})})};a.Z=(0,t.memo)(h)},1133:function(e,a,n){n.r(a),n.d(a,{default:function(){return v}});var t=n(2791),i=n(7595),s=n(6888),o=n(1875),l=n(8245),r=n(3785),c=n(9439),d=n(9230),u=n(184),m=function(e){var a=e.label,n=void 0===a?"":a,i=e.value,s=e.onChange,o=e.name,l=e.width,r=e.disabled,m=e.padding,p=e.margin,_=void 0===p?"10px":p,h=(0,d.$G)().t,v=(0,t.useState)(!1),E=(0,c.Z)(v,2),f=E[0],b=E[1],g=(0,t.useCallback)((function(e){!0===e.target.checked?s({name:o,value:"Y"}):!1===e.target.checked&&s({name:o,value:"N"})}),[o,s]);return(0,t.useEffect)((function(){"Y"===i?b(!0):"N"===i&&b(!1)}),[i]),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"form-check",style:{width:l,padding:m,margin:_},children:[(0,u.jsx)("input",{className:"form-check-input",type:"checkbox",checked:f,id:"flexCheckIndeterminate",onChange:g,disabled:r}),(0,u.jsxs)("label",{className:"form-check-label",htmlFor:"flexCheckIndeterminate",children:[console.log(n),h(n)]})]})})},p=(0,t.memo)(m),_=n(2080),h=function(e){var a=e.visible,n=e.handleCloseModal,t=(0,l.Z)({initialValue:{date:"",employee_id:"",absent:"N",query_status:"n",attendance_time:""}}),c=t.onChange,d=t.state,m=d.date,h=d.employee_id,v=d.real_time,E=d.absent,f=d.reason,b=(0,r.Z)({link:"POST_EMPLOYEE_ATTENDANCE"}).setRow;return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(_.Z,{label:"emplyatndnc",visible:a,onClose:n,onOK:function(){b(d),n()},children:[(0,u.jsx)(i.Z,{Label:"dt",name:"date",value:m,onChange:c,type:"date",width:"30%"}),(0,u.jsx)(s.Z,{name:"employee_id",onChange:c,Api:"QUERY_EMPLOYEE_NAME_LIST",value:h,Label:"emply",width:"30%",fetchOnFirstRun:a}),(0,u.jsx)(i.Z,{type:"time",name:"attendance_time",value:v,onChange:c,Label:"atndnctm",width:"30%"}),(0,u.jsx)(o.Z,{name:"reason",value:f,onChange:c,Label:"rsn",width:"70%"}),(0,u.jsx)(p,{name:"absent",label:"absnt",value:E,onChange:c})]})})},v=(0,t.memo)(h)}}]);
//# sourceMappingURL=133.a53b4aec.chunk.js.map