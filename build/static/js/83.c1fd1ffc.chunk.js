"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[83],{8535:function(e,n,i){var a=i(9439),t=i(2791),l=i(176),o=i(184),r=function(e){var n=e.children,i=e.justifyContent,r=e.width,d=e.height,s=e.padding,c=void 0===s?"10px":s,u=e.margin,_=e.bordered,m=void 0!==_&&_,h=e.backgroundColor,v=e.borderColor,p=void 0===v?"#3c8dcf":v,f=e.borderWidth,b=void 0===f?"px":f,x=e.borderRadius,E=void 0===x?"5px":x,g=e.flexDirection,T=void 0===g?"row":g,A=e.textAlign,y=void 0===A?"":A,C=e.hidden,S=void 0!==C&&C,R=e.wrap,Z=(0,t.useState)(""),L=(0,a.Z)(Z,2),j=(L[0],L[1]);return(0,t.useEffect)((function(){m&&j("".concat(b," solid ").concat(p))}),[p,b,m]),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(l.k,{width:r,height:d,padding:c,margin:u,background:h,borderRadius:E,flexDirection:T,textAlign:y,justifyContent:i,hidden:S,wrap:R?"wrap":"",children:n})})};n.Z=(0,t.memo)(r)},1986:function(e,n,i){i.d(n,{Z:function(){return S}});var a=i(2791),t=i(9230),l=i(176),o=i(4585),r=i(1413),d=i(5987),s=i(9439),c=i(6992),u=i(7872),_=i(3765),m=i(184),h=["children","placeholder","className"],v=(0,u.G)((function(e,n){var i=e.children,a=e.placeholder,t=e.className,l=(0,d.Z)(e,h);return(0,m.jsxs)(_.m.select,(0,r.Z)((0,r.Z)({},l),{},{ref:n,className:(0,c.cx)("chakra-select",t),children:[a&&(0,m.jsx)("option",{value:"",children:a}),i]}))}));v.displayName="SelectField";var p=i(2657),f=i(9084),b=i(9592),x=["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize"],E=["children"];var g=(0,u.G)((function(e,n){var i,a=(0,f.jC)("Select",e),t=(0,b.Lr)(e),l=t.rootProps,o=t.placeholder,u=t.icon,h=t.color,E=t.height,g=t.h,T=t.minH,A=t.minHeight,C=t.iconColor,S=t.iconSize,R=function(e,n){for(var i={},a={},t=0,l=Object.entries(e);t<l.length;t++){var o=(0,s.Z)(l[t],2),r=o[0],d=o[1];n.includes(r)?i[r]=d:a[r]=d}return[i,a]}((0,d.Z)(t,x),b.oE),Z=(0,s.Z)(R,2),L=Z[0],j=Z[1],I=(0,p.Y)(j),O={width:"100%",height:"fit-content",position:"relative",color:h},P=(0,r.Z)((0,r.Z)({paddingEnd:"2rem"},a.field),{},{_focus:(0,r.Z)({zIndex:"unset"},null==(i=a.field)?void 0:i._focus)});return(0,m.jsxs)(_.m.div,(0,r.Z)((0,r.Z)((0,r.Z)({className:"chakra-select__wrapper",__css:O},L),l),{},{children:[(0,m.jsx)(v,(0,r.Z)((0,r.Z)({ref:n,height:null!=g?g:E,minH:null!=T?T:A,placeholder:o},I),{},{__css:P,children:e.children})),(0,m.jsx)(y,(0,r.Z)((0,r.Z)((0,r.Z)({"data-disabled":(0,c.PB)(I.disabled)},(C||h)&&{color:C||h}),{},{__css:a.icon},S&&{fontSize:S}),{},{children:u}))]}))}));g.displayName="Select";var T=function(e){return(0,m.jsx)("svg",(0,r.Z)((0,r.Z)({viewBox:"0 0 24 24"},e),{},{children:(0,m.jsx)("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})}))},A=(0,_.m)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),y=function(e){var n=e.children,i=void 0===n?(0,m.jsx)(T,{}):n,t=(0,d.Z)(e,E),l=(0,a.cloneElement)(i,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return(0,m.jsx)(A,(0,r.Z)((0,r.Z)({},t),{},{className:"chakra-select__icon-wrapper",children:(0,a.isValidElement)(i)?l:null}))};y.displayName="SelectIcon";var C=function(e){var n=e.width,i=void 0===n?"200px":n,a=e.Options,r=void 0===a?[{label:"",value:0}]:a,d=e.onChange,s=e.Label,c=e.value,u=void 0===c?0:c,_=e.name,h=e.withLabel,v=void 0!==h&&h,p=e.margin,f=void 0===p?"10px":p,b=e.padding,x=e.placeholder,E=void 0===x?"Select":x,T=e.selectLabelName,A=void 0===T?"label_select":T,y=(0,t.$G)().t;return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(l.k,{direction:"column",width:i,padding:b,margin:f,children:[(0,m.jsx)(o.l,{fontSize:"md",as:"b",margin:"0 0 5px",children:y(s)}),(0,m.jsx)(g,{placeholder:y(E),onChange:function(e){Array.isArray(r)&&r.map((function(n){n.value===+e.target.value&&d(v?{value:n.value,selectLabelName:A,label:n.label,name:_}:{value:n.value,name:_})}))},children:Array.isArray(r)?r.map((function(e){return(0,m.jsxs)("option",{value:e.value,selected:u===e.value&&!0,children:[" ",y(e.label)]},e.value)})):(0,m.jsx)("option",{disabled:!0,children:y("No data")})})]})})},S=(0,a.memo)(C)},6888:function(e,n,i){var a=i(2791),t=i(1986),l=i(3838),o=i(184),r=function(e){var n=e.width,i=e.Api,a=e.onChange,r=e.Label,d=e.name,s=void 0===d?"":d,c=e.value,u=void 0===c?0:c,_=e.withLabel,m=void 0!==_&&_,h=e.padding,v=e.margin,p=e.params,f=e.fetchOnFirstRun,b=void 0!==f&&f,x=e.selectLabelName,E=void 0===x?"label_select":x,g=(0,l.Z)({link:i,fetchOnFirstRun:b,params:p}).data;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(t.Z,{Options:g,onChange:a,Label:r,value:u,name:s,width:n,withLabel:m,margin:v,padding:h,selectLabelName:E})})};n.Z=(0,a.memo)(r)},5057:function(e,n,i){i.d(n,{Z:function(){return C}});var a=i(9439),t=i(2791),l=i(184),o=function(e){var n=e.icon,i=e.onClick,a=e.disabled,t=void 0!==a&&a,o=e.width,r=void 0===o?"30px":o,d=e.height,s=void 0===d?"30px":d,c=e.color,u=e.margin,_=void 0===u?"10px":u,m=e.padding,h=e.hidden,v=void 0!==h&&h;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("button",{style:{border:"none",width:r,height:s,backgroundColor:c,padding:m,margin:_,borderRadius:"20px"},hidden:v,onClick:i,disabled:t,children:(0,l.jsx)("i",{className:n})})})},r=(0,t.memo)(o),d=i(898),s=i(4880),c=i(4045),u=i(9230),_=i(1146),m=i.n(_),h=i(1900),v=i(9229),p=i(3676),f=i(4087),b=i(2732),x=i(553),E=i(3129),g=i(5237),T=i(8500),A=i(4004),y=i(8535),C=function(e){var n=e.dataSource,i=e.height,o=void 0===i?"300px":i,_=e.rowKey,C=void 0===_?"rowKey":_,S=e.columns,R=e.hideTools,Z=void 0===R||R,L=e.canEdit,j=void 0!==L&&L,I=e.canAdd,O=void 0!==I&&I,P=e.canDelete,N=void 0!==P&&P,k=e.canExcel,w=void 0!==k&&k,U=e.onAdd,Y=e.onEdit,D=e.onDelete,M=e.actionColumn,B=void 0!==M&&M,F=e.onAction,Q=e.actionLabel,q=void 0===Q?"":Q,H=e.onSelectedRow,G=e.label,z=e.canPrint,V=void 0!==z&&z,J=(e.onPrint,e.additionalButtons),W=e.onSave,K=e.canSave,$=void 0!==K&&K,X=e.width,ee=void 0===X?"100%":X,ne=e.margin,ie=void 0===ne?"":ne,ae=e.padding,te=void 0===ae?"":ae,le=e.loading,oe=void 0!==le&&le,re=e.onDoubleClick,de=void 0===re?function(e){console.log(e)}:re,se=(0,s.TH)().pathname,ce=(0,u.$G)().t,ue=(0,t.useState)(),_e=(0,a.Z)(ue,2),me=_e[0],he=_e[1],ve=(0,t.useCallback)((function(e){return function(){H&&H(e),he(e)}}),[H]),pe=(0,t.useCallback)((function(e){return function(){de&&de(e),he(e)}}),[de]),fe=(0,t.useCallback)((function(){var e=se.replace("/",""),i=c.P6.book_new(),a=c.P6.json_to_sheet(n);c.P6.book_append_sheet(i,a,e),c.NC(i,"".concat(e," ").concat((new Date).toUTCString(),".xlsx"))}),[n,se]),be=(0,t.useRef)();return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(h.x,{width:ee,padding:te,margin:ie,children:[G&&(0,l.jsx)(v.x,{width:"100%",textAlign:"center",marginBottom:"7px",fontSize:"md",fontWeight:"bold",children:ce(G)}),(0,l.jsxs)(y.Z,{width:"100%",padding:"0",margin:"5px 0",justifyContent:"center",hidden:Z,children:[(0,l.jsx)(r,{icon:"fa-sharp fa-solid fa-plus",onClick:U,hidden:!O}),(0,l.jsx)(r,{icon:"fa-sharp fa-solid fa-pen-clip",onClick:Y,hidden:!j,disabled:!me}),(0,l.jsx)(r,{icon:"fa-sharp fa-solid fa-trash",onClick:D,hidden:!N,disabled:!me}),J&&J.map((function(e){return(0,l.jsx)(r,{icon:e.icon,onClick:e.onClick,disabled:e.disabled,hidden:!1})})),(0,l.jsx)(r,{icon:"fa-solid fa-floppy-disk",onClick:W,hidden:!$,disabled:!$}),(0,l.jsx)(m(),{trigger:function(){return(0,l.jsx)(r,{icon:"fa-solid fa-print",hidden:!V,disabled:!V})},content:function(){return be.current},documentTitle:"dd"}),(0,l.jsx)(r,{icon:"fa-sharp fa-regular fa-file-excel",onClick:fe,hidden:!w,disabled:!w})]}),(0,l.jsx)(p.O,{isLoaded:!oe,fadeDuration:0,children:(0,l.jsxs)(f.xu,{overflowY:"auto",height:o,children:[(0,l.jsxs)(b.i,{ref:be,children:[(0,l.jsx)(x.h,{top:0,position:"sticky",bgColor:"#3edae6",children:(0,l.jsxs)(E.Tr,{children:[S.map((function(e){return(0,l.jsx)(g.Th,{maxWidth:e.width,minWidth:e.width,children:ce(e.title)})})),(0,l.jsx)(g.Th,{hidden:!B,children:ce("actn")})]})}),(0,l.jsx)(T.p,{children:null===n||void 0===n?void 0:n.map((function(e){return(0,l.jsxs)(E.Tr,{onClick:ve(e),onDoubleClick:pe(e),background:"".concat(me===e?"#dbffbf":""),children:[S.map((function(n){return(0,l.jsx)(A.Td,{maxWidth:n.width,minWidth:n.width,children:e[n.dataIndex]})})),(0,l.jsx)(A.Td,{hidden:!B,children:(0,l.jsx)(d.Z,{label:q,onClick:function(){F(e)}})})]},e[C])}))})]}),!Array.isArray(n)||0===n.length&&!oe?(0,l.jsx)(y.Z,{justifyContent:"center",width:"100%",children:(0,l.jsx)(v.x,{as:"b",fontSize:"md",color:"red",children:"No Data"})}):(0,l.jsx)(l.Fragment,{})]})})]})})}},399:function(e,n){n.Z={QUERY_CUSTOMER_TABLE_DATA:"basic_data/customers/customers_table_data",POST_CUSTOMER_TABLE_DATA:"basic_data/customers/customers_table_data_dml",QUERY_SUPPLIER_TABLE_DATA:"basic_data/suppliers/suppliers_table_data",POST_CUSTOMER_INVOICE_DETAILS:"invoices/customer_invoice/new_customer_invoice",POST_EMPLOYEE_ATTENDANCE:"employeesData/employee_attendance_dml",POST_EMPLOYEE_LEAVING:"employeesData/employee_leaving_dml",QUERY_EMPLOYEES_TABLE_DATA:"employees/employee_data/employee_table_data",POST_EMPLOYEES_TABLE_DATA:"employees/employee_data/employee_table_data_dml",QUERY_INVOICE_DETAIL_TABLE_DATA:"invoices/invoice_search/customer_supplier_invoice_detail_table",QUERY_INVOICE_MASTER_TABLE_DATA:"invoices/invoice_search/customer_supplier_invoice_main_table",QUERY_CUSTOMERS_INVOICES_FOT_TODAY:"invoices/invoice_search/customer_invoices_for_today",QUERY_SUPPLIERS_INVOICES_FOT_TODAY:"invoices/invoice_search/supplier_invoices_for_today",QUERY_ITEMS_TABLE_DATA:"basic_data/items/items_table_data",POST_ITEMS_TABLE_DATA:"basic_data/items/items_table_data_dml",QUERY_PRINT_OPTIONS_TABLE_DAT:"basic_data/print_options/print_options_table_data",POST_PRINT_OPTIONS_TABLE_DATA:"basic_data/print_options/print_options_table_data_dml",USER_LOG_IN:"auth_security/sign_in",POST_SUPPLIER_INVOICE:"invoices/supplier_invoice/new_supplier_invoice",QUERY_LABELS:"get_labels",QUERY_CHUNK_LABELS:"get_chunk_labels",QUERY_EMPLOYEE_NAME_LIST:"employeesData/pop_employee_name",QUERY_CUSTOMER_AND_SUPPLIER_LIST:"invoices/invoice_search/customer_supplier_list",QUERY_SUPPLIER_LIST:"basic_data/suppliers/suppliers_list",QUERY_CUSTOMERS_LIST:"basic_data/customers/customers_list",QUERY_ITEMS_LIST:"basic_data/items/items_list",QUERY_PRINT_OPTIONS_LIST:"basic_data/print_options/print_options_lins",QUERY_EMPLOYEE_SHEET_SALARY:"employeesData/employee_sheet",QUERY_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_and_expenses/casher_receipt_voucher/main_table",POST_CASHER_RECEIPT_VOUCHER_TABLE_DATA:"income_and_expenses/casher_receipt_voucher/main_table_dml",QUERY_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_and_expenses/casher_payment_voucher/main_table",POST_CASHER_PAYMENT_VOUCHER_TABLE_DATA:"income_and_expenses/casher_payment_voucher/main_table_dml",QUERY_MAIN_CHART_DATA:"home/dash_board_get_data",QUERY_EXPENSES_TYPES_TABLE_DATA:"basic_data/expenses_type/expenses_type_table_data",POST_EXPENSES_TYPES_TABLE_DATA:"basic_data/expenses_type/expenses_type_table_data_dml",GET_PRIMARY_IMAGE:"application_logo/primary_logo",QUERY_INVOICES_CHART_DATA:"charts/invoices_query",QUERY_USERS_TABLE_DATA:"auth_security/users_info",POST_USERS_TABLE_DATA:"auth_security/users_info_dml",QUERY_PAGE_NAME_MAIN_TABLE:"system_tools/page_name/page_name_table_data",POST_PAGE_NAME_MAIN_TABLE:"system_tools/page_name/page_name_table_data_dml",QUERY_CUSTOMER_SUMMARY_TABLE:"system_reports/customer_summary_table",QUERY_SUPPLIER_SUMMARY_TABLE:"system_reports/supplier_summary_table",QUERY_ITEM_SUMMARY_TABLE:"system_reports/items_summary_table",QUERY_DAILY_SUMMARY_TABLE:"system_reports/daily_summary_table",QUERY_ACCOUNTS_SUMMARY_TABLE:"system_reports/accounts_summary_table"}},3838:function(e,n,i){var a=i(4165),t=i(5861),l=i(9439),o=i(2791),r=i(399),d=i(1227),s=i(1295);n.Z=function(e){var n=e.link,i=void 0===n?"":n,c=e.fetchOnFirstRun,u=(e.refreshTimeout,e.params),_=e.noAuthorization,m=void 0!==_&&_,h=(0,s.p)(),v=(0,d.Z)().authorization,p="http://192.168.1.250:5000/api/".concat(r.Z[i]),f=(0,o.useState)(void 0),b=(0,l.Z)(f,2),x=b[0],E=b[1],g=(0,o.useState)(!1),T=(0,l.Z)(g,2),A=T[0],y=T[1],C=(0,o.useCallback)((0,t.Z)((0,a.Z)().mark((function e(){var n,i,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y(!0),!v&&!m){e.next=11;break}return n={headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(v)}},e.next=5,fetch("".concat(p,"?").concat(new URLSearchParams(u)),n);case 5:return i=e.sent,y(!1),e.next=9,i.json();case 9:t=e.sent,E(t);case 11:case"end":return e.stop()}}),e)}))),[v,m,u,p]),S=(0,o.useCallback)((function(){c&&C()}),[c,C]);(0,o.useEffect)((function(){c&&C()}),[c,C,p,u,S]),(0,o.useEffect)((function(){x&&x.response&&h({position:"top-right",title:"error",description:"".concat(JSON.stringify(x.response)),status:"error",duration:5e3,isClosable:!0})}),[x,h]);var R=(0,o.useCallback)((function(){C()}),[C]);return{data:x,runFetch:R,setData:E,loading:A}}},3388:function(e,n,i){i.d(n,{Z:function(){return s}});var a=i(3433),t=i(4942),l=i(1413),o=i(9439),r=i(2791),d=function(e){var n=(0,r.useRef)();return(0,r.useEffect)((function(){n.current=e})),n.current},s=function(e){var n=e.initialValues,i=(0,r.useState)(n),s=(0,o.Z)(i,2),c=s[0],u=s[1],_=(0,r.useRef)(!1),m=d(n),h=(0,r.useCallback)((function(){return!Object.is(JSON.stringify(m),JSON.stringify(n))}),[n,m]);(0,r.useEffect)((function(){h()&&u((0,l.Z)({},n))}),[h,n]);var v=(0,r.useCallback)((function(){_.current=!1,u((function(){return n}))}),[n]);(0,r.useEffect)((function(){return v}),[]);var p=(0,r.useCallback)((function(e){var n=e.name,i=e.value;u((0,l.Z)((0,l.Z)({},c),{},(0,t.Z)({},n,i)))}),[c]),f=(0,r.useCallback)((function(e){u(e)}),[]),b=(0,r.useCallback)((function(e){var n;u((0,l.Z)((0,l.Z)({},c),{},(n={},(0,t.Z)(n,e.name,e.value),(0,t.Z)(n,e.selectLabelName,e.label),n)))}),[c]),x=(0,r.useCallback)((function(e){var n=e.name,i=e.value;u((0,l.Z)((0,l.Z)({},c),{},(0,t.Z)({},n,[].concat((0,a.Z)(c[n]),[i]))))}),[c]);return{state:c,onChange:p,resetForm:v,handleRootState:f,handleSelectWithLabelChange:b,handleArrayChange:x}}},7595:function(e,n,i){var a=i(2791),t=i(9230),l=i(176),o=i(4585),r=i(6069),d=i(184),s=function(e){var n=e.disabled,i=e.value,s=e.name,c=e.Label,u=void 0===c?"":c,_=e.onChange,m=e.width,h=void 0===m?"200px":m,v=e.type,p=void 0===v?"text":v,f=e.placeHolder,b=e.padding,x=e.margin,E=void 0===x?"10px":x,g=e.className,T=void 0===g?"":g,A=e.required,y=void 0!==A&&A,C=(0,t.$G)().t,S=(0,a.useCallback)((function(e){_({name:s,value:e.target.value})}),[s,_]);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(l.k,{direction:"column",width:h,padding:b,margin:E,children:[(0,d.jsx)(o.l,{children:C(u)}),(0,d.jsx)(r.I,{placeholder:f,size:"md",isDisabled:n,isRequired:y,onChange:S,width:"100%",className:T,value:i,type:p})]})})};n.Z=(0,a.memo)(s)},7083:function(e,n,i){i.r(n),i.d(n,{default:function(){return g}});var a=i(2791),t=i(5057),l=i(6888),o=i(1986),r=i(184),d=function(e){var n=e.width,i=void 0===n?"100px":n,t=e.onChange,l=e.Label,d=e.value,s=void 0===d?0:d,c=e.name,u=e.withLabel,_=void 0!==u&&u,m=e.margin,h=void 0===m?"10px":m,v=e.padding,p=(0,a.useCallback)((function(){for(var e=[],n=1;n<=12;n++)e.push({label:n,value:n});return e}),[]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o.Z,{name:c,withLabel:_,margin:h,padding:v,value:s,onChange:t,Label:l,width:i,Options:p()})})},s=(0,a.memo)(d),c=function(e){var n=e.width,i=void 0===n?"200px":n,t=e.onChange,l=e.Label,d=e.value,s=void 0===d?0:d,c=e.name,u=e.withLabel,_=void 0!==u&&u,m=e.margin,h=void 0===m?"10px":m,v=e.padding,p=e.range,f=void 0===p?5:p,b=(0,a.useCallback)((function(){for(var e=(new Date).getFullYear(),n=[],i=e-f;i<=e;i++)n.push({label:i,value:i});return n}),[f]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o.Z,{name:c,withLabel:_,margin:h,padding:v,value:s,onChange:t,Label:l,width:i,Options:b()})})},u=(0,a.memo)(c),_=i(8535),m=i(3388),h=[{title:"dt",dataIndex:"date",width:20},{title:"atndnctm",dataIndex:"attendance_time",width:17},{title:"ltm",dataIndex:"late_time",width:15},{title:"ltrsn",dataIndex:"late_reason",width:15},{title:"lvngtm",dataIndex:"leaving_time",width:20},{title:"ovrtm",dataIndex:"over_time",width:20},{title:"erlytm",dataIndex:"early_time",width:20},{title:"nts",dataIndex:"notes",width:20}],v=i(3838),p=i(898),f=function(e){var n=e.onClick;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(p.Z,{label:"search",height:"50%",additionalStyle:"top: 50%, position: relative;",onClick:n})})},b=(0,a.memo)(f),x=i(7595),E=function(){var e,n=(0,m.Z)({initialValues:{employee_id:""}}),i=n.state,a=n.onChange,o=(0,v.Z)({link:"QUERY_EMPLOYEE_SHEET_SALARY",params:{employee_id:i.employee_id,year:i.year,month:i.month}}),d=o.data,c=o.runFetch;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(_.Z,{flexDirection:"column",padding:"0",margin:"0",width:"100%",children:[(0,r.jsxs)(_.Z,{width:"100%",margin:"0",padding:"0",bordered:!0,children:[(0,r.jsx)(l.Z,{Api:"QUERY_EMPLOYEE_NAME_LIST",name:"employee_id",Label:"emply",onChange:a,fetchOnFirstRun:!0,value:i.employee_id}),(0,r.jsx)(s,{name:"month",Label:"mnth",onChange:a,value:i.month}),(0,r.jsx)(u,{name:"year",Label:"yr",onChange:a,value:i.year,width:"15%",range:4}),(0,r.jsx)(b,{onClick:c})]}),(0,r.jsx)(t.Z,{dataSource:null===d||void 0===d?void 0:d.late_cost,columns:h,hideTools:!1,canPrint:!0}),(0,r.jsxs)(_.Z,{width:"100%",margin:"0",padding:"0",justifyContent:"space-around",children:[(0,r.jsx)(x.Z,{value:null===d||void 0===d?void 0:d.salary,Label:"slry",disabled:!0}),(0,r.jsx)(x.Z,{value:null===d||void 0===d?void 0:d.total_late_time,Label:"tltm",disabled:!0}),(0,r.jsx)(x.Z,{value:null===d||void 0===d?void 0:d.total_over_time,Label:"tlvrtm",disabled:!0}),(0,r.jsx)(x.Z,{value:null===d||void 0===d?void 0:d.total_early_leaving,Label:"tlrlylvng",disabled:!0}),(0,r.jsx)(x.Z,{value:null===d||void 0===d?void 0:d.late_cost,Label:"ltcs",disabled:!0}),(0,r.jsx)(x.Z,{value:null===d||void 0===d?void 0:d.over_time_cost,Label:"ovrtmcst",disabled:!0}),(0,r.jsx)(x.Z,{value:null===d||void 0===d||null===(e=d.net_data)||void 0===e?void 0:e.salary,Label:"ntslry",disabled:!0})]})]})})},g=(0,a.memo)(E)},4585:function(e,n,i){i.d(n,{l:function(){return m}});var a=i(1413),t=i(5987),l=i(2701),o=i(7872),r=i(9084),d=i(9592),s=i(3765),c=i(6992),u=i(184),_=["className","children","requiredIndicator","optionalIndicator"],m=(0,o.G)((function(e,n){var i,o=(0,r.mq)("FormLabel",e),m=(0,d.Lr)(e),v=(m.className,m.children),p=m.requiredIndicator,f=void 0===p?(0,u.jsx)(h,{}):p,b=m.optionalIndicator,x=void 0===b?null:b,E=(0,t.Z)(m,_),g=(0,l.NJ)(),T=null!=(i=null==g?void 0:g.getLabelProps(E,n))?i:(0,a.Z)({ref:n},E);return(0,u.jsxs)(s.m.label,(0,a.Z)((0,a.Z)({},T),{},{className:(0,c.cx)("chakra-form__label",m.className),__css:(0,a.Z)({display:"block",textAlign:"start"},o),children:[v,(null==g?void 0:g.isRequired)?f:x]}))}));m.displayName="FormLabel";var h=(0,o.G)((function(e,n){var i=(0,l.NJ)(),t=(0,l.e)();if(!(null==i?void 0:i.isRequired))return null;var o=(0,c.cx)("chakra-form__required-indicator",e.className);return(0,u.jsx)(s.m.span,(0,a.Z)((0,a.Z)({},null==i?void 0:i.getRequiredIndicatorProps(e,n)),{},{__css:t.requiredIndicator,className:o}))}));h.displayName="RequiredIndicator"},2657:function(e,n,i){i.d(n,{K:function(){return c},Y:function(){return s}});var a=i(1413),t=i(5987),l=i(2701),o=i(6992),r=["isDisabled","isInvalid","isReadOnly","isRequired"],d=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function s(e){var n=c(e),i=n.isDisabled,l=n.isInvalid,d=n.isReadOnly,s=n.isRequired,u=(0,t.Z)(n,r);return(0,a.Z)((0,a.Z)({},u),{},{disabled:i,readOnly:d,required:s,"aria-invalid":(0,o.Qm)(l),"aria-required":(0,o.Qm)(s),"aria-readonly":(0,o.Qm)(d)})}function c(e){var n,i,r,s=(0,l.NJ)(),c=e.id,u=e.disabled,_=e.readOnly,m=e.required,h=e.isRequired,v=e.isInvalid,p=e.isReadOnly,f=e.isDisabled,b=e.onFocus,x=e.onBlur,E=(0,t.Z)(e,d),g=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==s?void 0:s.hasFeedbackText)&&(null==s?void 0:s.isInvalid)&&g.push(s.feedbackId),(null==s?void 0:s.hasHelpText)&&g.push(s.helpTextId),(0,a.Z)((0,a.Z)({},E),{},{"aria-describedby":g.join(" ")||void 0,id:null!=c?c:null==s?void 0:s.id,isDisabled:null!=(n=null!=u?u:f)?n:null==s?void 0:s.isDisabled,isReadOnly:null!=(i=null!=_?_:p)?i:null==s?void 0:s.isReadOnly,isRequired:null!=(r=null!=m?m:h)?r:null==s?void 0:s.isRequired,isInvalid:null!=v?v:null==s?void 0:s.isInvalid,onFocus:(0,o.v0)(null==s?void 0:s.onFocus,b),onBlur:(0,o.v0)(null==s?void 0:s.onBlur,x)})}},2701:function(e,n,i){i.d(n,{NI:function(){return C},NJ:function(){return y},e:function(){return E}});var a=i(1413),t=i(5987),l=i(9439),o=i(9886),r=i(4591),d=i(7872),s=i(9084),c=i(9592),u=i(3765),_=i(6992),m=i(2791),h=i(184),v=["id","isRequired","isInvalid","isDisabled","isReadOnly"],p=["getRootProps","htmlProps"],f=(0,o.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),b=(0,l.Z)(f,2),x=b[0],E=b[1],g=(0,o.k)({strict:!1,name:"FormControlContext"}),T=(0,l.Z)(g,2),A=T[0],y=T[1];var C=(0,d.G)((function(e,n){var i=(0,s.jC)("Form",e),o=function(e){var n=e.id,i=e.isRequired,o=e.isInvalid,d=e.isDisabled,s=e.isReadOnly,c=(0,t.Z)(e,v),u=(0,m.useId)(),h=n||"field-".concat(u),p="".concat(h,"-label"),f="".concat(h,"-feedback"),b="".concat(h,"-helptext"),x=(0,m.useState)(!1),E=(0,l.Z)(x,2),g=E[0],T=E[1],A=(0,m.useState)(!1),y=(0,l.Z)(A,2),C=y[0],S=y[1],R=(0,m.useState)(!1),Z=(0,l.Z)(R,2),L=Z[0],j=Z[1],I=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({id:b},e),{},{ref:(0,r.lq)(n,(function(e){e&&S(!0)}))})}),[b]),O=(0,m.useCallback)((function(){var e,n,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({},i),{},{ref:t,"data-focus":(0,_.PB)(L),"data-disabled":(0,_.PB)(d),"data-invalid":(0,_.PB)(o),"data-readonly":(0,_.PB)(s),id:null!=(e=i.id)?e:p,htmlFor:null!=(n=i.htmlFor)?n:h})}),[h,d,L,o,s,p]),P=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({id:f},e),{},{ref:(0,r.lq)(n,(function(e){e&&T(!0)})),"aria-live":"polite"})}),[f]),N=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)((0,a.Z)({},e),c),{},{ref:n,role:"group"})}),[c]),k=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!i,isInvalid:!!o,isReadOnly:!!s,isDisabled:!!d,isFocused:!!L,onFocus:function(){return j(!0)},onBlur:function(){return j(!1)},hasFeedbackText:g,setHasFeedbackText:T,hasHelpText:C,setHasHelpText:S,id:h,labelId:p,feedbackId:f,helpTextId:b,htmlProps:c,getHelpTextProps:I,getErrorMessageProps:P,getRootProps:N,getLabelProps:O,getRequiredIndicatorProps:k}}((0,c.Lr)(e)),d=o.getRootProps,f=(o.htmlProps,(0,t.Z)(o,p)),b=(0,_.cx)("chakra-form-control",e.className);return(0,h.jsx)(A,{value:f,children:(0,h.jsx)(x,{value:i,children:(0,h.jsx)(u.m.div,(0,a.Z)((0,a.Z)({},d({},n)),{},{className:b,__css:i.container}))})})}));C.displayName="FormControl",(0,d.G)((function(e,n){var i=y(),t=E(),l=(0,_.cx)("chakra-form__helper-text",e.className);return(0,h.jsx)(u.m.div,(0,a.Z)((0,a.Z)({},null==i?void 0:i.getHelpTextProps(e,n)),{},{__css:t.helperText,className:l}))})).displayName="FormHelperText"},6069:function(e,n,i){i.d(n,{I:function(){return m}});var a=i(1413),t=i(5987),l=i(2657),o=i(7872),r=i(9084),d=i(9592),s=i(3765),c=i(6992),u=i(184),_=["htmlSize"],m=(0,o.G)((function(e,n){var i=e.htmlSize,o=(0,t.Z)(e,_),m=(0,r.jC)("Input",o),h=(0,d.Lr)(o),v=(0,l.Y)(h),p=(0,c.cx)("chakra-input",e.className);return(0,u.jsx)(s.m.input,(0,a.Z)((0,a.Z)({size:i},v),{},{__css:m.field,ref:n,className:p}))}));m.displayName="Input",m.id="Input"}}]);
//# sourceMappingURL=83.c1fd1ffc.chunk.js.map