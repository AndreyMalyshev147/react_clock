(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),r=n(3),s=n(5),i=n(4),l=n(1),u=n.n(l),b=(n(12),n(13),n(0)),m=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).clockInterval=void 0,e.state={presentDate:(new Date).toLocaleTimeString()},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.clockInterval=window.setInterval((function(){e.setState({presentDate:(new Date).toLocaleTimeString()}),console.log(e.state.presentDate)}),1e3)}},{key:"componentDidUpdate",value:function(e){var t=e.name;this.props.name!==t&&console.log("The Clock was renamed from ".concat(t," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){clearInterval(this.clockInterval)}},{key:"render",value:function(){var e=this.state.presentDate;return Object(b.jsx)("div",{className:"clockField",children:Object(b.jsx)("div",{className:"clockField__clock",children:e})})}}]),n}(u.a.Component),h=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={isClockVisible:!0,nameClock:0},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.isClockVisible,c=t.nameClock;return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("div",{className:"App__box box",children:[Object(b.jsx)("h1",{className:"box__title",children:"React clock"}),Object(b.jsx)("p",{className:"box__timeText",children:"Current time:"}),Object(b.jsx)("p",{children:n&&Object(b.jsx)(m,{name:c})}),Object(b.jsx)("button",{type:"button",onClick:function(){return e.setState({isClockVisible:!0})},className:"box__show-button",children:"Show"}),Object(b.jsx)("button",{type:"button",onClick:function(){return e.setState({isClockVisible:!1})},className:"box__hide-button",children:"Hide"}),Object(b.jsx)("button",{type:"button",onClick:function(){return e.setState({nameClock:Math.floor(100*Math.random())})},className:"box__randomName-button",children:"Set random name"})]})})}}]),n}(u.a.Component);a.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7e214791.chunk.js.map