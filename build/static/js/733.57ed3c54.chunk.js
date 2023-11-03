"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[733],{1489:function(e,n,a){var t=a(1413),r=a(5987),i=a(2791),l=a(898),o=a(184),d=["onOK","width","label"],s=function(e){var n=e.onOK,a=e.width,i=void 0===a?"40%":a,s=(e.label,(0,r.Z)(e,d));return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(l.Z,(0,t.Z)({onClick:n,label:"sv",width:i},s))})};n.Z=(0,i.memo)(s)},3388:function(e,n,a){a.d(n,{Z:function(){return s}});var t=a(3433),r=a(4942),i=a(1413),l=a(9439),o=a(2791),d=function(e){var n=(0,o.useRef)();return(0,o.useEffect)((function(){n.current=e})),n.current},s=function(e){var n=e.initialValues,a=(0,o.useState)(n),s=(0,l.Z)(a,2),u=s[0],c=s[1],h=(0,o.useRef)(!1),f=d(n),m=(0,o.useCallback)((function(){return!Object.is(JSON.stringify(f),JSON.stringify(n))}),[n,f]);(0,o.useEffect)((function(){m()&&c((0,i.Z)({},n))}),[m,n]);var p=(0,o.useCallback)((function(){h.current=!1,c((function(){return n}))}),[n]);(0,o.useEffect)((function(){return p}),[]);var v=(0,o.useCallback)((function(e){var n=e.name,a=e.value;c((0,i.Z)((0,i.Z)({},u),{},(0,r.Z)({},n,a)))}),[u]),Z=(0,o.useCallback)((function(e){c((0,i.Z)((0,i.Z)({},u),e))}),[u]),g=(0,o.useCallback)((function(e){var n;c((0,i.Z)((0,i.Z)({},u),{},(n={},(0,r.Z)(n,e.name,e.value),(0,r.Z)(n,e.selectLabelName,e.label),n)))}),[u]),b=(0,o.useCallback)((function(e){var n=e.name,a=e.value;c((0,i.Z)((0,i.Z)({},u),{},(0,r.Z)({},n,[].concat((0,t.Z)(u[n]),[a]))))}),[u]);return{state:u,onChange:v,resetForm:p,handleRootState:c,handleSelectWithLabelChange:g,handleArrayChange:b,handleMultiInput:Z}}},1561:function(e,n,a){var t=a(2791),r=a(8382);n.Z=function(e){var n=e.validateFelids,a=e.functionToRun,i=e.stateToValidate,l=(0,r.p)();return(0,t.useCallback)((function(){var e=[];n.forEach((function(n){void 0===i[n]||i[n]||e.push(n)})),0!==e.length?l({position:"top-right",title:"Error",description:"\n      Make sure to fill this required fields\n      ".concat(e.toString(),"\n      "),status:"info",duration:5e3,isClosable:!0}):a()}),[a,i,l,n])}},9457:function(e,n,a){a.d(n,{Z:function(){return p}});var t,r=a(1413),i=a(5987),l=a(2791),o=a(9230),d=a(6582),s=a(930),u=a(168),c=a(225).Z.input(t||(t=(0,u.Z)(["\nbackground: #fdfdfd;\nborder: 0.5px solid #cbd5e0;\nheight: 100%;\nwidth: 100%;\nborder-radius: 7px;\npadding: 0 16px;\n"]))),h=a(184),f=["disabled","value","name","label","onChange","height","width","type","placeHolder","padding","margin","className","required"],m=function(e){var n=e.disabled,a=e.value,t=e.name,u=e.label,m=void 0===u?"":u,p=e.onChange,v=e.height,Z=void 0===v?"65px":v,g=e.width,b=void 0===g?"200px":g,x=e.type,C=void 0===x?"text":x,k=e.placeHolder,_=e.padding,I=e.margin,P=void 0===I?"10px":I,F=e.className,N=void 0===F?"":F,R=e.required,j=(0,i.Z)(e,f),w=(0,o.$G)().t,T=(0,l.useCallback)((function(e){p({name:t,value:e.target.value})}),[t,p]);return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(d.k,{direction:"column",width:b,padding:_,margin:P,height:Z,children:[(0,h.jsx)(s.l,{children:w(m)}),(0,h.jsx)(c,(0,r.Z)({placeholder:k,disabled:n,required:R,onChange:T,width:"100%",className:N,value:a,type:C},j))]})})},p=(0,l.memo)(m)},3733:function(e,n,a){a.r(n),a.d(n,{default:function(){return v}});var t=a(2791),r=a(1413),i=a(9457),l=a(3388),o=a(1561),d=a(7262),s=a(1489),u=a(184),c=function(e){var n=e.onClose,a=e.selectedRow,c=e.refreshTable,h=(0,l.Z)({initialValues:(0,r.Z)({},a)}),f=h.state,m=h.onChange,p=(0,d.Z)({api:"POST_SUPPLIER_TABLE_DATA",runFetch:c}).onSaveAndInsertion,v=(0,t.useCallback)((function(){p(f),n()}),[n,p,f]),Z=(0,o.Z)({validateFelids:["supplier_name"],functionToRun:v,stateToValidate:f}),g=f.supplier_name,b=f.email,x=f.phone,C=f.address;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.Z,{name:"supplier_name",label:"Name",onChange:m,value:g,width:"47%"}),(0,u.jsx)(i.Z,{name:"email",label:"Email",onChange:m,value:b,width:"47%"}),(0,u.jsx)(i.Z,{name:"phone",label:"Phone",onChange:m,value:x,width:"47%"}),(0,u.jsx)(i.Z,{name:"address",label:"Address",onChange:m,value:C,width:"100%"}),(0,u.jsx)(s.Z,{onOK:Z})]})},h=(0,t.memo)(c),f=a(3479),m=[{title:"nm",dataIndex:"supplier_name",width:"20%"},{title:"eml",dataIndex:"email",width:"17%"},{title:"phn",dataIndex:"phone",width:"15%"},{title:"adrs",dataIndex:"address",width:"20%"},{title:"created_at",dataIndex:"created_at",width:"20%"},{title:"updated_at",dataIndex:"updated_at",width:"20%"}],p=function(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(f.Z,{api:"QUERY_SUPPLIER_TABLE_DATA",postApi:"POST_SUPPLIER_TABLE_DATA",columns:m,hideTools:!1,canEdit:!0,canAdd:!0,canDelete:!0,rowKey:"supplier_id",ModalContent:h,fetchOnFirstRun:!0,canExcel:!0})})},v=(0,t.memo)(p)},930:function(e,n,a){a.d(n,{l:function(){return f}});var t=a(1413),r=a(5987),i=a(9657),l=a(5597),o=a(2481),d=a(9592),s=a(1665),u=a(6992),c=a(184),h=["className","children","requiredIndicator","optionalIndicator"],f=(0,l.G)((function(e,n){var a,l=(0,o.mq)("FormLabel",e),f=(0,d.Lr)(e),p=(f.className,f.children),v=f.requiredIndicator,Z=void 0===v?(0,c.jsx)(m,{}):v,g=f.optionalIndicator,b=void 0===g?null:g,x=(0,r.Z)(f,h),C=(0,i.NJ)(),k=null!=(a=null==C?void 0:C.getLabelProps(x,n))?a:(0,t.Z)({ref:n},x);return(0,c.jsxs)(s.m.label,(0,t.Z)((0,t.Z)({},k),{},{className:(0,u.cx)("chakra-form__label",f.className),__css:(0,t.Z)({display:"block",textAlign:"start"},l),children:[p,(null==C?void 0:C.isRequired)?Z:b]}))}));f.displayName="FormLabel";var m=(0,l.G)((function(e,n){var a=(0,i.NJ)(),r=(0,i.e)();if(!(null==a?void 0:a.isRequired))return null;var l=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(s.m.span,(0,t.Z)((0,t.Z)({},null==a?void 0:a.getRequiredIndicatorProps(e,n)),{},{__css:r.requiredIndicator,className:l}))}));m.displayName="RequiredIndicator"},9657:function(e,n,a){a.d(n,{NI:function(){return P},NJ:function(){return I},e:function(){return x}});var t=a(1413),r=a(5987),i=a(9439),l=a(9886),o=a(4591),d=a(5597),s=a(2481),u=a(9592),c=a(1665),h=a(6992),f=a(2791),m=a(184),p=["id","isRequired","isInvalid","isDisabled","isReadOnly"],v=["getRootProps","htmlProps"],Z=(0,l.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),g=(0,i.Z)(Z,2),b=g[0],x=g[1],C=(0,l.k)({strict:!1,name:"FormControlContext"}),k=(0,i.Z)(C,2),_=k[0],I=k[1];var P=(0,d.G)((function(e,n){var a=(0,s.jC)("Form",e),l=function(e){var n=e.id,a=e.isRequired,l=e.isInvalid,d=e.isDisabled,s=e.isReadOnly,u=(0,r.Z)(e,p),c=(0,f.useId)(),m=n||"field-".concat(c),v="".concat(m,"-label"),Z="".concat(m,"-feedback"),g="".concat(m,"-helptext"),b=(0,f.useState)(!1),x=(0,i.Z)(b,2),C=x[0],k=x[1],_=(0,f.useState)(!1),I=(0,i.Z)(_,2),P=I[0],F=I[1],N=(0,f.useState)(!1),R=(0,i.Z)(N,2),j=R[0],w=R[1],T=(0,f.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({id:g},e),{},{ref:(0,o.lq)(n,(function(e){e&&F(!0)}))})}),[g]),q=(0,f.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({},e),{},{ref:n,"data-focus":(0,h.PB)(j),"data-disabled":(0,h.PB)(d),"data-invalid":(0,h.PB)(l),"data-readonly":(0,h.PB)(s),id:void 0!==e.id?e.id:v,htmlFor:void 0!==e.htmlFor?e.htmlFor:m})}),[m,d,j,l,s,v]),y=(0,f.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({id:Z},e),{},{ref:(0,o.lq)(n,(function(e){e&&k(!0)})),"aria-live":"polite"})}),[Z]),S=(0,f.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)((0,t.Z)({},e),u),{},{ref:n,role:"group"})}),[u]),E=(0,f.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!a,isInvalid:!!l,isReadOnly:!!s,isDisabled:!!d,isFocused:!!j,onFocus:function(){return w(!0)},onBlur:function(){return w(!1)},hasFeedbackText:C,setHasFeedbackText:k,hasHelpText:P,setHasHelpText:F,id:m,labelId:v,feedbackId:Z,helpTextId:g,htmlProps:u,getHelpTextProps:T,getErrorMessageProps:y,getRootProps:S,getLabelProps:q,getRequiredIndicatorProps:E}}((0,u.Lr)(e)),d=l.getRootProps,Z=(l.htmlProps,(0,r.Z)(l,v)),g=(0,h.cx)("chakra-form-control",e.className);return(0,m.jsx)(_,{value:Z,children:(0,m.jsx)(b,{value:a,children:(0,m.jsx)(c.m.div,(0,t.Z)((0,t.Z)({},d({},n)),{},{className:g,__css:a.container}))})})}));P.displayName="FormControl",(0,d.G)((function(e,n){var a=I(),r=x(),i=(0,h.cx)("chakra-form__helper-text",e.className);return(0,m.jsx)(c.m.div,(0,t.Z)((0,t.Z)({},null==a?void 0:a.getHelpTextProps(e,n)),{},{__css:r.helperText,className:i}))})).displayName="FormHelperText"}}]);
//# sourceMappingURL=733.57ed3c54.chunk.js.map