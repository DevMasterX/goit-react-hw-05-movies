"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[257],{9257:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,i,o,s,c=t(9439),u=t(2791),l=t(7689),p=t(1087),d=t(5975),f=t(748),h=t(168),x=t(5706),v=x.Z.div(r||(r=(0,h.Z)(["\n  display: flex;\n  margin: 24px;\n  gap: 24px;\n"]))),g=x.Z.ul(a||(a=(0,h.Z)(["\n  display: inline-flex;\n  gap: 12px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n"]))),m=x.Z.ul(i||(i=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n"]))),j=(0,x.Z)(p.rU)(o||(o=(0,h.Z)(["\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 18px;\n  color: #191d1e;\n\n  &:hover {\n    color: tomato;\n  }\n"]))),w=x.Z.button(s||(s=(0,h.Z)(["\n  padding: 8px 8px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 3px solid #191d1e;\n  color: #191d1e;\n  font-weight: 600;\n  font-size: 20px;\n  border-radius: 4px 8px;\n\n  &:hover {\n    color: tomato;\n    border: 3px solid tomato;\n  }\n"]))),Z=t(184),y=function(){var n,e,t=(0,l.UO)().movieId,r=(0,u.useState)(null),a=(0,c.Z)(r,2),i=a[0],o=a[1],s=(0,u.useState)(!1),h=(0,c.Z)(s,2),x=h[0],y=h[1],k=(0,l.TH)(),b=(0,u.useRef)(null!==(n=null===(e=k.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");if((0,u.useEffect)((function(){y(!0),(0,d.Y5)(t).then((function(n){o(n)})).catch((function(n){console.log(n)})).finally((function(){y(!1)}))}),[t]),i){var _=i||{},U=_.title,S=_.release_date,C=_.popularity,R=_.overview,z=_.genres,A=_.poster_path,G=_.original_title;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(p.rU,{to:b.current,children:(0,Z.jsx)(w,{children:"\ud83e\udc44 Go back"})}),x&&(0,Z.jsx)(f.Z,{}),i&&(0,Z.jsxs)(v,{children:[(0,Z.jsx)("img",{width:"300px",src:A?"https://image.tmdb.org/t/p/w500".concat(A):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:G}),(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("h1",{children:[U," (",S.slice(0,4),")"]}),(0,Z.jsxs)("p",{children:["User score: ",C]}),(0,Z.jsx)("h2",{children:"Overview"}),(0,Z.jsx)("p",{children:R}),(0,Z.jsx)("h2",{children:"Genres"}),(0,Z.jsx)(g,{children:z.map((function(n){return(0,Z.jsx)("li",{children:n.name},n.id)}))})]})]}),(0,Z.jsx)("hr",{}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)("h3",{children:"Additional information"}),(0,Z.jsxs)(m,{children:[(0,Z.jsx)("li",{children:(0,Z.jsx)(j,{to:"cast",children:"Cast"})}),(0,Z.jsx)("li",{children:(0,Z.jsx)(j,{to:"reviews",children:"Reviews"})})]}),(0,Z.jsx)("hr",{}),(0,Z.jsx)(l.j3,{})]})]})}}},5975:function(n,e,t){t.d(e,{Bt:function(){return d},Ml:function(){return u},Tg:function(){return c},Y5:function(){return l},wL:function(){return p}});var r=t(5861),a=t(4687),i=t.n(a),o=t(1243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="992758a4802a699e8df27d4d6efc34fb",c=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(s));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=257.64358025.chunk.js.map