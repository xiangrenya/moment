<template>
  <transition name="slide-up" @enter="enter">
    <form class="comment-form" v-show="show" @submit.prevent="comment()" @click.stop>
        <input type="text" :placeholder="$store.getters.placeholder" v-model="words">
    </form>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      words: ''
    }
  },
  props: {
    'show': {
      type: Boolean,
      default: false
    }
  },
  methods: {
    enter () {
      this.$el.children[0].focus()
    },
    comment () {
      this.$store.commit('updateCommentDisplay', false)
      let moment = this.$store.getters.moment
      window.setTimeout(() => {
        this.$emit('afterComment', moment, this.words)
        this.words = ''
      }, 500)
    }
  }
}
</script>

<style lang="scss">
.comment-form{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid #ddd;
  padding: 5px 10px;
  background-color: #f2f2f2;
  z-index: 1001;
  input{
    padding: 5px 10px;
    width: 100%;
    height: 40px;
    border: 1px solid #efefef;
    border-radius: 4px;
  }
}
.slide-up-enter-active,
.slide-up-leave-active{
  transition: transform ease-in .4s;
}
.slide-up-enter,
.slide-up-leave-to{
  transform: translateY(100%);
}
</style>