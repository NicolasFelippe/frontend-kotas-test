<template>
  <div class="card">
    <div />
    <h3>Sobre o grupo</h3>
    <div>
      <span class="material-icons">add</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardGroupAbout',
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  h3 {
    font-weight: bold;
    font-size: 14px;
    line-height: 110%;
  }
}
</style>
