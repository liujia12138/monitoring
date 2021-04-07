<template>
  <el-dialog :visible="true">
    <el-form :model="form" ref="form" label-width="80px">
      <el-form-item prop="form.type" label="类型">
        <el-radio-group v-model="form.type">
          <el-radio
            v-for="type in menuTypeList"
            :key="type.id"
            :label="type.id"
            >{{ type.label }}</el-radio
          >
        </el-radio-group>
      </el-form-item>
      <el-form-item prop="form.title" label="名称">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item prop="form.parent" label="上级菜单">
        <el-cascader :options="parentMenuList" :props="cascaderProps" />
      </el-form-item>
      <el-form-item prop="form.path" label="路由">
        <el-input v-model="form.path" />
      </el-form-item>
      <el-form-item prop="form.sort" label="排序">
        <el-input-number type="number" v-model="form.sort" />
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { menuTypeList } from '@/utils/labelDicts';
import { getMenuList } from '@/api/system'
export default {
  data () {
    return {
      // 菜单类型list
      menuTypeList: menuTypeList,
      // 新增form
      form: {
        type: 0,//类型
        title: '',
        parent: '',
        path: '',
        sort: 0,
        permissions: '',//授权标识
        icon: ''
      },
      parentMenuList: [],//父级菜单
      cascaderProps: {
        label: 'name',
        value: 'id',
        expandTrigger:'hover'
      }
    }
  },
  created () {
    this.getParentMenus()
  },
  methods: {
    getParentMenus () {
      getMenuList().then(({ data: res }) => {
        this.parentMenuList = res.list;
      })
    }
  }
}
</script>

<style>
</style>