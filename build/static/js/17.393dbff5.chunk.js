(this["webpackJsonpstackedsats-dashboard"]=this["webpackJsonpstackedsats-dashboard"]||[]).push([[17],{1183:function(e,t,a){"use strict";a.r(t);var l=a(84),n=a.n(l),r=a(103),c=a(12),i=a(0),s=a.n(i),m=a(86),o=(a(410),a(395)),d=a(25),x=a(123),u=a(13),E=a(120),f=(a(167),a(145)),C=a(26),h=a.n(C),v=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",{className:"mb-3 text-2xl"},"Stacking"),s.a.createElement("div",null,"Dec 20, 2020 05:43 \u2013 Dec 23, 2020 02:07"))};t.default=function(){var e=Object(i.useState)([]),t=Object(c.a)(e,2),a=t[0],l=t[1],C=Object(i.useState)({}),w=Object(c.a)(C,2),y=w[0],p=w[1],g=Object(u.c)((function(e){return e.prices}));return Object(i.useEffect)((function(){(function(){var e=Object(r.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat("","/rewardHistory"));case 2:return t=e.sent,l(t.data),e.next=6,h.a.get("".concat("","/cycleInfo"));case 6:a=e.sent,p(a.data),console.log(a.data);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,{left:s.a.createElement(v,null),right:s.a.createElement(f.a,null)}),s.a.createElement("div",{className:"p-4 space-y-6"},s.a.createElement(d.Card,{className:"mb-8 shadow-md"},s.a.createElement(d.CardBody,{className:"space-y-8 text-white"},s.a.createElement("div",{className:"grid grid-cols-1 mb-8 xl:gap-6 xl:grid-cols-5"},s.a.createElement("div",null,s.a.createElement("h3",{className:"mb-10 text-2xl font-medium"},"Previous Cycles"),s.a.createElement("div",{className:"flex justify-center"},s.a.createElement(o.a,{data:y}))),s.a.createElement("div",{className:"col-span-4"},s.a.createElement(x.a,{numTabs:3,direction:x.a.direction.HORIZONTAL},s.a.createElement("div",{className:"flex items-center justify-between text-gray-400 dark:text-white"},s.a.createElement("div",{className:"flex items-center"},s.a.createElement(x.a.TabList,null,s.a.createElement(x.a.Tab,{index:0,className:"px-4 py-2 mr-3 text-xl transition-colors duration-150",activeClassName:"text-primary-500 dark:text-white",inactiveClassName:"text-gray-400 dark:text-gray-300"},"Distributed Rewards"))),s.a.createElement("div",null,s.a.createElement(d.Select,{className:"py-1 pl-2 mt-1 leading-1 dark:bg-transparent dark:border-gray-300"},s.a.createElement("option",null,"Sort By")))),s.a.createElement(x.a.TabPanel,{index:0,className:"py-6 text-gray-200 transition-all transform",activeClassName:"opacity-100 duration-500 translate-x-0",inactiveClassName:"absolute opacity-0 -translate-x-2"},s.a.createElement("div",{className:"relative text-gray-500 focus-within:text-primary-600 dark:focus-within:text-primary-400"},s.a.createElement(d.Input,{className:"py-3 pl-10 mb-3 text-white bg-gray-900 border-none",placeholder:"Search by name, hash or number"}),s.a.createElement("div",{className:"absolute inset-y-0 flex items-center ml-3 pointer-events-none"},s.a.createElement(E.e,{className:"w-5 h-5","aria-hidden":"true"}))),s.a.createElement(d.TableContainer,{className:"mb-8"},s.a.createElement(d.Table,null,s.a.createElement(d.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(d.TableCell,null,"Date"),s.a.createElement(d.TableCell,null,"Send to"),s.a.createElement(d.TableCell,null,"Reward Distributed"))),s.a.createElement(d.TableBody,{className:"text-lg dark:divide-gray-500"},a.map((function(e,t){return s.a.createElement(d.TableRow,null,s.a.createElement(d.TableCell,null,s.a.createElement("div",{className:"text-lg text-white"},"Today"),s.a.createElement("span",{className:"text-base"},e.date," GMT")),s.a.createElement(d.TableCell,null,s.a.createElement("span",null,e.to)),s.a.createElement(d.TableCell,null,s.a.createElement("div",{className:"text-white "},e.reward," STX"),s.a.createElement("div",{className:""},s.a.createElement("span",{className:"text-warning-500"},parseFloat(e.reward/(g.stxusd*g.btcusd)).toFixed(2))," ","BTC |"," ",s.a.createElement("span",{className:"text-success-600"},parseFloat(g.stxusd/e.reward).toFixed(2))," ","USD")))})))))),s.a.createElement(x.a.TabPanel,{index:1,className:"flex flex-col py-10 text-gray-200 transition-all transform",activeClassName:"opacity-100 duration-500 translate-x-0",inactiveClassName:"absolute opacity-0 -translate-x-2"},"Total BTC Rewards"))))))))}},123:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var l,n=a(0),r=a.n(n),c=function(){var e=1,t=new WeakMap;return function a(l,n){return"number"===typeof l||"string"===typeof l?n?"idx-"+n:"val-"+l:t.has(l)?"uid"+t.get(l):(t.set(l,e++),a(l))}},i=(c(),function(e){return void 0===e&&(e=""),{value:1,prefix:e,uid:c()}}),s=i(),m=n.createContext(i()),o=function(){return n.useState(function(e){var t=e||s,a=function(e){return e?e.prefix:""}(t)+function(e){return e.value++}(t);return{uid:a,gen:function(e){return a+t.uid(e)}}}(n.useContext(m)))};function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}!function(e){e[e.HORIZONTAL=0]="HORIZONTAL",e[e.VERTICAL=1]="VERTICAL"}(l||(l={}));var u=Object(n.createContext)({id:"Please provide a unique id",activeTab:0,numTabs:0,setActiveTab:function(){},direction:l.HORIZONTAL});function E(e){var t=e.initialActiveTab,a=void 0===t?0:t,c=e.numTabs,i=e.direction,s=void 0===i?l.HORIZONTAL:i,m=e.children,d=o()[0].uid,x=Object(n.useState)(a),E=x[0],f=x[1],C=Object(n.useMemo)((function(){return{id:d,activeTab:E,setActiveTab:f,numTabs:c,direction:s}}),[E,f,c,s]);return r.a.createElement(u.Provider,{value:C},m)}E.Tab=function(e){var t=e.index,a=e.className,l=e.activeClassName,c=e.inactiveClassName,i=e.trigger,s=void 0===i?"click":i,m=x(e,["index","className","activeClassName","inactiveClassName","trigger"]),o=Object(n.useContext)(u),d=o.id,E=o.activeTab,f=o.setActiveTab,C=Object(n.useRef)();Object(n.useEffect)((function(){var e;E===t&&(null==(e=C.current)||e.focus())}),[E,t]);var h=Object(n.useMemo)((function(){return[a,E===t?l:c].join(" ")}),[a,l,c,E,t]),v=Object(n.useMemo)((function(){var e={onClick:function(){return f(t)}};return"hover"===s&&(e.onMouseEnter=function(){return f(t)}),e}),[s,f,t]);return r.a.createElement("button",Object.assign({ref:C,role:"tab","aria-controls":d+"-"+t,"aria-selected":E===t,tabIndex:E===t?0:-1,className:h},v,m))},E.TabPanel=function(e){var t=e.as,a=void 0===t?"div":t,l=e.index,c=e.className,i=e.activeClassName,s=e.inactiveClassName,m=x(e,["as","index","className","activeClassName","inactiveClassName"]),o=Object(n.useContext)(u),E=o.id,f=o.activeTab,C=Object(n.useMemo)((function(){return[c,f===l?i:s].join(" ")}),[c,i,s,f,l]);return r.a.createElement(a,Object.assign({style:d({},m.style,{visibility:f===l?"visible":"hidden"}),id:E+"-"+l,role:"tabpanel","aria-expanded":f===l,className:C},m))},E.TabList=function(e){var t=e.as,a=void 0===t?"div":t,c=x(e,["as"]),i=Object(n.useRef)(),s=Object(n.useContext)(u),m=s.setActiveTab,o=s.numTabs,d=s.activeTab,E=s.direction,f=Object(n.useCallback)((function(e){var t={End:function(){m(o-1)},Home:function(){m(0)}};E===l.HORIZONTAL&&(t.ArrowLeft=function(){m(d-1>=0?d-1:o-1)},t.ArrowRight=function(){m(d+1<o?d+1:0)}),E===l.VERTICAL&&(t.ArrowUp=function(){m(d-1>=0?d-1:o-1)},t.ArrowDown=function(){m(d+1<o?d+1:0)});var a=t[e.key];a&&(e.preventDefault(),a())}),[m,d,o,E]);return Object(n.useEffect)((function(){return i.current.addEventListener("keyup",f),function(){return i.current.removeEventListener("keyup",f)}}),[f]),r.a.createElement(a,Object.assign({ref:i,role:"tablist"},c))},E.useTab=function(e){return{isActive:Object(n.useContext)(u).activeTab===e}},E.direction=l},145:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var l=a(0),n=a.n(l),r=a(13),c=function(){var e=Object(r.c)((function(e){return e.prices}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"text-gray-300 "},n.a.createElement("p",{className:"mb-2"},"Total Volume"),n.a.createElement("div",null,n.a.createElement("b",{className:"mr-2 text-3xl font-normal text-white"},e.liquidStxSupplyResult," STX")," ",n.a.createElement("span",null,n.a.createElement("span",{className:"text-yellow-500"}," ",(e.stxusd*e.liquidStxSupplyResult/e.btcusd).toLocaleString("fullwide",{useGrouping:!1}))," ","BTC |"," ",n.a.createElement("span",{className:"text-green-600"}," ",(e.stxusd*e.liquidStxSupplyResult).toLocaleString("fullwide",{useGrouping:!1}))," ","USD"))))}},167:function(e,t,a){e.exports=a.p+"static/media/graph-transaction-fees.311a3ced.png"},395:function(e,t,a){"use strict";var l=a(0),n=a.n(l);t.a=function(e){e.children,e.title;var t=e.data,a=void 0===t?{duration:0,secondsUntilNextCycle:0,targetBlock:0}:t,l=(a.secondsUntilNextCycle+a.duration)/6;return isNaN(l)&&(l=0),n.a.createElement("div",{className:"flex-col items-center justify-center",style:{width:"116px"}},n.a.createElement("div",{className:"mb-3"},n.a.createElement("svg",{className:"pr-1 mx-auto",width:"77",height:"80",viewBox:"0 0 77 80",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M39 72C56.6731 72 71 57.6731 71 40C71 22.3269 56.6731 8 39 8C21.3269 8 7 22.3269 7 40C7 57.6731 21.3269 72 39 72Z",fill:"#2F80ED"}),n.a.createElement("path",{d:"M39 4C40.1046 4 41 3.10457 41 2C41 0.895431 40.1046 0 39 0C37.8954 0 37 0.895431 37 2C37 3.10457 37.8954 4 39 4Z",fill:"#2F80ED"}),n.a.createElement("path",{d:"M23 7C24.1046 7 25 6.10457 25 5C25 3.89543 24.1046 3 23 3C21.8954 3 21 3.89543 21 5C21 6.10457 21.8954 7 23 7Z",fill:"#2F80ED"}),n.a.createElement("path",{d:"M9 18C10.1046 18 11 17.1046 11 16C11 14.8954 10.1046 14 9 14C7.89543 14 7 14.8954 7 16C7 17.1046 7.89543 18 9 18Z",fill:"#2F80ED"}),n.a.createElement("path",{d:"M2 34C3.10457 34 4 33.1046 4 32C4 30.8954 3.10457 30 2 30C0.895431 30 0 30.8954 0 32C0 33.1046 0.895431 34 2 34Z",fill:"#2F80ED"}),n.a.createElement("path",{d:"M2 50C3.10457 50 4 49.1046 4 48C4 46.8954 3.10457 46 2 46C0.895431 46 0 46.8954 0 48C0 49.1046 0.895431 50 2 50Z",fill:"#2F80ED"}),n.a.createElement("path",{d:"M9 66C10.1046 66 11 65.1046 11 64C11 62.8954 10.1046 62 9 62C7.89543 62 7 62.8954 7 64C7 65.1046 7.89543 66 9 66Z",fill:"#2F80ED"}),n.a.createElement("path",{d:"M23 75C24.1046 75 25 74.1046 25 73C25 71.8954 24.1046 71 23 71C21.8954 71 21 71.8954 21 73C21 74.1046 21.8954 75 23 75Z",fill:"#2F80ED"}),n.a.createElement("path",{d:"M39 80C40.1046 80 41 79.1046 41 78C41 76.8954 40.1046 76 39 76C37.8954 76 37 76.8954 37 78C37 79.1046 37.8954 80 39 80Z",fill:"#2F80ED"}),n.a.createElement("path",{d:"M55 75C56.1046 75 57 74.1046 57 73C57 71.8954 56.1046 71 55 71C53.8954 71 53 71.8954 53 73C53 74.1046 53.8954 75 55 75Z",fill:"#2F80ED"}),n.a.createElement("path",{d:"M69 66C70.1046 66 71 65.1046 71 64C71 62.8954 70.1046 62 69 62C67.8954 62 67 62.8954 67 64C67 65.1046 67.8954 66 69 66Z",fill:"#2F80ED"}),n.a.createElement("path",{d:"M75 50C76.1046 50 77 49.1046 77 48C77 46.8954 76.1046 46 75 46C73.8954 46 73 46.8954 73 48C73 49.1046 73.8954 50 75 50Z",fill:"#2F80ED"}),n.a.createElement("path",{d:"M75 34C76.1046 34 77 33.1046 77 32C77 30.8954 76.1046 30 75 30C73.8954 30 73 30.8954 73 32C73 33.1046 73.8954 34 75 34Z",fill:"#2F80ED"}),n.a.createElement("path",{d:"M69 18C70.1046 18 71 17.1046 71 16C71 14.8954 70.1046 14 69 14C67.8954 14 67 14.8954 67 16C67 17.1046 67.8954 18 69 18Z",fill:"#2F80ED"}),n.a.createElement("path",{d:"M55 7C56.1046 7 57 6.10457 57 5C57 3.89543 56.1046 3 55 3C53.8954 3 53 3.89543 53 5C53 6.10457 53.8954 7 55 7Z",fill:"#2F80ED"}),n.a.createElement("text",{x:"25",y:"45",fill:"white",class:"small"},a.targetBlock)),n.a.createElement("div",{className:"flex flex-col w-full"},n.a.createElement("div",{className:"flex items-center justify-end -mb-1"},n.a.createElement("svg",{width:"26",height:"8",viewBox:"0 0 26 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("line",{x1:"4",y1:"4",x2:"26",y2:"4",stroke:"#184258","stroke-width":"2"}),n.a.createElement("line",{x1:"22",y1:"4",x2:"26",y2:"4",stroke:"#2F80ED","stroke-width":"2"}),n.a.createElement("circle",{cx:"4",cy:"4",r:"4",fill:"#2F80ED"})),n.a.createElement("div",{className:"ml-2 text-sm text-center text-gray-300",style:{width:"28px"}},6*l))),n.a.createElement("div",{className:"flex flex-col w-full"},n.a.createElement("div",{className:"flex items-center justify-start -mb-1"},n.a.createElement("div",{className:"mr-2 text-sm text-center text-gray-300",style:{width:"28px"}},5*l),n.a.createElement("svg",{width:"26",height:"8",viewBox:"0 0 26 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("line",{y1:"4",x2:"22",y2:"4",stroke:"#184258","stroke-width":"2"}),n.a.createElement("line",{y1:"4",x2:"4",y2:"4",stroke:"#2F80ED","stroke-width":"2"}),n.a.createElement("circle",{cx:"22",cy:"4",r:"4",fill:"#2F80ED"})))),n.a.createElement("div",{className:"flex flex-col w-full"},n.a.createElement("div",{className:"flex items-center justify-end -mb-1"},n.a.createElement("svg",{width:"26",height:"8",viewBox:"0 0 26 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("line",{x1:"4",y1:"4",x2:"26",y2:"4",stroke:"#184258","stroke-width":"2"}),n.a.createElement("line",{x1:"22",y1:"4",x2:"26",y2:"4",stroke:"#2F80ED","stroke-width":"2"}),n.a.createElement("circle",{cx:"4",cy:"4",r:"4",fill:"#2F80ED"})),n.a.createElement("div",{className:"ml-2 text-sm text-center text-gray-300",style:{width:"28px"}},4*l))),n.a.createElement("div",{className:"flex flex-col w-full"},n.a.createElement("div",{className:"flex items-center justify-start -mb-1"},n.a.createElement("div",{className:"mr-2 text-sm text-center text-gray-300",style:{width:"28px"}},3*l),n.a.createElement("svg",{width:"26",height:"8",viewBox:"0 0 26 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("line",{y1:"4",x2:"22",y2:"4",stroke:"#184258","stroke-width":"2"}),n.a.createElement("line",{y1:"4",x2:"4",y2:"4",stroke:"#2F80ED","stroke-width":"2"}),n.a.createElement("circle",{cx:"22",cy:"4",r:"4",fill:"#2F80ED"})))),n.a.createElement("div",{className:"flex flex-col w-full"},n.a.createElement("div",{className:"flex items-center justify-end -mb-1"},n.a.createElement("svg",{width:"26",height:"8",viewBox:"0 0 26 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("line",{x1:"4",y1:"4",x2:"26",y2:"4",stroke:"#184258","stroke-width":"2"}),n.a.createElement("line",{x1:"22",y1:"4",x2:"26",y2:"4",stroke:"#2F80ED","stroke-width":"2"}),n.a.createElement("circle",{cx:"4",cy:"4",r:"4",fill:"#2F80ED"})),n.a.createElement("div",{className:"ml-2 text-sm text-center text-gray-300",style:{width:"28px"}},2*l))),n.a.createElement("div",{className:"flex flex-col w-full"},n.a.createElement("div",{className:"flex items-center justify-start -mb-1"},n.a.createElement("div",{className:"mr-2 text-sm text-center text-gray-300",style:{width:"28px"}},1*l),n.a.createElement("svg",{width:"26",height:"8",viewBox:"0 0 26 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("line",{y1:"4",x2:"22",y2:"4",stroke:"#184258","stroke-width":"2"}),n.a.createElement("line",{y1:"4",x2:"4",y2:"4",stroke:"#2F80ED","stroke-width":"2"}),n.a.createElement("circle",{cx:"22",cy:"4",r:"4",fill:"#2F80ED"}))))),n.a.createElement("div",{className:"mb-3"},n.a.createElement("svg",{className:"pr-1 mx-auto",width:"77",height:"80",viewBox:"0 0 77 80",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M39 72C56.6731 72 71 57.6731 71 40C71 22.3269 56.6731 8 39 8C21.3269 8 7 22.3269 7 40C7 57.6731 21.3269 72 39 72Z",fill:"#84A4B5"}),n.a.createElement("path",{d:"M39 4C40.1046 4 41 3.10457 41 2C41 0.895431 40.1046 0 39 0C37.8954 0 37 0.895431 37 2C37 3.10457 37.8954 4 39 4Z",fill:"#84A4B5"}),n.a.createElement("path",{d:"M23 7C24.1046 7 25 6.10457 25 5C25 3.89543 24.1046 3 23 3C21.8954 3 21 3.89543 21 5C21 6.10457 21.8954 7 23 7Z",fill:"#84A4B5"}),n.a.createElement("path",{d:"M9 18C10.1046 18 11 17.1046 11 16C11 14.8954 10.1046 14 9 14C7.89543 14 7 14.8954 7 16C7 17.1046 7.89543 18 9 18Z",fill:"#84A4B5"}),n.a.createElement("path",{d:"M2 34C3.10457 34 4 33.1046 4 32C4 30.8954 3.10457 30 2 30C0.895431 30 0 30.8954 0 32C0 33.1046 0.895431 34 2 34Z",fill:"#84A4B5"}),n.a.createElement("path",{d:"M2 50C3.10457 50 4 49.1046 4 48C4 46.8954 3.10457 46 2 46C0.895431 46 0 46.8954 0 48C0 49.1046 0.895431 50 2 50Z",fill:"#84A4B5"}),n.a.createElement("path",{d:"M9 66C10.1046 66 11 65.1046 11 64C11 62.8954 10.1046 62 9 62C7.89543 62 7 62.8954 7 64C7 65.1046 7.89543 66 9 66Z",fill:"#84A4B5"}),n.a.createElement("path",{d:"M23 75C24.1046 75 25 74.1046 25 73C25 71.8954 24.1046 71 23 71C21.8954 71 21 71.8954 21 73C21 74.1046 21.8954 75 23 75Z",fill:"#84A4B5"}),n.a.createElement("path",{d:"M39 80C40.1046 80 41 79.1046 41 78C41 76.8954 40.1046 76 39 76C37.8954 76 37 76.8954 37 78C37 79.1046 37.8954 80 39 80Z",fill:"#84A4B5"}),n.a.createElement("path",{d:"M55 75C56.1046 75 57 74.1046 57 73C57 71.8954 56.1046 71 55 71C53.8954 71 53 71.8954 53 73C53 74.1046 53.8954 75 55 75Z",fill:"#84A4B5"}),n.a.createElement("path",{d:"M69 66C70.1046 66 71 65.1046 71 64C71 62.8954 70.1046 62 69 62C67.8954 62 67 62.8954 67 64C67 65.1046 67.8954 66 69 66Z",fill:"#84A4B5"}),n.a.createElement("path",{d:"M75 50C76.1046 50 77 49.1046 77 48C77 46.8954 76.1046 46 75 46C73.8954 46 73 46.8954 73 48C73 49.1046 73.8954 50 75 50Z",fill:"#84A4B5"}),n.a.createElement("path",{d:"M75 34C76.1046 34 77 33.1046 77 32C77 30.8954 76.1046 30 75 30C73.8954 30 73 30.8954 73 32C73 33.1046 73.8954 34 75 34Z",fill:"#84A4B5"}),n.a.createElement("path",{d:"M69 18C70.1046 18 71 17.1046 71 16C71 14.8954 70.1046 14 69 14C67.8954 14 67 14.8954 67 16C67 17.1046 67.8954 18 69 18Z",fill:"#84A4B5"}),n.a.createElement("path",{d:"M55 7C56.1046 7 57 6.10457 57 5C57 3.89543 56.1046 3 55 3C53.8954 3 53 3.89543 53 5C53 6.10457 53.8954 7 55 7Z",fill:"#84A4B5"}),n.a.createElement("text",{x:"25",y:"45",fill:"white",class:"small"},isNaN(a.targetBlock-1)?0:a.targetBlock-1)),n.a.createElement("div",{className:"flex flex-col w-full"},n.a.createElement("div",{className:"flex items-center justify-end -mb-1"},n.a.createElement("svg",{width:"26",height:"8",viewBox:"0 0 26 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("line",{x1:"4",y1:"4",x2:"26",y2:"4",stroke:"#184258","stroke-width":"2"}),n.a.createElement("line",{x1:"22",y1:"4",x2:"26",y2:"4",stroke:"#84A4B5","stroke-width":"2"}),n.a.createElement("circle",{cx:"4",cy:"4",r:"4",fill:"#84A4B5"})),n.a.createElement("div",{className:"ml-2 text-sm text-center text-gray-300",style:{width:"28px"}},6*l))),n.a.createElement("div",{className:"flex flex-col w-full"},n.a.createElement("div",{className:"flex items-center justify-start -mb-1"},n.a.createElement("div",{className:"mr-2 text-sm text-center text-gray-300",style:{width:"28px"}},5*l),n.a.createElement("svg",{width:"26",height:"8",viewBox:"0 0 26 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("line",{y1:"4",x2:"22",y2:"4",stroke:"#184258","stroke-width":"2"}),n.a.createElement("line",{y1:"4",x2:"4",y2:"4",stroke:"#84A4B5","stroke-width":"2"}),n.a.createElement("circle",{cx:"22",cy:"4",r:"4",fill:"#84A4B5"})))),n.a.createElement("div",{className:"flex flex-col w-full"},n.a.createElement("div",{className:"flex items-center justify-end -mb-1"},n.a.createElement("svg",{width:"26",height:"8",viewBox:"0 0 26 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("line",{x1:"4",y1:"4",x2:"26",y2:"4",stroke:"#184258","stroke-width":"2"}),n.a.createElement("line",{x1:"22",y1:"4",x2:"26",y2:"4",stroke:"#84A4B5","stroke-width":"2"}),n.a.createElement("circle",{cx:"4",cy:"4",r:"4",fill:"#84A4B5"})),n.a.createElement("div",{className:"ml-2 text-sm text-center text-gray-300",style:{width:"28px"}},4*l))),n.a.createElement("div",{className:"flex flex-col w-full"},n.a.createElement("div",{className:"flex items-center justify-start -mb-1"},n.a.createElement("div",{className:"mr-2 text-sm text-center text-gray-300",style:{width:"28px"}},3*l),n.a.createElement("svg",{width:"26",height:"8",viewBox:"0 0 26 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("line",{y1:"4",x2:"22",y2:"4",stroke:"#184258","stroke-width":"2"}),n.a.createElement("line",{y1:"4",x2:"4",y2:"4",stroke:"#84A4B5","stroke-width":"2"}),n.a.createElement("circle",{cx:"22",cy:"4",r:"4",fill:"#84A4B5"})))),n.a.createElement("div",{className:"flex flex-col w-full"},n.a.createElement("div",{className:"flex items-center justify-end -mb-1"},n.a.createElement("svg",{width:"26",height:"8",viewBox:"0 0 26 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("line",{x1:"4",y1:"4",x2:"26",y2:"4",stroke:"#184258","stroke-width":"2"}),n.a.createElement("line",{x1:"22",y1:"4",x2:"26",y2:"4",stroke:"#84A4B5","stroke-width":"2"}),n.a.createElement("circle",{cx:"4",cy:"4",r:"4",fill:"#84A4B5"})),n.a.createElement("div",{className:"ml-2 text-sm text-center text-gray-300",style:{width:"28px"}},2*l))),n.a.createElement("div",{className:"flex flex-col w-full"},n.a.createElement("div",{className:"flex items-center justify-start -mb-1"},n.a.createElement("div",{className:"mr-2 text-sm text-center text-gray-300",style:{width:"28px"}},1*l),n.a.createElement("svg",{width:"26",height:"8",viewBox:"0 0 26 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("line",{y1:"4",x2:"22",y2:"4",stroke:"#184258","stroke-width":"2"}),n.a.createElement("line",{y1:"4",x2:"4",y2:"4",stroke:"#84A4B5","stroke-width":"2"}),n.a.createElement("circle",{cx:"22",cy:"4",r:"4",fill:"#84A4B5"}))))),n.a.createElement("div",{className:"mb-3"},n.a.createElement("svg",{className:"pr-1 mx-auto",width:"77",height:"80",viewBox:"0 0 77 80",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M39 72C56.6731 72 71 57.6731 71 40C71 22.3269 56.6731 8 39 8C21.3269 8 7 22.3269 7 40C7 57.6731 21.3269 72 39 72Z",fill:"#84A4B5"}),n.a.createElement("path",{d:"M39 4C40.1046 4 41 3.10457 41 2C41 0.895431 40.1046 0 39 0C37.8954 0 37 0.895431 37 2C37 3.10457 37.8954 4 39 4Z",fill:"#84A4B5"}),n.a.createElement("path",{d:"M23 7C24.1046 7 25 6.10457 25 5C25 3.89543 24.1046 3 23 3C21.8954 3 21 3.89543 21 5C21 6.10457 21.8954 7 23 7Z",fill:"#84A4B5"}),n.a.createElement("path",{d:"M9 18C10.1046 18 11 17.1046 11 16C11 14.8954 10.1046 14 9 14C7.89543 14 7 14.8954 7 16C7 17.1046 7.89543 18 9 18Z",fill:"#84A4B5"}),n.a.createElement("path",{d:"M2 34C3.10457 34 4 33.1046 4 32C4 30.8954 3.10457 30 2 30C0.895431 30 0 30.8954 0 32C0 33.1046 0.895431 34 2 34Z",fill:"#84A4B5"}),n.a.createElement("path",{d:"M2 50C3.10457 50 4 49.1046 4 48C4 46.8954 3.10457 46 2 46C0.895431 46 0 46.8954 0 48C0 49.1046 0.895431 50 2 50Z",fill:"#84A4B5"}),n.a.createElement("path",{d:"M9 66C10.1046 66 11 65.1046 11 64C11 62.8954 10.1046 62 9 62C7.89543 62 7 62.8954 7 64C7 65.1046 7.89543 66 9 66Z",fill:"#84A4B5"}),n.a.createElement("path",{d:"M23 75C24.1046 75 25 74.1046 25 73C25 71.8954 24.1046 71 23 71C21.8954 71 21 71.8954 21 73C21 74.1046 21.8954 75 23 75Z",fill:"#84A4B5"}),n.a.createElement("path",{d:"M39 80C40.1046 80 41 79.1046 41 78C41 76.8954 40.1046 76 39 76C37.8954 76 37 76.8954 37 78C37 79.1046 37.8954 80 39 80Z",fill:"#84A4B5"}),n.a.createElement("path",{d:"M55 75C56.1046 75 57 74.1046 57 73C57 71.8954 56.1046 71 55 71C53.8954 71 53 71.8954 53 73C53 74.1046 53.8954 75 55 75Z",fill:"#84A4B5"}),n.a.createElement("path",{d:"M69 66C70.1046 66 71 65.1046 71 64C71 62.8954 70.1046 62 69 62C67.8954 62 67 62.8954 67 64C67 65.1046 67.8954 66 69 66Z",fill:"#84A4B5"}),n.a.createElement("path",{d:"M75 50C76.1046 50 77 49.1046 77 48C77 46.8954 76.1046 46 75 46C73.8954 46 73 46.8954 73 48C73 49.1046 73.8954 50 75 50Z",fill:"#84A4B5"}),n.a.createElement("path",{d:"M75 34C76.1046 34 77 33.1046 77 32C77 30.8954 76.1046 30 75 30C73.8954 30 73 30.8954 73 32C73 33.1046 73.8954 34 75 34Z",fill:"#84A4B5"}),n.a.createElement("path",{d:"M69 18C70.1046 18 71 17.1046 71 16C71 14.8954 70.1046 14 69 14C67.8954 14 67 14.8954 67 16C67 17.1046 67.8954 18 69 18Z",fill:"#84A4B5"}),n.a.createElement("path",{d:"M55 7C56.1046 7 57 6.10457 57 5C57 3.89543 56.1046 3 55 3C53.8954 3 53 3.89543 53 5C53 6.10457 53.8954 7 55 7Z",fill:"#84A4B5"}),n.a.createElement("text",{x:"25",y:"45",fill:"white",class:"small"},isNaN(a.targetBlock-2)?0:a.targetBlock-2))))}},86:function(e,t,a){"use strict";var l=a(0),n=a.n(l);t.a=function(e){var t=e.children,a=e.left,l=e.right;return t?n.a.createElement("div",{className:"flex items-center justify-between px-8 pt-10 pb-8 mb-8 -mx-6 text-gray-100 border-b-2 border-gray-900 bg-gray-950"},n.a.createElement("h1",{show:t,className:"mb-3 text-2xl"},t)):t?void 0:n.a.createElement("div",{className:"flex flex-wrap items-center justify-between px-12 pt-10 pb-8 mb-8 -mx-6 text-gray-100 border-b-2 border-gray-900 bg-gray-950"},n.a.createElement("div",null,a),n.a.createElement("div",null,l))}}}]);
//# sourceMappingURL=17.393dbff5.chunk.js.map