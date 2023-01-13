<template>
  <Transition name="fade-right" mode="out-in">
    <div class="xtx-brand-item" :key="id">
      <!-- 跳转链接or文本 -->
      <RouterLink v-if="path" :to="path"><slot /> </RouterLink>
      <span v-else><slot /></span>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "XtxBreadItem",
  props: {
    path: {
      type: String,
    },
    id: {
      type: String,
    },
  },
};
</script>

<style lang="less" scoped>
.xtx-brand-item {
  a {
    color: #666;
    transform: all 0.4s;
    &:hover {
      color: @xtxColor;
    }
  }
}
</style>
