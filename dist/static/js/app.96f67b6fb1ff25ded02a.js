webpackJsonp([1],{CtXE:function(n,e){},NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t("/5sW"),o=t("//Fk"),i=t.n(o),s=t("Xxa5"),l=t.n(s),u=t("exGp"),a=t.n(u),c=t("OEdS"),d=t.n(c),h=t("EFqf"),m=t.n(h),p={name:"App",components:{},data:function(){return{enableHtml:!1,currentStyle:"",fullStyle:["/*\n* Inspired by http://strml.net/\n* 大家好，我是方方\n* 二月了，好多公司都在招聘，你是不是也在准备简历呀。\n* 说做就做，我也来写一份简历！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222); background: rgb(0,43,54);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n/* 代码高亮 */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n\n\n","\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n",'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"周莎\n----\n\n* **北京邮电大学**  计算机学院  2016.9-至今（2019.7）\n> 计算机技术 硕士\n* **中国农业大学**  信息与电气工程学院  2012.9-2016.7\n> 计算机科学与技术  学士  GPA3.63/4.0  排名2/30\n\n技能\n----\n\n* HTML、CSS、JavaScript\n* jQuery、Boostrap\n* git、webpack、nodejs、requirejs、es6\n* angular1、vue2\n\n实习经历\n----\n\n1. 搜狐焦点 生态平台部 前端开发实习生\n2. 百度 搜索生态质量部 前端开发实习生\n\n实践经验\n----\n\n* [2048小游戏](https://sa93saya.github.io/2048/)\n\n自我评价\n----\n\n> 喜欢新技术、新产品，对前端开发有浓厚的兴趣和热情。做事认真负责，遇到问题沉着冷静，工作态度积极稳重，为人踏实诚恳。\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){var n=this;return a()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.slowlyShowStyle(0);case 2:return e.next=4,n.slowlyShowResume();case 4:return e.next=6,n.slowlyShowStyle(1);case 6:return e.next=8,n.showHtml();case 8:return e.next=10,n.slowlyShowStyle(2);case 10:case"end":return e.stop()}},e,n)}))()},slowlyShowStyle:function(n){var e=this;return new i.a(function(t,r){var o=e.interval,i=a()(l.a.mark(function e(){var r,s,u,a,c,d=this;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:s=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),u=s-r.length,this.currentStyle.length<s?(a=this.currentStyle.length-u,c=r.substring(a,a+1)||" ",this.currentStyle+=c,"\n"===r.substring(a-1,a)&&this.$refs.xxx&&this.$nextTick(function(){d.$refs.xxx.scrollTop=1e5}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},slowlyShowResume:function(){var n=this;return new i.a(function(e,t){var r=n.fullMarkdown.length,o=0,i=setInterval(function(){n.currentMarkdown=n.fullMarkdown.substring(0,o),n.$nextTick(function(){n.$refs.xxx.scrollTop=1e5}),o===r-1?(window.clearInterval(i),e()):o+=1},0)})},showHtml:function(){var n=this;return new i.a(function(e,t){n.enableHtml=!0,n.currentMarkdown=m()(n.currentMarkdown),e()})}},computed:{styleCode:function(){return"<style>"+this.currentStyle+"</style>"},highlightedCode:function(){return d.a.highlight(this.currentStyle,d.a.languages.css)}}},f={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("div",{ref:"xxx",staticClass:"styleEditor"},[t("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}},[n._v("    "+n._s(n.currentStyle)+"\n    ")])]),n._v(" "),t("div",{staticClass:"resumeEditor"},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.currentMarkdown)}}):t("pre",[n._v(n._s(n.currentMarkdown))])]),n._v(" "),t("div",{domProps:{innerHTML:n._s(n.styleCode)}})])},staticRenderFns:[]};var w=t("VU/8")(p,f,!1,function(n){t("CtXE")},null,null).exports;r.a.config.productionTip=!1,new r.a({el:"#app",render:function(n){return n(w)}})}},["NHnr"]);
//# sourceMappingURL=app.96f67b6fb1ff25ded02a.js.map