"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[442],{681:function(n,e){var i="https://api.themoviedb.org/3",r="a5426bdbaf9156d8939bf87c1cb6ad6c";e.Z=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return fetch("".concat(i,"/").concat(n,"?api_key=").concat(r,"&").concat(e)).then((function(n){if(!n.ok)throw new Error("\u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0456 \u0430\u0431\u043e \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0438\u0439 \u0437\u0430\u043f\u0438\u0442");return n.json()}))}},273:function(n,e,i){i.r(e),i.d(e,{default:function(){return Z}});var r,t,o,c,s,a=i(439),d=i(681),l=i(791),x=i(689),p=i(168),h=i(87),u=i(444),g=u.ZP.div(r||(r=(0,p.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),v=(0,u.ZP)(h.rU)(t||(t=(0,p.Z)(["\n  display: block;\n  width: 60px;\n  text-decoration: none;\n  margin-bottom: 20px;\n  padding: 10px 20px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  border: solid 1px rgb(0, 1, 0, 0.24);\n  border-radius: 7px;\n"]))),j=(0,u.ZP)(h.OL)(o||(o=(0,p.Z)(["\n  display: block;\n  text-decoration: none;\n  text-align: center;\n  margin: 0 auto;\n\n  &.active {\n    color: orange;\n  }\n"]))),b=u.ZP.li(c||(c=(0,p.Z)(["\n  width: 60px;\n  margin-bottom: 10px;\n  padding: 10px 20px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  border: solid 1px rgb(0, 1, 0, 0.24);\n  border-radius: 7px;\n"]))),f=u.ZP.ul(s||(s=(0,p.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),m=i.p+"static/media/movie.02b2ad934fda58c60c91.png",w=i(184),Z=function(){var n,e=(0,l.useState)([]),i=(0,a.Z)(e,2),r=i[0],t=i[1],o=(0,x.UO)().movieId,c=(0,x.TH)(),s=(0,l.useRef)(null!==(n=c.state)&&void 0!==n?n:"/movies"),p="/movie/".concat(o);(0,l.useEffect)((function(){(0,d.Z)(p).then((function(n){t(n)})).catch((function(n){return console.log(n)}))}),[p]);var h=r.poster_path,u=r.original_title,Z=r.overview,k=r.genres,_=r.vote_average;return(0,w.jsxs)(w.Fragment,{children:[0!==Object.keys(r).length&&(0,w.jsxs)("div",{children:[(0,w.jsx)(v,{to:s.current,children:" Go back"}),(0,w.jsxs)(g,{children:[(0,w.jsx)("div",{children:(0,w.jsx)("img",{src:h?"https://image.tmdb.org/t/p/w500".concat(h):m,alt:"..."})}),(0,w.jsxs)("div",{children:[(0,w.jsx)("h1",{children:u}),(0,w.jsxs)("p",{children:["User Score: ",10*_.toFixed(1)+" %"]}),(0,w.jsx)("h2",{children:"Overview"}),(0,w.jsx)("p",{children:Z||"No review"}),(0,w.jsx)("h3",{children:"Genres"}),(0,w.jsx)("p",{children:0!==k.length?k.map((function(n){return n.name})).join(", "):"Unknown genres"})]})]}),(0,w.jsxs)("div",{children:[(0,w.jsx)("p",{children:"Additional Information"}),(0,w.jsxs)(f,{children:[(0,w.jsx)(b,{children:(0,w.jsx)(j,{to:"cast",children:"Cast"})}),(0,w.jsx)(b,{children:(0,w.jsx)(j,{to:"reviews",children:"Reviews"})})]})]})]}),(0,w.jsx)(l.Suspense,{fallback:(0,w.jsx)("div",{children:"Loading..."}),children:(0,w.jsx)(x.j3,{})})]})}}}]);
//# sourceMappingURL=442.0ef76228.chunk.js.map