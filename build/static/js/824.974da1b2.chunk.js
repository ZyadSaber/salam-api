"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[824],{4209:(e,a,n)=>{n.d(a,{Z:()=>p});var l,t,i=n(2791),d=n(9230),r=n(6582),o=n(930),s=n(168),c=n(225);const u=c.Z.select(l||(l=(0,s.Z)(["\n  background: #fdfdfd;\n  border: 0.5px solid #cbd5e0;\n  height: 100%;\n  width: 100%;\n  border-radius: 7px;\n  padding: 0 10px;\n"]))),h=c.Z.option(t||(t=(0,s.Z)(["\n  padding: 100px;\n"])));var v=n(184);const m=e=>{let{height:a="65px",width:n="200px",Options:l,onChange:t,label:i,value:s=0,name:c,withLabel:m=!1,margin:p="10px",padding:b,placeholder:g="Select",selectLabelName:x="label_select"}=e;const{t:_}=(0,d.$G)();return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(r.k,{direction:"column",width:n,padding:b,margin:p,height:a,children:[(0,v.jsx)(o.l,{fontSize:"md",as:"b",margin:"0 0 5px",children:_(i)}),(0,v.jsxs)(u,{placeholder:_(g),onChange:e=>{Array.isArray(l)&&l.forEach((a=>{a.value===+e.target.value&&t(m?{value:a.value,selectLabelName:x,label:a.label,name:c}:{value:a.value,name:c})}))},children:[(0,v.jsx)(h,{children:_("Select")}),Array.isArray(l)&&0!==l.length?l.map((e=>(0,v.jsxs)(h,{value:e.value,selected:s===e.value&&!0,children:[" ",_(e.label)]},e.value))):(0,v.jsx)(h,{disabled:!0,children:_("No data")})]})]})})},p=(0,i.memo)(m)},6888:(e,a,n)=>{n.d(a,{Z:()=>o});var l=n(2791),t=n(4209),i=n(890),d=n(184);const r=e=>{let{width:a,api:n,onChange:l,label:r,name:o="",value:s=0,withLabel:c=!1,padding:u,margin:h,params:v,selectLabelName:m="label_select"}=e;const{data:p}=(0,i.Z)({link:n,fetchOnFirstRun:!0,params:v,checkForParams:!0});return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(t.Z,{Options:p,onChange:l,label:r,value:s,name:o,width:a,withLabel:c,margin:h,padding:u,selectLabelName:m})})},o=(0,l.memo)(r)},1489:(e,a,n)=>{n.d(a,{Z:()=>r});var l=n(2791),t=n(4067),i=n(184);const d=e=>{let{onOK:a,width:n="40%",label:l="sv",...d}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.Z,{onClick:a,label:"sv",width:n,...d})})},r=(0,l.memo)(d)},3125:(e,a,n)=>{n.d(a,{Z:()=>v});var l,t=n(2791),i=n(6582),d=n(930),r=n(9230),o=n(5848),s=n(168);const c=n(225).Z.input(l||(l=(0,s.Z)(["\n  background: #fdfdfd;\n  height: 100%;\n  width: 100%;\n  border-radius: 7px;\n  padding: 0 10px;\n  border: 1px solid #cbd5e0;\n"])));var u=n(184);const h=e=>{let{label:a,value:n,width:l="200px",padding:s,margin:h="10px",name:v,onChange:m,required:p=!1,...b}=e;const g=(0,t.useCallback)((e=>{m({name:v,value:e.target.value})}),[v,m]),{t:x}=(0,r.$G)();return(0,u.jsxs)(i.k,{direction:"column",width:l,padding:s,margin:h,children:[(0,u.jsx)(d.l,{children:x(a)}),(0,u.jsx)(c,{type:"date",value:""!==n?n:o._,onChange:g,...b})]})},v=(0,t.memo)(h)},5848:(e,a,n)=>{n.d(a,{_:()=>l});const l="".concat((new Date).getFullYear(),"-").concat((new Date).getMonth()+1,"-").concat((new Date).getDate())},1561:(e,a,n)=>{n.d(a,{Z:()=>i});var l=n(2791),t=n(8382);const i=e=>{let{validateFelids:a,functionToRun:n,stateToValidate:i}=e;const d=(0,t.p)();return(0,l.useCallback)((()=>{let e=[];a.forEach((a=>{void 0===i[a]||i[a]||e.push(a)})),0!==e.length?d({position:"top-right",title:"Error",description:"\n      Make sure to fill this required fields\n      ".concat(e.toString(),"\n      "),status:"info",duration:5e3,isClosable:!0}):n()}),[n,i,d,a])}},9242:(e,a,n)=>{n.d(a,{Z:()=>h});var l,t=n(2791),i=n(6582),d=n(930),r=n(9230),o=n(168);const s=n(225).Z.input(l||(l=(0,o.Z)(["\nbackground: #fdfdfd;\nborder: 0.5px solid #cbd5e0;\nheight: 100%;\nwidth: 100%;\nborder-radius: 7px;\npadding: 0 16px;\n"])));var c=n(184);const u=e=>{let{disabled:a,value:n,name:l,label:o="",onChange:u,height:h="65px",width:v="200px",padding:m,margin:p="10px",...b}=e;const{t:g}=(0,r.$G)(),x=(0,t.useCallback)((e=>{u({name:l,value:+e.target.value})}),[l,u]);return(0,c.jsxs)(i.k,{direction:"column",width:v,padding:m,margin:p,height:h,children:[(0,c.jsx)(d.l,{children:g(o)}),(0,c.jsx)(s,{disabled:a,onChange:x,width:"100%",value:n,type:"number",...b})]})},h=(0,t.memo)(u)},8925:(e,a,n)=>{n.d(a,{Z:()=>x});var l=n(2791),t=n(6582),i=n(930),d=n(9657),r=n(6992);function o(e){const{isDisabled:a,isInvalid:n,isReadOnly:l,isRequired:t,...i}=function(e){var a,n,l;const t=(0,d.NJ)(),{id:i,disabled:o,readOnly:s,required:c,isRequired:u,isInvalid:h,isReadOnly:v,isDisabled:m,onFocus:p,onBlur:b,...g}=e,x=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==t?void 0:t.hasFeedbackText)&&(null==t?void 0:t.isInvalid)&&x.push(t.feedbackId);(null==t?void 0:t.hasHelpText)&&x.push(t.helpTextId);return{...g,"aria-describedby":x.join(" ")||void 0,id:null!=i?i:null==t?void 0:t.id,isDisabled:null!=(a=null!=o?o:m)?a:null==t?void 0:t.isDisabled,isReadOnly:null!=(n=null!=s?s:v)?n:null==t?void 0:t.isReadOnly,isRequired:null!=(l=null!=c?c:u)?l:null==t?void 0:t.isRequired,isInvalid:null!=h?h:null==t?void 0:t.isInvalid,onFocus:(0,r.v0)(null==t?void 0:t.onFocus,p),onBlur:(0,r.v0)(null==t?void 0:t.onBlur,b)}}(e);return{...i,disabled:a,readOnly:l,required:t,"aria-invalid":(0,r.Qm)(n),"aria-required":(0,r.Qm)(t),"aria-readonly":(0,r.Qm)(l)}}var s=n(5597),c=n(2481),u=n(2996),h=n(1665),v=n(184);var m=["h","minH","height","minHeight"],p=(0,s.G)(((e,a)=>{const n=(0,c.mq)("Textarea",e),{className:l,rows:t,...i}=(0,u.Lr)(e),d=o(i),s=t?function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const n=Object.assign({},e);for(const l of a)l in n&&delete n[l];return n}(n,m):n;return(0,v.jsx)(h.m.textarea,{ref:a,rows:t,...d,className:(0,r.cx)("chakra-textarea",l),__css:s})}));p.displayName="Textarea";var b=n(9230);const g=e=>{let{name:a,label:n="name",placeHolder:d,width:r="30%",height:o="100px",padding:s,margin:c="10px",onChange:u,value:h,disabled:m}=e;const{t:g}=(0,b.$G)(),x=(0,l.useCallback)((e=>{u({name:a,value:e.target.value})}),[a,u]);return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(t.k,{direction:"column",width:r,padding:s,margin:c,height:o,children:[(0,v.jsx)(i.l,{children:g(n)}),(0,v.jsx)(p,{value:h,onChange:x,placeholder:d,isDisabled:m,height:"100%"})]})})},x=(0,l.memo)(g)},5824:(e,a,n)=>{n.r(a),n.d(a,{default:()=>Z});var l=n(2791),t=n(8535),i=n(3125),d=n(6590),r=n(3224),o=n(3388),s=n(4067),c=n(7262),u=n(5848),h=n(7299),v=n(8925),m=n(9242),p=n(6888),b=n(1561),g=n(1489);const x=[{title:"dt",dataIndex:"voucher_date",width:"15%"},{title:"amnt",dataIndex:"voucher_amount",width:"20%"},{title:"vchrnm",dataIndex:"voucher_type_name",width:"10%"},{title:"hldrnm",dataIndex:"voucher_name",width:"40%"},{title:"nts",dataIndex:"notes",width:"15%"}],_=[{label:"splr",value:"S"},{label:"cstmr",value:"C"},{label:"othr",value:"O"}];var w=n(184);const C=e=>{let{onClose:a,selectedRow:n,refreshTable:t}=e;const{state:d,onChange:r}=(0,o.Z)({initialValues:{...n,voucher_type:n.voucher_type||"S",voucher_date:u._||n.voucher_date}}),{onSaveAndInsertion:s}=(0,c.Z)({api:"POST_CASHER_PAYMENT_VOUCHER_TABLE_DATA",runFetch:t}),x=(0,l.useCallback)((()=>{s(d),a()}),[s,d,a]),C=(0,b.Z)({validateFelids:["voucher_date","voucher_amount","voucher_type","voucher_id"],functionToRun:x,stateToValidate:d});return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(i.Z,{name:"voucher_date",onChange:r,value:d.voucher_date,label:"dt",width:"47%"}),(0,w.jsx)(m.Z,{name:"voucher_amount",onChange:r,value:d.voucher_amount,label:"amnt",width:"47%"}),(0,w.jsx)(h.Z,{name:"voucher_type",onChange:r,value:d.voucher_type,label:"vchr",width:"47%",options:_,disabled:"u"===d.query_status}),(0,w.jsx)(p.Z,{name:"voucher_id",api:"QUERY_CUSTOMER_AND_SUPPLIER_LIST",label:"nm",params:{invoice_type:d.voucher_type},value:d.voucher_id,fetchOnFirstRun:!0,width:"47%",onChange:r}),(0,w.jsx)(v.Z,{width:"100%",name:"notes",onChange:r,value:null===d||void 0===d?void 0:d.notes,label:"nts"}),(0,w.jsx)(g.Z,{onClick:C})]})},f=(0,l.memo)(C),j=()=>{const{state:e,onChange:a}=(0,o.Z)({initialValues:{date_from:"",date_to:""}}),{tableRef:n,fetchTableData:c}=(0,d.Z)(),u=(0,l.useCallback)((()=>{c({date_from:e.date_from,date_to:e.date_to})}),[c,e.date_from,e.date_to]);return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(t.Z,{width:"100%",flexDirection:"column",children:[(0,w.jsxs)(t.Z,{width:"100%",children:[(0,w.jsx)(i.Z,{name:"date_from",label:"frm",onChange:a}),(0,w.jsx)(i.Z,{name:"date_to",label:"to",onChange:a}),(0,w.jsx)(s.Z,{onClick:u,label:"srch",width:"10%"})]}),(0,w.jsx)(r.Z,{ref:n,api:"QUERY_CASHER_PAYMENT_VOUCHER_TABLE_DATA",postApi:"POST_CASHER_PAYMENT_VOUCHER_TABLE_DATA",columns:x,hideTools:!1,canEdit:!0,canAdd:!0,canDelete:!0,rowKey:"payment_voucher_id",ModalContent:f})]})})},Z=(0,l.memo)(j)}}]);
//# sourceMappingURL=824.974da1b2.chunk.js.map