<template>
  <div class="card card-admin">
    <h3>Administrador</h3>
    <hr />
    <div class="avatar">
      <img alt="avatar admin" :src="require(`@/assets/avatar/${admin.avatar}`)" />
      <h4>{{ admin.name }}</h4>
      <div>
        <img
          v-for="inst in 3"
          :key="inst"
          src="../assets/icons/trophy.svg"
          alt="icon trophy"
          class="trophy"
        />
      </div>
      <p>selos disponíveis</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardAdmin',
  data() {
    return {
      admin: {
        id: 1,
        name: 'João das Couves',
        avatar: 'avatar1.png',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.card-admin {
  padding-bottom: 26px;
  hr {
    border: 1px solid #f1f4f5;
    width: 90%;
  }
  h3 {
    font-weight: bold;
    font-size: 14px;
    line-height: 110%;
    margin: inherit;
    margin: 16px;
  }
  .avatar {
    h4 {
      margin: inherit;
      margin-top: 8px;
      font-weight: 600;
      font-size: 12px;
      line-height: 120%;
    }
    img {
      margin-top: 9px;
    }
    p {
      margin: 5px;
      font-size: 12px;
      line-height: 120%;
    }
    div img {
      margin-top: 32px;
    }
    .thropy {
      margin-left: 3px;
    }
  }
}
// .sub-text{

// }
// .card-spotify {
//   padding: 10px;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   flex-wrap: nowrap;
//   align-items: center;
//   background: #ffffff;
//   box-shadow: 0px 4px 20px rgba(225, 225, 225, 0.5);
//   h2 {
//     align-items: center;
//     text-align: center;
//     font-style: normal;
//     font-weight: bold;
//     font-size: 18px;
//     line-height: 110%;
//   }
//   p {
//     font-style: normal;
//     font-weight: normal;
//     font-size: 12px;
//     line-height: 150%;
//   }
//   .btn {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background: #f1f4f5;
//     border-radius: 25px;
//     font-size: 10px;
//     width: 105px;
//     height: 22px;
//   }
//   .grid-container {
//     display: flex;
//     flex-direction: row;
//     flex-wrap: nowrap;
//     align-content: center;
//     justify-content: center;
//     column-gap: 20px;
//     hr {
//       border: 1px solid #E1E1E1;
//     }
//     .content-value {
//       color: #141728;
//       display: inline-flex;
//       font-weight: 600;
//       font-size: 8px;
//       align-items: baseline;
//       justify-items: start;
//       h1 {
//         font-weight: bold;
//         font-size: 24px;
//       }
//     }
//   }
// }
</style>
