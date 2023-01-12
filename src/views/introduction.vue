<!--
 * @Author: youngsuper 1406422800@qq.com
 * @Date: 2022-09-07 16:53:00
 * @LastEditors: youngsuper 1406422800@qq.com
 * @LastEditTime: 2022-09-07 19:24:16
 * @FilePath: /VUEDocument0907/src/views/introduction.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-typography-title :level="3">简介</a-typography-title>
  <a-typography-title :level="4">什么是Vue?</a-typography-title>
  <div>
    Vue(发音为/vju:/,类似view)是一款构建用户界面的的JavaScript框架。它基于HTML,CSS,JavaScript的标准构建，并提供了一套声明式的、组件化的编程思想，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue都可以胜任。
  </div>
  <p>下面是一个基本的示例：</p>
  <highlightjs :code="code1"></highlightjs>
  <highlightjs :code="code2"></highlightjs>
  <p>结果展示：</p>
  <a-button>Count is: 4</a-button>
  <p>上面的示例展示了Vue的两个核心功能：</p>
  <ul>
    <li>
      <strong>声明式渲染：</strong>
      Vue核心基于标准HTML拓展了一套模板语法，可以使我们声明式的描述最终输出的HTML和JavaScript状态之间的关系。
    </li>
    <li>
      <strong>响应式：</strong>
      Vue会自动跟踪JavaScript状态变化并在改变发生时响应式地更新DOM。
    </li>
  </ul>
  <p>
    你可能已经有了些疑问--先别急，后面的文档中我们会详细地介绍每一个细节。现在，请你看下，以确保你对Vue作为一个框架到底提供了什么有一个宏观的了解。
  </p>
  <a-alert message="预备知识" type="warning" show-icon description="文档接下来的部分假设你对HTML、CSS和JavaScript已经基本熟悉。如果你对前端开发完全陌生，最好不要直接在一开始
  针对一个框架学习--最好掌握了基础知识再回到这里。如果之前有其他框架的经验会很有帮助，但不是必须得。">

  </a-alert>
  <a-divider></a-divider>
  <a-typography-title :level="3">渐进式框架</a-typography-title>
  <p>
    Vue是一个框架，也是一个生态。其功能覆盖了大部分前端开发常见的需求。但web世界也是十分多样化的，不同的开发者在web上构建的东西可能在形式和规模上会有很大的不同。考虑到这一点，Vue在设计上非常的注重灵活性和“可以被逐渐集成”这个特点。根据你的需求场景，你可以用不用的方式使用Vue：</p>
  <ul>
    <li>无需构建步骤，渐进式增强静态HTML</li>
    <li>在任何页面中作为Web Components嵌入</li>
    <li>单页应用（SPA）</li>
    <li>全栈/服务端渲染（SSR）</li>
    <li>JamStack/静态站点生成（SSG）</li>
    <li>开发桌面端、移动端、WebGL，甚至是命令行终端中的界面</li>
  </ul>
  <p>
    如果你是初学者，可能会觉得这些概念有些复杂。别担心，理解教程和指南只需要你具备基础的HTML和JavaScript知识。你即使不是这方面的专家也可以跟上。</p>
  <p>
    如果你是有经验的开发者，希望了解以最合适的方式在项目中引入Vue，或者对上述概念比较好奇，我们在使用Vue的多种方式中讨论了他们更多的细节。</p>
  <p>
    无论再怎么灵活，Vue的核心知识在所有这些用例中都是通用的。即使你现在只是一个初学者，随着你的不断成长，到未来有能力实现更复杂的项目时，这一路上的获得的知识依然适用。如果你已经是一个老手，你可以根据实际场景来选择Vue的最佳方式，在各种场景下都可以保持同样的开发效率。这就是我们为什么将Vue成为“渐进式框架“：它是一个可以与你共同成长、适应你不同需求的框架。</p>
  <el-divider></el-divider>
  <h3>单文件组件</h3>
  <p>在大多数启动了构建工具的Vue项目中，我们可以使用一种类似HTML格式的文件来书写Vue组件，它被称为单文件组件（也被称为*.vue文件，英文Single-file
    components,缩写为SFC）。顾名思义，Vue的单文件组件会将一个组件的逻辑（JavaScript），模板（HTML）和样式（CSS）封装在同一个文件里。下面我们将用单文件组件的格式重写上面的计数器示例：</p>
  <p>
    单文件组件是Vue的标志性功能。如果你的用例需要进行构建，我们推荐用它来编写Vue组件。你可以在后续相关章节里了解跟多关于单文件组件的用法和用途。但你暂时只需要知道Vue会帮你处理所有这些构建工具的配置就好。</p>
  <el-divider />
  <h3>API风格</h3>
  <p>Vue的组件可以按两种不同的风格书写：选项式API和组合式API。</p>
  <h4>选项式API（Options API）</h4>
  <p>
    使用选项式API，我们可以用包含多个选项的对象来描述组件的逻辑，例如data、methods和mounted。选项所定义的属性都会暴露在函数内部的this上，它会指向当前的组件实例。</p>
  <h4>组合式API（Composition API）</h4>
  <p>通过组合式API，我们可以使用导入的API函数来描述组件的逻辑。在单文件组件中，组合式API通常会与《script setup》搭配使用。这个setup
    attribute是一个标识，告诉Vue需要在编译时进行一些处理，让我们可以更简洁地使用组合式API。比如，《script
    setup》中导入和顶层变量/函数都能够在模板中可以直接使用。 </p>
  <h4>该选哪一个？</h4>
  <p>
    两种风格都能够覆盖大部分的应用场景。他们只是同一个底层系统所提供的两套不同的接口。实际上，选项式API实在组合式API的基础上实现的！关于Vue的基础概率和知识在他们之间都是通用的。</p>
  <p>
    选项式API以“组件实例"的核心概念为中心，（即上述例子的this），对于有面向对象语言背景的用户来说，这通常与基于类的心智模型更为一致。同时，它将响应式相关的细节抽象出来，并强制按照选项来组织代码，从而对初学者而言更为友好。</p>

  <p>
    组合式API的核心思想是直接在函数作用域内定义响应式状态变量，并将从多个函数中得到的状态组合起来处理复杂问题。这种形式更加自由，也需要你对Vue的响应式系统有更深入的理解才能够高效使用。相应的，它的灵活性也使得组织和重新逻辑的模式更加强大。</p>
  <p>在组合式API FAQ章节中，你可以了解更多关于这两种API风格的对比以及组合式API所带来的潜在收益。</p>
  <p>如果你是Vue新手，这里我们大致的建议：</p>
  <ul>
    <li>
      在学习的过程中，推荐采用自己更易于理解的风格。在强调一下，大部分的核心概念在这两种风格之间都是通用的。熟悉一种风格后，你也能很快理解另一种风格。
    </li>
    <li>在生产项目中：</li>
    <li :style="{marginLeft:'20px'}">
      当你不需要使用构建工具，或者打算主要在低复杂度的场景中使用Vue，例如渐进增强的应用场景中，推荐使用选项式API。
    </li>
    <li :style="{marginLeft:'20px'}">当你打算用Vue构建完整的单页应用，推荐采用组合式API+单文件组件。</li>


  </ul>
  <p>
    在学习阶段，你不必只固收一种风格。在接下来的文档中我们会为你提供一系列两种风格代码的参考，你可以随时通过左上角的API风格来做切换。</p>
</template>
<script>
export default {
  data() {
    return {
      code1: `import {createApp} from vue

createApp({
   data(){
      return{
        count:0
        }
      }
   }).mount('#app')
`,
      code2: `<div id="app">
  <button @click="coutn++">
    Count is :{{count}}
  </button>
</div>`
    };
  }
};
</script>