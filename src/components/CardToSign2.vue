<template>
    <div class="card">
      <ul>
        <li>
          <p>Mensalidade</p>
          <p>R$ 15,00</p>
        </li>
        <li>
          <div>
            <p>Kotas</p>
            {{ number }} <button @click="number += 1">+</button> <button @click="number -= 1">-</button>
          </div>
        </li>
        <li>
          <div>
            <p>Caução</p>
             <span class="material-icons">info</span>
             <p>R$15,00</p>
          </div>
        </li>
        <li>Total da Inscrição</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'CardToSign',
  data() {
    return {
      number: 0,
    }
  },
}
</script>

<style lang="scss" scoped>
ul{
  list-style: none;
}
</style>
