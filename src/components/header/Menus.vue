<template>
  <div>
    <Menu icon="add" label="Criar Grupo" />
    <Menu icon="groups" label="Meus Grupos" />
    <Notification
      :numberNotification="notification"
      @clearNotification="notification = 0"
    />
    <Avatar path="avatar1.png" />
  </div>
</template>

<script>
import Menu from './Menu'
import Notification from './Notification'
import Avatar from '../Avatar'

export default {
  name: 'Menus',
  components: {
    Menu,
    Notification,
    Avatar,
  },
  data() {
    return {
      notification: 2,
    }
  },
  mounted() {
    setInterval(() => {
      this.notification += 1
    }, 3000)
  },
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  margin-left: 20px;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
}
</style>
