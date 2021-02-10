(this["webpackJsonpstackedsats-dashboard"]=this["webpackJsonpstackedsats-dashboard"]||[]).push([[14],{115:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n,r=a(0),l=a.n(r),c=function(){var e=1,t=new WeakMap;return function a(n,r){return"number"===typeof n||"string"===typeof n?r?"idx-"+r:"val-"+n:t.has(n)?"uid"+t.get(n):(t.set(n,e++),a(n))}},i=(c(),function(e){return void 0===e&&(e=""),{value:1,prefix:e,uid:c()}}),s=i(),u=r.createContext(i()),o=function(){return r.useState(function(e){var t=e||s,a=function(e){return e?e.prefix:""}(t)+function(e){return e.value++}(t);return{uid:a,gen:function(e){return a+t.uid(e)}}}(r.useContext(u)))};function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}!function(e){e[e.HORIZONTAL=0]="HORIZONTAL",e[e.VERTICAL=1]="VERTICAL"}(n||(n={}));var b=Object(r.createContext)({id:"Please provide a unique id",activeTab:0,numTabs:0,setActiveTab:function(){},direction:n.HORIZONTAL});function f(e){var t=e.initialActiveTab,a=void 0===t?0:t,c=e.numTabs,i=e.direction,s=void 0===i?n.HORIZONTAL:i,u=e.children,m=o()[0].uid,d=Object(r.useState)(a),f=d[0],v=d[1],p=Object(r.useMemo)((function(){return{id:m,activeTab:f,setActiveTab:v,numTabs:c,direction:s}}),[f,v,c,s]);return l.a.createElement(b.Provider,{value:p},u)}f.Tab=function(e){var t=e.index,a=e.className,n=e.activeClassName,c=e.inactiveClassName,i=e.trigger,s=void 0===i?"click":i,u=d(e,["index","className","activeClassName","inactiveClassName","trigger"]),o=Object(r.useContext)(b),m=o.id,f=o.activeTab,v=o.setActiveTab,p=Object(r.useRef)();Object(r.useEffect)((function(){var e;f===t&&(null==(e=p.current)||e.focus())}),[f,t]);var x=Object(r.useMemo)((function(){return[a,f===t?n:c].join(" ")}),[a,n,c,f,t]),E=Object(r.useMemo)((function(){var e={onClick:function(){return v(t)}};return"hover"===s&&(e.onMouseEnter=function(){return v(t)}),e}),[s,v,t]);return l.a.createElement("button",Object.assign({ref:p,role:"tab","aria-controls":m+"-"+t,"aria-selected":f===t,tabIndex:f===t?0:-1,className:x},E,u))},f.TabPanel=function(e){var t=e.as,a=void 0===t?"div":t,n=e.index,c=e.className,i=e.activeClassName,s=e.inactiveClassName,u=d(e,["as","index","className","activeClassName","inactiveClassName"]),o=Object(r.useContext)(b),f=o.id,v=o.activeTab,p=Object(r.useMemo)((function(){return[c,v===n?i:s].join(" ")}),[c,i,s,v,n]);return l.a.createElement(a,Object.assign({style:m({},u.style,{visibility:v===n?"visible":"hidden"}),id:f+"-"+n,role:"tabpanel","aria-expanded":v===n,className:p},u))},f.TabList=function(e){var t=e.as,a=void 0===t?"div":t,c=d(e,["as"]),i=Object(r.useRef)(),s=Object(r.useContext)(b),u=s.setActiveTab,o=s.numTabs,m=s.activeTab,f=s.direction,v=Object(r.useCallback)((function(e){var t={End:function(){u(o-1)},Home:function(){u(0)}};f===n.HORIZONTAL&&(t.ArrowLeft=function(){u(m-1>=0?m-1:o-1)},t.ArrowRight=function(){u(m+1<o?m+1:0)}),f===n.VERTICAL&&(t.ArrowUp=function(){u(m-1>=0?m-1:o-1)},t.ArrowDown=function(){u(m+1<o?m+1:0)});var a=t[e.key];a&&(e.preventDefault(),a())}),[u,m,o,f]);return Object(r.useEffect)((function(){return i.current.addEventListener("keyup",v),function(){return i.current.removeEventListener("keyup",v)}}),[v]),l.a.createElement(a,Object.assign({ref:i,role:"tablist"},c))},f.useTab=function(e){return{isActive:Object(r.useContext)(b).activeTab===e}},f.direction=n},131:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n),l=a(13),c=function(){var e=Object(l.c)((function(e){return e.prices}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"text-gray-300 "},r.a.createElement("p",{className:"mb-2"},"Total Volume"),r.a.createElement("div",null,r.a.createElement("b",{className:"mr-2 text-3xl font-normal text-white"},e.liquidStxSupplyResult," STX")," ",r.a.createElement("span",null,r.a.createElement("span",{className:"text-yellow-500"}," ",(e.stxusd*e.liquidStxSupplyResult/e.btcusd).toLocaleString("fullwide",{useGrouping:!1}))," ","BTC |"," ",r.a.createElement("span",{className:"text-green-600"}," ",(e.stxusd*e.liquidStxSupplyResult).toLocaleString("fullwide",{useGrouping:!1}))," ","USD"))))}},187:function(e,t){e.exports=function(e,t,a,n){var r=new Blob("undefined"!==typeof n?[n,e]:[e],{type:a||"application/octet-stream"});if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(r,t);else{var l=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(r):window.webkitURL.createObjectURL(r),c=document.createElement("a");c.style.display="none",c.href=l,c.setAttribute("download",t),"undefined"===typeof c.download&&c.setAttribute("target","_blank"),document.body.appendChild(c),c.click(),setTimeout((function(){document.body.removeChild(c),window.URL.revokeObjectURL(l)}),200)}}},331:function(e,t,a){e.exports=a.p+"static/media/graph-transaction-fees.311a3ced.png"},82:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.left,n=e.right;return t?r.a.createElement("div",{className:"flex items-center justify-between px-8 pt-10 pb-8 mb-8 -mx-6 text-gray-100 border-b-2 border-gray-900 bg-gray-950"},r.a.createElement("h1",{show:t,className:"mb-3 text-2xl"},t)):t?void 0:r.a.createElement("div",{className:"flex flex-wrap items-center justify-between px-12 pt-10 pb-8 mb-8 -mx-6 text-gray-100 border-b-2 border-gray-900 bg-gray-950"},r.a.createElement("div",null,a),r.a.createElement("div",null,n))}},936:function(e,t,a){e.exports=a.p+"static/media/graph-transfer-summary.480e613c.png"},964:function(e,t,a){"use strict";a.r(t);var n=a(84),r=a.n(n),l=a(99),c=a(12),i=a(0),s=a.n(i),u=a(82),o=a(25),m=a(102),d=a(115),b=(a(936),a(331),a(131)),f=a(26),v=a.n(f),p=a(14),x=a(19),E=a(13),g=a(2),y=a(187),T=a.n(y),N=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",{className:"mb-3 text-2xl"},"Transfer Activity"),s.a.createElement("div",null,"Dec 20, 2020 01:38"))};t.default=function(){var e=Object(i.useState)([]),t=Object(c.a)(e,2),a=t[0],n=t[1],f=Object(E.c)((function(e){return e.prices})),y=Object(g.g)(),O=Object(E.b)();return Object(i.useEffect)((function(){(function(){var e=Object(l.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://stacks-node-api.testnet.stacks.co/extended/v1/address/ST000000000000000000002AMW42H/transactions");case 2:t=e.sent,console.log(t.data),n(t.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),0===a.length?s.a.createElement(x.a,null):s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,{left:s.a.createElement(N,null),right:s.a.createElement(b.a,null)}),s.a.createElement("div",{className:"p-4 space-y-6"},s.a.createElement("div",{className:"grid grid-cols-1 mb-8 xl:gap-6 xl:grid-cols-3"},s.a.createElement("div",{class:"col-span-2"},s.a.createElement(o.Card,{className:"mb-8 shadow-md"},s.a.createElement(o.CardBody,null,s.a.createElement(d.a,{numTabs:3,direction:d.a.direction.HORIZONTAL},s.a.createElement("div",{className:"flex items-center justify-between text-gray-400 dark:text-white"},s.a.createElement("div",{className:"flex items-center"},s.a.createElement(d.a.TabList,null,s.a.createElement(d.a.Tab,{index:0,className:"px-1 py-2 mr-3 text-xl transition-colors duration-150",activeClassName:"text-primary-500 dark:text-white",inactiveClassName:"text-gray-400 dark:text-gray-300"},"Transfers")),s.a.createElement("div",{className:"flex items-center ml-10 text-primary-400"},s.a.createElement(m.c,null),s.a.createElement("button",{onClick:function(){var e=a.map((function(e){return JSON.stringify(e)}));T()(e,"report.csv")},className:"ml-1"},"Export")))),s.a.createElement(d.a.TabPanel,{index:0,className:"py-10 text-gray-500 transition-all transform dark:text-gray-200",activeClassName:"opacity-100 duration-500 translate-x-0",inactiveClassName:"absolute opacity-0 -translate-x-2"},s.a.createElement(o.TableContainer,{className:"mb-1"},s.a.createElement(o.Table,null,s.a.createElement(o.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(o.TableCell,null,"Date"),s.a.createElement(o.TableCell,null,"Block Height"),s.a.createElement(o.TableCell,null,"Sender"),s.a.createElement(o.TableCell,null,"Receiver"),s.a.createElement(o.TableCell,null,"Volume"))),s.a.createElement(o.TableBody,{className:"text-lg dark:divide-gray-500"},a.map((function(e,t){return s.a.createElement(o.TableRow,{key:t,onClick:function(t){return a=e.tx_id,console.log(a),O({type:p.b,payload:a}),void y.push("/app/stack-analytics/transaction");var a}},s.a.createElement(o.TableCell,null,s.a.createElement("div",{className:"text-lg text-white"},"Today"),s.a.createElement("span",{className:"text-sm"},new Date(e.burn_block_time_iso).toLocaleDateString()," ","GMT")),s.a.createElement(o.TableCell,null,s.a.createElement("span",{className:"text-white"},e.block_height)),s.a.createElement(o.TableCell,null,s.a.createElement("span",null,e.sender_address)),s.a.createElement(o.TableCell,null,s.a.createElement("span",null,e.token_transfer?e.token_transfer.recipient_address:null)),s.a.createElement(o.TableCell,null,s.a.createElement("div",{className:"float-right text-white"},e.token_transfer?e.token_transfer.amount:0," ","STX"),s.a.createElement("div",{className:"float-right text-sm"},s.a.createElement("span",{className:"text-warning-500"},e.token_transfer?e.token_transfer.amount*f.stxusd/f.btcusd:0)," ","BTC |"," ",s.a.createElement("span",{className:"text-success-600"},e.token_transfer?e.token_transfer.amount*f.stxusd:0)," ","USD")))})))))))))))))}}}]);
//# sourceMappingURL=14.c1af536a.chunk.js.map