"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[114],{1489:function(e,n,a){var t=a(2791),l=a(4224),i=a(9230),d=a(184),o=function(e){var n=e.saveTitle,a=void 0===n?"sv":n,t=e.onOK,o=e.disabled,r=e.width,m=void 0===r?"10%":r,s=e.margin,u=void 0===s?"5px":s,c=e.padding,h=(0,i.$G)().t;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(l.z,{colorScheme:"blue",onClick:t,disabled:o,style:{width:m,margin:u,padding:c},children:h(a)})})};n.Z=(0,t.memo)(o)},3388:function(e,n,a){a.d(n,{Z:function(){return m}});var t=a(3433),l=a(4942),i=a(1413),d=a(9439),o=a(2791),r=function(e){var n=(0,o.useRef)();return(0,o.useEffect)((function(){n.current=e})),n.current},m=function(e){var n=e.initialValues,a=(0,o.useState)(n),m=(0,d.Z)(a,2),s=m[0],u=m[1],c=(0,o.useRef)(!1),h=r(n),p=(0,o.useCallback)((function(){return!Object.is(JSON.stringify(h),JSON.stringify(n))}),[n,h]);(0,o.useEffect)((function(){p()&&u((0,i.Z)({},n))}),[p,n]);var v=(0,o.useCallback)((function(){c.current=!1,u((function(){return n}))}),[n]);(0,o.useEffect)((function(){return v}),[]);var g=(0,o.useCallback)((function(e){var n=e.name,a=e.value;u((0,i.Z)((0,i.Z)({},s),{},(0,l.Z)({},n,a)))}),[s]),_=(0,o.useCallback)((function(e){u(e)}),[]),f=(0,o.useCallback)((function(e){var n;u((0,i.Z)((0,i.Z)({},s),{},(n={},(0,l.Z)(n,e.name,e.value),(0,l.Z)(n,e.selectLabelName,e.label),n)))}),[s]),b=(0,o.useCallback)((function(e){var n=e.name,a=e.value;u((0,i.Z)((0,i.Z)({},s),{},(0,l.Z)({},n,[].concat((0,t.Z)(s[n]),[a]))))}),[s]);return{state:s,onChange:g,resetForm:v,handleRootState:_,handleSelectWithLabelChange:f,handleArrayChange:b}}},1746:function(e,n,a){var t=a(2791),l=a(176),i=a(4585),d=a(4792),o=a(9230),r=a(184),m=function(e){var n=e.disabled,a=e.value,m=e.name,s=void 0===m?"number":m,u=e.Label,c=void 0===u?"":u,h=e.onChange,p=e.width,v=void 0===p?"200px":p,g=e.padding,_=e.margin,f=void 0===_?"10px":_,b=e.step,x=void 0===b?1:b,y=e.min,C=void 0===y?0:y,Z=e.max,j=(0,o.$G)().t,w=(0,t.useCallback)((function(e){h({name:s,value:+e.target.value})}),[s,h]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(l.k,{direction:"column",width:v,padding:g,margin:f,children:[(0,r.jsx)(i.l,{children:j(c)}),(0,r.jsx)(d.Y2,{step:x,min:C,max:Z,isDisabled:n,value:0|a,children:(0,r.jsx)(d.zu,{onChange:w})})]})})};n.Z=(0,t.memo)(m)},7595:function(e,n,a){var t=a(2791),l=a(9230),i=a(176),d=a(4585),o=a(6069),r=a(184),m=function(e){var n=e.disabled,a=e.value,m=e.name,s=e.Label,u=void 0===s?"":s,c=e.onChange,h=e.width,p=void 0===h?"200px":h,v=e.type,g=void 0===v?"text":v,_=e.placeHolder,f=e.padding,b=e.margin,x=void 0===b?"10px":b,y=e.className,C=void 0===y?"":y,Z=e.required,j=void 0!==Z&&Z,w=(0,l.$G)().t,L=(0,t.useCallback)((function(e){c({name:m,value:e.target.value})}),[m,c]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(i.k,{direction:"column",width:p,padding:f,margin:x,children:[(0,r.jsx)(d.l,{children:w(u)}),(0,r.jsx)(o.I,{placeholder:_,size:"md",isDisabled:n,isRequired:j,onChange:L,width:"100%",className:C,value:a,type:g})]})})};n.Z=(0,t.memo)(m)},4114:function(e,n,a){a.r(n),a.d(n,{default:function(){return g}});var t=a(2791),l=a(1413),i=a(7262),d=a(3388),o=a(7595),r=a(1746),m=a(1489),s=a(184),u=function(e){var n=e.onClose,a=e.selectedRow,u=e.refreshTable,c=(0,d.Z)({initialValues:(0,l.Z)({},a)}),h=c.onChange,p=c.state,v=(0,i.Z)({api:"POST_EMPLOYEES_TABLE_DATA",runFetch:u}).onSaveAndInsertion,g=(0,t.useCallback)((function(){v(p),n()}),[p,v,n]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{name:"employee_name",value:p.employee_name,onChange:h,Label:"nm",width:"30%"}),(0,s.jsx)(o.Z,{name:"date_of_hiring",value:p.date_of_hiring,onChange:h,Label:"dtfhrng",width:"30%",type:"date"}),(0,s.jsx)(r.Z,{name:"employee_phone",value:p.employee_phone,onChange:h,Label:"phn",width:"30%"}),(0,s.jsx)(o.Z,{name:"employee_address",value:p.employee_address,onChange:h,Label:"adrs",width:"30%"}),(0,s.jsx)(r.Z,{name:"employee_mobile",value:p.employee_mobile,onChange:h,Label:"mbl",width:"30%"}),(0,s.jsx)(o.Z,{name:"employee_email",value:p.employee_email,onChange:h,Label:"eml",width:"30%"}),(0,s.jsx)(o.Z,{name:"employee_job_title",value:p.employee_job_title,onChange:h,Label:"jbtl",width:"22%"}),(0,s.jsx)(r.Z,{name:"employee_salary",value:p.employee_salary,onChange:h,Label:"slry",width:"22%"}),(0,s.jsx)(o.Z,{name:"employee_attendance_time",value:p.employee_attendance_time,onChange:h,Label:"atndnctm",width:"22%",type:"time"}),(0,s.jsx)(o.Z,{name:"employee_leaving_time",value:p.employee_leaving_time,onChange:h,Label:"lvngtm",width:"22%",type:"time"}),(0,s.jsx)(m.Z,{onOK:g})]})},c=(0,t.memo)(u),h=a(225),p=[{title:"nm",dataIndex:"employee_name",width:15},{title:"dtfhrng",dataIndex:"date_of_hiring",width:12},{title:"slry",dataIndex:"employee_salary",width:10},{title:"atndnctm",dataIndex:"employee_attendance_time",width:10},{title:"lvngtm",dataIndex:"employee_leaving_time",width:10},{title:"phn",dataIndex:"employee_phone",width:15},{title:"mbl",dataIndex:"employee_mobile",width:15},{title:"adrs",dataIndex:"employee_address",width:20}],v=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(h.Z,{api:"QUERY_EMPLOYEES_TABLE_DATA",postApi:"POST_EMPLOYEES_TABLE_DATA",columns:p,hideTools:!1,canEdit:!0,canAdd:!0,canDelete:!0,rowKey:"employee_id",ModalContent:c,fetchOnFirstRun:!0})})},g=(0,t.memo)(v)}}]);
//# sourceMappingURL=114.ef355a61.chunk.js.map