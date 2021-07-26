<template>
  <div class="card card-admin">
    <h3>Administrador</h3>
    <hr />
    <div class="avatar">
      <img alt="avatar admin" :src="require(`@/assets/avatar/${admin.avatar}`)" />
      <h4>{{ admin.name }}</h4>
      <div>
        <img
          v-for="inst in 3"
          :key="inst"
          src="../assets/icons/trophy.svg"
          alt="icon trophy"
          class="trophy"
        />
      </div>
      <p>selos disponíveis</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardAdmin',
  data() {
    return {
      admin: {
        id: 1,
        name: 'João das Couves',
        avatar: 'avatar1.png',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.card-admin {
  padding-bottom: 26px;
  hr {
    border: 1px solid #f1f4f5;
    width: 90%;
  }
  h3 {
    font-weight: bold;
    font-size: 14px;
    line-height: 110%;
    margin: inherit;
    margin: 16px;
  }
  .avatar {
    h4 {
      margin: inherit;
      margin-top: 8px;
      font-weight: 600;
      font-size: 12px;
      line-height: 120%;
    }
    img {
      margin-top: 9px;
    }
    p {
      margin: 5px;
      font-size: 12px;
      line-height: 120%;
    }
    div img {
      margin-top: 32px;
    }
    .thropy {
      margin-left: 3px;
    }
  }
}
</style>
