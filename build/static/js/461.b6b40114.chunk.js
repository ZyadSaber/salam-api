"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[461],{8535:function(e,i,t){var n=t(9439),a=t(2791),o=t(176),c=t(184),s=function(e){var i=e.children,t=e.justifyContent,s=e.width,r=e.height,l=e.padding,d=void 0===l?"10px":l,_=e.margin,u=e.bordered,m=void 0!==u&&u,h=e.backgroundColor,v=e.borderColor,p=void 0===v?"#3c8dcf":v,f=e.borderWidth,b=void 0===f?"px":f,x=e.borderRadius,g=void 0===x?"5px":x,E=e.flexDirection,C=void 0===E?"row":E,T=e.textAlign,A=void 0===T?"":T,S=e.hidden,j=void 0!==S&&S,Z=e.wrap,L=(0,a.useState)(""),w=(0,n.Z)(L,2),R=(w[0],w[1]);return(0,a.useEffect)((function(){m&&R("".concat(b," solid ").concat(p))}),[p,b,m]),(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(o.k,{width:s,height:r,padding:d,margin:_,background:h,borderRadius:g,flexDirection:C,textAlign:A,justifyContent:t,hidden:j,wrap:Z?"wrap":"",children:i})})};i.Z=(0,a.memo)(s)},8864:function(e,i,t){var n=t(2791),a=t(9230),o=t(176),c=t(4585),s=t(8886),r=t(184),l=function(e){var i=e.width,t=void 0===i?"200px":i,n=e.Options,l=void 0===n?[{label:"",value:0}]:n,d=e.onChange,_=e.Label,u=e.value,m=void 0===u?0:u,h=e.name,v=e.withLabel,p=void 0!==v&&v,f=e.margin,b=void 0===f?"10px":f,x=e.padding,g=e.placeholder,E=void 0===g?"Select":g,C=e.selectLabelName,T=void 0===C?"label_select":C,A=(0,a.$G)().t;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(o.k,{direction:"column",width:t,padding:x,margin:b,children:[(0,r.jsx)(c.l,{fontSize:"md",as:"b",margin:"0 0 5px",children:A(_)}),(0,r.jsx)(s.P,{placeholder:A(E),onChange:function(e){Array.isArray(l)&&l.map((function(i){i.value===+e.target.value&&d(p?{value:i.value,selectLabelName:T,label:i.label,name:h}:{value:i.value,name:h})}))},children:Array.isArray(l)?l.map((function(e){return(0,r.jsxs)("option",{value:e.value,selected:m===e.value&&!0,children:[" ",A(e.label)]},e.value)})):(0,r.jsx)("option",{disabled:!0,children:A("No data")})})]})})};i.Z=(0,n.memo)(l)},6888:function(e,i,t){var n=t(2791),a=t(8864),o=t(3838),c=t(184),s=function(e){var i=e.width,t=e.Api,n=e.onChange,s=e.Label,r=e.name,l=void 0===r?"":r,d=e.value,_=void 0===d?0:d,u=e.withLabel,m=void 0!==u&&u,h=e.padding,v=e.margin,p=e.params,f=e.fetchOnFirstRun,b=void 0!==f&&f,x=e.selectLabelName,g=void 0===x?"label_select":x,E=(0,o.Z)({link:t,fetchOnFirstRun:b,params:p}).data;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(a.Z,{Options:E,onChange:n,Label:s,value:_,name:l,width:i,withLabel:m,margin:v,padding:h,selectLabelName:g})})};i.Z=(0,n.memo)(s)},5057:function(e,i,t){t.d(i,{Z:function(){return S}});var n=t(9439),a=t(2791),o=t(184),c=function(e){var i=e.icon,t=e.onClick,n=e.disabled,a=void 0!==n&&n,c=e.width,s=void 0===c?"30px":c,r=e.height,l=void 0===r?"30px":r,d=e.color,_=e.margin,u=void 0===_?"10px":_,m=e.padding,h=e.hidden,v=void 0!==h&&h;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("button",{style:{border:"none",width:s,height:l,backgroundColor:d,padding:m,margin:u,borderRadius:"20px"},hidden:v,onClick:t,disabled:a,children:(0,o.jsx)("i",{className:i})})})},s=(0,a.memo)(c),r=t(898),l=t(4880),d=t(4045),_=t(9230),u=t(1146),m=t.n(u),h=t(1900),v=t(9229),p=t(3676),f=t(4087),b=t(2732),x=t(553),g=t(3129),E=t(5237),C=t(8500),T=t(4004),A=t(8535),S=function(e){var i=e.dataSource,t=e.height,c=void 0===t?"300px":t,u=e.rowKey,S=void 0===u?"rowKey":u,j=e.columns,Z=e.hideTools,L=void 0===Z||Z,w=e.canEdit,R=void 0!==w&&w,y=e.canAdd,O=void 0!==y&&y,I=e.canDelete,k=void 0!==I&&I,P=e.canExcel,N=void 0!==P&&P,D=e.onAdd,U=e.onEdit,Y=e.onDelete,B=e.actionColumn,M=void 0!==B&&B,Q=e.onAction,z=e.actionLabel,F=void 0===z?"":z,H=e.onSelectedRow,V=e.label,q=e.canPrint,G=void 0!==q&&q,W=(e.onPrint,e.additionalButtons),J=e.onSave,$=e.canSave,K=void 0!==$&&$,X=e.width,ee=void 0===X?"100%":X,ie=e.margin,te=void 0===ie?"":ie,ne=e.padding,ae=void 0===ne?"":ne,oe=e.loading,ce=void 0!==oe&&oe,se=e.onDoubleClick,re=void 0===se?function(){}:se,le=(0,l.TH)().pathname,de=(0,_.$G)().t,_e=(0,a.useState)(),ue=(0,n.Z)(_e,2),me=ue[0],he=ue[1],ve=(0,a.useCallback)((function(e){return function(){H&&H(e),he(e)}}),[H]),pe=(0,a.useCallback)((function(){var e=le.replace("/",""),t=d.P6.book_new(),n=d.P6.json_to_sheet(i);d.P6.book_append_sheet(t,n,e),d.NC(t,"".concat(e," ").concat((new Date).toUTCString(),".xlsx"))}),[i,le]),fe=(0,a.useRef)();return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(h.x,{width:ee,padding:ae,margin:te,children:[V&&(0,o.jsx)(v.x,{width:"100%",textAlign:"center",marginBottom:"7px",fontSize:"md",fontWeight:"bold",children:de(V)}),(0,o.jsxs)(A.Z,{width:"100%",padding:"0",margin:"5px 0",justifyContent:"center",hidden:L,children:[(0,o.jsx)(s,{icon:"fa-sharp fa-solid fa-plus",onClick:D,hidden:!O}),(0,o.jsx)(s,{icon:"fa-sharp fa-solid fa-pen-clip",onClick:U,hidden:!R,disabled:!me}),(0,o.jsx)(s,{icon:"fa-sharp fa-solid fa-trash",onClick:Y,hidden:!k,disabled:!me}),W&&W.map((function(e){return(0,o.jsx)(s,{icon:e.icon,onClick:e.onClick,disabled:e.disabled,hidden:!1})})),(0,o.jsx)(s,{icon:"fa-solid fa-floppy-disk",onClick:J,hidden:!K,disabled:!K}),(0,o.jsx)(m(),{trigger:function(){return(0,o.jsx)(s,{icon:"fa-solid fa-print",hidden:!G,disabled:!G})},content:function(){return fe.current},documentTitle:"dd"}),(0,o.jsx)(s,{icon:"fa-sharp fa-regular fa-file-excel",onClick:pe,hidden:!N,disabled:!N})]}),(0,o.jsx)(p.O,{isLoaded:!ce,fadeDuration:0,children:(0,o.jsxs)(f.xu,{overflowY:"auto",height:c,children:[(0,o.jsxs)(b.i,{ref:fe,children:[(0,o.jsx)(x.h,{top:0,position:"sticky",bgColor:"#3edae6",children:(0,o.jsxs)(g.Tr,{children:[j.map((function(e){return(0,o.jsx)(E.Th,{maxWidth:e.width,minWidth:e.width,children:de(e.title)})})),(0,o.jsx)(E.Th,{hidden:!M,children:de("actn")})]})}),(0,o.jsx)(C.p,{children:null===i||void 0===i?void 0:i.map((function(e){return(0,o.jsxs)(g.Tr,{onClick:ve(e),onDoubleClick:re,background:"".concat(me===e?"#dbffbf":""),children:[j.map((function(i){return(0,o.jsx)(T.Td,{maxWidth:i.width,minWidth:i.width,children:e[i.dataIndex]})})),(0,o.jsx)(T.Td,{hidden:!M,children:(0,o.jsx)(r.Z,{label:F,onClick:function(){Q(e)}})})]},e[S])}))})]}),!Array.isArray(i)||0===i.length&&!ce?(0,o.jsx)(A.Z,{justifyContent:"center",width:"100%",children:(0,o.jsx)(v.x,{as:"b",fontSize:"md",color:"red",children:"No Data"})}):(0,o.jsx)(o.Fragment,{})]})})]})})}},399:function(e,i){i.Z={QUERY_CUSTOMER_TABLE_DATA:"basic_data/customers/customers_table_data",POST_CUSTOMER_TABLE_DATA:"basic_data/customers/customers_table_data_dml",QUERY_SUPPLIER_TABLE_DATA:"basic_data/suppliers/suppliers_table_data",POST_SUPPLIER_TABLE_DATA:"basic_data/suppliers/suppliers_table_data_dml",POST_CUSTOMER_INVOICE_DETAILS:"invoices/customer_invoice/new_customer_invoice",POST_EMPLOYEE_ATTENDANCE:"employeesData/employee_attendance_dml",POST_EMPLOYEE_LEAVING:"employeesData/employee_leaving_dml",QUERY_EMPLOYEES_TABLE_DATA:"employees/employee_data/employee_table_data",POST_EMPLOYEES_TABLE_DATA:"employees/employee_data/employee_table_data_dml",QUERY_INVOICE_DETAIL_TABLE_DATA:"invoices/invoice_search/customer_supplier_invoice_detail_table",QUERY_INVOICE_MASTER_TABLE_DATA:"invoices/invoice_search/customer_supplier_invoice_main_table",QUERY_ITEMS_TABLE_DATA:"basic_data/items/items_table_data",POST_ITEMS_TABLE_DATA:"basic_data/items/items_table_data_dml",QUERY_PRINT_OPTIONS_TABLE_DAT:"basic_data/print_options/print_options_table_data",POST_PRINT_OPTIONS_TABLE_DATA:"basic_data/print_options/print_options_table_data_dml",USER_LOG_IN:"auth_security/sign_in",POST_SUPPLIER_INVOICE:"invoices/supplier_invoice/new_supplier_invoice",QUERY_LABELS:"get_labels",QUERY_CHUNK_LABELS:"get_chunk_labels",QUERY_EMPLOYEE_NAME_LIST:"employeesData/pop_employee_name",QUERY_CUSTOMER_AND_SUPPLIER_LIST:"invoices/invoice_search/customer_supplier_list",QUERY_SUPPLIER_LIST:"basic_data/suppliers/suppliers_list",QUERY_CUSTOMERS_LIST:"basic_data/customers/customers_list",QUERY_ITEMS_LIST:"basic_data/items/items_list",QUERY_PRINT_OPTIONS_LIST:"basic_data/print_options/print_options_lins",QUERY_EMPLOYEE_SHEET_SALARY:"employeesData/employee_sheet",QUERY_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/get_casher_receipt_voucher_invoices",POST_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_expense/post_casher_receipt_voucher_invoices_dml",QUERY_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_expense/get_casher_payment_voucher_invoices",POST_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_expense/post_casher_payment_voucher_invoices_dml",QUERY_MAIN_CHART_DATA:"home/dash_board_get_data",QUERY_EXPENSES_TYPES_TABLE_DATA:"basic_data/expenses_type/expenses_type_table_data",POST_EXPENSES_TYPES_TABLE_DATA:"basic_data/expenses_type/expenses_type_table_data_dml",GET_PRIMARY_IMAGE:"application_logo/primary_logo",QUERY_INVOICES_CHART_DATA:"charts/invoices_query"}},3838:function(e,i,t){var n=t(4165),a=t(5861),o=t(9439),c=t(2791),s=t(399),r=t(1227),l=t(1295);i.Z=function(e){var i=e.link,t=void 0===i?"":i,d=e.fetchOnFirstRun,_=(e.refreshTimeout,e.params),u=e.noAuthorization,m=void 0!==u&&u,h=(0,l.p)(),v=(0,r.Z)().authorization,p="http://144.24.209.19:9090/api/".concat(s.Z[t]),f=(0,c.useState)(void 0),b=(0,o.Z)(f,2),x=b[0],g=b[1],E=(0,c.useState)(!1),C=(0,o.Z)(E,2),T=C[0],A=C[1],S=(0,c.useCallback)((0,a.Z)((0,n.Z)().mark((function e(){var i,t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A(!0),!v&&!m){e.next=11;break}return i={headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(v)}},e.next=5,fetch("".concat(p,"?").concat(new URLSearchParams(_)),i);case 5:return t=e.sent,A(!1),e.next=9,t.json();case 9:a=e.sent,g(a);case 11:case"end":return e.stop()}}),e)}))),[v,m,_,p]),j=(0,c.useCallback)((function(){d&&S()}),[d,S]);(0,c.useEffect)((function(){d&&S()}),[d,S,p,_,j]),(0,c.useEffect)((function(){x&&x.response&&h({position:"top-right",title:"error",description:"".concat(JSON.stringify(x.response)),status:"error",duration:5e3,isClosable:!0})}),[x,h]);var Z=(0,c.useCallback)((function(){S()}),[S]);return{data:x,runFetch:Z,setData:g,loading:T}}},3388:function(e,i,t){t.d(i,{Z:function(){return l}});var n=t(3433),a=t(4942),o=t(1413),c=t(9439),s=t(2791),r=function(e){var i=(0,s.useRef)();return(0,s.useEffect)((function(){i.current=e})),i.current},l=function(e){var i=e.initialValues,t=(0,s.useState)(i),l=(0,c.Z)(t,2),d=l[0],_=l[1],u=(0,s.useRef)(!1),m=r(i),h=(0,s.useCallback)((function(){return!Object.is(JSON.stringify(m),JSON.stringify(i))}),[i,m]);(0,s.useEffect)((function(){h()&&_((0,o.Z)({},i))}),[h,i]);var v=(0,s.useCallback)((function(){u.current=!1,_((function(){return i}))}),[i]);(0,s.useEffect)((function(){return v}),[]);var p=(0,s.useCallback)((function(e){var i=e.name,t=e.value;_((0,o.Z)((0,o.Z)({},d),{},(0,a.Z)({},i,t)))}),[d]),f=(0,s.useCallback)((function(e){_(e)}),[]),b=(0,s.useCallback)((function(e){var i;_((0,o.Z)((0,o.Z)({},d),{},(i={},(0,a.Z)(i,e.name,e.value),(0,a.Z)(i,e.selectLabelName,e.label),i)))}),[d]),x=(0,s.useCallback)((function(e){var i=e.name,t=e.value;_((0,o.Z)((0,o.Z)({},d),{},(0,a.Z)({},i,[].concat((0,n.Z)(d[i]),[t]))))}),[d]);return{state:d,onChange:p,resetForm:v,handleRootState:f,handleSelectWithLabelChange:b,handleArrayChange:x}}},4082:function(e,i,t){var n=t(4165),a=t(5861),o=t(9439),c=t(2791),s=t(1227),r=t(399),l=t(1295);i.Z=function(e){var i=e.link,t=void 0===i?"":i,d=e.noAuthorization,_=void 0!==d&&d,u=e.additionalFunctionToRun,m=e.runOnSuccess,h=e.runOnFail,v=e.method,p=void 0===v?"POST":v,f=(0,l.p)(),b="http://144.24.209.19:9090/api/".concat(r.Z[t]),x=(0,c.useState)(),g=(0,o.Z)(x,2),E=g[0],C=g[1],T=(0,s.Z)().authorization,A=(0,c.useCallback)(function(){var e=(0,a.Z)((0,n.Z)().mark((function e(i){var t,a,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!T&&!_){e.next=17;break}return t={method:p,headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(T)},body:JSON.stringify(i)},e.prev=2,e.next=5,fetch(b,t);case 5:return a=e.sent,e.next=8,a.json();case 8:return"success"===(o=e.sent).response?(f({position:"top-right",title:"Success",description:"".concat(o.response),status:"success",duration:5e3,isClosable:!0}),m&&m()):(f({position:"top-right",title:"Error",description:"".concat(o.message),status:"error",duration:9e3,isClosable:!0}),h&&h()),C(o),u&&u(),e.abrupt("return",o);case 15:e.prev=15,e.t0=e.catch(2);case 17:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(i){return e.apply(this,arguments)}}(),[u,T,p,_,h,m,f,b]);return{success:E,setRow:(0,c.useCallback)((function(e){A(e)}),[A])}}},1746:function(e,i,t){var n=t(2791),a=t(176),o=t(4585),c=t(4792),s=t(9230),r=t(184),l=function(e){var i=e.disabled,t=e.value,l=e.name,d=void 0===l?"number":l,_=e.Label,u=void 0===_?"":_,m=e.onChange,h=e.width,v=void 0===h?"200px":h,p=e.padding,f=e.margin,b=void 0===f?"10px":f,x=e.step,g=void 0===x?1:x,E=e.min,C=void 0===E?0:E,T=e.max,A=(0,s.$G)().t,S=(0,n.useCallback)((function(e){m({name:d,value:+e.target.value})}),[d,m]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(a.k,{direction:"column",width:v,padding:p,margin:b,children:[(0,r.jsx)(o.l,{children:A(u)}),(0,r.jsx)(c.Y2,{step:g,min:C,max:T,isDisabled:i,value:0|t,children:(0,r.jsx)(c.zu,{onChange:S})})]})})};i.Z=(0,n.memo)(l)},7595:function(e,i,t){var n=t(2791),a=t(9230),o=t(176),c=t(4585),s=t(6069),r=t(184),l=function(e){var i=e.disabled,t=e.value,l=e.name,d=e.Label,_=void 0===d?"":d,u=e.onChange,m=e.width,h=void 0===m?"200px":m,v=e.type,p=void 0===v?"text":v,f=e.placeHolder,b=e.padding,x=e.margin,g=void 0===x?"10px":x,E=e.className,C=void 0===E?"":E,T=e.required,A=void 0!==T&&T,S=(0,a.$G)().t,j=(0,n.useCallback)((function(e){u({name:l,value:e.target.value})}),[l,u]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(o.k,{direction:"column",width:h,padding:b,margin:g,children:[(0,r.jsx)(c.l,{children:S(_)}),(0,r.jsx)(s.I,{placeholder:f,size:"md",isDisabled:i,isRequired:A,onChange:j,width:"100%",className:C,value:t,type:p})]})})};i.Z=(0,n.memo)(l)},9461:function(e,i,t){t.r(i),t.d(i,{default:function(){return b}});var n=t(1413),a=t(2791),o=t(7595),c=t(1746),s=t(3388),r=t(4082),l=t(5057),d=t(8535),_=t(6888),u=t(898),m=t(184),h=function(e){var i=e.onChange,t=e.state,s=e.handleRootState,r=e.handleSelectWithLabelChange;return(0,a.useEffect)((function(){s((0,n.Z)((0,n.Z)({},t),{},{customer_invoice_item_size:+t.customer_invoice_item_width*+t.customer_invoice_item_height,customer_invoice_item_total:+t.customer_invoice_item_quantity*+t.customer_invoice_item_price*+t.customer_invoice_item_width*+t.customer_invoice_item_height}))}),[t.customer_invoice_item_width,t.customer_invoice_item_height,t.customer_invoice_item_quantity,t.customer_invoice_item_price]),(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(d.Z,{width:"100%",flexDirection:"column",margin:"0",padding:"0",children:[(0,m.jsxs)(d.Z,{margin:"0",padding:"0",children:[(0,m.jsx)(_.Z,{Api:"QUERY_PRINT_OPTIONS_LIST",onChange:r,value:t.customer_invoice_print_option_id,Label:"prntnm",name:"customer_invoice_print_option_id",withLabel:!0,fetchOnFirstRun:!0,selectLabelName:"print_name"}),(0,m.jsx)(_.Z,{Api:"QUERY_ITEMS_LIST",onChange:r,value:t.customer_invoice_item_id,Label:"itmnm",name:"customer_invoice_item_id",withLabel:!0,fetchOnFirstRun:!0,selectLabelName:"item_name"})]}),(0,m.jsxs)(d.Z,{margin:"0",padding:"0",children:[(0,m.jsx)(c.Z,{name:"customer_invoice_item_width",value:t.customer_invoice_item_width,Label:"wdth",onChange:i,width:"14%"}),(0,m.jsx)(c.Z,{name:"customer_invoice_item_height",value:t.customer_invoice_item_height,Label:"hght",onChange:i,width:"14%"}),(0,m.jsx)(c.Z,{name:"customer_invoice_item_size",value:t.customer_invoice_item_size,Label:"sz",onChange:i,disabled:!0,width:"14%"}),(0,m.jsx)(c.Z,{name:"customer_invoice_item_quantity",value:t.customer_invoice_item_quantity,Label:"qnty",onChange:i,width:"14%"}),(0,m.jsx)(c.Z,{name:"customer_invoice_item_price",value:t.customer_invoice_item_price,Label:"prc",onChange:i,width:"14%"}),(0,m.jsx)(c.Z,{name:"customer_invoice_item_total",value:t.customer_invoice_item_total,Label:"total",onChange:i,disabled:!0,width:"14%"}),(0,m.jsx)(o.Z,{name:"customer_invoice_item_notes",value:t.customer_invoice_item_notes,Label:"nts",onChange:i,width:"14%"})]})]})})},v=(0,a.memo)(h),p=[{title:"prntnm",width:"10%",dataIndex:"print_name"},{title:"itmnm",width:"10%",dataIndex:"item_name"},{title:"wdth",width:"10%",dataIndex:"customer_invoice_item_width"},{title:"hght",width:"10%",dataIndex:"customer_invoice_item_height"},{title:"sz",width:"10%",dataIndex:"customer_invoice_item_size"},{title:"qnty",width:"10%",dataIndex:"customer_invoice_item_quantity"},{title:"prc",width:"10%",dataIndex:"customer_invoice_item_price"},{title:"total",width:"10%",dataIndex:"customer_invoice_item_total"},{title:"nts",width:"10%",dataIndex:"customer_invoice_item_notes"}],f=function(){var e=(0,s.Z)({initialValues:{customer_id:0,customer_invoice_date:"",customer_invoice_items:[],query_status:"n",customer_invoice_total:0,customer_invoice_discount:0,customer_invoice_after_discount:0,customer_invoice_paid:0,customer_invoice_credit:0}}),i=e.state,t=e.onChange,h=e.resetForm,f=e.handleRootState,b=e.handleArrayChange,x=(0,s.Z)({initialValues:{customer_invoice_print_option_id:0,customer_invoice_item_id:0,customer_invoice_item_width:0,customer_invoice_item_height:0,customer_invoice_item_size:0,customer_invoice_item_quantity:0,customer_invoice_item_price:0,customer_invoice_item_total:0,customer_invoice_item_notes:"",item_name:"",print_name:""}}),g=x.state,E=x.onChange,C=x.handleRootState,T=x.handleSelectWithLabelChange,A=x.resetForm,S=(0,r.Z)({link:"POST_CUSTOMER_INVOICE_DETAILS",runOnSuccess:h}).setRow,j=(0,a.useCallback)((function(){b({name:"customer_invoice_items",value:g}),A()}),[g,b,A]),Z=(0,a.useCallback)((function(){S(i)}),[S,i]),L=[{icon:"fa-solid fa-broom",onClick:h}];return(0,a.useEffect)((function(){if(Array.isArray(i.customer_invoice_items)&&0!==i.customer_invoice_items.length){var e=0;i.customer_invoice_items.forEach((function(i){e+=i.customer_invoice_item_total})),t({name:"customer_invoice_total",value:e})}}),[i.customer_invoice_items,i.customer_invoice_total]),(0,a.useEffect)((function(){f((0,n.Z)((0,n.Z)({},i),{},{customer_invoice_after_discount:i.customer_invoice_total-i.customer_invoice_discount,customer_invoice_credit:i.customer_invoice_total-i.customer_invoice_discount-i.customer_invoice_paid}))}),[i.customer_invoice_total,i.customer_invoice_discount,i.customer_invoice_paid]),(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(d.Z,{flexDirection:"column",width:"100%",children:[(0,m.jsxs)(d.Z,{margin:"0",padding:"0",children:[(0,m.jsx)(_.Z,{Api:"QUERY_CUSTOMERS_LIST",onChange:t,value:i.customer_id,Label:"cstmr",name:"customer_id",fetchOnFirstRun:!0}),(0,m.jsx)(o.Z,{name:"customer_invoice_date",value:i.customer_invoice_date,Label:"dt",onChange:t,type:"date"})]}),(0,m.jsx)(v,{state:g,onChange:E,handleRootState:C,handleSelectWithLabelChange:T}),(0,m.jsx)(l.Z,{columns:p,dataSource:i.customer_invoice_items,actionColumn:!0,actionLabel:"Delete",hideTools:!1,onAdd:j,canAdd:!0,additionalButtons:L}),(0,m.jsxs)(d.Z,{width:"100%",justifyContent:"space-around",children:[(0,m.jsx)(c.Z,{name:"customer_invoice_total",disabled:!0,value:i.customer_invoice_total,Label:"total",width:"15%"}),(0,m.jsx)(c.Z,{name:"customer_invoice_discount",value:i.customer_invoice_discount,Label:"dscnt",onChange:t,width:"15%"}),(0,m.jsx)(c.Z,{name:"totalAfterDiscount",disabled:!0,value:i.customer_invoice_after_discount,Label:"Tlaftrdsnt",width:"15%"}),(0,m.jsx)(c.Z,{name:"customer_invoice_paid",value:i.customer_invoice_paid,Label:"paid",onChange:t,width:"15%"}),(0,m.jsx)(c.Z,{name:"customer_invoice_credit",disabled:!0,value:i.customer_invoice_credit,Label:"Crdt",width:"15%"}),(0,m.jsx)(u.Z,{label:"sv",width:"15%",height:"50%",margin:"30px 0",onClick:Z})]})]})})},b=(0,a.memo)(f)},8886:function(e,i,t){t.d(i,{P:function(){return b}});var n=t(1413),a=t(5987),o=t(9439),c=t(6992),s=t(7872),r=t(3765),l=t(184),d=["children","placeholder","className"],_=(0,s.G)((function(e,i){var t=e.children,o=e.placeholder,s=e.className,_=(0,a.Z)(e,d);return(0,l.jsxs)(r.m.select,(0,n.Z)((0,n.Z)({},_),{},{ref:i,className:(0,c.cx)("chakra-select",s),children:[o&&(0,l.jsx)("option",{value:"",children:o}),t]}))}));_.displayName="SelectField";var u=t(2657),m=t(9084),h=t(9592),v=t(2791),p=["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize"],f=["children"];var b=(0,s.G)((function(e,i){var t,s=(0,m.jC)("Select",e),d=(0,h.Lr)(e),v=d.rootProps,f=d.placeholder,b=d.icon,x=d.color,g=d.height,C=d.h,T=d.minH,A=d.minHeight,S=d.iconColor,j=d.iconSize,Z=function(e,i){for(var t={},n={},a=0,c=Object.entries(e);a<c.length;a++){var s=(0,o.Z)(c[a],2),r=s[0],l=s[1];i.includes(r)?t[r]=l:n[r]=l}return[t,n]}((0,a.Z)(d,p),h.oE),L=(0,o.Z)(Z,2),w=L[0],R=L[1],y=(0,u.Y)(R),O={width:"100%",height:"fit-content",position:"relative",color:x},I=(0,n.Z)((0,n.Z)({paddingEnd:"2rem"},s.field),{},{_focus:(0,n.Z)({zIndex:"unset"},null==(t=s.field)?void 0:t._focus)});return(0,l.jsxs)(r.m.div,(0,n.Z)((0,n.Z)((0,n.Z)({className:"chakra-select__wrapper",__css:O},w),v),{},{children:[(0,l.jsx)(_,(0,n.Z)((0,n.Z)({ref:i,height:null!=C?C:g,minH:null!=T?T:A,placeholder:f},y),{},{__css:I,children:e.children})),(0,l.jsx)(E,(0,n.Z)((0,n.Z)((0,n.Z)({"data-disabled":(0,c.PB)(y.disabled)},(S||x)&&{color:S||x}),{},{__css:s.icon},j&&{fontSize:j}),{},{children:b}))]}))}));b.displayName="Select";var x=function(e){return(0,l.jsx)("svg",(0,n.Z)((0,n.Z)({viewBox:"0 0 24 24"},e),{},{children:(0,l.jsx)("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})}))},g=(0,r.m)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),E=function(e){var i=e.children,t=void 0===i?(0,l.jsx)(x,{}):i,o=(0,a.Z)(e,f),c=(0,v.cloneElement)(t,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return(0,l.jsx)(g,(0,n.Z)((0,n.Z)({},o),{},{className:"chakra-select__icon-wrapper",children:(0,v.isValidElement)(t)?c:null}))};E.displayName="SelectIcon"}}]);
//# sourceMappingURL=461.b6b40114.chunk.js.map