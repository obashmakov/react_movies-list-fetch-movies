(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(6),s=a.n(i),l=(a(15),a(1)),r=(a(16),a(17),a(18),function(e){var t=e.movie;return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-image"},c.a.createElement("figure",{className:"image is-4by3"},c.a.createElement("img",{src:t.Poster,alt:"Film logo"}))),c.a.createElement("div",{className:"card-content"},c.a.createElement("div",{className:"media"},c.a.createElement("div",{className:"media-left"},c.a.createElement("figure",{className:"image is-48x48"},c.a.createElement("img",{src:"/images/imdb-logo.jpeg",alt:"imdb"}))),c.a.createElement("div",{className:"media-content"},c.a.createElement("p",{className:"title is-8"},t.Title))),c.a.createElement("div",{className:"content"},t.Plot,c.a.createElement("br",null),c.a.createElement("a",{href:t.Website},"IMDB"))))}),m=function(e){var t=e.movies;return c.a.createElement("div",{className:"movies"},t.map((function(e){return c.a.createElement(r,{key:e.imdbID,movie:e})})))},o=a(4),u=a.n(o),d=a(9),v=a(7),E=a(8),p=a.n(E),f=(a(20),function(e){var t=e.setMovies,a=e.moviesList,i=Object(n.useState)(""),s=Object(l.a)(i,2),m=s[0],o=s[1],E=Object(n.useState)(null),f=Object(l.a)(E,2),b=f[0],h=f[1],N=Object(n.useState)(!1),g=Object(l.a)(N,2),j=g[0],y=g[1],O=Object(n.useState)(!1),w=Object(l.a)(O,2),k=w[0],x=w[1],D="http://www.omdbapi.com/?apikey=7301fdd3&t=".concat(m);function F(){return(F=Object(v.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(D);case 2:return t=e.sent,e.next=5,t.json();case 5:"False"===(a=e.sent).Response?(y(!0),o("")):(h(a),o(""),y(!1));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:"find-movie"},c.a.createElement("div",{className:"field"},c.a.createElement("label",{className:"label",htmlFor:"movie-title"},"Movie title"),c.a.createElement("div",{className:"control"},c.a.createElement("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:p()("input",{"is-danger":!0===j}),value:m,onChange:function(e){return o(e.target.value)}})),j&&c.a.createElement("p",{className:"help is-danger"},"Can't find a movie with such a title")),c.a.createElement("div",{className:"field is-grouped"},c.a.createElement("div",{className:"control"},c.a.createElement("button",{type:"button",className:"button is-light",onClick:function(){!function(){F.apply(this,arguments)}(),x(!1)}},"Find a movie")),c.a.createElement("div",{className:"control"},c.a.createElement("button",{type:"submit",className:"button is-primary",onClick:function(e){var n=a.some((function(e){return e.imdbID===b.imdbID}));e.preventDefault(),n?(x(!0),o("")):(t([].concat(Object(d.a)(a),[b])),h(!1))},disabled:!b},"Add to the list")))),c.a.createElement("div",{className:"container"},k&&c.a.createElement("p",{className:"help is-danger"},"This Movie is already in list. Please choose another one."),c.a.createElement("h2",{className:"title"},"Preview"),b&&c.a.createElement(r,{movie:b})))}),b=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],i=t[1];return c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"page-content"},0===a.length?c.a.createElement("h1",null,"Add your movies here"):c.a.createElement(m,{movies:a})),c.a.createElement("div",{className:"sidebar"},c.a.createElement(f,{setMovies:i,moviesList:a})))};s.a.render(c.a.createElement(b,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.10869619.chunk.js.map