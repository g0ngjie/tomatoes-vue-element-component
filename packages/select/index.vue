<template>
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      @change="onChange"
    >
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: "to-select",
  data() {
    return {
      value: "",
    };
  },
  props: ["options"],
  methods: {
    onChange(e) {
      this.$emit("onchange", e);
    },
  },
};
</script>

<style>
</style>