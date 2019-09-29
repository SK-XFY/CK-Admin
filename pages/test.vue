<template>
  <v-layout>
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="flex-1"
      hide-default-footer
    ></v-data-table>
    <!--    <v-btn @click="test('https://chenfangyi.oss-cn-beijing.aliyuncs.com/images/TIM%E5%9B%BE%E7%89%8720190821085458.png')">攻击oss</v-btn>-->
  </v-layout>
</template>

<script>
  export default {
    name: 'test',
    data() {
      return {
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            value: 'name'
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
          { text: 'Iron (%)', value: 'iron2' },
          { text: 'Iron (%)', value: 'iron3' },
          { text: 'Iron (%)', value: 'iron4' },
          { text: 'Iron (%)', value: 'iron5' }
        ],
        desserts: [
          {
            name: 'Frozen YogurtFrozen YogurtFrozen YogurtFrozen YogurtFrozen YogurtFrozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
            iron2: '1%',
            iron3: '1%',
            iron4: '1%',
            iron5: '1%'
          }
        ]
      }
    },
    computed: {},
    created() {
    },
    mounted() {
    },
    methods: {
      test(url) {
        let the = this
        let newImg = new Image()
        newImg.src = url
        newImg.onerror = () => {
          console.log('请求异常')
        }
        newImg.onload = () => {
          console.log('请求成功')
          setTimeout(() => {
            the.test(url)
          }, 500)

        }
      }
    }
  }
</script>

<style scoped>

</style>
