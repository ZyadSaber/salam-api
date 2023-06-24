"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[225],{8535:function(e,n,i){var t=i(9439),o=i(2791),a=i(176),s=i(184),r=function(e){var n=e.children,i=e.justifyContent,r=e.width,c=e.height,d=e.padding,l=void 0===d?"10px":d,_=e.margin,u=e.bordered,p=void 0!==u&&u,h=e.backgroundColor,E=e.borderColor,m=void 0===E?"#3c8dcf":E,T=e.borderWidth,f=void 0===T?"px":T,v=e.borderRadius,A=void 0===v?"5px":v,x=e.flexDirection,b=void 0===x?"row":x,S=e.textAlign,C=void 0===S?"":S,R=e.hidden,g=void 0!==R&&R,j=e.wrap,k=(0,o.useState)(""),O=(0,t.Z)(k,2),P=(O[0],O[1]);return(0,o.useEffect)((function(){p&&P("".concat(f," solid ").concat(m))}),[m,f,p]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.k,{width:r,height:c,padding:l,margin:_,background:h,borderRadius:A,flexDirection:b,textAlign:C,justifyContent:i,hidden:g,wrap:j?"wrap":"",children:n})})};n.Z=(0,o.memo)(r)},225:function(e,n,i){i.d(n,{Z:function(){return R}});var t=i(1413),o=i(9439),a=i(5987),s=i(2791),r=i(5057),c=i(3838),d=i(9230),l=i(1820),_=i(3380),u=i(2449),p=i(7693),h=i(1461),E=i(7521),m=i(176),T=i(4653),f=i(4224),v=i(184),A=function(e){var n=e.children,i=e.visible,t=void 0!==i&&i,o=e.label,a=e.onClose,s=e.onOK,r=e.submitTitle,c=void 0===r?"smbt":r,A=e.width,x=void 0===A?"3xl":A,b=e.hideSaveButton,S=void 0!==b&&b,C=e.hideCloseButton,R=void 0!==C&&C,g=(0,d.$G)().t;return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(l.u_,{isOpen:t,onClose:a,size:x,children:[(0,v.jsx)(_.Z,{}),(0,v.jsxs)(u.h,{children:[(0,v.jsx)(p.x,{children:g(o)}),(0,v.jsx)(h.o,{}),(0,v.jsx)(E.f,{children:(0,v.jsx)(m.k,{w:"100%",padding:"5px",wrap:"wrap",children:n})}),(0,v.jsx)(T.m,{children:(0,v.jsxs)(m.k,{w:"25%",justifyContent:"space-around",children:[(0,v.jsx)(f.z,{colorScheme:"red",mr:3,onClick:a,hidden:R,children:g("cls")}),(0,v.jsx)(f.z,{colorScheme:"blue",onClick:s,hidden:S,children:g(c)})]})})]})]})})},x=(0,s.memo)(A),b=i(7262),S=["api","postApi","columns","ModalContent","onClick","fetchOnFirstRun","params"],C=function(e){var n=e.api,i=e.postApi,d=e.columns,l=e.ModalContent,_=e.onClick,u=e.fetchOnFirstRun,p=void 0!==u&&u,h=e.params,E=(0,a.Z)(e,S),m=(0,c.Z)({link:n,fetchOnFirstRun:p,params:h}),T=m.data,f=m.runFetch,A=m.loading,C=(0,b.Z)({api:i,runFetch:f}).onSaveAndInsertion,R=(0,s.useState)({}),g=(0,o.Z)(R,2),j=g[0],k=g[1],O=(0,s.useState)(!1),P=(0,o.Z)(O,2),y=P[0],L=P[1],w=(0,s.useCallback)((function(){k({query_status:"n"}),L(!0)}),[k]),I=(0,s.useCallback)((function(){k((0,t.Z)((0,t.Z)({},j),{},{query_status:"u"})),L(!0)}),[j,k]),D=(0,s.useCallback)((function(){L(!1)}),[]);return(0,v.jsxs)(v.Fragment,{children:[l&&(0,v.jsx)(x,{visible:y,onClose:D,hideCloseButton:!0,hideSaveButton:!0,label:"dtls",children:(0,v.jsx)(l,{onClose:D,selectedRow:j,refreshTable:f})}),(0,v.jsx)(r.Z,(0,t.Z)({dataSource:null===T||void 0===T?void 0:T.data,columns:d,onAdd:w,onEdit:I,onDelete:function(){C((0,t.Z)((0,t.Z)({},j),{},{query_status:"d"}))},onSelectedRow:function(e){k(e),_&&_(e)},loading:A},E))]})},R=(0,s.memo)(C)},5057:function(e,n,i){i.d(n,{Z:function(){return R}});var t=i(9439),o=i(2791),a=i(184),s=function(e){var n=e.icon,i=e.onClick,t=e.disabled,o=void 0!==t&&t,s=e.width,r=void 0===s?"30px":s,c=e.height,d=void 0===c?"30px":c,l=e.color,_=e.margin,u=void 0===_?"10px":_,p=e.padding,h=e.hidden,E=void 0!==h&&h;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("button",{style:{border:"none",width:r,height:d,backgroundColor:l,padding:p,margin:u,borderRadius:"20px"},hidden:E,onClick:i,disabled:o,children:(0,a.jsx)("i",{className:n})})})},r=(0,o.memo)(s),c=i(898),d=i(4880),l=i(4045),_=i(9230),u=i(1146),p=i.n(u),h=i(1900),E=i(9229),m=i(3676),T=i(4087),f=i(2732),v=i(553),A=i(3129),x=i(5237),b=i(8500),S=i(4004),C=i(8535),R=function(e){var n=e.dataSource,i=e.height,s=void 0===i?"300px":i,u=e.rowKey,R=void 0===u?"rowKey":u,g=e.columns,j=e.hideTools,k=void 0===j||j,O=e.canEdit,P=void 0!==O&&O,y=e.canAdd,L=void 0!==y&&y,w=e.canDelete,I=void 0!==w&&w,D=e.canExcel,U=void 0!==D&&D,Z=e.onAdd,Y=e.onEdit,B=e.onDelete,N=e.actionColumn,M=void 0!==N&&N,Q=e.onAction,F=e.actionLabel,H=void 0===F?"":F,z=e.onSelectedRow,V=e.label,q=e.canPrint,G=void 0!==q&&q,W=(e.onPrint,e.additionalButtons),K=e.onSave,J=e.canSave,X=void 0!==J&&J,$=e.width,ee=void 0===$?"100%":$,ne=e.margin,ie=void 0===ne?"":ne,te=e.padding,oe=void 0===te?"":te,ae=e.loading,se=void 0!==ae&&ae,re=e.onDoubleClick,ce=void 0===re?function(){}:re,de=(0,d.TH)().pathname,le=(0,_.$G)().t,_e=(0,o.useState)(),ue=(0,t.Z)(_e,2),pe=ue[0],he=ue[1],Ee=(0,o.useCallback)((function(e){return function(){z&&z(e),he(e)}}),[z]),me=(0,o.useCallback)((function(){var e=de.replace("/",""),i=l.P6.book_new(),t=l.P6.json_to_sheet(n);l.P6.book_append_sheet(i,t,e),l.NC(i,"".concat(e," ").concat((new Date).toUTCString(),".xlsx"))}),[n,de]),Te=(0,o.useRef)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(h.x,{width:ee,padding:oe,margin:ie,children:[V&&(0,a.jsx)(E.x,{width:"100%",textAlign:"center",marginBottom:"7px",fontSize:"md",fontWeight:"bold",children:le(V)}),(0,a.jsxs)(C.Z,{width:"100%",padding:"0",margin:"5px 0",justifyContent:"center",hidden:k,children:[(0,a.jsx)(r,{icon:"fa-sharp fa-solid fa-plus",onClick:Z,hidden:!L}),(0,a.jsx)(r,{icon:"fa-sharp fa-solid fa-pen-clip",onClick:Y,hidden:!P,disabled:!pe}),(0,a.jsx)(r,{icon:"fa-sharp fa-solid fa-trash",onClick:B,hidden:!I,disabled:!pe}),W&&W.map((function(e){return(0,a.jsx)(r,{icon:e.icon,onClick:e.onClick,disabled:e.disabled,hidden:!1})})),(0,a.jsx)(r,{icon:"fa-solid fa-floppy-disk",onClick:K,hidden:!X,disabled:!X}),(0,a.jsx)(p(),{trigger:function(){return(0,a.jsx)(r,{icon:"fa-solid fa-print",hidden:!G,disabled:!G})},content:function(){return Te.current},documentTitle:"dd"}),(0,a.jsx)(r,{icon:"fa-sharp fa-regular fa-file-excel",onClick:me,hidden:!U,disabled:!U})]}),(0,a.jsx)(m.O,{isLoaded:!se,fadeDuration:0,children:(0,a.jsxs)(T.xu,{overflowY:"auto",height:s,children:[(0,a.jsxs)(f.i,{ref:Te,children:[(0,a.jsx)(v.h,{top:0,position:"sticky",bgColor:"#3edae6",children:(0,a.jsxs)(A.Tr,{children:[g.map((function(e){return(0,a.jsx)(x.Th,{maxWidth:e.width,minWidth:e.width,children:le(e.title)})})),(0,a.jsx)(x.Th,{hidden:!M,children:le("actn")})]})}),(0,a.jsx)(b.p,{children:null===n||void 0===n?void 0:n.map((function(e){return(0,a.jsxs)(A.Tr,{onClick:Ee(e),onDoubleClick:ce,background:"".concat(pe===e?"#dbffbf":""),children:[g.map((function(n){return(0,a.jsx)(S.Td,{maxWidth:n.width,minWidth:n.width,children:e[n.dataIndex]})})),(0,a.jsx)(S.Td,{hidden:!M,children:(0,a.jsx)(c.Z,{label:H,onClick:function(){Q(e)}})})]},e[R])}))})]}),!Array.isArray(n)||0===n.length&&!se?(0,a.jsx)(C.Z,{justifyContent:"center",width:"100%",children:(0,a.jsx)(E.x,{as:"b",fontSize:"md",color:"red",children:"No Data"})}):(0,a.jsx)(a.Fragment,{})]})})]})})}},7262:function(e,n,i){var t=i(2791),o=i(4082);n.Z=function(e){var n=e.api,i=void 0===n?"":n,a=e.runFetch,s=(0,o.Z)({link:i,additionalFunctionToRun:a,method:"POST"}).setRow,r=(0,o.Z)({link:i,additionalFunctionToRun:a,method:"PUT"}).setRow,c=(0,o.Z)({link:i,additionalFunctionToRun:a,method:"Delete"}).setRow;return{onSaveAndInsertion:(0,t.useCallback)((function(e){"n"===e.query_status?s(e):"u"===e.query_status?r(e):"d"===e.query_status&&c(e)}),[s,r,c])}}},399:function(e,n){n.Z={QUERY_CUSTOMER_TABLE_DATA:"basic_data/customers/customers_table_data",POST_CUSTOMER_TABLE_DATA:"basic_data/customers/customers_table_data_dml",QUERY_SUPPLIER_TABLE_DATA:"basic_data/suppliers/suppliers_table_data",POST_SUPPLIER_TABLE_DATA:"basic_data/suppliers/suppliers_table_data_dml",POST_CUSTOMER_INVOICE_DETAILS:"invoices/customer_invoice/new_customer_invoice",POST_EMPLOYEE_ATTENDANCE:"employeesData/employee_attendance_dml",POST_EMPLOYEE_LEAVING:"employeesData/employee_leaving_dml",QUERY_EMPLOYEES_TABLE_DATA:"employees/employee_data/employee_table_data",POST_EMPLOYEES_TABLE_DATA:"employees/employee_data/employee_table_data_dml",QUERY_INVOICE_DETAIL_TABLE_DATA:"invoices/invoice_search/customer_supplier_invoice_detail_table",QUERY_INVOICE_MASTER_TABLE_DATA:"invoices/invoice_search/customer_supplier_invoice_main_table",QUERY_ITEMS_TABLE_DATA:"basic_data/items/items_table_data",POST_ITEMS_TABLE_DATA:"basic_data/items/items_table_data_dml",QUERY_PRINT_OPTIONS_TABLE_DAT:"basic_data/print_options/print_options_table_data",POST_PRINT_OPTIONS_TABLE_DATA:"basic_data/print_options/print_options_table_data_dml",USER_LOG_IN:"auth_security/sign_in",POST_SUPPLIER_INVOICE:"invoices/supplier_invoice/new_supplier_invoice",QUERY_LABELS:"get_labels",QUERY_CHUNK_LABELS:"get_chunk_labels",QUERY_EMPLOYEE_NAME_LIST:"employeesData/pop_employee_name",QUERY_CUSTOMER_AND_SUPPLIER_LIST:"invoices/invoice_search/customer_supplier_list",QUERY_SUPPLIER_LIST:"basic_data/suppliers/suppliers_list",QUERY_CUSTOMERS_LIST:"basic_data/customers/customers_list",QUERY_ITEMS_LIST:"basic_data/items/items_list",QUERY_PRINT_OPTIONS_LIST:"basic_data/print_options/print_options_lins",QUERY_EMPLOYEE_SHEET_SALARY:"employeesData/employee_sheet",QUERY_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/get_casher_receipt_voucher_invoices",POST_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/post_casher_receipt_voucher_invoices_dml",QUERY_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_expense/get_casher_payment_voucher_invoices",POST_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_expense/post_casher_payment_voucher_invoices_dml",QUERY_MAIN_CHART_DATA:"home/dash_board_get_data",QUERY_EXPENSES_TYPES_TABLE_DATA:"basic_data/expenses_type/expenses_type_table_data",POST_EXPENSES_TYPES_TABLE_DATA:"basic_data/expenses_type/expenses_type_table_data_dml",GET_PRIMARY_IMAGE:"application_logo/primary_logo",QUERY_INVOICES_CHART_DATA:"charts/invoices_query"}},3838:function(e,n,i){var t=i(4165),o=i(5861),a=i(9439),s=i(2791),r=i(399),c=i(1227),d=i(1295);n.Z=function(e){var n=e.link,i=void 0===n?"":n,l=e.fetchOnFirstRun,_=(e.refreshTimeout,e.params),u=e.noAuthorization,p=void 0!==u&&u,h=(0,d.p)(),E=(0,c.Z)().authorization,m="http://144.24.209.19:9090/api/".concat(r.Z[i]),T=(0,s.useState)(void 0),f=(0,a.Z)(T,2),v=f[0],A=f[1],x=(0,s.useState)(!1),b=(0,a.Z)(x,2),S=b[0],C=b[1],R=(0,s.useCallback)((0,o.Z)((0,t.Z)().mark((function e(){var n,i,o;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C(!0),!E&&!p){e.next=11;break}return n={headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(E)}},e.next=5,fetch("".concat(m,"?").concat(new URLSearchParams(_)),n);case 5:return i=e.sent,C(!1),e.next=9,i.json();case 9:o=e.sent,A(o);case 11:case"end":return e.stop()}}),e)}))),[E,p,_,m]),g=(0,s.useCallback)((function(){l&&R()}),[l,R]);(0,s.useEffect)((function(){l&&R()}),[l,R,m,_,g]),(0,s.useEffect)((function(){v&&v.response&&h({position:"top-right",title:"error",description:"".concat(JSON.stringify(v.response)),status:"error",duration:5e3,isClosable:!0})}),[v,h]);var j=(0,s.useCallback)((function(){R()}),[R]);return{data:v,runFetch:j,setData:A,loading:S}}},4082:function(e,n,i){var t=i(4165),o=i(5861),a=i(9439),s=i(2791),r=i(1227),c=i(399),d=i(1295);n.Z=function(e){var n=e.link,i=void 0===n?"":n,l=e.noAuthorization,_=void 0!==l&&l,u=e.additionalFunctionToRun,p=e.runOnSuccess,h=e.runOnFail,E=e.method,m=void 0===E?"POST":E,T=(0,d.p)(),f="http://144.24.209.19:9090/api/".concat(c.Z[i]),v=(0,s.useState)(),A=(0,a.Z)(v,2),x=A[0],b=A[1],S=(0,r.Z)().authorization,C=(0,s.useCallback)(function(){var e=(0,o.Z)((0,t.Z)().mark((function e(n){var i,o,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S&&!_){e.next=17;break}return i={method:m,headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(S)},body:JSON.stringify(n)},e.prev=2,e.next=5,fetch(f,i);case 5:return o=e.sent,e.next=8,o.json();case 8:return"success"===(a=e.sent).response?(T({position:"top-right",title:"Success",description:"".concat(a.response),status:"success",duration:5e3,isClosable:!0}),p&&p()):(T({position:"top-right",title:"Error",description:"".concat(a.message),status:"error",duration:9e3,isClosable:!0}),h&&h()),b(a),u&&u(),e.abrupt("return",a);case 15:e.prev=15,e.t0=e.catch(2);case 17:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(n){return e.apply(this,arguments)}}(),[u,S,m,_,h,p,T,f]);return{success:x,setRow:(0,s.useCallback)((function(e){C(e)}),[C])}}}}]);
//# sourceMappingURL=225.0c2145e9.chunk.js.map