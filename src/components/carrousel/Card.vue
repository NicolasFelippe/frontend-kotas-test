<template>
  <div class="card">
    <div class="avatar">
      <img alt="logo spotify" :src="require(`@/assets/${item.img}`)" />
      <h3>{{ item.name }}</h3>
      <p class="sub-text">
        <strong>{{ item.vacancies }}</strong> vagas
      </p>
      <p class="sub-text">
        <strong>{{ item.price }}</strong> por mês
      </p>
      <p class="sub-text-2">Última vaga</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      require: true,
    },
    active: {
      type: Boolean,
      require: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  margin: 0;
  width: 123px;
  padding-bottom: 10px;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0px 4px 20px #e1e1e1;
  overflow: hidden;
  transition: all 0.5s ease;
  hr {
    border: 1px solid #f1f4f5;
    width: 90%;
  }
  .avatar {
    h3 {
      font-weight: bold;
      font-size: 14px;
      line-height: 110%;
    }
    img {
      padding: 5px;
      width: 40px;
      border-radius: 50%;
      border: 1px solid #eaf4ff;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px #f5f5f5;
    }
    p {
      margin: 5px;
      font-size: 12px;
      line-height: 120%;
    }
    div img {
      margin-top: 32px;
    }
    .sub-text {
      font-family: Quicksand;
      font-size: 9px;
      line-height: 100%;
      margin-bottom: 9px;
      color: #000;
    }
    .sub-text-2 {
      font-weight: 600;
      font-size: 10px;
      margin-top: 26px;
      line-height: 120%;
      color: #c4c4c4;
    }
  }
}
// .card {
//   position: relative;
//   width: 100%;
//   height: 600px;
//   background-color: #efefef;
//   overflow: hidden;
//   transition: all 0.5s ease;

//   .img {
//     width: 100%;
//     height: 600px;
//     background-position: center;
//     background-size: cover;
//   }

//   .title {
//     position: absolute;
//     top: 50px;
//     padding: 5px 20px;
//     width: calc(100% - 20px);
//     height: 40px;
//     font-size: 1.6rem;
//     color: #fff;
//     background-color: rgba($color: #000000, $alpha: 0.5);
//   }

//   .description {
//     padding: 20px;
//     color: #333;
//   }
// }
</style>
