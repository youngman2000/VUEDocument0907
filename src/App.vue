<script setup>

import { RouterLink, RouterView } from "vue-router";
import sider from "@/views/layout/sider.vue";

</script>

<template>
  <a-layout>
    <a-layout-header :style="{background:'#fff'}">header</a-layout-header>
    <a-layout>
      <sider></sider>
      <a-layout>
        <a-layout-content :style="{padding:'24px',margin:0,minHeight:'200px'}">
          <RouterView />
        </a-layout-content>
      </a-layout>
    </a-layout>
    <a-layout-footer>footer</a-layout-footer>
  </a-layout>
</template>

