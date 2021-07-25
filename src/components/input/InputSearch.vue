<template>
  <div id="input-container">
    <span class="material-icons">search</span>
    <input :value="value" placeholder="O que você procura?"  />
  </div>
</template>

<script>
export default {
  name: 'InputSearch',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
#input-container {
  position: relative;
  display: flex;
  align-content: center;
  align-items: center;
}

#input-container > span {
  position: absolute;
  margin-left: 6px;
}

#input-container > input {
  padding: 8px 8px 8px 30px;
}
input {
  width: 100%;
  background: #ffffff;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  border-radius: 50px;
}
input::placeholder {
  font-weight: normal;
  font-size: 12px;
  line-height: 120%;
  color: #000;
}
input:focus-visible {
    outline: none;
}
</style>
