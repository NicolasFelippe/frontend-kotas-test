<template>
  <div>
    <img :src="require(`@/assets/avatar/${path}`)" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    path: {
      type: String,
      require: true,
    },
  },
}
</script>

<style lang="scss" scoped>
img {
  border-radius: 50%;
  width: 32px;
  border: 1px solid #01b1ec;
  box-sizing: border-box;
}
</style>
