<template>
  <div class="card card-spotify">
    <div class="card-avatar">
      <img alt="logo spotify" src="../assets/icons/spotify.png" />
      <span v-if="isMobile" class="material-icons">info</span>
    </div>
    <h2>Spotify Family</h2>
    <p class="description">
      Grupo destinado a pessoas que querem ver o melhor da Netflix em 4k a um
      preço acessível.
    </p>
    <div class="btn">Customizado</div>
    <div class="grid-container">
      <div class="column">
        <h1>2 / 5</h1>
        <div class="content-description">
          <p class="sub-text">vagas disponíveis</p>
        </div>
      </div>
      <hr />
      <div class="column">
        <div class="content-value">
          <span>R$</span>
          <h1>7,90</h1>
        </div>
        <div class="content-description">
          <p class="sub-text">por mês</p>
        </div>
      </div>
      <hr />
      <div class="column">
        <img src="../assets/icons/link.png" alt="icon link" />
        <div class="content-description">
          <p class="sub-text">acesso por convite</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    isMobile: {
      type: Boolean,
      require: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.card-spotify {
  .sub-text {
    font-family: Quicksand;
    font-weight: 300;
    font-size: 12px;
    line-height: 120%;
    color: #616161;
  }
  .content-description {
    margin-top: 8px;
  }
  .card-avatar {
    span {
      color: #e1e1e1;
      position: absolute;
      right: 15px;
    }
  }
  .description {
    margin-top: 16px;
  }
  h2 {
    align-items: center;
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 110%;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f1f4f5;
    border-radius: 25px;
    font-size: 10px;
    width: 105px;
    height: 22px;
    margin-top: 16px;
  }
  .grid-container .column h1 {
    font-size: 24px;
  }
  .grid-container {
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    -moz-column-gap: 20px;
    column-gap: 15px;
    .column {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    hr {
      border: 1px solid #e1e1e1;
    }
    .content-value {
      color: #141728;
      display: inline-flex;
      font-weight: 600;
      align-items: baseline;
      justify-items: start;
      span {
        font-weight: 600;
        font-size: 10px;
        line-height: 120%;
      }
      h1 {
        font-weight: bold;
        font-size: 24px;
        line-height: 110%;
      }
    }
  }
}
</style>
