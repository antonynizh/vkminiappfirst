(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(e,t,a){e.exports=a(237)},237:function(e,t,a){"use strict";a.r(t);a(155),a(205);var n=a(0),c=a.n(n),l=a(28),r=a.n(l),i=a(24),o=a.n(i),s=a(86),m=a(87),u=a(93),d=a(88),h=a(94),E=a(9),f=(a(236),function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(E.h,{id:t},c.a.createElement(E.i,null,"Homepage"),n&&c.a.createElement(E.d,{title:"User Data Fetched with VK Connect"},c.a.createElement(E.g,{before:n.photo_200?c.a.createElement(E.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(E.d,{title:"About"},c.a.createElement(E.c,null,c.a.createElement(E.b,{size:"xl",level:"1",onClick:a,"data-to":"about"},"About"))),c.a.createElement(E.d,{title:"Persik"},c.a.createElement(E.c,null,c.a.createElement(E.b,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please!!!11"))))}),p=a(43),b=a.n(p),k=(a(85),a(44)),g=a.n(k),v=a(45),P=a.n(v),w=Object(E.k)(),j=function(e){return c.a.createElement(E.h,{id:e.id},c.a.createElement(E.i,{left:c.a.createElement(E.e,{onClick:e.go,"data-to":"home"},w===E.f?c.a.createElement(g.a,null):c.a.createElement(P.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:b.a,alt:"Persik The Cat"}))},y=Object(E.k)(),C=function(e){return c.a.createElement(E.h,{id:e.id},c.a.createElement(E.i,{left:c.a.createElement(E.e,{onClick:e.go,"data-to":"home"},y===E.f?c.a.createElement(g.a,null):c.a.createElement(P.a,null))},"About"),c.a.createElement("img",{className:"Persik",src:b.a,alt:"Persik The Cat"}))},U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type)}}),o.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return c.a.createElement(E.j,{activePanel:this.state.activePanel},c.a.createElement(f,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go}),c.a.createElement(C,{id:"about",go:this.go}),c.a.createElement(j,{id:"persik",go:this.go}))}}]),t}(c.a.Component);o.a.send("VKWebAppInit",{}),r.a.render(c.a.createElement(U,null),document.getElementById("root"))},43:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},85:function(e,t,a){}},[[154,1,2]]]);
//# sourceMappingURL=main.e598aa4c.chunk.js.map