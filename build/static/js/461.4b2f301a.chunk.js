"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[461],{8535:function(e,i,t){var n=t(1413),o=t(9439),a=t(5987),r=t(2791),c=t(6582),d=t(184),l=["children","justifyContent","width","height","padding","margin","bordered","backgroundColor","borderColor","borderWidth","borderRadius","flexDirection","textAlign","hidden","wrap"],s=function(e){var i=e.children,t=e.justifyContent,s=e.width,u=e.height,m=e.padding,h=void 0===m?"10px":m,_=e.margin,v=e.bordered,p=void 0!==v&&v,f=e.backgroundColor,g=e.borderColor,b=void 0===g?"#3c8dcf":g,x=e.borderWidth,Z=void 0===x?"px":x,C=e.borderRadius,j=void 0===C?"5px":C,w=e.flexDirection,k=void 0===w?"row":w,y=e.textAlign,S=void 0===y?"":y,I=e.hidden,F=void 0!==I&&I,R=e.wrap,N=(0,a.Z)(e,l),T=(0,r.useState)(""),q=(0,o.Z)(T,2),L=(q[0],q[1]);return(0,r.useEffect)((function(){p&&L("".concat(Z," solid ").concat(b))}),[b,Z,p]),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(c.k,(0,n.Z)((0,n.Z)({width:s,height:u,padding:h,margin:_,background:f,borderRadius:j,flexDirection:k,textAlign:S,justifyContent:t,hidden:F,wrap:R?"wrap":""},N),{},{children:i}))})};i.Z=(0,r.memo)(s)},4209:function(e,i,t){t.d(i,{Z:function(){return v}});var n,o,a=t(2791),r=t(9230),c=t(6582),d=t(930),l=t(168),s=t(225),u=s.Z.select(n||(n=(0,l.Z)(["\n  background: #fdfdfd;\n  border: 0.5px solid #cbd5e0;\n  height: 100%;\n  width: 100%;\n  border-radius: 7px;\n  padding: 0 10px;\n"]))),m=s.Z.option(o||(o=(0,l.Z)(["\n  padding: 100px;\n"]))),h=t(184),_=function(e){var i=e.height,t=void 0===i?"65px":i,n=e.width,o=void 0===n?"200px":n,a=e.Options,l=e.onChange,s=e.label,_=e.value,v=void 0===_?0:_,p=e.name,f=e.withLabel,g=void 0!==f&&f,b=e.margin,x=void 0===b?"10px":b,Z=e.padding,C=e.placeholder,j=void 0===C?"Select":C,w=e.selectLabelName,k=void 0===w?"label_select":w,y=(0,r.$G)().t;return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(c.k,{direction:"column",width:o,padding:Z,margin:x,height:t,children:[(0,h.jsx)(d.l,{fontSize:"md",as:"b",margin:"0 0 5px",children:y(s)}),(0,h.jsxs)(u,{placeholder:y(j),onChange:function(e){Array.isArray(a)&&a.forEach((function(i){i.value===+e.target.value&&l(g?{value:i.value,selectLabelName:k,label:i.label,name:p}:{value:i.value,name:p})}))},children:[(0,h.jsx)(m,{children:y("Select")}),Array.isArray(a)&&0!==a.length?a.map((function(e){return(0,h.jsxs)(m,{value:e.value,selected:v===e.value&&!0,children:[" ",y(e.label)]},e.value)})):(0,h.jsx)(m,{disabled:!0,children:y("No data")})]})]})})},v=(0,a.memo)(_)},6888:function(e,i,t){var n=t(2791),o=t(4209),a=t(890),r=t(184),c=function(e){var i=e.width,t=e.api,n=e.onChange,c=e.label,d=e.name,l=void 0===d?"":d,s=e.value,u=void 0===s?0:s,m=e.withLabel,h=void 0!==m&&m,_=e.padding,v=e.margin,p=e.params,f=e.selectLabelName,g=void 0===f?"label_select":f,b=(0,a.Z)({link:t,fetchOnFirstRun:!0,params:p,checkForParams:!0}).data;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o.Z,{Options:b,onChange:n,label:c,value:u,name:l,width:i,withLabel:h,margin:v,padding:_,selectLabelName:g})})};i.Z=(0,n.memo)(c)},5057:function(e,i,t){t.d(i,{Z:function(){return j}});var n=t(9439),o=t(2791),a=t(184),r=function(e){var i=e.icon,t=e.onClick,n=e.disabled,o=void 0!==n&&n,r=e.width,c=void 0===r?"30px":r,d=e.height,l=void 0===d?"30px":d,s=e.color,u=e.margin,m=void 0===u?"10px":u,h=e.padding,_=e.hidden,v=void 0!==_&&_;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("button",{style:{border:"none",width:c,height:l,backgroundColor:s,padding:h,margin:m,borderRadius:"20px"},hidden:v,onClick:t,disabled:o,children:(0,a.jsx)("i",{className:i})})})},c=(0,o.memo)(r),d=t(898),l=t(4880),s=t(4045),u=t(9230),m=t(1813),h=t(2715),_=t(8773),v=t(824),p=t(1364),f=t(5802),g=t(8733),b=t(7588),x=t(2940),Z=t(5606),C=t(8535),j=function(e){var i=e.dataSource,t=e.height,r=void 0===t?"300px":t,j=e.rowKey,w=void 0===j?"rowKey":j,k=e.columns,y=e.hideTools,S=void 0===y||y,I=e.canEdit,F=void 0!==I&&I,R=e.canAdd,N=void 0!==R&&R,T=e.canDelete,q=void 0!==T&&T,L=e.canExcel,P=void 0!==L&&L,A=e.onAdd,O=e.onEdit,D=e.onDelete,E=e.actionColumn,z=void 0!==E&&E,M=e.onAction,W=e.actionLabel,H=void 0===W?"":W,B=e.onSelectedRow,G=e.label,V=e.canPrint,J=void 0!==V&&V,U=e.onPrint,Y=e.additionalButtons,$=e.onSave,Q=e.canSave,K=void 0!==Q&&Q,X=e.width,ee=void 0===X?"100%":X,ie=e.margin,te=void 0===ie?"":ie,ne=e.padding,oe=void 0===ne?"":ne,ae=e.loading,re=void 0!==ae&&ae,ce=e.onDoubleClick,de=(0,l.TH)().pathname,le=(0,u.$G)().t,se=(0,o.useState)(),ue=(0,n.Z)(se,2),me=ue[0],he=ue[1],_e=(0,o.useCallback)((function(e){return function(){B&&B(e),he(e)}}),[B]),ve=(0,o.useCallback)((function(e){return function(){ce&&ce(e),he(e)}}),[ce]),pe=(0,o.useCallback)((function(){var e=de.replace("/",""),t=s.P6.book_new(),n=s.P6.json_to_sheet(i);s.P6.book_append_sheet(t,n,e),s.NC(t,"".concat(e," ").concat((new Date).toUTCString(),".xlsx"))}),[i,de]),fe=(0,o.useRef)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(m.x,{width:ee,padding:oe,margin:te,children:[G&&(0,a.jsx)(h.x,{width:"100%",textAlign:"center",marginBottom:"7px",fontSize:"md",fontWeight:"bold",children:le(G)}),(0,a.jsxs)(C.Z,{width:"100%",padding:"0",margin:"5px 0",justifyContent:"center",hidden:S,children:[(0,a.jsx)(c,{icon:"fa-sharp fa-solid fa-plus",onClick:A,hidden:!N}),(0,a.jsx)(c,{icon:"fa-sharp fa-solid fa-pen-clip",onClick:O,hidden:!F,disabled:!me}),(0,a.jsx)(c,{icon:"fa-sharp fa-solid fa-trash",onClick:D,hidden:!q,disabled:!me}),Y&&Y.map((function(e){return(0,a.jsx)(c,{icon:e.icon,onClick:e.onClick,disabled:e.disabled,hidden:!1})})),(0,a.jsx)(c,{icon:"fa-solid fa-floppy-disk",onClick:$,hidden:!K,disabled:!K}),(0,a.jsx)(c,{icon:"fa-solid fa-print",onClick:U,hidden:!J,disabled:!J}),(0,a.jsx)(c,{icon:"fa-sharp fa-regular fa-file-excel",onClick:pe,hidden:!P,disabled:!P})]}),(0,a.jsx)(_.O,{isLoaded:!re,fadeDuration:0,children:(0,a.jsxs)(v.xu,{overflowY:"auto",height:r,children:[(0,a.jsxs)(p.i,{ref:fe,children:[(0,a.jsx)(f.h,{top:0,position:"sticky",bgColor:"#3edae6",children:(0,a.jsxs)(g.Tr,{children:[k.map((function(e){return(0,a.jsx)(b.Th,{maxWidth:e.width,minWidth:e.width,children:le(e.title)})})),(0,a.jsx)(b.Th,{hidden:!z,children:le("actn")})]})}),(0,a.jsx)(x.p,{children:null===i||void 0===i?void 0:i.map((function(e){return(0,a.jsxs)(g.Tr,{onClick:_e(e),onDoubleClick:ve(e),background:"".concat(me===e?"#dbffbf":""),children:[k.map((function(i){return(0,a.jsx)(Z.Td,{maxWidth:i.width,minWidth:i.width,children:e[i.dataIndex]})})),(0,a.jsx)(Z.Td,{hidden:!z,children:(0,a.jsx)(d.Z,{label:H,onClick:function(){M(e)}})})]},e[w])}))})]}),!Array.isArray(i)||0===i.length&&!re?(0,a.jsx)(C.Z,{justifyContent:"center",width:"100%",children:(0,a.jsx)(h.x,{as:"b",fontSize:"md",color:"red",children:"No Data"})}):(0,a.jsx)(a.Fragment,{})]})})]})})}},5848:function(e,i,t){t.d(i,{_:function(){return n}});var n="".concat((new Date).getFullYear(),"-").concat((new Date).getMonth()+1,"-").concat((new Date).getDate())},3388:function(e,i,t){t.d(i,{Z:function(){return l}});var n=t(3433),o=t(4942),a=t(1413),r=t(9439),c=t(2791),d=function(e){var i=(0,c.useRef)();return(0,c.useEffect)((function(){i.current=e})),i.current},l=function(e){var i=e.initialValues,t=(0,c.useState)(i),l=(0,r.Z)(t,2),s=l[0],u=l[1],m=(0,c.useRef)(!1),h=d(i),_=(0,c.useCallback)((function(){return!Object.is(JSON.stringify(h),JSON.stringify(i))}),[i,h]);(0,c.useEffect)((function(){_()&&u((0,a.Z)({},i))}),[_,i]);var v=(0,c.useCallback)((function(){m.current=!1,u((function(){return i}))}),[i]);(0,c.useEffect)((function(){return v}),[]);var p=(0,c.useCallback)((function(e){var i=e.name,t=e.value;u((0,a.Z)((0,a.Z)({},s),{},(0,o.Z)({},i,t)))}),[s]),f=(0,c.useCallback)((function(e){u((0,a.Z)((0,a.Z)({},s),e))}),[s]),g=(0,c.useCallback)((function(e){var i;u((0,a.Z)((0,a.Z)({},s),{},(i={},(0,o.Z)(i,e.name,e.value),(0,o.Z)(i,e.selectLabelName,e.label),i)))}),[s]),b=(0,c.useCallback)((function(e){var i=e.name,t=e.value;u((0,a.Z)((0,a.Z)({},s),{},(0,o.Z)({},i,[].concat((0,n.Z)(s[i]),[t]))))}),[s]);return{state:s,onChange:p,resetForm:v,handleRootState:u,handleSelectWithLabelChange:g,handleArrayChange:b,handleMultiInput:f}}},4082:function(e,i,t){var n=t(4165),o=t(5861),a=t(9439),r=t(2791),c=t(1227),d=t(399),l=t(8382);i.Z=function(e){var i,t=e.link,s=void 0===t?"":t,u=e.noAuthorization,m=void 0!==u&&u,h=e.additionalFunctionToRun,_=e.runOnSuccess,v=e.runOnFail,p=e.method,f=void 0===p?"POST":p,g=(0,l.p)(),b="http://144.24.209.19:9090/api/".concat(d.Z[s]),x=(0,r.useState)(),Z=(0,a.Z)(x,2),C=Z[0],j=Z[1],w=(0,c.Z)().authorization,k=(0,r.useCallback)((function(e){return(i=i||(0,o.Z)((0,n.Z)().mark((function e(i){var t,o,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!w&&!m){e.next=17;break}return t={method:f,headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(w)},body:JSON.stringify(i)},e.prev=2,e.next=5,fetch(b,t);case 5:return o=e.sent,e.next=8,o.json();case 8:return"success"===(a=e.sent).response?(g({position:"top-right",title:"Success",description:"".concat(a.response),status:"success",duration:5e3,isClosable:!0}),_&&_()):(g({position:"top-right",title:"Error",description:"".concat(a.message),status:"error",duration:9e3,isClosable:!0}),v&&v()),j(a),h&&h(),e.abrupt("return",a);case 15:e.prev=15,e.t0=e.catch(2);case 17:case"end":return e.stop()}}),e,null,[[2,15]])})))).apply(this,arguments)}),[h,w,f,m,v,_,g,b]);return{success:C,setRow:(0,r.useCallback)((function(e){k(e)}),[k])}}},1561:function(e,i,t){var n=t(2791),o=t(8382);i.Z=function(e){var i=e.validateFelids,t=e.functionToRun,a=e.stateToValidate,r=(0,o.p)();return(0,n.useCallback)((function(){var e=[];i.forEach((function(i){void 0===a[i]||a[i]||e.push(i)})),0!==e.length?r({position:"top-right",title:"Error",description:"\n      Make sure to fill this required fields\n      ".concat(e.toString(),"\n      "),status:"info",duration:5e3,isClosable:!0}):t()}),[t,a,r,i])}},9242:function(e,i,t){t.d(i,{Z:function(){return v}});var n,o=t(1413),a=t(5987),r=t(2791),c=t(6582),d=t(930),l=t(9230),s=t(168),u=t(225).Z.input(n||(n=(0,s.Z)(["\nbackground: #fdfdfd;\nborder: 0.5px solid #cbd5e0;\nheight: 100%;\nwidth: 100%;\nborder-radius: 7px;\npadding: 0 16px;\n"]))),m=t(184),h=["disabled","value","name","label","onChange","height","width","padding","margin"],_=function(e){var i=e.disabled,t=e.value,n=e.name,s=e.label,_=void 0===s?"":s,v=e.onChange,p=e.height,f=void 0===p?"65px":p,g=e.width,b=void 0===g?"200px":g,x=e.padding,Z=e.margin,C=void 0===Z?"10px":Z,j=(0,a.Z)(e,h),w=(0,l.$G)().t,k=(0,r.useCallback)((function(e){v({name:n,value:+e.target.value})}),[n,v]);return(0,m.jsxs)(c.k,{direction:"column",width:b,padding:x,margin:C,height:f,children:[(0,m.jsx)(d.l,{children:w(_)}),(0,m.jsx)(u,(0,o.Z)({disabled:i,onChange:k,width:"100%",value:t,type:"number"},j))]})},v=(0,r.memo)(_)},9457:function(e,i,t){t.d(i,{Z:function(){return v}});var n,o=t(1413),a=t(5987),r=t(2791),c=t(9230),d=t(6582),l=t(930),s=t(168),u=t(225).Z.input(n||(n=(0,s.Z)(["\nbackground: #fdfdfd;\nborder: 0.5px solid #cbd5e0;\nheight: 100%;\nwidth: 100%;\nborder-radius: 7px;\npadding: 0 16px;\n"]))),m=t(184),h=["disabled","value","name","label","onChange","height","width","type","placeHolder","padding","margin","className","required"],_=function(e){var i=e.disabled,t=e.value,n=e.name,s=e.label,_=void 0===s?"":s,v=e.onChange,p=e.height,f=void 0===p?"65px":p,g=e.width,b=void 0===g?"200px":g,x=e.type,Z=void 0===x?"text":x,C=e.placeHolder,j=e.padding,w=e.margin,k=void 0===w?"10px":w,y=e.className,S=void 0===y?"":y,I=e.required,F=(0,a.Z)(e,h),R=(0,c.$G)().t,N=(0,r.useCallback)((function(e){v({name:n,value:e.target.value})}),[n,v]);return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(d.k,{direction:"column",width:b,padding:j,margin:k,height:f,children:[(0,m.jsx)(l.l,{children:R(_)}),(0,m.jsx)(u,(0,o.Z)({placeholder:C,disabled:i,required:I,onChange:N,width:"100%",className:S,value:t,type:Z},F))]})})},v=(0,r.memo)(_)},9461:function(e,i,t){t.r(i),t.d(i,{default:function(){return w}});var n=t(4942),o=t(3433),a=t(2791),r=t(9457),c=t(9242),d=t(3388),l=t(4082),s=t(1561),u=t(5057),m=t(8535),h=t(6888),_=t(898),v=t(184),p=function(e){var i=e.onChange,t=e.state,o=e.handleItemMultiInput,d=e.handleSelectWithLabelChange,l=(0,a.useCallback)((function(e){var i,a=e.name,r=e.value;o((i={},(0,n.Z)(i,a,r),(0,n.Z)(i,"customer_invoice_item_size",+r*+t.customer_invoice_item_height),i))}),[o,t.customer_invoice_item_height]),s=(0,a.useCallback)((function(e){var i,a=e.name,r=e.value;o((i={},(0,n.Z)(i,a,r),(0,n.Z)(i,"customer_invoice_item_size",+t.customer_invoice_item_width*+r),i))}),[o,t.customer_invoice_item_width]),u=(0,a.useCallback)((function(e){var i,a=e.name,r=e.value;o((i={},(0,n.Z)(i,a,r),(0,n.Z)(i,"customer_invoice_item_total",+r*+t.customer_invoice_item_price*+t.customer_invoice_item_size),i))}),[o,t.customer_invoice_item_price,t.customer_invoice_item_size]),_=(0,a.useCallback)((function(e){var i,a=e.name,r=e.value;o((i={},(0,n.Z)(i,a,r),(0,n.Z)(i,"customer_invoice_item_total",+t.customer_invoice_item_quantity*+r*+t.customer_invoice_item_size),i))}),[o,t.customer_invoice_item_quantity,t.customer_invoice_item_size]);return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(m.Z,{width:"100%",flexDirection:"column",margin:"0",padding:"0",children:[(0,v.jsxs)(m.Z,{margin:"0",padding:"0",children:[(0,v.jsx)(h.Z,{api:"QUERY_PRINT_OPTIONS_LIST",onChange:d,value:t.customer_invoice_print_option_id,label:"prntnm",name:"customer_invoice_print_option_id",withLabel:!0,fetchOnFirstRun:!0,selectLabelName:"print_name"}),(0,v.jsx)(h.Z,{api:"QUERY_ITEMS_LIST",onChange:d,value:t.customer_invoice_item_id,label:"itmnm",name:"customer_invoice_item_id",withLabel:!0,fetchOnFirstRun:!0,selectLabelName:"item_name"})]}),(0,v.jsxs)(m.Z,{margin:"0",padding:"0",children:[(0,v.jsx)(c.Z,{name:"customer_invoice_item_width",value:t.customer_invoice_item_width,label:"wdth",onChange:l,width:"14%"}),(0,v.jsx)(c.Z,{name:"customer_invoice_item_height",value:t.customer_invoice_item_height,label:"hght",onChange:s,width:"14%"}),(0,v.jsx)(c.Z,{name:"customer_invoice_item_size",value:t.customer_invoice_item_size,label:"sz",onChange:i,disabled:!0,width:"14%"}),(0,v.jsx)(c.Z,{name:"customer_invoice_item_quantity",value:t.customer_invoice_item_quantity,label:"qnty",onChange:u,width:"14%"}),(0,v.jsx)(c.Z,{name:"customer_invoice_item_price",value:t.customer_invoice_item_price,label:"prc",onChange:_,width:"14%"}),(0,v.jsx)(c.Z,{name:"customer_invoice_item_total",value:t.customer_invoice_item_total,label:"total",onChange:i,disabled:!0,width:"14%"}),(0,v.jsx)(r.Z,{name:"customer_invoice_item_notes",value:t.customer_invoice_item_notes,label:"nts",onChange:i,width:"14%"})]})]})})},f=(0,a.memo)(p),g={customer_id:0,customer_invoice_date:t(5848)._,customer_invoice_items:[],query_status:"n",customer_invoice_total:0,customer_invoice_discount:0,customer_invoice_after_discount:0,customer_invoice_paid:0,customer_invoice_credit:0},b={customer_invoice_print_option_id:0,customer_invoice_item_id:0,customer_invoice_item_width:0,customer_invoice_item_height:0,customer_invoice_item_size:0,customer_invoice_item_quantity:0,customer_invoice_item_price:0,customer_invoice_item_total:0,customer_invoice_item_notes:"",item_name:"",print_name:""},x=["customer_id","customer_invoice_date","customer_invoice_items","customer_invoice_total","customer_invoice_after_discount"],Z=["customer_invoice_item_id","customer_invoice_item_width","customer_invoice_item_height","customer_invoice_item_size","customer_invoice_item_quantity","customer_invoice_item_price","customer_invoice_item_total"],C=[{title:"prntnm",width:"10%",dataIndex:"print_name"},{title:"itmnm",width:"10%",dataIndex:"item_name"},{title:"wdth",width:"10%",dataIndex:"customer_invoice_item_width"},{title:"hght",width:"10%",dataIndex:"customer_invoice_item_height"},{title:"sz",width:"10%",dataIndex:"customer_invoice_item_size"},{title:"qnty",width:"10%",dataIndex:"customer_invoice_item_quantity"},{title:"prc",width:"10%",dataIndex:"customer_invoice_item_price"},{title:"total",width:"10%",dataIndex:"customer_invoice_item_total"},{title:"nts",width:"10%",dataIndex:"customer_invoice_item_notes"}],j=function(){var e=(0,d.Z)({initialValues:g}),i=e.state,t=e.onChange,p=e.resetForm,j=e.handleMultiInput,w=e.handleArrayChange,k=(0,d.Z)({initialValues:b}),y=k.state,S=k.onChange,I=k.handleMultiInput,F=k.handleSelectWithLabelChange,R=k.resetForm,N=(0,l.Z)({link:"POST_CUSTOMER_INVOICE_DETAILS",runOnSuccess:p}).setRow,T=(0,a.useCallback)((function(){w({name:"customer_invoice_items",value:y});var e=0;i.customer_invoice_items.forEach((function(i){e+=i.customer_invoice_item_total})),j({customer_invoice_items:[].concat((0,o.Z)(i.customer_invoice_items),[y]),customer_invoice_total:e+y.customer_invoice_item_total}),R()}),[y,w,j,R,i.customer_invoice_items]),q=(0,a.useCallback)((function(e){var t,o=e.name,a=e.value;j((t={},(0,n.Z)(t,o,a),(0,n.Z)(t,"customer_invoice_after_discount",i.customer_invoice_total-+a),t))}),[j,i.customer_invoice_total]),L=(0,a.useCallback)((function(e){var t,o=e.name,a=e.value;j((t={},(0,n.Z)(t,o,a),(0,n.Z)(t,"customer_invoice_credit",i.customer_invoice_total-i.customer_invoice_discount-+a),t))}),[j,i.customer_invoice_discount,i.customer_invoice_total]),P=(0,a.useCallback)((function(){N(i)}),[N,i]),A=[{icon:"fa-solid fa-broom",onClick:p}],O=(0,s.Z)({validateFelids:Z,functionToRun:T,stateToValidate:y}),D=(0,s.Z)({validateFelids:x,functionToRun:P,stateToValidate:i});return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(m.Z,{flexDirection:"column",width:"100%",children:[(0,v.jsxs)(m.Z,{margin:"0",padding:"0",children:[(0,v.jsx)(h.Z,{api:"QUERY_CUSTOMERS_LIST",onChange:t,value:i.customer_id,label:"cstmr",name:"customer_id",fetchOnFirstRun:!0}),(0,v.jsx)(r.Z,{name:"customer_invoice_date",value:i.customer_invoice_date,label:"dt",onChange:t,type:"date"})]}),(0,v.jsx)(f,{state:y,onChange:S,handleItemMultiInput:I,handleSelectWithLabelChange:F}),(0,v.jsx)(u.Z,{columns:C,dataSource:i.customer_invoice_items,actionColumn:!0,actionLabel:"Delete",onAction:function(e){console.log(e)},hideTools:!1,onAdd:O,canAdd:!0,additionalButtons:A}),(0,v.jsxs)(m.Z,{width:"100%",justifyContent:"space-around",children:[(0,v.jsx)(c.Z,{name:"customer_invoice_total",disabled:!0,value:i.customer_invoice_total,label:"total",width:"15%"}),(0,v.jsx)(c.Z,{name:"customer_invoice_discount",value:i.customer_invoice_discount,label:"dscnt",onChange:q,width:"15%"}),(0,v.jsx)(c.Z,{name:"totalAfterDiscount",disabled:!0,value:i.customer_invoice_after_discount,label:"tlaftrdsnt",width:"15%"}),(0,v.jsx)(c.Z,{name:"customer_invoice_paid",value:i.customer_invoice_paid,label:"paid",onChange:L,width:"15%"}),(0,v.jsx)(c.Z,{name:"customer_invoice_credit",disabled:!0,value:i.customer_invoice_credit,label:"crdt",width:"15%"}),(0,v.jsx)(_.Z,{label:"sv",width:"15%",height:"50%",margin:"30px 0",onClick:D})]})]})})},w=(0,a.memo)(j)},930:function(e,i,t){t.d(i,{l:function(){return h}});var n=t(1413),o=t(5987),a=t(9657),r=t(5597),c=t(2481),d=t(9592),l=t(1665),s=t(6992),u=t(184),m=["className","children","requiredIndicator","optionalIndicator"],h=(0,r.G)((function(e,i){var t,r=(0,c.mq)("FormLabel",e),h=(0,d.Lr)(e),v=(h.className,h.children),p=h.requiredIndicator,f=void 0===p?(0,u.jsx)(_,{}):p,g=h.optionalIndicator,b=void 0===g?null:g,x=(0,o.Z)(h,m),Z=(0,a.NJ)(),C=null!=(t=null==Z?void 0:Z.getLabelProps(x,i))?t:(0,n.Z)({ref:i},x);return(0,u.jsxs)(l.m.label,(0,n.Z)((0,n.Z)({},C),{},{className:(0,s.cx)("chakra-form__label",h.className),__css:(0,n.Z)({display:"block",textAlign:"start"},r),children:[v,(null==Z?void 0:Z.isRequired)?f:b]}))}));h.displayName="FormLabel";var _=(0,r.G)((function(e,i){var t=(0,a.NJ)(),o=(0,a.e)();if(!(null==t?void 0:t.isRequired))return null;var r=(0,s.cx)("chakra-form__required-indicator",e.className);return(0,u.jsx)(l.m.span,(0,n.Z)((0,n.Z)({},null==t?void 0:t.getRequiredIndicatorProps(e,i)),{},{__css:o.requiredIndicator,className:r}))}));_.displayName="RequiredIndicator"},9657:function(e,i,t){t.d(i,{NI:function(){return k},NJ:function(){return w},e:function(){return x}});var n=t(1413),o=t(5987),a=t(9439),r=t(9886),c=t(4591),d=t(5597),l=t(2481),s=t(9592),u=t(1665),m=t(6992),h=t(2791),_=t(184),v=["id","isRequired","isInvalid","isDisabled","isReadOnly"],p=["getRootProps","htmlProps"],f=(0,r.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),g=(0,a.Z)(f,2),b=g[0],x=g[1],Z=(0,r.k)({strict:!1,name:"FormControlContext"}),C=(0,a.Z)(Z,2),j=C[0],w=C[1];var k=(0,d.G)((function(e,i){var t=(0,l.jC)("Form",e),r=function(e){var i=e.id,t=e.isRequired,r=e.isInvalid,d=e.isDisabled,l=e.isReadOnly,s=(0,o.Z)(e,v),u=(0,h.useId)(),_=i||"field-".concat(u),p="".concat(_,"-label"),f="".concat(_,"-feedback"),g="".concat(_,"-helptext"),b=(0,h.useState)(!1),x=(0,a.Z)(b,2),Z=x[0],C=x[1],j=(0,h.useState)(!1),w=(0,a.Z)(j,2),k=w[0],y=w[1],S=(0,h.useState)(!1),I=(0,a.Z)(S,2),F=I[0],R=I[1],N=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({id:g},e),{},{ref:(0,c.lq)(i,(function(e){e&&y(!0)}))})}),[g]),T=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({},e),{},{ref:i,"data-focus":(0,m.PB)(F),"data-disabled":(0,m.PB)(d),"data-invalid":(0,m.PB)(r),"data-readonly":(0,m.PB)(l),id:void 0!==e.id?e.id:p,htmlFor:void 0!==e.htmlFor?e.htmlFor:_})}),[_,d,F,r,l,p]),q=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({id:f},e),{},{ref:(0,c.lq)(i,(function(e){e&&C(!0)})),"aria-live":"polite"})}),[f]),L=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)((0,n.Z)({},e),s),{},{ref:i,role:"group"})}),[s]),P=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({},e),{},{ref:i,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!t,isInvalid:!!r,isReadOnly:!!l,isDisabled:!!d,isFocused:!!F,onFocus:function(){return R(!0)},onBlur:function(){return R(!1)},hasFeedbackText:Z,setHasFeedbackText:C,hasHelpText:k,setHasHelpText:y,id:_,labelId:p,feedbackId:f,helpTextId:g,htmlProps:s,getHelpTextProps:N,getErrorMessageProps:q,getRootProps:L,getLabelProps:T,getRequiredIndicatorProps:P}}((0,s.Lr)(e)),d=r.getRootProps,f=(r.htmlProps,(0,o.Z)(r,p)),g=(0,m.cx)("chakra-form-control",e.className);return(0,_.jsx)(j,{value:f,children:(0,_.jsx)(b,{value:t,children:(0,_.jsx)(u.m.div,(0,n.Z)((0,n.Z)({},d({},i)),{},{className:g,__css:t.container}))})})}));k.displayName="FormControl",(0,d.G)((function(e,i){var t=w(),o=x(),a=(0,m.cx)("chakra-form__helper-text",e.className);return(0,_.jsx)(u.m.div,(0,n.Z)((0,n.Z)({},null==t?void 0:t.getHelpTextProps(e,i)),{},{__css:o.helperText,className:a}))})).displayName="FormHelperText"}}]);
//# sourceMappingURL=461.4b2f301a.chunk.js.map