"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[607],{8864:function(e,n,a){var i=a(2791),l=a(9230),r=a(176),t=a(4585),s=a(8886),o=a(184),d=function(e){var n=e.width,a=void 0===n?"200px":n,i=e.Options,d=void 0===i?[{label:"",value:0}]:i,u=e.onChange,c=e.Label,m=e.value,h=void 0===m?0:m,v=e.name,f=e.withLabel,p=void 0!==f&&f,Z=e.margin,b=void 0===Z?"10px":Z,x=e.padding,_=e.placeholder,g=void 0===_?"Select":_,C=e.selectLabelName,j=void 0===C?"label_select":C,y=(0,l.$G)().t;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(r.k,{direction:"column",width:a,padding:x,margin:b,children:[(0,o.jsx)(t.l,{fontSize:"md",as:"b",margin:"0 0 5px",children:y(c)}),(0,o.jsx)(s.P,{placeholder:y(g),onChange:function(e){Array.isArray(d)&&d.map((function(n){n.value===+e.target.value&&u(p?{value:n.value,selectLabelName:j,label:n.label,name:v}:{value:n.value,name:v})}))},children:Array.isArray(d)?d.map((function(e){return(0,o.jsxs)("option",{value:e.value,selected:h===e.value&&!0,children:[" ",y(e.label)]},e.value)})):(0,o.jsx)("option",{disabled:!0,children:y("No data")})})]})})};n.Z=(0,i.memo)(d)},6888:function(e,n,a){var i=a(2791),l=a(8864),r=a(3838),t=a(184),s=function(e){var n=e.width,a=e.Api,i=e.onChange,s=e.Label,o=e.name,d=void 0===o?"":o,u=e.value,c=void 0===u?0:u,m=e.withLabel,h=void 0!==m&&m,v=e.padding,f=e.margin,p=e.params,Z=e.fetchOnFirstRun,b=void 0!==Z&&Z,x=e.selectLabelName,_=void 0===x?"label_select":x,g=(0,r.Z)({link:a,fetchOnFirstRun:b,params:p}).data;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(l.Z,{Options:g,onChange:i,Label:s,value:c,name:d,width:n,withLabel:h,margin:f,padding:v,selectLabelName:_})})};n.Z=(0,i.memo)(s)},3388:function(e,n,a){a.d(n,{Z:function(){return d}});var i=a(3433),l=a(4942),r=a(1413),t=a(9439),s=a(2791),o=function(e){var n=(0,s.useRef)();return(0,s.useEffect)((function(){n.current=e})),n.current},d=function(e){var n=e.initialValues,a=(0,s.useState)(n),d=(0,t.Z)(a,2),u=d[0],c=d[1],m=(0,s.useRef)(!1),h=o(n),v=(0,s.useCallback)((function(){return!Object.is(JSON.stringify(h),JSON.stringify(n))}),[n,h]);(0,s.useEffect)((function(){v()&&c((0,r.Z)({},n))}),[v,n]);var f=(0,s.useCallback)((function(){m.current=!1,c((function(){return n}))}),[n]);(0,s.useEffect)((function(){return f}),[]);var p=(0,s.useCallback)((function(e){var n=e.name,a=e.value;c((0,r.Z)((0,r.Z)({},u),{},(0,l.Z)({},n,a)))}),[u]),Z=(0,s.useCallback)((function(e){c(e)}),[]),b=(0,s.useCallback)((function(e){var n;c((0,r.Z)((0,r.Z)({},u),{},(n={},(0,l.Z)(n,e.name,e.value),(0,l.Z)(n,e.selectLabelName,e.label),n)))}),[u]),x=(0,s.useCallback)((function(e){var n=e.name,a=e.value;c((0,r.Z)((0,r.Z)({},u),{},(0,l.Z)({},n,[].concat((0,i.Z)(u[n]),[a]))))}),[u]);return{state:u,onChange:p,resetForm:f,handleRootState:Z,handleSelectWithLabelChange:b,handleArrayChange:x}}},7595:function(e,n,a){var i=a(2791),l=a(9230),r=a(176),t=a(4585),s=a(6069),o=a(184),d=function(e){var n=e.disabled,a=e.value,d=e.name,u=e.Label,c=void 0===u?"":u,m=e.onChange,h=e.width,v=void 0===h?"200px":h,f=e.type,p=void 0===f?"text":f,Z=e.placeHolder,b=e.padding,x=e.margin,_=void 0===x?"10px":x,g=e.className,C=void 0===g?"":g,j=e.required,y=void 0!==j&&j,w=(0,l.$G)().t,N=(0,i.useCallback)((function(e){m({name:d,value:e.target.value})}),[d,m]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(r.k,{direction:"column",width:v,padding:b,margin:_,children:[(0,o.jsx)(t.l,{children:w(c)}),(0,o.jsx)(s.I,{placeholder:Z,size:"md",isDisabled:n,isRequired:y,onChange:N,width:"100%",className:C,value:a,type:p})]})})};n.Z=(0,i.memo)(d)},8607:function(e,n,a){a.r(n),a.d(n,{default:function(){return p}});var i=a(2791),l=a(1413),r=a(7595),t=a(3388),s=a(6888),o=a(7262),d=a(898),u=a(184),c=function(e){var n=e.onClose,a=e.selectedRow,c=e.refreshTable,m=(0,t.Z)({initialValues:(0,l.Z)({},a)}),h=m.state,v=m.onChange,f=(0,o.Z)({api:"POST_CUSTOMER_TABLE_DATA",runFetch:c}).onSaveAndInsertion,p=h.customer_id,Z=h.password,b=h.confirm_password,x=h.user_name,_=h.first_name,g=h.last_name,C=h.user_role,j=h.query_status,y=(0,i.useCallback)((function(){f({user_name:x,first_name:_,last_name:g,user_role:C,customer_id:p,query_status:j,password:Z,confirm_password:b}),n()}),[x,_,g,C,p,j,Z,b,f,n]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.Z,{name:"user_name",Label:"user_name",onChange:v,value:x,width:"47%"}),(0,u.jsx)(r.Z,{name:"first_name",Label:"first_name",onChange:v,value:_,width:"47%"}),(0,u.jsx)(r.Z,{name:"last_name",Label:"last_name",onChange:v,value:g,width:"47%"}),(0,u.jsx)(s.Z,{Api:"",name:"user_role",Label:"user_role",onChange:v,value:C,width:"47%"}),(0,u.jsx)(r.Z,{name:"password",Label:"password",onChange:v,value:Z,width:"47%",type:"password"}),(0,u.jsx)(r.Z,{name:"confirm_password",Label:"confirm_password",onChange:v,value:b,width:"47%",type:"password"}),(0,u.jsx)(d.Z,{onClick:y,label:"sv"})]})},m=(0,i.memo)(c),h=a(225),v=[{title:"user_name",dataIndex:"user_name",width:"20%"},{title:"first_name",dataIndex:"first_name",width:"17%"},{title:"last_name",dataIndex:"last_name",width:"17%"},{title:"user_role",dataIndex:"user_role",width:"17%"},{title:"created_at",dataIndex:"created_at",width:"20%"},{title:"updated_at",dataIndex:"updated_at",width:"20%"}],f=function(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(h.Z,{api:"QUERY_USERS_TABLE_DATA",postApi:"POST_USERS_TABLE_DATA",columns:v,hideTools:!1,canEdit:!0,canAdd:!0,canDelete:!0,canExcel:!0,rowKey:"user_id",ModalContent:m,fetchOnFirstRun:!0})})})},p=(0,i.memo)(f)},4585:function(e,n,a){a.d(n,{l:function(){return h}});var i=a(1413),l=a(5987),r=a(2701),t=a(7872),s=a(9084),o=a(9592),d=a(3765),u=a(6992),c=a(184),m=["className","children","requiredIndicator","optionalIndicator"],h=(0,t.G)((function(e,n){var a,t=(0,s.mq)("FormLabel",e),h=(0,o.Lr)(e),f=(h.className,h.children),p=h.requiredIndicator,Z=void 0===p?(0,c.jsx)(v,{}):p,b=h.optionalIndicator,x=void 0===b?null:b,_=(0,l.Z)(h,m),g=(0,r.NJ)(),C=null!=(a=null==g?void 0:g.getLabelProps(_,n))?a:(0,i.Z)({ref:n},_);return(0,c.jsxs)(d.m.label,(0,i.Z)((0,i.Z)({},C),{},{className:(0,u.cx)("chakra-form__label",h.className),__css:(0,i.Z)({display:"block",textAlign:"start"},t),children:[f,(null==g?void 0:g.isRequired)?Z:x]}))}));h.displayName="FormLabel";var v=(0,t.G)((function(e,n){var a=(0,r.NJ)(),l=(0,r.e)();if(!(null==a?void 0:a.isRequired))return null;var t=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(d.m.span,(0,i.Z)((0,i.Z)({},null==a?void 0:a.getRequiredIndicatorProps(e,n)),{},{__css:l.requiredIndicator,className:t}))}));v.displayName="RequiredIndicator"},2657:function(e,n,a){a.d(n,{K:function(){return u},Y:function(){return d}});var i=a(1413),l=a(5987),r=a(2701),t=a(6992),s=["isDisabled","isInvalid","isReadOnly","isRequired"],o=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function d(e){var n=u(e),a=n.isDisabled,r=n.isInvalid,o=n.isReadOnly,d=n.isRequired,c=(0,l.Z)(n,s);return(0,i.Z)((0,i.Z)({},c),{},{disabled:a,readOnly:o,required:d,"aria-invalid":(0,t.Qm)(r),"aria-required":(0,t.Qm)(d),"aria-readonly":(0,t.Qm)(o)})}function u(e){var n,a,s,d=(0,r.NJ)(),u=e.id,c=e.disabled,m=e.readOnly,h=e.required,v=e.isRequired,f=e.isInvalid,p=e.isReadOnly,Z=e.isDisabled,b=e.onFocus,x=e.onBlur,_=(0,l.Z)(e,o),g=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==d?void 0:d.hasFeedbackText)&&(null==d?void 0:d.isInvalid)&&g.push(d.feedbackId),(null==d?void 0:d.hasHelpText)&&g.push(d.helpTextId),(0,i.Z)((0,i.Z)({},_),{},{"aria-describedby":g.join(" ")||void 0,id:null!=u?u:null==d?void 0:d.id,isDisabled:null!=(n=null!=c?c:Z)?n:null==d?void 0:d.isDisabled,isReadOnly:null!=(a=null!=m?m:p)?a:null==d?void 0:d.isReadOnly,isRequired:null!=(s=null!=h?h:v)?s:null==d?void 0:d.isRequired,isInvalid:null!=f?f:null==d?void 0:d.isInvalid,onFocus:(0,t.v0)(null==d?void 0:d.onFocus,b),onBlur:(0,t.v0)(null==d?void 0:d.onBlur,x)})}},2701:function(e,n,a){a.d(n,{NI:function(){return w},NJ:function(){return y},e:function(){return _}});var i=a(1413),l=a(5987),r=a(9439),t=a(9886),s=a(4591),o=a(7872),d=a(9084),u=a(9592),c=a(3765),m=a(6992),h=a(2791),v=a(184),f=["id","isRequired","isInvalid","isDisabled","isReadOnly"],p=["getRootProps","htmlProps"],Z=(0,t.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),b=(0,r.Z)(Z,2),x=b[0],_=b[1],g=(0,t.k)({strict:!1,name:"FormControlContext"}),C=(0,r.Z)(g,2),j=C[0],y=C[1];var w=(0,o.G)((function(e,n){var a=(0,d.jC)("Form",e),t=function(e){var n=e.id,a=e.isRequired,t=e.isInvalid,o=e.isDisabled,d=e.isReadOnly,u=(0,l.Z)(e,f),c=(0,h.useId)(),v=n||"field-".concat(c),p="".concat(v,"-label"),Z="".concat(v,"-feedback"),b="".concat(v,"-helptext"),x=(0,h.useState)(!1),_=(0,r.Z)(x,2),g=_[0],C=_[1],j=(0,h.useState)(!1),y=(0,r.Z)(j,2),w=y[0],N=y[1],I=(0,h.useState)(!1),k=(0,r.Z)(I,2),R=k[0],F=k[1],L=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:b},e),{},{ref:(0,s.lq)(n,(function(e){e&&N(!0)}))})}),[b]),S=(0,h.useCallback)((function(){var e,n,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},a),{},{ref:l,"data-focus":(0,m.PB)(R),"data-disabled":(0,m.PB)(o),"data-invalid":(0,m.PB)(t),"data-readonly":(0,m.PB)(d),id:null!=(e=a.id)?e:p,htmlFor:null!=(n=a.htmlFor)?n:v})}),[v,o,R,t,d,p]),q=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:Z},e),{},{ref:(0,s.lq)(n,(function(e){e&&C(!0)})),"aria-live":"polite"})}),[Z]),O=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)((0,i.Z)({},e),u),{},{ref:n,role:"group"})}),[u]),P=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!a,isInvalid:!!t,isReadOnly:!!d,isDisabled:!!o,isFocused:!!R,onFocus:function(){return F(!0)},onBlur:function(){return F(!1)},hasFeedbackText:g,setHasFeedbackText:C,hasHelpText:w,setHasHelpText:N,id:v,labelId:p,feedbackId:Z,helpTextId:b,htmlProps:u,getHelpTextProps:L,getErrorMessageProps:q,getRootProps:O,getLabelProps:S,getRequiredIndicatorProps:P}}((0,u.Lr)(e)),o=t.getRootProps,Z=(t.htmlProps,(0,l.Z)(t,p)),b=(0,m.cx)("chakra-form-control",e.className);return(0,v.jsx)(j,{value:Z,children:(0,v.jsx)(x,{value:a,children:(0,v.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},o({},n)),{},{className:b,__css:a.container}))})})}));w.displayName="FormControl",(0,o.G)((function(e,n){var a=y(),l=_(),r=(0,m.cx)("chakra-form__helper-text",e.className);return(0,v.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},null==a?void 0:a.getHelpTextProps(e,n)),{},{__css:l.helperText,className:r}))})).displayName="FormHelperText"},6069:function(e,n,a){a.d(n,{I:function(){return h}});var i=a(1413),l=a(5987),r=a(2657),t=a(7872),s=a(9084),o=a(9592),d=a(3765),u=a(6992),c=a(184),m=["htmlSize"],h=(0,t.G)((function(e,n){var a=e.htmlSize,t=(0,l.Z)(e,m),h=(0,s.jC)("Input",t),v=(0,o.Lr)(t),f=(0,r.Y)(v),p=(0,u.cx)("chakra-input",e.className);return(0,c.jsx)(d.m.input,(0,i.Z)((0,i.Z)({size:a},f),{},{__css:h.field,ref:n,className:p}))}));h.displayName="Input",h.id="Input"},8886:function(e,n,a){a.d(n,{P:function(){return b}});var i=a(1413),l=a(5987),r=a(9439),t=a(6992),s=a(7872),o=a(3765),d=a(184),u=["children","placeholder","className"],c=(0,s.G)((function(e,n){var a=e.children,r=e.placeholder,s=e.className,c=(0,l.Z)(e,u);return(0,d.jsxs)(o.m.select,(0,i.Z)((0,i.Z)({},c),{},{ref:n,className:(0,t.cx)("chakra-select",s),children:[r&&(0,d.jsx)("option",{value:"",children:r}),a]}))}));c.displayName="SelectField";var m=a(2657),h=a(9084),v=a(9592),f=a(2791),p=["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize"],Z=["children"];var b=(0,s.G)((function(e,n){var a,s=(0,h.jC)("Select",e),u=(0,v.Lr)(e),f=u.rootProps,Z=u.placeholder,b=u.icon,x=u.color,_=u.height,C=u.h,j=u.minH,y=u.minHeight,w=u.iconColor,N=u.iconSize,I=function(e,n){for(var a={},i={},l=0,t=Object.entries(e);l<t.length;l++){var s=(0,r.Z)(t[l],2),o=s[0],d=s[1];n.includes(o)?a[o]=d:i[o]=d}return[a,i]}((0,l.Z)(u,p),v.oE),k=(0,r.Z)(I,2),R=k[0],F=k[1],L=(0,m.Y)(F),S={width:"100%",height:"fit-content",position:"relative",color:x},q=(0,i.Z)((0,i.Z)({paddingEnd:"2rem"},s.field),{},{_focus:(0,i.Z)({zIndex:"unset"},null==(a=s.field)?void 0:a._focus)});return(0,d.jsxs)(o.m.div,(0,i.Z)((0,i.Z)((0,i.Z)({className:"chakra-select__wrapper",__css:S},R),f),{},{children:[(0,d.jsx)(c,(0,i.Z)((0,i.Z)({ref:n,height:null!=C?C:_,minH:null!=j?j:y,placeholder:Z},L),{},{__css:q,children:e.children})),(0,d.jsx)(g,(0,i.Z)((0,i.Z)((0,i.Z)({"data-disabled":(0,t.PB)(L.disabled)},(w||x)&&{color:w||x}),{},{__css:s.icon},N&&{fontSize:N}),{},{children:b}))]}))}));b.displayName="Select";var x=function(e){return(0,d.jsx)("svg",(0,i.Z)((0,i.Z)({viewBox:"0 0 24 24"},e),{},{children:(0,d.jsx)("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})}))},_=(0,o.m)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),g=function(e){var n=e.children,a=void 0===n?(0,d.jsx)(x,{}):n,r=(0,l.Z)(e,Z),t=(0,f.cloneElement)(a,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return(0,d.jsx)(_,(0,i.Z)((0,i.Z)({},r),{},{className:"chakra-select__icon-wrapper",children:(0,f.isValidElement)(a)?t:null}))};g.displayName="SelectIcon"}}]);
//# sourceMappingURL=607.37c942e9.chunk.js.map