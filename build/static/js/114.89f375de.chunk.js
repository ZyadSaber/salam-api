"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[114],{1489:function(e,n,a){var t=a(1413),l=a(5987),i=a(2791),r=a(898),o=a(184),d=["onOK","width","label"],s=function(e){var n=e.onOK,a=e.width,i=void 0===a?"40%":a,s=(e.label,(0,l.Z)(e,d));return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(r.Z,(0,t.Z)({onClick:n,label:"sv",width:i},s))})};n.Z=(0,i.memo)(s)},3388:function(e,n,a){a.d(n,{Z:function(){return s}});var t=a(3433),l=a(4942),i=a(1413),r=a(9439),o=a(2791),d=function(e){var n=(0,o.useRef)();return(0,o.useEffect)((function(){n.current=e})),n.current},s=function(e){var n=e.initialValues,a=(0,o.useState)(n),s=(0,r.Z)(a,2),u=s[0],c=s[1],m=(0,o.useRef)(!1),h=d(n),p=(0,o.useCallback)((function(){return!Object.is(JSON.stringify(h),JSON.stringify(n))}),[n,h]);(0,o.useEffect)((function(){p()&&c((0,i.Z)({},n))}),[p,n]);var v=(0,o.useCallback)((function(){m.current=!1,c((function(){return n}))}),[n]);(0,o.useEffect)((function(){return v}),[]);var f=(0,o.useCallback)((function(e){var n=e.name,a=e.value;c((0,i.Z)((0,i.Z)({},u),{},(0,l.Z)({},n,a)))}),[u]),g=(0,o.useCallback)((function(e){c((0,i.Z)((0,i.Z)({},u),e))}),[u]),b=(0,o.useCallback)((function(e){var n;c((0,i.Z)((0,i.Z)({},u),{},(n={},(0,l.Z)(n,e.name,e.value),(0,l.Z)(n,e.selectLabelName,e.label),n)))}),[u]),Z=(0,o.useCallback)((function(e){var n=e.name,a=e.value;c((0,i.Z)((0,i.Z)({},u),{},(0,l.Z)({},n,[].concat((0,t.Z)(u[n]),[a]))))}),[u]);return{state:u,onChange:f,resetForm:v,handleRootState:c,handleSelectWithLabelChange:b,handleArrayChange:Z,handleMultiInput:g}}},9242:function(e,n,a){a.d(n,{Z:function(){return v}});var t,l=a(1413),i=a(5987),r=a(2791),o=a(6582),d=a(930),s=a(9230),u=a(168),c=a(225).Z.input(t||(t=(0,u.Z)(["\nbackground: #fdfdfd;\nborder: 0.5px solid #cbd5e0;\nheight: 100%;\nwidth: 100%;\nborder-radius: 7px;\npadding: 0 16px;\n"]))),m=a(184),h=["disabled","value","name","label","onChange","height","width","padding","margin"],p=function(e){var n=e.disabled,a=e.value,t=e.name,u=e.label,p=void 0===u?"":u,v=e.onChange,f=e.height,g=void 0===f?"65px":f,b=e.width,Z=void 0===b?"200px":b,x=e.padding,_=e.margin,y=void 0===_?"10px":_,C=(0,i.Z)(e,h),w=(0,s.$G)().t,j=(0,r.useCallback)((function(e){v({name:t,value:+e.target.value})}),[t,v]);return(0,m.jsxs)(o.k,{direction:"column",width:Z,padding:x,margin:y,height:g,children:[(0,m.jsx)(d.l,{children:w(p)}),(0,m.jsx)(c,(0,l.Z)({disabled:n,onChange:j,width:"100%",value:a,type:"number"},C))]})},v=(0,r.memo)(p)},9457:function(e,n,a){a.d(n,{Z:function(){return v}});var t,l=a(1413),i=a(5987),r=a(2791),o=a(9230),d=a(6582),s=a(930),u=a(168),c=a(225).Z.input(t||(t=(0,u.Z)(["\nbackground: #fdfdfd;\nborder: 0.5px solid #cbd5e0;\nheight: 100%;\nwidth: 100%;\nborder-radius: 7px;\npadding: 0 16px;\n"]))),m=a(184),h=["disabled","value","name","label","onChange","height","width","type","placeHolder","padding","margin","className","required"],p=function(e){var n=e.disabled,a=e.value,t=e.name,u=e.label,p=void 0===u?"":u,v=e.onChange,f=e.height,g=void 0===f?"65px":f,b=e.width,Z=void 0===b?"200px":b,x=e.type,_=void 0===x?"text":x,y=e.placeHolder,C=e.padding,w=e.margin,j=void 0===w?"10px":w,k=e.className,I=void 0===k?"":k,N=e.required,F=(0,i.Z)(e,h),P=(0,o.$G)().t,R=(0,r.useCallback)((function(e){v({name:t,value:e.target.value})}),[t,v]);return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(d.k,{direction:"column",width:Z,padding:C,margin:j,height:g,children:[(0,m.jsx)(s.l,{children:P(p)}),(0,m.jsx)(c,(0,l.Z)({placeholder:y,disabled:n,required:N,onChange:R,width:"100%",className:I,value:a,type:_},F))]})})},v=(0,r.memo)(p)},4114:function(e,n,a){a.r(n),a.d(n,{default:function(){return f}});var t=a(2791),l=a(1413),i=a(7262),r=a(3388),o=a(9457),d=a(9242),s=a(1489),u=a(184),c=function(e){var n=e.onClose,a=e.selectedRow,c=e.refreshTable,m=(0,r.Z)({initialValues:(0,l.Z)({},a)}),h=m.onChange,p=m.state,v=(0,i.Z)({api:"POST_EMPLOYEES_TABLE_DATA",runFetch:c}).onSaveAndInsertion,f=(0,t.useCallback)((function(){v(p),n()}),[p,v,n]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o.Z,{name:"employee_name",value:p.employee_name,onChange:h,label:"nm",width:"30%"}),(0,u.jsx)(o.Z,{name:"date_of_hiring",value:p.date_of_hiring,onChange:h,label:"dtfhrng",width:"30%",type:"date"}),(0,u.jsx)(d.Z,{name:"employee_phone",value:p.employee_phone,onChange:h,label:"phn",width:"30%"}),(0,u.jsx)(o.Z,{name:"employee_address",value:p.employee_address,onChange:h,label:"adrs",width:"30%"}),(0,u.jsx)(d.Z,{name:"employee_mobile",value:p.employee_mobile,onChange:h,label:"mbl",width:"30%"}),(0,u.jsx)(o.Z,{name:"employee_email",value:p.employee_email,onChange:h,label:"eml",width:"30%"}),(0,u.jsx)(o.Z,{name:"employee_job_title",value:p.employee_job_title,onChange:h,label:"jbtl",width:"22%"}),(0,u.jsx)(d.Z,{name:"employee_salary",value:p.employee_salary,onChange:h,label:"slry",width:"22%"}),(0,u.jsx)(o.Z,{name:"employee_attendance_time",value:p.employee_attendance_time,onChange:h,label:"atndnctm",width:"22%",type:"time"}),(0,u.jsx)(o.Z,{name:"employee_leaving_time",value:p.employee_leaving_time,onChange:h,label:"lvngtm",width:"22%",type:"time"}),(0,u.jsx)(s.Z,{onOK:f})]})},m=(0,t.memo)(c),h=a(3479),p=[{title:"nm",dataIndex:"employee_name",width:15},{title:"dtfhrng",dataIndex:"date_of_hiring",width:12},{title:"slry",dataIndex:"employee_salary",width:10},{title:"atndnctm",dataIndex:"employee_attendance_time",width:10},{title:"lvngtm",dataIndex:"employee_leaving_time",width:10},{title:"phn",dataIndex:"employee_phone",width:15},{title:"mbl",dataIndex:"employee_mobile",width:15},{title:"adrs",dataIndex:"employee_address",width:20}],v=function(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(h.Z,{api:"QUERY_EMPLOYEES_TABLE_DATA",postApi:"POST_EMPLOYEES_TABLE_DATA",columns:p,hideTools:!1,canEdit:!0,canAdd:!0,canDelete:!0,rowKey:"employee_id",ModalContent:m,fetchOnFirstRun:!0})})},f=(0,t.memo)(v)},930:function(e,n,a){a.d(n,{l:function(){return h}});var t=a(1413),l=a(5987),i=a(9657),r=a(5597),o=a(2481),d=a(9592),s=a(1665),u=a(6992),c=a(184),m=["className","children","requiredIndicator","optionalIndicator"],h=(0,r.G)((function(e,n){var a,r=(0,o.mq)("FormLabel",e),h=(0,d.Lr)(e),v=(h.className,h.children),f=h.requiredIndicator,g=void 0===f?(0,c.jsx)(p,{}):f,b=h.optionalIndicator,Z=void 0===b?null:b,x=(0,l.Z)(h,m),_=(0,i.NJ)(),y=null!=(a=null==_?void 0:_.getLabelProps(x,n))?a:(0,t.Z)({ref:n},x);return(0,c.jsxs)(s.m.label,(0,t.Z)((0,t.Z)({},y),{},{className:(0,u.cx)("chakra-form__label",h.className),__css:(0,t.Z)({display:"block",textAlign:"start"},r),children:[v,(null==_?void 0:_.isRequired)?g:Z]}))}));h.displayName="FormLabel";var p=(0,r.G)((function(e,n){var a=(0,i.NJ)(),l=(0,i.e)();if(!(null==a?void 0:a.isRequired))return null;var r=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(s.m.span,(0,t.Z)((0,t.Z)({},null==a?void 0:a.getRequiredIndicatorProps(e,n)),{},{__css:l.requiredIndicator,className:r}))}));p.displayName="RequiredIndicator"},9657:function(e,n,a){a.d(n,{NI:function(){return j},NJ:function(){return w},e:function(){return x}});var t=a(1413),l=a(5987),i=a(9439),r=a(9886),o=a(4591),d=a(5597),s=a(2481),u=a(9592),c=a(1665),m=a(6992),h=a(2791),p=a(184),v=["id","isRequired","isInvalid","isDisabled","isReadOnly"],f=["getRootProps","htmlProps"],g=(0,r.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),b=(0,i.Z)(g,2),Z=b[0],x=b[1],_=(0,r.k)({strict:!1,name:"FormControlContext"}),y=(0,i.Z)(_,2),C=y[0],w=y[1];var j=(0,d.G)((function(e,n){var a=(0,s.jC)("Form",e),r=function(e){var n=e.id,a=e.isRequired,r=e.isInvalid,d=e.isDisabled,s=e.isReadOnly,u=(0,l.Z)(e,v),c=(0,h.useId)(),p=n||"field-".concat(c),f="".concat(p,"-label"),g="".concat(p,"-feedback"),b="".concat(p,"-helptext"),Z=(0,h.useState)(!1),x=(0,i.Z)(Z,2),_=x[0],y=x[1],C=(0,h.useState)(!1),w=(0,i.Z)(C,2),j=w[0],k=w[1],I=(0,h.useState)(!1),N=(0,i.Z)(I,2),F=N[0],P=N[1],R=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({id:b},e),{},{ref:(0,o.lq)(n,(function(e){e&&k(!0)}))})}),[b]),T=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({},e),{},{ref:n,"data-focus":(0,m.PB)(F),"data-disabled":(0,m.PB)(d),"data-invalid":(0,m.PB)(r),"data-readonly":(0,m.PB)(s),id:void 0!==e.id?e.id:f,htmlFor:void 0!==e.htmlFor?e.htmlFor:p})}),[p,d,F,r,s,f]),q=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({id:g},e),{},{ref:(0,o.lq)(n,(function(e){e&&y(!0)})),"aria-live":"polite"})}),[g]),E=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)((0,t.Z)({},e),u),{},{ref:n,role:"group"})}),[u]),S=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!a,isInvalid:!!r,isReadOnly:!!s,isDisabled:!!d,isFocused:!!F,onFocus:function(){return P(!0)},onBlur:function(){return P(!1)},hasFeedbackText:_,setHasFeedbackText:y,hasHelpText:j,setHasHelpText:k,id:p,labelId:f,feedbackId:g,helpTextId:b,htmlProps:u,getHelpTextProps:R,getErrorMessageProps:q,getRootProps:E,getLabelProps:T,getRequiredIndicatorProps:S}}((0,u.Lr)(e)),d=r.getRootProps,g=(r.htmlProps,(0,l.Z)(r,f)),b=(0,m.cx)("chakra-form-control",e.className);return(0,p.jsx)(C,{value:g,children:(0,p.jsx)(Z,{value:a,children:(0,p.jsx)(c.m.div,(0,t.Z)((0,t.Z)({},d({},n)),{},{className:b,__css:a.container}))})})}));j.displayName="FormControl",(0,d.G)((function(e,n){var a=w(),l=x(),i=(0,m.cx)("chakra-form__helper-text",e.className);return(0,p.jsx)(c.m.div,(0,t.Z)((0,t.Z)({},null==a?void 0:a.getHelpTextProps(e,n)),{},{__css:l.helperText,className:i}))})).displayName="FormHelperText"}}]);
//# sourceMappingURL=114.89f375de.chunk.js.map