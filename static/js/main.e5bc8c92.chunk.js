(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{22:function(e,n,t){},26:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var i=t(0),r=t(1),a=t.n(r),o=t(12),c=t.n(o),s=(t(22),t(2)),l=t(3);function u(){var e=Object(s.a)(["\n        width: ","px;\n        height: ","px;\n        background-image: url(","); \n        background-size: cover; \n        margin: 0 auto;          \n    "]);return u=function(){return e},e}var d=function(e){var n="Resources/img/icons/"+e.type+".png",t=l.a.div(u(),e.width,e.height,n);return Object(i.jsx)("a",{target:"_blank",href:{linkedin:"https://www.linkedin.com/in/ruben-vecino",github:"https://www.github.com/rubenvecg"}[e.type],children:Object(i.jsx)(t,{})})};function h(){var e=Object(s.a)(["\n        display: grid;\n        grid-template-columns: repeat(",", ","px);\n        grid-template-rows: ","px;\n        grid-gap: ","px;\n        justify-content: center; \n        margin: 0 auto;       \n    "]);return h=function(){return e},e}var p=function(e){for(var n=e.types.split(" "),t=[],r=0;r<n.length;r++)t.push(Object(i.jsx)(d,{type:n[r],width:e.size,height:e.size},r.toString()));var a=l.a.div(h(),n.length,e.size,e.size,e.spacing);return Object(i.jsx)(a,{children:t})},g=t(5),j=t(6),b=t(8),m=t(7);function v(){var e=Object(s.a)(["\n                margin: 10px auto;    \n            "]);return v=function(){return e},e}function f(){var e=Object(s.a)(["\n                color: tomato;        \n                font-weight: normal;\n            "]);return f=function(){return e},e}function x(){var e=Object(s.a)(["\n                text-align: justify; \n                margin-bottom: 0px; \n                margin-top: 5px;        \n                font-weight: normal; \n                font-size: 14px;     \n            "]);return x=function(){return e},e}function O(){var e=Object(s.a)(["\n                width: 100%;\n                height: 100%;\n                -webkit-transition: opacity 0.5s;\n                background: #222;\n                opacity: 0;    \n                \n                &:hover{\n                    opacity: 0.8;\n                }\n\n                \n                & a{\n                    color: white;\n                    opacity: 1;\n                    -webkit-transition: color 0.5s;\n                    transition: color 0.5s;\n                    text-decoration: none; \n                    font-size: 24px;\n                    font-weight: bold;\n                    \n                    position: absolute;\n                    top: 50%;            \n                    margin-top: -18.5px;\n                    left: 50%;\n                    margin-left: -81px; \n                                                    \n                }\n\n                & a:hover{\n                    color: tomato;\n                }\n\n                \n            "]);return O=function(){return e},e}function w(){var e=Object(s.a)(["\n                width: 300px;\n                height: 200px;\n                margin: 0 auto;        \n                background-image: url(","); \n                background-size: 100% 100%; \n                position: relative;      \n            "]);return w=function(){return e},e}function k(){var e=Object(s.a)(["\n                padding: 10px;\n                color: tomato;        \n                font-weight: normal;\n            "]);return k=function(){return e},e}function y(){var e=Object(s.a)(["\n                background: ##050808;\n                color: #e6e6ea;\n\n                width: 300px;\n                height: 250px;\n                margin: 0 auto;\n                position: relative;\n                padding: 1px 20px 10px; \n                \n                overflow: hidden;\n\n                -webkit-transition: all 0.5s;\n                transition: all 0.5s;\n\n                &:hover{\n                    height: 450px;\n                }\n\n                & h4{\n                    margin: 10px;\n                }\n\n            "]);return y=function(){return e},e}var S=function(e){Object(b.a)(t,e);var n=Object(m.a)(t);function t(e){var i;return Object(g.a)(this,t),(i=n.call(this)).divRef=a.a.createRef(),i.state={height:"0px"},i}return Object(j.a)(t,[{key:"componentDidMount",value:function(){this.setState({height:this.divRef.current.clientHeight})}},{key:"render",value:function(){var e=l.a.div(y()),n=l.a.h3(k()),t=l.a.div(w(),"Resources/img/projects/"+this.props.imgName),r=l.a.div(O()),a=l.a.p(x()),o=l.a.span(f()),c=l.a.div(v());return console.log("+"+this.props.link+"+"),console.log(this.state.height),Object(i.jsxs)(e,{ref:this.divRef,children:[Object(i.jsx)(n,{children:this.props.title}),Object(i.jsx)(t,{children:Object(i.jsx)(r,{children:Object(i.jsx)("a",{target:"_blank",href:this.props.link,children:Object(i.jsx)("h3",{children:"Click to open"})})})}),Object(i.jsx)(c,{children:Object(i.jsxs)(a,{children:[" ",this.props.children," "]})}),Object(i.jsxs)(a,{children:["Category: ",Object(i.jsx)(o,{children:this.props.category})]}),Object(i.jsx)(a,{children:"Made with:"}),Object(i.jsx)(p,{types:this.props.madeWith,size:"32",spacing:"5"})]})}}]),t}(a.a.Component);function z(){var e=Object(s.a)(["\n                margin: 0 auto;\n                padding-top: 10px;\n                display: grid;\n                grid-template-columns: repeat(2, 300px);\n                grid-gap: 10px;\n                justify-content: center;\n                align-items: start;\n                width: 100%;\n             "]);return z=function(){return e},e}var W=function(e){Object(b.a)(t,e);var n=Object(m.a)(t);function t(e){return Object(g.a)(this,t),n.call(this)}return Object(j.a)(t,[{key:"render",value:function(){var e=l.a.div(z());return Object(i.jsx)(e,{children:this.props.children})}}]),t}(a.a.Component);function N(){var e=Object(s.a)(["\n        width:","; \n        height:","; \n        border-radius:",";\n        margin: 40px auto 60px;\n        background-image: url(Resources/img/",");\n        background-position: center;\n        background-size: cover;\n    "]);return N=function(){return e},e}var R=function(e){var n=l.a.div(N(),e.width,e.height,e.radius,e.imgSource);return Object(i.jsx)(n,{})};function C(){var e=Object(s.a)(["\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: -2;\n        background-image: url(Resources/img/",");\n        background-size: cover;\n    "]);return C=function(){return e},e}var D=function(e){var n=l.a.div(C(),e.bgSource);return Object(i.jsx)(n,{})};function M(){var e=Object(s.a)(["\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: -1;\n        background: #011a25;\n        opacity: 0.8;\n    "]);return M=function(){return e},e}var q=function(e){var n=l.a.div(M());return Object(i.jsx)(n,{})},A=t(16),H=t.n(A);t(25),t(26);var I=function(){return H.a.init(),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(D,{bgSource:"bg.jpg"}),Object(i.jsx)(q,{}),Object(i.jsx)("div",{id:"header",className:"container",children:Object(i.jsxs)("header",{className:"page-header",children:[Object(i.jsx)("h1",{children:"Ruben Vecino"}),Object(i.jsx)("h3",{children:"Aspiring Software Engineer"}),Object(i.jsx)("div",{id:"personal-links",className:"links",children:Object(i.jsx)(p,{types:"linkedin github",size:"30",spacing:"20"})})]})}),Object(i.jsxs)("div",{id:"about",class:"section",children:[Object(i.jsx)("h1",{className:"section-title",children:"About me"}),Object(i.jsxs)("div",{id:"about-content",children:[Object(i.jsx)("div",{"data-aos":"fade-right","data-aos-duration":"1000",children:Object(i.jsx)(R,{id:"headshot",width:"250px",height:"250px",radius:"125px",imgSource:"photo.jpg"})}),Object(i.jsx)("div",{"data-aos":"fade-left","data-aos-duration":"2000","data-aos-delay":"500",children:Object(i.jsx)("p",{children:"Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nulla nulla, viverra in sapien non, congue convallis purus. Donec non neque diam. Vestibulum euismod tempor odio, eget vestibulum est auctor tincidunt. Duis volutpat in leo vitae condimentum. Vivamus aliquet lacus eget arcu vulputate, vitae egestas est tristique. Suspendisse vehicula, libero eget cursus pretium, magna velit egestas arcu, sit amet aliquet nulla justo et ipsum."})})]})]}),Object(i.jsxs)("div",{id:"projects",class:"section",children:[Object(i.jsx)("h1",{className:"section-title",children:"Projects"}),Object(i.jsxs)(W,{children:[Object(i.jsx)(S,{title:"CTP Portable Website",imgName:"ctp-portable.gif",madeWith:"react html css js",link:"https://ctp-portable.netlify.app/",category:"Web Development",children:"As part of the ctpHomeHacks hackathon, I collaborated with our team's UX designer to develop this landing page for a task management app we proposed. We wanted to make the site as fun and lively as possible with  different animated elements."}),Object(i.jsx)(S,{title:"HSL-RGB Color Picker",imgName:"color-picker.gif",madeWith:"html css js",link:"https://rubenvecg.github.io/color-picker",category:"Web Development",children:"This front-end only tool allows to preview, save, edit and remove color references. Sliders adjust their colors dynamically so the user gets an idea of how the color will look."}),Object(i.jsx)(S,{title:"Responsive Gym Website",imgName:"gym-site.gif",madeWith:"html css js bootstrap",link:"https://rubenvecg.github.io/gym-site",category:"Web Development",children:"As the final project for my CST 2309 (Web Development) class on Fall 2019, I developed this responsive site using Bootstrap and CSS media queries, as well as native HTML, CSS and Javascript."}),Object(i.jsx)(S,{title:"Minesweeper",imgName:"minesweeper.gif",madeWith:"java",link:"https://github.com/rubenvecg/Minesweeper-Java",category:"Game Development",children:"I enjoy rebuilding classic games and learning the logic behind them. I implemented the flood fill algorithm to reveal all empty cells around the one selected by the player."})]})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(I,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.e5bc8c92.chunk.js.map