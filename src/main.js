/*
 * @Author: youngsuper 1406422800@qq.com
 * @Date: 2022-09-07 15:39:46
 * @LastEditors: youngsuper 1406422800@qq.com
 * @LastEditTime: 2022-09-07 19:22:10
 * @FilePath: /VUEDocument0907/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
// highlightjs
import "highlight.js/styles/atom-one-dark.css";
import "highlight.js/lib/common"; // side effect import will not be optimized out by webpack
import hljsVuePlugin from "@highlightjs/vue-plugin";

import precode from "./components/precode.vue";

const app = createApp(App);

app.use(router).use(hljsVuePlugin);
app.component("PreCode", precode);

app.mount("#app");
