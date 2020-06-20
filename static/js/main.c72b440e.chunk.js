(this["webpackJsonpgithub-dashboard"]=this["webpackJsonpgithub-dashboard"]||[]).push([[0],{101:function(e,t,r){},102:function(e,t,r){},103:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(24),o=r(3),u=r(2),i=r(39),s=r(105),l=r(21),f=r(20),p=r(30),g=(r(91),function(){var e=Object(s.a)().t,t=Object(f.c)(),r=Object(f.d)((function(e){return e.i18n.currentLocale}));return a.a.createElement("div",{className:"language-selector"},a.a.createElement("label",{htmlFor:"language-select"},e("language")),a.a.createElement("select",{value:r,onChange:function(e){var r=e.target.value;l.a.changeLanguage(r),t(Object(p.b)(r))},className:"select select--language",id:"language-select"},Object.entries(u.f).map((function(e){var t=Object(i.a)(e,2),r=t[0],n=t[1],c=n.name,o=n.emojiFlag;return a.a.createElement("option",{key:c,value:r},o,"\xa0",c)}))))}),d=(r(97),function(){return a.a.createElement("footer",{className:"footer"},a.a.createElement("span",{className:"footer__year"},a.a.createElement("a",{className:"icon--purple",href:u.i},"\xa9"),"\xa0",a.a.createElement("time",null,(new Date).getFullYear())),a.a.createElement(g,null))}),h=r(53),m=(r(99),Object(n.forwardRef)((function(e,t){return a.a.createElement("header",{className:"header",ref:t},a.a.createElement(c.b,{to:u.k.MAIN,className:"header__link"},a.a.createElement("svg",{width:"50",height:"50"},a.a.createElement("image",{className:"header__image",href:"".concat("/github-dashboard","/react-logo.svg")})),a.a.createElement("h2",{className:"header__link--name"},"Dashboard")))}))),b=(r(101),r(102),Object(n.lazy)((function(){return r.e(3).then(r.bind(null,121))}))),v=Object(n.lazy)((function(){return r.e(5).then(r.bind(null,120))})),_=Object(n.lazy)((function(){return r.e(4).then(r.bind(null,122))}));t.default=function(){var e=Object(n.useRef)(null);return a.a.createElement("article",null,a.a.createElement("main",{className:"container"},a.a.createElement(c.a,null,a.a.createElement(m,{ref:e}),a.a.createElement(n.Suspense,{fallback:a.a.createElement(h.a,null)},a.a.createElement("div",{className:"main-content"},a.a.createElement(o.c,null,a.a.createElement(o.a,{path:u.k.MAIN,exact:!0,component:function(t){return a.a.createElement(b,Object.assign({},t,{ref:e}))}}),a.a.createElement(o.a,{path:u.k.REPO_CARD,exact:!0,component:_}),a.a.createElement(o.a,{path:u.k.NOT_FOUND,component:v})))))),a.a.createElement(d,null))}},104:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(27),o=r.n(c),u=r(20),i=r(7),s=r(13),l=r(42),f=r(26),p=r(51),g=r(52),d=r(30),h=Object(s.c)({repos:l.a,pages:f.a,search:p.a,repoDetails:g.a,i18n:d.a});var m=Object(i.a)({reducer:h});r(90),r(21);!function(){var e=r(103).default;o.a.render(a.a.createElement(u.a,{store:m},a.a.createElement(e,null)),document.getElementById("root"))}()},14:function(e,t,r){"use strict";var n,a,c=r(61);!function(e){e[e.ERROR=0]="ERROR",e[e.WARN=1]="WARN",e[e.DEBUG=2]="DEBUG"}(n||(n={})),function(e){e.ERROR="error",e.WARN="warn",e.DEBUG="debug"}(a||(a={}));var o=function(e,t,r){var a;if(!(n.DEBUG<n[e])&&r&&0!==r.length&&r[0]){var o=new Date,u="".concat(o.toISOString(),":");(a=console)[t].apply(a,[u].concat(Object(c.a)(r)))}},u={debug:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];o("DEBUG",a.DEBUG,t)},warn:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];o("WARN",a.WARN,t)},error:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];o("ERROR",a.ERROR,t)}};t.a=u},17:function(e,t,r){"use strict";r.d(t,"d",(function(){return f})),r.d(t,"c",(function(){return p})),r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return d}));var n=r(37),a=r(4),c=r.n(a),o=r(15),u=r(18),i=r.n(u),s=r(2),l=r(14),f=function(){var e=Object(o.a)(c.a.mark((function e(t,r){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={params:{q:t,page:r,sort:"stars",order:"desc",per_page:s.j},headers:{}},e.next=4,i.a.get("https://api.github.com/search/repositories",n);case 4:return a=e.sent,e.abrupt("return",a.data);case 8:return e.prev=8,e.t0=e.catch(0),l.a.error(e.t0),e.abrupt("return",e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}(),p=function(){var e=Object(o.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("".concat("https://api.github.com/repositories","/").concat(t));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),l.a.error(e.t0),e.abrupt("return",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(o.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get(t);case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),l.a.error(e.t0),e.abrupt("return",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(o.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get(t);case 3:return r=e.sent,e.abrupt("return",Object.keys(r.data));case 7:return e.prev=7,e.t0=e.catch(0),l.a.error(e.t0),e.abrupt("return",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();i.a.interceptors.request.use((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var t=r(89),a=t.GITHUB_OAUTH_TOKEN;if(!a)throw new Error("Read the README Access token section for more details: https://github.com/ArtemBaskal/github-dashboard#access-token");e.headers=Object(n.a)(Object(n.a)({},e.headers),{},{Authorization:"token ".concat(a)})}catch(c){l.a.error(c),l.a.error("Read the README Access token section for more details: https://github.com/ArtemBaskal/github-dashboard#access-token")}finally{return e}}))},2:function(e,t,r){"use strict";r.d(t,"e",(function(){return n})),r.d(t,"j",(function(){return a})),r.d(t,"g",(function(){return c})),r.d(t,"h",(function(){return o})),r.d(t,"l",(function(){return u})),r.d(t,"d",(function(){return i})),r.d(t,"c",(function(){return s})),r.d(t,"b",(function(){return l})),r.d(t,"k",(function(){return f})),r.d(t,"a",(function(){return p})),r.d(t,"f",(function(){return g})),r.d(t,"i",(function(){return d}));var n=500,a=10,c=Math.ceil(1e3/a),o=8,u=10,i=1,s="stars:>0",l={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:!1},f={MAIN:"/",REPO_CARD:"/:id",NOT_FOUND:"*"},p="ru",g={en:{name:"English",emojiFlag:"\ud83c\uddec\ud83c\udde7"},ru:{name:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",emojiFlag:"\ud83c\uddf7\ud83c\uddfa"}},d="https://github.com/ArtemBaskal/github-dashboard"},21:function(e,t,r){"use strict";var n=r(36),a=r(19),c=r(55),o=r(2),u=r(56),i=r(57),s={en:{translation:i},ru:{translation:u}};n.a.use(c.a).use(a.e).init({resources:s,fallbackLng:o.a,keySeparator:!1,interpolation:{escapeValue:!1}}),t.a=n.a},25:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return o})),r.d(t,"c",(function(){return u}));var n=r(2),a=r(14),c=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.h,a=(t=t>n.g?n.g:t)<r?t:r,c=Math.max(0,Math.min(t-r,e-Math.floor(r/2))),o=Array.from({length:a},(function(e,t){return t+c}));return o[0]>0&&o.splice(0,2,0,"prev-more"),o[o.length-1]<t-1&&o.splice(o.length-1,2,"next-more",t-1),o},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:navigator.language,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.b;return new Date(e).toLocaleString(t,r)},u=function(e,t){try{return sessionStorage[e]=t,t}catch(r){return a.a.error(r),a.a.error("The limit of sessionStorage is exceeded and it will be cleared."),localStorage.clear(),sessionStorage[e]=t,t}}},26:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return l}));var n=r(7),a=r(2),c=r(25),o={totalPages:1,currentPage:parseInt(sessionStorage.currentPage,10)||1},u=Object(n.b)({name:"pages",initialState:o,reducers:{setCurrentPage:function(e,t){return e.currentPage=t.payload,Object(c.c)("currentPage",e.currentPage.toString()),e},setTotalPages:function(e,t){var r=t.payload;return e.totalPages=Math.ceil(r/a.j),e}}}),i=u.actions,s=i.setCurrentPage,l=i.setTotalPages;t.a=u.reducer},30:function(e,t,r){"use strict";r.d(t,"b",(function(){return o}));var n=r(7),a={currentLocale:r(21).a.language},c=Object(n.b)({name:"i18n",initialState:a,reducers:{setCurrentLocale:function(e,t){return e.currentLocale=t.payload,e}}}),o=c.actions.setCurrentLocale;t.a=c.reducer},42:function(e,t,r){"use strict";r.d(t,"b",(function(){return l}));var n=r(4),a=r.n(n),c=r(15),o=r(7),u=r(17),i=r(26),s=Object(o.b)({name:"repos",initialState:[],reducers:{fetchRepos:function(e,t){return t.payload}}}),l=function(e,t){return function(){var r=Object(c.a)(a.a.mark((function r(n){var c;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(u.d)(e,t);case 2:if("string"!==typeof(c=r.sent)){r.next=5;break}throw c;case 5:n(s.actions.fetchRepos(c.items)),n(Object(i.c)(c.total_count));case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()};t.a=s.reducer},51:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return s}));var n=r(7),a=r(25),c={isSearching:!1,searchTerm:sessionStorage.searchTerm||""},o=Object(n.b)({name:"search",initialState:c,reducers:{setIsSearching:function(e,t){return e.isSearching=t.payload,e},setSearchTerm:function(e,t){return e.searchTerm=t.payload,Object(a.c)("searchTerm",e.searchTerm),e}}}),u=o.actions,i=u.setIsSearching,s=u.setSearchTerm;t.a=o.reducer},52:function(e,t,r){"use strict";r.d(t,"c",(function(){return f})),r.d(t,"b",(function(){return p}));var n=r(4),a=r.n(n),c=r(15),o=r(7),u=r(17),i=r(2),s={isFetchingContributors:!0,isFetchingLanguages:!0},l=Object(o.b)({name:"repoDetails",initialState:s,reducers:{getRepoDetails:function(e,t){var r=t.payload,n=r.id,a=r.name,c=r.stargazers_count,o=r.updated_at,u=r.description,i=r.owner,s=i.id,l=i.html_url,f=i.login,p=i.avatar_url;return{id:n,name:a,stargazers_count:c,updated_at:o,description:u,html_url:r.html_url,owner:{id:s,html_url:l,login:f,avatar_url:p}}},getRepoContributors:function(e,t){return e.contributors=t.payload.slice(0,i.l).map((function(e){return{id:e.id,html_url:e.html_url,login:e.login,avatar_url:e.avatar_url,contributions:e.contributions}})),e.isFetchingContributors=!1,e},getRepoLanguages:function(e,t){return e.languages=t.payload,e.isFetchingLanguages=!1,e},resetRepoDetails:function(e){return s}}}),f=l.actions.resetRepoDetails,p=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(r){var n,c,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.c)(e);case 2:if("string"!==typeof(n=t.sent)){t.next=7;break}throw n;case 7:r(l.actions.getRepoDetails(n));case 8:return t.next=10,Object(u.a)(n.contributors_url);case 10:if("string"!==typeof(c=t.sent)){t.next=15;break}throw c;case 15:r(l.actions.getRepoContributors(c));case 16:return t.next=18,Object(u.b)(n.languages_url);case 18:if("string"!==typeof(o=t.sent)){t.next=23;break}throw c;case 23:r(l.actions.getRepoLanguages(o));case 24:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=l.reducer},53:function(e,t,r){"use strict";var n=r(0),a=r.n(n),c=r(105);r(98);t.a=function(e){var t=e.text,r=Object(c.a)().t;return a.a.createElement("h1",{className:"loader__text"},t||r("loading"))}},56:function(e){e.exports=JSON.parse('{"repo_search":"\u041f\u043e\u0438\u0441\u043a \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f","repo":"\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439","language":"\u042f\u0437\u044b\u043a","to_main_page":"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443","page_is_not_found":"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430","last_update":"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435","previous":"\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0430\u044f","next":"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f","search":"\u041f\u043e\u0438\u0441\u043a...","owner":"\u0412\u043b\u0430\u0434\u0435\u043b\u0435\u0446","top_contributors":"\u0422\u043e\u043f \u043a\u043e\u043d\u0442\u0440\u0438\u0431\u044c\u044e\u0442\u0435\u0440\u043e\u0432","nothing_is_found":"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e","contributions":"\u041b\u0438\u0447\u043d\u044b\u0439 \u0432\u043a\u043b\u0430\u0434","loading":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...","repos_found_approximately":"\u041d\u0430\u0439\u0434\u0435\u043d\u043e \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432: \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e","error":"\u041e\u0448\u0438\u0431\u043a\u0430","fetching":"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445...","scroll_to_top":"\u0421\u043a\u0440\u043e\u043b\u043b \u0432\u0432\u0435\u0440\u0445"}')},57:function(e){e.exports=JSON.parse('{"repo_search":"Repository search","repo":"Repository","language":"Language","to_main_page":"To the main page","page_is_not_found":"Page is not found","last_update":"Last update","previous":"Previous","next":"Next","search":"Searching...","owner":"Owner","top_contributors":"Top contributors","nothing_is_found":"Nothing is found","contributions":"Contributions","loading":"Loading...","repos_found_approximately":"Repos found: approximately","error":"Error","fetching":"Fetching...","scroll_to_top":"Scroll to top"}')},62:function(e,t,r){e.exports=r(104)},89:function(e){e.exports=JSON.parse('{"GITHUB_OAUTH_TOKEN":"0828981761075418fe4ca7fdd494909cea4ff24c"}')},90:function(e,t,r){},91:function(e,t,r){},97:function(e,t,r){},98:function(e,t,r){},99:function(e,t,r){}},[[62,1,2]]]);
//# sourceMappingURL=main.c72b440e.chunk.js.map