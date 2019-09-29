<template>
    <v-layout>
      <v-row class="mb-4" no-gutters>
        <v-col :cols="4" class="pr-3">
          <v-card flat>
            <v-subheader class="title">默认textMore.vue</v-subheader>
            <v-card-text>
              <text-more :text="text"></text-more>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col :cols="4" class="">
          <v-card flat>
            <v-subheader class="title">row=2</v-subheader>
            <v-card-text>
              <text-more :row="2" :text="text"></text-more>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-card flat>
        <v-card-text class="body-1">暂无备注</v-card-text>
      </v-card>
    </v-layout>
</template>

<script>
  export default {
    data() {
      return {
        text:'啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊'
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

