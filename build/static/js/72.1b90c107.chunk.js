"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[72],{8535:function(n,e,i){var d=i(1413),a=i(9439),t=i(5987),o=i(2791),r=i(6582),l=i(184),c=["children","justifyContent","width","height","padding","margin","bordered","backgroundColor","borderColor","borderWidth","borderRadius","flexDirection","textAlign","hidden","wrap"],s=function(n){var e=n.children,i=n.justifyContent,s=n.width,u=n.height,h=n.padding,f=void 0===h?"10px":h,p=n.margin,g=n.bordered,x=void 0!==g&&g,v=n.backgroundColor,m=n.borderColor,b=void 0===m?"#3c8dcf":m,C=n.borderWidth,j=void 0===C?"px":C,w=n.borderRadius,k=void 0===w?"5px":w,_=n.flexDirection,Z=void 0===_?"row":_,A=n.textAlign,T=void 0===A?"":A,S=n.hidden,y=void 0!==S&&S,E=n.wrap,R=(0,t.Z)(n,c),D=(0,o.useState)(""),P=(0,a.Z)(D,2),N=(P[0],P[1]);return(0,o.useEffect)((function(){x&&N("".concat(j," solid ").concat(b))}),[b,j,x]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(r.k,(0,d.Z)((0,d.Z)({width:s,height:u,padding:f,margin:p,background:v,borderRadius:k,flexDirection:Z,textAlign:T,justifyContent:i,hidden:y,wrap:E?"wrap":""},R),{},{children:e}))})};e.Z=(0,o.memo)(s)},5057:function(n,e,i){i.d(e,{Z:function(){return Z}});var d=i(9439),a=i(2791),t=i(184),o=function(n){var e=n.icon,i=n.onClick,d=n.disabled,a=void 0!==d&&d,o=n.width,r=void 0===o?"30px":o,l=n.height,c=void 0===l?"30px":l,s=n.color,u=n.margin,h=void 0===u?"10px":u,f=n.padding,p=n.hidden,g=void 0!==p&&p;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("button",{style:{border:"none",width:r,height:c,backgroundColor:s,padding:f,margin:h,borderRadius:"20px"},hidden:g,onClick:i,disabled:a,children:(0,t.jsx)("i",{className:e})})})},r=(0,a.memo)(o),l=i(898),c=i(4880),s=i(4045),u=i(9230),h=i(1146),f=i.n(h),p=i(1813),g=i(2715),x=i(8773),v=i(824),m=i(1364),b=i(5802),C=i(8733),j=i(7588),w=i(2940),k=i(5606),_=i(8535),Z=function(n){var e=n.dataSource,i=n.height,o=void 0===i?"300px":i,h=n.rowKey,Z=void 0===h?"rowKey":h,A=n.columns,T=n.hideTools,S=void 0===T||T,y=n.canEdit,E=void 0!==y&&y,R=n.canAdd,D=void 0!==R&&R,P=n.canDelete,N=void 0!==P&&P,L=n.canExcel,F=void 0!==L&&L,O=n.onAdd,W=n.onEdit,I=n.onDelete,B=n.actionColumn,G=void 0!==B&&B,K=n.onAction,q=n.actionLabel,H=void 0===q?"":q,z=n.onSelectedRow,J=n.label,U=n.canPrint,V=void 0!==U&&U,Y=(n.onPrint,n.additionalButtons),$=n.onSave,M=n.canSave,Q=void 0!==M&&M,X=n.width,nn=void 0===X?"100%":X,en=n.margin,dn=void 0===en?"":en,an=n.padding,tn=void 0===an?"":an,on=n.loading,rn=void 0!==on&&on,ln=n.onDoubleClick,cn=void 0===ln?function(n){console.log(n)}:ln,sn=(0,c.TH)().pathname,un=(0,u.$G)().t,hn=(0,a.useState)(),fn=(0,d.Z)(hn,2),pn=fn[0],gn=fn[1],xn=(0,a.useCallback)((function(n){return function(){z&&z(n),gn(n)}}),[z]),vn=(0,a.useCallback)((function(n){return function(){cn&&cn(n),gn(n)}}),[cn]),mn=(0,a.useCallback)((function(){var n=sn.replace("/",""),i=s.P6.book_new(),d=s.P6.json_to_sheet(e);s.P6.book_append_sheet(i,d,n),s.NC(i,"".concat(n," ").concat((new Date).toUTCString(),".xlsx"))}),[e,sn]),bn=(0,a.useRef)();return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(p.x,{width:nn,padding:tn,margin:dn,children:[J&&(0,t.jsx)(g.x,{width:"100%",textAlign:"center",marginBottom:"7px",fontSize:"md",fontWeight:"bold",children:un(J)}),(0,t.jsxs)(_.Z,{width:"100%",padding:"0",margin:"5px 0",justifyContent:"center",hidden:S,children:[(0,t.jsx)(r,{icon:"fa-sharp fa-solid fa-plus",onClick:O,hidden:!D}),(0,t.jsx)(r,{icon:"fa-sharp fa-solid fa-pen-clip",onClick:W,hidden:!E,disabled:!pn}),(0,t.jsx)(r,{icon:"fa-sharp fa-solid fa-trash",onClick:I,hidden:!N,disabled:!pn}),Y&&Y.map((function(n){return(0,t.jsx)(r,{icon:n.icon,onClick:n.onClick,disabled:n.disabled,hidden:!1})})),(0,t.jsx)(r,{icon:"fa-solid fa-floppy-disk",onClick:$,hidden:!Q,disabled:!Q}),(0,t.jsx)(f(),{trigger:function(){return(0,t.jsx)(r,{icon:"fa-solid fa-print",hidden:!V,disabled:!V})},content:function(){return bn.current},documentTitle:"dd"}),(0,t.jsx)(r,{icon:"fa-sharp fa-regular fa-file-excel",onClick:mn,hidden:!F,disabled:!F})]}),(0,t.jsx)(x.O,{isLoaded:!rn,fadeDuration:0,children:(0,t.jsxs)(v.xu,{overflowY:"auto",height:o,children:[(0,t.jsxs)(m.i,{ref:bn,children:[(0,t.jsx)(b.h,{top:0,position:"sticky",bgColor:"#3edae6",children:(0,t.jsxs)(C.Tr,{children:[A.map((function(n){return(0,t.jsx)(j.Th,{maxWidth:n.width,minWidth:n.width,children:un(n.title)})})),(0,t.jsx)(j.Th,{hidden:!G,children:un("actn")})]})}),(0,t.jsx)(w.p,{children:null===e||void 0===e?void 0:e.map((function(n){return(0,t.jsxs)(C.Tr,{onClick:xn(n),onDoubleClick:vn(n),background:"".concat(pn===n?"#dbffbf":""),children:[A.map((function(e){return(0,t.jsx)(k.Td,{maxWidth:e.width,minWidth:e.width,children:n[e.dataIndex]})})),(0,t.jsx)(k.Td,{hidden:!G,children:(0,t.jsx)(l.Z,{label:H,onClick:function(){K(n)}})})]},n[Z])}))})]}),!Array.isArray(e)||0===e.length&&!rn?(0,t.jsx)(_.Z,{justifyContent:"center",width:"100%",children:(0,t.jsx)(g.x,{as:"b",fontSize:"md",color:"red",children:"No Data"})}):(0,t.jsx)(t.Fragment,{})]})})]})})}},1489:function(n,e,i){var d=i(1413),a=i(5987),t=i(2791),o=i(898),r=i(184),l=["onOK","width","label"],c=function(n){var e=n.onOK,i=n.width,t=void 0===i?"40%":i,c=(n.label,(0,a.Z)(n,l));return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o.Z,(0,d.Z)({onClick:e,label:"sv",width:t},c))})};e.Z=(0,t.memo)(c)},3388:function(n,e,i){i.d(e,{Z:function(){return c}});var d=i(3433),a=i(4942),t=i(1413),o=i(9439),r=i(2791),l=function(n){var e=(0,r.useRef)();return(0,r.useEffect)((function(){e.current=n})),e.current},c=function(n){var e=n.initialValues,i=(0,r.useState)(e),c=(0,o.Z)(i,2),s=c[0],u=c[1],h=(0,r.useRef)(!1),f=l(e),p=(0,r.useCallback)((function(){return!Object.is(JSON.stringify(f),JSON.stringify(e))}),[e,f]);(0,r.useEffect)((function(){p()&&u((0,t.Z)({},e))}),[p,e]);var g=(0,r.useCallback)((function(){h.current=!1,u((function(){return e}))}),[e]);(0,r.useEffect)((function(){return g}),[]);var x=(0,r.useCallback)((function(n){var e=n.name,i=n.value;u((0,t.Z)((0,t.Z)({},s),{},(0,a.Z)({},e,i)))}),[s]),v=(0,r.useCallback)((function(n){u(n)}),[]),m=(0,r.useCallback)((function(n){var e;u((0,t.Z)((0,t.Z)({},s),{},(e={},(0,a.Z)(e,n.name,n.value),(0,a.Z)(e,n.selectLabelName,n.label),e)))}),[s]),b=(0,r.useCallback)((function(n){var e=n.name,i=n.value;u((0,t.Z)((0,t.Z)({},s),{},(0,a.Z)({},e,[].concat((0,d.Z)(s[e]),[i]))))}),[s]);return{state:s,onChange:x,resetForm:g,handleRootState:v,handleSelectWithLabelChange:m,handleArrayChange:b}}},9457:function(n,e,i){i.d(e,{Z:function(){return g}});var d,a=i(1413),t=i(5987),o=i(2791),r=i(9230),l=i(6582),c=i(930),s=i(168),u=i(225).Z.input(d||(d=(0,s.Z)(["\nbackground: #fdfdfd;\nborder: 0.5px solid #cbd5e0;\nheight: 100%;\nwidth: 100%;\nborder-radius: 7px;\npadding: 0 16px;\n"]))),h=i(184),f=["disabled","value","name","Label","onChange","height","width","type","placeHolder","padding","margin","className","required"],p=function(n){var e=n.disabled,i=n.value,d=n.name,s=n.Label,p=void 0===s?"":s,g=n.onChange,x=n.height,v=void 0===x?"65px":x,m=n.width,b=void 0===m?"200px":m,C=n.type,j=void 0===C?"text":C,w=n.placeHolder,k=n.padding,_=n.margin,Z=void 0===_?"10px":_,A=n.className,T=void 0===A?"":A,S=n.required,y=(0,t.Z)(n,f),E=(0,r.$G)().t,R=(0,o.useCallback)((function(n){g({name:d,value:n.target.value})}),[d,g]);return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(l.k,{direction:"column",width:b,padding:k,margin:Z,height:v,children:[(0,h.jsx)(c.l,{children:E(p)}),(0,h.jsx)(u,(0,a.Z)({placeholder:w,disabled:e,required:S,onChange:R,width:"100%",className:T,value:i,type:j},y))]})})},g=(0,o.memo)(p)},9052:function(n,e,i){i.r(e),i.d(e,{default:function(){return v}});var d=i(2791),a=i(1413),t=i(9457),o=i(3388),r=i(7262),l=i(1489),c=i(9901),s=i(6582),u=i(184),h=function(n){var e=n.onClose,i=n.selectedRow,h=n.refreshTable,f=(0,o.Z)({initialValues:(0,a.Z)({},i)}),p=f.state,g=f.onChange,x=(0,r.Z)({api:"POST_PAGES_PARENT_DATA_TABLE",runFetch:h}).onSaveAndInsertion,v=(0,d.useCallback)((function(){x(p),e()}),[x,p,e]);return console.log(p.page_name),(0,u.jsxs)(s.k,{margin:0,padding:0,gap:0,direction:"column",width:"100%",children:[(0,u.jsxs)(s.k,{width:"100%",children:[(0,u.jsx)(t.Z,{name:"page_parent_id",Label:"page_parent_id",onChange:g,value:p.page_parent_id,width:"20%",disabled:!0}),(0,u.jsx)(t.Z,{name:"page_parent_name",Label:"page_parent_name",onChange:g,value:p.page_parent_name,width:"60%"}),(0,u.jsx)(c.Z,{name:"hidden",label:"hidden",onChange:g,value:p.hidden})]}),(0,u.jsx)(l.Z,{onClick:v})]})},f=(0,d.memo)(h),p=i(7940),g=[{title:"page_parent_id",dataIndex:"page_parent_id",width:"10%"},{title:"parent_name",dataIndex:"page_parent_name",width:"35%"},{title:"hidden",dataIndex:"hidden",width:"15%"},{title:"created_at",dataIndex:"created_at",width:"20%"},{title:"updated_at",dataIndex:"updated_at",width:"20%"}],x=function(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(p.Z,{api:"QUERY_PAGES_PARENT_DATA_TABLE",postApi:"POST_PAGES_PARENT_DATA_TABLE",columns:g,hideTools:!1,canEdit:!0,canAdd:!0,canDelete:!0,canExcel:!1,rowKey:"page_parent_id",ModalContent:f,fetchOnFirstRun:!0})})},v=(0,d.memo)(x)}}]);
//# sourceMappingURL=72.1b90c107.chunk.js.map