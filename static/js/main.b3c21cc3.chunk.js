(this.webpackJsonpflaunt=this.webpackJsonpflaunt||[]).push([[0],{1003:function(e,t){},1359:function(e,t){},1414:function(e,t){},1420:function(e,t){},1441:function(e,t){},1455:function(e,t){},1456:function(e,t){},1664:function(e,t){},1665:function(e,t){},1666:function(e,t){},1669:function(e,t,n){"use strict";n.r(t);var r,c=n(14),a=n.n(c),s=n(274),i=n.n(s),o=(n(734),n(1)),l=n.n(o),u=n(47),d=n(37),j=n(97),b=(n(735),n(395)),p=n.n(b),h=n(98),f=n(196),x=n(60),m=n(69),O=n(1678),g=n.p+"static/media/troll.b677baa7.png",v=n(707),w=n.n(v),k=n(720),y=n(145),C=n(149),A=(n(1369),n(10)),N=h.a.button(r||(r=Object(j.a)(["\n  cursor: pointer;\n  margin: 1rem 0.1rem 1rem 0.1rem;\n  border: 0;\n  border-radius: 0.4rem;\n  padding: 0.4rem 1rem;\n  font-size: 1rem;\n  font-family: 'courier';\n  box-shadow:\n    0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n    0 6.7px 5.3px rgba(0, 0, 0, 0.048),\n    0 12.5px 10px rgba(0, 0, 0, 0.06),\n    0 22.3px 17.9px rgba(0, 0, 0, 0.072),\n    0 41.8px 33.4px rgba(0, 0, 0, 0.086),\n    0 100px 80px rgba(0, 0, 0, 0.12);\n\n  :hover {\n    background-color: orange;\n    color: white;\n  }\n"])));var D=function(e){var t=e.handleLogout,n=(e.privKey,e.bridgeDetails),r=(e.arbProvider,e.arbSigner),a=e.metadataCID,s=Object(c.useState)("not started"),i=Object(d.a)(s,2),o=i[0],j=i[1],b=Object(k.a)(n,!1),p=b.walletAddress,h=b.balances;console.log("bridge",b);var f=new x.ethers.Contract("0xe41eE07A9F41CD1Ab4e7F25A93321ba1Dc0Ec5b0",["function totalSupply() view returns (uint)","function tokenByIndex(uint) view returns (uint)","function tokenURI(uint) view returns (string)","function mint(address, string) returns (uint)"],r);function m(){return(m=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C.b.info("deposit request initiated. waiting for confirmation"),e.next=4,b.eth.deposit("0.01");case 4:t=e.sent,console.log("reciept",t),C.b.success("Eth depostited to arbitrum bridge wallet"),g(),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("error",e.t0.reason),C.b.error("Error while depositing eth to arbitrum:"+e.t0.reason);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function O(){return(O=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C.b.info("Withdrawal request initiated, waiting for confirmation"),e.next=4,b.eth.withdraw("0.01");case 4:t=e.sent,console.log("reciept",t),C.b.success("Eth withdrawn request sent from arbitrum bridge wallet"),g(),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("error",e.t0),alert("Error while withdrawing eth from arbitrum:"+e.t0.reason);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function g(){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.update();case 2:C.b.success("Balance refreshed successfully");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){window.setTimeout(Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.update();case 2:case"end":return e.stop()}}),e)}))),3e3)}),[]);var w=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j("started"),e.next=3,f.mint(p,t);case 3:n=e.sent,console.log(n),j("minted! head to the gallery to view");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsxs)("div",{children:[Object(A.jsx)(C.a,{}),Object(A.jsx)("div",{className:"site-page-header",title:"Openlogin x Arbitrum",extra:[Object(A.jsx)("button",{type:"primary",onClick:t,children:"Logout"},"1")]}),Object(A.jsxs)("div",{className:"container",children:[Object(A.jsxs)("div",{style:{margin:4},children:[Object(A.jsx)("div",{children:Object(A.jsx)("strong",{children:"manage torus account"})}),Object(A.jsx)("br",{}),Object(A.jsxs)("div",{children:["address: ",Object(A.jsx)("i",{children:p})]}),Object(A.jsxs)("div",{children:["l1 eth balance: ",Object(A.jsx)("i",{children:y.utils.formatEther(h.eth.balance)||0})]}),Object(A.jsxs)("div",{children:["arb eth balance: ",Object(A.jsx)("i",{children:y.utils.formatEther(h.eth.arbChainBalance)||0})]}),Object(A.jsx)(N,{onClick:function(){return m.apply(this,arguments)},children:"deposit eth to arb"}),"\xa0",Object(A.jsx)(N,{onClick:function(){return O.apply(this,arguments)},children:"withdraw eth from arb"}),"\xa0",Object(A.jsx)(N,{onClick:g,children:"refresh"})]}),Object(A.jsx)("hr",{}),Object(A.jsxs)("div",{children:[Object(A.jsx)(N,{onClick:function(){w(a)},children:"mint to arbitrum"}),Object(A.jsxs)("div",{children:["mint status: ",o]})]})]}),Object(A.jsx)("hr",{}),"withdrawals from arbitrum to l1 take approximately 24 hours"]})},S=n(716),I=n(192),E="https://kovan.infura.io/v3/65982ef7e3f24b3586823483ebdc99e0",F="https://kovan4.arbitrum.io/rpc",T="0x2948ac43e4AfF448f6af0F7a11F18Bb6062dd271",B="0x64b92d4f02cE1b4BDE2D16B6eAEe521E27f28e07",L=y.providers.getDefaultProvider(E),P=new y.providers.JsonRpcProvider(F);var R,U,q,K,z,M,W,Y,J,X,_,G,H=function(e){var t=e.showAccountDialog,n=e.accountDialog,r=e.metadataCID,a=Object(c.useState)(!1),s=Object(d.a)(a,2),i=s[0],o=s[1],j=Object(c.useState)(void 0),b=Object(d.a)(j,2),p=b[0],h=b[1],f=Object(c.useState)(null),x=Object(d.a)(f,2),m=x[0],O=x[1],g=Object(c.useState)(null),v=Object(d.a)(g,2),k=v[0],y=v[1];function C(){return(C=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.prev=1,e.next=4,p.login({loginProvider:"google",redirectUrl:"".concat(window.origin)});case 4:e.sent,o(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("error",e.t0),o(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function N(e){return E.apply(this,arguments)}function E(){return(E=Object(u.a)(l.a.mark((function e(t){var n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=new I.a(t,L),r=new I.a(t,P),c=new S.Bridge(T,B,n,r),O(c),y(r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new w.a({clientId:"BHEDy3yxtQ6CQBwX92Y7bCw4AzriP7SrDp1gYGP-4-jAWFvx8cQx0v4e9jC9w60hwy2TjmBpuYAXY_KRHscWY-E",network:"testnet"}),e.next=3,t.init();case 3:t.privKey&&N(t.privKey),h(t),o(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o(!0),function(){e.apply(this,arguments)}()}),[]);var F=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,p.logout();case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(A.jsxs)(A.Fragment,{children:[i?Object(A.jsx)("div",{children:Object(A.jsx)("strong",{children:"loading..."})}):Object(A.jsx)("div",{children:p&&p.privKey?Object(A.jsxs)("span",{children:["logged in (",Object(A.jsx)("strong",{onClick:function(){return t(!n)},children:"view account"}),")"]}):Object(A.jsx)("div",{children:Object(A.jsx)("div",{onClick:function(){return C.apply(this,arguments)},children:Object(A.jsx)("strong",{children:"login with openlogin"})})})}),Object(A.jsxs)("div",{className:"modal ".concat(n?"is-active":""),children:[Object(A.jsx)("div",{className:"modal-background"}),Object(A.jsxs)("div",{className:"modal-content",children:[Object(A.jsxs)("header",{className:"modal-card-head",children:[Object(A.jsx)("p",{className:"modal-card-title",children:"arbitrum (via torus)"}),Object(A.jsx)("button",{className:"delete","aria-label":"close",onClick:function(){return t(!1)}})]}),Object(A.jsx)("section",{className:"modal-card-body",children:p&&p.privKey?Object(A.jsx)(D,{bridgeDetails:m,handleLogout:F,loading:i,privKey:null===p||void 0===p?void 0:p.privKey,arbProvider:P,arbSigner:k,metadataCID:r}):Object(A.jsx)("span",{children:"please login into your torus account first"})}),Object(A.jsx)("footer",{className:"modal-card-foot"})]})]})]})},Q=n(131),V=Object(h.a)(Q.b)(R||(R=Object(j.a)(["\n  color: #4a4a4a;\n"]))),Z=function(e){var t=e.accountDialog,n=e.showAccountDialog,r=e.metadataCID,a=Object(c.useState)(!1),s=Object(d.a)(a,2),i=s[0],o=s[1];return Object(A.jsxs)(O.a,{active:i,transparent:!0,style:{background:"none"},children:[Object(A.jsxs)(O.a.Brand,{children:[Object(A.jsx)(O.a.Item,{renderAs:"span",children:Object(A.jsx)(Q.b,{to:"/",children:Object(A.jsx)("img",{src:g,alt:"Flaunt"})})}),Object(A.jsx)(O.a.Burger,{onClick:function(){return o(!i)}})]}),Object(A.jsxs)(O.a.Menu,{children:[Object(A.jsxs)(O.a.Container,{children:[Object(A.jsx)(O.a.Item,{renderAs:"span",children:Object(A.jsx)(V,{to:"/",children:"home"})}),Object(A.jsx)(O.a.Item,{renderAs:"span",children:Object(A.jsx)(V,{to:"/gallery",children:"gallery"})}),Object(A.jsx)(O.a.Item,{renderAs:"span",children:Object(A.jsx)(V,{to:"/about",children:"about"})})]}),Object(A.jsx)(O.a.Container,{align:"end",children:Object(A.jsx)(O.a.Item,{href:"#",children:Object(A.jsx)(H,{accountDialog:t,showAccountDialog:n,metadataCID:r})})})]})]})},$=n(78),ee=function(e){var t=e.contract,n=(e.contractSkale,e.contractArbitrum),r=(e.walletDetected,Object(c.useState)([])),a=Object(d.a)(r,2),s=a[0],i=a[1],o=Object(c.useState)([]),j=Object(d.a)(o,2),b=j[0],p=j[1],h=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.totalSupply();case 3:t=e.sent.toNumber(),Object($.a)(Array(t)).map(function(){var e=Object(u.a)(l.a.mark((function e(t,r){var c,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r+1,e.next=3,n.tokenURI(c);case 3:a=e.sent,c>2&&(s=Object(A.jsx)("li",{children:Object(A.jsx)(Q.b,{to:"/v/".concat(c),children:"".concat(a," (").concat(c,")")})},r),i((function(e){return[].concat(Object($.a)(e),[s])})));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.totalSupply();case 3:n=e.sent.toNumber(),Object($.a)(Array(n)).map(function(){var e=Object(u.a)(l.a.mark((function e(n,r){var c,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r+1,e.next=3,t.tokenURI(c);case 3:a=e.sent,s=Object(A.jsx)("li",{children:Object(A.jsx)(Q.b,{to:"/v/".concat(c),children:"".concat(a," (").concat(c,")")})},r),p((function(e){return[].concat(Object($.a)(e),[s])}));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){h(),f()}),[]),Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)("h2",{children:"Gallery"}),Object(A.jsxs)("header",{className:"App-header",children:[Object(A.jsx)("p",{children:"all the meme-ified goodness"}),Object(A.jsx)("br",{}),Object(A.jsx)("div",{children:Object(A.jsx)("strong",{children:"l1"})}),Object(A.jsx)("div",{children:"kovan"}),Object(A.jsx)("ul",{children:0===b.length?"loading...":b}),Object(A.jsx)("br",{}),Object(A.jsx)("div",{children:Object(A.jsx)("strong",{children:"l2"})}),Object(A.jsx)("div",{children:"arbitrum"}),Object(A.jsx)("ul",{children:0===s.length?"loading...":s}),Object(A.jsx)("br",{}),Object(A.jsx)("div",{children:"skale"}),Object(A.jsx)("ul",{})]})]})},te=function(e){e.contract;return Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)("h2",{children:"About"}),Object(A.jsxs)("header",{className:"App-header",children:[Object(A.jsx)("h1",{children:"meme-ify your NFTs"}),Object(A.jsx)("p",{children:"generate derivative assets (new NFTs) from items you already own"})]})]})},ne=n(722),re=Object(h.a)(ne.a)(U||(U=Object(j.a)(["\n  width: 60vh;\n  height: 60vh;\n  margin-bottom: 1rem;\n  box-shadow:\n    0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n    0 6.7px 5.3px rgba(0, 0, 0, 0.048),\n    0 12.5px 10px rgba(0, 0, 0, 0.06),\n    0 22.3px 17.9px rgba(0, 0, 0, 0.072),\n    0 41.8px 33.4px rgba(0, 0, 0, 0.086),\n    0 100px 80px rgba(0, 0, 0, 0.12);\n  background-color: #e8e8e8;\n"]))),ce=h.a.h2(q||(q=Object(j.a)(["\n  font-weight: bold;\n  font-size: 2rem;\n"]))),ae=n(650),se=function(e){var t=e.contract,n=(e.walletDetected,Object(c.useState)("")),r=Object(d.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(""),o=Object(d.a)(i,2),j=o[0],b=o[1],p=Object(c.useState)(),h=Object(d.a)(p,2),f=h[0],x=h[1],O=Object(m.f)().id,g=function(e){var t=e.replace("/ipfs","").replace("ipfs://",""),n=new ae.CID(t).toV1();return"https://".concat(n,".ipfs.dweb.link/")},v=function(){var e=Object(u.a)(l.a.mark((function e(){var n,r,c,a,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.tokenURI(O);case 2:return n=e.sent,console.log(n),r=g(n),e.next=7,fetch(r);case 7:return c=e.sent,e.next=10,c.json();case 10:a=e.sent,i=g(a.image),x(i),s(a.name),b(a.description);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){v()}),[]),Object(A.jsx)("div",{className:"App",children:Object(A.jsxs)("header",{className:"App-header",children:[void 0===f?"loading":Object(A.jsx)(re,{src:f,wrapper:"span"}),Object(A.jsx)(ce,{children:a}),Object(A.jsx)("div",{children:j})]})})},ie=function(e){e.contract;return Object(A.jsx)("div",{className:"App",children:Object(A.jsx)("header",{className:"App-header",children:Object(A.jsx)("h1",{children:"not found \ud83d\ude15"})})})},oe=n.p+"static/media/eyes.81ad596d.png",le=n.p+"static/media/shades.3530aa03.png",ue=n.p+"static/media/doge.c79b108e.png",de=n.p+"static/media/joint.2da67bea.png",je=n.p+"static/media/sample-1.1e6f802a.png",be=n.p+"static/media/sample-2.e854d957.jpg",pe=n.p+"static/media/sample-3.942cb87b.jpg",he=n.p+"static/media/sample-4.81671ddb.png",fe=n.p+"static/media/sample-5.120f9728.png",xe=n(1663).fabric,me=new(n(1667))({host:"ipfs.infura.io",port:5001,protocol:"https"}),Oe=n(650),ge=Object(h.a)(f.SketchField)(K||(K=Object(j.a)(["\n  margin-top: 1rem;\n  box-shadow:\n    0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n    0 6.7px 5.3px rgba(0, 0, 0, 0.048),\n    0 12.5px 10px rgba(0, 0, 0, 0.06),\n    0 22.3px 17.9px rgba(0, 0, 0, 0.072),\n    0 41.8px 33.4px rgba(0, 0, 0, 0.086),\n    0 100px 80px rgba(0, 0, 0, 0.12);\n  background-color: #e8e8e8;\n"]))),ve=h.a.input(z||(z=Object(j.a)(["\n  width: 100%;\n  font-size: 1.6rem;\n  border: solid 1px #c1b6b6;\n  border-radius: 1rem;\n  padding: 0.4rem 0.8rem;\n  margin-bottom: 0.2rem;\n  font-family: 'courier';\n"]))),we=h.a.button(M||(M=Object(j.a)(["\n  cursor: pointer;\n  margin: 0.6rem 0.4rem;\n  border-radius: 1rem;\n  border: 0;\n  padding: 0.6rem 1.4rem;\n  font-size: 2rem;\n  font-family: 'courier';\n  box-shadow:\n    0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n    0 6.7px 5.3px rgba(0, 0, 0, 0.048),\n    0 12.5px 10px rgba(0, 0, 0, 0.06),\n    0 22.3px 17.9px rgba(0, 0, 0, 0.072),\n    0 41.8px 33.4px rgba(0, 0, 0, 0.086),\n    0 100px 80px rgba(0, 0, 0, 0.12);\n\n  :hover {\n    background-color: orange;\n    color: white;\n  }\n"]))),ke=h.a.button(W||(W=Object(j.a)(["\n  cursor: pointer;\n  margin: 1rem 0.1rem 1rem 0.1rem;\n  border: 0;\n  border-radius: 0.4rem;\n  padding: 0.4rem 1rem;\n  font-size: 1rem;\n  font-family: 'courier';\n  box-shadow:\n    0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n    0 6.7px 5.3px rgba(0, 0, 0, 0.048),\n    0 12.5px 10px rgba(0, 0, 0, 0.06),\n    0 22.3px 17.9px rgba(0, 0, 0, 0.072),\n    0 41.8px 33.4px rgba(0, 0, 0, 0.086),\n    0 100px 80px rgba(0, 0, 0, 0.12);\n\n  :hover {\n    background-color: orange;\n    color: white;\n  }\n"]))),ye=h.a.img(Y||(Y=Object(j.a)(["\n  border-radius: 1rem;\n  width: 6rem;\n  padding: 0.2rem;\n  cursor: pointer;\n"]))),Ce=!!window.ethereum;try{window.ethereum?(window.ethereum.enable().then(J=new x.ethers.providers.Web3Provider(window.ethereum)),X=J.getSigner()):J=x.ethers.getDefaultProvider("kovan"),_=new x.ethers.providers.JsonRpcProvider("https://dev-testnet-v1-0.skalelabs.com"),G=new x.ethers.providers.JsonRpcProvider("https://kovan4.arbitrum.io/rpc")}catch(Se){console.log(Se)}var Ae=["function totalSupply() view returns (uint)","function tokenByIndex(uint) view returns (uint)","function tokenURI(uint) view returns (string)","function mint(address, string) returns (uint)"];var Ne=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(d.a)(a,2),i=s[0],o=s[1],j=Object(c.useState)("0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405"),b=Object(d.a)(j,2),h=b[0],O=b[1],v=Object(c.useState)(Math.floor(24437*Math.random())),w=Object(d.a)(v,2),k=w[0],y=w[1],C=Object(c.useState)(f.Tools.Select),N=Object(d.a)(C,2),D=N[0],S=N[1],I=Object(c.useState)(!1),E=Object(d.a)(I,2),F=E[0],T=E[1],B=Object(c.useState)(!1),L=Object(d.a)(B,2),P=L[0],R=L[1],U=Object(c.useState)(!1),q=Object(d.a)(U,2),K=q[0],z=q[1],M=Object(c.useState)(!1),W=Object(d.a)(M,2),Y=W[0],H=W[1],Q=Object(c.useState)(!1),V=Object(d.a)(Q,2),$=V[0],ne=V[1],re=Object(c.useState)(""),ce=Object(d.a)(re,2),ae=ce[0],Ne=ce[1],De=Object(c.useState)(""),Se=Object(d.a)(De,2),Ie=Se[0],Ee=Se[1],Fe=Object(c.useState)(),Te=Object(d.a)(Fe,2),Be=Te[0],Le=Te[1];console.log(X||J);var Pe=new x.ethers.Contract("0xe41eE07A9F41CD1Ab4e7F25A93321ba1Dc0Ec5b0",Ae,X||J),Re=new x.ethers.Contract("0x6bef29BdBf7de18caf2fA2422A4ec3d4c7d0a064",Ae,_),Ue=new x.ethers.Contract("0xe41eE07A9F41CD1Ab4e7F25A93321ba1Dc0Ec5b0",Ae,G),qe=new x.ethers.providers.InfuraProvider,Ke=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!J){e.next=7;break}return e.next=3,J.getNetwork();case 3:t=e.sent,[42,1337,344435,801984078892471].includes(t.chainId)&&Le(!0),e.next=8;break;case 7:Le(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ze=Object(c.useRef)(),Me=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ze.current.addText("SCALING FTW",{fontFamily:"Impact",fill:"#fff",stroke:"#000",strokeWidth:"1"}),S(f.Tools.Select);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),We=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ze.current.removeSelected();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ye=function(){z(!K)},Je=function(e){var t=e.replace("ipfs/","").replace("ipfs://",""),n=t.split("/")[0],r=new Oe.CID(n).toV1();return"https://".concat(r,".ipfs.dweb.link/").concat(t.split("/")[1])},Xe=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.indexOf("mp4")>-1)){e.next=4;break}return alert("unable to load videos"),z(!0),e.abrupt("return");case 4:return e.next=6,p.a.get(t,{responseType:"blob"});case 6:n=e.sent,(r=new FileReader).readAsDataURL(n.data),r.onload=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:xe.Image.fromURL(r.result,(function(e){e.scaleToWidth(640),ze.current.setBackgroundFromDataUrl(e.toDataURL(),{stretched:!0,originX:"left",originY:"top"})}));case 1:case"end":return e.stop()}}),e)})));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_e=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,r,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new x.ethers.Contract(h,Ae,qe),e.next=3,t.tokenURI(k);case 3:return n=e.sent,e.next=6,fetch(n);case 6:return r=e.sent,e.next=9,r.json();case 9:c=e.sent,a=Je(c.image),console.log(a),Xe(a),z(!1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ge=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Xe(t),z(!1);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),He=function(){H(!Y)},Qe=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:He();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ve=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FileReader).onloadend=Object(u.a)(l.a.mark((function e(){var n,c,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n='<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><image width="100%" height="100%" href="'.concat(t.result,'" /></svg>'),e.next=3,me.add(n);case 3:return c=e.sent,r(c),a='{ "name":"'.concat(ae,'", "description":"').concat(Ie,'","image":"ipfs://').concat(c,'" }'),e.next=8,me.add(a);case 8:s=e.sent,o(s);case 10:case"end":return e.stop()}}),e)}))),n=ze.current.toDataURL(),e.next=5,fetch(n);case 5:return e.next=7,e.sent.blob();case 7:c=e.sent,t.readAsDataURL(c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ze=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T("minting..."),e.next=3,X.getAddress();case 3:return t=e.sent,e.next=6,Pe.mint(t,i);case 6:return n=e.sent,T("transaction sent!"),e.next=10,n.wait();case 10:T("minted! head to the gallery to check it out");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$e=function(){R(!P)},et=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={jsonrpc:"2.0",id:0,method:"Filecoin.ClientStartDeal",params:[{Data:{TransferType:"graphsync",Root:{"/":i},PieceCid:null,PieceSize:0},Wallet:"t3r3yrbujjmmjdixnnaab35ioi7ntpnlrt4bmsrtw4j5d6kjb2eeyu7axr2zv2g5m5emby6mzn6rvqjwzbfrya",Miner:"t01000",EpochPrice:2500,MinBlocksDuration:300}]},e.next=3,p.a.post("http://localhost:7777/rpc/v0",t);case 3:n=e.sent,console.log(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),tt=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={chainId:"0x54173",chainName:"SKALE Network Testnet",rpcUrls:["https://dev-testnet-v1-0.skalelabs.com"],nativeCurrency:{name:"SKALE ETH",symbol:"skETH",decimals:18},blockExplorerUrls:["https://expedition.dev/?rpcUrl=https://dev-testnet-v1-0.skalelabs.com"]},e.next=3,X.getAddress();case 3:n=e.sent,window.ethereum.request({method:"wallet_addEthereumChain",params:[t,n]}).catch((function(e){return console.log(e.message)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),nt=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T("minting..."),e.next=4,X.getAddress();case 4:return t=e.sent,e.next=7,Pe.mint(t,i);case 7:return n=e.sent,T("transaction sent!"),e.next=11,n.wait();case 11:T("minted! head to the gallery to check it out");case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),rt=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:R(!1),ne(!0);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){Ke()}),[]),Object(A.jsxs)(m.c,{children:[Object(A.jsx)(m.a,{path:"/",exact:!0,children:Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)(Z,{accountDialog:$,showAccountDialog:ne,metadataCID:i}),Be?Object(A.jsx)(A.Fragment,{}):Object(A.jsx)("div",{children:"unable to detect valid network. please connect to the kovan l1 testnet"}),Object(A.jsxs)("header",{className:"App-header",children:[Object(A.jsxs)("div",{children:[Object(A.jsx)(we,{onClick:function(){return Ye()},children:"load"}),Object(A.jsx)("span",{children:">"}),Object(A.jsx)(we,{onClick:function(){return Qe()},children:"save"}),Object(A.jsx)("span",{children:">"}),Object(A.jsx)(we,{onClick:function(){return $e()},children:"mint"})]}),Object(A.jsxs)("div",{children:[Object(A.jsx)(ke,{onClick:function(){ze.current.addImg(ue)},children:"dogeify"}),Object(A.jsx)(ke,{onClick:function(){ze.current.addImg(oe)},children:"laserify"}),Object(A.jsx)(ke,{onClick:function(){ze.current.addImg(g)},children:"trollify"}),Object(A.jsx)(ke,{onClick:function(){return ze.current.addImg(le),void ze.current.addImg(de)},children:"thugify"}),Object(A.jsx)(ke,{onClick:function(){return Me()},children:"textify"}),"\xa0\xa0",Object(A.jsx)(ke,{onClick:function(){S(f.Tools.Select)},children:"select"}),Object(A.jsx)(ke,{onClick:function(){S(f.Tools.Pencil)},children:"pen"}),Object(A.jsx)(ke,{onClick:function(){return We()},children:"remove"})]}),Object(A.jsx)(ge,{width:"640px",height:"640px",tool:D,lineColor:"black",lineWidth:3,ref:function(e){ze.current=e},name:"sketch"})]}),Object(A.jsxs)("div",{className:"modal ".concat(K?"is-active":""),children:[Object(A.jsx)("div",{className:"modal-background"}),Object(A.jsxs)("div",{className:"modal-content",children:[Object(A.jsxs)("header",{className:"modal-card-head",children:[Object(A.jsx)("p",{className:"modal-card-title",children:"load"}),Object(A.jsx)("button",{className:"delete","aria-label":"close",onClick:function(){return Ye()}})]}),Object(A.jsxs)("section",{className:"modal-card-body",children:[Object(A.jsx)("h2",{children:"load a sample nft asset..."}),Object(A.jsx)(ye,{src:je,onClick:function(){return Ge("https://bafybeibhg2ik63dnkb3el4nlh5qry3lnhfok3nh3csywi6joedv25kh77i.ipfs.dweb.link/image.png")}}),Object(A.jsx)(ye,{src:be,onClick:function(){return Ge("https://bafybeid5o4fkfgq62uvzuh24sgoo6jj2nir7ggk4o5rhwqb4sfr4wgbfku.ipfs.dweb.link/nft.jpg")}}),Object(A.jsx)(ye,{src:fe,onClick:function(){return Ge("https://bafybeifwsqojqrrtjsqcago3s6f5crkcra56ml6kti5ljxf74jceibca6e.ipfs.dweb.link/nft.jpg")}}),Object(A.jsx)(ye,{src:pe,onClick:function(){return Ge("https://bafybeieyl2r3uorgpotq76p6w2dbpxl3m2qablgkjawyzn5htdzudb5s4y.ipfs.dweb.link/nft.jpg")}}),Object(A.jsx)(ye,{src:he,onClick:function(){return Ge("https://ipfs.io/ipfs/Qme9DzDKpwoY5JGXs6d9YwPrN5u6VbSgf31LC2YNfUX5hu/nft.png")}}),Object(A.jsx)("hr",{}),Object(A.jsx)("h2",{children:"load from an existing NFT, e.g."}),Object(A.jsx)(ve,{value:h,placeholder:"contract address",onChange:function(e){return O(e.currentTarget.value)}}),Object(A.jsx)("br",{}),Object(A.jsx)(ve,{value:k,placeholder:"id",onChange:function(e){return y(e.currentTarget.value)}}),Object(A.jsx)("br",{}),Object(A.jsxs)("div",{children:[Object(A.jsx)(ke,{onClick:function(){y(Math.floor(24437*Math.random()))},children:"randomize"}),"\xa0",Object(A.jsx)(ke,{onClick:function(){return _e()},children:"load from contract"})]})]}),Object(A.jsx)("footer",{className:"modal-card-foot"})]})]}),Object(A.jsxs)("div",{className:"modal ".concat(Y?"is-active":""),children:[Object(A.jsx)("div",{className:"modal-background"}),Object(A.jsxs)("div",{className:"modal-content",children:[Object(A.jsxs)("header",{className:"modal-card-head",children:[Object(A.jsx)("p",{className:"modal-card-title",children:"save"}),Object(A.jsx)("button",{className:"delete","aria-label":"close",onClick:function(){return He()}})]}),Object(A.jsxs)("section",{className:"modal-card-body",children:[Object(A.jsx)(ve,{value:ae,placeholder:"nft name",onChange:function(e){return Ne(e.currentTarget.value)}}),Object(A.jsx)("br",{}),Object(A.jsx)(ve,{value:Ie,placeholder:"nft description",onChange:function(e){return Ee(e.currentTarget.value)}}),Object(A.jsx)("br",{}),Object(A.jsx)(ke,{onClick:function(){return Ve()},children:"save to ipfs"}),Object(A.jsx)("hr",{}),Object(A.jsxs)("p",{children:["Image CID: ",Object(A.jsx)("a",{href:"ipfs://".concat(n),target:"_blank",children:"ipfs://".concat(n)})]}),Object(A.jsxs)("p",{children:["Metadata CID: ",Object(A.jsx)("a",{href:"ipfs://".concat(i),target:"_blank",children:"ipfs://".concat(i)})]}),Object(A.jsx)("p",{children:i?"done! you're now ready to mint!":""}),Object(A.jsx)("hr",{}),Object(A.jsx)("p",{children:"once your assets have been saved, it's highly recommended to preserve with a storage deal or pinning service"}),Object(A.jsx)(ke,{onClick:function(){return et()},children:"preserve with filecoin"}),"\xa0",Object(A.jsx)(ke,{children:Object(A.jsx)("a",{href:"http://pinata.cloud/",target:"_blank",style:{color:"#000"},children:"preserve with pinata"})}),Object(A.jsx)("p",{children:"note that a filecoin requires a locally running lotus node"})]}),Object(A.jsx)("footer",{className:"modal-card-foot"})]})]}),Object(A.jsxs)("div",{className:"modal ".concat(P?"is-active":""),children:[Object(A.jsx)("div",{className:"modal-background"}),Object(A.jsxs)("div",{className:"modal-content",children:[Object(A.jsxs)("header",{className:"modal-card-head",children:[Object(A.jsx)("p",{className:"modal-card-title",children:"mint"}),Object(A.jsx)("button",{className:"delete","aria-label":"close",onClick:function(){return $e()}})]}),Object(A.jsxs)("section",{className:"modal-card-body",children:[Object(A.jsx)("p",{children:Object(A.jsx)("strong",{children:"layer 1"})}),Object(A.jsx)("p",{children:"mint to layer 1 (more expensive / immediately usable)"}),Object(A.jsx)(ke,{onClick:function(){return Ze()},children:"mint to L1"}),Object(A.jsx)("p",{children:F}),Object(A.jsx)("hr",{}),Object(A.jsx)("p",{children:Object(A.jsx)("strong",{children:"SKALE"})}),Object(A.jsx)("p",{children:"mint to SKALE (cheaper / requires bridging from SKALE to l1)"}),Object(A.jsx)(ke,{onClick:function(){return tt()},children:"switch metamask to SKALE"}),"\xa0",Object(A.jsx)(ke,{onClick:function(){return nt()},children:"mint to SKALE"}),Object(A.jsx)("hr",{}),Object(A.jsx)("p",{children:Object(A.jsx)("strong",{children:"arbitrum via torus"})}),Object(A.jsx)("p",{children:"mint to arbitrum (cheaper / requires bridging to l1)"}),"\xa0",Object(A.jsx)(ke,{onClick:function(){return rt()},children:"mint to arbitrum via torus"})]}),Object(A.jsx)("footer",{className:"modal-card-foot"})]})]})]})}),Object(A.jsx)(m.a,{path:"/gallery",children:Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)(Z,{accountDialog:$,showAccountDialog:ne}),Object(A.jsx)(ee,{contract:Pe,contractSkale:Re,contractArbitrum:Ue,walletDetected:Ce})]})}),Object(A.jsx)(m.a,{path:"/about",children:Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)(Z,{accountDialog:$,showAccountDialog:ne}),Object(A.jsx)(te,{})]})}),Object(A.jsx)(m.a,{path:"/v/:id",children:Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)(Z,{accountDialog:$,showAccountDialog:ne}),Object(A.jsx)(se,{contract:Pe,walletDetected:Ce})]})}),Object(A.jsx)(m.a,{component:ie,children:Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)(Z,{accountDialog:$,showAccountDialog:ne}),Object(A.jsx)(ie,{})]})})]})},De=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,1679)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};i.a.render(Object(A.jsx)(a.a.StrictMode,{children:Object(A.jsx)(Q.a,{basename:"",children:Object(A.jsx)(Ne,{})})}),document.getElementById("root")),De()},442:function(e,t){},734:function(e,t,n){},735:function(e,t,n){},802:function(e,t){},803:function(e,t){},892:function(e,t){},894:function(e,t){},904:function(e,t){},906:function(e,t){},916:function(e,t){},918:function(e,t){},943:function(e,t){},944:function(e,t){},950:function(e,t){},969:function(e,t){}},[[1669,1,2]]]);
//# sourceMappingURL=main.b3c21cc3.chunk.js.map