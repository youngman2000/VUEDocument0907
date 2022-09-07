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
    <el-divider />
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
  </div>
</template>
