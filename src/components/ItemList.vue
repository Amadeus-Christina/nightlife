<template>
  <div class="message-item-group">
    <div class="message-item clear" v-for="(item,index) in itemInfo" :key="index" >
      <div @click="$router.push(item.toPath)" class="wrap">
        <i class="icon" v-if="item.iconPath">
          <img class="icon-img" :src="item.iconPath" alt="图标" v-if="item.iconPath">
        </i>
        <span class="item-name" :class="{'has-icon':item.iconPath}">{{item.name}}</span>
        <div class="right clear right-part">
          <span class="next right"> > </span>
          <span class="msg-num right" v-show="item.msgNum > 0">{{item.msgNum > 99 ? '99+' : item.msgNum}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  mixins: [],
  name: '',
  data () {
    return {}
  },
  props:
    ['itemInfo']
  ,
  computed: {
  },
  watch: {},
  methods: {},
  mounted () {
  },
  created () {},
  filters: {},
  directives: {},
  beforeDestroy () {},
  destroyed () {}
}
</script>
<style scoped lang="less">
  .message-item-group {
    width: 100%;
    .wrap{
      height: 0.4rem;
      width: 100%;
    }
    .icon {
      height: 0.4rem;
      width: 0.4rem;
      margin: 0 0.3rem;
      .icon-img {
        max-width: 0.4rem;
        max-height: 0.4rem;
        vertical-align: middle;
      }
    }
    .message-item {
      height: 1rem;
      width: 100%;
      font-size: 0.28rem;
      line-height: 1rem;
      color: #5C5C5C;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      position: relative;
      background-color: #ffffff;
      border-bottom: 0.01rem solid #F5F5F5;
      .item-name{
        position: absolute;
        left: 0.3rem;
        &.has-icon{
          left: 1rem;
        }
      }
      .right-part{
        width: 1.6rem;
      }
      .next {
        margin:0 0.3rem 0 0.2rem;
        transform: scale(1, 1.8);
      }
      .msg-num {
        display: flex;
        position: relative;
        min-width: 0.4rem;
        height: 0.4rem;
        padding: 0 0.1rem;
        align-items: center;
        justify-content: center;
        top: 0.35rem;
        background-color: #FD493E;
        border-radius: 0.2rem;
        color: #ffffff;
        font-size: 0.24rem;
      }
    }
  }
</style>
