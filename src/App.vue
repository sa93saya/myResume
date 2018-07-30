<template>
<div id="app">
  <div class="styleEditor" ref="xxx">
    <pre v-html="highlightedCode">
    {{currentStyle}}
    </pre>
    
  </div>
  <div class="resumeEditor">
    <div v-if="enableHtml" v-html="currentMarkdown"></div>
    <pre v-else>{{currentMarkdown}}</pre>
  </div>
  <div v-html="styleCode">

  </div>
</div>
</template>

<script>
import Prism from 'prismjs'
import marked from 'marked'
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      enableHtml:false,
      currentStyle:'',
      fullStyle:[
          `/*
* Inspired by http://strml.net/
* 大家好，我是周莎
* 这是我的动态简历！
*/

/* 首先给所有元素加上过渡效果 */
* {
  transition: all .3s;
}
/* 白色背景太单调了，来点背景 */
html {
  color: rgb(222,222,222); background: rgb(0,43,54);
}
/* 文字离边框太近了 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
}
/* 代码高亮 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }

/* 加点 3D 效果呗 */
html{
  perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}

/* 接下来我给自己准备一个编辑器 */
.resumeEditor{
  position: fixed; right: 0; top: 0;
  padding: .5em;  margin: .5em;
  width: 48vw; height: 90vh;
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}
/* 好了，我开始写简历了 */


`,
          `
/* 这个简历好像差点什么
 * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式
 * 简单，用开源工具翻译成 HTML 就行了
 */
`
          ,
          `
/* 再对 HTML 加点样式 */
.resumeEditor{
  padding: 2em;
}
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '•';
  margin-right: .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}
`],
  currentMarkdown:'',
  fullMarkdown: `周莎 
----

* **北京邮电大学** 计算机学院 2016.9-至今（2019.7）  
***计算机技术 硕士***
* **中国农业大学** 信息与电气工程学院 2012.9-2016.7  
***计算机科学与技术 学士 GPA3.63/4.0 排名2/30***

技能
----

* HTML、CSS、JavaScript
* jQuery、Boostrap
* git、webpack、nodejs、requirejs、es6
* angular1、vue2
* ...

实习经历
----

1. **搜狐焦点**&nbsp;&nbsp;&nbsp;&nbsp;*生态平台部 前端开发实习生*&nbsp;&nbsp;2018-7起
2. **百度**&nbsp;&nbsp;&nbsp;&nbsp;*搜索生态质量部 前端开发实习生*&nbsp;&nbsp;2017-11至2018-3

实践经验
----

* [网页版2048小游戏](https://sa93saya.github.io/2048/)
* [css3属性制作的放射状小图形](https://sa93saya.github.io/Radial_circle/)
* 基于Nodejs对于树莓派的简单开发（读取温湿度、控制led灯...）
* ...

自我评价
----

> 喜欢新技术、新产品，对前端开发有浓厚的兴趣和热情。做事认真负责，遇到问题沉着冷静，工作态度积极稳重，为人踏实诚恳。

`
    }
  },
  created() {
    this.makeResume();
    
  },
  methods: {
    async makeResume() {
      await this.slowlyShowStyle(0);
      await this.slowlyShowResume();
      await this.slowlyShowStyle(1);
      await this.showHtml();
      await this.slowlyShowStyle(2);
    },
    slowlyShowStyle(n){
    return new Promise((resolve, reject) => {
      // var length = this.fullStyle[m].length;
      
      // var n=0;
      // var timer = setInterval(()=>{
      //   this.currentStyle = this.fullStyle[m].substring(0, n);
      //   this.$nextTick(()=>{
      //     this.$refs.xxx.scrollTop = 100000;
      //   })
      //   if (n === length - 1) {
      //     window.clearInterval(timer)
      //     resolve()
      //   }else{
      //     n+=1;
      //   }
      // },0)
      let interval = this.interval
          let showStyle = (async function () {
            let style = this.fullStyle[n]
            if (!style) { return }
            // 计算前 n 个 style 的字符总数
            let length = this.fullStyle.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0)
            let prefixLength = length - style.length
            if (this.currentStyle.length < length) {
              let l = this.currentStyle.length - prefixLength
              let char = style.substring(l, l + 1) || ' '
              this.currentStyle += char
              if (style.substring(l - 1, l) === '\n' && this.$refs.xxx) {
                this.$nextTick(() => {
                  // this.$refs.xxx.goBottom()
                  this.$refs.xxx.scrollTop = 100000;
                })
              }
              setTimeout(showStyle, interval)
            } else {
              resolve()
            }
          }).bind(this)
          showStyle()
    })
    },
    slowlyShowResume() {
      return new Promise((resolve, reject) => {
      var length = this.fullMarkdown.length;
      var n=0;
      var timer = setInterval(()=>{
        this.currentMarkdown = this.fullMarkdown.substring(0, n);
        this.$nextTick(()=>{
          this.$refs.xxx.scrollTop = 100000;
        })
        if (n === length - 1) {
          window.clearInterval(timer)
          resolve()
        }else{
          n+=1;
        }
      },0)
    })
    },
    showHtml() {
      return new Promise((resolve, reject) => {
          this.enableHtml = true;
          this.currentMarkdown = marked(this.currentMarkdown)
          resolve()
        })
    }
  },
  computed: {
    styleCode() {
      return '<style>'+this.currentStyle+'</style>'
    },
    highlightedCode() {
      return Prism.highlight(this.currentStyle, Prism.languages.css)
    },
    // currentMarkdown() {
    //     return this.enableHtml ? marked(this.currentMarkdown) : this.currentMarkdown
    //   }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
