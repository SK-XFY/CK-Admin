<template>
  <v-layout>
    <v-row class="mb-4" no-gutters>
      <v-col :cols="4" class="pr-3">
        <v-card flat>
          <v-subheader class="title">默认snackbar</v-subheader>
          <v-card-text>
            <v-btn @click="$snackbar.start({
          text: '11111',
        })" class="primary">snackbar
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col :cols="4" class="">
        <v-card flat>
          <v-subheader class="title">默认snackbar</v-subheader>
          <v-card-text>
            <v-btn @click="$snackbar.start({
          text: '11111',
          color: '#F44336'
        })" color="red" dark>snackbar
            </v-btn>
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

</style>

