(this["webpackJsonpeth-explorer"]=this["webpackJsonpeth-explorer"]||[]).push([[0],{60:function(e,n){},71:function(e,n,t){},73:function(e,n,t){"use strict";t.r(n);var r,a,c,i,o,s,l,b,d,u,j,f,h,x,p,O,m,g,v,w,k,y,C,S,T,E,B,F,z,D,M,N,W,A,I,H,P,R=t(36),_=t(3),q=t.n(_),J=t(17),L=t(18),G=t(42),K=t(20),Q=t(2),U=t.n(Q),V=t(19),X=t(13),Y=t(29),Z=t(6),$=Object(_.createContext)({}),ee=function(e){var n=e.children,t=Object(_.useState)([]),r=Object(X.a)(t,2),a=r[0],c=r[1],i=Object(_.useState)(null),o=Object(X.a)(i,2),s=o[0],l=o[1],b=Object(_.useState)(""),d=Object(X.a)(b,2),u=d[0],j=d[1],f=Object(L.c)(),h=Object(_.useCallback)(Object(V.a)(U.a.mark((function e(){var n,t,r,a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!s){e.next=16;break}return e.next=4,s.getBlockNumber();case 4:n=e.sent,t=[],r=n;case 7:if(!(t.length<10)){e.next=15;break}return e.next=10,s.getBlockWithTransactions(r);case 10:a=e.sent,t.push(a);case 12:r--,e.next=7;break;case 15:c(t);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])}))),[s]),x=Object(_.useCallback)(Object(V.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{s&&a.length&&s.on("block",function(){var e=Object(V.a)(U.a.mark((function e(n){var t;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getBlockWithTransactions(n);case 2:t=e.sent,c((function(e){return e.map((function(e){return e.number})).includes(n)?Object(K.a)(e):[t].concat(Object(K.a)(e.slice(0,-1)))}));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}catch(n){console.log(n)}case 1:case"end":return e.stop()}}),e)}))),[s,a.length]),p=Object(_.useCallback)((function(){try{if(window.ethereum)l(new Y.a.providers.WebSocketProvider("".concat("wss://mainnet.infura.io/ws/v3/").concat("ed948b163f0842cf86b3e1908a05f376"),"mainnet"));else{var e=Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)("span",{children:"Install Metamask"})," ",Object(Z.jsx)("a",{style:{color:"white"},target:"_blank",rel:"noreferrer",href:"https://metamask.io/download.html",children:"here"}),"!"]});f.show(e)}}catch(n){console.log(n)}}),[f]),O=Object(_.useCallback)(Object(V.a)(U.a.mark((function e(){var n,t,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=window,t=n.ethereum,e.next=4,t.request({method:"eth_requestAccounts"});case 4:r=e.sent,j(r[0]),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]);return Object(_.useEffect)((function(){O()}),[O]),Object(_.useEffect)((function(){p()}),[p]),Object(_.useEffect)((function(){h()}),[h]),Object(_.useEffect)((function(){x()}),[x]),Object(Z.jsx)($.Provider,{value:{latestBlocks:a,userAddress:u,connectWallet:O},children:n})},ne=(t(71),t.p+"static/media/banner.be8a9f49.png"),te=function(){return Object(_.useContext)($)},re=t(7),ae=t(8),ce=ae.a.div(r||(r=Object(re.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n"]))),ie=function(e){var n=e.blocks;return Object(Z.jsx)(ce,{children:n.map((function(e){return Object(Z.jsx)(he,{block:e},e.hash)}))})},oe=Object(ae.b)(a||(a=Object(re.a)(["\n        0% {\n          opacity: 0;\n          transform: scale(0.90);\n          transform-origin: top right;\n        }\n\n        100% {\n          opacity: 1;\n          transform: scale(1);\n          transform-origin: center;\n        }\n      "]))),se=ae.a.div(c||(c=Object(re.a)(["\n  display: flex;\n  justify-content: space-between;\n  gap: 1em;\n  border-radius: 10px;\n  transition: 0.5s;\n  margin: 1em 0;\n  animation: "," 1.5s ease 1;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"])),oe),le=ae.a.div(i||(i=Object(re.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  padding: 2em;\n  width: 70vw;\n  border-radius: 10px;\n  transition: 0.5s;\n  background-color: rgba(255, 255, 255, 0.1);\n  animation: "," 0.3s ease 1;\n  gap: 2em;\n\n  @media (max-width: 600px) {\n    padding: 1em;\n  }\n"])),oe),be=ae.a.div(o||(o=Object(re.a)(["\n  padding: 1em;\n  width: 70vw;\n  transition: 0.5s;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  gap: 2em;\n  overflow: hidden;\n"]))),de=ae.a.div(s||(s=Object(re.a)(["\n  display: flex;\n  justify-content: flex-end;\n  height: 3.5em;\n"]))),ue=ae.a.div(l||(l=Object(re.a)(["\n  display: flex;\n  justify-content: center;\n  width: 1.5em;\n  padding: 1em;\n  cursor: pointer;\n  display: flex;\n  border-radius: 10px;\n  transition: 0.5s;\n  background-color: rgba(255, 255, 255, 0.1);\n"]))),je=(ae.a.h3(b||(b=Object(re.a)([""]))),ae.a.div(d||(d=Object(re.a)([""]))),ae.a.div(u||(u=Object(re.a)(["\n  background-color: rgba(255, 255, 255, 0.2);\n  padding: 0.8em;\n  border-radius: 10px;\n  font-size: 0.8em;\n"])))),fe=ae.a.span(j||(j=Object(re.a)(["\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n"]))),he=function(e){var n=e.block,t=Object(_.useState)(!1),r=Object(X.a)(t,2),a=r[0],c=r[1],i=function(e){var n=Object(_.useState)(new Date),t=Object(X.a)(n,2),r=t[0],a=t[1],c=Object(_.useState)(0),i=Object(X.a)(c,2),o=i[0],s=i[1];return Object(_.useEffect)((function(){var e=setInterval((function(){a(new Date)}),1e3);return function(){clearInterval(e)}}),[]),Object(_.useEffect)((function(){var n=new Date(1e3*e),t=Math.round((r.getTime()-n.getTime())/1e3);s(t)}),[o,e,r]),{timeAgo:o,getBlockDate:function(){return String(new Date(1e3*e))}}}(n.timestamp),o=i.timeAgo,s=i.getBlockDate;return Object(Z.jsxs)(se,{children:[a?Object(Z.jsxs)(le,{children:[Object(Z.jsx)(We,{label:"Hash:",text:n.hash}),Object(Z.jsx)(We,{label:"Number:",text:String(n.number)}),Object(Z.jsx)(We,{label:"Miner:",text:n.miner}),Object(Z.jsx)(We,{label:"Timestamp:",text:s()}),Object(Z.jsx)(ke,{transactions:n.transactions})]}):Object(Z.jsxs)(be,{children:[Object(Z.jsx)(fe,{children:n.hash}),Object(Z.jsxs)(je,{children:[" ",o," seconds ago"]})]}),Object(Z.jsx)(de,{children:Object(Z.jsx)(ue,{onClick:function(){return c(!a)},children:a?"\u2191":"\u2193"})})]})},xe=function(e){return Y.a.utils.formatEther(e)},pe=ae.a.div(f||(f=Object(re.a)(["\n  transition: 0.5s;\n"]))),Oe=ae.a.label(h||(h=Object(re.a)(["\n  font-size: 1.1em;\n  font-weight: 500;\n"]))),me=ae.a.p(x||(x=Object(re.a)(["\n  font-size: 0.9em;\n"]))),ge=ae.a.input(p||(p=Object(re.a)([""]))),ve=ae.a.div(O||(O=Object(re.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1em;\n  margin: 3em 0;\n"]))),we=ae.a.div(m||(m=Object(re.a)(["\n  margin: 3em 0;\n"]))),ke=function(e){var n=e.transactions,t=Object(_.useState)(""),r=Object(X.a)(t,2),a=r[0],c=r[1],i=Object(_.useState)(!1),o=Object(X.a)(i,2),s=o[0],l=o[1],b=Object(_.useState)(""),d=Object(X.a)(b,2),u=d[0],j=d[1],f=te(),h=f.userAddress,x=f.connectWallet;Object(_.useEffect)((function(){j(s?h:a)}),[s,a,h]);var p=n.filter((function(e){return 0!==Number(xe(e.value))})),O=u?p.filter((function(e){return e.from===u||e.to===u})):p;return Object(Z.jsxs)(pe,{children:[Object(Z.jsx)(Oe,{children:"Transactions:"}),Object(Z.jsxs)(me,{children:["(only ",n.length," sending ETH)"]}),Object(Z.jsx)(we,{children:Object(Z.jsx)(We,{label:"Filter by address:",text:a,disabled:s,onChange:function(e){var n=e.currentTarget.value;c(n)},readOnly:!1,placeholder:s?"":"Enter an address..."})}),Object(Z.jsx)(ve,{children:h?Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(Oe,{children:"Only from/to connected wallet?"}),Object(Z.jsx)(ge,{type:"checkbox",onClick:function(){h&&l(!s)},defaultChecked:s,disabled:!h})]}):Object(Z.jsx)(_e,{onClick:x,children:"Connect a Metamask Wallet and filter by it!"})}),O.map((function(e){return Object(Z.jsx)(Se,{transaction:e},e.hash)}))]})},ye=ae.a.div(g||(g=Object(re.a)([""]))),Ce=ae.a.p(v||(v=Object(re.a)(["\n  padding: 1em 0;\n  cursor: pointer;\n  border-radius: 10px;\n  transition: 0.5s;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.1);\n  }\n"]))),Se=function(e){var n=e.transaction,t=Object(_.useState)(!1),r=Object(X.a)(t,2),a=r[0],c=r[1],i=function(){return c(!a)};return Object(Z.jsxs)(ye,{children:[Object(Z.jsx)(Ce,{onClick:i,children:n.hash}),Object(Z.jsx)(Me,{isOpen:a,onClose:i,transaction:n})]})},Te=t.p+"static/media/close.0c6296a1.png",Ee=Object(ae.b)(w||(w=Object(re.a)(["\n        0% {\n          opacity: 0;\n          transform: scale(0.90);\n        }\n        100% {\n          opacity: 1;\n          transform: scale(1);\n        }\n      "]))),Be=ae.a.div(k||(k=Object(re.a)(["\n  background: rgba(0, 0, 0, 0.86);\n  position: fixed;\n  bottom: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  width: 100vw;\n  min-height: 100vh;\n  z-index: 90;\n  display: ",";\n  align-items: center;\n  justify-content: center;\n"])),(function(e){return e.isOpen?"flex":"none"})),Fe=ae.a.div(y||(y=Object(re.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: #282c34;\n  color: white;\n  border-radius: 10px;\n  width: 80%;\n  max-width: 500px;\n  padding: 1em 1.4em;\n  animation: "," 0.3s ease 1;\n"])),Ee),ze=ae.a.img(C||(C=Object(re.a)(["\n  align-self: flex-end;\n  cursor: pointer;\n  transition: 0.3s;\n  width: 3.5em;\n\n  &:hover {\n    transform: scale(1.2);\n  }\n"]))),De=ae.a.div(S||(S=Object(re.a)(["\n  padding: 1em;\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n"]))),Me=function(e){var n=e.isOpen,t=e.onClose,r=e.transaction;return Object(Z.jsx)(Be,{isOpen:n,children:Object(Z.jsxs)(Fe,{children:[Object(Z.jsx)(ze,{src:Te,onClick:t}),Object(Z.jsxs)(De,{children:[Object(Z.jsx)(We,{label:"Hash:",text:r.hash}),Object(Z.jsx)(We,{label:"Block Number:",text:String(r.blockNumber)}),Object(Z.jsx)(We,{label:"From:",text:r.from}),r.to&&Object(Z.jsxs)(Z.Fragment,{children:[" ",Object(Z.jsx)(We,{label:"To:",text:r.to})]}),Object(Z.jsx)(We,{label:"ETH Sent:",text:xe(r.value)})]})]})})},Ne=t.p+"static/media/copy.0683a556.svg",We=function(e){var n=e.label,t=e.text,r=e.onChange,a=e.readOnly,c=void 0===a||a,i=e.disabled,o=void 0===i||i,s=e.placeholder,l=Object(_.useRef)(null),b=Object(L.c)();return Object(Z.jsxs)(Ae,{children:[Object(Z.jsx)(Re,{htmlFor:n,children:n}),Object(Z.jsxs)(Ie,{disabled:o,children:[Object(Z.jsx)(He,{id:n,readOnly:c,disabled:o,onChange:r,ref:l,value:t,placeholder:s}),Object(Z.jsx)(_e,{onClick:function(){return function(e,n){var t=function(){var n=Object(V.a)(U.a.mark((function n(){return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!("clipboard"in navigator)){n.next=6;break}return n.next=3,navigator.clipboard.writeText(e);case 3:return n.abrupt("return",n.sent);case 6:document.execCommand("copy",!0,e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();try{t(),n("Copied")}catch(r){console.error({error:r}),n("string"===typeof r?r:"There was an error trying to copy")}}(t,b.show)},children:Object(Z.jsx)(Pe,{src:Ne})})]})]})},Ae=ae.a.div(T||(T=Object(re.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 1.4em;\n"]))),Ie=ae.a.div(E||(E=Object(re.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  gap: 1em;\n  border: 1px solid white;\n  border-radius: 10px;\n  padding: 0 1em;\n  background-color: ",";\n"])),(function(e){return e.disabled?"transparent":"rgba(255, 255, 255, 0.1)"})),He=ae.a.input(B||(B=Object(re.a)(["\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  background: transparent;\n  border: none;\n  color: white;\n  width: 80%;\n  height: 3em;\n\n  &:focus {\n    text-decoration: none;\n    outline: none;\n    cursor: auto;\n  }\n"]))),Pe=ae.a.img(F||(F=Object(re.a)(["\n  width: 1em;\n  height: 1em;\n"]))),Re=ae.a.label(z||(z=Object(re.a)(["\n  font-size: 1.1em;\n  font-weight: 500;\n"]))),_e=ae.a.button(D||(D=Object(re.a)(["\n  border-radius: ",";\n  padding: 0.4em;\n  cursor: ",";\n  transition: 0.6s;\n  text-align: center;\n  justify-content: center;\n  border: 1px solid ",";\n  background: ",";\n  color: ",";\n  margin: 1em 0;\n\n  &:hover {\n    background-color: #3ca2c3;\n    color: white;\n    transform: scale(1.01);\n  }\n\n  &:focus {\n    outline: 0;\n  }\n"])),(function(e){var n=e.borderRadius;return null!==n&&void 0!==n?n:"5px"}),(function(e){return e.disabled?"not-allowed":"pointer"}),(function(e){return e.theme.toggleBorder}),(function(e){return e.theme.background}),(function(e){return e.theme.text})),qe=Object(ae.b)(M||(M=Object(re.a)(["\n        0% {\n          transform: rotate(0deg);\n        }\n  \n        50% {\n          transform: rotate(180deg);\n          opacity: 0.6;\n        }\n  \n        100% {\n          transform: rotate(360deg);\n          opacity: 1;\n        }\n      "]))),Je=ae.a.div(N||(N=Object(re.a)(["\n  border: 8x solid lightBlue;\n  border-top: 8px solid rgba(255, 219, 220);\n  border-radius: 50%;\n  width: ",";\n  height: ",";\n  animation: "," 1.5s linear infinite;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])),(function(e){var n=e.inner,t=e.innest;return n?"40px":t?"10px":"65px"}),(function(e){var n=e.inner,t=e.innest;return n?"33px":t?"7px":"60px"}),qe),Le=function(){return Object(Z.jsx)(Je,{children:Object(Z.jsx)(Je,{inner:!0,children:Object(Z.jsx)(Je,{innest:!0})})})},Ge=ae.a.div(W||(W=Object(re.a)(["\n  min-height: 100vh;\n  background-color: #282c34;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  @media (max-width: 600px) {\n    font-size: 0.85rem;\n  }\n"]))),Ke=ae.a.div(A||(A=Object(re.a)(["\n  margin: 3em 0;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  height: 200px;\n"]))),Qe=ae.a.img(I||(I=Object(re.a)(["\n  height: 100%;\n  position: absolute;\n  z-index: 0;\n"]))),Ue=ae.a.h1(H||(H=Object(re.a)(["\n  text-shadow: 1px 1px 5px white;\n  text-align: center;\n  z-index: 1;\n  position: absolute;\n  margin-top: 1.68em;\n  width: 10em;\n  font-size: 1.8em;\n"]))),Ve=ae.a.div(P||(P=Object(re.a)(["\n  margin-top: 20em;\n"]))),Xe=function(){var e=te().latestBlocks;return Object(Z.jsxs)(Ge,{children:[Object(Z.jsxs)(Ke,{children:[Object(Z.jsx)(Qe,{src:ne}),Object(Z.jsx)(Ue,{children:"Eth Explorer"})]}),Object(Z.jsx)(Ve,{children:e.length?Object(Z.jsx)(ie,{blocks:e}):Object(Z.jsx)(Le,{})})]})},Ye=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,77)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),r(e),a(e),c(e),i(e)}))},Ze={timeout:1e4,position:L.b.BOTTOM_CENTER};Object(J.render)(Object(Z.jsx)(q.a.StrictMode,{children:Object(Z.jsx)(L.a,Object(R.a)(Object(R.a)({template:G.a},Ze),{},{children:Object(Z.jsx)(ee,{children:Object(Z.jsx)(Xe,{})})}))}),document.getElementById("root")),Ye()}},[[73,1,2]]]);
//# sourceMappingURL=main.651c2ec4.chunk.js.map