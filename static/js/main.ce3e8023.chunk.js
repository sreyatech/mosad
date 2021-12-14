(this.webpackJsonpmosad=this.webpackJsonpmosad||[]).push([[0],{46:function(e,c,t){},47:function(e,c,t){},48:function(e,c,t){},72:function(e,c,t){},75:function(e,c,t){},91:function(e,c,t){},92:function(e,c,t){},93:function(e,c,t){},94:function(e,c,t){"use strict";t.r(c);var s,n=t(1),i=t.n(n),r=t(21),a=t.n(r),o=(t(46),t(15)),j=t(3),l=(t(47),t(48),t(10)),d=t(9),b=t(11),h=t(13),O=t.n(h),u=t(22),m=t(12),v=t(39),x=t.n(v).a.create({baseURL:"https://www.omdbapi.com/"}),f="8dd79383",p=Object(m.b)("movies/fetchAsyncMovies",function(){var e=Object(u.a)(O.a.mark((function e(c){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("?apikey=".concat(f,"&s=").concat(c,"&type=movie"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}()),g=Object(m.b)("movies/fetchAsyncShows",function(){var e=Object(u.a)(O.a.mark((function e(c){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("?apikey=".concat(f,"&s=").concat(c,"&type=series"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}()),w=Object(m.b)("movies/fetchAsyncMoviesOrShowDetail",function(){var e=Object(u.a)(O.a.mark((function e(c){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("?apikey=".concat(f,"&i=").concat(c,"&Plot=full"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}()),N=Object(m.c)({name:"movies",initialState:{movies:{},shows:{},selectMovieOrShow:{}},reducers:{removeSelectedMovieOrShow:function(e){e.selectMovieOrShow={}}},extraReducers:(s={},Object(b.a)(s,p.pending,(function(){console.log("pending")})),Object(b.a)(s,p.fulfilled,(function(e,c){var t=c.payload;return console.log("fetched succesffully!!"),Object(l.a)(Object(l.a)({},e),{},{movies:t})})),Object(b.a)(s,p.rejected,(function(){console.log("rejected!!")})),Object(b.a)(s,g.fulfilled,(function(e,c){var t=c.payload;return console.log("fetched succesffully!!"),Object(l.a)(Object(l.a)({},e),{},{shows:t})})),Object(b.a)(s,w.fulfilled,(function(e,c){var t=c.payload;return console.log("fetched succesffully!!"),Object(l.a)(Object(l.a)({},e),{},{selectMovieOrShow:t})})),s)}),S=N.actions.removeSelectedMovieOrShow,y=function(e){return e.movies.movies},k=function(e){return e.movies.shows},M=function(e){return e.movies.selectMovieOrShow},T=N.reducer,D=(t(72),t(0)),F=function(e){var c=e.data;return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)("div",{className:"card-item",children:Object(D.jsx)(o.b,{to:"/movie/".concat(c.imdbID),children:Object(D.jsxs)("div",{className:"card-inner",children:[Object(D.jsx)("div",{className:"card-top",children:Object(D.jsx)("img",{src:c.Poster,alt:c.Title})}),Object(D.jsx)("div",{className:"card-bottom",children:Object(D.jsxs)("div",{className:"card-info",children:[Object(D.jsx)("h4",{children:c.Title}),Object(D.jsx)("p",{children:c.Year})]})})]})})})})},R=(t(75),t(27)),A=t.n(R),I={dots:!1,infinite:!0,speed:500,slidesToShow:5,slidesToScroll:3,responsive:[{breakpoint:1500,settings:{slidesToShow:5,slidesToScroll:4,infinite:!0,dots:!1}},{breakpoint:1300,settings:{slidesToShow:4,slidesToScroll:3,infinite:!0,dots:!1}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]},E=function(){var e,c,t=Object(d.c)(y),s=Object(d.c)(k);return e="True"===t.Response?t.Search.map((function(e,c){return Object(D.jsx)(F,{data:e},c)})):Object(D.jsx)("div",{className:"movies-error",children:Object(D.jsx)("h3",{children:t.Error})}),c="True"===s.Response?s.Search.map((function(e,c){return Object(D.jsx)(F,{data:e},c)})):Object(D.jsx)("div",{className:"shows-error",children:Object(D.jsx)("h3",{style:{color:"black"},children:s.Error})}),Object(D.jsxs)("div",{className:"movie-wrapper",children:[Object(D.jsxs)("div",{className:"movie-list",children:[Object(D.jsx)("h2",{children:"Movies"}),Object(D.jsx)("div",{className:"movie-container",children:Object(D.jsx)(A.a,Object(l.a)(Object(l.a)({},I),{},{children:e}))})]}),Object(D.jsxs)("div",{className:"shows-list",children:[Object(D.jsx)("h2",{children:"Shows"}),Object(D.jsx)("div",{className:"movie-container",children:Object(D.jsx)(A.a,Object(l.a)(Object(l.a)({},I),{},{children:c}))})]})]})},P=function(){var e=Object(d.b)();return Object(n.useEffect)((function(){e(p("Harry")),e(g("Friends"))}),[e]),Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("div",{className:"banner-img"}),Object(D.jsx)(E,{})]})},B=(t(91),function(){var e=Object(j.g)().imdbID,c=Object(d.b)(),t=Object(d.c)(M);return console.log(t),Object(n.useEffect)((function(){return c(w(e)),function(){c(S())}}),[c,e]),Object(D.jsx)(D.Fragment,{children:Object(D.jsx)("div",{className:"movie-section",children:0===Object.keys(t).length?Object(D.jsx)("div",{children:"...Loading"}):Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)("div",{className:"section-left",children:[Object(D.jsx)("div",{className:"movie-title",children:t.Title}),Object(D.jsxs)("div",{className:"movie-rating",children:[Object(D.jsxs)("span",{children:["IMDB Rating ",Object(D.jsx)("i",{className:"fa fa-star"})," : ",t.imdbRating]}),Object(D.jsxs)("span",{children:["IMDB Votes ",Object(D.jsx)("i",{className:"fa fa-thumbs-up"})," : ",t.imdbVotes]}),Object(D.jsxs)("span",{children:["Runtime ",Object(D.jsx)("i",{className:"fa fa-film"})," : ",t.Runtime]}),Object(D.jsxs)("span",{children:["Year ",Object(D.jsx)("i",{className:"fa fa-calendar"})," : ",t.Year]})]}),Object(D.jsx)("div",{className:"movie-plot",children:t.Plot}),Object(D.jsxs)("div",{className:"movie-info",children:[Object(D.jsxs)("div",{children:[Object(D.jsx)("span",{children:"Director"}),Object(D.jsx)("span",{children:t.Director})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("span",{children:"Stars"}),Object(D.jsx)("span",{children:t.Actors})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("span",{children:"Genres"}),Object(D.jsx)("span",{children:t.Genre})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("span",{children:"Languages"}),Object(D.jsx)("span",{children:t.Language})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("span",{children:"Awards"}),Object(D.jsx)("span",{children:t.Awards})]})]})]}),Object(D.jsx)("div",{className:"section-right",children:Object(D.jsx)("img",{src:t.Poster,alt:t.Title})})]})})})}),L=function(){return Object(D.jsx)("div",{children:"PageNotFound"})},Y=t(41),G=t.p+"static/media/h1.1d6b340c.svg",J=(t(92),function(){var e=Object(n.useState)(""),c=Object(Y.a)(e,2),t=c[0],s=c[1],i=Object(d.b)();Object(j.f)();return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)("div",{className:"header",children:[Object(D.jsx)("div",{className:"logo",children:Object(D.jsx)(o.b,{to:"/",children:"Mosad "})}),Object(D.jsx)("div",{className:"search-bar",children:Object(D.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===t&&(alert("please enter search term..."),window.location.reload()),i(p(t)),i(g(t)),s("")},children:[Object(D.jsx)("input",{type:"text",name:"",value:t,placeholder:"Search Movies or Shows",onChange:function(e){return s(e.target.value)}}),Object(D.jsx)("button",{type:"submit",children:Object(D.jsx)("i",{className:"fa fa-search"})})]})}),Object(D.jsx)("div",{className:"user-image",children:Object(D.jsx)("img",{src:G,alt:"user"})})]})})}),V=(t(93),function(){return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)("div",{className:"footer",children:[Object(D.jsx)("div",{children:"Mosad"}),Object(D.jsx)("div",{children:"\xa92021, Movie, Inc. or its affiliating"})]})})});var W=function(){return Object(D.jsx)("div",{className:"App",children:Object(D.jsxs)(o.a,{children:[Object(D.jsx)(J,{}),Object(D.jsx)("div",{className:"container",children:Object(D.jsxs)(j.c,{children:[Object(D.jsx)(j.a,{path:"/",exact:!0,component:P}),Object(D.jsx)(j.a,{path:"/movie/:imdbID",component:B}),Object(D.jsx)(j.a,{component:L})]})}),Object(D.jsx)(V,{})]})})},C=Object(m.a)({reducer:{movies:T}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(D.jsx)(i.a.StrictMode,{children:Object(D.jsx)(d.a,{store:C,children:Object(D.jsx)(W,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[94,1,2]]]);
//# sourceMappingURL=main.ce3e8023.chunk.js.map