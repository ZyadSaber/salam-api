"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[781],{7940:function(e,t,n){n.d(t,{Z:function(){return F}});var a=n(1413),i=n(9439),r=n(5987),o=n(2791),s=n(5057),l=n(890),d=n(9230),c=n(990),u=n(8874),h=n(2989),m=n(5473),f=n(634),p=n(6241),v=n(6582),x=n(7685),Z=n(9055),b=n(184),_=function(e){var t=e.children,n=e.visible,a=void 0!==n&&n,i=e.label,r=e.onClose,o=e.onOK,s=e.submitTitle,l=void 0===s?"smbt":s,_=e.width,k=void 0===_?"3xl":_,C=e.hideSaveButton,g=void 0!==C&&C,j=e.hideCloseButton,F=void 0!==j&&j,R=(0,d.$G)().t;return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(c.u_,{isOpen:a,onClose:r,size:k,children:[(0,b.jsx)(u.Z,{}),(0,b.jsxs)(h.h,{children:[(0,b.jsx)(m.x,{children:R(i)}),(0,b.jsx)(f.o,{}),(0,b.jsx)(p.f,{children:(0,b.jsx)(v.k,{w:"100%",padding:"5px",wrap:"wrap",children:t})}),(0,b.jsx)(x.m,{children:(0,b.jsxs)(v.k,{w:"25%",justifyContent:"space-around",children:[(0,b.jsx)(Z.z,{colorScheme:"red",mr:3,onClick:r,hidden:F,children:R("cls")}),(0,b.jsx)(Z.z,{colorScheme:"blue",onClick:o,hidden:g,children:R(l)})]})})]})]})})},k=(0,o.memo)(_),C=n(7262),g=["api","postApi","columns","ModalContent","onClick","fetchOnFirstRun","params","checkForParams"],j=function(e,t){var n=e.api,d=e.postApi,c=e.columns,u=e.ModalContent,h=e.onClick,m=e.fetchOnFirstRun,f=void 0!==m&&m,p=e.params,v=(e.checkForParams,(0,r.Z)(e,g)),x=(0,l.Z)({link:n,fetchOnFirstRun:f,params:p,checkForParams:!0}),Z=x.data,_=x.runFetch,j=x.loading,F=(0,C.Z)({api:d,runFetch:_}).onSaveAndInsertion,R=(0,o.useState)({}),w=(0,i.Z)(R,2),I=w[0],y=w[1],T=(0,o.useState)(!1),S=(0,i.Z)(T,2),P=S[0],q=S[1],N=(0,o.useCallback)((function(){y({query_status:"n"}),q(!0)}),[y]),O=(0,o.useCallback)((function(){y((0,a.Z)((0,a.Z)({},I),{},{query_status:"u"})),q(!0)}),[I,y]),A=(0,o.useCallback)((function(){q(!1)}),[]);return(0,o.useImperativeHandle)(t,(function(){return{runFetch:_}})),(0,b.jsxs)(b.Fragment,{children:[u&&(0,b.jsx)(k,{visible:P,onClose:A,hideCloseButton:!0,hideSaveButton:!0,label:"dtls",children:(0,b.jsx)(u,{onClose:A,selectedRow:I,refreshTable:_})}),(0,b.jsx)(s.Z,(0,a.Z)({dataSource:null===Z||void 0===Z?void 0:Z.data,columns:c,onAdd:N,onEdit:O,onDelete:function(){F((0,a.Z)((0,a.Z)({},I),{},{query_status:"d"}))},onSelectedRow:function(e){y(e),h&&h(e)},loading:j},v))]})},F=(0,o.memo)((0,o.forwardRef)(j))},6590:function(e,t,n){var a=n(4165),i=n(5861),r=n(2791);t.Z=function(){var e,t=(0,r.useRef)(),n=(0,r.useCallback)((function(n){return(e=e||(0,i.Z)((0,a.Z)().mark((function e(n){var i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(i=t.current)||void 0===i?void 0:i.runFetch(n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}),[t]);return{tableRef:t,fetchTableData:n}}},7262:function(e,t,n){var a=n(2791),i=n(4082);t.Z=function(e){var t=e.api,n=void 0===t?"":t,r=e.runFetch,o=(0,i.Z)({link:n,additionalFunctionToRun:r,method:"POST"}).setRow,s=(0,i.Z)({link:n,additionalFunctionToRun:r,method:"PUT"}).setRow,l=(0,i.Z)({link:n,additionalFunctionToRun:r,method:"Delete"}).setRow;return{onSaveAndInsertion:(0,a.useCallback)((function(e){"n"===e.query_status?o(e):"u"===e.query_status?s(e):"d"===e.query_status&&l(e)}),[o,s,l])}}},4082:function(e,t,n){var a=n(4165),i=n(5861),r=n(9439),o=n(2791),s=n(1227),l=n(399),d=n(8382);t.Z=function(e){var t,n=e.link,c=void 0===n?"":n,u=e.noAuthorization,h=void 0!==u&&u,m=e.additionalFunctionToRun,f=e.runOnSuccess,p=e.runOnFail,v=e.method,x=void 0===v?"POST":v,Z=(0,d.p)(),b="http://144.24.209.19:9090/api/".concat(l.Z[c]),_=(0,o.useState)(),k=(0,r.Z)(_,2),C=k[0],g=k[1],j=(0,s.Z)().authorization,F=(0,o.useCallback)((function(e){return(t=t||(0,i.Z)((0,a.Z)().mark((function e(t){var n,i,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!j&&!h){e.next=17;break}return n={method:x,headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(j)},body:JSON.stringify(t)},e.prev=2,e.next=5,fetch(b,n);case 5:return i=e.sent,e.next=8,i.json();case 8:return"success"===(r=e.sent).response?(Z({position:"top-right",title:"Success",description:"".concat(r.response),status:"success",duration:5e3,isClosable:!0}),f&&f()):(Z({position:"top-right",title:"Error",description:"".concat(r.message),status:"error",duration:9e3,isClosable:!0}),p&&p()),g(r),m&&m(),e.abrupt("return",r);case 15:e.prev=15,e.t0=e.catch(2);case 17:case"end":return e.stop()}}),e,null,[[2,15]])})))).apply(this,arguments)}),[m,j,x,h,p,f,Z,b]);return{success:C,setRow:(0,o.useCallback)((function(e){F(e)}),[F])}}},5614:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(2791),i=n(8535),r=n(9457),o=n(6888),s=n(6590),l=n(7940),d=n(3388),c=n(898),u=[{title:"dt",dataIndex:"date",width:"10%"},{title:"invoice_id",dataIndex:"invoice_id",width:"5%"},{title:"holder_name",dataIndex:"holder_name",width:"15%"},{title:"item_name",dataIndex:"item_name",width:"15%"},{title:"item_in",dataIndex:"item_in",width:"13%"},{title:"item_out",dataIndex:"item_out",width:"13%"},{title:"blnc",dataIndex:"balance",width:"13%"}],h=n(184),m=function(){var e=(0,d.Z)({initialValues:{date_from:"",date_to:"",item_id:""}}),t=e.state,n=e.onChange,m=(0,s.Z)(),f=m.tableRef,p=m.fetchTableData,v=(0,a.useCallback)((function(){p({item_id:t.item_id,date_from:t.date_from,date_to:t.date_to})}),[p,t.date_from,t.date_to,t.item_id]);return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(i.Z,{width:"100%",flexDirection:"column",children:[(0,h.jsxs)(i.Z,{width:"100%",children:[(0,h.jsx)(o.Z,{Label:"itm",fetchOnFirstRun:!0,name:"item_id",value:t.item_id,onChange:n,Api:"QUERY_ITEMS_LIST"}),(0,h.jsx)(r.Z,{name:"date_from",type:"date",Label:"frm",onChange:n}),(0,h.jsx)(r.Z,{name:"date_to",type:"date",Label:"to",onChange:n}),(0,h.jsx)(c.Z,{onClick:v,label:"search",width:"10%"})]}),(0,h.jsx)(l.Z,{ref:f,api:"QUERY_ITEM_SUMMARY_TABLE",columns:u,hideTools:!1,canExcel:!0,rowKey:"rowKey"})]})})},f=(0,a.memo)(m)},930:function(e,t,n){n.d(t,{l:function(){return m}});var a=n(1413),i=n(5987),r=n(9657),o=n(5597),s=n(2481),l=n(9592),d=n(1665),c=n(6992),u=n(184),h=["className","children","requiredIndicator","optionalIndicator"],m=(0,o.G)((function(e,t){var n,o=(0,s.mq)("FormLabel",e),m=(0,l.Lr)(e),p=(m.className,m.children),v=m.requiredIndicator,x=void 0===v?(0,u.jsx)(f,{}):v,Z=m.optionalIndicator,b=void 0===Z?null:Z,_=(0,i.Z)(m,h),k=(0,r.NJ)(),C=null!=(n=null==k?void 0:k.getLabelProps(_,t))?n:(0,a.Z)({ref:t},_);return(0,u.jsxs)(d.m.label,(0,a.Z)((0,a.Z)({},C),{},{className:(0,c.cx)("chakra-form__label",m.className),__css:(0,a.Z)({display:"block",textAlign:"start"},o),children:[p,(null==k?void 0:k.isRequired)?x:b]}))}));m.displayName="FormLabel";var f=(0,o.G)((function(e,t){var n=(0,r.NJ)(),i=(0,r.e)();if(!(null==n?void 0:n.isRequired))return null;var o=(0,c.cx)("chakra-form__required-indicator",e.className);return(0,u.jsx)(d.m.span,(0,a.Z)((0,a.Z)({},null==n?void 0:n.getRequiredIndicatorProps(e,t)),{},{__css:i.requiredIndicator,className:o}))}));f.displayName="RequiredIndicator"},9657:function(e,t,n){n.d(t,{NI:function(){return F},NJ:function(){return j},e:function(){return _}});var a=n(1413),i=n(5987),r=n(9439),o=n(9886),s=n(4591),l=n(5597),d=n(2481),c=n(9592),u=n(1665),h=n(6992),m=n(2791),f=n(184),p=["id","isRequired","isInvalid","isDisabled","isReadOnly"],v=["getRootProps","htmlProps"],x=(0,o.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),Z=(0,r.Z)(x,2),b=Z[0],_=Z[1],k=(0,o.k)({strict:!1,name:"FormControlContext"}),C=(0,r.Z)(k,2),g=C[0],j=C[1];var F=(0,l.G)((function(e,t){var n=(0,d.jC)("Form",e),o=function(e){var t=e.id,n=e.isRequired,o=e.isInvalid,l=e.isDisabled,d=e.isReadOnly,c=(0,i.Z)(e,p),u=(0,m.useId)(),f=t||"field-".concat(u),v="".concat(f,"-label"),x="".concat(f,"-feedback"),Z="".concat(f,"-helptext"),b=(0,m.useState)(!1),_=(0,r.Z)(b,2),k=_[0],C=_[1],g=(0,m.useState)(!1),j=(0,r.Z)(g,2),F=j[0],R=j[1],w=(0,m.useState)(!1),I=(0,r.Z)(w,2),y=I[0],T=I[1],S=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({id:Z},e),{},{ref:(0,s.lq)(t,(function(e){e&&R(!0)}))})}),[Z]),P=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({},e),{},{ref:t,"data-focus":(0,h.PB)(y),"data-disabled":(0,h.PB)(l),"data-invalid":(0,h.PB)(o),"data-readonly":(0,h.PB)(d),id:void 0!==e.id?e.id:v,htmlFor:void 0!==e.htmlFor?e.htmlFor:f})}),[f,l,y,o,d,v]),q=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({id:x},e),{},{ref:(0,s.lq)(t,(function(e){e&&C(!0)})),"aria-live":"polite"})}),[x]),N=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)((0,a.Z)({},e),c),{},{ref:t,role:"group"})}),[c]),O=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({},e),{},{ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!n,isInvalid:!!o,isReadOnly:!!d,isDisabled:!!l,isFocused:!!y,onFocus:function(){return T(!0)},onBlur:function(){return T(!1)},hasFeedbackText:k,setHasFeedbackText:C,hasHelpText:F,setHasHelpText:R,id:f,labelId:v,feedbackId:x,helpTextId:Z,htmlProps:c,getHelpTextProps:S,getErrorMessageProps:q,getRootProps:N,getLabelProps:P,getRequiredIndicatorProps:O}}((0,c.Lr)(e)),l=o.getRootProps,x=(o.htmlProps,(0,i.Z)(o,v)),Z=(0,h.cx)("chakra-form-control",e.className);return(0,f.jsx)(g,{value:x,children:(0,f.jsx)(b,{value:n,children:(0,f.jsx)(u.m.div,(0,a.Z)((0,a.Z)({},l({},t)),{},{className:Z,__css:n.container}))})})}));F.displayName="FormControl",(0,l.G)((function(e,t){var n=j(),i=_(),r=(0,h.cx)("chakra-form__helper-text",e.className);return(0,f.jsx)(u.m.div,(0,a.Z)((0,a.Z)({},null==n?void 0:n.getHelpTextProps(e,t)),{},{__css:i.helperText,className:r}))})).displayName="FormHelperText"}}]);
//# sourceMappingURL=781.b7a42755.chunk.js.map