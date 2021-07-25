<template>
  <footer class="footer-mb">
    <div>
      <h5>R$ 15,90/mês</h5>
      <div>
        <h4 @click="isModalVisible = !isModalVisible">Ver todos os valores</h4>
      </div>
    </div>
    <div>
      <button>Participar</button>
    </div>
    <Dialog v-show="isModalVisible" @close="closeModal">
      <template v-slot:header> Valores </template>

      <template v-slot:body>Valores etc </template>
    </Dialog>
  </footer>
</template>

<script>
import Dialog from '@/components/dialog/Dialog'

export default {
  name: 'FooterMobile',
  components: {
    Dialog,
  },
  data() {
    return {
      isModalVisible: false,
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    },
  },
}
</script>

<style lang="scss" scoped>
.footer-mb {
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  background: #ffffff;
  padding: 10px 11px 12px 13px;
  h5 {
    font-weight: bold;
    font-size: 14px;
    line-height: 110%;
  }
  div > h4 {
    margin-top: 9px;
  }
  div > h4:hover {
    cursor: pointer;
  }
  h4 {
    font-weight: normal;
    font-size: 12px;
    line-height: 120%;
    color: #0cd4ad;
  }
  button {
    background: #01b1ec;
    border-radius: 5px;
    padding: 16px 23px 16px 23px;
    border: none;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    line-height: 110%;
  }
}
</style>
