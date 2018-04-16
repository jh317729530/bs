<template>
    <div class="app-container">
        <el-input style='width:180px;' placeholder="输入教师姓名搜索" prefix-icon="el-icon-document"></el-input>
        <el-button style='margin-bottom:20px;' type="primary" icon="document">查询</el-button>

        <el-table :data="teacherList" element-loading-text="拼命加载中" style="width: 691px" border fit highlight-current-row>
            <el-table-column align="center" label='工号' width="100">
                <template slot-scope="scope">
                    {{scope.row.code}}
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
                    <span>{{scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}')}}</span>
                </template>
            </el-table-column>

            <el-table-column label="操作" width="70" align="center">
                <template slot-scope="scope">
                    <!-- <el-button type="primary" size="mini">查看</el-button> -->
                    <!-- <el-button type="success" size="mini" >编辑</el-button> -->
                    <el-switch v-model="scope.row.status" :active-value="1" :inactive-value="0" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog :visible.sync="permisDialogVisable" title="配置权限">
            <el-tree :data="permis" :props="{ label: 'name', children: 'children' }" show-checkbox>
            </el-tree>
            <span slot="footer" class="dialog-footer">
                <el-button @click="permisDialogVisable = false">取 消</el-button>
                <el-button type="primary" @click="permisDialogVisable = false">保 存</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script >

export default {
  name: 'teacherList',
  data() {
    return {
      teacherList: [
        {
          code: '2014081036',
          name: '王小明',
          sex: 1,
          age: 25,
          timestamp: '2018-04-01 15:34',
          status: 0
        },
        {
          code: '2014081037',
          name: '王小明2',
          sex: 1,
          age: 32,
          timestamp: '2018-04-01 15:34',
          status: 1
        }
      ],
      permisDialogVisable: false,
      permis: [
        {
          id: 1,
          name: '教师列表'
        },
        {
          id: 2,
          name: '教学管理',
          children: [
            {
              id: 3,
              name: '教学查询'
            },
            {
              id: 4,
              name: '教学任务'
            },
            {
              id: 5,
              name: '教学成果'
            }
          ]
        }
      ]
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
    }
  }
}
</script>


