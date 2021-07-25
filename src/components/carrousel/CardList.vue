<template>
  <div class="card-list">
    <ul>
      <li v-for="(card, index) in cards" :key="index" :style="listPosition">
        <Card :item="card" :active="index == currentIndex" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Card from './Card.vue'

export default {
  data: () => ({
    touch: {
      startX: 0,
      endX: 0,
    },
    isDown: false,
  }),
  computed: {
    ...mapGetters('carrousel', ['cards', 'currentIndex']),
    listPosition() {
      const percentage = this.isDown ? 65 : 100
      return { transform: `translateX(-${this.currentIndex * percentage}%)` }
    },
  },
  components: {
    Card,
  },
  methods: {
    ...mapActions('carrousel', ['nextIndex', 'prevIndex']),
    touchstart(event) {
      event.preventDefault()
      this.touch.startX = event.touches[0].clientX
      this.touch.endX = 0
    },
    touchmove(event) {
      event.preventDefault()
      this.touch.endX = event.touches[0].clientX
    },
    touchend() {
      if (
        !this.touch.endX
        || Math.abs(this.touch.endX - this.touch.startX) < 20
      ) return

      this.moveCard()
    },
    mousedown(event) {
      event.preventDefault()
      this.touch.startX = event.clientX
      this.touch.endX = 0
      this.isDown = true
    },
    mousemove(event) {
      event.preventDefault()
      this.touch.endX = event.clientX
      if (
        !this.isDown
          || !this.touch.endX
          || Math.abs(this.touch.endX - this.touch.startX) < 20
      ) return

      if (this.isDown) this.moveCard()
    },
    mouseup() {
      this.isDown = false
    },
    moveCard() {
      if (this.touch.endX < this.touch.startX) {
        this.nextIndex()
      } else {
        this.prevIndex()
      }
    },
  },
  mounted() {
    this.$el.addEventListener('mouseup', () => this.mouseup(), true)
    this.$el.addEventListener('mousedown', (event) => this.mousedown(event))
    this.$el.addEventListener('mousemove', (event) => this.mousemove(event))
    this.$el.addEventListener('touchstart', (event) => this.touchstart(event))
    this.$el.addEventListener('touchmove', (event) => this.touchmove(event))
    this.$el.addEventListener('touchend', () => this.touchend())
  },
}
</script>

<style lang="scss" scoped>
.card-list {
  overflow: hidden;
  ul {
    display: flex;
    list-style: none;
    padding-inline-start: 0;
  }
  li {
    padding: 10px;
    transition: all 0.5s ease;
  }
}
</style>
