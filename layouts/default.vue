<template>
  <v-app>
    <v-navigation-drawer
      app
      color="grey darken-4"
      dark
      v-model="drawer"
    >
      <div class="px-2 mb-2">
        <div class="py-3 flex-center flex-column mb-3">
          <v-badge
            bottom
            color="green"
            overlap
          >
            <template v-slot:badge>
              <v-icon dark>
                done
              </v-icon>
            </template>
            <div class="radius-circular pa-1"
                 style="border:1px solid rgba(255, 255, 255, 0.5);width: 85px;height: 85px;">
              <img class="grey darken-2 radius-circular" height="100%" src="/logo.png" width="100%">
            </div>
          </v-badge>
          <div class="white--text title mt-3">Administrator</div>
          <div class="caption grey--text  mt-1">{{$locale.layout['login-time']}}:2019-01-01</div>
        </div>
        <v-menu :value="searchOpinion.list.length>0" offset-y>
          <template v-slot:activator="{ on }">
            <v-text-field
              @input="search"
              append-icon="search"
              class="ma-0 subtitle-2"
              hide-details
              label="search"
              solo
              v-model="searchOpinion.text"
              v-on="on"
            ></v-text-field>
          </template>
          <v-list class="py-0" dense nav>
            <v-list-item :key="index" @click="" :to="item.path" v-for="(item,index) in searchOpinion.list">
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <v-list dense nav>
        <template v-for="(item,index) in menu">
          <v-list-group
            :prepend-icon="item.icon"
            color="white"
            v-if="item.children"
            v-model="item.model"
          >
            <template v-slot:activator>
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </template>
            <template v-for="(item2,index2) in item.children">
              <v-list-group
                color="white"
                no-action
                sub-group
                v-if="item2.children"
                v-model="item2.model"
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>{{item2.title}}</v-list-item-title>
                  </v-list-item-content>
                </template>
                <v-list-item :key="index3" :to="item3.path" active-class="grey darken-3 white--text" link nuxt
                             v-for="(item3,index3) in item2.children">
                  <v-list-item-icon>
                    <v-icon>{{item3.icon}}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>{{item3.title}}</v-list-item-title>
                </v-list-item>
              </v-list-group>
              <v-list-item :to="item2.path" active-class="grey darken-3 white--text" nuxt style="padding-left: 24px"
                           v-else>
                <v-list-item-icon>
                  <v-icon>{{item2.icon}}</v-icon>
                </v-list-item-icon>

                <v-list-item-title>{{item2.title}}</v-list-item-title>
              </v-list-item>
            </template>
          </v-list-group>
          <v-list-item :to="item.path" active-class="grey darken-3 white--text" nuxt v-else>
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="grey darken-4"
      dark
      flat
      height="60"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout class="flex-0 " fill-height>
        <div class=" flex-y-center mr-5">消息</div>
        <div class=" flex-y-center mr-5">设置</div>
        <v-menu
          offset-y
          open-on-hover
        >
          <template v-slot:activator="{ on }">
            <div class="flex-y-center" v-on="on">{{$locale.layout.locale}}</div>
          </template>
          <v-list class="pa-0" dense subheader>
            <v-list-item @click="$store.commit('SET_LOCALE', 'cn')">
              <v-list-item-title>简体中文</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$store.commit('SET_LOCALE', 'en')">
              <v-list-item-title>English</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-layout>
    </v-app-bar>

    <v-content>
      <div class="tab-list sticky px-3" v-if="tabHistory.length>0">
        <ul ref="tab" class="pa-0 flex-justify-start"  style="overflow-x: auto">
          <li :class="{'active':routeName===item.name}" :key="index" class="pr-4 flex-justify-between flex-y-center"
              v-for="(item,index) in tabHistory" v-ripple>
            <div @click="setRouteName(item.name),$router.push(item.path)"
                 class="py-2 pl-4 flex-center mr-2 body-1 text-no-wrap">{{item.title}}
            </div>
            <v-icon @click="closeRoute(index)" size="18">cancel</v-icon>
          </li>
        </ul>
      </div>

      <v-container
        fluid
      >
        <nuxt :keep-alive-props="{ include: keepAlive }" class="flex-column" keep-alive/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        drawer: null,
        menu: [],
        tabHistory: [],
        routeName: this.$route.name,
        activeClass: 'grey darken-3 white--text',
        searchOpinion: {
          text: '',
          list: []
        }
      }
    },
    computed: {
      keepAlive: function() {
        let list = []
        this.tabHistory.forEach((item, index) => {
          list.push(item.name)
        })
        return list
      }
    },
    created() {
      let menu = { ...this.$routers }
      let list = []
      for (let i in menu) {
        let item = menu[i]
        item.model = false
        let parent = menu[item.father]
        if (parent) {
          (parent.children || (parent.children = [])).push(item)
        } else {
          list.push(item)
        }
      }
      this.menu = list
      if (this.$cookies.get('tabHistory')) this.tabHistory = eval(this.$cookies.get('tabHistory'))
      if (menu[this.$route.name]) this.setRouteName(this.$route.name)
      this.setRoute(this.$route)
    },
    mounted() {
    },
    methods: {
      setRouteName(name) {
        let the = this
        if (this.$routers[name].father) {
          let a = []
          f(this.$routers[name].father)

          function f(n) {
            a.unshift(the.$routers[n].name)
            if (the.$routers[n].father) f(the.$routers[n].father)
          }

          y(0, this.menu)

          function y(index, arr) {
            if (index < a.length) {
              let name = a[index]
              arr.forEach((item, index) => {
                if (item.name === name) {
                  item.model = true
                  setTimeout(() => {//!!!!!为什么要加定时器呢?因为组件有bug 父级必须是true 子级才能为true 否则强制为false 所以做个定时器等父级为true后在打开子级
                    y(index + 1, item.children)
                  }, 100)

                }
              })
            }
          }

        }

      },
      setRoute(route) {
        if (route.name !== 'index' && this.$routers[route.name]) {
          if (this.tabHistory.length > 0) {
            let add = true
            this.tabHistory.forEach((item, index) => {
              if (item.name === route.name) add = false
            })
            if (add) {
              this.tabHistory.push(this.$routers[route.name])
              this.$cookies.set('tabHistory', JSON.stringify(this.tabHistory))
              this.$nextTick(()=>{
                this.$refs.tab.scrollLeft= this.$refs.tab.scrollWidth
              })
            }
          } else {
            this.tabHistory.push(this.$routers[route.name])
          }
        }
      },
      closeRoute(index) {
        this.$delete(this.tabHistory, index)
        this.$cookies.set('tabHistory', JSON.stringify(this.tabHistory))
        let route = this.tabHistory[Math.max(index - 1, 0)] || this.tabHistory[index + 1]
        this.$router.push(route ? route.path : '/')
      },
      search() {
        let list = { ...this.$routers }
        let arr = []
        if (this.searchOpinion.text) {
          for (let i in list) {
            if (list[i].title.match(this.searchOpinion.text)) {
              arr.push(list[i])
            }
          }
        }
        this.searchOpinion.list = arr
      }
    },
    //🤔 咦，账号和密码好像不匹配哦
  watch: {
      $route(to, from) {
        this.routeName = to.name
        this.setRoute(to)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .tab-list {
    top: 60px;
    min-height: 54px;
    z-index: 5;
    padding-top: 15px;
    border-bottom: 2px solid #1E88E5;
    background: #FAFAFA;

    li {
      cursor: pointer;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      margin-right: 12px;
      background: #EEEEEE;
      color: #9E9E9E;
      transition: all .35s ease;

      &.active {
        background: #1E88E5;
        color: #FFFFFF;
      }
    }

  }
</style>

