<template>
  <v-layout>
    <v-row class="mb-4" no-gutters>
      <v-col :cols="4" class="pr-3">
        <v-card flat>
          <v-subheader class="title">默认loading</v-subheader>
          <loading :state="loading">
            <v-list shaped>
              <v-list-item-group color="primary">
                <v-list-item
                  :key="i"
                  v-for="(item, i) in items"
                >
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </loading>
        </v-card>
      </v-col>
      <v-col :cols="4" class="pr-3">
        <v-card flat>
          <v-subheader class="title">loading文字</v-subheader>
          <loading :state="loading" loadingText="loading自定义文字">
            <v-list shaped>
              <v-list-item-group color="primary">
                <v-list-item
                  :key="i"
                  v-for="(item, i) in items"
                >
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </loading>
        </v-card>
      </v-col>
      <v-col :cols="4" class="">
        <v-card flat>
          <v-subheader class="title">自定义loading</v-subheader>
          <loading :state="loading">
            <template slot="loading">
              <div class="pa-4">数据加载中</div>
            </template>
            <v-list shaped>
              <v-list-item-group color="primary">
                <v-list-item
                  :key="i"
                  v-for="(item, i) in items"
                >
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </loading>
        </v-card>
      </v-col>
    </v-row>
    <v-card flat>
      <v-card-text class="body-1">
        使用新版本优化的<n-link class="primary--text mx-1" to="/function/http">http</n-link>方法开启loading状态;state绑定:$store.state.loading
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
  export default {
    data() {
      return {
        loading: true,
        items: [
          { text: 'Real-Time', icon: 'mdi-clock' },
          { text: 'Audience', icon: 'mdi-account' },
          { text: 'Conversions', icon: 'mdi-flag' }
        ]
      }
    },
    computed: {},
    created() {
      setTimeout(() => {
        this.loading = false
      }, 5000)
    },
    mounted() {
    },
    methods: {}
  }
</script>
<style lang="scss" scoped>

</style>

