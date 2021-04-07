<template>
  <el-card>
    <div>
      <el-button type="primary" size="small" @click="handleAddUser"
        >{{ $t('add') }}用户</el-button
      >
    </div>
    <el-table :data="dataList">
      <el-table-column prop="name" label="用户名"></el-table-column>
      <el-table-column prop="avatar" label="头像">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" style="width: 45px" />
        </template>
      </el-table-column>
      <el-table-column prop="role" label="角色"></el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          {{ scope.row.status ? '正常' : '禁用' }}
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间"></el-table-column>
      <el-table-column prop="creator" label="创建人"></el-table-column>
      <el-table-column prop="remark" label="备注" width="300"></el-table-column>
    </el-table>
    <el-pagination
      background
      :current-page="page"
      :total="total"
      :page-size="size"
      @current-change="handleCurrentPageChange"
    />
  </el-card>
</template>

<script>
import { addUser } from '@/api/admin'
import common from '@/mixins/common'
import userApis from '@/api/admin'

export default {
  mixins: [common],
  data () {
    return {
      dataListOptions: {
        dataListUrl: userApis.userListAll, //数据列表接口
        getDataListIsPage: true, //是否分页
      },
    }
  },
  created () {
  },
  methods: {
    handleAddUser () {
      addUser({
        name: 'aaaa'
      }).then(res => {
        if (res.code === 200) {
          this.$message({
            type: 'success',
            message: res.msg
          })
        }
      })
    },

  }
}
</script>

<style>
</style>