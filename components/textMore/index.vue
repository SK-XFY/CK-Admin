<template>
  <div>
    <div :class="{'textMore':textMore}" :style="{'-webkit-line-clamp':row}" class="px-4 my-4 grey--text text--darken-1"
         ref="text" v-html="text"></div>
    <div class="flex-center px-4" v-if="showMore">
      <v-btn @click="textMore=!textMore" block depressed>
        <span>{{textMore?'更多':'收起'}}</span>
        <v-icon right> {{textMore?'keyboard_arrow_down':'keyboard_arrow_up'}}</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      text: {//文字内容
        type: String
      },
      row: {
        type: Number,
        default: 3
      }
    },
    data() {
      return {
        textMore: false,
        showMore: false
      }
    },
    computed: {},
    created() {
    },
    mounted() {
      // console.log(this.$refs.text.clientHeight)
      // this.showMore = this.$refs.text.clientHeight >= 60
      this.$nextTick(() => {
        let styles = window.getComputedStyle(this.$refs.text, null)
        let lh = parseInt(styles.lineHeight, 10)
        let h = parseInt(styles.height, 10)
        let lc = Math.round(h / lh)
        if (lc > this.row) {
          this.textMore = true
          this.showMore = true
        }
      })
    },
    methods: {},
    watch: {
      text: function(val) {

      }
    }
  }
</script>
<style lang="scss" scoped>
  .textMore {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>

