(this["webpackJsonpstackedsats-dashboard"]=this["webpackJsonpstackedsats-dashboard"]||[]).push([[13],{1044:function(e,a,t){},1186:function(e,a,t){"use strict";t.r(a),t.d(a,"lineLegends",(function(){return J}));var n=t(205),l=t(12),r=t(84),s=t.n(r),c=t(103),m=t(0),d=t.n(m),o=t(26),i=t.n(o),u=t(86),x=t(25),b=t(120),p=t(215),f=t(391),E=(t(216),t(14)),v=t(13),g=t(122),y=t(272);var N=function(e){var a=e.openAddressModal,t=e.closeAddressModal,n=e.openManualAddressModal,l=e.closeManualAddressModal,r=e.isAddressModalOpen,s=e.isManualAddressModalOpen,c=e.addBTCAddress,m=e.addAddress,o=(e.stxAddress,e.setStxAddress),i=Object(v.c)((function(e){return e.user}));return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"my-6 space-y-6"},d.a.createElement("div",null,d.a.createElement(x.Button,{onClick:a},"Address Modal")),d.a.createElement("div",null,d.a.createElement(x.Button,{onClick:n},"Manual Address Modal")),d.a.createElement(x.Modal,{isOpen:r,onClose:t},d.a.createElement(x.ModalHeader,{className:"mb-10 text-center"},d.a.createElement("h2",{className:"mb-2 text-2xl"},"Add your Address"),d.a.createElement("p",null,"Add your BTC address to start stacking your assets")),d.a.createElement(x.ModalBody,null,d.a.createElement("div",{className:"my-4"},d.a.createElement(x.Label,null,"Enter BTC address"),d.a.createElement("div",{className:"relative flex mt-2"},d.a.createElement(x.Input,{className:"border-0 bg-gray-50",placeholder:"Enter your address here",onChange:function(e){c(e.target.value)}}),d.a.createElement("button",{className:"px-6 ml-2 btn btn-primary",onClick:m},"Add"))))),d.a.createElement(x.Modal,{isOpen:s,onClose:l},d.a.createElement(x.ModalBody,null,d.a.createElement("div",{className:"my-4"},d.a.createElement(x.Label,{className:"text-xl"},"Manually add address"),d.a.createElement("div",{className:"relative flex mt-2"},d.a.createElement(x.Input,{className:"border-0 bg-gray-50",placeholder:"Enter your address here",onChange:function(e){o(e.target.value)}}),d.a.createElement("button",{className:"px-6 ml-2 btn btn-primary",onClick:m},"Add")),d.a.createElement("h2",{className:"mt-8 mb-2 text-2xl"},"Saved Addresses"),d.a.createElement("p",{className:"text-base text-gray-400"},"These addreses will be monitored on the dashboard. You can remove them at anytime."),d.a.createElement("ul",{className:"mt-6 mb-12"},i.stxAddress.map((function(e,a){return d.a.createElement("li",{className:"flex items-center justify-between py-4 border-b border-gray-100"},d.a.createElement("div",{className:"flex items-center justify-between text-lg"},d.a.createElement(g.MainNet,{width:"32"}),d.a.createElement("span",{className:"ml-4"},e)),d.a.createElement("div",{className:"flex items-center justify-between space-x-2 text-primary-500"},d.a.createElement("button",null,d.a.createElement(b.b,{size:20})),d.a.createElement("button",null,d.a.createElement(b.g,{size:20}))))}))),d.a.createElement("button",{className:"text-xl font-medium text-success-500 btn-icon text-md"},"Go to Dashboard ",d.a.createElement(y.a,null)))))))},h=t(396),w=t(154),j=t(280),A=t(1029),O=t(1041),S=t(1036),C=t(397),k=t(1039),T=t(85),B=t.n(T),M=t(221),R=t.n(M),F=t(144),D=t(110);function L(e){var a=function(e){if(e.startsWith("bc1")||e.startsWith("tb1"))return 32===D.address.fromBech32(e).data.length?F.a.SerializeP2WSH:F.a.SerializeP2WPKH;switch(D.address.fromBase58Check(e).version){case 0:case 111:return F.a.SerializeP2PKH;case 5:case 196:return F.a.SerializeP2SH;default:throw new Error("Invalid pox address version")}}(e);return e.startsWith("bc1")||e.startsWith("tb1")?{hashMode:a,data:D.address.fromBech32(e).data}:{hashMode:a,data:D.address.fromBase58Check(e).hash}}var _=t(76),I=t.n(_),V=I.a.Buffer;function H(){return(H=Object(c.a)(s.a.mark((function e(a){var t,n,l,r,c,m,d,o,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.poxAddr,n=a.amountSTX,a.delegateToo,a.burnHt,l=L(t),r=l.hashMode,c=l.data,m=Object(A.a)(new B.a(r,10).toArrayLike(V)),d=Object(A.a)(c),o=Object(O.a)({hashbytes:d,version:m}),console.log(o.data),i={contractAddress:"ST000000000000000000002AMW42H.pox",contractName:"pox",functionName:"delegate-stx",functionArgs:[Object(S.b)(n),Object(C.d)("ST3K2B2FH1AYXD26WV6YZY4DAA82AZNK967BNB9BK"),Object(k.a)(),o],appDetails:{name:"StakedStats",icon:{logo:R.a}},finished:function(e){return console.log("TX ID:",e.txId),console.log("Raw TX:",e.txRaw),e.txId}},console.log(i),e.next=10,Object(j.a)(i);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=function(e){return H.apply(this,arguments)},K=(t(1044),t(145)),X=I.a.Buffer;function W(e){return z.apply(this,arguments)}function z(){return(z=Object(c.a)(s.a.mark((function e(a){var t,n,l,r,c,m,d,o,u,x,b,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.stxValue,n=a.delegateStx,l=a.htLockPeriod,r=a.amountustx,c=a.username,"n2VrgRFbKvcesbqerVtJEC8p5Lr2LQKtmB",m=L("n2VrgRFbKvcesbqerVtJEC8p5Lr2LQKtmB"),d=m.hashMode,o=m.data,u=Object(A.a)(new B.a(d,10).toArrayLike(X)),x=Object(A.a)(o),console.log(x,u),b=Object(O.a)({hashbytes:x,version:u}),console.log(b.data),p={contractAddress:"ST000000000000000000002AMW42H.pox",contractName:"pox",functionName:"delegate-stack-stx",functionArgs:[Object(C.d)(Object(w.b)()._profile.stxAddress),Object(S.b)(t),b,Object(S.b)(r),Object(S.b)(l)],appDetails:{name:"StakedStats",icon:{logo:R.a}},finished:function(e){console.log("TX ID:",e.txId),console.log("Raw TX:",e.txRaw),i()({url:"".concat("","/transactionRecords"),method:"post",headers:{"a-auth-token":localStorage.getItem("auth"),"Content-type":"application/json"},data:{username:c,stxValue:t,txids:{delegateStx:n,delegateStxLock:e.txId}}})}},e.next=11,Object(j.a)(p);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Y=new(t(1045).SmartContractsApi);function q(){return(q=Object(c.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={contractAddress:"SP000000000000000000002Q6VF78.pox",contractName:"pox",functionName:"get-stacker-info",readOnlyFunctionArgs:[Object(C.d)(Object(w.b)()._profile.stxAddress)]},console.log("trying.."),e.next=4,Y.callReadOnlyFunction(a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t(1151);var U=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement(b.f,{"aria-label":"Context","aria-haspopup":"true",className:"mr-2 text-white wh-4"}))},G=function(e){var a=e.stx,t=e.btc,n=e.username,l=Object(v.b)(),r=function(){var e=Object(c.a)(s.a.mark((function e(){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n,a,t),e.next=3,i()({method:"delete",url:"".concat("","/addresses"),data:{username:n,stxAddress:a,btcAddress:t}});case 3:r=e.sent,console.log(r),l({payload:r.data,type:E.d});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return d.a.createElement(d.a.Fragment,null,d.a.createElement("li",{className:"flex items-center text-sm leading-8 text-gray-200 cursor-pointer hover:text-white",onClick:r},d.a.createElement(b.g,{className:"mr-2 wh-3"}),d.a.createElement("span",null,"Delete")),d.a.createElement("li",{className:"flex items-center text-sm leading-8 text-gray-200 cursor-pointer hover:text-white"},d.a.createElement(b.b,{className:"mr-2 wh-3"}),d.a.createElement("span",null,"Copy Address")))},J=[{title:"Organic",color:"bg-teal-600"}],Q=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("h1",{className:"mb-3 text-2xl"},"My Portfolio"),d.a.createElement("div",null,(new Date).toLocaleDateString()))};a.default=function(){var e=Object(v.c)((function(e){return e.prices})),a=Object(v.c)((function(e){return e.user})),t=Object(m.useState)([]),r=Object(l.a)(t,2),o=r[0],E=r[1],g=Object(m.useState)({balance:"0",total_sent:"0",total_received:"0",total_fees_sent:"0",total_miner_rewards_received:"0",lock_tx_id:"",locked:"0",lock_height:0,burnchain_lock_height:0,burnchain_unlock_height:0}),y=Object(l.a)(g,2),j=y[0],A=y[1],O=Object(m.useState)([]),S=Object(l.a)(O,2),C=S[0],k=S[1],T=Object(m.useState)(""),B=Object(l.a)(T,2),M=B[0],R=B[1],F=Object(m.useState)(a.btcAddress[0]),D=Object(l.a)(F,2),L=D[0],_=D[1],I=Object(m.useState)(!1),V=Object(l.a)(I,2),H=V[0],X=V[1],z=Object(m.useState)(!1),Y=Object(l.a)(z,2),J=Y[0],Z=Y[1],$=Object(m.useState)(0),ee=Object(l.a)($,2),ae=ee[0],te=ee[1],ne=Object(m.useState)([]),le=Object(l.a)(ne,2),re=le[0],se=le[1],ce=Object(m.useState)([]),me=Object(l.a)(ce,2),de=me[0],oe=me[1],ie=Object(m.useState)(!1),ue=Object(l.a)(ie,2),xe=ue[0],be=ue[1],pe=Object(m.useState)(!1),fe=Object(l.a)(pe,2),Ee=fe[0],ve=fe[1],ge=Object(m.useState)(0),ye=Object(l.a)(ge,2),Ne=ye[0],he=ye[1];Object(w.b)(),console.log(re,de);var we={data:{labels:re,datasets:[{backgroundColor:"#0694a2",borderColor:"#0694a2",data:de,fill:!0}]},options:{responsive:!0,tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{x:{display:!0,scaleLabel:{display:!0,labelString:"Month"}},y:{display:!0,scaleLabel:{display:!0,labelString:"Value"}}}},legend:{display:!1}};Object(m.useEffect)((function(){var e=Object(w.b)();console.log(e),function(){var t=Object(c.a)(s.a.mark((function t(){var l,r,c,m,d,o,u,x,b;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("https://stacks-node-api.testnet.stacks.co/extended/v1/address/".concat(e._profile.stxAddress,"/balances"));case 2:return l=t.sent,A(l.data.stx),t.next=6,i()({url:"".concat("","/btcAddressReward"),method:"post",data:a});case 6:return r=t.sent,console.log(r.data.txs),r.data.txs&&E(r.data.txs),t.next=11,i.a.post("".concat("","/getUserClaimedRewardsGraph"),{username:a.username});case 11:return c=t.sent,console.log(c.data),se(c.data.date),oe(c.data.reward),t.next=17,i.a.post({url:"".concat("","/getUserClaimedRewardsGraph"),data:{username:a.username}});case 17:405===(m=t.sent).status?te(0):te(m.data.value),d=[],o=Object(n.a)(a.stxAddress),t.prev=21,o.s();case 23:if((u=o.n()).done){t.next=38;break}return x=u.value,t.prev=25,t.next=28,i.a.get("https://stacks-node-api.testnet.stacks.co/extended/v1/address/".concat(x,"/balances"));case 28:b=t.sent,console.log(b),d.push(b.data.stx.balance),t.next=36;break;case 33:t.prev=33,t.t0=t.catch(25),d.push(0);case 36:t.next=23;break;case 38:t.next=43;break;case 40:t.prev=40,t.t1=t.catch(21),o.e(t.t1);case 43:return t.prev=43,o.f(),t.finish(43);case 46:k(d);case 47:case"end":return t.stop()}}),t,null,[[21,40,43,46],[25,33]])})));return function(){return t.apply(this,arguments)}}()(),function(){q.apply(this,arguments)}()}),[a,a.username]);var je=function(){var e=Object(c.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i()({method:"post",url:"".concat("","/addresses"),data:{username:a.username,stxAddress:M,btcAddress:L}});case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(c.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==a.btcAddress.length){e.next=4;break}Z(!0),e.next=9;break;case 4:return e.next=6,i()({method:"post",url:"".concat("","/btcClaim"),headers:{"x-auth-token":localStorage.getItem("auth"),"Content-Type":"application/json"},data:{username:a.username,btcAddress:L}});case 6:t=e.sent,console.log(t),200===t.status&&X(!0);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(c.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P({poxAddr:"n2VrgRFbKvcesbqerVtJEC8p5Lr2LQKtmB",amountSTX:1e6*Ne,delegateToo:"ST3K2B2FH1AYXD26WV6YZY4DAA82AZNK967BNB9BK",burnHt:3});case 2:return t=e.sent,e.next=5,i.a.post("".concat("","/callHistory"),{functionName:"delegate-stx",stxAddress:Object(w.b)()._profile.stxAddress,fee:300});case 5:return e.next=7,W({stxValue:1e6*Ne,htLockPeriod:10,amountustx:1e6*Ne,username:a.username,delegateStx:t});case 7:return n=e.sent,e.next=10,i.a.post("".concat("","/callHistory"),{functionName:"delegate-stx",stxAddress:Object(w.b)()._profile.stxAddress,fee:300});case 10:console.log(n,t);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(we),d.a.createElement(d.a.Fragment,null,d.a.createElement(u.a,{left:d.a.createElement(Q,null),right:d.a.createElement(K.a,null)}),d.a.createElement("div",{className:"p-4 space-y-6"},d.a.createElement(x.Card,null,d.a.createElement(x.CardBody,{className:"text-white"},d.a.createElement("div",{className:"flex flex-wrap"},d.a.createElement("div",{className:"w-full xl:pr-10 xl:w-1/3"},d.a.createElement("div",null,d.a.createElement("div",{className:"flex items-center justify-between mb-4"},d.a.createElement("h3",{className:"text-lg font-medium"},"BTC Reward"),d.a.createElement(b.d,null)),d.a.createElement("div",null,d.a.createElement("div",{className:"flex flex-wrap items-center justify-between py-2 border-b border-gray-400"},d.a.createElement("span",null,"Total BTC Reward"),d.a.createElement("span",{className:"text-lg text-warning-500"},a.totalBTCReward)),d.a.createElement("div",{className:"flex flex-wrap items-center justify-between py-2 border-b border-gray-400"},d.a.createElement("span",null,"Daily BTC Reward"),d.a.createElement("span",{className:""},ae)),d.a.createElement("div",{className:"flex flex-wrap items-center justify-between py-2 text-gray-300 border-b border-gray-400"},d.a.createElement("span",null,"Pending BTC Reward"),d.a.createElement("span",null,a.pendingBTCReward))),d.a.createElement("button",{className:"mt-4 mb-6 btn btn-outline-warning btn-sm btn-block",onClick:Ae},"Claim your BTC Reward"),J&&d.a.createElement("p",null,"Please add a btc address for payment checkout."),H&&d.a.createElement("p",null,"Please wait for the Admin ( neko@stackedstats.com ) to confirm your withdrawal."),d.a.createElement(p.a,{title:"BTC Rewards"},d.a.createElement(f.c,we)))),d.a.createElement("div",{className:"w-full xl:w-2/3"},d.a.createElement("div",{className:"flex flex-wrap justify-between mb-4"},d.a.createElement("div",{className:"flex items-center space-x-2"},d.a.createElement("span",null," ",d.a.createElement("h3",{className:"mr-4 text-lg font-medium"},"BTC Reward History")),d.a.createElement("div",{className:"flex items-center ml-10 text-primary-400"},d.a.createElement(b.c,null),d.a.createElement("span",{className:"ml-1"},"Export"))),d.a.createElement("div",{className:"flex space-x-2"},d.a.createElement("button",{className:"btn btn-primary btn-xs"},"Received"),d.a.createElement("button",{className:"text-white btn btn-outline-gray btn-xs"},"Pending"))),d.a.createElement(x.TableContainer,{className:"mb-8"},d.a.createElement(x.Table,null,d.a.createElement(x.TableHeader,null,d.a.createElement("tr",null,d.a.createElement(x.TableCell,null,"Date"),d.a.createElement(x.TableCell,null,"Network"),d.a.createElement(x.TableCell,null,"From"),d.a.createElement(x.TableCell,null,"To"),d.a.createElement(x.TableCell,null,"Reward"))),d.a.createElement(x.TableBody,{className:"text-lg divide-gray-500"},o.length>0&&o.map((function(a,t){return d.a.createElement(x.TableRow,null,d.a.createElement(x.TableCell,null,d.a.createElement("div",{className:"text-lg text-white"},a.date),d.a.createElement("span",{className:"text-sm"},a.date)),d.a.createElement(x.TableCell,null,d.a.createElement("span",{className:"text-white btn btn-outline-gray btn-xs"},"Testnet")),d.a.createElement(x.TableCell,null,d.a.createElement("div",{className:"text-sm text-white"},"Stackedsats"),d.a.createElement("span",null,a.from)),d.a.createElement(x.TableCell,null,d.a.createElement("div",{className:"text-sm text-white"},a.to),d.a.createElement("div",{className:"flex items-center text-sm text-warning-500"},d.a.createElement(b.a,null),d.a.createElement("span",{className:"ml-1"},"Bitcoin"))),d.a.createElement(x.TableCell,null,d.a.createElement("div",{className:"text-sm text-white"},a.reward," STX"),d.a.createElement("div",{className:"text-sm"},d.a.createElement("span",{className:"text-warning-500"},parseFloat(a.reward/(e.stxusd*e.btcusd)).toFixed(2))," ","BTC |"," ",d.a.createElement("span",{className:"text-success-600"},parseFloat(e.stxusd/a.reward).toFixed(2))," ","USD")))}))))))))),d.a.createElement("div",{className:"grid gap-6 mb-8 xl:grid-cols-3"},d.a.createElement(x.Card,null,d.a.createElement(N,{openAddressModal:function(){be(!0)},closeAddressModal:function(){be(!1)},openManualAddressModal:function(){ve(!0)},closeManualAddressModal:function(){ve(!1)},isAddressModalOpen:xe,isManualAddressModalOpen:Ee,addBTCAddress:_,addAddress:je,stxAddress:M,setStxAddress:R}),d.a.createElement(x.CardBody,{className:"space-y-8 text-white"},d.a.createElement("div",{className:"flex flex-wrap justify-between"},d.a.createElement("div",{className:"flex flex-wrap items-center"},d.a.createElement("h2",{className:"mr-3 text-2xl font-medium"},"Portfolio"),d.a.createElement("span",{className:"text-gray-200"},1+a.btcAddress.length))),d.a.createElement("div",{className:"flex flex-wrap justify-between"},d.a.createElement("div",{className:"flex items-baseline space-x-2"},d.a.createElement("span",{className:"text-2xl"},"STX")),d.a.createElement("div",{className:"flex items-center space-x-2"},d.a.createElement("span",{className:"text-2xl"},e.stxusd*C.reduce((function(e,a){return e+a}),0)),d.a.createElement("span",{className:"font-medium text-gray-200"},"STX"))),d.a.createElement("div",null,d.a.createElement("div",{className:"flex flex-wrap justify-between mb-3 text-gray-200"},d.a.createElement("div",{className:"flex"},d.a.createElement("span",null,a.stxAddress.length," addresses")),d.a.createElement("div",{className:"flex"},d.a.createElement("span",null,e.stxusd*C.reduce((function(e,a){return e+a}),0)))),d.a.createElement("ul",null,a.stxAddress.map((function(e,t){return d.a.createElement("li",{className:"p-2 mb-1 border-l-4 cursor-pointer hover:bg-primary-400 bg-primary-600 border-primary-300"},d.a.createElement("div",{className:"flex flex-wrap justify-between"},d.a.createElement("div",{className:"flex flex-wrap items-center space-x-3"},d.a.createElement("span",null,e),d.a.createElement(h.a,{menuItems:d.a.createElement(G,{stx:e,username:a.username}),buttonIcon:d.a.createElement(U,null)})),d.a.createElement("div",{className:"flex"},d.a.createElement("span",null,C[t]))))})))),d.a.createElement("hr",{className:"border-gray-500"}),d.a.createElement("div",{className:"flex flex-wrap justify-between"},d.a.createElement("div",{className:"flex items-baseline space-x-2"},d.a.createElement("span",{className:"text-2xl"},"BTC")),d.a.createElement("div",{className:"flex items-center space-x-2"},d.a.createElement("span",{className:"text-2xl"},C.reduce((function(e,a){return e+a}),0)),d.a.createElement("span",{className:"font-medium text-gray-200"},"BTC"))),d.a.createElement("div",null,d.a.createElement("div",{className:"flex flex-wrap justify-between mb-3 text-gray-200"},d.a.createElement("div",{className:"flex"},d.a.createElement("span",null,a.btcAddress.length," Addresses")),d.a.createElement("div",{className:"flex"},d.a.createElement("span",null,e.stxusd*C.reduce((function(e,a){return e+a}),0)))),d.a.createElement("ul",null,a.btcAddress.map((function(e,t){return d.a.createElement("li",{className:"p-2 mb-1 border-l-4 cursor-pointer hover:bg-primary-400 bg-primary-600 border-primary-300"},d.a.createElement("div",{className:"flex flex-wrap justify-between"},d.a.createElement("div",{className:"flex flex-wrap items-center space-x-3"},d.a.createElement("span",{onClick:function(){_(e)}},e),d.a.createElement(h.a,{menuItems:d.a.createElement(G,{btc:e,username:a.username}),buttonIcon:d.a.createElement(U,null)})),d.a.createElement("div",{className:"flex"},d.a.createElement("span",null,C[t]))))})))))),d.a.createElement(x.Card,null,d.a.createElement(x.CardBody,{className:"space-y-8 text-white"},d.a.createElement("div",{className:"flex flex-wrap justify-between"},d.a.createElement("div",{className:"flex flex-wrap items-center"},d.a.createElement("h2",{className:"mr-3 text-2xl font-medium"},"STX balance")),d.a.createElement("div",null,d.a.createElement(x.Select,{className:"py-1 pl-2 mt-1 bg-transparent border-gray-300 leading-1"},d.a.createElement("option",null,"USD")))),d.a.createElement("div",null,d.a.createElement("div",{className:"flex flex-wrap items-center justify-between py-2 border-b border-gray-400"},d.a.createElement("div",{className:"flex space-x-2"},d.a.createElement("span",null,"Total Balance")),d.a.createElement("div",{className:"flex space-x-2"},d.a.createElement("span",{className:"text-lg font-medium text-success-400"},j.balance/1e6))),d.a.createElement("div",{className:"flex flex-wrap items-center justify-between py-2 border-b border-gray-400"},d.a.createElement("div",{className:"flex space-x-2"},d.a.createElement("span",null,"Available Balance")),d.a.createElement("div",{className:"flex space-x-2"},d.a.createElement("span",null,(j.balance-j.locked)/1e6))),d.a.createElement("div",{className:"flex flex-wrap items-center justify-between py-2"},d.a.createElement("div",{className:"flex space-x-2"},d.a.createElement("span",null,"Stacking Balance")),d.a.createElement("div",{className:"flex space-x-2"},d.a.createElement(x.Input,{className:"py-3 mb-3 text-white bg-gray-800 border-none text-right",placeholder:"STX Value",type:"number",value:Ne,onChange:function(e){he(e.target.value)}})))),d.a.createElement("div",null,d.a.createElement("div",{className:"flex justify-end mb-4"},d.a.createElement("div",null,d.a.createElement(x.Select,{className:"py-1 pl-2 mt-1 bg-transparent border-gray-300 leading-1"},d.a.createElement("option",null,"Daily"))))),d.a.createElement("button",{className:"mt-4 mb-6 btn btn-outline-primary btn-sm btn-block",onClick:Oe},"Stack now"))),d.a.createElement(x.Card,null,d.a.createElement(x.CardBody,{className:"space-y-8 text-white"},d.a.createElement("div",{className:"flex flex-wrap justify-between"},d.a.createElement("div",{className:"flex flex-wrap items-center"},d.a.createElement("h2",{className:"mr-3 text-2xl font-medium"},"BTC balance")),d.a.createElement("div",null,d.a.createElement(x.Select,{className:"py-1 pl-2 mt-1 bg-transparent border-gray-300 leading-1"},d.a.createElement("option",null,"USD")))),d.a.createElement("div",null,d.a.createElement("div",{className:"flex flex-wrap items-center justify-between py-2 border-b border-gray-400"},d.a.createElement("div",{className:"flex space-x-2"},d.a.createElement("span",null,"Total Balance")),d.a.createElement("div",{className:"flex space-x-2"},d.a.createElement("span",{className:"text-lg font-medium text-success-400"},parseFloat(j.balance/1e6/(e.stxusd*e.btcusd)).toFixed(2),"BTC"))),d.a.createElement("div",{className:"flex flex-wrap items-center justify-between py-2 border-b border-gray-400"},d.a.createElement("div",{className:"flex space-x-2"},d.a.createElement("span",null,"Available Balance")),d.a.createElement("div",{className:"flex space-x-2"},d.a.createElement("span",null," ",parseFloat((j.balance-j.locked)/1e6/(e.stxusd*e.btcusd)).toFixed(2)," ","BTC"))),d.a.createElement("div",{className:"flex flex-wrap items-center justify-between py-2"},d.a.createElement("div",{className:"flex space-x-2"},d.a.createElement("span",null,"Stacking Balance")),d.a.createElement("div",{className:"flex space-x-2"},d.a.createElement("span",null,parseFloat(Ne/(e.stxusd*e.btcusd)).toFixed(2)," ","BTV")))),d.a.createElement("div",null,d.a.createElement("div",{className:"flex justify-end mb-4"},d.a.createElement("div",null,d.a.createElement(x.Select,{className:"py-1 pl-2 mt-1 bg-transparent border-gray-300 leading-1"},d.a.createElement("option",null,"Staked"))))),d.a.createElement("button",{className:"mt-4 mb-6 btn btn-outline-gray btn-sm btn-block"},"Stack now")))),d.a.createElement("div",null)))}},145:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(0),l=t.n(n),r=t(13),s=function(){var e=Object(r.c)((function(e){return e.prices}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"text-gray-300 "},l.a.createElement("p",{className:"mb-2"},"Total Volume"),l.a.createElement("div",null,l.a.createElement("b",{className:"mr-2 text-3xl font-normal text-white"},e.liquidStxSupplyResult," STX")," ",l.a.createElement("span",null,l.a.createElement("span",{className:"text-yellow-500"}," ",(e.stxusd*e.liquidStxSupplyResult/e.btcusd).toLocaleString("fullwide",{useGrouping:!1}))," ","BTC |"," ",l.a.createElement("span",{className:"text-green-600"}," ",(e.stxusd*e.liquidStxSupplyResult).toLocaleString("fullwide",{useGrouping:!1}))," ","USD"))))}},215:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){var a=e.children,t=e.title;return l.a.createElement("div",{className:"min-w-0 p-4 bg-gray-800 rounded-lg shadow-xs"},l.a.createElement("p",{className:"mb-4 font-semibold text-gray-300"},t),a)}},216:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){var a=e.legends;return l.a.createElement("div",{className:"flex justify-center mt-4 space-x-3 text-sm text-gray-400"},a.map((function(e){return l.a.createElement("div",{className:"flex items-center",key:e.title},l.a.createElement("span",{className:"inline-block w-3 h-3 mr-1 ".concat(e.color," rounded-full")}),l.a.createElement("span",null,e.title))})))}},396:function(e,a,t){"use strict";var n=t(12),l=t(0),r=t.n(l),s=t(25);a.a=function(e){var a=e.menuItems,t=e.buttonIcon,c=Object(l.useState)(!1),m=Object(n.a)(c,2),d=m[0],o=m[1];return r.a.createElement("div",{className:"relative flex items-center"},r.a.createElement("button",{onClick:function(){o(!d)}},t),r.a.createElement(s.Dropdown,{className:"z-50 w-32 bg-gray-700",isOpen:d,onClose:function(){return o(!1)}},a))}},86:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){var a=e.children,t=e.left,n=e.right;return a?l.a.createElement("div",{className:"flex items-center justify-between px-8 pt-10 pb-8 mb-8 -mx-6 text-gray-100 border-b-2 border-gray-900 bg-gray-950"},l.a.createElement("h1",{show:a,className:"mb-3 text-2xl"},a)):a?void 0:l.a.createElement("div",{className:"flex flex-wrap items-center justify-between px-12 pt-10 pb-8 mb-8 -mx-6 text-gray-100 border-b-2 border-gray-900 bg-gray-950"},l.a.createElement("div",null,t),l.a.createElement("div",null,n))}}}]);
//# sourceMappingURL=13.5e96f1e7.chunk.js.map