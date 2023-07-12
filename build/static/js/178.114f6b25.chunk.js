"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[178],{8864:function(e,n,a){var i=a(2791),l=a(9230),r=a(176),t=a(4585),o=a(8886),d=a(184),s=function(e){var n=e.width,a=void 0===n?"200px":n,i=e.Options,s=void 0===i?[{label:"",value:0}]:i,c=e.onChange,u=e.Label,h=e.value,v=void 0===h?0:h,m=e.name,f=e.withLabel,p=void 0!==f&&f,b=e.margin,Z=void 0===b?"10px":b,x=e.padding,g=e.placeholder,_=void 0===g?"Select":g,y=e.selectLabelName,C=void 0===y?"label_select":y,j=(0,l.$G)().t;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(r.k,{direction:"column",width:a,padding:x,margin:Z,children:[(0,d.jsx)(t.l,{fontSize:"md",as:"b",margin:"0 0 5px",children:j(u)}),(0,d.jsx)(o.P,{placeholder:j(_),onChange:function(e){Array.isArray(s)&&s.map((function(n){n.value===+e.target.value&&c(p?{value:n.value,selectLabelName:C,label:n.label,name:m}:{value:n.value,name:m})}))},children:Array.isArray(s)?s.map((function(e){return(0,d.jsxs)("option",{value:e.value,selected:v===e.value&&!0,children:[" ",j(e.label)]},e.value)})):(0,d.jsx)("option",{disabled:!0,children:j("No data")})})]})})};n.Z=(0,i.memo)(s)},6888:function(e,n,a){var i=a(2791),l=a(8864),r=a(3838),t=a(184),o=function(e){var n=e.width,a=e.Api,i=e.onChange,o=e.Label,d=e.name,s=void 0===d?"":d,c=e.value,u=void 0===c?0:c,h=e.withLabel,v=void 0!==h&&h,m=e.padding,f=e.margin,p=e.params,b=e.fetchOnFirstRun,Z=void 0!==b&&b,x=e.selectLabelName,g=void 0===x?"label_select":x,_=(0,r.Z)({link:a,fetchOnFirstRun:Z,params:p}).data;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(l.Z,{Options:_,onChange:i,Label:o,value:u,name:s,width:n,withLabel:v,margin:f,padding:m,selectLabelName:g})})};n.Z=(0,i.memo)(o)},3388:function(e,n,a){a.d(n,{Z:function(){return s}});var i=a(3433),l=a(4942),r=a(1413),t=a(9439),o=a(2791),d=function(e){var n=(0,o.useRef)();return(0,o.useEffect)((function(){n.current=e})),n.current},s=function(e){var n=e.initialValues,a=(0,o.useState)(n),s=(0,t.Z)(a,2),c=s[0],u=s[1],h=(0,o.useRef)(!1),v=d(n),m=(0,o.useCallback)((function(){return!Object.is(JSON.stringify(v),JSON.stringify(n))}),[n,v]);(0,o.useEffect)((function(){m()&&u((0,r.Z)({},n))}),[m,n]);var f=(0,o.useCallback)((function(){h.current=!1,u((function(){return n}))}),[n]);(0,o.useEffect)((function(){return f}),[]);var p=(0,o.useCallback)((function(e){var n=e.name,a=e.value;u((0,r.Z)((0,r.Z)({},c),{},(0,l.Z)({},n,a)))}),[c]),b=(0,o.useCallback)((function(e){u(e)}),[]),Z=(0,o.useCallback)((function(e){var n;u((0,r.Z)((0,r.Z)({},c),{},(n={},(0,l.Z)(n,e.name,e.value),(0,l.Z)(n,e.selectLabelName,e.label),n)))}),[c]),x=(0,o.useCallback)((function(e){var n=e.name,a=e.value;u((0,r.Z)((0,r.Z)({},c),{},(0,l.Z)({},n,[].concat((0,i.Z)(c[n]),[a]))))}),[c]);return{state:c,onChange:p,resetForm:f,handleRootState:b,handleSelectWithLabelChange:Z,handleArrayChange:x}}},7595:function(e,n,a){var i=a(2791),l=a(9230),r=a(176),t=a(4585),o=a(6069),d=a(184),s=function(e){var n=e.disabled,a=e.value,s=e.name,c=e.Label,u=void 0===c?"":c,h=e.onChange,v=e.width,m=void 0===v?"200px":v,f=e.type,p=void 0===f?"text":f,b=e.placeHolder,Z=e.padding,x=e.margin,g=void 0===x?"10px":x,_=e.className,y=void 0===_?"":_,C=e.required,j=void 0!==C&&C,N=(0,l.$G)().t,I=(0,i.useCallback)((function(e){h({name:s,value:e.target.value})}),[s,h]);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(r.k,{direction:"column",width:m,padding:Z,margin:g,children:[(0,d.jsx)(t.l,{children:N(u)}),(0,d.jsx)(o.I,{placeholder:b,size:"md",isDisabled:n,isRequired:j,onChange:I,width:"100%",className:y,value:a,type:p})]})})};n.Z=(0,i.memo)(s)},5178:function(e,n,a){a.r(n),a.d(n,{default:function(){return h}});var i=a(2791),l=a(8535),r=a(7595),t=a(6888),o=a(225),d=[{title:"cstmr",dataIndex:"customer_name",width:"13%"},{title:"dt",dataIndex:"date",width:"13%"},{title:"crdt",dataIndex:"credit",width:"15%"},{title:"dbt",dataIndex:"debit",width:"15%"},{title:"blnc",dataIndex:"balance",width:"15%"},{title:"dscrptn",dataIndex:"description",width:"25%"}],s=a(3388),c=a(184),u=function(){var e=(0,s.Z)({initialValues:{date_from:"",date_to:"",customer_id:""}}),n=e.state,a=e.onChange;return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(l.Z,{width:"100%",flexDirection:"column",children:[(0,c.jsxs)(l.Z,{width:"100%",children:[(0,c.jsx)(t.Z,{Label:"cstmr",fetchOnFirstRun:!0,name:"customer_id",value:n.customer_id,onChange:a,Api:"QUERY_CUSTOMERS_LIST"}),(0,c.jsx)(r.Z,{name:"date_from",type:"date",Label:"frm",onChange:a}),(0,c.jsx)(r.Z,{name:"date_to",type:"date",Label:"to",onChange:a})]}),(0,c.jsx)(o.Z,{api:"QUERY_CUSTOMER_SUMMARY_TABLE",columns:d,hideTools:!0,rowKey:"rowKey",params:{customer_id:n.customer_id},fetchOnFirstRun:!0,onDoubleClick:function(e){console.log(e)}})]})})},h=(0,i.memo)(u)},4585:function(e,n,a){a.d(n,{l:function(){return v}});var i=a(1413),l=a(5987),r=a(2701),t=a(7872),o=a(9084),d=a(9592),s=a(3765),c=a(6992),u=a(184),h=["className","children","requiredIndicator","optionalIndicator"],v=(0,t.G)((function(e,n){var a,t=(0,o.mq)("FormLabel",e),v=(0,d.Lr)(e),f=(v.className,v.children),p=v.requiredIndicator,b=void 0===p?(0,u.jsx)(m,{}):p,Z=v.optionalIndicator,x=void 0===Z?null:Z,g=(0,l.Z)(v,h),_=(0,r.NJ)(),y=null!=(a=null==_?void 0:_.getLabelProps(g,n))?a:(0,i.Z)({ref:n},g);return(0,u.jsxs)(s.m.label,(0,i.Z)((0,i.Z)({},y),{},{className:(0,c.cx)("chakra-form__label",v.className),__css:(0,i.Z)({display:"block",textAlign:"start"},t),children:[f,(null==_?void 0:_.isRequired)?b:x]}))}));v.displayName="FormLabel";var m=(0,t.G)((function(e,n){var a=(0,r.NJ)(),l=(0,r.e)();if(!(null==a?void 0:a.isRequired))return null;var t=(0,c.cx)("chakra-form__required-indicator",e.className);return(0,u.jsx)(s.m.span,(0,i.Z)((0,i.Z)({},null==a?void 0:a.getRequiredIndicatorProps(e,n)),{},{__css:l.requiredIndicator,className:t}))}));m.displayName="RequiredIndicator"},2657:function(e,n,a){a.d(n,{K:function(){return c},Y:function(){return s}});var i=a(1413),l=a(5987),r=a(2701),t=a(6992),o=["isDisabled","isInvalid","isReadOnly","isRequired"],d=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function s(e){var n=c(e),a=n.isDisabled,r=n.isInvalid,d=n.isReadOnly,s=n.isRequired,u=(0,l.Z)(n,o);return(0,i.Z)((0,i.Z)({},u),{},{disabled:a,readOnly:d,required:s,"aria-invalid":(0,t.Qm)(r),"aria-required":(0,t.Qm)(s),"aria-readonly":(0,t.Qm)(d)})}function c(e){var n,a,o,s=(0,r.NJ)(),c=e.id,u=e.disabled,h=e.readOnly,v=e.required,m=e.isRequired,f=e.isInvalid,p=e.isReadOnly,b=e.isDisabled,Z=e.onFocus,x=e.onBlur,g=(0,l.Z)(e,d),_=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==s?void 0:s.hasFeedbackText)&&(null==s?void 0:s.isInvalid)&&_.push(s.feedbackId),(null==s?void 0:s.hasHelpText)&&_.push(s.helpTextId),(0,i.Z)((0,i.Z)({},g),{},{"aria-describedby":_.join(" ")||void 0,id:null!=c?c:null==s?void 0:s.id,isDisabled:null!=(n=null!=u?u:b)?n:null==s?void 0:s.isDisabled,isReadOnly:null!=(a=null!=h?h:p)?a:null==s?void 0:s.isReadOnly,isRequired:null!=(o=null!=v?v:m)?o:null==s?void 0:s.isRequired,isInvalid:null!=f?f:null==s?void 0:s.isInvalid,onFocus:(0,t.v0)(null==s?void 0:s.onFocus,Z),onBlur:(0,t.v0)(null==s?void 0:s.onBlur,x)})}},2701:function(e,n,a){a.d(n,{NI:function(){return N},NJ:function(){return j},e:function(){return g}});var i=a(1413),l=a(5987),r=a(9439),t=a(9886),o=a(4591),d=a(7872),s=a(9084),c=a(9592),u=a(3765),h=a(6992),v=a(2791),m=a(184),f=["id","isRequired","isInvalid","isDisabled","isReadOnly"],p=["getRootProps","htmlProps"],b=(0,t.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),Z=(0,r.Z)(b,2),x=Z[0],g=Z[1],_=(0,t.k)({strict:!1,name:"FormControlContext"}),y=(0,r.Z)(_,2),C=y[0],j=y[1];var N=(0,d.G)((function(e,n){var a=(0,s.jC)("Form",e),t=function(e){var n=e.id,a=e.isRequired,t=e.isInvalid,d=e.isDisabled,s=e.isReadOnly,c=(0,l.Z)(e,f),u=(0,v.useId)(),m=n||"field-".concat(u),p="".concat(m,"-label"),b="".concat(m,"-feedback"),Z="".concat(m,"-helptext"),x=(0,v.useState)(!1),g=(0,r.Z)(x,2),_=g[0],y=g[1],C=(0,v.useState)(!1),j=(0,r.Z)(C,2),N=j[0],I=j[1],R=(0,v.useState)(!1),k=(0,r.Z)(R,2),F=k[0],w=k[1],S=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:Z},e),{},{ref:(0,o.lq)(n,(function(e){e&&I(!0)}))})}),[Z]),q=(0,v.useCallback)((function(){var e,n,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},a),{},{ref:l,"data-focus":(0,h.PB)(F),"data-disabled":(0,h.PB)(d),"data-invalid":(0,h.PB)(t),"data-readonly":(0,h.PB)(s),id:null!=(e=a.id)?e:p,htmlFor:null!=(n=a.htmlFor)?n:m})}),[m,d,F,t,s,p]),L=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:b},e),{},{ref:(0,o.lq)(n,(function(e){e&&y(!0)})),"aria-live":"polite"})}),[b]),O=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)((0,i.Z)({},e),c),{},{ref:n,role:"group"})}),[c]),P=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!a,isInvalid:!!t,isReadOnly:!!s,isDisabled:!!d,isFocused:!!F,onFocus:function(){return w(!0)},onBlur:function(){return w(!1)},hasFeedbackText:_,setHasFeedbackText:y,hasHelpText:N,setHasHelpText:I,id:m,labelId:p,feedbackId:b,helpTextId:Z,htmlProps:c,getHelpTextProps:S,getErrorMessageProps:L,getRootProps:O,getLabelProps:q,getRequiredIndicatorProps:P}}((0,c.Lr)(e)),d=t.getRootProps,b=(t.htmlProps,(0,l.Z)(t,p)),Z=(0,h.cx)("chakra-form-control",e.className);return(0,m.jsx)(C,{value:b,children:(0,m.jsx)(x,{value:a,children:(0,m.jsx)(u.m.div,(0,i.Z)((0,i.Z)({},d({},n)),{},{className:Z,__css:a.container}))})})}));N.displayName="FormControl",(0,d.G)((function(e,n){var a=j(),l=g(),r=(0,h.cx)("chakra-form__helper-text",e.className);return(0,m.jsx)(u.m.div,(0,i.Z)((0,i.Z)({},null==a?void 0:a.getHelpTextProps(e,n)),{},{__css:l.helperText,className:r}))})).displayName="FormHelperText"},6069:function(e,n,a){a.d(n,{I:function(){return v}});var i=a(1413),l=a(5987),r=a(2657),t=a(7872),o=a(9084),d=a(9592),s=a(3765),c=a(6992),u=a(184),h=["htmlSize"],v=(0,t.G)((function(e,n){var a=e.htmlSize,t=(0,l.Z)(e,h),v=(0,o.jC)("Input",t),m=(0,d.Lr)(t),f=(0,r.Y)(m),p=(0,c.cx)("chakra-input",e.className);return(0,u.jsx)(s.m.input,(0,i.Z)((0,i.Z)({size:a},f),{},{__css:v.field,ref:n,className:p}))}));v.displayName="Input",v.id="Input"},8886:function(e,n,a){a.d(n,{P:function(){return Z}});var i=a(1413),l=a(5987),r=a(9439),t=a(6992),o=a(7872),d=a(3765),s=a(184),c=["children","placeholder","className"],u=(0,o.G)((function(e,n){var a=e.children,r=e.placeholder,o=e.className,u=(0,l.Z)(e,c);return(0,s.jsxs)(d.m.select,(0,i.Z)((0,i.Z)({},u),{},{ref:n,className:(0,t.cx)("chakra-select",o),children:[r&&(0,s.jsx)("option",{value:"",children:r}),a]}))}));u.displayName="SelectField";var h=a(2657),v=a(9084),m=a(9592),f=a(2791),p=["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize"],b=["children"];var Z=(0,o.G)((function(e,n){var a,o=(0,v.jC)("Select",e),c=(0,m.Lr)(e),f=c.rootProps,b=c.placeholder,Z=c.icon,x=c.color,g=c.height,y=c.h,C=c.minH,j=c.minHeight,N=c.iconColor,I=c.iconSize,R=function(e,n){for(var a={},i={},l=0,t=Object.entries(e);l<t.length;l++){var o=(0,r.Z)(t[l],2),d=o[0],s=o[1];n.includes(d)?a[d]=s:i[d]=s}return[a,i]}((0,l.Z)(c,p),m.oE),k=(0,r.Z)(R,2),F=k[0],w=k[1],S=(0,h.Y)(w),q={width:"100%",height:"fit-content",position:"relative",color:x},L=(0,i.Z)((0,i.Z)({paddingEnd:"2rem"},o.field),{},{_focus:(0,i.Z)({zIndex:"unset"},null==(a=o.field)?void 0:a._focus)});return(0,s.jsxs)(d.m.div,(0,i.Z)((0,i.Z)((0,i.Z)({className:"chakra-select__wrapper",__css:q},F),f),{},{children:[(0,s.jsx)(u,(0,i.Z)((0,i.Z)({ref:n,height:null!=y?y:g,minH:null!=C?C:j,placeholder:b},S),{},{__css:L,children:e.children})),(0,s.jsx)(_,(0,i.Z)((0,i.Z)((0,i.Z)({"data-disabled":(0,t.PB)(S.disabled)},(N||x)&&{color:N||x}),{},{__css:o.icon},I&&{fontSize:I}),{},{children:Z}))]}))}));Z.displayName="Select";var x=function(e){return(0,s.jsx)("svg",(0,i.Z)((0,i.Z)({viewBox:"0 0 24 24"},e),{},{children:(0,s.jsx)("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})}))},g=(0,d.m)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),_=function(e){var n=e.children,a=void 0===n?(0,s.jsx)(x,{}):n,r=(0,l.Z)(e,b),t=(0,f.cloneElement)(a,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return(0,s.jsx)(g,(0,i.Z)((0,i.Z)({},r),{},{className:"chakra-select__icon-wrapper",children:(0,f.isValidElement)(a)?t:null}))};_.displayName="SelectIcon"}}]);
//# sourceMappingURL=178.114f6b25.chunk.js.map