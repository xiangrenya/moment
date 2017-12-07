<template>
  <div class="moment-feedback">
    <div class="favors">
      <i class="iconfont icon-favor"></i>
      <span v-for="favor in favors" :key="favor.userId">{{favor.userName}}</span>
    </div>
    <ul class="comments">
      <li v-for="comment in comments" :key="comment.id" @click.stop="showComment(comment.userName)"><span>{{comment.userName}}</span>: {{comment.words}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['favors', 'comments'],
  methods: {
    showComment (userName) {
      let show = this.$store.getters.showComment
      this.$store.commit('updateCommentDisplay', !show)
      this.$store.commit('updateCommentPlaceholder', `@${userName}`)
      this.$store.commit('updateMoment', this.$parent.$props.moment)
    }
  }
}
</script>

<style lang="scss">
.moment-feedback{
  padding: 8px 8px;
  background: #f2f2f2;
  border-radius: 2px;
  font-size: 14px;
  .favors{
    display: flex;
    align-items: center;
    color: #4990E2;
    border-bottom: 1px solid #dddddd;
    margin-bottom: 5px;
    i, span{
      margin-right: 8px;
    }
  }
  .comments{
    li + li{
      margin-top: 5px;
    }
    span{
      color: #4990E2;
    }
  }
}
</style>


