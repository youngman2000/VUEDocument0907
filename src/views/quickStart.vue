<!--
 * @Author: youngsuper 1406422800@qq.com
 * @Date: 2022-09-07 23:32:15
 * @LastEditors: youngsuper 1406422800@qq.com
 * @LastEditTime: 2023-01-13 01:44:47
 * @FilePath: /VUEDocument0907/src/views/quickStart.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <h2>快速上手</h2>
    <p>
      根据你的使用场景和个人偏好，在使用Vue时，你可以选择是否采用构建工具流程。
    </p>
    <h3>创建一个Vue应用</h3>
    <a-card>
      <h5>
        <exclamation-circle-outlined :style="{ color: '#3b9c71' }" />
        前提条件
      </h5>
      <ul>
        <li>熟悉命令行</li>
        <li>已安装16.0或更高的版本的Node.js</li>
      </ul>
    </a-card>
    <p></p>
    <p>
      在本节中，我们将介绍如何在本地搭建Vue单页应用。创建的应用将基于Vite的构建设置，并允许我们使用Vue的单文件组件（SFC）。
    </p>
    <p>
      确保你安装了最新版本的Node.js,然后再命令行中运行以下命令（不要带上
      <PreCode value=">"></PreCode>
      符号）
    </p>
    <highlightjs :code="code.code1"></highlightjs>
    <p>
      这一指令将会安装并执行create-vue,它是Vue官方项目脚手架工具。你将会看到注入TypeScript和测试支持之类的可选功能提示：
    </p>
    <highlightjs :code="code.code2"></highlightjs>
    <p>
      如果不确定是否要开启某个功能，你可以直接按下回车选择 No
      。在项目被创建后，通过一下步骤安装依赖并启动开发服务器：
    </p>
    <highlightjs :code="code.code3"></highlightjs>
    <p>
      你现在已经已经运行起来了你的第一个Vue项目！请注意，生成的项目中的示例组件使用的组合是API和
      <PreCode value="<script setup>" />,而非选项式API。下面是一些补充提示：
    </p>
    <ul>
      <li>
        推荐的IDE配置是Visual Studio Code + Volar
        扩展。如果使用其他编辑器，参考IDE支持章节。
      </li>
      <li>
        更多工具的细节，包括与后端框架的整合，我们会在工具链指南进行讨论。
      </li>
      <li>要了解构建工具Vite更多背后细节，请查看Vite文档。</li>
      <li>如果你使用Typescript，请阅读TypeScript使用指南。</li>
    </ul>
    <p>当你准备将应用发布到生成环境时，请运行：</p>
    <highlightjs :code="code.code4"></highlightjs>
    <p>
      此命令会在<PreCode value="./dist"></PreCode
      >文件夹中为你的应用创建一个生产环境的构建版本。关于将应用上线生产环境的更多内容。请阅读生产环境部署指南。
    </p>
    <a-divider />
    <h3>通过CDN使用Vue</h3>
    <p>你可以借助script标签直接通过CDN来使用Vue</p>
    <highlightjs :code="code.code5"></highlightjs>
    <p>
      这里我们使用unpkg，但你也可以使用任何提供npm包服务的CDN，例如jsdelivr或cdnjs。当然，你也可以下载此文件自行提供服务。
    </p>
    <p>
      通过CDN使用Vue是，不涉及“构建步骤”。这使得设置更加简单，并且可以用于增强静态的HTML或与后端框架的集成。但是，你无法使用单文件组件（SFC）语法。
    </p>
    <h3>使用全局构建版本</h3>
    <p>
      上面的例子使用全局构建版本的Vue，该版本的所有顶层API都以属性的形式暴露在全局的Vue对象上。这里有一个使用全局构建版本的例子：
    </p>
    <highlightjs :code="code.code6"></highlightjs>
    <h3>使用ES模块构建版本</h3>
    <p>
      在本文档的其余部分我们使用的主要是ES模块的语法。现在浏览器大多数都已支持ES模块。因此我们可以像通过CDN以及元素ES模块使用Vue：
    </p>
    <highlightjs :code="code.code7"></highlightjs>
    <p>
      注意我们使用了<PreCode value="<script type='module'>" />,切导入的CDN URL
      指向的是Vue 的ES模块构建版本。
    </p>
    <h3>采用构建工具</h3>
    <p>
      构建工具让我能使用Vue单文件组件（SFC）。Vue官方的构建工具流程是基于Vite的，一个现代、轻量、极速的构建工具。
    </p>
    <h4>线上构建</h4>
    <p>
      你可以通过StackBlitz在线使用单文件组件尝试Vue。StackBlitz直接在浏览器运行了基于Vite的构建设置，所以在和本地设置几乎完全一致，单不需要在机器上安装任何依赖。
    </p>
    <h3>启用Import maps</h3>
    <p>
      在上面的示例中，我们使用了完整CDN
      URL来导入，但在文档的其余部分中，你将看到如下代码：
    </p>
    <highlightjs code="code.code8"></highlightjs>
    <p>
      我们可以使用导入映射表（Import Maps） 来告诉浏览器如何定位到导入的vue:
    </p>
    <highlightjs :code="code.code9"> </highlightjs>
    <p>
      你也可以在映射表中添加其他的依赖--但请务必确保你使用的是该库的ES模块版本。
    </p>
    <a-card>
      <h4>
        <ExclamationCircleOutlined
          :style="{ color: '#3b9c71' }"
        ></ExclamationCircleOutlined>
        导入映射表的浏览器支持情况
      </h4>
      <div>
        目前只有基于Chromium的浏览器支持导入映射表，所以我们推荐你在学习过程中使用Chrome或Edge。
      </div>
    </a-card>
  </div>
</template>
<script>
import { ExclamationCircleOutlined } from "@ant-design/icons-vue";
import { code } from "@/views/code/quickStart.js";

export default {
  components: {
    ExclamationCircleOutlined,
  },

  setup() {
    return {
      code,
    };
  },
};
</script>
