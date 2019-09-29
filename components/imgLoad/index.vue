<template>
  <img :src="src" class="img"/>
</template>

<script>
  import errImg from './err.png'
  export default {
    props: {
      url: {
        type: String
      },
      errSrc: {
        type: String
      }
    },
    data() {
      return {
        src: this.url
      }
    },
    computed: {},
    created() {
    },
    mounted() {
      let newImg = new Image()
      newImg.src = this.url
      newImg.onerror = () => { // 图片加载错误
        this.err()
      }
      newImg.onload = () => { // 图片加载成功
        if (newImg.width > 1 && newImg.height > 1) {
          this.src = newImg.src
        } else {
          this.err()
        }
      }
    },
    methods: {
      err() {
        this.src = this.errSrc || errImg
      }
    }
  }
</script>
<style lang="scss" scoped>
</style>

