"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[824],{5824:(e,a,t)=>{t.r(a),t.d(a,{default:()=>Z});var n=t(2791),o=t(5410),l=t(8216),d=t(6590),h=t(3224),r=t(3388),s=t(81),_=t(7262),i=t(5848),u=t(4663),c=t(6259),v=t(9242),m=t(6888),C=t(1561),p=t(1489);const x=[{title:"dt",dataIndex:"voucher_date",width:"14%"},{title:"amnt",dataIndex:"voucher_amount",width:"20%"},{title:"vchrnm",dataIndex:"voucher_type_name",width:"10%"},{title:"hldrnm",dataIndex:"voucher_name",width:"40%"},{title:"nts",dataIndex:"notes",width:"15%"}],b=[{label:"splr",value:"S"},{label:"cstmr",value:"C"},{label:"othr",value:"O"}];var A=t(184);const T=e=>{let{onClose:a,selectedRow:t,refreshTable:o}=e;const{state:d,onChange:h}=(0,r.Z)({initialValues:{...t,voucher_type:t.voucher_type||"S",voucher_date:i._8||t.voucher_date}}),{onSaveAndInsertion:s}=(0,_.Z)({api:"POST_CASHER_PAYMENT_VOUCHER_TABLE_DATA",runFetch:o}),x=(0,n.useCallback)((()=>{s(d),a()}),[s,d,a]),T=(0,C.Z)({validateFelids:["voucher_date","voucher_amount","voucher_type","voucher_id"],functionToRun:x,stateToValidate:d});return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(l.Z,{name:"voucher_date",onChange:h,value:d.voucher_date,label:"dt",width:"47%"}),(0,A.jsx)(v.Z,{name:"voucher_amount",onChange:h,value:d.voucher_amount,label:"amnt",width:"47%"}),(0,A.jsx)(u.Z,{name:"voucher_type",onChange:h,value:d.voucher_type,label:"vchr",width:"47%",options:b,disabled:"u"===d.query_status}),(0,A.jsx)(m.Z,{name:"voucher_id",api:"QUERY_CUSTOMER_AND_SUPPLIER_LIST",label:"nm",params:{invoice_type:d.voucher_type},value:d.voucher_id,fetchOnFirstRun:!0,width:"47%",onChange:h}),(0,A.jsx)(c.Z,{width:"100%",name:"notes",onChange:h,value:null===d||void 0===d?void 0:d.notes,label:"nts"}),(0,A.jsx)(p.Z,{onClick:T})]})},w=(0,n.memo)(T),E=()=>{const{state:e,onChange:a}=(0,r.Z)({initialValues:{date_from:"",date_to:""}}),{tableRef:t,fetchTableData:_}=(0,d.Z)(),i=(0,n.useCallback)((()=>{_({date_from:e.date_from,date_to:e.date_to})}),[_,e.date_from,e.date_to]);return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(o.Z,{width:"100%",flexDirection:"column",children:[(0,A.jsxs)(o.Z,{width:"100%",children:[(0,A.jsx)(l.Z,{name:"date_from",label:"frm",onChange:a}),(0,A.jsx)(l.Z,{name:"date_to",label:"to",onChange:a}),(0,A.jsx)(s.Z,{onClick:i,label:"srch",width:"10%"})]}),(0,A.jsx)(h.Z,{ref:t,api:"QUERY_CASHER_PAYMENT_VOUCHER_TABLE_DATA",postApi:"POST_CASHER_PAYMENT_VOUCHER_TABLE_DATA",columns:x,hideTools:!1,canEdit:!0,canAdd:!0,canDelete:!0,rowKey:"payment_voucher_id",ModalContent:w})]})})},Z=(0,n.memo)(E)}}]);
//# sourceMappingURL=824.7305982c.chunk.js.map