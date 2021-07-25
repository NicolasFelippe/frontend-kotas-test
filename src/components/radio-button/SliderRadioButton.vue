<template>
  <div class="group-radio">
    <RadioButton
      labelTop="R$30,00"
      label="Assinatura"
      name="sign"
      :classLabelTop="[labelTop]"
      :classLabel="[label]"
      value="1"
    />
    <div class="space" />
    <RadioButton
      labelTop="R$15,00"
      label="Segundo mês"
      name="sign"
      :classLabelTop="[labelTop]"
      :classLabel="[label]"
      value="2"
    />
    <div class="space" />
    <RadioButton
      labelTop="R$0,00"
      label="Último mês"
      name="sign"
      :classLabelTop="[labelTop, success]"
      :classLabel="[label]"
      value="3"
    />
  </div>
</template>

<script>
import RadioButton from './RadioButton'

export default {
  name: 'SliderRadioButton',
  components: {
    RadioButton,
  },
  data() {
    return {
      label: {
        'font-family': 'Quicksand',
        'font-style': 'normal',
        'font-weight': 300,
        'font-size': '8px',
        'line-height': '120%',
        color: '#000000',
      },
      labelTop: {
        'font-family': 'Quicksand',
        'font-style': 'normal',
        'font-weight': 'normal',
        'font-size': '10px',
        'line-height': '150%',
        color: '#141728',
      },
      success: {
        color: '#26B36A',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.group-radio {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-evenly;
}
.label {
  font-family: Quicksand;
  font-style: normal;
  font-weight: 300;
  font-size: 8px;
  line-height: 120%;
  color: #000000;
}
.label-top {
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 150%;
  color: #141728;
}
</style>
