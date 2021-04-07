<template>
  <div class="navbar">
    <div class="logo">
      {{websiteName}}11
    </div>
  </div>
</template>

<script>
import settings from '@/settings'
export default {
  data(){
    return {
      // 系统
      websiteName: settings.websiteName,
    }
  }
}
</script>

<style lang="scss" scoped>
.logo{
  font-size: 20px;
}
</style>