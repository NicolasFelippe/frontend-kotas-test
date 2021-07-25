<template>
  <div>
    <span class="material-icons">{{ icon }}</span>
    <h4>{{ label }}</h4>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    icon: {
      type: String,
      require: true,
    },
    label: {
      type: String,
      require: true,
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  span {
    color: #30455c;
    font-size: 20px;
    margin-right: 10px;
  }
  h4 {
    font-weight: normal;
    font-size: 12px;
    line-height: 120%;
  }
}
div:hover {
  cursor: pointer;
}
</style>
