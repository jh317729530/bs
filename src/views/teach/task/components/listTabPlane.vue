<template>
    <el-table :data="taskList"  border fit highlight-current-row style="width: 100%" @row-click='handleClick'>

        <el-table-column align="center" label="序号" width="65" v-loading="loading" element-loading-text="正在加载">
            <template slot-scope="scope">
                <span>{{scope.row.id}}</span>
            </template>
        </el-table-column>

        <el-table-column min-width="300px" align="center" label="标题" >
            <template slot-scope="scope">
                <span >{{scope.row.title}}</span>
            </template>
        </el-table-column>

        <el-table-column min-width="150px" align="center" label="发布人">
            <template slot-scope="scope">
                <span>{{scope.row.name}}</span>
            </template>
        </el-table-column>

        <el-table-column width="180px" align="center" label="发布时间">
            <template slot-scope="scope">
                <span>{{scope.row.releaseTime}}</span>
            </template>
        </el-table-column>

        <el-table-column width="180px" align="center" label="任务状态">
            <template slot-scope="scope">
             <el-tag :type="scope.row.status | statusFilter">{{scope.row.status | statusStringFilter}}</el-tag>
            </template>
        </el-table-column>

    </el-table>
</template>

<script>
import { getList, getDetail } from '@/api/task'
export default {
  props: {
    type: {
      type: String,
      default: 'list'
    }
  },
  name: 'taskList',
  data() {
    return {
      loading: false,
      taskList: []
    }
  },
  methods: {
    handleClick(row) {
      // 获取任务详情
      let pushData = {}
      getDetail(row.id).then(res => {
        pushData = res.info
        this.$emit('ievent', pushData)
      })
    }
  },
  created () {
    this.taskList = []
    getList().then(res => {
      const data = res.info
      this.taskList = data
    })
  },
  filters: {
    statusFilter(status) {
      const statusMap = ['primary', 'success', 'danger']
      return statusMap[status]
    },
    statusStringFilter(status) {
      const statusStringMap = ['未发布', '已发布', '已结束'] 
      return statusStringMap[status]
    }
  }
}
</script>

