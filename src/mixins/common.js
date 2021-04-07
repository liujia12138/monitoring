export default {
  data() {
    return {
      // 数据列表的参数
      dataListOptions: {
        dataListUrl: '', //数据列表接口
        getDataListIsPage: true, //是否分页
      },
      dataList: [], //数据列表
      dataForm: {}, //查询条件
      page: 0, //当前页码
      size: 10, //每页数
      total: 0, //数据总量
      pageSizeList: [10,20,50,100],
      dataListLoading: false, //数据列表的loading
    }
  },
  created(){
    this.getDataList()
  },
  methods: {
    getDataList() {
      this.dataListLoading = true;
      this.$axios.get(this.dataListOptions.dataListUrl, {
        ...this.dataForm,
        page: this.dataListOptions.getDataListIsPage ? this.page : null,
        size: this.dataListOptions.getDataListIsPage ? this.size : null,
      }).then(({
        data: res
      }) => {
        this.dataList = res.data.list;
        this.total = res.data.total;
        this.dataListLoading = false;
      }).catch(() => {
        this.dataListLoading = false;
      })
    },
    // 分页，每页条数
    handlePageSizeChange(val){
      this.page = 1;
      this.size = val;
      this.getDataList()
    },
    // 分页，当前页
    handleCurrentPageChange(val){
      this.page = val;
      this.getDataList()
    }
  }
}