<template>
  <v-layout :class="{'active':$store.state.user}" align-center justify-center login>
    <div class="px-4 login-form">
      <v-layout align-center class="radius-3" column fill-height justify-center py-5>
        <div class="pa-2" style="border: 1px dashed #BDBDBD;border-radius: 50%;position: relative">
          <img class="grey lighten-4 radius-circular" height="110" src="/logo.png" width="110"/>
          <div class="red white--text radius-1 "
               style="padding: 1px 10px;position: absolute;top: 10px;right: 0;">v1.0
          </div>
        </div>
        <template v-if="$store.state.user">
          <v-form class="mt-4 flex-center flex-column">
            <v-text-field
              dark
              placeholder="username"
              prepend-icon="cloud_queue"
            ></v-text-field>
            <v-text-field
              dark
              placeholder="password"
              prepend-icon="keyboard"
              type="password"
            ></v-text-field>
            <v-btn class="ma-2" dark fab nuxt outlined small to="/">
              <v-icon>arrow_forward</v-icon>
            </v-btn>
          </v-form>

        </template>
        <template v-else>
          <div class="mt-5 white--text font-weight-bold font-spacing-1" style="font-size: 40px;">Administrator</div>
          <v-btn class="mt-4" color="light-blue " dark depressed min-width="150" nuxt rounded to="/">登录</v-btn>
          <div @click="$store.state.user={}" class="mt-3 grey--text text--lighten-4">切换用户</div>
        </template>
      </v-layout>
    </div>
    <footer class="fixed-bottom max-width pa-2 flex-center grey--text text--lighten-1 caption">CopyRight©2019 ChenFangYi
      -桂ICP备18011763号
    </footer>
  </v-layout>
</template>

<script>
  export default {
    layout: 'login',
    asyncData() {
      return { title: '登录' }
    },
    head() {
      return {
        title: this.title
      }
    },
    data() {
      return {}
    },
    computed: {},
    created() {
    },
    mounted() {
    },
    methods: {}
  }
</script>
<style lang="scss" scoped>
  .login {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, .5);
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      filter: blur(0);
      background-position: center center;
      background-size: cover;
      background-image: url("/login-background.jpg");
      transition: all .75s ease;
    }

    &.active::before {
      filter: blur(5px);
    }
  }

  .login-form {
    max-width: 400px;
    width: 100%;
    padding: 0 16px;
    z-index: 2;
  }

</style>

