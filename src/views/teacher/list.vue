<template>
  <div class="app-container">
    <el-input style='width:180px;' placeholder="输入教师姓名搜索" prefix-icon="el-icon-document" v-model="listQuery.name"></el-input>
    <el-button style='margin-bottom:20px;' type="primary" icon="document" @click="handleFilter">查询</el-button>

    <el-table :data="teacherList" element-loading-text="拼命加载中" style="width: 691px" border fit highlight-current-row>
      <el-table-column align="center" label='工号' width="100">
        <template slot-scope="scope">
          {{scope.row.workNumber}}
        </template>
      </el-table-column>

      <el-table-column align="center" label="教师姓名" width="95">
        <template slot-scope="scope">
          <span class="link-type" @click="changePermis(scope.row)">{{scope.row.name}}</span>
        </template>
      </el-table-column>

      <el-table-column label="性别" width="110" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.sex === 1">男</span>
          <span v-else>女</span>
        </template>
      </el-table-column>

      <el-table-column label="年龄" width="115" align="center">
        <template slot-scope="scope">
          {{scope.row.age}}
        </template>
      </el-table-column>

      <el-table-column align="center" label="创建日期" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{scope.row.created}}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" width="70" align="center">
        <template slot-scope="scope">
          <!-- <el-button type="primary" size="mini">查看</el-button> -->
          <!-- <el-button type="success" size="mini" >编辑</el-button> -->
          <el-switch v-model="scope.row.userStatus" :active-value="1" :inactive-value="0" active-color="#13ce66" inactive-color="#ff4949" @change="changeStatus(scope.row)"></el-switch>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination background layout="prev, pager, next" :total="total" :page-size="pageSize" @current-change="handleCurrentChange" :current-page="currentPage">
    </el-pagination>

    <el-dialog :visible.sync="permisDialogVisable" title="配置权限">
      <el-tree :data="permis" :props="{ label: 'name', children: 'children' }" node-key="permisId" :default-checked-keys="hasPermisIds" ref="permisTree"  show-checkbox>
      </el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="permisDialogVisable = false">取 消</el-button>
        <el-button type="primary" @click="savePermis">保 存</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script >
import { getTeacherPage, changeUserStatus, getTeacherPermis } from '@/api/teacher'
import { savePermis } from '@/api/permis'

export default {
  name: 'teacherList',
  data() {
    return {
      listQuery: {
        name: ''
      },
      currentPage: 1,
      pageSize: 10,
      total: 0,
      teacherList: [],
      permisDialogVisable: false,
      permis: [],
      hasPermisIds: [],
      currentUserId: undefined
    }
  },
  methods: {
    sexFormatter(row) {
      console.log(row)
      switch (row.sex) {
        case 1:
          return '男'
        case 2:
          return '女'
      }
    },
    changePermis(row) {
      this.permisDialogVisable = true
      this.fetchPermis(row.userId)
    },
    fetchData(name, pageNum, pageSize) {
      getTeacherPage(name, pageNum, pageSize)
        .then(response => {
          const data = response.info
          this.teacherList = data.result
          this.currentPage = data.pageNum
          this.total = data.total
        })
        .catch(err => {
          console.log(err)
        })
    },
    handleFilter(name, pageNum) {
      this.fetchData(this.listQuery.name, pageNum)
    },
    handleCurrentChange(pageNum) {
      this.fetchData(this.listQuery.name, pageNum)
    },
    changeStatus(row) {
      const userId = row.userId
      const userStatus = row.userStatus
      changeUserStatus(userId, userStatus)
    },
    fetchPermis(id) {
      getTeacherPermis(id).then(response => {
        this.permis = []
        this.permis.push(response.info.root)
        this.hasPermisIds = response.info.checkPermisIds
        this.currentUserId = id
      })
    },
    savePermis() {
      const permis = this.$refs.permisTree.getCheckedKeys()
      savePermis(this.currentUserId, permis).then(() => {
        this.permisDialogVisable = false
      })
    }
  },
  created() {
    this.fetchData()
  },
  computed: {}
}
</script>


