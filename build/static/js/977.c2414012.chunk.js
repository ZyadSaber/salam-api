"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[977],{1489:function(e,t,n){var i=n(2791),a=n(4224),r=n(9230),d=n(184),u=function(e){var t=e.saveTitle,n=void 0===t?"sv":t,i=e.onOK,u=e.disabled,s=e.width,l=void 0===s?"10%":s,o=e.margin,c=void 0===o?"5px":o,m=e.padding,f=(0,r.$G)().t;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a.z,{colorScheme:"blue",onClick:i,disabled:u,style:{width:l,margin:c,padding:m},children:f(n)})})};t.Z=(0,i.memo)(u)},3388:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(4942),a=n(1413),r=n(9439),d=n(2791),u=function(e){var t=(0,d.useRef)();return(0,d.useEffect)((function(){t.current=e})),t.current},s=function(e){var t=e.initialValues,n=(0,d.useState)(t),s=(0,r.Z)(n,2),l=s[0],o=s[1],c=(0,d.useRef)(!1),m=u(t),f=(0,d.useCallback)((function(){return!Object.is(JSON.stringify(m),JSON.stringify(t))}),[t,m]);(0,d.useEffect)((function(){f()&&o((0,a.Z)({},t))}),[f,t]);var h=(0,d.useCallback)((function(){c.current=!1,o((function(){return t}))}),[t]);(0,d.useEffect)((function(){return h}),[]);var v=(0,d.useCallback)((function(e){var t=e.name,n=e.value;o((0,a.Z)((0,a.Z)({},l),{},(0,i.Z)({},t,n)))}),[l]);return{state:l,onChange:v,resetForm:h}}},7595:function(e,t,n){var i=n(2791),a=n(9230),r=n(176),d=n(4585),u=n(6069),s=n(184),l=function(e){var t=e.disabled,n=e.value,l=e.name,o=e.Label,c=void 0===o?"":o,m=e.onChange,f=e.width,h=void 0===f?"200px":f,v=e.type,_=void 0===v?"text":v,p=e.placeHolder,g=e.padding,x=e.margin,b=void 0===x?"10px":x,C=e.className,Z=void 0===C?"":C,j=e.required,w=void 0!==j&&j,T=(0,a.$G)().t,A=(0,i.useCallback)((function(e){m({name:l,value:e.target.value})}),[l,m]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(r.k,{direction:"column",width:h,padding:g,margin:b,children:[(0,s.jsx)(d.l,{children:T(c)}),(0,s.jsx)(u.I,{placeholder:p,size:"md",isDisabled:t,isRequired:w,onChange:A,width:"100%",className:Z,value:n,type:_})]})})};t.Z=(0,i.memo)(l)},6007:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var i=n(2791),a=n(1413),r=n(7595),d=n(3388),u=n(7262),s=n(1489),l=n(184),o=function(e){var t=e.onClose,n=e.selectedRow,o=e.refreshTable,c=(0,d.Z)({initialValues:(0,a.Z)({},n)}),m=c.state,f=c.onChange,h=m.item_id,v=m.item_name,_=m.item_unit,p=m.item_description,g=m.query_status,x=(0,u.Z)({api:"POST_ITEMS_TABLE_DATA",runFetch:o}).onSaveAndInsertion,b=(0,i.useCallback)((function(){x({item_id:h,item_name:v,item_unit:_,item_description:p,query_status:g}),t()}),[p,h,v,_,t,x,g]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.Z,{name:"item_name",Label:"Name",onChange:f,value:v}),(0,l.jsx)(r.Z,{name:"item_unit",Label:"Unit",onChange:f,value:_}),(0,l.jsx)(r.Z,{name:"item_description",Label:"nts",onChange:f,value:p}),(0,l.jsx)(s.Z,{onOK:b})]})},c=(0,i.memo)(o),m=n(3479),f=[{title:"itmnm",dataIndex:"item_name",width:"20%"},{title:"unt",dataIndex:"item_unit",width:"20%"},{title:"nts",dataIndex:"item_description",width:"20%"},{title:"created_at",dataIndex:"created_at",width:"20%"},{title:"updated_at",dataIndex:"updated_at",width:"20%"}],h=function(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(m.Z,{api:"QUERY_ITEMS_TABLE_DATA",postApi:"POST_ITEMS_TABLE_DATA",columns:f,hideTools:!1,canEdit:!0,canAdd:!0,canDelete:!0,rowKey:"item_id",ModalContent:c,fetchOnFirstRun:!0})})},v=(0,i.memo)(h)}}]);
//# sourceMappingURL=977.c2414012.chunk.js.map