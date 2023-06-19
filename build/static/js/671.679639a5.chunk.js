"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[671],{1489:function(e,a,n){var t=n(2791),i=n(4224),d=n(9230),l=n(184),r=function(e){var a=e.saveTitle,n=void 0===a?"sv":a,t=e.onOK,r=e.disabled,s=e.width,u=void 0===s?"10%":s,o=e.margin,c=void 0===o?"5px":o,m=e.padding,h=(0,d.$G)().t;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(i.z,{colorScheme:"blue",onClick:t,disabled:r,style:{width:u,margin:c,padding:m},children:h(n)})})};a.Z=(0,t.memo)(r)},3388:function(e,a,n){n.d(a,{Z:function(){return u}});var t=n(3433),i=n(4942),d=n(1413),l=n(9439),r=n(2791),s=function(e){var a=(0,r.useRef)();return(0,r.useEffect)((function(){a.current=e})),a.current},u=function(e){var a=e.initialValues,n=(0,r.useState)(a),u=(0,l.Z)(n,2),o=u[0],c=u[1],m=(0,r.useRef)(!1),h=s(a),f=(0,r.useCallback)((function(){return!Object.is(JSON.stringify(h),JSON.stringify(a))}),[a,h]);(0,r.useEffect)((function(){f()&&c((0,d.Z)({},a))}),[f,a]);var v=(0,r.useCallback)((function(){m.current=!1,c((function(){return a}))}),[a]);(0,r.useEffect)((function(){return v}),[]);var p=(0,r.useCallback)((function(e){var a=e.name,n=e.value;c((0,d.Z)((0,d.Z)({},o),{},(0,i.Z)({},a,n)))}),[o]),C=(0,r.useCallback)((function(e){c(e)}),[]),b=(0,r.useCallback)((function(e){var a;c((0,d.Z)((0,d.Z)({},o),{},(a={},(0,i.Z)(a,e.name,e.value),(0,i.Z)(a,e.selectLabelName,e.label),a)))}),[o]),g=(0,r.useCallback)((function(e){var a=e.name,n=e.value;c((0,d.Z)((0,d.Z)({},o),{},(0,i.Z)({},a,[].concat((0,t.Z)(o[a]),[n]))))}),[o]);return{state:o,onChange:p,resetForm:v,handleRootState:C,handleSelectWithLabelChange:b,handleArrayChange:g}}},7595:function(e,a,n){var t=n(2791),i=n(9230),d=n(176),l=n(4585),r=n(6069),s=n(184),u=function(e){var a=e.disabled,n=e.value,u=e.name,o=e.Label,c=void 0===o?"":o,m=e.onChange,h=e.width,f=void 0===h?"200px":h,v=e.type,p=void 0===v?"text":v,C=e.placeHolder,b=e.padding,g=e.margin,x=void 0===g?"10px":g,Z=e.className,_=void 0===Z?"":Z,w=e.required,j=void 0!==w&&w,k=(0,i.$G)().t,A=(0,t.useCallback)((function(e){m({name:u,value:e.target.value})}),[u,m]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(d.k,{direction:"column",width:f,padding:b,margin:x,children:[(0,s.jsx)(l.l,{children:k(c)}),(0,s.jsx)(r.I,{placeholder:C,size:"md",isDisabled:a,isRequired:j,onChange:A,width:"100%",className:_,value:n,type:p})]})})};a.Z=(0,t.memo)(u)},9671:function(e,a,n){n.r(a),n.d(a,{default:function(){return v}});var t=n(2791),i=n(1413),d=n(7595),l=n(3388),r=n(7262),s=n(1489),u=n(184),o=function(e){var a=e.onClose,n=e.selectedRow,o=e.refreshTable,c=(0,l.Z)({initialValues:(0,i.Z)({},n)}),m=c.state,h=c.onChange,f=(0,r.Z)({api:"POST_CUSTOMER_TABLE_DATA",runFetch:o}).onSaveAndInsertion,v=m.customer_id,p=m.customer_name,C=m.email,b=m.phone,g=m.address,x=m.query_status,Z=(0,t.useCallback)((function(){f({customer_name:p,email:C,phone:b,address:g,customer_id:v,query_status:x}),a()}),[g,C,a,f,b,x,v,p]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d.Z,{name:"customer_name",Label:"Name",onChange:h,value:p,width:"47%"}),(0,u.jsx)(d.Z,{name:"email",Label:"Email",onChange:h,value:C,width:"47%"}),(0,u.jsx)(d.Z,{name:"phone",Label:"Phone",onChange:h,value:b,width:"47%"}),(0,u.jsx)(d.Z,{name:"address",Label:"Address",onChange:h,value:g,width:"100%"}),(0,u.jsx)(s.Z,{onOK:Z})]})},c=(0,t.memo)(o),m=n(3479),h=[{title:"nm",dataIndex:"customer_name",width:"20%"},{title:"eml",dataIndex:"email",width:"17%"},{title:"phn",dataIndex:"phone",width:"17%"},{title:"adrs",dataIndex:"address",width:"17%"},{title:"created_at",dataIndex:"created_at",width:"20%"},{title:"updated_at",dataIndex:"updated_at",width:"20%"}],f=function(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(m.Z,{api:"QUERY_CUSTOMER_TABLE_DATA",postApi:"POST_CUSTOMER_TABLE_DATA",columns:h,hideTools:!1,canEdit:!0,canAdd:!0,canDelete:!0,canExcel:!0,rowKey:"customer_id",ModalContent:c,fetchOnFirstRun:!0})})},v=(0,t.memo)(f)}}]);
//# sourceMappingURL=671.679639a5.chunk.js.map