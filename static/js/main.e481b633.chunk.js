(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(e,t,a){e.exports=a(237)},236:function(e,t,a){},237:function(e,t,a){"use strict";a.r(t);a(154),a(204);var n=a(0),c=a.n(n),l=a(28),i=a.n(l),r=a(24),o=a.n(r),s=a(84),u=a(85),m=a(92),d=a(86),h=a(93),p=a(9),f=(a(235),function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(p.h,{id:t},c.a.createElement(p.i,null,"Homepage"),n&&c.a.createElement(p.d,{title:"User Data Fetched with VK Connect"},c.a.createElement(p.g,{before:n.photo_200?c.a.createElement(p.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(p.d,{title:"About"},c.a.createElement(p.c,null,c.a.createElement(p.b,{size:"xl",level:"2",onClick:a,"data-to":"about"},"Show me the Persik, please"))),c.a.createElement(p.d,{title:"Persik"},c.a.createElement(p.c,null,c.a.createElement(p.b,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please!!!11"))))}),E=a(91),b=a.n(E),k=(a(236),a(43)),g=a.n(k),v=a(44),w=a.n(v),P=Object(p.k)(),j=function(e){return c.a.createElement(p.h,{id:e.id},c.a.createElement(p.i,{left:c.a.createElement(p.e,{onClick:e.go,"data-to":"home"},P===p.f?c.a.createElement(g.a,null):c.a.createElement(w.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:b.a,alt:"Persik The Cat"}))},y=(Object(p.k)(),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type)}}),o.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return c.a.createElement(p.j,{activePanel:this.state.activePanel},c.a.createElement(f,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go}),c.a.createElement(j,{id:"persik",go:this.go}))}}]),t}(c.a.Component));o.a.send("VKWebAppInit",{}),i.a.render(c.a.createElement(y,null),document.getElementById("root"))},91:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"}},[[153,1,2]]]);
//# sourceMappingURL=main.e481b633.chunk.js.map