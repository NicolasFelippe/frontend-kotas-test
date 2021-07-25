<template>
  <div class="card">
    <h3>Dúvidas Frequentes</h3>
    <hr />
    <div class="content">
      <div v-for="question in questions" :key="question.id">
        <div class="question">
          <p>{{ question.title }}</p>
          <div>
            <span
              class="material-icons"
              @click="question.open = !question.open"
            >
              {{ question.open ? "expand_more" : "chevron_right" }}</span
            >
          </div>
        </div>
        <div v-if="question.open" class="description">
          <p>
            {{ question.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CardAskedQuestions',
  data() {
    return {
      open: false,
    }
  },
  computed: {
    ...mapGetters('question', ['questions']),
  },
}
</script>

<style lang="scss" scoped>
.card {
  padding: 0;
  padding-left: 16px;
  text-align: left;
  hr {
    border: 1px solid #f1f4f5;
    width: 90%;
  }
  h3 {
    font-weight: bold;
    font-size: 14px;
    line-height: 110%;
    margin: 16px 4px 16px 6px;
  }
  .content {
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    .question {
      padding: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      align-content: center;
      border-bottom: 1px solid #f1f4f5;
    }
    .description {
      text-align: inherit;
      padding: 11px;
      border-bottom: 1px solid #f1f4f5;
    }
  }
  p {
    font-family: Muli;
    font-size: 12px;
    line-height: 120%;
  }
}
</style>
