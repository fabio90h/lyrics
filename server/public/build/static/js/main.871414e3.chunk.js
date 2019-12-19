(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{41:function(e,n,t){e.exports=t(56)},46:function(e,n,t){},47:function(e,n,t){},56:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),c=t(34),l=t.n(c),i=(t(46),t(18)),o=t(19),u=(t(47),t(12)),s=t(16),m=t(9),d=t(13);function b(){var e=Object(u.a)(["\n    {\n        songs{\n            id\n            title\n            lyrics{\n                id\n                content\n            }\n        }\n    }\n"]);return b=function(){return e},e}var v=Object(m.b)(b());function E(){var e=Object(u.a)(["\n    mutation DeleteSong($id: ID){\n        deleteSong(id: $id){\n            id\n        }\n    }\n"]);return E=function(){return e},e}var f=Object(m.b)(E()),g=function(){var e=Object(d.b)(v),n=e.loading,t=e.error,c=e.data,l=e.refetch,o=Object(d.a)(f),u=Object(s.a)(o,1)[0];return Object(a.useEffect)((function(){l()})),n?r.a.createElement("div",null,"Loading..."):t?r.a.createElement("div",null,"Error: "):r.a.createElement("div",null,r.a.createElement("h3",null,"Song List"),r.a.createElement("ul",{class:"collection"},c.songs.map((function(e){var n=e.title,t=e.id;return r.a.createElement("li",{key:t,className:"collection-item"},r.a.createElement(i.b,{to:"/songs/".concat(t)},n),r.a.createElement("i",{className:"material-icons right",onClick:function(){return u({variables:{id:t}})}},"delete"))}))),r.a.createElement("ul",null,r.a.createElement(i.b,{to:"/songs/new",className:"btn-floating btn-large red right"},r.a.createElement("i",{className:"material-icons"},"add"))))},p=t(28),j=t.n(p);function O(){var e=Object(u.a)(["\n    mutation AddSong($title: String){\n        addSong(title: $title){\n            title\n            id\n        }\n    }\n"]);return O=function(){return e},e}var h=Object(m.b)(O()),y=function(){var e=Object(a.useState)(""),n=Object(s.a)(e,2),t=n[0],c=n[1],l=Object(d.a)(h),u=Object(s.a)(l,2),m=u[0],b=u[1],v=b.loading,E=b.error,f=Object(o.f)();return v?r.a.createElement("p",null,"Loading..."):E?r.a.createElement("p",null,"Error :("):r.a.createElement("div",null,r.a.createElement(i.b,{to:"/"},"Back"),r.a.createElement("h3",null,"Create a new Song"),r.a.createElement("form",{onSubmit:function(e){return j.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.prev=1,n.next=4,j.a.awrap(m({variables:{title:t}}));case 4:f.push("/"),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),console.log(n.t0);case 10:c("");case 11:case"end":return n.stop()}}),null,null,[[1,7]])}},r.a.createElement("label",null,"Song Title:"),r.a.createElement("input",{type:"text",onChange:function(e){return c(e.target.value)},value:t})))};function k(){var e=Object(u.a)(["\n    query SongDetails($id: ID!){\n        song(id: $id){\n            id\n            title\n            lyrics{\n                id\n                content\n                likes\n            }\n        }\n    }\n"]);return k=function(){return e},e}var S=Object(m.b)(k());function w(){var e=Object(u.a)(["\n    mutation AddLyrics($content: String, $songId: ID){\n        addLyricToSong(content: $content, songId: $songId){\n            title\n            id\n            lyrics {\n                id\n                content\n                likes\n            }\n        }\n    }\n"]);return w=function(){return e},e}var $=Object(m.b)(w()),L=function(e){var n=e.id,t=Object(a.useState)(""),c=Object(s.a)(t,2),l=c[0],i=c[1],o=Object(d.a)($),u=Object(s.a)(o,1)[0];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u({variables:{content:l,songId:n}}),i("")}},r.a.createElement("label",null,"Add a Lyric"),r.a.createElement("input",{type:"text",onChange:function(e){return i(e.target.value)},value:l}))};function I(){var e=Object(u.a)(["\n    mutation likeLyrics($id: ID){\n        likeLyric(id: $id){\n            likes\n            id\n        }\n    }\n"]);return I=function(){return e},e}var N=Object(m.b)(I()),D=function(e){var n=e.lyrics,t=Object(d.a)(N),a=Object(s.a)(t,1)[0];return r.a.createElement("ul",{className:"collection"},n.map((function(e){var n=e.content,t=e.id,c=e.likes;return r.a.createElement("li",{className:"collection-item",key:t},n,r.a.createElement("i",{className:"material-icons right",onClick:function(){return function(e,n){a({variables:{id:e},optimisticResponse:{__typename:"Mutation",likeLyric:{id:e,__typename:"LyricType",likes:n+1}}})}(t,c)}},"thumb_up"),r.a.createElement("span",{className:"right"},c))})))},x=function(){var e=Object(o.g)().id,n=Object(d.b)(S,{variables:{id:e}}),t=n.loading,a=n.error,c=n.data;if(t)return r.a.createElement("div",null,"Loading...");if(a)return r.a.createElement("div",null,"Error: ");var l=c.song;return r.a.createElement("div",null,r.a.createElement(i.b,{to:"/"},"Back"),r.a.createElement("h3",null,l.title),r.a.createElement(D,{lyrics:l.lyrics}),r.a.createElement(L,{id:e}))};var C=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(i.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(g,null)),r.a.createElement(o.a,{path:"/songs/new"},r.a.createElement(y,null)),r.a.createElement(o.a,{path:"/songs/:id"},r.a.createElement(x,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=t(8),B=new m.a({uri:"/graphql"});l.a.render(r.a.createElement(_.a,{client:B},r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.871414e3.chunk.js.map