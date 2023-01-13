<template>
  <div class="xtx-checkbox" @click="toggle">
    <i class="iconfont icon-checkbox" v-if="isCheckbox"></i>
    <i class="iconfont icon-unchecked" v-else></i>
    <span v-if="$slots.default"><slot /></span>
  </div>
</template>

<script>
//  import { ref, watchEffect } from "vue";
import { useVModel } from "@vueuse/core";

export default {
  name: "XtxCheckbox",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    // const isCheckbox = ref(true);
    // useVModel 实现双向数据绑定（返回值是一个新的响应式数据,可在当前模板中直接使用）
    const isCheckbox = useVModel(props, "modelValue", emit);
    const toggle = () => {
      isCheckbox.value = !isCheckbox.value;
      // 监听内布值变化,同步给外布值
      emit("update:modelValue", isCheckbox.value);
    };
    // 监听外部值变化,同步给内布值
    /*   watchEffect(() => {
      isCheckbox.value -= props.modelValue;
    }); */
    return { isCheckbox: toggle };
  },
};
</script>

<style lang="less" scoped>
.xtx-checkbox {
  display: inline-block;
  margin-right: 2px;
  .icon-checked {
    color: @xtxColor;
    ~ span {
      color: @xtxColor;
    }
  }
  i {
    position: relative;
    top: 1px;
  }
  span {
    margin-left: 2px;
  }
}
</style>
