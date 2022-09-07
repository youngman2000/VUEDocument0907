<template>
  <a-layout-sider class="sider" theme="light" width="200">
    <a-typography-text strong>API风格偏好</a-typography-text>
    <div class="api-switch">
      <a-row>
        <a-col :span="8" :class="apiChecked?'':'checked'">选项式</a-col>
        <a-col :span="8">
          <a-switch size="small" v-model:checked="apiChecked"></a-switch>
        </a-col>
        <a-col :span="8" :class="apiChecked?'checked':''">组合式</a-col>
      </a-row>
    </div>
    <a-divider></a-divider>
    <div v-for="item in link">
      <div v-if="!item.href">
        <a-typography-title :level="5">{{ item.name }}</a-typography-title>
      </div>
      <div v-else>
        <router-link :to="item.href">{{ item.name }}</router-link>
      </div>
    </div>
  </a-layout-sider>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const apiChecked = ref(false);
    return {
      apiChecked,
      link: [
        { name: "开始" },
        { name: "简介", href: "introduction" },
        { name: "快速上手", href: "quick-start" }
      ]
    };
  }
};

</script>

<style scoped lang="scss">
.sider {
  padding: 20px;
}

.api-switch {
  padding: 5px;
  margin-top: 5px;
  border-radius: 5px;
  font-size: 12px;
  background: #eee;
  color: #ccc;

  .checked {
    //font-weight: bolder;
    color: #000;
  }
}

</style>