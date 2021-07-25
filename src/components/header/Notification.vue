<template>
  <div class="notification" @click="openNotification">
    <span class="material-icons">notifications</span>
    <span v-if="numberNotification > 0" class="badge">{{ numberNotification }}</span>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    numberNotification: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    openNotification() {
      this.$emit('clearNotification')
    },
  },
}
</script>

<style lang="scss" scoped>
.notification {
  color: #30455c;
  position: relative;
}

.notification:hover {
  cursor: pointer;
}

.notification .badge {
  position: absolute;
  bottom: 10px;
  left: 11px;
  padding: 5px;
  font-size: 8px;
  border-radius: 50%;
  background: #d00000;
  color: white;
}
</style>
