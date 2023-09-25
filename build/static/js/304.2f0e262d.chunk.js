"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[304],{3388:function(e,n,a){a.d(n,{Z:function(){return s}});var i=a(3433),l=a(4942),t=a(1413),r=a(9439),d=a(2791),o=function(e){var n=(0,d.useRef)();return(0,d.useEffect)((function(){n.current=e})),n.current},s=function(e){var n=e.initialValues,a=(0,d.useState)(n),s=(0,r.Z)(a,2),u=s[0],c=s[1],v=(0,d.useRef)(!1),m=o(n),h=(0,d.useCallback)((function(){return!Object.is(JSON.stringify(m),JSON.stringify(n))}),[n,m]);(0,d.useEffect)((function(){h()&&c((0,t.Z)({},n))}),[h,n]);var p=(0,d.useCallback)((function(){v.current=!1,c((function(){return n}))}),[n]);(0,d.useEffect)((function(){return p}),[]);var f=(0,d.useCallback)((function(e){var n=e.name,a=e.value;c((0,t.Z)((0,t.Z)({},u),{},(0,l.Z)({},n,a)))}),[u]),b=(0,d.useCallback)((function(e){c(e)}),[]),g=(0,d.useCallback)((function(e){var n;c((0,t.Z)((0,t.Z)({},u),{},(n={},(0,l.Z)(n,e.name,e.value),(0,l.Z)(n,e.selectLabelName,e.label),n)))}),[u]),Z=(0,d.useCallback)((function(e){var n=e.name,a=e.value;c((0,t.Z)((0,t.Z)({},u),{},(0,l.Z)({},n,[].concat((0,i.Z)(u[n]),[a]))))}),[u]);return{state:u,onChange:f,resetForm:p,handleRootState:b,handleSelectWithLabelChange:g,handleArrayChange:Z}}},7595:function(e,n,a){var i=a(2791),l=a(9230),t=a(6582),r=a(930),d=a(548),o=a(184),s=function(e){var n=e.disabled,a=e.value,s=e.name,u=e.Label,c=void 0===u?"":u,v=e.onChange,m=e.width,h=void 0===m?"200px":m,p=e.type,f=void 0===p?"text":p,b=e.placeHolder,g=e.padding,Z=e.margin,_=void 0===Z?"10px":Z,x=e.className,k=void 0===x?"":x,C=e.required,I=void 0!==C&&C,N=(0,l.$G)().t,y=(0,i.useCallback)((function(e){v({name:s,value:e.target.value})}),[s,v]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(t.k,{direction:"column",width:h,padding:g,margin:_,children:[(0,o.jsx)(r.l,{children:N(c)}),(0,o.jsx)(d.I,{placeholder:b,size:"md",isDisabled:n,isRequired:I,onChange:y,width:"100%",className:k,value:a,type:f})]})})};n.Z=(0,i.memo)(s)},3304:function(e,n,a){a.r(n),a.d(n,{default:function(){return x}});var i,l=a(2791),t=a(1413),r=a(7595),d=a(3388),o=a(7262),s=a(898),u=a(168),c=a(9230),v=a(225),m=a(184),h=function(e){var n=e.label,a=void 0===n?"":n,t=e.value,r=e.onChange,d=e.name,o=e.width,s=e.height,h=e.disabled,p=e.padding,f=e.margin,b=void 0===f?"10px":f,g=(0,c.$G)().t,Z=(0,l.useCallback)((function(e){!0===e.target.checked?r({name:d,value:"Y"}):!1===e.target.checked&&r({name:d,value:"N"})}),[d,r]),_="Y"===t,x=v.Z.input(i||(i=(0,u.Z)(["\n        width: ",";\n        height: ",";\n        padding: ",";\n        margin:",";\n    "])),o,s,p,b);return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(x,{checked:_,type:"checkbox",onChange:Z,disabled:h,children:g(a)})})},p=(0,l.memo)(h),f=function(e){var n=e.onClose,a=e.selectedRow,i=e.refreshTable,u=(0,d.Z)({initialValues:(0,t.Z)({},a)}),c=u.state,v=u.onChange,h=(0,o.Z)({api:"POST_PAGE_NAME_MAIN_TABLE",runFetch:i}).onSaveAndInsertion,f=(0,l.useCallback)((function(){h(c),n()}),[h,c,n]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.Z,{name:"page_name",Label:"page_name",onChange:v,value:c.page_name,width:"47%"}),(0,m.jsx)(r.Z,{name:"page_link",Label:"page_link",onChange:v,value:c.page_link,width:"47%"}),(0,m.jsx)(p,{name:"page_disabled",label:"page_disabled",onChange:v,value:c.page_disabled,width:"47%"}),(0,m.jsx)(p,{name:"run_in_modal",label:"run_in_modal",onChange:v,value:c.run_in_modal,width:"47%"}),(0,m.jsx)(r.Z,{name:"parent_name",Label:"parent_name",onChange:v,value:c.parent_name,width:"47%"}),(0,m.jsx)(s.Z,{onClick:f,label:"sv"})]})},b=(0,l.memo)(f),g=a(7940),Z=[{title:"page_name",dataIndex:"page_name",width:"20%"},{title:"page_link",dataIndex:"page_link",width:"17%"},{title:"page_disabled",dataIndex:"page_disabled",width:"17%"},{title:"run_in_modal",dataIndex:"run_in_modal",width:"17%"},{title:"parent_name",dataIndex:"parent_name",width:"17%"},{title:"created_at",dataIndex:"created_at",width:"20%"},{title:"updated_at",dataIndex:"updated_at",width:"20%"}],_=function(){return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(g.Z,{api:"QUERY_PAGE_NAME_MAIN_TABLE",postApi:"POST_PAGE_NAME_MAIN_TABLE",columns:Z,hideTools:!1,canEdit:!0,canAdd:!0,canDelete:!0,canExcel:!0,rowKey:"customer_id",ModalContent:b,fetchOnFirstRun:!0})})},x=(0,l.memo)(_)},930:function(e,n,a){a.d(n,{l:function(){return m}});var i=a(1413),l=a(5987),t=a(9657),r=a(5597),d=a(2481),o=a(9592),s=a(1665),u=a(6992),c=a(184),v=["className","children","requiredIndicator","optionalIndicator"],m=(0,r.G)((function(e,n){var a,r=(0,d.mq)("FormLabel",e),m=(0,o.Lr)(e),p=(m.className,m.children),f=m.requiredIndicator,b=void 0===f?(0,c.jsx)(h,{}):f,g=m.optionalIndicator,Z=void 0===g?null:g,_=(0,l.Z)(m,v),x=(0,t.NJ)(),k=null!=(a=null==x?void 0:x.getLabelProps(_,n))?a:(0,i.Z)({ref:n},_);return(0,c.jsxs)(s.m.label,(0,i.Z)((0,i.Z)({},k),{},{className:(0,u.cx)("chakra-form__label",m.className),__css:(0,i.Z)({display:"block",textAlign:"start"},r),children:[p,(null==x?void 0:x.isRequired)?b:Z]}))}));m.displayName="FormLabel";var h=(0,r.G)((function(e,n){var a=(0,t.NJ)(),l=(0,t.e)();if(!(null==a?void 0:a.isRequired))return null;var r=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(s.m.span,(0,i.Z)((0,i.Z)({},null==a?void 0:a.getRequiredIndicatorProps(e,n)),{},{__css:l.requiredIndicator,className:r}))}));h.displayName="RequiredIndicator"},9657:function(e,n,a){a.d(n,{NI:function(){return N},NJ:function(){return I},e:function(){return _}});var i=a(1413),l=a(5987),t=a(9439),r=a(9886),d=a(4591),o=a(5597),s=a(2481),u=a(9592),c=a(1665),v=a(6992),m=a(2791),h=a(184),p=["id","isRequired","isInvalid","isDisabled","isReadOnly"],f=["getRootProps","htmlProps"],b=(0,r.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),g=(0,t.Z)(b,2),Z=g[0],_=g[1],x=(0,r.k)({strict:!1,name:"FormControlContext"}),k=(0,t.Z)(x,2),C=k[0],I=k[1];var N=(0,o.G)((function(e,n){var a=(0,s.jC)("Form",e),r=function(e){var n=e.id,a=e.isRequired,r=e.isInvalid,o=e.isDisabled,s=e.isReadOnly,u=(0,l.Z)(e,p),c=(0,m.useId)(),h=n||"field-".concat(c),f="".concat(h,"-label"),b="".concat(h,"-feedback"),g="".concat(h,"-helptext"),Z=(0,m.useState)(!1),_=(0,t.Z)(Z,2),x=_[0],k=_[1],C=(0,m.useState)(!1),I=(0,t.Z)(C,2),N=I[0],y=I[1],R=(0,m.useState)(!1),F=(0,t.Z)(R,2),j=F[0],q=F[1],w=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:g},e),{},{ref:(0,d.lq)(n,(function(e){e&&y(!0)}))})}),[g]),P=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,"data-focus":(0,v.PB)(j),"data-disabled":(0,v.PB)(o),"data-invalid":(0,v.PB)(r),"data-readonly":(0,v.PB)(s),id:void 0!==e.id?e.id:f,htmlFor:void 0!==e.htmlFor?e.htmlFor:h})}),[h,o,j,r,s,f]),T=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:b},e),{},{ref:(0,d.lq)(n,(function(e){e&&k(!0)})),"aria-live":"polite"})}),[b]),O=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)((0,i.Z)({},e),u),{},{ref:n,role:"group"})}),[u]),A=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!a,isInvalid:!!r,isReadOnly:!!s,isDisabled:!!o,isFocused:!!j,onFocus:function(){return q(!0)},onBlur:function(){return q(!1)},hasFeedbackText:x,setHasFeedbackText:k,hasHelpText:N,setHasHelpText:y,id:h,labelId:f,feedbackId:b,helpTextId:g,htmlProps:u,getHelpTextProps:w,getErrorMessageProps:T,getRootProps:O,getLabelProps:P,getRequiredIndicatorProps:A}}((0,u.Lr)(e)),o=r.getRootProps,b=(r.htmlProps,(0,l.Z)(r,f)),g=(0,v.cx)("chakra-form-control",e.className);return(0,h.jsx)(C,{value:b,children:(0,h.jsx)(Z,{value:a,children:(0,h.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},o({},n)),{},{className:g,__css:a.container}))})})}));N.displayName="FormControl",(0,o.G)((function(e,n){var a=I(),l=_(),t=(0,v.cx)("chakra-form__helper-text",e.className);return(0,h.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},null==a?void 0:a.getHelpTextProps(e,n)),{},{__css:l.helperText,className:t}))})).displayName="FormHelperText"},4931:function(e,n,a){a.d(n,{K:function(){return u},Y:function(){return s}});var i=a(1413),l=a(5987),t=a(9657),r=a(6992),d=["isDisabled","isInvalid","isReadOnly","isRequired"],o=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function s(e){var n=u(e),a=n.isDisabled,t=n.isInvalid,o=n.isReadOnly,s=n.isRequired,c=(0,l.Z)(n,d);return(0,i.Z)((0,i.Z)({},c),{},{disabled:a,readOnly:o,required:s,"aria-invalid":(0,r.Qm)(t),"aria-required":(0,r.Qm)(s),"aria-readonly":(0,r.Qm)(o)})}function u(e){var n,a,d,s=(0,t.NJ)(),u=e.id,c=e.disabled,v=e.readOnly,m=e.required,h=e.isRequired,p=e.isInvalid,f=e.isReadOnly,b=e.isDisabled,g=e.onFocus,Z=e.onBlur,_=(0,l.Z)(e,o),x=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==s?void 0:s.hasFeedbackText)&&(null==s?void 0:s.isInvalid)&&x.push(s.feedbackId),(null==s?void 0:s.hasHelpText)&&x.push(s.helpTextId),(0,i.Z)((0,i.Z)({},_),{},{"aria-describedby":x.join(" ")||void 0,id:null!=u?u:null==s?void 0:s.id,isDisabled:null!=(n=null!=c?c:b)?n:null==s?void 0:s.isDisabled,isReadOnly:null!=(a=null!=v?v:f)?a:null==s?void 0:s.isReadOnly,isRequired:null!=(d=null!=m?m:h)?d:null==s?void 0:s.isRequired,isInvalid:null!=p?p:null==s?void 0:s.isInvalid,onFocus:(0,r.v0)(null==s?void 0:s.onFocus,g),onBlur:(0,r.v0)(null==s?void 0:s.onBlur,Z)})}},548:function(e,n,a){a.d(n,{I:function(){return m}});var i=a(1413),l=a(5987),t=a(4931),r=a(5597),d=a(2481),o=a(9592),s=a(1665),u=a(6992),c=a(184),v=["htmlSize"],m=(0,r.G)((function(e,n){var a=e.htmlSize,r=(0,l.Z)(e,v),m=(0,d.jC)("Input",r),h=(0,o.Lr)(r),p=(0,t.Y)(h),f=(0,u.cx)("chakra-input",e.className);return(0,c.jsx)(s.m.input,(0,i.Z)((0,i.Z)({size:a},p),{},{__css:m.field,ref:n,className:f}))}));m.displayName="Input",m.id="Input"}}]);
//# sourceMappingURL=304.2f0e262d.chunk.js.map