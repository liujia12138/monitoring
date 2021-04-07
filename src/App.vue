<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  watch: {
    "$i18n.locale": "i18nHandle"
  },
  created () {
    this.i18nHandle(this.$i18n.locale)
  },
  methods: {
    i18nHandle (val, oldVal) {
      // Cookies.set("language", val)
      document.querySelector("html").setAttribute("lang", val)
      // 非登录页面，切换语言刷新页面
      if (this.$route.name !== "login" && oldVal) {
        window.location.reload()
      }
    }
  }
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
}
</style>

