<template>
  <el-card class="box-card">
    <el-table
      :data="dataList"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      :tree-props="{ children: 'children'}"
    >
      <el-table-column label="名称"  >
        <template slot-scope="{row}">{{row.meta.title}}</template>
      </el-table-column>
       <el-table-column label="类型"  >
        <template slot-scope="{row}">{{row.type}}</template>
      </el-table-column>
       <el-table-column label="图标"  >
        <template >
           <svg class="icon-svg" aria-hidden="true"><use :xlink:href="`#icon-people`"></use></svg>
        </template>
      </el-table-column>
       <el-table-column label="路由"  >
        <template slot-scope="{row}">{{row.path}}</template>
      </el-table-column>
      <el-table-column label="权限标识"  >
        <template slot-scope="{row}">{{row.path}}</template>
      </el-table-column>
       <el-table-column label="排序"  >
        <template slot-scope="{row}">{{row.path}}</template>
      </el-table-column>
       <el-table-column label="操作"  >
        <template >
          <el-button type="text">{{$t('update')}}</el-button>
          <el-button type="text" >{{$t('delete')}}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import common from '@/mixins/common';
import adminApis from '@/api/admin'
export default {
  mixins:[common],
  data () {
    return {
       dataListOptions: {
        dataListUrl: adminApis.menuListAll, //数据列表接口
        getDataListIsPage: false, //是否分页
      },
    }
  }
}
</script>

<style>
</style>