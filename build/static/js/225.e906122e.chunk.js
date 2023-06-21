"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[225],{8535:function(e,n,i){var t=i(9439),o=i(2791),a=i(176),s=i(184),r=function(e){var n=e.children,i=e.justifyContent,r=e.width,d=e.height,c=e.padding,l=void 0===c?"10px":c,_=e.margin,u=e.bordered,p=void 0!==u&&u,h=e.backgroundColor,m=e.borderColor,E=void 0===m?"#3c8dcf":m,v=e.borderWidth,f=void 0===v?"px":v,T=e.borderRadius,A=void 0===T?"5px":T,x=e.flexDirection,b=void 0===x?"row":x,S=e.textAlign,C=void 0===S?"":S,g=e.hidden,R=void 0!==g&&g,j=e.wrap,k=(0,o.useState)(""),O=(0,t.Z)(k,2),P=(O[0],O[1]);return(0,o.useEffect)((function(){p&&P("".concat(f," solid ").concat(E))}),[E,f,p]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.k,{width:r,height:d,padding:l,margin:_,background:h,borderRadius:A,flexDirection:b,textAlign:C,justifyContent:i,hidden:R,wrap:j?"wrap":"",children:n})})};n.Z=(0,o.memo)(r)},225:function(e,n,i){i.d(n,{Z:function(){return g}});var t=i(1413),o=i(9439),a=i(5987),s=i(2791),r=i(5057),d=i(3838),c=i(9230),l=i(1820),_=i(3380),u=i(2449),p=i(7693),h=i(1461),m=i(7521),E=i(176),v=i(4653),f=i(4224),T=i(184),A=function(e){var n=e.children,i=e.visible,t=void 0!==i&&i,o=e.label,a=e.onClose,s=e.onOK,r=e.submitTitle,d=void 0===r?"smbt":r,A=e.width,x=void 0===A?"3xl":A,b=e.hideSaveButton,S=void 0!==b&&b,C=e.hideCloseButton,g=void 0!==C&&C,R=(0,c.$G)().t;return(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)(l.u_,{isOpen:t,onClose:a,size:x,children:[(0,T.jsx)(_.Z,{}),(0,T.jsxs)(u.h,{children:[(0,T.jsx)(p.x,{children:R(o)}),(0,T.jsx)(h.o,{}),(0,T.jsx)(m.f,{children:(0,T.jsx)(E.k,{w:"100%",padding:"5px",wrap:"wrap",children:n})}),(0,T.jsx)(v.m,{children:(0,T.jsxs)(E.k,{w:"25%",justifyContent:"space-around",children:[(0,T.jsx)(f.z,{colorScheme:"red",mr:3,onClick:a,hidden:g,children:R("cls")}),(0,T.jsx)(f.z,{colorScheme:"blue",onClick:s,hidden:S,children:R(d)})]})})]})]})})},x=(0,s.memo)(A),b=i(7262),S=["api","postApi","columns","ModalContent","onClick","fetchOnFirstRun","params"],C=function(e){var n=e.api,i=e.postApi,c=e.columns,l=e.ModalContent,_=e.onClick,u=e.fetchOnFirstRun,p=void 0!==u&&u,h=e.params,m=(0,a.Z)(e,S),E=(0,d.Z)({link:n,fetchOnFirstRun:p,params:h}),v=E.data,f=E.runFetch,A=E.loading,C=(0,b.Z)({api:i,runFetch:f}).onSaveAndInsertion,g=(0,s.useState)({}),R=(0,o.Z)(g,2),j=R[0],k=R[1],O=(0,s.useState)(!1),P=(0,o.Z)(O,2),y=P[0],L=P[1],I=(0,s.useCallback)((function(){k({query_status:"n"}),L(!0)}),[k]),w=(0,s.useCallback)((function(){k((0,t.Z)((0,t.Z)({},j),{},{query_status:"u"})),L(!0)}),[j,k]),Z=(0,s.useCallback)((function(){L(!1)}),[]);return(0,T.jsxs)(T.Fragment,{children:[l&&(0,T.jsx)(x,{visible:y,onClose:Z,hideCloseButton:!0,hideSaveButton:!0,label:"dtls",children:(0,T.jsx)(l,{onClose:Z,selectedRow:j,refreshTable:f})}),(0,T.jsx)(r.Z,(0,t.Z)({dataSource:null===v||void 0===v?void 0:v.data,columns:c,onAdd:I,onEdit:w,onDelete:function(){C((0,t.Z)((0,t.Z)({},j),{},{query_status:"d"}))},onSelectedRow:function(e){k(e),_&&_(e)},loading:A},m))]})},g=(0,s.memo)(C)},5057:function(e,n,i){i.d(n,{Z:function(){return g}});var t=i(9439),o=i(2791),a=i(184),s=function(e){var n=e.icon,i=e.onClick,t=e.disabled,o=void 0!==t&&t,s=e.width,r=void 0===s?"30px":s,d=e.height,c=void 0===d?"30px":d,l=e.color,_=e.margin,u=void 0===_?"10px":_,p=e.padding,h=e.hidden,m=void 0!==h&&h;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("button",{style:{border:"none",width:r,height:c,backgroundColor:l,padding:p,margin:u,borderRadius:"20px"},hidden:m,onClick:i,disabled:o,children:(0,a.jsx)("i",{className:n})})})},r=(0,o.memo)(s),d=i(898),c=i(4880),l=i(4045),_=i(9230),u=i(1146),p=i.n(u),h=i(1900),m=i(9229),E=i(3676),v=i(4087),f=i(2732),T=i(553),A=i(3129),x=i(5237),b=i(8500),S=i(4004),C=i(8535),g=function(e){var n=e.dataSource,i=e.height,s=void 0===i?"300px":i,u=e.rowKey,g=void 0===u?"rowKey":u,R=e.columns,j=e.hideTools,k=void 0===j||j,O=e.canEdit,P=void 0!==O&&O,y=e.canAdd,L=void 0!==y&&y,I=e.canDelete,w=void 0!==I&&I,Z=e.canExcel,D=void 0!==Z&&Z,U=e.onAdd,Y=e.onEdit,B=e.onDelete,N=e.actionColumn,M=void 0!==N&&N,F=e.onAction,Q=e.actionLabel,z=void 0===Q?"":Q,H=e.onSelectedRow,V=e.label,q=e.canPrint,G=void 0!==q&&q,W=(e.onPrint,e.additionalButtons),K=e.onSave,$=e.canSave,J=void 0!==$&&$,X=e.width,ee=void 0===X?"100%":X,ne=e.margin,ie=void 0===ne?"":ne,te=e.padding,oe=void 0===te?"":te,ae=e.loading,se=void 0!==ae&&ae,re=e.onDoubleClick,de=void 0===re?function(){}:re,ce=(0,c.TH)().pathname,le=(0,_.$G)().t,_e=(0,o.useState)(),ue=(0,t.Z)(_e,2),pe=ue[0],he=ue[1],me=(0,o.useCallback)((function(e){return function(){H&&H(e),he(e)}}),[H]),Ee=(0,o.useCallback)((function(){var e=ce.replace("/",""),i=l.P6.book_new(),t=l.P6.json_to_sheet(n);l.P6.book_append_sheet(i,t,e),l.NC(i,"".concat(e," ").concat((new Date).toUTCString(),".xlsx"))}),[n,ce]),ve=(0,o.useRef)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(h.x,{width:ee,padding:oe,margin:ie,children:[V&&(0,a.jsx)(m.x,{width:"100%",textAlign:"center",marginBottom:"7px",fontSize:"md",fontWeight:"bold",children:le(V)}),(0,a.jsxs)(C.Z,{width:"100%",padding:"0",margin:"5px 0",justifyContent:"center",hidden:k,children:[(0,a.jsx)(r,{icon:"fa-sharp fa-solid fa-plus",onClick:U,hidden:!L}),(0,a.jsx)(r,{icon:"fa-sharp fa-solid fa-pen-clip",onClick:Y,hidden:!P,disabled:!pe}),(0,a.jsx)(r,{icon:"fa-sharp fa-solid fa-trash",onClick:B,hidden:!w,disabled:!pe}),W&&W.map((function(e){return(0,a.jsx)(r,{icon:e.icon,onClick:e.onClick,disabled:e.disabled,hidden:!1})})),(0,a.jsx)(r,{icon:"fa-solid fa-floppy-disk",onClick:K,hidden:!J,disabled:!J}),(0,a.jsx)(p(),{trigger:function(){return(0,a.jsx)(r,{icon:"fa-solid fa-print",hidden:!G,disabled:!G})},content:function(){return ve.current},documentTitle:"dd"}),(0,a.jsx)(r,{icon:"fa-sharp fa-regular fa-file-excel",onClick:Ee,hidden:!D,disabled:!D})]}),(0,a.jsx)(E.O,{isLoaded:!se,fadeDuration:0,children:(0,a.jsxs)(v.xu,{overflowY:"auto",height:s,children:[(0,a.jsxs)(f.i,{ref:ve,children:[(0,a.jsx)(T.h,{top:0,position:"sticky",bgColor:"#3edae6",children:(0,a.jsxs)(A.Tr,{children:[R.map((function(e){return(0,a.jsx)(x.Th,{maxWidth:e.width,minWidth:e.width,children:le(e.title)})})),(0,a.jsx)(x.Th,{hidden:!M,children:le("actn")})]})}),(0,a.jsx)(b.p,{children:null===n||void 0===n?void 0:n.map((function(e){return(0,a.jsxs)(A.Tr,{onClick:me(e),onDoubleClick:de,background:"".concat(pe===e?"#dbffbf":""),children:[R.map((function(n){return(0,a.jsx)(S.Td,{maxWidth:n.width,minWidth:n.width,children:e[n.dataIndex]})})),(0,a.jsx)(S.Td,{hidden:!M,children:(0,a.jsx)(d.Z,{label:z,onClick:function(){F(e)}})})]},e[g])}))})]}),!Array.isArray(n)||0===n.length&&!se?(0,a.jsx)(C.Z,{justifyContent:"center",width:"100%",children:(0,a.jsx)(m.x,{as:"b",fontSize:"md",color:"red",children:"No Data"})}):(0,a.jsx)(a.Fragment,{})]})})]})})}},7262:function(e,n,i){var t=i(2791),o=i(4082);n.Z=function(e){var n=e.api,i=void 0===n?"":n,a=e.runFetch,s=(0,o.Z)({link:i,additionalFunctionToRun:a,method:"POST"}).setRow,r=(0,o.Z)({link:i,additionalFunctionToRun:a,method:"PUT"}).setRow,d=(0,o.Z)({link:i,additionalFunctionToRun:a,method:"Delete"}).setRow;return{onSaveAndInsertion:(0,t.useCallback)((function(e){"n"===e.query_status?s(e):"u"===e.query_status?r(e):"d"===e.query_status&&d(e)}),[s,r,d])}}},898:function(e,n,i){var t=i(2791),o=i(9230),a=i(4224),s=i(184),r=function(e){var n=e.label,i=void 0===n?"":n,t=e.onClick,r=e.disabled,d=e.hidden,c=e.margin,l=e.width,_=e.height,u=e.padding,p=e.color,h=void 0===p?"blue":p,m=e.variant,E=void 0===m?"solid":m,v=e.size,f=void 0===v?"md":v,T=e.leftIcon,A=void 0===T?(0,s.jsx)(s.Fragment,{}):T,x=e.rightIcon,b=void 0===x?(0,s.jsx)(s.Fragment,{}):x,S=e.position,C=void 0===S?"unset":S,g=(0,o.$G)().t;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.z,{colorScheme:h,variant:E,leftIcon:A,rightIcon:b,width:l,onClick:t,disabled:r,hidden:d,margin:c,padding:u,height:_,size:f,position:C,children:g(i)})})};n.Z=(0,t.memo)(r)},399:function(e,n){n.Z={QUERY_CUSTOMER_TABLE_DATA:"basic_data/customers/customers_table_data",POST_CUSTOMER_TABLE_DATA:"basic_data/customers/customers_table_data_dml",QUERY_SUPPLIER_TABLE_DATA:"basic_data/suppliers/suppliers_table_data",POST_SUPPLIER_TABLE_DATA:"basic_data/suppliers/suppliers_table_data_dml",POST_CUSTOMER_INVOICE_DETAILS:"invoices/customer_invoice/new_customer_invoice",POST_EMPLOYEE_ATTENDANCE:"employeesData/employee_attendance_dml",POST_EMPLOYEE_LEAVING:"employeesData/employee_leaving_dml",QUERY_EMPLOYEES_TABLE_DATA:"employees/employee_data/employee_table_data",POST_EMPLOYEES_TABLE_DATA:"employees/employee_data/employee_table_data_dml",QUERY_INVOICE_DETAIL_TABLE_DATA:"invoices/invoice_search/customer_supplier_invoice_detail_table",QUERY_INVOICE_MASTER_TABLE_DATA:"invoices/invoice_search/customer_supplier_invoice_main_table",QUERY_ITEMS_TABLE_DATA:"basic_data/items/items_table_data",POST_ITEMS_TABLE_DATA:"basic_data/items/items_table_data_dml",QUERY_PRINT_OPTIONS_TABLE_DAT:"basic_data/print_options/print_options_table_data",POST_PRINT_OPTIONS_TABLE_DATA:"basic_data/print_options/print_options_table_data_dml",USER_LOG_IN:"auth_security/sign_in",POST_SUPPLIER_INVOICE:"invoices/supplier_invoice/new_supplier_invoice",QUERY_LABELS:"get_labels",QUERY_CHUNK_LABELS:"get_chunk_labels",QUERY_EMPLOYEE_NAME_LIST:"employeesData/pop_employee_name",QUERY_CUSTOMER_AND_SUPPLIER_LIST:"invoices/invoice_search/customer_supplier_list",QUERY_SUPPLIER_LIST:"basic_data/suppliers/suppliers_list",QUERY_CUSTOMERS_LIST:"basic_data/customers/customers_list",QUERY_ITEMS_LIST:"basic_data/items/items_list",QUERY_PRINT_OPTIONS_LIST:"basic_data/print_options/print_options_lins",QUERY_EMPLOYEE_SHEET_SALARY:"employeesData/employee_sheet",QUERY_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/get_casher_receipt_voucher_invoices",POST_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/post_casher_receipt_voucher_invoices_dml",QUERY_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_expense/get_casher_payment_voucher_invoices",POST_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_expense/post_casher_payment_voucher_invoices_dml",QUERY_MAIN_CHART_DATA:"home/dash_board_get_data",QUERY_EXPENSES_TYPES_TABLE_DATA:"basic_data/expenses_type/expenses_type_table_data",POST_EXPENSES_TYPES_TABLE_DATA:"basic_data/expenses_type/expenses_type_table_data_dml",GET_PRIMARY_IMAGE:"application_logo/primary_logo",QUERY_INVOICES_CHART_DATA:"charts/invoices_query"}},3838:function(e,n,i){var t=i(4165),o=i(5861),a=i(9439),s=i(2791),r=i(399),d=i(1227),c=i(1295);n.Z=function(e){var n=e.link,i=void 0===n?"":n,l=e.fetchOnFirstRun,_=(e.refreshTimeout,e.params),u=e.noAuthorization,p=void 0!==u&&u,h=(0,c.p)(),m=(0,d.Z)().authorization,E="http://144.24.209.19:9090/api/".concat(r.Z[i]),v=(0,s.useState)(void 0),f=(0,a.Z)(v,2),T=f[0],A=f[1],x=(0,s.useState)(!1),b=(0,a.Z)(x,2),S=b[0],C=b[1],g=(0,s.useCallback)((0,o.Z)((0,t.Z)().mark((function e(){var n,i,o;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C(!0),!m&&!p){e.next=11;break}return n={headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(m)}},e.next=5,fetch("".concat(E,"?").concat(new URLSearchParams(_)),n);case 5:return i=e.sent,C(!1),e.next=9,i.json();case 9:o=e.sent,A(o);case 11:case"end":return e.stop()}}),e)}))),[m,p,_,E]),R=(0,s.useCallback)((function(){l&&g()}),[l,g]);(0,s.useEffect)((function(){l&&g()}),[l,g,E,_,R]),(0,s.useEffect)((function(){T&&T.response&&h({position:"top-right",title:"error",description:"".concat(JSON.stringify(T.response)),status:"error",duration:5e3,isClosable:!0})}),[T,h]);var j=(0,s.useCallback)((function(){g()}),[g]);return{data:T,runFetch:j,setData:A,loading:S}}},4082:function(e,n,i){var t=i(4165),o=i(5861),a=i(9439),s=i(2791),r=i(1227),d=i(399),c=i(1295);n.Z=function(e){var n=e.link,i=void 0===n?"":n,l=e.noAuthorization,_=void 0!==l&&l,u=e.additionalFunctionToRun,p=e.runOnSuccess,h=e.runOnFail,m=e.method,E=void 0===m?"POST":m,v=(0,c.p)(),f="http://144.24.209.19:9090/api/".concat(d.Z[i]),T=(0,s.useState)(),A=(0,a.Z)(T,2),x=A[0],b=A[1],S=(0,r.Z)().authorization,C=(0,s.useCallback)(function(){var e=(0,o.Z)((0,t.Z)().mark((function e(n){var i,o,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S&&!_){e.next=17;break}return i={method:E,headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(S)},body:JSON.stringify(n)},e.prev=2,e.next=5,fetch(f,i);case 5:return o=e.sent,e.next=8,o.json();case 8:return"success"===(a=e.sent).response?(v({position:"top-right",title:"Success",description:"".concat(a.response),status:"success",duration:5e3,isClosable:!0}),p&&p()):(v({position:"top-right",title:"Error",description:"".concat(a.message),status:"error",duration:9e3,isClosable:!0}),h&&h()),b(a),u&&u(),e.abrupt("return",a);case 15:e.prev=15,e.t0=e.catch(2);case 17:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(n){return e.apply(this,arguments)}}(),[u,S,E,_,h,p,v,f]);return{success:x,setRow:(0,s.useCallback)((function(e){C(e)}),[C])}}}}]);
//# sourceMappingURL=225.e906122e.chunk.js.map