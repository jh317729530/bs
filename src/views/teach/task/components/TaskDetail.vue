<template>
  <div>
    <div v-html='content'></div>
    <div class='sub-navbar subtitle'>
      <sticky>
        <template v-if='fetchSuccess'>
          <el-button style='margin-left: 10px;' @click='fetchStatistics' v-if="this.roleId === 2">查看任务完成情况</el-button>
          <el-button v-loading='loading' style='margin-left: 10px;' type='warning'>下载附件
          </el-button>
          <el-button v-loading='loading' type='success' v-if="this.roleId ===3">完成</el-button>
          <el-button v-loading='loading' type='danger' v-if="this.roleId === 2">结束任务</el-button>
        </template>
      </sticky>
    </div>

    <el-dialog :visible.sync='submitVisible' title='完成任务并提交任务报告'>
      <el-upload class='upload-demo' drag action='https://jsonplaceholder.typicode.com/posts/' multiple>
        <i class='el-icon-upload'></i>
        <div class='el-upload__text'>将文件拖到此处，或
          <em>点击上传</em>
        </div>
      </el-upload>
      <span slot='footer' class='dialog-footer'>
        <el-button @click='submitVisible = false'>取 消</el-button>
        <el-button type='primary' @click='submitVisible = false'>确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog :visible.sync='taskStatisticsVisible' title='任务完成情况'>
      <el-table :data='taskStatisticsList' border style='width: 100%'>
        <el-table-column align='center' label='任务执行教师'>
          <template slot-scope='scope'>
            <span>{{scope.row.teacherName}}</span>
          </template>
        </el-table-column>

        <el-table-column align='center' label='任务完成时间'>
          <template slot-scope='scope'>
            <span v-if='scope.row.finishTime'>{{scope.row.finishTime}}</span>
            <span v-else>未完成</span>
          </template>
        </el-table-column>

        <el-table-column align='center' label='任务状态'>
          <template slot-scope='scope'>
            <span v-if='scope.row.isFinish == 1'>已完成</span>
            <span v-else>未完成</span>
          </template>
        </el-table-column>

        <el-table-column align='center' label='操作'>
          <template slot-scope='scope'>
           <el-button v-if='scope.row.isFinish == 1' type='primary'>下载报告</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import Sticky from '@/components/Sticky' // 粘性header组件
import { getStatistics } from '@/api/task'
import store from '../../../../store'

export default {
  name: 'taskDetail',
  props: {
    content: {
      type: String,
      default: ''
    },
    taskId: {
      type: Number
    }
  },
  components: {
    Sticky
  },
  data() {
    return {
      loading: false,
      fetchSuccess: true,
      submitVisible: false,
      taskStatisticsVisible: false,
      taskStatisticsList: [],
      roleId: undefined
    }
  },
  methods: {
    fetchStatistics() {
      getStatistics(this.taskId).then(res => {
        const data = res.info
        this.taskStatisticsList = data
      })
      this.taskStatisticsVisible = true
    }
  },
  created () {
    this.roleId = store.getters.role
  }
}
</script>



