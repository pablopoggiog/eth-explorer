(this["webpackJsonpeth-explorer"]=this["webpackJsonpeth-explorer"]||[]).push([[0],{60:function(n,e){},71:function(n,e,t){},73:function(n,e,t){"use strict";t.r(e);var r,a,c,i,o,s,l,b,d,u,j,f,x,p,h,O,m,g,v,w,k,y,C,S,T,E,B,z,F,D,N,A,I,M,H,P,R,W=t(36),_=t(3),q=t.n(_),J=t(17),L=t(18),G=t(42),K=t(20),Q=t(2),U=t.n(Q),V=t(19),X=t(13),Y=t(29),Z=t(6),$=Object(_.createContext)({}),nn=function(n){var e=n.children,t=Object(_.useState)([]),r=Object(X.a)(t,2),a=r[0],c=r[1],i=Object(_.useState)(null),o=Object(X.a)(i,2),s=o[0],l=o[1],b=Object(_.useState)(""),d=Object(X.a)(b,2),u=d[0],j=d[1],f=Object(L.c)(),x=Object(_.useCallback)(Object(V.a)(U.a.mark((function n(){var e,t,r,a;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!s){n.next=16;break}return n.next=4,s.getBlockNumber();case 4:e=n.sent,t=[],r=e;case 7:if(!(t.length<10)){n.next=15;break}return n.next=10,s.getBlockWithTransactions(r);case 10:a=n.sent,t.push(a);case 12:r--,n.next=7;break;case 15:c(t);case 16:n.next=21;break;case 18:n.prev=18,n.t0=n.catch(0),console.log(n.t0);case 21:case"end":return n.stop()}}),n,null,[[0,18]])}))),[s]),p=Object(_.useCallback)(Object(V.a)(U.a.mark((function n(){return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{s&&a.length&&s.on("block",function(){var n=Object(V.a)(U.a.mark((function n(e){var t;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.getBlockWithTransactions(e);case 2:t=n.sent,c((function(n){return n.map((function(n){return n.number})).includes(e)?Object(K.a)(n):[t].concat(Object(K.a)(n.slice(0,-1)))}));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}catch(e){console.log(e)}case 1:case"end":return n.stop()}}),n)}))),[s,a.length]),h=Object(_.useCallback)((function(){try{if(window.ethereum)l(new Y.a.providers.WebSocketProvider("".concat("wss://mainnet.infura.io/ws/v3/").concat("ed948b163f0842cf86b3e1908a05f376"),"mainnet"));else{var n=Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)("span",{children:"Install Metamask"})," ",Object(Z.jsx)("a",{style:{color:"white"},target:"_blank",rel:"noreferrer",href:"https://metamask.io/download.html",children:"here"}),"!"]});f.show(n)}}catch(e){console.log(e)}}),[f]),O=Object(_.useCallback)(Object(V.a)(U.a.mark((function n(){var e,t,r;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=window,t=e.ethereum,n.next=4,t.request({method:"eth_requestAccounts"});case 4:r=n.sent,j(r[0]),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])}))),[]);return Object(_.useEffect)((function(){O()}),[O]),Object(_.useEffect)((function(){h()}),[h]),Object(_.useEffect)((function(){x()}),[x]),Object(_.useEffect)((function(){p()}),[p]),Object(Z.jsx)($.Provider,{value:{latestBlocks:a,userAddress:u},children:e})},en=(t(71),t.p+"static/media/banner.be8a9f49.png"),tn=function(){return Object(_.useContext)($)},rn=t(7),an=t(8),cn=an.a.div(r||(r=Object(rn.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n"]))),on=function(n){var e=n.blocks;return Object(Z.jsx)(cn,{children:e.map((function(n){return Object(Z.jsx)(pn,{block:n},n.hash)}))})},sn=Object(an.b)(a||(a=Object(rn.a)(["\n        0% {\n          opacity: 0;\n          transform: scale(0.90);\n          transform-origin: top right;\n        }\n\n        100% {\n          opacity: 1;\n          transform: scale(1);\n          transform-origin: center;\n        }\n      "]))),ln=an.a.div(c||(c=Object(rn.a)(["\n  display: flex;\n  justify-content: space-between;\n  gap: 1em;\n  border-radius: 10px;\n  transition: 0.5s;\n  margin: 1em 0;\n  animation: "," 1.5s ease 1;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"])),sn),bn=an.a.div(i||(i=Object(rn.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  padding: 2em;\n  width: 70vw;\n  border-radius: 10px;\n  transition: 0.5s;\n  background-color: rgba(255, 255, 255, 0.1);\n  animation: "," 0.3s ease 1;\n  gap: 2em;\n\n  @media (max-width: 600px) {\n    padding: 1em;\n  }\n"])),sn),dn=an.a.div(o||(o=Object(rn.a)(["\n  padding: 1em;\n  width: 70vw;\n  transition: 0.5s;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  gap: 2em;\n  overflow: hidden;\n"]))),un=an.a.div(s||(s=Object(rn.a)(["\n  display: flex;\n  justify-content: flex-end;\n  height: 3.5em;\n"]))),jn=an.a.div(l||(l=Object(rn.a)(["\n  display: flex;\n  justify-content: center;\n  width: 1.5em;\n  padding: 1em;\n  cursor: pointer;\n  display: flex;\n  border-radius: 10px;\n  transition: 0.5s;\n  background-color: rgba(255, 255, 255, 0.1);\n"]))),fn=(an.a.h3(b||(b=Object(rn.a)([""]))),an.a.div(d||(d=Object(rn.a)([""]))),an.a.div(u||(u=Object(rn.a)(["\n  background-color: rgba(255, 255, 255, 0.2);\n  padding: 0.8em;\n  border-radius: 10px;\n  font-size: 0.8em;\n"])))),xn=an.a.span(j||(j=Object(rn.a)(["\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n"]))),pn=function(n){var e=n.block,t=Object(_.useState)(!1),r=Object(X.a)(t,2),a=r[0],c=r[1],i=function(n){var e=Object(_.useState)(new Date),t=Object(X.a)(e,2),r=t[0],a=t[1],c=Object(_.useState)(0),i=Object(X.a)(c,2),o=i[0],s=i[1];return Object(_.useEffect)((function(){var n=setInterval((function(){a(new Date)}),1e3);return function(){clearInterval(n)}}),[]),Object(_.useEffect)((function(){var e=new Date(1e3*n),t=Math.round((r.getTime()-e.getTime())/1e3);s(t)}),[o,n,r]),{timeAgo:o,getBlockDate:function(){return String(new Date(1e3*n))}}}(e.timestamp),o=i.timeAgo,s=i.getBlockDate;return Object(Z.jsxs)(ln,{children:[a?Object(Z.jsxs)(bn,{children:[Object(Z.jsx)(Mn,{label:"Hash:",text:e.hash}),Object(Z.jsx)(Mn,{label:"Number:",text:String(e.number)}),Object(Z.jsx)(Mn,{label:"Miner:",text:e.miner}),Object(Z.jsx)(Mn,{label:"Timestamp:",text:s()}),Object(Z.jsx)(yn,{transactions:e.transactions})]}):Object(Z.jsxs)(dn,{children:[Object(Z.jsx)(xn,{children:e.hash}),Object(Z.jsxs)(fn,{children:[" ",o," seconds ago"]})]}),Object(Z.jsx)(un,{children:Object(Z.jsx)(jn,{onClick:function(){return c(!a)},children:a?"\u2191":"\u2193"})})]})},hn=function(n){return Y.a.utils.formatEther(n)},On=an.a.div(f||(f=Object(rn.a)(["\n  transition: 0.5s;\n"]))),mn=an.a.label(x||(x=Object(rn.a)(["\n  font-size: 1.1em;\n  font-weight: 500;\n"]))),gn=an.a.p(p||(p=Object(rn.a)(["\n  font-size: 0.9em;\n"]))),vn=an.a.input(h||(h=Object(rn.a)([""]))),wn=an.a.div(O||(O=Object(rn.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1em;\n  margin: 3em 0;\n"]))),kn=an.a.div(m||(m=Object(rn.a)(["\n  margin: 3em 0;\n"]))),yn=function(n){var e=n.transactions,t=Object(_.useState)(""),r=Object(X.a)(t,2),a=r[0],c=r[1],i=Object(_.useState)(!1),o=Object(X.a)(i,2),s=o[0],l=o[1],b=Object(_.useState)(""),d=Object(X.a)(b,2),u=d[0],j=d[1],f=tn().userAddress;Object(_.useEffect)((function(){j(s?f:a)}),[s,a,f]);var x=e.filter((function(n){return 0!==Number(hn(n.value))})),p=u?x.filter((function(n){return n.from===u||n.to===u})):x;return Object(Z.jsxs)(On,{children:[Object(Z.jsx)(mn,{children:"Transactions:"}),Object(Z.jsxs)(gn,{children:["(only ",e.length," sending ETH)"]}),Object(Z.jsx)(kn,{children:Object(Z.jsx)(Mn,{label:"Filter by address:",text:a,disabled:s,onChange:function(n){var e=n.currentTarget.value;c(e)},readOnly:!1})}),Object(Z.jsxs)(wn,{children:[Object(Z.jsx)(mn,{children:"Only from/to connected wallet?"}),Object(Z.jsx)(vn,{type:"checkbox",onClick:function(){return l(!s)},defaultChecked:s})]}),p.map((function(n){return Object(Z.jsx)(Tn,{transaction:n},n.hash)}))]})},Cn=an.a.div(g||(g=Object(rn.a)([""]))),Sn=an.a.p(v||(v=Object(rn.a)(["\n  padding: 1em 0;\n  cursor: pointer;\n  border-radius: 10px;\n  transition: 0.5s;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.1);\n  }\n"]))),Tn=function(n){var e=n.transaction,t=Object(_.useState)(!1),r=Object(X.a)(t,2),a=r[0],c=r[1],i=function(){return c(!a)};return Object(Z.jsxs)(Cn,{children:[Object(Z.jsx)(Sn,{onClick:i,children:e.hash}),Object(Z.jsx)(An,{isOpen:a,onClose:i,transaction:e})]})},En=t.p+"static/media/close.0c6296a1.png",Bn=Object(an.b)(w||(w=Object(rn.a)(["\n        0% {\n          opacity: 0;\n          transform: scale(0.90);\n        }\n        100% {\n          opacity: 1;\n          transform: scale(1);\n        }\n      "]))),zn=an.a.div(k||(k=Object(rn.a)(["\n  background: rgba(0, 0, 0, 0.86);\n  position: fixed;\n  bottom: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  width: 100vw;\n  min-height: 100vh;\n  z-index: 90;\n  display: ",";\n  align-items: center;\n  justify-content: center;\n"])),(function(n){return n.isOpen?"flex":"none"})),Fn=an.a.div(y||(y=Object(rn.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: #282c34;\n  color: white;\n  border-radius: 10px;\n  width: 80%;\n  max-width: 500px;\n  padding: 1em 1.4em;\n  animation: "," 0.3s ease 1;\n"])),Bn),Dn=an.a.img(C||(C=Object(rn.a)(["\n  align-self: flex-end;\n  cursor: pointer;\n  transition: 0.3s;\n  width: 3.5em;\n\n  &:hover {\n    transform: scale(1.2);\n  }\n"]))),Nn=an.a.div(S||(S=Object(rn.a)(["\n  padding: 1em;\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n"]))),An=function(n){var e=n.isOpen,t=n.onClose,r=n.transaction;return Object(Z.jsx)(zn,{isOpen:e,children:Object(Z.jsxs)(Fn,{children:[Object(Z.jsx)(Dn,{src:En,onClick:t}),Object(Z.jsxs)(Nn,{children:[Object(Z.jsx)(Mn,{label:"Hash:",text:r.hash}),Object(Z.jsx)(Mn,{label:"Block Number:",text:String(r.blockNumber)}),Object(Z.jsx)(Mn,{label:"From:",text:r.from}),r.to&&Object(Z.jsxs)(Z.Fragment,{children:[" ",Object(Z.jsx)(Mn,{label:"To:",text:r.to})]}),Object(Z.jsx)(Mn,{label:"ETH Sent:",text:hn(r.value)})]})]})})},In=t.p+"static/media/copy.0683a556.svg",Mn=function(n){var e=n.label,t=n.text,r=n.onChange,a=n.readOnly,c=void 0===a||a,i=n.disabled,o=void 0===i||i,s=Object(_.useRef)(null),l=Object(L.c)();return Object(Z.jsxs)(Hn,{children:[Object(Z.jsx)(_n,{htmlFor:e,children:e}),Object(Z.jsxs)(Pn,{disabled:o,children:[Object(Z.jsx)(Rn,{id:e,readOnly:c,disabled:o,onChange:r,ref:s,value:t}),Object(Z.jsx)(qn,{onClick:function(){return function(n,e){var t=function(){var e=Object(V.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("clipboard"in navigator)){e.next=6;break}return e.next=3,navigator.clipboard.writeText(n);case 3:return e.abrupt("return",e.sent);case 6:document.execCommand("copy",!0,n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{t(),e("Copied")}catch(r){console.error({error:r}),e("string"===typeof r?r:"There was an error trying to copy")}}(t,l.show)},children:Object(Z.jsx)(Wn,{src:In})})]})]})},Hn=an.a.div(T||(T=Object(rn.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 1.4em;\n"]))),Pn=an.a.div(E||(E=Object(rn.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  gap: 1em;\n  border: 1px solid white;\n  border-radius: 10px;\n  padding: 0 1em;\n  background-color: ",";\n"])),(function(n){return n.disabled?"transparent":"rgba(255, 255, 255, 0.1)"})),Rn=an.a.input(B||(B=Object(rn.a)(["\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  background: transparent;\n  border: none;\n  color: white;\n  width: 80%;\n  height: 3em;\n\n  &:focus {\n    text-decoration: none;\n    outline: none;\n    cursor: auto;\n  }\n"]))),Wn=an.a.img(z||(z=Object(rn.a)(["\n  width: 1em;\n  height: 1em;\n"]))),_n=an.a.label(F||(F=Object(rn.a)(["\n  font-size: 1.1em;\n  font-weight: 500;\n"]))),qn=an.a.button(D||(D=Object(rn.a)(["\n  border-radius: ",";\n  padding: 0.4em;\n  cursor: ",";\n  transition: 0.6s;\n  text-align: center;\n  justify-content: center;\n  border: 1px solid ",";\n  background: ",";\n  color: ",";\n  margin: 1em 0;\n\n  &:hover {\n    background-color: #3ca2c3;\n    color: white;\n    transform: scale(1.01);\n  }\n\n  &:focus {\n    outline: 0;\n  }\n"])),(function(n){var e=n.borderRadius;return null!==e&&void 0!==e?e:"5px"}),(function(n){return n.disabled?"not-allowed":"pointer"}),(function(n){return n.theme.toggleBorder}),(function(n){return n.theme.background}),(function(n){return n.theme.text})),Jn=Object(an.b)(N||(N=Object(rn.a)(["\n        0% {\n          transform: rotate(0deg);\n        }\n  \n        50% {\n          transform: rotate(180deg);\n          opacity: 0.6;\n        }\n  \n        100% {\n          transform: rotate(360deg);\n          opacity: 1;\n        }\n      "]))),Ln=an.a.div(A||(A=Object(rn.a)(["\n  border: 8x solid lightBlue;\n  border-top: 8px solid rgba(255, 219, 220);\n  border-radius: 50%;\n  width: ",";\n  height: ",";\n  animation: "," 1.5s linear infinite;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])),(function(n){var e=n.inner,t=n.innest;return e?"40px":t?"10px":"65px"}),(function(n){var e=n.inner,t=n.innest;return e?"33px":t?"7px":"60px"}),Jn),Gn=function(){return Object(Z.jsx)(Ln,{children:Object(Z.jsx)(Ln,{inner:!0,children:Object(Z.jsx)(Ln,{innest:!0})})})},Kn=an.a.div(I||(I=Object(rn.a)(["\n  min-height: 100vh;\n  background-color: #282c34;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  @media (max-width: 600px) {\n    font-size: 0.85rem;\n  }\n"]))),Qn=an.a.div(M||(M=Object(rn.a)(["\n  margin: 3em 0;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  height: 200px;\n"]))),Un=an.a.img(H||(H=Object(rn.a)(["\n  height: 100%;\n  position: absolute;\n  z-index: 0;\n"]))),Vn=an.a.h1(P||(P=Object(rn.a)(["\n  text-shadow: 1px 1px 5px white;\n  text-align: center;\n  z-index: 1;\n  position: absolute;\n  margin-top: 1.68em;\n  width: 10em;\n  font-size: 1.8em;\n"]))),Xn=an.a.div(R||(R=Object(rn.a)(["\n  margin-top: 20em;\n"]))),Yn=function(){var n=tn().latestBlocks;return Object(Z.jsxs)(Kn,{children:[Object(Z.jsxs)(Qn,{children:[Object(Z.jsx)(Un,{src:en}),Object(Z.jsx)(Vn,{children:"Eth Explorer"})]}),Object(Z.jsx)(Xn,{children:n.length?Object(Z.jsx)(on,{blocks:n}):Object(Z.jsx)(Gn,{})})]})},Zn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,77)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),r(n),a(n),c(n),i(n)}))},$n={timeout:1e4,position:L.b.BOTTOM_CENTER};Object(J.render)(Object(Z.jsx)(q.a.StrictMode,{children:Object(Z.jsx)(L.a,Object(W.a)(Object(W.a)({template:G.a},$n),{},{children:Object(Z.jsx)(nn,{children:Object(Z.jsx)(Yn,{})})}))}),document.getElementById("root")),Zn()}},[[73,1,2]]]);
//# sourceMappingURL=main.ec1f20e0.chunk.js.map