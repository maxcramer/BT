(this["webpackJsonpbt-code_test"]=this["webpackJsonpbt-code_test"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),s=n(10),i=n.n(s),l=(n(16),n(2)),o=n(3),u=n(5),j=n(4),h=(n(17),function(e){return Object(c.jsxs)("button",{className:"toggle-button",onClick:e.click,children:[Object(c.jsx)("div",{className:"toggle-button_line"}),Object(c.jsx)("div",{className:"toggle-button_line"}),Object(c.jsx)("div",{className:"toggle-button_line"})]})}),d=(n(18),function(e){return Object(c.jsx)("header",{className:"toolbar",children:Object(c.jsxs)("nav",{className:"toolbar__navigation",children:[Object(c.jsx)("div",{className:"toolbar__toggle-button",children:Object(c.jsx)(h,{click:e.drawerClickedHandler})}),Object(c.jsx)("div",{className:"toolbar__logo",children:Object(c.jsx)("a",{href:"/",children:Object(c.jsx)("img",{src:"https://img01.bt.co.uk/s/assets/191120/images/logo/logo-2018.svg",className:"logo",alt:"BT Logo"})})}),Object(c.jsx)("div",{className:"spacer"}),Object(c.jsx)("div",{className:"toolbar_navigation-items",children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/",children:"Link 1"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/2",children:"Link 2"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/3",children:"Link 3"})})]})})]})})}),b=(n(19),function(e){var t="side-drawer";return e.show&&(t="side-drawer open"),Object(c.jsx)("nav",{className:t,children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/",children:"Link 1"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/2",children:"Link 2"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/3",children:"Link 3"})})]})})}),O=(n(20),function(e){return Object(c.jsx)("div",{className:"backdrop",onClick:e.click})}),p=n(9),x=n(6),f=n.n(x),g=n(8),v=(n(22),function(e){var t=e.content.slice(0,150);return Object(c.jsxs)("div",{className:"Article",children:[Object(c.jsx)("h4",{children:e.title}),Object(c.jsxs)("h5",{children:["By ",e.author]}),Object(c.jsxs)("p",{children:[t,"..."]}),Object(c.jsx)("p",{children:e.publisher})]})}),m=(n(23),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleOnInputChange=function(t){e.setState({query:t.target.value}),console.log("e.target.value: ",t.target.value)},e.handleButtonClick=function(){e.props.callBack(e.state.query)},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"SearchBar_container",children:[Object(c.jsx)("input",{type:"text",value:this.state.query,placeholder:"Search Articles",onChange:this.handleOnInputChange}),Object(c.jsx)("button",{disabled:!this.state.query,onClick:this.handleButtonClick,children:"Search"})]})}}]),n}(r.Component)),k=(n(24),function(){var e=Object(g.a)(f.a.mark((function e(t){var n,c,r,a,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://newsapi.org/v2/everything?"+"q=".concat(t,"&")+"apiKey=db73b9b5eebb4126b000201a551dbecb",c=new Request(n),e.next=4,fetch(c);case 4:return r=e.sent,e.next=7,r.json();case 7:return a=e.sent,s=a.articles.slice(0,10),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),y=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={articles:[],query:"",lastQuery:""},e.doSearch=function(){var t=Object(g.a)(f.a.mark((function t(n){var c,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(n);case 2:c=t.sent,r=c.map((function(e){return e.content||(e.content=""),Object(p.a)(Object(p.a)({},e),{},{content:e.content.slice(0,150)})})),e.setState({articles:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.doSearch("everything"),this.state.query!==this.state.lastQuery&&this.state.query}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=Object(c.jsx)("p",{children:"Articles not found"});return this.state.error&&null!==this.articles||(e=this.state.articles.map((function(e){return Object(c.jsx)(v,{title:e.title,author:e.author,content:e.content},e.title)}))),Object(c.jsxs)("div",{className:"Articles",children:[Object(c.jsx)(m,{query:this.state.query,callBack:this.doSearch}),Object(c.jsx)("div",{className:"articles__container",children:e})]})}}]),n}(r.Component),w=(n(25),n(26),function(){return Object(c.jsx)("div",{className:"Footer_Container",children:Object(c.jsxs)("p",{children:["Full rights reserved to ",Object(c.jsx)("img",{className:"footer-logo",src:"https://img01.bt.co.uk/s/assets/191120/images/logo/logo-2018.svg",alt:"BT Logo"}),"\xa9"]})})}),C=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={sideDrawerOpen:!1},e.drawerToggleClickHandler=function(){e.setState((function(e){return{sideDrawerOpen:!e.sideDrawerOpen}}))},e.backdropClickHandler=function(){e.setState({sideDrawerOpen:!1})},e}return Object(o.a)(n,[{key:"render",value:function(){var e;return this.state.sideDrawerOpen&&(e=Object(c.jsx)(O,{click:this.backdropClickHandler})),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(d,{drawerClickedHandler:this.drawerToggleClickHandler}),Object(c.jsx)(b,{show:this.state.sideDrawerOpen}),e,Object(c.jsxs)("main",{style:{marginTop:"64px"},children:[Object(c.jsx)("h1",{children:"BT React Code Test - By Max Cramer - 21/01/2020"}),Object(c.jsx)(y,{})]}),Object(c.jsx)(w,{})]})}}]),n}(r.Component),N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};n.p;i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root")),N()}],[[27,1,2]]]);
//# sourceMappingURL=main.ec15d98b.chunk.js.map