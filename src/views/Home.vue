<template>
  <div>
    <HeaderDesktop v-if="!isMobile" class="item1" />
    <div class="content">
      <div :class="{ page: !isMobile }">
        <div :class="{ 'content-cards': !isMobile }">
          <CardProduct :isMobile="isMobile" />
          <CardAdmin />
          <CardGroupAbout />
          <CardAlreadyPart />
          <CardAskedQuestions />
          <CardList />
        </div>
        <div v-if="!isMobile" class="article">
          <CardToSign class="to-sign" />
        </div>
      </div>
    </div>
    <FooterMobile v-if="isMobile" class="footer" />
  </div>
</template>
<script>
import CardAdmin from '../components/CardAdmin'
import CardProduct from '../components/CardProduct'
import CardGroupAbout from '../components/CardGroupAbout'
import CardAlreadyPart from '../components/CardAlreadyPart'
import CardAskedQuestions from '../components/CardAskedQuestions'
import CardList from '../components/carrousel/CardList'
import FooterMobile from '../components/FooterMobile'
import HeaderDesktop from '../components/header/HeaderDesktop'
import CardToSign from '../components/CardToSign'

export default {
  name: 'Home',
  components: {
    CardAdmin,
    CardProduct,
    CardGroupAbout,
    CardAlreadyPart,
    CardAskedQuestions,
    CardList,
    FooterMobile,
    HeaderDesktop,
    CardToSign,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
    }
  },
  computed: {
    isMobile() {
      return this.windowWidth <= 1024
    },
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
}
</script>

<style lang="scss" scoped>
.content {
  div {
    margin-bottom: 20px;
  }
  .footer {
    margin: 0;
  }
  .page {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .content-cards {
    width: 450px;
  }
  .article {
    margin-left: 16px;
    .to-sign {
      position: fixed;
      width: 320px;
    }
  }
}
</style>
