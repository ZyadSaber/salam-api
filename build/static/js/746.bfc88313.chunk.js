"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[746],{3746:function(t,e,i){i.r(e),i.d(e,{default:function(){return v}});var a=i(2791),n=i(1413),d=i(9439),r=i(5987),c=i(3838),s=(i(550),i(3623)),l=i(9230),o=i(8535),u=i(184),h=function(t){var e=t.mode,i=void 0===e?"bar":e,a=t.width,n=t.height,d=t.margin,r=t.padding,c=t.label,h=void 0===c?"chart":c,m=t.dataSource,_=(0,l.$G)().t;return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(o.Z,{flexDirection:"column",width:a,height:n,margin:d,padding:r,children:[(0,u.jsx)(o.Z,{width:"100%",justifyContent:"center",children:(0,u.jsx)("p",{children:_(h)})}),m&&function(){switch(i){case"line":return(0,u.jsx)(s.kL,{type:"line",data:m});case"pie":return(0,u.jsx)(s.kL,{type:"pie",data:m});case"bar":return(0,u.jsx)(s.kL,{type:"bar",data:m})}}()]})})},m=(0,a.memo)(h),_=["api","params"],x=function(t){var e=t.api,i=t.params,s=(0,r.Z)(t,_),l=(0,a.useState)({labels:[],datasets:[{label:"",data:[]}]}),o=(0,d.Z)(l,2),h=o[0],x=o[1],p=(0,c.Z)({link:e,fetchOnFirstRun:!0,params:i}).data;return(0,a.useEffect)((function(){Array.isArray(p)||x(p)}),[p]),(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(m,(0,n.Z)({dataSource:h},s))})},p=(0,a.memo)(x),w=i(225),f=[{title:"no",dataIndex:"customer_invoice_id",width:"5%"},{title:"nm",dataIndex:"invoice_holder_name",width:"10%"},{title:"total",dataIndex:"customer_invoice_total",width:"5%"},{title:"discount",dataIndex:"customer_invoice_discount",width:"5%"},{title:"total after",dataIndex:"customer_invoice_after_discount",width:"5%"},{title:"paid",dataIndex:"customer_invoice_paid",width:"5%"},{title:"credit",dataIndex:"customer_invoice_credit",width:"5%"}],I=[{title:"no",dataIndex:"invoice_id",width:"15%"},{title:"nm",dataIndex:"invoice_holder_name",width:"20%"},{title:"dt",dataIndex:"invoice_date",width:"10%"},{title:"total",dataIndex:"invoice_after_discount",width:"10%"}],j=function(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(o.Z,{width:"100%",children:[(0,u.jsxs)(o.Z,{width:"75%",flexDirection:"column",children:[(0,u.jsx)(w.Z,{api:"QUERY_CUSTOMERS_INVOICES_FOT_TODAY",rowKey:"",columns:f,fetchOnFirstRun:!0,label:"cstmrs"}),(0,u.jsx)(w.Z,{api:"QUERY_SUPPLIERS_INVOICES_FOT_TODAY",rowKey:"",columns:I,fetchOnFirstRun:!0,label:"splrs"})]}),(0,u.jsxs)(o.Z,{width:"25%",flexDirection:"column",children:[(0,u.jsx)(p,{api:"QUERY_INVOICES_CHART_DATA",label:"invcs",mode:"pie",width:"100%"}),(0,u.jsx)(p,{api:"QUERY_MAIN_CHART_DATA",label:"vault",mode:"pie",width:"100%"})]})]})})},v=(0,a.memo)(j)}}]);
//# sourceMappingURL=746.bfc88313.chunk.js.map