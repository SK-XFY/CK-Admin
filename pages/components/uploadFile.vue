<template>
  <v-layout>
    <v-row class="mb-4" no-gutters>
      <v-col :cols="4" class="pr-3">
        <v-card flat>
          <v-subheader class="title">默认uploadFile</v-subheader>
          <v-card-text>
            <upload-file url="/uploadFile"
                         v-model="files"/>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col :cols="4" class="pr-3">
        <v-card flat>
          <v-subheader class="title">disabled</v-subheader>
          <v-card-text>
            <upload-file :max-file="5" disabled
                         url="/uploadFile"
                         v-model="files"/>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col :cols="4" class="">
        <v-card flat>
          <v-subheader class="title">max-file 多个文件 default=1</v-subheader>
          <v-card-text>
            <upload-file :max-file="5"
                         url="/uploadFile"
                         v-model="files"/>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-card flat>
      <v-card-text class="body-1">
        暂无备注说明
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
  export default {
    data() {
      return {
        files: [
          {
            name: '4.jpg',
            path: '/4.jpg'
          },
          {
            name: '1.jpg',
            path: '/1.jpg'
          },
          {
            name: '啊啊啊啊啊啊啊啊啊啊啊啊.mp4',
            path: '啊啊啊啊啊啊啊啊啊啊啊啊.mp4'
          },
          {
            name: '啊啊啊啊啊啊啊啊啊啊啊啊.mp3',
            path: '啊啊啊啊啊啊啊啊啊啊啊啊.mp3'
          }
        ]
      }
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

</style>

