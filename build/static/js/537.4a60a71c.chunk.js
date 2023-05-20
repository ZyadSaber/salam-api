"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[537],{8864:function(e,a,n){var t=n(2791),i=n(9230),s=n(184),o=function(e){var a=e.width,n=void 0===a?"200px":a,t=e.Options,o=e.onChange,l=e.Label,r=e.value,c=void 0===r?0:r,_=e.name,u=e.withLabel,d=void 0!==u&&u,p=e.margin,m=void 0===p?"10px":p,E=e.padding,h=(0,i.$G)().t;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"mb-1",style:{width:n,padding:E,margin:m},children:[(0,s.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:h(l)}),(0,s.jsxs)("select",{className:"form-select","aria-label":"Default select example",onChange:function(e){t.map((function(a){a.value===+e.target.value&&o(d?{value:a.value,label:a.label,name:_}:{value:a.value,name:_})}))},children:[(0,s.jsx)("option",{selected:!0,children:"Select"}),t.map((function(e){return(0,s.jsxs)("option",{value:e.value,selected:c===e.value&&!0,children:[" ",h(e.label)]},e.value)}))]})]})})};a.Z=(0,t.memo)(o)},6888:function(e,a,n){var t=n(2791),i=n(8864),s=n(3838),o=n(184),l=function(e){var a=e.width,n=e.Api,t=e.onChange,l=e.Label,r=e.name,c=void 0===r?"":r,_=e.value,u=void 0===_?0:_,d=e.withLabel,p=void 0!==d&&d,m=e.padding,E=e.margin,h=e.params,v=e.fetchOnFirstRun,T=void 0!==v&&v,A=(0,s.Z)({link:n,fetchOnFirstRun:T,params:h}).data;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.Z,{Options:A,onChange:t,Label:l,value:u,name:c,width:a,withLabel:p,margin:E,padding:m})})};a.Z=(0,t.memo)(l)},399:function(e,a){a.Z={QUERY_CUSTOMER_TABLE_DATA:"basicData/customers",POST_CUSTOMER_TABLE_DATA:"basicData/customers_dml",QUERY_SUPPLIER_TABLE_DATA:"basicData/suppliers",POST_SUPPLIER_TABLE_DATA:"basicData/suppliers_dml",POST_CUSTOMER_INVOICE_DETAILS:"invoices/customer_invoice_dml",POST_EMPLOYEE_ATTENDANCE:"employeesData/employee_attendance_dml",POST_EMPLOYEE_LEAVING:"employeesData/employee_leaving_dml",QUERY_EMPLOYEES_TABLE_DATA:"employeesData/employees",POST_EMPLOYEES_TABLE_DATA:"employeesData/employees_dml",QUERY_INVOICE_DETAIL_TABLE_DATA:"invoices/get_invoice_detail",QUERY_INVOICE_MASTER_TABLE_DATA:"invoices/get_invoice_master",QUERY_ITEMS_TABLE_DATA:"basicData/items",POST_ITEMS_TABLE_DATA:"basicData/items_dml",QUERY_PRINT_OPTIONS_TABLE_DAT:"basicData/print_options",POST_PRINT_OPTIONS_TABLE_DATA:"basicData/print_options_dml",USER_LOG_IN:"user_log_in",POST_SUPPLIER_INVOICE:"invoices/supplier_invoice_dml",QUERY_LABELS:"get_labels",QUERY_CHUNK_LABELS:"get_chunk_labels",QUERY_EMPLOYEE_NAME_LIST:"employeesData/pop_employee_name",QUERY_CUSTOMER_AND_SUPPLIER_LIST:"invoices/get_customer_supplier_list",QUERY_SUPPLIER_LIST:"basicData/supplier_pop_data",QUERY_CUSTOMERS_LIST:"basicData/customer_pop_data",QUERY_ITEMS_LIST:"basicData/items_pop_data",QUERY_PRINT_OPTIONS_LIST:"basicData/print_options_pop_data",QUERY_EMPLOYEE_SHEET_SALARY:"employeesData/employee_sheet",QUERY_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/get_casher_receipt_voucher_invoices",POST_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/post_casher_receipt_voucher_invoices_dml",QUERY_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_expense/get_casher_payment_voucher_invoices",POST_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_expense/post_casher_payment_voucher_invoices_dml",QUERY_MAIN_CHART_DATA:"home/dash_board_get_data",QUERY_EXPENSES_TYPES_TABLE_DATA:"basicData/expenses_types_data",POST_EXPENSES_TYPES_TABLE_DATA:"basicData/expenses_types_dml"}},3838:function(e,a,n){var t=n(4165),i=n(5861),s=n(9439),o=n(2791),l=n(399),r=n(1227),c=n(1295);a.Z=function(e){var a=e.link,n=void 0===a?"":a,_=e.fetchOnFirstRun,u=(e.refreshTimeout,e.params),d=e.noAuthorization,p=void 0!==d&&d,m=(0,c.p)(),E=(0,r.Z)().authorization,h="http://144.24.209.19:9090/api/v1/".concat(l.Z[n]),v=(0,o.useState)([]),T=(0,s.Z)(v,2),A=T[0],S=T[1],f=(0,o.useCallback)((0,i.Z)((0,t.Z)().mark((function e(){var a,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!E&&!p){e.next=8;break}return e.next=3,fetch("".concat(h,"?authorization=").concat(E,"&").concat(new URLSearchParams(u)));case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,S(n);case 8:case"end":return e.stop()}}),e)}))),[E,p,u,h]);(0,o.useEffect)((function(){_&&f()}),[_,f,h,u]),(0,o.useEffect)((function(){A.response&&m({position:"top-right",title:"error",description:"".concat(JSON.stringify(A.response)),status:"error",duration:5e3,isClosable:!0})}),[A,m]);var b=(0,o.useCallback)((function(){f()}),[f]);return{data:A,runFetch:b,setData:S}}},8245:function(e,a,n){var t=n(4942),i=n(1413),s=n(9439),o=n(2791);a.Z=function(e){var a=e.initialValue,n=e.setSelectedRow,l=(0,o.useState)(),r=(0,s.Z)(l,2),c=r[0],_=r[1],u=(0,o.useState)({}),d=(0,s.Z)(u,2),p=d[0],m=d[1],E=(0,o.useCallback)((function(e){n&&n((0,i.Z)((0,i.Z)({},a),{},(0,t.Z)({},e.name,e.value))),m((0,i.Z)((0,i.Z)({},p),{},(0,t.Z)({},e.name,e.value))),_(c)}),[c,a,n,p]);(0,o.useEffect)((function(){n&&m(a)}),[a,n]),(0,o.useEffect)((function(){m(a)}),[]);var h=(0,o.useCallback)((function(){n(c)}),[c,n]);return{state:p,onChange:E,resetState:h}}},3785:function(e,a,n){var t=n(4165),i=n(5861),s=n(9439),o=n(2791),l=n(1227),r=n(399),c=n(1295);a.Z=function(e){var a=e.link,n=void 0===a?"":a,_=e.noAuthorization,u=void 0!==_&&_,d=e.additionalFunctionToRun,p=e.runOnSuccess,m=e.runOnFail,E=(0,c.p)(),h="http://144.24.209.19:9090/api/v1/".concat(r.Z[n]),v=(0,o.useState)(),T=(0,s.Z)(v,2),A=T[0],S=T[1],f=(0,l.Z)().authorization,b=(0,o.useCallback)(function(){var e=(0,i.Z)((0,t.Z)().mark((function e(a){var n,i,s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f&&!u){e.next=18;break}return a.authorization=f,n={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)},e.prev=3,e.next=6,fetch(h,n);case 6:return i=e.sent,e.next=9,i.json();case 9:return"success"===(s=e.sent).response?(E({position:"top-right",title:"Success",description:"".concat(s.response),status:"success",duration:5e3,isClosable:!0}),p&&p()):(E({position:"top-right",title:"Error",description:"".concat(s.response),status:"error",duration:9e3,isClosable:!0}),m&&m()),S(s),d&&d(),e.abrupt("return",s);case 16:e.prev=16,e.t0=e.catch(3);case 18:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(a){return e.apply(this,arguments)}}(),[d,f,u,m,p,E,h]);return{success:A,setRow:(0,o.useCallback)((function(e){b(e)}),[b])}}},1875:function(e,a,n){var t=n(2791),i=n(9230),s=n(184),o=function(e){var a=e.name,n=e.Label,o=void 0===n?"name":n,l=e.placeHolder,r=e.width,c=void 0===r?"30%":r,_=e.height,u=void 0===_?"100px":_,d=e.padding,p=e.margin,m=void 0===p?"10px":p,E=e.onChange,h=e.value,v=e.disabled,T=(0,i.$G)().t,A=(0,t.useCallback)((function(e){E({name:a,value:e.target.value})}),[a,E]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"mb-1 d-inline-block",style:{height:u,width:c,padding:d,margin:m},children:[(0,s.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:T(o)}),(0,s.jsx)("textarea",{className:"form-control",placeholder:T(l),id:"floatingTextarea2Disabled",value:h,disabled:v,onChange:A})]})})};a.Z=(0,t.memo)(o)},7595:function(e,a,n){var t=n(2791),i=n(9230),s=n(176),o=n(4585),l=n(7886),r=n(184),c=function(e){var a=e.disabled,n=e.value,c=e.name,_=e.Label,u=void 0===_?"":_,d=e.onChange,p=e.width,m=void 0===p?"200px":p,E=e.type,h=void 0===E?"text":E,v=e.placeHolder,T=e.padding,A=e.margin,S=void 0===A?"10px":A,f=e.className,b=void 0===f?"":f,x=e.required,g=void 0!==x&&x,L=(0,i.$G)().t,C=(0,t.useCallback)((function(e){d({name:c,value:e.target.value})}),[c,d]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(s.k,{direction:"column",w:m,padding:T,margin:S,children:[(0,r.jsx)(o.l,{children:L(u)}),(0,r.jsx)(l.I,{placeholder:v,size:"md",isDisabled:a,isRequired:g,onChange:C,width:"100%",className:b,value:n,type:h})]})})};a.Z=(0,t.memo)(c)},2080:function(e,a,n){var t=n(2791),i=n(9230),s=n(1820),o=n(3380),l=n(1078),r=n(7693),c=n(1461),_=n(7521),u=n(176),d=n(4653),p=n(4224),m=n(184),E=function(e){var a=e.children,n=e.visible,t=void 0!==n&&n,E=e.label,h=e.onClose,v=e.onOK,T=e.submitTitle,A=void 0===T?"smbt":T,S=e.width,f=void 0===S?"3xl":S,b=e.hideSaveButton,x=void 0!==b&&b,g=e.hideCloseButton,L=void 0!==g&&g,C=(0,i.$G)().t;return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(s.u_,{isOpen:t,onClose:h,size:f,children:[(0,m.jsx)(o.Z,{}),(0,m.jsxs)(l.h,{children:[(0,m.jsx)(r.x,{children:C(E)}),(0,m.jsx)(c.o,{}),(0,m.jsx)(_.f,{children:(0,m.jsx)(u.k,{w:"100%",padding:"5px",wrap:"wrap",children:a})}),(0,m.jsx)(d.m,{children:(0,m.jsxs)(u.k,{w:"25%",justifyContent:"space-around",children:[(0,m.jsx)(p.z,{colorScheme:"red",mr:3,onClick:h,hidden:L,children:C("cls")}),(0,m.jsx)(p.z,{colorScheme:"blue",onClick:v,hidden:x,children:C(A)})]})})]})]})})};a.Z=(0,t.memo)(E)},5537:function(e,a,n){n.r(a);var t=n(2791),i=n(7595),s=n(6888),o=n(1875),l=n(8245),r=n(3785),c=n(2080),_=n(184),u=function(e){var a=e.visible,n=e.handleCloseModal,t=(0,l.Z)({initialValue:{date:"",employee_id:"",employee_time:"",notes:"",query_status:"n"}}),u=t.onChange,d=t.state,p=d.date,m=d.employee_id,E=d.leaving_time,h=d.notes,v=(0,r.Z)({link:"POST_EMPLOYEE_LEAVING"}).setRow;return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(c.Z,{label:"emplylvng",visible:a,onClose:n,onOK:function(){v(d),n()},children:[(0,_.jsx)(i.Z,{Label:"dt",name:"date",value:p,onChange:u,type:"date",width:"30%"}),(0,_.jsx)(s.Z,{name:"employee_id",onChange:u,Api:"QUERY_EMPLOYEE_NAME_LIST",value:m,Label:"emply",width:"30%",fetchOnFirstRun:a}),(0,_.jsx)(i.Z,{type:"time",name:"leaving_time",value:E,onChange:u,Label:"lvngtm",width:"30%"}),(0,_.jsx)(o.Z,{name:"notes",value:h,onChange:u,Label:"nts",width:"100%"})]})})};a.default=(0,t.memo)(u)}}]);
//# sourceMappingURL=537.4a60a71c.chunk.js.map