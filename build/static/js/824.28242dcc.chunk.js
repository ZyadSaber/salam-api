"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[824],{5824:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var n=a(2791),o=a(8535),l=a(3125),d=a(6590),r=a(3479),u=a(3388),h=a(898),i=a(1413),_=a(7262),c=a(5848),s=a(8456),v=a(8925),m=a(9242),C=a(6888),p=a(1561),f=a(1489),x=[{title:"dt",dataIndex:"voucher_date",width:"15%"},{title:"amnt",dataIndex:"voucher_amount",width:"20%"},{title:"vchrnm",dataIndex:"voucher_type_name",width:"10%"},{title:"hldrnm",dataIndex:"voucher_name",width:"40%"},{title:"nts",dataIndex:"notes",width:"15%"}],A=[{label:"splr",value:"S"},{label:"cstmr",value:"C"},{label:"othr",value:"O"}],b=a(184),Z=function(e){var t=e.onClose,a=e.selectedRow,o=e.refreshTable,d=(0,u.Z)({initialValues:(0,i.Z)((0,i.Z)({},a),{},{voucher_type:a.voucher_type||"S",voucher_date:c._||a.voucher_date})}),r=d.state,h=d.onChange,x=(0,_.Z)({api:"POST_CASHER_PAYMENT_VOUCHER_TABLE_DATA",runFetch:o}).onSaveAndInsertion,Z=(0,n.useCallback)((function(){x(r),t()}),[x,r,t]),T=(0,p.Z)({validateFelids:["voucher_date","voucher_amount","voucher_type","voucher_id"],functionToRun:Z,stateToValidate:r});return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l.Z,{name:"voucher_date",onChange:h,value:r.voucher_date,label:"dt",width:"47%"}),(0,b.jsx)(m.Z,{name:"voucher_amount",onChange:h,value:r.voucher_amount,label:"amnt",width:"47%"}),(0,b.jsx)(s.Z,{name:"voucher_type",onChange:h,value:r.voucher_type,label:"vchr",width:"47%",options:A,disabled:"u"===r.query_status}),(0,b.jsx)(C.Z,{name:"voucher_id",Api:"QUERY_CUSTOMER_AND_SUPPLIER_LIST",label:"nm",params:{invoice_type:r.voucher_type},value:r.voucher_id,fetchOnFirstRun:!0,width:"47%",onChange:h}),(0,b.jsx)(v.Z,{width:"100%",name:"notes",onChange:h,value:null===r||void 0===r?void 0:r.notes,label:"nts"}),(0,b.jsx)(f.Z,{onClick:T})]})},T=(0,n.memo)(Z),w=function(){var e=(0,u.Z)({initialValues:{date_from:"",date_to:""}}),t=e.state,a=e.onChange,i=(0,d.Z)(),_=i.tableRef,c=i.fetchTableData,s=(0,n.useCallback)((function(){c({date_from:t.date_from,date_to:t.date_to})}),[c,t.date_from,t.date_to]);return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(o.Z,{width:"100%",flexDirection:"column",children:[(0,b.jsxs)(o.Z,{width:"100%",children:[(0,b.jsx)(l.Z,{name:"date_from",label:"frm",onChange:a}),(0,b.jsx)(l.Z,{name:"date_to",label:"to",onChange:a}),(0,b.jsx)(h.Z,{onClick:s,label:"srch",width:"10%"})]}),(0,b.jsx)(r.Z,{ref:_,api:"QUERY_CASHER_PAYMENT_VOUCHER_TABLE_DATA",postApi:"POST_CASHER_PAYMENT_VOUCHER_TABLE_DATA",columns:x,hideTools:!1,canEdit:!0,canAdd:!0,canDelete:!0,rowKey:"payment_voucher_id",ModalContent:T})]})})},E=(0,n.memo)(w)}}]);
//# sourceMappingURL=824.28242dcc.chunk.js.map