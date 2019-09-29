export const strict = false
export const state = () => ({
  loading: false,
  user:null,
  dev: process.env.NODE_ENV === 'development'
})

export const mutations = {
  set_user(state, user) {//用户信息
    state.user = user
  },
  SET_LOCALE(state, locale) {
    this.$cookies.set('locale', locale)
    this.$cookies.remove('tabHistory')
    window.location.reload()
  }
}
export const actions = {}

