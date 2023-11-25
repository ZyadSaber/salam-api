"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[800],{4209:(e,n,a)=>{a.d(n,{Z:()=>u});var t,l=a(2791),i=a(4826),d=a(168),r=a(225),o=a(5353);const s=(0,r.Z)(o.Z)(t||(t=(0,d.Z)(["\n  width: 100%;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  margin: 0;\n  background-color: white;\n  transition: border-color 0.3s;\n  box-sizing: border-box;\n\n  &:focus {\n    outline: none !important;\n    border-color: #007bff;\n  }\n"])));var h=a(184);const c=e=>{let{height:n="65px",width:a="200px",options:t,onChange:l,label:d,value:r,name:o,margin:c,padding:u,onSearch:m,hidden:g,disabled:p,loading:b,mode:v}=e;return(0,h.jsx)(i.Z,{label:d,hasContent:r&&r.toString(),margin:c,padding:u,height:n,width:a,hidden:g,top:"7px",children:(0,h.jsx)(s,{options:t,bordered:!1,allowClear:!0,showSearch:!0,onSearch:m,onChange:(e,n)=>{l({name:o,value:e,option:n})},filterOption:!1,loading:b,disabled:b||p,mode:v,placeholder:""})})},u=(0,l.memo)(c)},6888:(e,n,a)=>{a.d(n,{Z:()=>o});var t=a(2791),l=a(4209),i=a(890),d=a(184);const r=e=>{let{width:n,api:a,onChange:r,label:o,name:s="",value:h=0,withLabel:c=!1,padding:u,margin:m,params:g,selectLabelName:p="label_select",...b}=e;const{data:v,runFetch:x,loading:w}=(0,i.Z)({link:a,fetchOnFirstRun:!0,params:g,checkForParams:!0}),C=(0,t.useCallback)((e=>{}),[]);return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(l.Z,{options:v,onChange:r,label:o,value:h,name:s,width:n,withLabel:c,margin:m,padding:u,selectLabelName:p,onSearch:C,loading:w,...b})})},o=(0,t.memo)(r)},3557:(e,n,a)=>{a.d(n,{Z:()=>s});var t=a(2791),l=a(5410),i=a(4360),d=a(6409),r=a(184);const o=e=>{let{width:n,onSearch:a,height:t,margin:o="0",onClear:s,noSearch:h,noClear:c,disabled:u}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(l.Z,{width:n,padding:"0",height:t,margin:o,justifyContent:"space-between",children:[(0,r.jsx)(d.Z,{hidden:h,disabled:u,iconName:"search",label:"search",height:"100%",onClick:a,width:"70%",padding:"0",backGround:i.w.primary,margin:"0"}),(0,r.jsx)(d.Z,{hidden:c,iconName:"clear",height:"100%",onClick:s,width:"25%",padding:"0",backGround:i.w.white,margin:"0"})]})})},s=(0,t.memo)(o)},4826:(e,n,a)=>{a.d(n,{Z:()=>m});var t,l,i=a(2791),d=a(9230),r=a(168),o=a(225);const s=o.Z.div(t||(t=(0,r.Z)(["\n  position: relative;\n  margin: ",";\n  padding: ",";\n  height: ",";\n  width: ",";\n"])),(e=>{let{margin:n}=e;return n}),(e=>{let{padding:n}=e;return n||"5px 0"}),(e=>{let{height:n}=e;return n}),(e=>{let{width:n}=e;return n})),h=o.Z.label(l||(l=(0,r.Z)(["\n  position: absolute;\n  top: ",";\n  left: 10px;\n  color: #999;\n  padding: 0;\n  margin: 0;\n  transition: top 0.3s, font-size 0.3s, background-color 0.5s;\n\n  ","\n"])),(e=>{let{top:n}=e;return n||"5px"}),(e=>{let{hasContent:n}=e;return n&&"\n    top: -5px;\n    font-size: 12px;\n    color: #007bff;\n    font-size: 14px;\n    background-color: white;\n  "}));var c=a(184);const u=e=>{let{hasContent:n,name:a,label:t="",height:l,width:i="200px",padding:r,margin:o,children:u,hidden:m,top:g}=e;const{t:p}=(0,d.$G)();return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(s,{width:i,height:l,margin:o,padding:r,hidden:m,children:[u,(0,c.jsx)(h,{top:g,htmlFor:a,hasContent:n,children:p(t)})]})})},m=(0,i.memo)(u)},3388:(e,n,a)=>{a.d(n,{Z:()=>i});var t=a(2791);const l=e=>{const n=(0,t.useRef)();return(0,t.useEffect)((()=>{n.current=e})),n.current},i=e=>{let{initialValues:n}=e;const[a,i]=(0,t.useState)(n),d=(0,t.useRef)(!1),r=l(n),o=(0,t.useCallback)((()=>!Object.is(JSON.stringify(r),JSON.stringify(n))),[n,r]);(0,t.useEffect)((()=>{o()&&i({...n})}),[o,n]);const s=(0,t.useCallback)((()=>{d.current=!1,i((()=>n))}),[n]);(0,t.useEffect)((()=>s),[]);const h=(0,t.useCallback)((e=>{const{name:n,value:t}=e;i({...a,[n]:t})}),[a]),c=(0,t.useCallback)((e=>{i({...a,...e})}),[a]),u=(0,t.useCallback)((e=>{i({...a,[e.name]:e.value,[e.selectLabelName]:e.label})}),[a]),m=(0,t.useCallback)((e=>{let{name:n,value:t}=e;i({...a,[n]:[...a[n],t]})}),[a]);return{state:a,onChange:h,resetForm:s,handleRootState:i,handleSelectWithLabelChange:u,handleArrayChange:m,handleMultiInput:c}}},9457:(e,n,a)=>{a.d(n,{Z:()=>u});var t,l=a(2791),i=a(4826),d=a(168),r=a(225),o=a(4360);const s=r.Z.input(t||(t=(0,d.Z)(["\n  width: 100%;\n  padding: 5px 7px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n\n  transition: border-color 0.3s;\n  box-sizing: border-box;\n  /* ","; */\n\n  &:focus {\n    outline: none !important;\n    border-color: #007bff;\n  }\n"])),(e=>{let{required:n}=e;return n&&"background-color:  ".concat(o.w.required)}));var h=a(184);const c=e=>{let{disabled:n,value:a,name:t,label:d="",onChange:r,height:o,width:c="200px",type:u="text",placeHolder:m,padding:g,margin:p,className:b,required:v,...x}=e;const w=(0,l.useCallback)((e=>{r({name:t,value:e.target.value})}),[t,r]);return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(i.Z,{label:d,hasContent:a&&a.toString(),margin:p,padding:g,height:o,width:c,children:(0,h.jsx)(s,{placeholder:m,disabled:n,required:v,onChange:w,width:"100%",className:b,value:a,type:u,...x})})})},u=(0,l.memo)(c)},4800:(e,n,a)=>{a.r(n),a.d(n,{default:()=>w});var t=a(2791),l=a(6903),i=a(6888),d=a(4209),r=a(184);const o=e=>{let{width:n="100px",onChange:a,label:l,value:i=0,name:o,withLabel:s=!1,margin:h="10px",padding:c}=e;const u=(0,t.useCallback)((()=>{let e=[];for(let n=1;n<=12;n++)e.push({label:n,value:n});return e}),[]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(d.Z,{name:o,withLabel:s,margin:h,padding:c,value:i,onChange:a,label:l,width:n,options:u()})})},s=(0,t.memo)(o),h=e=>{let{width:n="200px",onChange:a,label:l,value:i=0,name:o,withLabel:s=!1,margin:h="10px",padding:c,range:u=5}=e;const m=(0,t.useCallback)((()=>{var e=(new Date).getFullYear();let n=[];for(let a=e-u;a<=e;a++)n.push({label:a,value:a});return n}),[u]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(d.Z,{name:o,withLabel:s,margin:h,padding:c,value:i,onChange:a,label:l,width:n,options:m()})})},c=(0,t.memo)(h);var u=a(5410),m=a(3388);const g=[{title:"dt",dataIndex:"date",width:20},{title:"atndnctm",dataIndex:"attendance_time",width:17},{title:"ltm",dataIndex:"late_time",width:15},{title:"ltrsn",dataIndex:"late_reason",width:15},{title:"lvngtm",dataIndex:"leaving_time",width:20},{title:"ovrtm",dataIndex:"over_time",width:20},{title:"erlytm",dataIndex:"early_time",width:20},{title:"nts",dataIndex:"notes",width:20}];var p=a(890),b=a(3557),v=a(9457);const x=()=>{var e;const{state:n,onChange:a}=(0,m.Z)({initialValues:{employee_id:""}}),{data:t,runFetch:d}=(0,p.Z)({link:"QUERY_EMPLOYEE_SHEET_SALARY",params:{employee_id:n.employee_id,year:n.year,month:n.month}});return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(u.Z,{flexDirection:"column",padding:"0",margin:"0",width:"100%",children:[(0,r.jsxs)(u.Z,{width:"100%",margin:"0",padding:"0",bordered:!0,children:[(0,r.jsx)(i.Z,{api:"QUERY_EMPLOYEE_NAME_LIST",name:"employee_id",label:"emply",onChange:a,fetchOnFirstRun:!0,value:n.employee_id}),(0,r.jsx)(s,{name:"month",label:"mnth",onChange:a,value:n.month}),(0,r.jsx)(c,{name:"year",label:"yr",onChange:a,value:n.year,width:"15%",range:4}),(0,r.jsx)(b.Z,{onClick:d})]}),(0,r.jsx)(l.Z,{dataSource:null===t||void 0===t?void 0:t.late_cost,columns:g,hideTools:!1,canPrint:!0}),(0,r.jsxs)(u.Z,{width:"100%",margin:"0",padding:"0",justifyContent:"space-around",children:[(0,r.jsx)(v.Z,{value:null===t||void 0===t?void 0:t.salary,label:"slry",disabled:!0}),(0,r.jsx)(v.Z,{value:null===t||void 0===t?void 0:t.total_late_time,label:"tltm",disabled:!0}),(0,r.jsx)(v.Z,{value:null===t||void 0===t?void 0:t.total_over_time,label:"tlvrtm",disabled:!0}),(0,r.jsx)(v.Z,{value:null===t||void 0===t?void 0:t.total_early_leaving,label:"tlrlylvng",disabled:!0}),(0,r.jsx)(v.Z,{value:null===t||void 0===t?void 0:t.late_cost,label:"ltcs",disabled:!0}),(0,r.jsx)(v.Z,{value:null===t||void 0===t?void 0:t.over_time_cost,label:"ovrtmcst",disabled:!0}),(0,r.jsx)(v.Z,{value:null===t||void 0===t||null===(e=t.net_data)||void 0===e?void 0:e.salary,label:"ntslry",disabled:!0})]})]})})},w=(0,t.memo)(x)}}]);
//# sourceMappingURL=800.39b05d11.chunk.js.map