"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[602],{183:function(n,e,t){t.d(e,{Z:function(){return h}});var r,a,o,u=t(7689),i=t(168),c=t(5706),s=t(1087),p=c.Z.ul(r||(r=(0,i.Z)(["\n  list-style-type: none;\n"]))),f=c.Z.li(a||(a=(0,i.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),l=(0,c.Z)(s.rU)(o||(o=(0,i.Z)(["\n  text-decoration: none;\n  color: #191d1e;\n\n  &:hover {\n    color: tomato;\n  }\n"]))),d=t(184),h=function(n){var e=n.films,t=(0,u.TH)();return console.log(t),(0,d.jsx)(p,{children:e.map((function(n){return(0,d.jsx)(f,{children:(0,d.jsx)(l,{to:"/movies/".concat(n.id),state:t,children:n.title})},n.id)}))})}},5602:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,a,o,u=t(9439),i=t(2791),c=t(748),s=t(183),p=t(168),f=t(5706),l=f.Z.form(r||(r=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n"]))),d=f.Z.input(a||(a=(0,p.Z)(["\n  padding: 12px 14px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 3px solid #191d1e;\n  font-weight: 600;\n  font-size: 20px;\n  margin-right: 10px;\n  border-radius: 4px 8px;\n  outline: none;\n\n  &:hover {\n    color: tomato;\n    border: 3px solid tomato;\n  }\n"]))),h=f.Z.button(o||(o=(0,p.Z)(["\n  padding: 12px 12px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 3px solid #191d1e;\n  color: #191d1e;\n  font-weight: 600;\n  font-size: 20px;\n  border-radius: 4px 8px;\n\n  &:hover {\n    color: tomato;\n    border: 3px solid tomato;\n  }\n"]))),x=t(1087),v=t(184),g=function(n){var e=n.searchMovies,t=(0,x.lr)(),r=(0,u.Z)(t,2),a=r[0],o=r[1],i=a.get("search");return(0,v.jsxs)(l,{onSubmit:function(n){n.preventDefault(),e(i.toLowerCase())},children:[(0,v.jsx)(d,{type:"text",name:"query",autoFocus:!0,value:i,onChange:function(n){o({search:n.target.value})}}),(0,v.jsx)(h,{type:"submit",children:"Search"})]})},m=t(5975),Z=function(){var n=(0,i.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1],a=(0,i.useState)(!1),o=(0,u.Z)(a,2),p=o[0],f=o[1],l=(0,i.useState)(!1),d=(0,u.Z)(l,2),h=d[0],x=d[1];return(0,v.jsxs)("main",{children:[(0,v.jsx)(g,{searchMovies:function(n){f(!0),(0,m.Ml)(n).then((function(n){r(n),x(0===n.length)})).catch((function(n){console.log(n)})).finally((function(){f(!1)}))}}),p&&(0,v.jsx)(c.Z,{}),h&&(0,v.jsx)("p",{children:"There is no movies with this request. Please, try again"}),t&&(0,v.jsx)(s.Z,{films:t})]})}},5975:function(n,e,t){t.d(e,{Bt:function(){return l},Ml:function(){return s},Tg:function(){return c},Y5:function(){return p},wL:function(){return f}});var r=t(5861),a=t(4687),o=t.n(a),u=t(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="992758a4802a699e8df27d4d6efc34fb",c=function(){var n=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=602.f3419f1e.chunk.js.map