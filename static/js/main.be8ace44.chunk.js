(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{22:function(e,n,t){},26:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var i=t(0),r=t(1),o=t.n(r),a=t(12),s=t.n(a),c=(t(22),t(2)),l=t(3);function d(){var e=Object(c.a)(["\n        width: ","px;\n        height: ","px;\n        background-image: url(","); \n        background-size: cover; \n        margin: 0 auto;          \n    "]);return d=function(){return e},e}var h=function(e){var n="Resources/img/icons/"+e.type+".png",t=l.a.div(d(),e.width,e.height,n);return Object(i.jsx)("a",{target:"_blank",href:{linkedin:"https://www.linkedin.com/in/ruben-vecino",github:"https://www.github.com/rubenvecg"}[e.type],children:Object(i.jsx)(t,{})})};function p(){var e=Object(c.a)(["\n        display: grid;\n        grid-template-columns: repeat(",", ","px);\n        grid-template-rows: ","px;\n        grid-gap: ","px;\n        justify-content: center; \n        margin: 0 auto;       \n    "]);return p=function(){return e},e}var u=function(e){for(var n=e.types.split(" "),t=[],r=0;r<n.length;r++)t.push(Object(i.jsx)(h,{type:n[r],width:e.size,height:e.size},r.toString()));var o=l.a.div(p(),n.length,e.size,e.size,e.spacing);return Object(i.jsx)(o,{children:t})},j=t(5),b=t(6),g=t(8),m=t(7);function f(){var e=Object(c.a)(["\n                margin: 0px auto;\n                padding-right: 10px;\n                height: 0px;\n                overflow: hidden; \n                transition: height 0.5s;              \n            "]);return f=function(){return e},e}function v(){var e=Object(c.a)(["\n                text-align: justify; \n                margin-bottom: 0px; \n                margin-top: 5px;\n                font-size: 14px;  \n                \n                & b{\n                    color: tomato;\n                }\n            "]);return v=function(){return e},e}function x(){var e=Object(c.a)(["\n                width: 100%;\n                height: 100%;\n                -webkit-transition: opacity 0.5s;\n                background: #222;\n                opacity: 0;    \n                \n                &:hover{\n                    opacity: 0.8;\n                }\n\n                & .link-cont{\n                    width: 100%;\n                    height: auto;\n\n                    position: absolute;\n                    top: 50%;\n                    margin-top: -12px;\n                }\n\n                & .link-cont a{\n                    color: white;\n                    opacity: 1;\n                    -webkit-transition: color 0.5s;\n                    transition: color 0.5s;\n                    text-decoration: none; \n                    font-size: 24px;\n                    font-weight: bold;                                              \n                }\n\n                & .link-cont a:hover{\n                    color: tomato;\n                }\n\n                \n            "]);return x=function(){return e},e}function O(){var e=Object(c.a)(["\n                width: 350px;\n                height: 233px;\n                margin: 0 auto;        \n                background-image: url(","); \n                background-size: 100% 100%; \n                position: relative;      \n            "]);return O=function(){return e},e}function w(){var e=Object(c.a)(["\n                padding: 10px;\n                color: tomato; \n                font-size: 24px;       \n                font-weight: normal;\n            "]);return w=function(){return e},e}function y(){var e=Object(c.a)(["\n                color: #e6e6ea;\n                width: 350px;\n                height: auto;\n                margin: 0 auto;\n                position: relative;\n                padding: 1px 20px 10px; \n                \n                overflow: hidden;\n\n                -webkit-transition: all 0.5s;\n                transition: all 0.5s;\n\n                & h4{\n                    margin: 10px;\n                }  \n                \n                &:hover .description-cont{\n                    height: 150px;\n                    overflow: auto;\n                }\n            "]);return y=function(){return e},e}var k=function(e){Object(g.a)(t,e);var n=Object(m.a)(t);function t(e){var i;return Object(j.a)(this,t),(i=n.call(this)).divRef=o.a.createRef(),i.state={height:"0px"},i}return Object(b.a)(t,[{key:"componentDidMount",value:function(){this.setState({height:this.divRef.current.clientHeight})}},{key:"render",value:function(){var e=l.a.div(y()),n=l.a.h3(w()),t=l.a.div(O(),"Resources/img/projects/"+this.props.imgName),r=l.a.div(x()),o=l.a.p(v()),a=l.a.div(f());return console.log("+"+this.props.link+"+"),console.log(this.state.height),Object(i.jsx)("div",{children:Object(i.jsxs)(e,{ref:this.divRef,children:[Object(i.jsx)(n,{children:this.props.title}),Object(i.jsx)(t,{children:Object(i.jsx)(r,{children:Object(i.jsx)("div",{class:"link-cont",children:Object(i.jsx)("a",{target:"_blank",href:this.props.link,children:Object(i.jsx)("h3",{children:"Open"})})})})}),Object(i.jsxs)(a,{className:"description-cont",children:[Object(i.jsxs)(o,{children:[" ",this.props.children," "]}),Object(i.jsxs)(o,{children:["Category: ",Object(i.jsx)("b",{children:this.props.category})]}),Object(i.jsx)(o,{children:"Made with:"}),Object(i.jsx)(u,{types:this.props.madeWith,size:"32",spacing:"5"})]})]})})}}]),t}(o.a.Component);function S(){var e=Object(c.a)(["\n                margin: 0 auto;\n                padding-top: 10px;\n                display: grid;                \n                grid-gap: 10px;\n                justify-content: center;\n                align-items: start;\n                width: 100%;\n\n                @media only screen and (min-width: 800px) {\n                    & {\n                        grid-template-columns: repeat(2, 350px);\n                    }\n                }\n             "]);return S=function(){return e},e}var N=function(e){Object(g.a)(t,e);var n=Object(m.a)(t);function t(e){return Object(j.a)(this,t),n.call(this)}return Object(b.a)(t,[{key:"render",value:function(){var e=l.a.div(S());return Object(i.jsx)(e,{children:this.props.children})}}]),t}(o.a.Component);function C(){var e=Object(c.a)(["\n        width:","; \n        height:","; \n        border-radius:",";\n        margin: 40px auto 60px;\n        background-image: url(Resources/img/",");\n        background-position: center;\n        background-size: cover;\n    "]);return C=function(){return e},e}var z=function(e){var n=l.a.div(C(),e.width,e.height,e.radius,e.imgSource);return Object(i.jsx)(n,{})};function W(){var e=Object(c.a)(["\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: -2;\n        background-image: url(Resources/img/",");\n        background-size: cover;\n        background-position: center;\n    "]);return W=function(){return e},e}var I=function(e){var n=l.a.div(W(),e.bgSource);return Object(i.jsx)(n,{})};function D(){var e=Object(c.a)(["\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: -1;\n        background: #011a25;\n        opacity: 0.8;\n    "]);return D=function(){return e},e}var R=function(e){var n=l.a.div(D());return Object(i.jsx)(n,{})},A=t(16),P=t.n(A);t(25),t(26);var B=function(){return P.a.init(),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(I,{bgSource:"bg.jpg"}),Object(i.jsx)(R,{}),Object(i.jsx)("div",{id:"header",className:"container",children:Object(i.jsxs)("header",{className:"page-header",children:[Object(i.jsx)("h1",{children:"Ruben Vecino"}),Object(i.jsx)("h3",{children:"Aspiring Software Engineer"}),Object(i.jsx)("div",{id:"personal-links",className:"links",children:Object(i.jsx)(u,{types:"linkedin github",size:"30",spacing:"20"})})]})}),Object(i.jsxs)("div",{id:"about",class:"section",children:[Object(i.jsx)("h1",{className:"section-title",children:"About me"}),Object(i.jsxs)("div",{id:"about-content",children:[Object(i.jsx)("div",{"data-aos":"fade-right","data-aos-duration":"1000",children:Object(i.jsx)(z,{id:"headshot",width:"250px",height:"250px",radius:"125px",imgSource:"photo.jpg"})}),Object(i.jsxs)("div",{"data-aos":"fade-left","data-aos-duration":"2000","data-aos-delay":"500",children:[Object(i.jsxs)("p",{class:"description",children:["I am a ",Object(i.jsx)("b",{children:"Computer Systems"})," undergraduate student at the ",Object(i.jsx)("b",{children:"New York City"})," College of Technology. Born in ",Object(i.jsx)("b",{children:"Barranquilla, Colombia"}),", I moved to NYC in 2015 and I am currently looking for internship and/or work opportunities."]}),Object(i.jsxs)("p",{class:"description",children:["Since the moment I wrote my first piece of ",Object(i.jsx)("b",{children:"code"}),", my ever-growing ",Object(i.jsx)("b",{children:"passion"})," for ",Object(i.jsx)("b",{children:"Computer Science"})," has helped me develop skills such as ",Object(i.jsx)("b",{children:"Web Development"})," and ",Object(i.jsx)("b",{children:"Data Analysis & Visualization"}),". As someone who enjoys taking new challenges, I am always on the look to expand my knowledge and learn new disciplines."]})]})]})]}),Object(i.jsxs)("div",{id:"projects",class:"section",children:[Object(i.jsx)("h1",{className:"section-title",children:"Projects"}),Object(i.jsxs)(N,{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)(k,{title:"CTP Portable Website",imgName:"ctp-portable.gif",madeWith:"react html css js",link:"https://ctp-portable.netlify.app/",category:"Web Development",children:"As part of the ctpHomeHacks hackathon, I collaborated with our team's UX designer to develop this landing page for a task management app we proposed. We wanted to make the site as fun and lively as possible with  different animated elements."}),Object(i.jsx)(k,{title:"NYC Data Visualization Project",imgName:"heatmap.png",madeWith:"python",link:"https://www.kaggle.com/rubenvecino/distribution-of-buildings-from-before-1995-in-nyc",category:"Data Science",children:"As part of a research project for my PHYS 1002ID class (Introduction to Physics of Natural Disasters), I developed this heatmap showing the percentage of buildings constructed before 1995 by school districts in New York City. I merged datasets from the NYC Departments of Buildings and City Planning to ensure a total of 1,073,550 buildings to study."}),Object(i.jsx)(k,{title:"HSL-RGB Color Picker",imgName:"color-picker.gif",madeWith:"html css js",link:"https://rubenvecg.github.io/color-picker",category:"Web Development",children:"This front-end only tool allows to preview, save, edit and remove color references. Sliders adjust their colors dynamically so the user gets an idea of how the color will look."})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(k,{title:"Responsive Gym Website",imgName:"gym-site.gif",madeWith:"html css js bootstrap",link:"https://rubenvecg.github.io/gym-site",category:"Web Development",children:"As the final project for my CST 2309 (Web Development) class on Fall 2019, I developed this responsive site using Bootstrap and CSS media queries, as well as native HTML, CSS and Javascript."}),Object(i.jsx)(k,{title:"Minesweeper",imgName:"minesweeper.gif",madeWith:"java",link:"https://github.com/rubenvecg/Minesweeper-Java",category:"Game Development",children:"I enjoy rebuilding classic games and learning the logic behind them. I implemented the flood fill algorithm to reveal all empty cells around the one selected by the player."})]})]})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(B,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.be8ace44.chunk.js.map