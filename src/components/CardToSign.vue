<template>
  <div>
    <div class="card">
      <div class="content">
        <div class="row">
          <h3 class="text-grey">Mensalidade</h3>
          <h3 class="sub-text text-grey">{{ sumMonthlyPayment }}</h3>
        </div>
        <div class="row">
          <h3 class="text-grey">Kotas</h3>
          <h3 class="sub-text text-grey sum-kotas">
            {{ sumKotas }}
            <button class="btn-rounded" @click="sumKotas += 1">
              <span class="material-icons">add</span>
            </button>
            <button class="btn-rounded" @click="decreaseKotas">
              <span class="material-icons">remove</span>
            </button>
          </h3>
        </div>
        <div class="row">
          <div class="sub-row">
            <h3 class="text-grey">Caução</h3>
            <span class="material-icons icon-grey">info</span>
          </div>
          <h3 class="sub-text text-grey">{{ sumSecurityDeposit }}</h3>
        </div>
        <div>
          <div class="row sign">
            <h3 class="bold text-black">Total da Inscrição</h3>
            <h3 class="bold text-black">{{ sumTotal }}</h3>
          </div>
          <div class="column">
            <div>
              <SliderRadioButton />
            </div>
            <button class="btn-participate">Participar</button>
          </div>
        </div>
      </div>
    </div>
    <p class="detail">Você ainda não será cobrado</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SliderRadioButton from './radio-button/SliderRadioButton'

export default {
  name: 'CardToSign',
  components: {
    SliderRadioButton,
  },
  data() {
    return {
      sumKotas: 1,
      monthlyPayment: 15,
      securityDeposit: 15,
    }
  },
  computed: {
    ...mapGetters('question', ['questions']),
    sumMonthlyPayment() {
      return this.formatCurrency(this.monthlyPayment * this.sumKotas)
    },
    sumSecurityDeposit() {
      return this.formatCurrency(this.securityDeposit * this.sumKotas)
    },
    sumTotal() {
      return this.formatCurrency(
        (this.monthlyPayment + this.securityDeposit) * this.sumKotas,
      )
    },
  },
  methods: {
    formatCurrency(value) {
      return new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }).format(value)
    },
    decreaseKotas() {
      if (this.sumKotas > 1) this.sumKotas -= 1
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  padding: 0 0 11px 0;
  text-align: left;
  h3 {
    font-size: 14px;
    line-height: 110%;
  }
  .content {
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    .row {
      padding: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      align-content: center;
      border-bottom: 1px solid #f1f4f5;
      .sub-row {
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
        align-items: center;
      }
    }
    .sign {
      border: none;
      margin-bottom: 18px;
    }
    .column {
      display: flex;
      flex-direction: column;
      align-items: center;
      div {
        width: 90%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: center;
      }
    }
    .sum-kotas {
      display: flex;
      flex-direction: row;
      align-content: center;
      justify-content: center;
      align-items: center;
      .btn-rounded {
        margin-left: 5px;
        border: none;
        border-radius: 50%;
        padding: 2px 4px;
        color: #fff;
        background: #01b1ec;
        span {
          font-size: 9px;
        }
      }
    }
  }
  .btn-participate {
    background: #01b1ec;
    border-radius: 5px;
    border: none;
    color: #fff;
    padding: 15px 100px 15px 100px;
    font-weight: bold;
    font-size: 14px;
    line-height: 110%;
    margin-top: 16px;
  }
  .detail {
    font-weight: 300;
    font-size: 10px;
    line-height: 120%;
    color: #616161;
  }
}
</style>
