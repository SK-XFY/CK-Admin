<template>
  <v-layout class="mb-3 mx-0" row>
    <v-badge :key="index" :value="!disabled" class="mr-3 mb-3" color="error" overlap
             v-for="(item,index) in currentValue">
      <template v-slot:badge>
        <v-icon
          @click="delUpdate(index)"
          dark
          small
          v-if="!item.progress"
        >clear
        </v-icon>
      </template>
      <div :title="item.name" class="file-item flex-center">
        <v-progress-circular
          :rotate="360"
          :size="35"
          :value="item.rate"
          color="primary"
          v-if="item.progress"
        ></v-progress-circular>
        <imgLoad :url="item.path" :preview="imgKey" :preview-text="item.name" height="100%" v-if="type(item.path)==='image'" width="100%"></imgLoad>

        <v-icon color="primary" size="35" v-else-if="type(item.path)==='video'">photo_library
        </v-icon>
        <v-icon color="primary" size="35" v-else-if="type(item.path)==='audio'">play_circle_outline
        </v-icon>
        <v-icon color="primary" size="35" v-else>folder_open</v-icon>
      </div>
      <div class="mt-2 grey--text"
           style="font-size: 12px;width: 50px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">
        {{item.progress?'上传中...':item.name}}
      </div>
    </v-badge>
    <!--<div v-for="(item,index) in currentValue" :key="index" class="file-item flex-center">-->
    <!---->
    <!--</div>-->
    <label class="file-add flex-center" v-if="!disabled && currentValue.length<maxFile">
      <v-icon color="grey" size="35">add</v-icon>
      <input @input="fileChange" hidden type="file"/>
    </label>
  </v-layout>
</template>

<script>
  export default {
    props: {
      url: {
        type: String,
        required: true
      },
      disabled: {//禁止编辑
        type: Boolean
      },
      maxFile: {//最大上传文件
        type: Number,
        default: 1
      },
      fileKey: {//文件标识
        type: String
      },
      value: {
        type: Array,
        default: []
      }
    },
    computed: {
      currentValue: {
        get: function() {
          return this.value
        },
        set: function(val) {
          this.$emit('input', val)
        }
      }
    },
    data() {
      return {
        imgKey: ''
      }
    },
    mounted() {
      this.imgKey = new Date().getTime()
    },
    methods: {
      fileChange(e) {
        let the = this
        let list = [...e.target.files]
        e.target.value = ''
        for (let item of list) {
          let name = item.name
          let type = name.substring(name.lastIndexOf('.') + 1)
          let reader = new FileReader()
          let key = the.currentValue.length
          the.currentValue.push({
            progress: true,
            rate: 0
          })
          reader.onload = file => {
            let base64 = file.target.result.replace(/^.*?,/, '')
            the.$axios.$post(the.url, {
              base: base64,
              name: name,
              type: type
            }, {
              update: true,
              onUploadProgress: (e) => {
                let complete = ((e.loaded / e.total * 100).toFixed(2) | 0)
                the.$set(the.currentValue[key], 'rate', complete)
                // console.log(e)
                // let rate = vm.uploadRate = e.loaded / e.total;  //已上传的比例
                // if (rate < 1) {
                //   //这里的进度只能表明文件已经上传到后台，但是后台有没有处理完还不知道
                //   //因此不能直接显示为100%，不然用户会误以为已经上传完毕，关掉浏览器的话就可能导致上传失败
                //   //等响应回来时，再将进度设为100%
                //   vm.uploadRate = rate;
                //   vm.uploadStyle.width = (rate *100).toFixed(2)+ '%';
                // }
              }
            }).then((res) => {
              the.$set(the.currentValue, key, {
                name: name,
                path: res.requestUrls[0]
              })
              the.$emit('file-update', {
                key: key,
                file: the.currentValue[key]
              })
            })


            // await the.$axios.$post(the.url, {
            //   base: base64,
            //   type: type
            // }, {
            //   update: true,
            //   loading: true
            // }).then(function(res) {
            //   the.$emit('file-update', {
            //     name: res.name,
            //     path: res.requestUrls[0]
            //   })
            // })
          }
          reader.readAsDataURL(item)
        }
      },
      async delUpdate(key) {
        let the = this
        // console.log(the.currentValue[key])
        await this.$axios.$delete('api/oss/delete', {
          params: {
            path: the.currentValue[key].path
          }
        }).then(function(res) {
          if (res.status === 204) {
            the.currentValue.splice(key, 1)
            the.$emit('delete-update', {
              key: key,
              file: the.currentValue[key]
            })
          } else {
            the.$store.commit('set_snackbar', {
              title: res.statusMessage,
              current: true
            })
          }
        })
      },
      type(file) {
        let type = file.substring(file.lastIndexOf('.') + 1)
        if (type === 'jpg' || type === 'jpeg' || type === 'png' || type === 'svg' || type === 'gif') {
          return 'image'
        }
        if (type === 'mp4') {
          return 'video'
        }
        if (type === 'mp3') {
          return 'audio'
        }
        return false
      }
    }
  }
</script>

<style lang='scss' scoped>
  .file-add,
  .file-item {
    width: 50px;
    height: 50px;
    border-radius: 4px;
    border: 1px solid #BDBDBD
    /*margin-right 15px*/
  }
</style>
