<template>
  <div class="app-body">
    <el-container>
      <el-header>
        <NavBar />
      </el-header>
      <el-container class="app-layout">
        <el-aside width="220px">
          <Sidebar/>
        </el-aside>

        <el-main class="app-main">
          <transition name="fade-transform" mode="out-in">
            <keep-alive>
              <router-view />
            </keep-alive>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavBar from './components/navbar'
import Sidebar from  './components/sidebar'
export default {
  name: 'layout',
  components: {
    NavBar,
    Sidebar
  }
}
</script>

<style>
</style>