<!--
 * @Author: youngsuper 1406422800@qq.com
 * @Date: 2022-09-07 23:32:15
 * @LastEditors: youngsuper 1406422800@qq.com
 * @LastEditTime: 2022-09-08 00:04:09
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
        <exclamation-circle-outlined :style="{color:'#3b9c71'}" />
        前提条件
      </h5>
      <ul>
        <li>熟悉命令行</li>
        <li>已安装16.0或更高的版本的Node.js</li>
      </ul>
    </a-card>
    <p></p>
    <p>
      在本节中，我们将介绍如何在本地搭建Vue单页应用。创建的应用将基于Vite的构建设置，并允许我们使用Vue的单文件组件（SFC）。</p>
    <p>确保你安装了最新版本的Node.js,然后再命令行中运行以下命令（不要带上
      <PreCode value=">"></PreCode>
      符号）
    </p>
    <highlightjs :code="code.code1"></highlightjs>
    <p>
      这一指令将会安装并执行create-vue,它是Vue官方项目脚手架工具。你将会看到注入TypeScript和测试支持之类的可选功能提示：</p>
    <a-divider />
    <h3>采用构建工具</h3>
    <p>
      构建工具让我能使用Vue单文件组件（SFC）。Vue官方的构建工具流程是基于Vite的，一个现代、轻量、极速的构建工具。
    </p>
    <h4>线上构建</h4>
    <p>
      你可以通过StackBlitz在线使用单文件组件尝试Vue。StackBlitz直接在浏览器运行了基于Vite的构建设置，所以在和本地设置几乎完全一致，单不需要在机器上安装任何依赖。
    </p>
    <h4>本地构建</h4>
    <el-alert title="前提条件" show-icon type="warning"
              description="熟悉命令行；已安装15.0或者更高版本的Node.js">
    </el-alert>
    <p>为了在机器上创建一个启用构建工具的Vue项目，请在命令行中运行下面的指令（不要带上>符号)：</p>
    <p>npm init vue@latest</p>
    <p>
      这一指令会安装并执行create-vue，它是Vue官方的项目脚手架工具。你将会看到一些诸如TypeScript和测试支持之类的可选功能提示：</p>
    <p>
      如果你不确定是否要开启某个功能，你可以直接按下回车键选择No。在项目被创建后，通过一下步骤安装依赖并启动开发服务器：</p>
    <p>你现在应该已经运行起来了你的第一个Vue项目！请注意，生成的项目中实例组件是使用组合式API和《script
      setup》编写，而非选项式API。下面是一些补充提示。</p>
    <p>推荐使用IDE配置是Visual Studio Code + Volar 扩展 。如果使用其他编辑器，参考IDE支持章节。</p>
    <p>更多工具细节，包括与后端框架整合，我们会在工具链指南进行讨论。</p>
    <p>要了解构建工具Vite更多背后细节，请查看Vite文档 。</p>
    <p>如果你使用Typescript,请阅读TypeScript使用指南。</p>
    <p>当你准备将应用发布到生成环境时，请运行：</p>
    <p>npm run build</p>
    <p>
      此命令会在./dist文件夹中为你的应用创建一个生成环境的构建版本。关于将应用上线生产环境的更多内容，请阅读生产环境部署指南。</p>
    <el-divider />
    <h4>不使用构建工具</h4>
    <p>若不想经过构建流程就可以使用Vue，请直接复制下面的代码到一个HTML文件中，并在浏览器中打开它：</p>
    <p>

    </p>
  </div>

</template>
<script>
import { ExclamationCircleOutlined } from "@ant-design/icons-vue";
import { code } from "@/views/code/quickStart.js";

export default {
  components: {
    ExclamationCircleOutlined
  },

  setup() {
    return {
      code
    };
  }
};

</script>
