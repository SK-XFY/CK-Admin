<template>
  <!--  <transition name="popup">-->
  <!--    <div :style="{'background-color':color}" class="snackbar" v-if="state">-->
  <!--      <div class="snackbar-content">{{list}}</div>-->
  <!--      <v-icon @click="close">close</v-icon>-->
  <!--    </div>-->
  <!--  </transition>-->
  <!--  <div class="snackbar-carrier">-->
  <!--    <div :class="direction" class="snackbar-list">-->
  <!--      {{list}}-->
  <!--      &lt;!&ndash;      <div :style="{'background-color':color}" class="snackbar" v-if="state">&ndash;&gt;-->
  <!--      &lt;!&ndash;        <div class="snackbar-content">1111</div>&ndash;&gt;-->
  <!--      &lt;!&ndash;        <v-icon @click="close">close</v-icon>&ndash;&gt;-->
  <!--      &lt;!&ndash;      </div>&ndash;&gt;-->
  <!--    </div>-->
  <!--  </div>-->
  <div :class="direction" class="snackbar-carrier">
    <div :key="index" :style="{'background-color':item.color}" class="snackbar" v-for="(item,index) in list">
      <div class="snackbar-content">{{item.text}}</div>
      <v-icon @click="close(index)">close</v-icon>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // state: false,
        // text: '',
        // color: '',//success warning error
        direction: 'bottom',
        list: [],
        timeout: false
      }
    },
    created() {

    },
    methods: {
      start(config) {
        /**
         * config(text,timeout,color)
         * text：消息内容
         * **/
        let the = this
        if (process.browser) {
          document.body.appendChild(this.$el)
          // var timestamp = Date.parse(new Date())
          // if (this.list.length >= 3) {
          //   this.$delete(this.list, 0)
          // }
          this.list.push(config)
          // the.text = config.text;
          // the.state = true
          if (the.timeout) clearInterval(the.timeout)
          the.timeout = setInterval(() => {
            this.list.length > 0 ? this.$delete(this.list, 0) : clearInterval(this.timeout)
          }, 3000)
        }
        return the
      },
      close(index) {
        // let the = this
        // this.state = false
        // document.body.removeChild(this.$el);
        this.$delete(this.list, index)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .snackbar-carrier {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    max-width: 300px;
    width: 100%;
    /*background: rgba(0, 0, 0, .5);*/
    color: #ffffff;
    z-index: 1009;


    &.top {
      top: 0;
    }

    &.bottom {
      bottom: 0;
    }

    &.center {
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .snackbar {
      padding: 15px;
      margin-bottom: 15px;
      background-color: #1E88E5;
      border-radius: 4px;
      box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
      color: #FFFFFF;
      opacity: 1;
      width: 100%;
      display: flex;
      justify-content: space-between;
      animation: .35s toplight-frame ;

      .snackbar-content {
        flex: 1;
        letter-spacing: 1px;
        font-size: 14px;
      }

      .v-icon {
        flex-shrink: 0;
        color: #FFFFFF;
      }

    }
  }

  @keyframes toplight-frame {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>

