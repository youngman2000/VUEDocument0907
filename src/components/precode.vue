<template>
  <div>{{ value }}</div>
</template>

<script>
export default {
  name: "precode",
  props: {
    value: String
  }
};
</script>

<style scoped>
div {
  background: #f1f1f1;
  display: inline-block;
  padding: 0 6px;
  border-radius: 3px;
  color: #3b9c71;
}

</style>