<template>
  <div class="card card-admin">
    <h3>Quem já faz parte</h3>
    <hr />
    <div class="content-members">
      <div v-for="member in members" :key="member.id" class="avatar">
        <img
          :alt="`avatar ${member.name}`"
          :src="require(`@/assets/${member.avatar}`)"
        />
        <h4>{{ member.name }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CardAlreadyPart',
  computed: {
    ...mapGetters('member', ['members']),
  },
}
</script>

<style lang="scss" scoped>
.card-admin {
  hr {
    border: 1px solid #f1f4f5;
    width: 90%;
  }
  h3 {
    font-weight: bold;
    font-size: 14px;
    line-height: 110%;
    margin-bottom: 16px;
  }
  .content-members {
    display: flex;
  }
  .avatar {
    margin-left: 8px;
    h4 {
      font-weight: normal;
      font-size: 10px;
      line-height: 120%;
    }
    img {
      margin-top: 16px;
    }
    p {
      margin: 5px;
    }
  }
}
</style>
