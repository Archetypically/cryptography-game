(this["webpackJsonpcrytopgraphyga.me"]=this["webpackJsonpcrytopgraphyga.me"]||[]).push([[0],{111:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(36),i=a.n(n),r=(a(111),a(56)),s=a(10),o=a(138),j=a(144),l=a(141),d=a(84),h=a(53),b=a(2);function u(){return Object(b.jsxs)(j.a,{inverted:!0,vertical:!0,as:"footer",children:["Made with ",Object(b.jsx)("a",{children:Object(b.jsx)(h.a,{name:"heart"})}),"by"," ",Object(b.jsx)("a",{href:"https://github.com/Archetypically",children:"@Archetypically"}),"."]})}var O=a(145),x=a(147);function p(){var e=Object(s.h)();return Object(b.jsxs)(o.a,{as:"nav",children:[Object(b.jsx)(O.a,{inverted:!0,as:"a",href:"#/",icon:"code",content:"cryptography",subheader:"ga.me"}),Object(b.jsxs)(x.a,{borderless:!0,compact:!0,inverted:!0,children:[Object(b.jsx)(x.a.Item,{active:"/"===e.pathname,href:"#/",children:"Home"}),Object(b.jsx)(x.a.Item,{href:"https://github.com/Archetypically/cryptography-game",target:"_blank",children:Object(b.jsx)(h.a,{name:"github"})})]})]})}var m=a(143),g=a(77),f=a.n(g),y=["All data is stored locally in your browser for this session only.","None of your data is ever transmitted elsewhere.","This project was created for educational purposes and is not used to profit in any way."];function v(){return Object(b.jsxs)(o.a,{className:"content",children:[Object(b.jsxs)(O.a,{inverted:!0,as:"h1",children:["cryp\xb7tog\xb7ra\xb7phy ",Object(b.jsx)("code",{children:"(/krip\u02c8t\xe4\u0261r\u0259f\u0113/)"}),Object(b.jsx)(O.a.Subheader,{children:"the practice and study of techniques for secure communication"})]}),Object(b.jsxs)("p",{children:["From ",Object(b.jsx)("a",{href:"https://en.wikipedia.org/wiki/Caesar_cipher",target:"__blank",children:"Caesarian ciphers"})," to ",Object(b.jsx)("a",{href:"https://en.wikipedia.org/wiki/X.509",target:"__blank",children:"`X.509` public key certificates"}),", ",Object(b.jsx)("u",{children:"cryptography"})," `permeates our everyday lives. Haven't you ever wondered which cryptography you are? Find out now!`"]}),Object(b.jsx)(l.a,{floating:!0,icon:"info",color:"black",header:"Disclaimer",list:y}),Object(b.jsxs)(m.a.Group,{children:[Object(b.jsxs)(m.a,{icon:!0,labelPosition:"left",size:"huge",color:"blue",href:"#/quiz",children:["Take the quiz!",Object(b.jsx)(h.a,{name:"right arrow"})]}),null===f.a.get("lastResultName")?null:Object(b.jsxs)(m.a,{icon:!0,labelPosition:"right",size:"huge",href:"#/result/"+f.a.get("lastResultName"),color:"purple",children:["See your previous result: ",f.a.get("lastResultName"),Object(b.jsx)(h.a,{name:"history"})]})]})]})}var w=a(39),k=a(148),A=a(142);function N(){var e=Object(c.useState)(0),t=Object(w.a)(e,2),a=(t[0],t[1],Object(c.useState)(0)),n=Object(w.a)(a,2),i=n[0],r=n[1],s=Object(c.useState)(!1),l=Object(w.a)(s,2),d=(l[0],l[1],Object(c.useState)(!1)),h=Object(w.a)(d,2),u=h[0],O=(h[1],[{question:"cookie?"},{question:"cookie2?"}]);return Object(b.jsxs)(o.a,{className:"content",children:[Object(b.jsxs)(j.a.Group,{children:[Object(b.jsx)(j.a,{raised:!0,size:"massive",children:O[i].question}),Object(b.jsx)(j.a,{raised:!0,children:"content"}),Object(b.jsx)(j.a,{raised:!0,attached:"top",children:Object(b.jsx)(k.a,{defaultActivePage:1,firstItem:null,lastItem:null,pointing:!0,secondary:!0,totalPages:O.length,onPageChange:function(e,t){r(t.activePage-1)}})})]}),Object(b.jsxs)(A.a.Group,{size:"mini",widths:2,children:[Object(b.jsx)(A.a,{active:!0,icon:"question circle",title:"Questions",description:"Take the quiz"}),Object(b.jsx)(A.a,{disabled:!u,icon:"info",title:"Review",description:"Review your answers"})]})]})}var S=a(140),_=a(97),C=a(71),z={aes:{img:"https://cdn.proprivacy.com/storage/images/bestvpn/2019/02/shutterstock-344190413-featured_image-social.png",displayName:"Advanced Encryption Standard",secondaryNames:["AES"],details:["test1","test2","test3"],links:[{icon:"wikipedia w",href:"https://en.wikipedia.org/wiki/Advanced_Encryption_Standard",name:"Wikipedia",detail:"Advanced_Encryption_Standard"}]}};function q(){var e=Object(c.useState)("loading"),t=Object(w.a)(e,2),a=t[0],n=t[1],i=Object(s.h)();return Object(c.useEffect)((function(){var e=i.pathname.replace("/result/","");n(e in z?e:null)})),Object(b.jsx)(o.a,{children:null===a&&Object(b.jsx)(s.a,{to:"/not-found"})||"loading"===a&&Object(b.jsx)(LoadingCard,{})||Object(b.jsxs)(S.a,{fluid:!0,children:[Object(b.jsxs)(S.a.Content,{children:[Object(b.jsxs)(S.a.Header,{children:["You are:",Object(b.jsx)("h1",{style:{fontSize:"4rem",fontFamily:"'Open Sans', Lato"},children:z[a].displayName})]}),Object(b.jsxs)(S.a.Meta,{children:["Also known as: ",z[a].secondaryNames.join(", ")]}),Object(b.jsx)(S.a.Description,{children:Object(b.jsxs)(o.a,{text:!0,textAlign:"left",children:[Object(b.jsx)(_.a,{bordered:!0,floated:"left",src:z[a].img,height:"202"}),z[a].details.map((function(e,t){return Object(b.jsx)("div",{children:e})}))]})})]}),Object(b.jsxs)(S.a.Content,{extra:!0,children:["Learn more:",Object(b.jsx)(C.a.Group,{children:z[a].links.map((function(e,t){return Object(b.jsxs)(C.a,{color:e.color,as:"a",href:e.href,target:"__blank",children:[Object(b.jsx)(h.a,{name:e.icon}),e.name,Object(b.jsx)(C.a.Detail,{children:e.detail})]},e.name)}))})]})]})})}function P(e){var t=Object(s.g)();return Object(b.jsx)(o.a,{children:Object(b.jsxs)(S.a,{fluid:!0,color:"red",children:[Object(b.jsxs)(S.a.Content,{children:[Object(b.jsx)(S.a.Header,{children:Object(b.jsx)("h1",{style:{fontSize:"20rem"},children:"404"})}),Object(b.jsx)(S.a.Meta,{children:"Not Found"}),Object(b.jsx)(S.a.Description,{children:"The page you're looking for can't be found."})]}),Object(b.jsx)(S.a.Content,{extra:!0,children:Object(b.jsxs)(m.a,{fluid:!0,animated:!0,basic:!0,color:"red",onClick:t.goBack,children:[Object(b.jsx)(m.a.Content,{visible:!0,children:"Go back"}),Object(b.jsx)(m.a.Content,{hidden:!0,children:Object(b.jsx)(h.a,{name:"backward"})})]})})]})})}a(122),a(123);function E(){return Object(b.jsxs)(o.a,{className:"App",children:[Object(b.jsx)(d.BrowserView,{children:Object(b.jsx)(j.a,{inverted:!0,vertical:!0,textAlign:"center",children:Object(b.jsxs)(r.a,{basename:"/",hashType:"slash",children:[Object(b.jsx)(p,{}),Object(b.jsx)("div",{children:Object(b.jsxs)(s.d,{children:[Object(b.jsx)(s.b,{exact:!0,path:"/",children:Object(b.jsx)(v,{})}),Object(b.jsx)(s.b,{path:"/quiz",children:Object(b.jsx)(N,{})}),Object(b.jsx)(s.b,{path:"/result/*",children:Object(b.jsx)(q,{})}),Object(b.jsx)(s.b,{exact:!0,path:"/not-found",children:Object(b.jsx)(P,{})}),Object(b.jsx)(s.a,{to:"/not-found"})]})}),Object(b.jsx)(u,{})]})})}),Object(b.jsx)(d.MobileView,{children:Object(b.jsx)(o.a,{className:"App",children:Object(b.jsxs)(j.a,{inverted:!0,vertical:!0,textAlign:"center",children:[Object(b.jsx)(l.a,{negative:!0,floating:!0,icon:"warning",content:"Not supported on mobile. Please use a desktop browser to access this site."}),Object(b.jsx)(u,{})]})})})]})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(b.jsx)(E,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[124,1,2]]]);
//# sourceMappingURL=main.daeba337.chunk.js.map