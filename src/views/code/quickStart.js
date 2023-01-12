/*
 * @Author: youngsuper 1406422800@qq.com
 * @Date: 2023-01-12 23:57:44
 * @LastEditors: youngsuper 1406422800@qq.com
 * @LastEditTime: 2023-01-13 01:42:26
 * @FilePath: /VUEDocument0907/src/views/code/quickStart.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const code = {
  code1: `> npm init vue@latest`,
  code2: `Project name: ... <your project name>
Add TypeScript? ... No / Yes
Add JSX Support? ... No / Yes
Add Vue Router for Single Page Application development? ... No / Yes
Add Pinia for state management? ... No / Yes
Add Vitest for unit testing? ... No / Yes
Add Cypress for both Unit and End-to-End testing? ... No / Yes
Add ESLint for code quality? ... No / Yes
Add Prettier for code formatting? ... No / Yes

Scaffolding project in ./<your-project-name>...
Done.`,
  code3: `> cd <your-project-name>
> npm install
> npm run dev`,
  code4: `> npm run build`,
  code5: `<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>`,
  code6: `<script src="https://unkpg.com/vue@3/dist/vue.global.js "></script>

<div id="app">{{message}}</div>
<script>
  const {createApp}  = Vue
  createApp({
    data(){
      return{
        message:'Hello Vue!'
      }
    }
  }).mount('#app')
</script>
`,
  code7: `<div id="app">{{message}}</div>

<script type="module">
  import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
  createApp({
    data(){
      return {
        message:'Hello Vue'
      }
    }
  })
</script>  `,
  code8: `import {createApp} from 'vue'`,
  code9: `<script type="importmap">
  {
    "imports":{
      "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
    }
  }
  </script>
  <div id="app">{{message}}</div>
  <script type="module">
    import {createApp} from 'vue'

    createApp({
      data(){
        return {message:'Hello Vue!'}
      }
    }).mount("#app")
  `,
};
export { code }