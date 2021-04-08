<template>
  <el-menu mode="vertical" :unique-opened="true">
    <template v-for="menu in permissionMenu">
      <el-menu-item
        v-if="!menu.children || menu.children.length === 0"
        :key="menu.id"
        >
        <!-- <span>{{ menu.meta.title }}</span> -->
          <menu-item :icon="menu.icon" :title="menu.meta.title"/>
      </el-menu-item>
      <el-submenu v-else :key="menu.id" :index="menu.id">
        <!-- <span>{{ menu.meta.title }}</span> -->
        <menu-item slot="title" :icon="menu.icon" :title="menu.meta.title"/>
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
import MenuItem from './menuItem'
export default {
  data () {
    return {
      menuList: []
    }
  },
  components:{
    MenuItem
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