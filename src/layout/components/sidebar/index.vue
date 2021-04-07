<template>
  <el-menu mode="vertical" :unique-opened="true">
    <template v-for="menu in permissionMenu">
      <el-menu-item
        v-if="!menu.children || menu.children.length === 0"
        :key="menu.id"
        ><span>{{ menu.meta.title }}</span>
      </el-menu-item>
      <el-submenu v-else :key="menu.id" :index="menu.id">
        <span slot="title">{{ menu.meta.title }}</span>
        <template v-for="child in menu.children">
          <el-menu-item
            v-if="!child.children || child.children.length === 0"
            :key="child.id"
            @click="$router.push({ path: menu.path + child.path })"
            ><span>{{ child.meta.title }}</span>
          </el-menu-item>
        </template>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      menuList: []
    }
  },
  computed: {
    ...mapGetters(['permissionMenu']),

  },
  created () {
    console.log(this.permissionMenu)
  }
}
</script>

<style>
</style>