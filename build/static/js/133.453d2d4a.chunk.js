"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[133],{8864:function(e,a,n){var t=n(2791),i=n(9230),s=n(184),o=function(e){var a=e.width,n=void 0===a?"200px":a,t=e.Options,o=e.onChange,l=e.Label,r=e.value,c=void 0===r?0:r,d=e.name,u=e.withLabel,_=void 0!==u&&u,m=e.margin,p=void 0===m?"10px":m,h=e.padding,E=(0,i.$G)().t;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"mb-1",style:{width:n,padding:h,margin:p},children:[(0,s.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:E(l)}),(0,s.jsxs)("select",{className:"form-select","aria-label":"Default select example",onChange:function(e){t.map((function(a){a.value===+e.target.value&&o(_?{value:a.value,label:a.label,name:d}:{value:a.value,name:d})}))},children:[(0,s.jsx)("option",{selected:!0,children:"Select"}),t.map((function(e){return(0,s.jsxs)("option",{value:e.value,selected:c===e.value&&!0,children:[" ",E(e.label)]},e.value)}))]})]})})};a.Z=(0,t.memo)(o)},6888:function(e,a,n){var t=n(2791),i=n(8864),s=n(3838),o=n(184),l=function(e){var a=e.width,n=e.Api,t=e.onChange,l=e.Label,r=e.name,c=void 0===r?"":r,d=e.value,u=void 0===d?0:d,_=e.withLabel,m=void 0!==_&&_,p=e.padding,h=e.margin,E=e.params,v=e.fetchOnFirstRun,T=void 0!==v&&v,A=(0,s.Z)({link:n,fetchOnFirstRun:T,params:E}).data;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.Z,{Options:A,onChange:t,Label:l,value:u,name:c,width:a,withLabel:m,margin:h,padding:p})})};a.Z=(0,t.memo)(l)},399:function(e,a){a.Z={QUERY_CUSTOMER_TABLE_DATA:"basicData/customers",POST_CUSTOMER_TABLE_DATA:"basicData/customers_dml",QUERY_SUPPLIER_TABLE_DATA:"basicData/suppliers",POST_SUPPLIER_TABLE_DATA:"basicData/suppliers_dml",POST_CUSTOMER_INVOICE_DETAILS:"invoices/customer_invoice_dml",POST_EMPLOYEE_ATTENDANCE:"employeesData/employee_attendance_dml",POST_EMPLOYEE_LEAVING:"employeesData/employee_leaving_dml",QUERY_EMPLOYEES_TABLE_DATA:"employeesData/employees",POST_EMPLOYEES_TABLE_DATA:"employeesData/employees_dml",QUERY_INVOICE_DETAIL_TABLE_DATA:"invoices/get_invoice_detail",QUERY_INVOICE_MASTER_TABLE_DATA:"invoices/get_invoice_master",QUERY_ITEMS_TABLE_DATA:"basicData/items",POST_ITEMS_TABLE_DATA:"basicData/items_dml",QUERY_PRINT_OPTIONS_TABLE_DAT:"basicData/print_options",POST_PRINT_OPTIONS_TABLE_DATA:"basicData/print_options_dml",USER_LOG_IN:"user_log_in",POST_SUPPLIER_INVOICE:"invoices/supplier_invoice_dml",QUERY_LABELS:"get_labels",QUERY_CHUNK_LABELS:"get_chunk_labels",QUERY_EMPLOYEE_NAME_LIST:"employeesData/pop_employee_name",QUERY_CUSTOMER_AND_SUPPLIER_LIST:"invoices/get_customer_supplier_list",QUERY_SUPPLIER_LIST:"basicData/supplier_pop_data",QUERY_CUSTOMERS_LIST:"basicData/customer_pop_data",QUERY_ITEMS_LIST:"basicData/items_pop_data",QUERY_PRINT_OPTIONS_LIST:"basicData/print_options_pop_data",QUERY_EMPLOYEE_SHEET_SALARY:"employeesData/employee_sheet",QUERY_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/get_casher_receipt_voucher_invoices",POST_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/post_casher_receipt_voucher_invoices_dml",QUERY_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_expense/get_casher_payment_voucher_invoices",POST_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_expense/post_casher_payment_voucher_invoices_dml",QUERY_MAIN_CHART_DATA:"home/dash_board_get_data",QUERY_EXPENSES_TYPES_TABLE_DATA:"basicData/expenses_types_data",POST_EXPENSES_TYPES_TABLE_DATA:"basicData/expenses_types_dml"}},3838:function(e,a,n){var t=n(4165),i=n(5861),s=n(9439),o=n(2791),l=n(399),r=n(1227),c=n(1295);a.Z=function(e){var a=e.link,n=void 0===a?"":a,d=e.fetchOnFirstRun,u=(e.refreshTimeout,e.params),_=e.noAuthorization,m=void 0!==_&&_,p=(0,c.p)(),h=(0,r.Z)().authorization,E="http://144.24.209.19:9090/api/v1/".concat(l.Z[n]),v=(0,o.useState)([]),T=(0,s.Z)(v,2),A=T[0],b=T[1],f=(0,o.useCallback)((0,i.Z)((0,t.Z)().mark((function e(){var a,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h&&!m){e.next=8;break}return e.next=3,fetch("".concat(E,"?authorization=").concat(h,"&").concat(new URLSearchParams(u)));case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,b(n);case 8:case"end":return e.stop()}}),e)}))),[h,m,u,E]);(0,o.useEffect)((function(){d&&f()}),[d,f,E,u]),(0,o.useEffect)((function(){A.response&&p({position:"top-right",title:"error",description:"".concat(JSON.stringify(A.response)),status:"error",duration:5e3,isClosable:!0})}),[A,p]);var S=(0,o.useCallback)((function(){f()}),[f]);return{data:A,runFetch:S,setData:b}}},8245:function(e,a,n){var t=n(4942),i=n(1413),s=n(9439),o=n(2791);a.Z=function(e){var a=e.initialValue,n=e.setSelectedRow,l=(0,o.useState)(),r=(0,s.Z)(l,2),c=r[0],d=r[1],u=(0,o.useState)({}),_=(0,s.Z)(u,2),m=_[0],p=_[1],h=(0,o.useCallback)((function(e){n&&n((0,i.Z)((0,i.Z)({},a),{},(0,t.Z)({},e.name,e.value))),p((0,i.Z)((0,i.Z)({},m),{},(0,t.Z)({},e.name,e.value))),d(c)}),[c,a,n,m]);(0,o.useEffect)((function(){n&&p(a)}),[a,n]),(0,o.useEffect)((function(){p(a)}),[]);var E=(0,o.useCallback)((function(){n(c)}),[c,n]);return{state:m,onChange:h,resetState:E}}},3785:function(e,a,n){var t=n(4165),i=n(5861),s=n(9439),o=n(2791),l=n(1227),r=n(399),c=n(1295);a.Z=function(e){var a=e.link,n=void 0===a?"":a,d=e.noAuthorization,u=void 0!==d&&d,_=e.additionalFunctionToRun,m=e.runOnSuccess,p=e.runOnFail,h=(0,c.p)(),E="http://144.24.209.19:9090/api/v1/".concat(r.Z[n]),v=(0,o.useState)(),T=(0,s.Z)(v,2),A=T[0],b=T[1],f=(0,l.Z)().authorization,S=(0,o.useCallback)(function(){var e=(0,i.Z)((0,t.Z)().mark((function e(a){var n,i,s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f&&!u){e.next=18;break}return a.authorization=f,n={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)},e.prev=3,e.next=6,fetch(E,n);case 6:return i=e.sent,e.next=9,i.json();case 9:return"success"===(s=e.sent).response?(h({position:"top-right",title:"Success",description:"".concat(s.response),status:"success",duration:5e3,isClosable:!0}),m&&m()):(h({position:"top-right",title:"Error",description:"".concat(s.response),status:"error",duration:9e3,isClosable:!0}),p&&p()),b(s),_&&_(),e.abrupt("return",s);case 16:e.prev=16,e.t0=e.catch(3);case 18:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(a){return e.apply(this,arguments)}}(),[_,f,u,p,m,h,E]);return{success:A,setRow:(0,o.useCallback)((function(e){S(e)}),[S])}}},1875:function(e,a,n){var t=n(2791),i=n(9230),s=n(184),o=function(e){var a=e.name,n=e.Label,o=void 0===n?"name":n,l=e.placeHolder,r=e.width,c=void 0===r?"30%":r,d=e.height,u=void 0===d?"100px":d,_=e.padding,m=e.margin,p=void 0===m?"10px":m,h=e.onChange,E=e.value,v=e.disabled,T=(0,i.$G)().t,A=(0,t.useCallback)((function(e){h({name:a,value:e.target.value})}),[a,h]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"mb-1 d-inline-block",style:{height:u,width:c,padding:_,margin:p},children:[(0,s.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:T(o)}),(0,s.jsx)("textarea",{className:"form-control",placeholder:T(l),id:"floatingTextarea2Disabled",value:E,disabled:v,onChange:A})]})})};a.Z=(0,t.memo)(o)},7595:function(e,a,n){var t=n(2791),i=n(9230),s=n(176),o=n(4585),l=n(7886),r=n(184),c=function(e){var a=e.disabled,n=e.value,c=e.name,d=e.Label,u=void 0===d?"":d,_=e.onChange,m=e.width,p=void 0===m?"200px":m,h=e.type,E=void 0===h?"text":h,v=e.placeHolder,T=e.padding,A=e.margin,b=void 0===A?"10px":A,f=e.className,S=void 0===f?"":f,x=e.required,g=void 0!==x&&x,C=(0,i.$G)().t,L=(0,t.useCallback)((function(e){_({name:c,value:e.target.value})}),[c,_]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(s.k,{direction:"column",w:p,padding:T,margin:b,children:[(0,r.jsx)(o.l,{children:C(u)}),(0,r.jsx)(l.I,{placeholder:v,size:"md",isDisabled:a,isRequired:g,onChange:L,width:"100%",className:S,value:n,type:E})]})})};a.Z=(0,t.memo)(c)},2080:function(e,a,n){var t=n(2791),i=n(9230),s=n(1820),o=n(3380),l=n(1078),r=n(7693),c=n(1461),d=n(7521),u=n(176),_=n(4653),m=n(4224),p=n(184),h=function(e){var a=e.children,n=e.visible,t=void 0!==n&&n,h=e.label,E=e.onClose,v=e.onOK,T=e.submitTitle,A=void 0===T?"smbt":T,b=e.width,f=void 0===b?"3xl":b,S=e.hideSaveButton,x=void 0!==S&&S,g=e.hideCloseButton,C=void 0!==g&&g,L=(0,i.$G)().t;return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(s.u_,{isOpen:t,onClose:E,size:f,children:[(0,p.jsx)(o.Z,{}),(0,p.jsxs)(l.h,{children:[(0,p.jsx)(r.x,{children:L(h)}),(0,p.jsx)(c.o,{}),(0,p.jsx)(d.f,{children:(0,p.jsx)(u.k,{w:"100%",padding:"5px",wrap:"wrap",children:a})}),(0,p.jsx)(_.m,{children:(0,p.jsxs)(u.k,{w:"25%",justifyContent:"space-around",children:[(0,p.jsx)(m.z,{colorScheme:"red",mr:3,onClick:E,hidden:C,children:L("cls")}),(0,p.jsx)(m.z,{colorScheme:"blue",onClick:v,hidden:x,children:L(A)})]})})]})]})})};a.Z=(0,t.memo)(h)},1133:function(e,a,n){n.r(a),n.d(a,{default:function(){return E}});var t=n(2791),i=n(7595),s=n(6888),o=n(1875),l=n(8245),r=n(3785),c=n(9439),d=n(9230),u=n(184),_=function(e){var a=e.label,n=void 0===a?"":a,i=e.value,s=e.onChange,o=e.name,l=e.width,r=e.disabled,_=e.padding,m=e.margin,p=void 0===m?"10px":m,h=(0,d.$G)().t,E=(0,t.useState)(!1),v=(0,c.Z)(E,2),T=v[0],A=v[1],b=(0,t.useCallback)((function(e){!0===e.target.checked?s({name:o,value:"Y"}):!1===e.target.checked&&s({name:o,value:"N"})}),[o,s]);return(0,t.useEffect)((function(){"Y"===i?A(!0):"N"===i&&A(!1)}),[i]),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"form-check",style:{width:l,padding:_,margin:p},children:[(0,u.jsx)("input",{className:"form-check-input",type:"checkbox",checked:T,id:"flexCheckIndeterminate",onChange:b,disabled:r}),(0,u.jsx)("label",{className:"form-check-label",htmlFor:"flexCheckIndeterminate",children:h(n)})]})})},m=(0,t.memo)(_),p=n(2080),h=function(e){var a=e.visible,n=e.handleCloseModal,t=(0,l.Z)({initialValue:{date:"",employee_id:"",absent:"N",query_status:"n",attendance_time:""}}),c=t.onChange,d=t.state,_=d.date,h=d.employee_id,E=d.real_time,v=d.absent,T=d.reason,A=(0,r.Z)({link:"POST_EMPLOYEE_ATTENDANCE"}).setRow;return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(p.Z,{label:"emplyatndnc",visible:a,onClose:n,onOK:function(){A(d),n()},children:[(0,u.jsx)(i.Z,{Label:"dt",name:"date",value:_,onChange:c,type:"date",width:"30%"}),(0,u.jsx)(s.Z,{name:"employee_id",onChange:c,Api:"QUERY_EMPLOYEE_NAME_LIST",value:h,Label:"emply",width:"30%",fetchOnFirstRun:a}),(0,u.jsx)(i.Z,{type:"time",name:"attendance_time",value:E,onChange:c,Label:"atndnctm",width:"30%"}),(0,u.jsx)(o.Z,{name:"reason",value:T,onChange:c,Label:"rsn",width:"70%"}),(0,u.jsx)(m,{name:"absent",label:"absnt",value:v,onChange:c})]})})},E=(0,t.memo)(h)}}]);
//# sourceMappingURL=133.453d2d4a.chunk.js.map