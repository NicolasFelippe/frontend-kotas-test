<template>
  <div class="checkboxgroup">
    <label :for="label" :style="classLabelTop">{{ labelTop }}</label>
    <input type="radio" :id="label" :name="name" :class="inputClass"  :value="value" />
    <label :for="label" :style="classLabel">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'RadioButton',
  props: {
    label: {
      type: String,
      require: true,
    },
    labelTop: {
      type: String,
      default: '',
    },
    classLabelTop: {
      type: Array,
      default: () => [],
    },
    classLabel: {
      type: Array,
      default: () => [],
    },
    inputClass: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      require: true,
    },
    value: {
      type: String,
      require: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.checkboxgroup {
  display: inline-block;
  text-align: center;
}
.checkboxgroup label {
  display: block;
}
input[type='radio'] {
    -webkit-appearance:none;
    width:20px;
    height:20px;
    border:2px solid #E1E1E1;
    border-radius:50%;
    outline:none;
    box-shadow:0 0 5px 0px #E1E1E1 inset;
}
input[type='radio']:hover {
    box-shadow:0 0 5px 0px #01B1EC inset;
}
input[type='radio']:before {
    content:'';
    display:block;
    width:60%;
    height:60%;
    margin: 20% auto;
    border-radius:50%;
}
input[type='radio']:checked {
     border: 1px solid #01B1EC;
}
input[type='radio']:checked:before {
    background:#01B1EC;
}
</style>
