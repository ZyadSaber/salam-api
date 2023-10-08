"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[57],{7940:function(e,n,i){i.d(n,{Z:function(){return R}});var a=i(1413),t=i(9439),d=i(5987),o=i(2791),r=i(5057),l=i(890),s=i(9230),u=i(990),c=i(8874),h=i(2989),v=i(5473),m=i(634),p=i(6241),x=i(6582),b=i(7685),f=i(9055),g=i(184),C=function(e){var n=e.children,i=e.visible,a=void 0!==i&&i,t=e.label,d=e.onClose,o=e.onOK,r=e.submitTitle,l=void 0===r?"smbt":r,C=e.width,Z=void 0===C?"3xl":C,_=e.hideSaveButton,j=void 0!==_&&_,w=e.hideCloseButton,R=void 0!==w&&w,k=(0,s.$G)().t;return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(u.u_,{isOpen:a,onClose:d,size:Z,children:[(0,g.jsx)(c.Z,{}),(0,g.jsxs)(h.h,{children:[(0,g.jsx)(v.x,{children:k(t)}),(0,g.jsx)(m.o,{}),(0,g.jsx)(p.f,{children:(0,g.jsx)(x.k,{w:"100%",padding:"5px",wrap:"wrap",children:n})}),(0,g.jsx)(b.m,{children:(0,g.jsxs)(x.k,{w:"25%",justifyContent:"space-around",children:[(0,g.jsx)(f.z,{colorScheme:"red",mr:3,onClick:d,hidden:R,children:k("cls")}),(0,g.jsx)(f.z,{colorScheme:"blue",onClick:o,hidden:j,children:k(l)})]})})]})]})})},Z=(0,o.memo)(C),_=i(7262),j=["api","postApi","columns","ModalContent","onClick","fetchOnFirstRun","params","checkForParams"],w=function(e,n){var i=e.api,s=e.postApi,u=e.columns,c=e.ModalContent,h=e.onClick,v=e.fetchOnFirstRun,m=void 0!==v&&v,p=e.params,x=(e.checkForParams,(0,d.Z)(e,j)),b=(0,l.Z)({link:i,fetchOnFirstRun:m,params:p,checkForParams:!0}),f=b.data,C=b.runFetch,w=b.loading,R=(0,_.Z)({api:s,runFetch:C}).onSaveAndInsertion,k=(0,o.useState)({}),y=(0,t.Z)(k,2),F=y[0],T=y[1],O=(0,o.useState)(!1),S=(0,t.Z)(O,2),A=S[0],E=S[1],I=(0,o.useCallback)((function(){T({query_status:"n"}),E(!0)}),[T]),q=(0,o.useCallback)((function(){T((0,a.Z)((0,a.Z)({},F),{},{query_status:"u"})),E(!0)}),[F,T]),L=(0,o.useCallback)((function(){E(!1)}),[]);return(0,o.useImperativeHandle)(n,(function(){return{runFetch:C}})),(0,g.jsxs)(g.Fragment,{children:[c&&(0,g.jsx)(Z,{visible:A,onClose:L,hideCloseButton:!0,hideSaveButton:!0,label:"dtls",children:(0,g.jsx)(c,{onClose:L,selectedRow:F,refreshTable:C})}),(0,g.jsx)(r.Z,(0,a.Z)({dataSource:null===f||void 0===f?void 0:f.data,columns:u,onAdd:I,onEdit:q,onDelete:function(){R((0,a.Z)((0,a.Z)({},F),{},{query_status:"d"}))},onSelectedRow:function(e){T(e),h&&h(e)},loading:w},x))]})},R=(0,o.memo)((0,o.forwardRef)(w))},7262:function(e,n,i){var a=i(2791),t=i(4082);n.Z=function(e){var n=e.api,i=void 0===n?"":n,d=e.runFetch,o=(0,t.Z)({link:i,additionalFunctionToRun:d,method:"POST"}).setRow,r=(0,t.Z)({link:i,additionalFunctionToRun:d,method:"PUT"}).setRow,l=(0,t.Z)({link:i,additionalFunctionToRun:d,method:"Delete"}).setRow;return{onSaveAndInsertion:(0,a.useCallback)((function(e){"n"===e.query_status?o(e):"u"===e.query_status?r(e):"d"===e.query_status&&l(e)}),[o,r,l])}}},4082:function(e,n,i){var a=i(4165),t=i(5861),d=i(9439),o=i(2791),r=i(1227),l=i(399),s=i(8382);n.Z=function(e){var n,i=e.link,u=void 0===i?"":i,c=e.noAuthorization,h=void 0!==c&&c,v=e.additionalFunctionToRun,m=e.runOnSuccess,p=e.runOnFail,x=e.method,b=void 0===x?"POST":x,f=(0,s.p)(),g="http://144.24.209.19:9090/api/".concat(l.Z[u]),C=(0,o.useState)(),Z=(0,d.Z)(C,2),_=Z[0],j=Z[1],w=(0,r.Z)().authorization,R=(0,o.useCallback)((function(e){return(n=n||(0,t.Z)((0,a.Z)().mark((function e(n){var i,t,d;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!w&&!h){e.next=17;break}return i={method:b,headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(w)},body:JSON.stringify(n)},e.prev=2,e.next=5,fetch(g,i);case 5:return t=e.sent,e.next=8,t.json();case 8:return"success"===(d=e.sent).response?(f({position:"top-right",title:"Success",description:"".concat(d.response),status:"success",duration:5e3,isClosable:!0}),m&&m()):(f({position:"top-right",title:"Error",description:"".concat(d.message),status:"error",duration:9e3,isClosable:!0}),p&&p()),j(d),v&&v(),e.abrupt("return",d);case 15:e.prev=15,e.t0=e.catch(2);case 17:case"end":return e.stop()}}),e,null,[[2,15]])})))).apply(this,arguments)}),[v,w,b,h,p,m,f,g]);return{success:_,setRow:(0,o.useCallback)((function(e){R(e)}),[R])}}},9242:function(e,n,i){i.d(n,{Z:function(){return p}});var a,t=i(1413),d=i(5987),o=i(2791),r=i(6582),l=i(930),s=i(9230),u=i(168),c=i(225).Z.input(a||(a=(0,u.Z)(["\nbackground: #fdfdfd;\nborder: 0.5px solid #cbd5e0;\nheight: 100%;\nwidth: 100%;\nborder-radius: 7px;\npadding: 0 16px;\n"]))),h=i(184),v=["disabled","value","name","Label","onChange","height","width","padding","margin"],m=function(e){var n=e.disabled,i=e.value,a=e.name,u=e.Label,m=void 0===u?"":u,p=e.onChange,x=e.height,b=void 0===x?"65px":x,f=e.width,g=void 0===f?"200px":f,C=e.padding,Z=e.margin,_=void 0===Z?"10px":Z,j=(0,d.Z)(e,v),w=(0,s.$G)().t,R=(0,o.useCallback)((function(e){p({name:a,value:+e.target.value})}),[a,p]);return(0,h.jsxs)(r.k,{direction:"column",width:g,padding:C,margin:_,height:b,children:[(0,h.jsx)(l.l,{children:w(m)}),(0,h.jsx)(c,(0,t.Z)({disabled:n,onChange:R,width:"100%",value:i,type:"number"},j))]})},p=(0,o.memo)(m)},8925:function(e,n,i){i.d(n,{Z:function(){return w}});var a=i(2791),t=i(6582),d=i(930),o=i(1413),r=i(5987),l=i(7762),s=i(9657),u=i(6992),c=["isDisabled","isInvalid","isReadOnly","isRequired"],h=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function v(e){var n=function(e){var n,i,a,t=(0,s.NJ)(),d=e.id,l=e.disabled,c=e.readOnly,v=e.required,m=e.isRequired,p=e.isInvalid,x=e.isReadOnly,b=e.isDisabled,f=e.onFocus,g=e.onBlur,C=(0,r.Z)(e,h),Z=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==t?void 0:t.hasFeedbackText)&&(null==t?void 0:t.isInvalid)&&Z.push(t.feedbackId);(null==t?void 0:t.hasHelpText)&&Z.push(t.helpTextId);return(0,o.Z)((0,o.Z)({},C),{},{"aria-describedby":Z.join(" ")||void 0,id:null!=d?d:null==t?void 0:t.id,isDisabled:null!=(n=null!=l?l:b)?n:null==t?void 0:t.isDisabled,isReadOnly:null!=(i=null!=c?c:x)?i:null==t?void 0:t.isReadOnly,isRequired:null!=(a=null!=v?v:m)?a:null==t?void 0:t.isRequired,isInvalid:null!=p?p:null==t?void 0:t.isInvalid,onFocus:(0,u.v0)(null==t?void 0:t.onFocus,f),onBlur:(0,u.v0)(null==t?void 0:t.onBlur,g)})}(e),i=n.isDisabled,a=n.isInvalid,t=n.isReadOnly,d=n.isRequired,l=(0,r.Z)(n,c);return(0,o.Z)((0,o.Z)({},l),{},{disabled:i,readOnly:t,required:d,"aria-invalid":(0,u.Qm)(a),"aria-required":(0,u.Qm)(d),"aria-readonly":(0,u.Qm)(t)})}var m=i(5597),p=i(2481),x=i(9592),b=i(1665),f=i(184),g=["className","rows"];var C=["h","minH","height","minHeight"],Z=(0,m.G)((function(e,n){var i=(0,p.mq)("Textarea",e),a=(0,x.Lr)(e),t=a.className,d=a.rows,s=v((0,r.Z)(a,g)),c=d?function(e){var n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=Object.assign({},e),t=(0,l.Z)(i);try{for(t.s();!(n=t.n()).done;){var d=n.value;d in a&&delete a[d]}}catch(o){t.e(o)}finally{t.f()}return a}(i,C):i;return(0,f.jsx)(b.m.textarea,(0,o.Z)((0,o.Z)({ref:n,rows:d},s),{},{className:(0,u.cx)("chakra-textarea",t),__css:c}))}));Z.displayName="Textarea";var _=i(9230),j=function(e){var n=e.name,i=e.Label,o=void 0===i?"name":i,r=e.placeHolder,l=e.width,s=void 0===l?"30%":l,u=e.height,c=void 0===u?"100px":u,h=e.padding,v=e.margin,m=void 0===v?"10px":v,p=e.onChange,x=e.value,b=e.disabled,g=(0,_.$G)().t,C=(0,a.useCallback)((function(e){p({name:n,value:e.target.value})}),[n,p]);return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(t.k,{direction:"column",width:s,padding:h,margin:m,height:c,children:[(0,f.jsx)(d.l,{children:g(o)}),(0,f.jsx)(Z,{value:x,onChange:C,placeholder:r,isDisabled:b,height:"100%"})]})})},w=(0,a.memo)(j)},8456:function(e,n,i){var a=i(1413),t=i(5987),d=i(2791),o=i(9230),r=i(6582),l=i(930),s=i(3027),u=i(3387),c=i(164),h=i(184),v=["name","options","width","onChange","value","Label","margin","padding","hidden","disabled"],m=function(e){var n=e.name,i=e.options,m=e.width,p=e.onChange,x=e.value,b=e.Label,f=e.margin,g=void 0===f?"10px":f,C=e.padding,Z=e.hidden,_=void 0!==Z&&Z,j=e.disabled,w=void 0!==j&&j,R=(0,t.Z)(e,v),k=(0,o.$G)().t,y=(0,d.useCallback)((function(e){p({name:n,value:e})}),[n,p]);return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(r.k,{direction:"column",width:m,padding:C,margin:g,wrap:"wrap",hidden:_,children:[(0,h.jsx)(l.l,{fontSize:"md",as:"b",margin:"0 0 5px",children:k(b)}),(0,h.jsx)(r.k,{className:"css-1xsh6d8",width:"100%",children:(0,h.jsx)(s.E,(0,a.Z)((0,a.Z)({padding:"7px",onChange:y,value:x,width:"100%",display:"flex",gap:"15px",flexWrap:"wrap",isDisabled:w},R),{},{children:i.map((function(e){return(0,h.jsx)(u.K,{direction:"row",children:(0,h.jsx)(c.Y,{value:e.value,children:k(e.label)})})}))}))})]})})};n.Z=(0,d.memo)(m)},3057:function(e,n,i){i.r(n),i.d(n,{default:function(){return Z}});var a=i(2791),t=i(8535),d=i(9457),o=i(7940),r=[{title:"dt",dataIndex:"voucher_date",width:"10%"},{title:"amnt",dataIndex:"voucher_amount",width:"10%"},{title:"vchrnm",dataIndex:"voucher_id",width:"10%"},{title:"vchrnm",dataIndex:"voucher_name",width:"10%"},{title:"nts",dataIndex:"notes",width:"10%"}],l=[{label:"splr",value:"S"},{label:"cstmr",value:"C"},{label:"othr",value:"O"}],s=i(3388),u=i(1413),c=i(7262),h=i(8456),v=i(8925),m=i(9242),p=i(6888),x=i(898),b=i(184),f=function(e){var n=e.onClose,i=e.selectedRow,t=e.refreshTable,o=(0,s.Z)({initialValues:(0,u.Z)({},i)}),r=o.state,f=o.onChange,g=(0,c.Z)({api:"POST_CASHER_RECEIPT_VOUCHER_TABLE_DATA",runFetch:t}).onSaveAndInsertion,C=(0,a.useCallback)((function(){g(r),n()}),[g,r,n]);return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(d.Z,{name:"voucher_date",type:"date",onChange:f,value:null===r||void 0===r?void 0:r.voucher_date,Label:"dt",width:"47%"}),(0,b.jsx)(m.Z,{name:"voucher_amount",onChange:f,value:null===r||void 0===r?void 0:r.voucher_amount,Label:"amnt",width:"47%"}),(0,b.jsx)(h.Z,{name:"voucher_type",onChange:f,value:null===r||void 0===r?void 0:r.voucher_type,Label:"vchr",width:"47%",options:l,hidden:"u"===r.query_status}),(0,b.jsx)(p.Z,{name:"voucher_id",Api:"QUERY_CUSTOMER_AND_SUPPLIER_LIST",Label:"nm",params:{invoice_type:r.voucher_type},value:null===r||void 0===r?void 0:r.voucher_id,fetchOnFirstRun:!0,width:"47%",onChange:f}),(0,b.jsx)(v.Z,{width:"100%",name:"notes",onChange:f,value:null===r||void 0===r?void 0:r.notes,Label:"nts"}),(0,b.jsx)(x.Z,{onClick:C,label:"sv"})]})})},g=(0,a.memo)(f),C=function(){var e=(0,s.Z)({initialValues:{date_from:"",date_to:""}}),n=e.state,i=e.onChange;return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(t.Z,{width:"100%",flexDirection:"column",children:[(0,b.jsxs)(t.Z,{width:"100%",children:[(0,b.jsx)(d.Z,{name:"date_from",type:"date",Label:"from",onChange:i}),(0,b.jsx)(d.Z,{name:"date_to",type:"date",Label:"to",onChange:i})]}),(0,b.jsx)(o.Z,{api:"QUERY_CASHER_RECEIPT_VOUCHER_TABLE_DATA",postApi:"POST_CASHER_RECEIPT_VOUCHER_TABLE_DATA",columns:r,hideTools:!1,canEdit:!0,canAdd:!0,canDelete:!0,rowKey:"receipt_voucher_id",params:{date_from:n.date_from,date_to:n.date_to},ModalContent:g,fetchOnFirstRun:!0})]})})},Z=(0,a.memo)(C)}}]);
//# sourceMappingURL=57.9e234bfd.chunk.js.map