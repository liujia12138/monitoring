<template>
  <div class="login">
    <el-form :model="dataForm" ref="loginform">
      <el-form-item prop="username"> 
        <el-input v-model="dataForm.username"/>
      </el-form-item>
      <el-form-item prop="password"> 
        <el-input v-model="dataForm.password" />
      </el-form-item>
      <el-form-item>
        <el-button @click="handleLogin">{{ '登录' }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      dataForm:{
        username:'admin',
        password: 'admin'
      }
    }
  },
  methods:{
    handleLogin(){
      this.$refs.loginform.validate(valid=>{
        if(valid){
          this.$store.dispatch('user/login', this.dataForm).then(() => {
            this.$router.push({
              path: '/'
            })
          })
        }
      })
    }
  }
}
</script>

<style>

</style>