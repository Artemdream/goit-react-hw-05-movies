"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[158],{681:function(n,e){var r="https://api.themoviedb.org/3",t="a5426bdbaf9156d8939bf87c1cb6ad6c";e.Z=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return fetch("".concat(r,"/").concat(n,"?api_key=").concat(t,"&").concat(e)).then((function(n){if(!n.ok)throw new Error("\u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0456 \u0430\u0431\u043e \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0438\u0439 \u0437\u0430\u043f\u0438\u0442");return n.json()}))}},158:function(n,e,r){r.r(e),r.d(e,{default:function(){return f}});var t,o,c=r(439),i=r(681),a=r(791),s=r(87),u=r(689),d=r(168),p=r(444),h=p.ZP.input(t||(t=(0,d.Z)(["\n  font-size: 20px;\n  padding: 10px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  border: solid 1px rgb(0, 1, 0, 0.24);\n  border-radius: 7px;\n"]))),l=p.ZP.button(o||(o=(0,d.Z)(["\n  font-size: 20px;\n  padding: 10px;\n  margin-left: 10px;\n  cursor: pointer;\n  border-radius: 7px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  border: solid 1px rgb(0, 1, 0, 0.24);\n\n  :active {\n    background-color: orange;\n  }\n"]))),x=r(184),f=function(){var n,e=(0,a.useState)([]),r=(0,c.Z)(e,2),t=r[0],o=r[1],d=(0,s.lr)({}),p=(0,c.Z)(d,2),f=p[0],b=p[1],v=null!==(n=f.get("query"))&&void 0!==n?n:"",g=(0,u.TH)();(0,a.useEffect)((function(){""!==v&&(0,i.Z)("search/movie",f).then((function(n){o(n.results)})).catch((function(n){return console.log(n)}))}),[v,f]);return(0,x.jsxs)("div",{children:[(0,x.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e=n.target.search.value,r=""===e.trim()?{}:{query:e};b(r)},children:[(0,x.jsx)(h,{type:"text",name:"search",placeholder:"Search movies"}),(0,x.jsx)(l,{type:"submit",children:"Search"})]}),0!==t.length&&(0,x.jsx)("div",{children:(0,x.jsx)("ul",{children:t.map((function(n){var e=n.id,r=n.title;return(0,x.jsx)("li",{children:(0,x.jsx)(s.rU,{to:"".concat(e),state:g,children:(0,x.jsx)("p",{children:r})})},e)}))})})]})}}}]);
//# sourceMappingURL=158.908c8d2d.chunk.js.map