"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{681:function(n,t){var e="https://api.themoviedb.org/3",c="a5426bdbaf9156d8939bf87c1cb6ad6c";t.Z=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return fetch("".concat(e,"/").concat(n,"?api_key=").concat(c,"&").concat(t)).then((function(n){if(!n.ok)throw new Error("\u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0456 \u0430\u0431\u043e \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0438\u0439 \u0437\u0430\u043f\u0438\u0442");return n.json()}))}},186:function(n,t,e){e.r(t);var c=e(439),o=e(681),r=e(791),i=e(689),a=e(184);t.default=function(){var n=(0,r.useState)([]),t=(0,c.Z)(n,2),e=t[0],u=t[1],h=(0,i.UO)().movieId,s="/movie/".concat(h,"/reviews");return(0,r.useEffect)((function(){(0,o.Z)(s).then((function(n){u(n.results)})).catch((function(n){return console.log(n)}))}),[s]),(0,a.jsx)("div",{children:0===e.length?"We don`t have any reviews for this movie":(0,a.jsx)("ul",{children:e.map((function(n){var t=n.author,e=n.content,c=n.id;return(0,a.jsxs)("li",{children:[(0,a.jsxs)("h4",{children:["Author: ",t]}),(0,a.jsx)("p",{children:e})]},c)}))})})}}}]);
//# sourceMappingURL=186.69a68002.chunk.js.map