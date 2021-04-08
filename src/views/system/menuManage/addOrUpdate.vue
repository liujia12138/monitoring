<template>
  <el-form :model="form" ref="form" :rules="rule" label-width="80px">
    <el-form-item prop="type" label="类型">
      <el-radio-group v-model="form.type">
        <el-radio
          v-for="type in menuTypeList"
          :key="type.id"
          :label="type.id"
          >{{ type.label }}</el-radio
        >
      </el-radio-group>
    </el-form-item>
    <el-form-item prop="title" label="名称">
      <el-input v-model="form.title" />
    </el-form-item>
    <el-form-item prop="parent" label="上级菜单">
      <el-cascader
        v-model="form.parent"
        :options="parentMenuList"
        :props="cascaderProps"
        style="width: 100%"
      />
    </el-form-item>
    <el-form-item prop="path" label="路由">
      <el-input v-model="form.path" />
    </el-form-item>

    <el-form-item prop="icon" label="图标">
      <el-popover trigger="click" placement="bottom-start" width="400">
        <el-input slot="reference" v-model="form.icon" />
        <div class="menu-icon-container">
          <div class="menu-icon-list">
            <el-button
              v-for="(item, index) in iconList"
              :key="index"
              @click="form.icon = item"
            >
              <svg class="icon-svg">
                <use :xlink:href="`#${item}`" />
              </svg>
            </el-button>
          </div>
        </div>
      </el-popover>
    </el-form-item>
    <el-form-item prop="sort" label="排序">
      <el-input-number :min="0" v-model="form.sort" />
    </el-form-item>
  </el-form>
</template>

<script>
import { menuTypeList } from '@/utils/labelDicts';
import { getMenuList } from '@/api/system'
import { getIconsList } from '@/utils'
export default {
  data () {
    return {
      // 菜单类型list 
      menuTypeList: menuTypeList,
      // 新增菜单form
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
        expandTrigger: 'hover',
        checkStrictly: true
      },
      iconList: [],//图标列表
      rule: {
        title: [
          { required: true, message: '名称不能为空', trigger: 'blur' }
        ],
        path: [
          { required: true, message: '路由不能为空', trigger: 'blur' }
        ],
        parent: [
          { required: true, message: '上级菜单不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.getParentMenus();
    this.$nextTick(() => {
      this.iconList = getIconsList()
    })
  },
  methods: {
    getParentMenus () {
      getMenuList().then(({ data: res }) => {
        this.parentMenuList = [
          {
            name: '一级菜单',
            id: 0,
            children: res.list
          }
        ];
      })
    },
    submit (id) {
      let params = { ...this.form }
      if (id) {
        params.id = id
      }
      return new Promise((resolve) => {
        this.$refs.form.validate(valid => {
          if (valid) {
            this.$message({
              type: 'success',
              message: '操作成功'
            })
            resolve('操作成功')
          }
        })
      })

    }
  }
}
</script>

<style scoped lang="scss">
.menu-icon-container {
  max-height: 200px;
  overflow-y: scroll;
  .el-button {
    margin-left: 10px;
    margin-bottom: 7px;
    padding: 9px 12px;
  }
}
</style>