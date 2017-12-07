<template>
  <div @click="cancelEdit()">
    <header class="user-cover">
      <div class="user-avatar">
        <strong>项启航</strong>
        <img src="http://dummyimage.com/150x150/50B347/FFF&text=T" alt="">
      </div>     
    </header>
    <ul class="moments">
      <li v-for="(moment, index) in moments" :key="moment.id">
        <img :src="moment.avatarUrl" alt="">
        <section>
          <header>{{moment.name}}</header>
          <p>{{moment.words}}</p>
          <div class="album">
            <div v-for="(item, index) in moment.album" :key="index" :style="{background: 'url(' + item + ') no-repeat center center /cover'}"></div>
          </div>
          <moment-footer ref="footer" :moment="moment"></moment-footer>
        </section>
      </li>
    </ul>
    <CommentForm ref="input" :show="$store.getters.showComment" @afterComment="afterComment"></CommentForm>
  </div>
</template>

<script>
import axios from 'axios'
import MomentFooter from '@/components/moment/MomentFooter'
import CommentForm from '@/components/moment/CommentForm'
export default {
  data () {
    return {
      moments: []
    }
  },
  mounted () {
    axios.get('https://easy-mock.com/mock/5a0eed06d8d8086d4c57ace6/api/moments')
      .then(response => {
        this.moments = response.data.datas
      })
  },
  methods: {
    afterComment (moment, words) {
      let index = this.moments.indexOf(moment)
      moment.comments.push({
        commentId: '1',
        userName: '项启航',
        words: words
      })
      this.moments[index].comments = moment.comments
    },
    cancelEdit () {
      if (this.$store.getters.showComment) {
        this.$store.commit('updateCommentDisplay', false)
      }
      this.$refs.footer.forEach((vm) => {
        if (vm.$data.show) {
          vm.$data.show = false
        }
      })
    }
  },
  components: {
    MomentFooter,
    CommentForm
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul, li{
    list-style: none;
  }
  .user-cover{
    height: 250px;
    background: url(http://dummyimage.com/375x250/50B347/FFF&text=T) no-repeat center center;
    background-size: cover; 
    position: relative;
    margin-bottom: 50px;
  }
  .user-avatar{
  position: absolute;
  bottom: 0;
  right: 10px;
  transform: translateY(30%);
  display: flex;
  align-items: center;
  strong{
    margin-right: 10px;
    color: #ffffff;
    font-size: 1rem;
  }
  img{
    width: 75px;
    height: 75px;
    border: 2px solid #fff;
  }
}
.moments{
  margin: 0 10px 80px;
  > li {
    display: flex;
    padding: 15px 0 11.5px;
    & + li{
      border-top: 1px solid #f2f2f2;
    }
    > img{
      width: 40px;
      height: 40px;
      flex-shrink: 0;
    }
    section{
      flex-grow: 1;
      padding-left: 10px;
      header{
        color: #4990E2;
        margin-bottom: 5px;
      }
    }
  }
}
.album{
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  div{
    width: 30%;
    height: 120px;
    margin-bottom: 10px;
    margin-right: 10px;
  }
}
</style>

