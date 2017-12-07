<template>
  <footer>
      <div class="moment-action">
        <time>{{moment.createDate | fromNow}}</time>
        <div class="comment">
          <transition name="fade">
            <div class="comment-popover" v-show="show">
              <div @click="favor()">
                <i class="iconfont icon-favor">{{favorText}}</i>
              </div>
              <div @click.stop="comment()">
                <i class="iconfont icon-comment">评论</i>
              </div>
            </div>
          </transition>
          <i class="iconfont icon-comment" @click.stop="show = true"></i>
        </div>
      </div>
      <comment-feedback :favors="moment.favors" :comments="moment.comments"></comment-feedback>
  </footer>
</template>

<script>
import CommentFeedback from '@/components/moment/CommentFeedback'
export default {
  data () {
    return {
      show: false,
      isFavored: false
    }
  },
  props: ['moment'],
  computed: {
    favorText () {
      return this.isFavored ? '取消' : '赞'
    }
  },
  methods: {
    favor () {
      this.show = false
      window.setTimeout(() => {
        let favor = {
          userId: '1',
          userName: '项启航'
        }
        let index = this.moment.favors.indexOf(favor)
        if (this.isFavored) { // 取消点赞
          this.moment.favors.splice(index, 1)
        } else { // 点赞
          this.moment.favors.push(favor)
        }
        this.isFavored = !this.isFavored
      }, 500)
    },
    comment () {
      this.show = false
      this.$store.commit('updateCommentPlaceholder', '评价')
      this.$store.commit('updateCommentDisplay', true)
      this.$store.commit('updateMoment', this.moment)
    }
  },
  components: {
    CommentFeedback
  }
}
</script>

<style lang="scss">
.comment{
  display: flex;
  align-items: center;
  > i{
    font-size: 18px;
  }
}
.comment-popover{
  display: flex;
  border-radius: 4px;
  background: rgba(0, 0, 0, .6);
  padding: 8px 0;
  margin-right: 5px;
  > div{
    width: 80px;
    text-align: center;
    line-height: 1;
    color: #fff;
    & + div{
      border-left: 1px solid #999;
    }
    i{
      margin-right: 5px;
      font-size: 16px;
      &:before{
        margin-right: 5px;
      }
    }
  }
}
.moment-action{
  display: flex;
  align-items: center;
  line-height: 33px;
  color: #999;
  time{
    margin-right: auto;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .4s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>


