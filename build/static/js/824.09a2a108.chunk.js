"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[824],{8864:function(e,a,n){var t=n(2791),i=n(9230),l=n(176),r=n(4585),d=n(8886),o=n(184),u=function(e){var a=e.width,n=void 0===a?"200px":a,t=e.Options,u=void 0===t?[{label:"",value:0}]:t,c=e.onChange,s=e.Label,h=e.value,v=void 0===h?0:h,m=e.name,p=e.withLabel,f=void 0!==p&&p,g=e.margin,x=void 0===g?"10px":g,b=e.padding,C=e.placeholder,_=void 0===C?"Select":C,j=e.selectLabelName,w=void 0===j?"label_select":j,Z=(0,i.$G)().t;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(l.k,{direction:"column",width:n,padding:b,margin:x,children:[(0,o.jsx)(r.l,{fontSize:"md",as:"b",margin:"0 0 5px",children:Z(s)}),(0,o.jsx)(d.P,{placeholder:Z(_),onChange:function(e){Array.isArray(u)&&u.map((function(a){a.value===+e.target.value&&c(f?{value:a.value,selectLabelName:w,label:a.label,name:m}:{value:a.value,name:m})}))},children:Array.isArray(u)?u.map((function(e){return(0,o.jsxs)("option",{value:e.value,selected:v===e.value&&!0,children:[" ",Z(e.label)]},e.value)})):(0,o.jsx)("option",{disabled:!0,children:Z("No data")})})]})})};a.Z=(0,t.memo)(u)},6888:function(e,a,n){var t=n(2791),i=n(8864),l=n(3838),r=n(184),d=function(e){var a=e.width,n=e.Api,t=e.onChange,d=e.Label,o=e.name,u=void 0===o?"":o,c=e.value,s=void 0===c?0:c,h=e.withLabel,v=void 0!==h&&h,m=e.padding,p=e.margin,f=e.params,g=e.fetchOnFirstRun,x=void 0!==g&&g,b=e.selectLabelName,C=void 0===b?"label_select":b,_=(0,l.Z)({link:n,fetchOnFirstRun:x,params:f}).data;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i.Z,{Options:_,onChange:t,Label:d,value:s,name:u,width:a,withLabel:v,margin:p,padding:m,selectLabelName:C})})};a.Z=(0,t.memo)(d)},3388:function(e,a,n){n.d(a,{Z:function(){return u}});var t=n(3433),i=n(4942),l=n(1413),r=n(9439),d=n(2791),o=function(e){var a=(0,d.useRef)();return(0,d.useEffect)((function(){a.current=e})),a.current},u=function(e){var a=e.initialValues,n=(0,d.useState)(a),u=(0,r.Z)(n,2),c=u[0],s=u[1],h=(0,d.useRef)(!1),v=o(a),m=(0,d.useCallback)((function(){return!Object.is(JSON.stringify(v),JSON.stringify(a))}),[a,v]);(0,d.useEffect)((function(){m()&&s((0,l.Z)({},a))}),[m,a]);var p=(0,d.useCallback)((function(){h.current=!1,s((function(){return a}))}),[a]);(0,d.useEffect)((function(){return p}),[]);var f=(0,d.useCallback)((function(e){var a=e.name,n=e.value;s((0,l.Z)((0,l.Z)({},c),{},(0,i.Z)({},a,n)))}),[c]),g=(0,d.useCallback)((function(e){s(e)}),[]),x=(0,d.useCallback)((function(e){var a;s((0,l.Z)((0,l.Z)({},c),{},(a={},(0,i.Z)(a,e.name,e.value),(0,i.Z)(a,e.selectLabelName,e.label),a)))}),[c]),b=(0,d.useCallback)((function(e){var a=e.name,n=e.value;s((0,l.Z)((0,l.Z)({},c),{},(0,i.Z)({},a,[].concat((0,t.Z)(c[a]),[n]))))}),[c]);return{state:c,onChange:f,resetForm:p,handleRootState:g,handleSelectWithLabelChange:x,handleArrayChange:b}}},1746:function(e,a,n){var t=n(2791),i=n(176),l=n(4585),r=n(4792),d=n(9230),o=n(184),u=function(e){var a=e.disabled,n=e.value,u=e.name,c=void 0===u?"number":u,s=e.Label,h=void 0===s?"":s,v=e.onChange,m=e.width,p=void 0===m?"200px":m,f=e.padding,g=e.margin,x=void 0===g?"10px":g,b=e.step,C=void 0===b?1:b,_=e.min,j=void 0===_?0:_,w=e.max,Z=(0,d.$G)().t,L=(0,t.useCallback)((function(e){v({name:c,value:+e.target.value})}),[c,v]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(i.k,{direction:"column",width:p,padding:f,margin:x,children:[(0,o.jsx)(l.l,{children:Z(h)}),(0,o.jsx)(r.Y2,{step:C,min:j,max:w,isDisabled:a,value:0|n,children:(0,o.jsx)(r.zu,{onChange:L})})]})})};a.Z=(0,t.memo)(u)},8769:function(e,a,n){n.d(a,{Z:function(){return _}});var t=n(2791),i=n(176),l=n(4585),r=n(1413),d=n(5987),o=n(7762),u=n(2657),c=n(7872),s=n(9084),h=n(9592),v=n(3765),m=n(6992),p=n(184),f=["className","rows"];var g=["h","minH","height","minHeight"],x=(0,c.G)((function(e,a){var n=(0,s.mq)("Textarea",e),t=(0,h.Lr)(e),i=t.className,l=t.rows,c=(0,d.Z)(t,f),x=(0,u.Y)(c),b=l?function(e){var a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=Object.assign({},e),i=(0,o.Z)(n);try{for(i.s();!(a=i.n()).done;){var l=a.value;l in t&&delete t[l]}}catch(r){i.e(r)}finally{i.f()}return t}(n,g):n;return(0,p.jsx)(v.m.textarea,(0,r.Z)((0,r.Z)({ref:a,rows:l},x),{},{className:(0,m.cx)("chakra-textarea",i),__css:b}))}));x.displayName="Textarea";var b=n(9230),C=function(e){var a=e.name,n=e.Label,r=void 0===n?"name":n,d=e.placeHolder,o=e.width,u=void 0===o?"30%":o,c=e.height,s=void 0===c?"100px":c,h=e.padding,v=e.margin,m=void 0===v?"10px":v,f=e.onChange,g=e.value,C=e.disabled,_=(0,b.$G)().t,j=(0,t.useCallback)((function(e){f({name:a,value:e.target.value})}),[a,f]);return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(i.k,{direction:"column",width:u,padding:h,margin:m,height:s,children:[(0,p.jsx)(l.l,{children:_(r)}),(0,p.jsx)(x,{value:g,onChange:j,placeholder:d,isDisabled:C,height:"100%"})]})})},_=(0,t.memo)(C)},7595:function(e,a,n){var t=n(2791),i=n(9230),l=n(176),r=n(4585),d=n(6069),o=n(184),u=function(e){var a=e.disabled,n=e.value,u=e.name,c=e.Label,s=void 0===c?"":c,h=e.onChange,v=e.width,m=void 0===v?"200px":v,p=e.type,f=void 0===p?"text":p,g=e.placeHolder,x=e.padding,b=e.margin,C=void 0===b?"10px":b,_=e.className,j=void 0===_?"":_,w=e.required,Z=void 0!==w&&w,L=(0,i.$G)().t,A=(0,t.useCallback)((function(e){h({name:u,value:e.target.value})}),[u,h]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(l.k,{direction:"column",width:m,padding:x,margin:C,children:[(0,o.jsx)(r.l,{children:L(s)}),(0,o.jsx)(d.I,{placeholder:g,size:"md",isDisabled:a,isRequired:Z,onChange:A,width:"100%",className:j,value:n,type:f})]})})};a.Z=(0,t.memo)(u)},8456:function(e,a,n){var t=n(2791),i=n(9230),l=n(176),r=n(4585),d=n(9498),o=n(3269),u=n(2767),c=n(184),s=function(e){var a=e.name,n=e.options,s=e.width,h=e.onChange,v=e.value,m=e.Label,p=e.margin,f=void 0===p?"10px":p,g=e.padding,x=e.hidden,b=void 0!==x&&x,C=(0,i.$G)().t,_=(0,t.useCallback)((function(e){h({name:a,value:e})}),[a,h]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(l.k,{direction:"column",width:s,padding:g,margin:f,wrap:"wrap",hidden:b,children:[(0,c.jsx)(r.l,{fontSize:"md",as:"b",margin:"0 0 5px",children:C(m)}),(0,c.jsx)(l.k,{className:"css-1xsh6d8",width:"100%",children:(0,c.jsx)(d.E,{padding:"7px",onChange:_,value:v,width:"100%",display:"flex",gap:"15px",flexWrap:"wrap",children:n.map((function(e){return(0,c.jsx)(o.K,{direction:"row",children:(0,c.jsx)(u.Y,{value:e.value,children:C(e.label)})})}))})})]})})};a.Z=(0,t.memo)(s)},5824:function(e,a,n){n.r(a),n.d(a,{default:function(){return _}});var t=n(2791),i=n(8535),l=n(7595),r=n(225),d=[{title:"dt",dataIndex:"voucher_date",width:"10%"},{title:"amnt",dataIndex:"voucher_amount",width:"10%"},{title:"vchrnm",dataIndex:"voucher_id",width:"10%"},{title:"vchrnm",dataIndex:"voucher_name",width:"10%"},{title:"nts",dataIndex:"notes",width:"10%"}],o=[{label:"splr",value:"S"},{label:"cstmr",value:"C"},{label:"othr",value:"O"}],u=n(3388),c=n(1413),s=n(7262),h=n(8456),v=n(8769),m=n(1746),p=n(6888),f=n(898),g=n(184),x=function(e){var a=e.onClose,n=e.selectedRow,i=e.refreshTable,r=(0,u.Z)({initialValues:(0,c.Z)({},n)}),d=r.state,x=r.onChange,b=(0,s.Z)({api:"POST_CASHER_PAYMENT_VOUCHER_TABLE_DATA",runFetch:i}).onSaveAndInsertion,C=(0,t.useCallback)((function(){b(d),a()}),[b,d,a]);return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(l.Z,{name:"voucher_date",type:"date",onChange:x,value:null===d||void 0===d?void 0:d.voucher_date,Label:"dt",width:"47%"}),(0,g.jsx)(m.Z,{name:"voucher_amount",onChange:x,value:null===d||void 0===d?void 0:d.voucher_amount,Label:"amnt",width:"47%"}),(0,g.jsx)(h.Z,{name:"voucher_type",onChange:x,value:null===d||void 0===d?void 0:d.voucher_type,Label:"vchr",width:"47%",options:o,hidden:"u"===d.query_status}),(0,g.jsx)(p.Z,{name:"voucher_id",Api:"QUERY_CUSTOMER_AND_SUPPLIER_LIST",Label:"nm",params:{invoice_type:d.voucher_type},value:null===d||void 0===d?void 0:d.voucher_id,fetchOnFirstRun:!0,width:"47%",onChange:x}),(0,g.jsx)(v.Z,{width:"100%",name:"notes",onChange:x,value:null===d||void 0===d?void 0:d.notes,Label:"nts"}),(0,g.jsx)(f.Z,{onClick:C,label:"sv"})]})})},b=(0,t.memo)(x),C=function(){var e=(0,u.Z)({initialValues:{date_from:"",date_to:""}}),a=e.state,n=e.onChange;return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(i.Z,{width:"100%",flexDirection:"column",children:[(0,g.jsxs)(i.Z,{width:"100%",children:[(0,g.jsx)(l.Z,{name:"date_from",type:"date",Label:"from",onChange:n}),(0,g.jsx)(l.Z,{name:"date_to",type:"date",Label:"to",onChange:n})]}),(0,g.jsx)(r.Z,{api:"QUERY_CASHER_PAYMENT_VOUCHER_TABLE_DATA",postApi:"POST_CASHER_PAYMENT_VOUCHER_TABLE_DATA",columns:d,hideTools:!1,canEdit:!0,canAdd:!0,canDelete:!0,rowKey:"payment_voucher_id",params:{date_from:a.date_from,date_to:a.date_to},ModalContent:b,fetchOnFirstRun:!0})]})})},_=(0,t.memo)(C)}}]);
//# sourceMappingURL=824.09a2a108.chunk.js.map