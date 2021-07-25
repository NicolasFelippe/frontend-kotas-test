<template>
  <div class="card card-admin">
    <h3>Quem já faz parte</h3>
    <hr />
    <div class="content-members">
      <div v-for="member in members" :key="member.id" class="avatar">
        <img
          :alt="`avatar ${member.name}`"
          :src="require(`@/assets/${member.avatar}`)"
        />
        <h4>{{ member.name }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CardAlreadyPart',
  computed: {
    ...mapGetters('member', ['members']),
  },
}
</script>

<style lang="scss" scoped>
.card-admin {
  hr {
    border: 1px solid #f1f4f5;
    width: 90%;
  }
  h3 {
    font-weight: bold;
    font-size: 14px;
    line-height: 110%;
    margin-bottom: 16px;
  }
  .content-members {
    display: flex;
  }
  .avatar {
    margin-left: 8px;
    h4 {
      font-weight: normal;
      font-size: 10px;
      line-height: 120%;
    }
    img {
      margin-top: 16px;
    }
    p {
      margin: 5px;
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
