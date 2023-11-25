"use strict";(self.webpackChunkelsalamapp=self.webpackChunkelsalamapp||[]).push([[855],{2866:(e,t,a)=>{a.d(t,{F:()=>c,Z:()=>n});var o=a(1694),r=a.n(o);function n(e,t,a){return r()({["".concat(e,"-status-success")]:"success"===t,["".concat(e,"-status-warning")]:"warning"===t,["".concat(e,"-status-error")]:"error"===t,["".concat(e,"-status-validating")]:"validating"===t,["".concat(e,"-has-feedback")]:a})}const c=(e,t)=>t||e},6463:(e,t,a)=>{a.d(t,{ZP:()=>I});var o=a(2791),r=a(7828),n=a(808),c=a(1534),i=a(2638);a(632);const l=o.createContext({}),s=(0,o.createContext)(void 0);var d=a(8558);let m=Object.assign({},d.Z.Modal),p=[];const u=()=>p.reduce(((e,t)=>Object.assign(Object.assign({},e),t)),d.Z.Modal);var g=a(2588);const b=e=>{const{locale:t={},children:a,_ANT_MARK__:r}=e;o.useEffect((()=>{const e=function(e){if(e){const t=Object.assign({},e);return p.push(t),m=u(),()=>{p=p.filter((e=>e!==t)),m=u()}}m=Object.assign({},d.Z.Modal)}(t&&t.Modal);return e}),[t]);const n=o.useMemo((()=>Object.assign(Object.assign({},t),{exist:!0})),[t]);return o.createElement(g.Z.Provider,{value:n},a)};var h=a(3979),v=a(7219),f=a(1929),y=a(3742),w=a(9391),k=a(4937),x=a(2823);const C="-ant-".concat(Date.now(),"-").concat(Math.random());function P(e,t){const a=function(e,t){const a={},o=(e,t)=>{let a=e.clone();return a=(null===t||void 0===t?void 0:t(a))||a,a.toRgbString()},r=(e,t)=>{const r=new w.C(e),n=(0,y.R_)(r.toRgbString());a["".concat(t,"-color")]=o(r),a["".concat(t,"-color-disabled")]=n[1],a["".concat(t,"-color-hover")]=n[4],a["".concat(t,"-color-active")]=n[6],a["".concat(t,"-color-outline")]=r.clone().setAlpha(.2).toRgbString(),a["".concat(t,"-color-deprecated-bg")]=n[0],a["".concat(t,"-color-deprecated-border")]=n[2]};if(t.primaryColor){r(t.primaryColor,"primary");const e=new w.C(t.primaryColor),n=(0,y.R_)(e.toRgbString());n.forEach(((e,t)=>{a["primary-".concat(t+1)]=e})),a["primary-color-deprecated-l-35"]=o(e,(e=>e.lighten(35))),a["primary-color-deprecated-l-20"]=o(e,(e=>e.lighten(20))),a["primary-color-deprecated-t-20"]=o(e,(e=>e.tint(20))),a["primary-color-deprecated-t-50"]=o(e,(e=>e.tint(50))),a["primary-color-deprecated-f-12"]=o(e,(e=>e.setAlpha(.12*e.getAlpha())));const c=new w.C(n[0]);a["primary-color-active-deprecated-f-30"]=o(c,(e=>e.setAlpha(.3*e.getAlpha()))),a["primary-color-active-deprecated-d-02"]=o(c,(e=>e.darken(2)))}t.successColor&&r(t.successColor,"success"),t.warningColor&&r(t.warningColor,"warning"),t.errorColor&&r(t.errorColor,"error"),t.infoColor&&r(t.infoColor,"info");const n=Object.keys(a).map((t=>"--".concat(e,"-").concat(t,": ").concat(a[t],";")));return"\n  :root {\n    ".concat(n.join("\n"),"\n  }\n  ").trim()}(e,t);(0,k.Z)()&&(0,x.hq)(a,"".concat(C,"-dynamic-theme"))}var j=a(9125),O=a(1815);const S=function(){return{componentDisabled:(0,o.useContext)(j.Z),componentSize:(0,o.useContext)(O.Z)}};var E=a(2034);var $=a(8568),M=a(6875);function Z(e){const{children:t}=e,[,a]=(0,M.Z)(),{motion:r}=a,n=o.useRef(!1);return n.current=n.current||!1===r,n.current?o.createElement($.zt,{motion:r},t):t}const _=()=>null;var T=a(154),A=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]])}return a};const R=["getTargetContainer","getPopupContainer","renderEmpty","pageHeader","input","pagination","form","select","button"];let z,Y,F;function N(){return z||"ant"}const q=e=>{const{children:t,csp:a,autoInsertSpaceInButton:m,alert:p,anchor:u,form:g,locale:y,componentSize:w,direction:k,space:x,virtual:C,dropdownMatchSelectWidth:P,popupMatchSelectWidth:S,popupOverflow:$,legacyLocale:M,parentContext:z,iconPrefixCls:Y,theme:F,componentDisabled:N,segmented:q,statistic:D,spin:I,calendar:K,carousel:U,cascader:L,collapse:W,typography:B,checkbox:H,descriptions:G,divider:Q,drawer:V,skeleton:J,steps:X,image:ee,layout:te,list:ae,mentions:oe,modal:re,progress:ne,result:ce,slider:ie,breadcrumb:le,menu:se,pagination:de,input:me,empty:pe,badge:ue,radio:ge,rate:be,switch:he,transfer:ve,avatar:fe,message:ye,tag:we,table:ke,card:xe,tabs:Ce,timeline:Pe,timePicker:je,upload:Oe,notification:Se,tree:Ee,colorPicker:$e,datePicker:Me,rangePicker:Ze,flex:_e,wave:Te,dropdown:Ae,warning:Re}=e,ze=o.useCallback(((t,a)=>{const{prefixCls:o}=e;if(a)return a;const r=o||z.getPrefixCls("");return t?"".concat(r,"-").concat(t):r}),[z.getPrefixCls,e.prefixCls]),Ye=Y||z.iconPrefixCls||f.oR,Fe=a||z.csp;(0,T.Z)(Ye,Fe);const Ne=function(e,t){const a=e||{},o=!1!==a.inherit&&t?t:h.u_;return(0,c.Z)((()=>{if(!e)return t;const r=Object.assign({},o.components);return Object.keys(e.components||{}).forEach((t=>{r[t]=Object.assign(Object.assign({},r[t]),e.components[t])})),Object.assign(Object.assign(Object.assign({},o),a),{token:Object.assign(Object.assign({},o.token),a.token),components:r})}),[a,o],((e,t)=>e.some(((e,a)=>{const o=t[a];return!(0,E.Z)(e,o,!0)}))))}(F,z.theme);const qe={csp:Fe,autoInsertSpaceInButton:m,alert:p,anchor:u,locale:y||M,direction:k,space:x,virtual:C,popupMatchSelectWidth:null!==S&&void 0!==S?S:P,popupOverflow:$,getPrefixCls:ze,iconPrefixCls:Ye,theme:Ne,segmented:q,statistic:D,spin:I,calendar:K,carousel:U,cascader:L,collapse:W,typography:B,checkbox:H,descriptions:G,divider:Q,drawer:V,skeleton:J,steps:X,image:ee,input:me,layout:te,list:ae,mentions:oe,modal:re,progress:ne,result:ce,slider:ie,breadcrumb:le,menu:se,pagination:de,empty:pe,badge:ue,radio:ge,rate:be,switch:he,transfer:ve,avatar:fe,message:ye,tag:we,table:ke,card:xe,tabs:Ce,timeline:Pe,timePicker:je,upload:Oe,notification:Se,tree:Ee,colorPicker:$e,datePicker:Me,rangePicker:Ze,flex:_e,wave:Te,dropdown:Ae,warning:Re},De=Object.assign({},z);Object.keys(qe).forEach((e=>{void 0!==qe[e]&&(De[e]=qe[e])})),R.forEach((t=>{const a=e[t];a&&(De[t]=a)}));const Ie=(0,c.Z)((()=>De),De,((e,t)=>{const a=Object.keys(e),o=Object.keys(t);return a.length!==o.length||a.some((a=>e[a]!==t[a]))})),Ke=o.useMemo((()=>({prefixCls:Ye,csp:Fe})),[Ye,Fe]);let Ue=o.createElement(o.Fragment,null,o.createElement(_,{dropdownMatchSelectWidth:P}),t);const Le=o.useMemo((()=>{var e,t,a,o;return(0,i.T)((null===(e=d.Z.Form)||void 0===e?void 0:e.defaultValidateMessages)||{},(null===(a=null===(t=Ie.locale)||void 0===t?void 0:t.Form)||void 0===a?void 0:a.defaultValidateMessages)||{},(null===(o=Ie.form)||void 0===o?void 0:o.validateMessages)||{},(null===g||void 0===g?void 0:g.validateMessages)||{})}),[Ie,null===g||void 0===g?void 0:g.validateMessages]);Object.keys(Le).length>0&&(Ue=o.createElement(s.Provider,{value:Le},Ue)),y&&(Ue=o.createElement(b,{locale:y,_ANT_MARK__:"internalMark"},Ue)),(Ye||Fe)&&(Ue=o.createElement(n.Z.Provider,{value:Ke},Ue)),w&&(Ue=o.createElement(O.q,{size:w},Ue)),Ue=o.createElement(Z,null,Ue);const We=o.useMemo((()=>{const e=Ne||{},{algorithm:t,token:a,components:o}=e,n=A(e,["algorithm","token","components"]),c=t&&(!Array.isArray(t)||t.length>0)?(0,r.jG)(t):h.uH,i={};Object.entries(o||{}).forEach((e=>{let[t,a]=e;const o=Object.assign({},a);"algorithm"in o&&(!0===o.algorithm?o.theme=c:(Array.isArray(o.algorithm)||"function"===typeof o.algorithm)&&(o.theme=(0,r.jG)(o.algorithm)),delete o.algorithm),i[t]=o}));const l=Object.assign(Object.assign({},v.Z),a);return Object.assign(Object.assign({},n),{theme:c,token:l,components:i,override:Object.assign({override:l},i)})}),[Ne]);return F&&(Ue=o.createElement(h.Mj.Provider,{value:We},Ue)),Ie.warning&&(Ue=o.createElement(l.Provider,{value:Ie.warning},Ue)),void 0!==N&&(Ue=o.createElement(j.n,{disabled:N},Ue)),o.createElement(f.E_.Provider,{value:Ie},Ue)},D=e=>{const t=o.useContext(f.E_),a=o.useContext(g.Z);return o.createElement(q,Object.assign({parentContext:t,legacyLocale:a},e))};D.ConfigContext=f.E_,D.SizeContext=O.Z,D.config=e=>{let{prefixCls:t,iconPrefixCls:a,theme:o}=e;void 0!==t&&(z=t),void 0!==a&&(Y=a),o&&(!function(e){return Object.keys(e).some((e=>e.endsWith("Color")))}(o)?F=o:P(N(),o))},D.useConfig=S,Object.defineProperty(D,"SizeContext",{get:()=>O.Z});const I=D},5092:(e,t,a)=>{a.d(t,{Z:()=>n});const o={locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"};var r=a(4846);const n={lang:Object.assign({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},o),timePickerLocale:Object.assign({},r.Z)}},2588:(e,t,a)=>{a.d(t,{Z:()=>o});const o=(0,a(2791).createContext)(void 0)},8558:(e,t,a)=>{a.d(t,{Z:()=>i});var o=a(5092);const r=o.Z;var n=a(4846);const c="${label} is not a valid ${type}",i={locale:"en",Pagination:{items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"},DatePicker:o.Z,TimePicker:n.Z,Calendar:r,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckall:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Tour:{Next:"Next",Previous:"Previous",Finish:"Finish"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand"},PageHeader:{back:"Back"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:c,method:c,array:c,object:c,number:c,date:c,boolean:c,integer:c,float:c,regexp:c,email:c,url:c,hex:c},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"},QRCode:{expired:"QR code expired",refresh:"Refresh"},ColorPicker:{presetEmpty:"Empty"}}},4846:(e,t,a)=>{a.d(t,{Z:()=>o});const o={placeholder:"Select time",rangePlaceholder:["Start time","End time"]}},3786:(e,t,a)=>{a.d(t,{Z:()=>o});const o=function(){if("undefined"===typeof navigator||"undefined"===typeof window)return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(null===e||void 0===e?void 0:e.substr(0,4))}}}]);
//# sourceMappingURL=855.a8ab987b.chunk.js.map