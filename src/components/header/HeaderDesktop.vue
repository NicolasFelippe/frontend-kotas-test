<template>
  <header>
    <div class="logo" >
      <img src="@/assets/logo.png" alt="logo kotas" />
      <InputSearch v-model="text" style="width: 500px;" class="search" />
    </div>
    <div>
      <Menus />
    </div>
  </header>
</template>

<script>
import InputSearch from '@/components/input/InputSearch'
import Menus from './Menus'

export default {
  name: 'HeaderDesktop',
  components: {
    InputSearch,
    Menus,
  },
  data() {
    return {
      text: '',
    }
  },
}
</script>
<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background: #fff;
  margin-bottom: 2rem;
  justify-content: space-between;
  box-shadow: 0px 1px 1px #E1E1E1;
  .logo {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    .search {
      margin-left: 2rem;
    }
  }
}
</style>
