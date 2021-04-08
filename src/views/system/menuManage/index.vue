<template>
  <el-card class="box-card">
    <div class="card-title">
      <el-button
        type="primary"
        size="small"
        @click="handleAddOrUpdate"
        :loading="addBtnLoading"
        >{{ $t('add') }}</el-button
      >
    </div>
    <el-table
      :data="dataList"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      :tree-props="{ children: 'children' }"
    >
      <el-table-column label="名称">
        <template slot-scope="{ row }">{{ row.name }}</template>
      </el-table-column>
      <el-table-column label="类型">
        <template slot-scope="{ row }">{{ row.type }}</template>
      </el-table-column>
      <el-table-column label="图标">
        <template>
          <svg class="icon-svg" aria-hidden="true">
            <use :xlink:href="`#icon-people`"></use>
          </svg>
        </template>
      </el-table-column>
      <el-table-column label="路由">
        <template slot-scope="{ row }">{{ row.path }}</template>
      </el-table-column>
      <el-table-column label="权限标识">
        <template slot-scope="{ row }">{{ row.path }}</template>
      </el-table-column>
      <el-table-column label="排序">
        <template slot-scope="{ row }">{{ row.path }}</template>
      </el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button type="text">{{ $t('update') }}</el-button>
          <el-button class="red-text-btn" type="text" @click="handleDelete">{{ $t('delete') }}</el-button>
        </template>
      </el-table-column>
    </el-table>

    <FormDialog :visiable.sync="visiable" @submit="submit"><AddOrUpdate ref="dataForm"/></FormDialog>
  </el-card>
</template>

<script>
import common from '@/mixins/common';
import system from '@/api/system';
import AddOrUpdate from './addOrUpdate'
import FormDialog from '@/components/FormDialog';
import { debounce } from '@/utils'

export default {
  mixins: [common],
  components: { AddOrUpdate, FormDialog },
  data () {
    return {
      dataListOptions: {
        dataListUrl: system.menuList, //数据列表接口
        getDataListIsPage: false, //是否分页
      },
      addBtnLoading: false,
      visiable: false,
    }
  },
  methods: {
    //打开 新增/编辑 弹框
    handleAddOrUpdate(){
      this.visiable = true
    },
    // 删除
    handleDelete(){
      this.$confirm(`确定进行${this.$t('delete')}操作吗？`, `提示`, {
        type:'warning'
      }).then(()=>{
        this.$message.success('操作成功')
      }).catch(()=>{})
    },
    // 提交
    submit: debounce(function(){
      this.$refs.dataForm.submit().then(()=>{
         this.visiable = false
      });
    }, 500)
  }
}
</script>

<style>
</style>