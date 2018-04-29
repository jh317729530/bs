<template>
  <div class="app-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="听课记录" name="first">
        <div class="app-container">
          <div class="filter-container">
            <el-input style="width: 200px;" class="filter-item" placeholder="标题">
            </el-input>
            <el-button class="filter-item" type="primary" icon="el-icon-search">查询</el-button>
            <el-button class="filter-item" type="success" icon="el-icon-upload" style="margin-left:0" @click="handleAdd">添加</el-button>
          </div>

          <el-table :data="learnList" border style="width: 100%" highlight-current-row>
            <el-table-column align="center" label="序号" width="65">
              <template slot-scope="scope">
                <span>{{scope.row.id}}</span>
              </template>
            </el-table-column>

            <el-table-column align="center" label="提交者" width="150">
              <template slot-scope="scope">
                <span>{{scope.row.teacherName}}</span>
              </template>
            </el-table-column>

            <el-table-column align="center" label="课题">
              <template slot-scope="scope">
                <span>{{scope.row.title}}</span>
              </template>
            </el-table-column>

            <el-table-column align="center" label="记录时间" width="300">
              <template slot-scope="scope">
                <span>{{scope.row.created}}</span>
              </template>
            </el-table-column>

            <el-table-column align="center" label="操作" width="300" class-name="small-padding fixed-width" fixed="right">
              <template slot-scope="scope">
                <el-button size="mini" type="primary" icon="el-icon-search" @click="handleDownload(scope.row)">查看
                </el-button>
                <el-button size="mini" type="success" icon="el-icon-edit" @click="handleDownload(scope.row)">编辑
                </el-button>
                <el-button size="mini" type="danger" icon="el-icon-delete" @click="handleDelete(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="备课记录" name="second">
        <div class="app-container">
          <div class="filter-container">
            <el-input style="width: 200px;" class="filter-item" placeholder="标题">
            </el-input>
            <el-button class="filter-item" type="primary" icon="el-icon-search">查询</el-button>
            <el-button class="filter-item" type="success" icon="el-icon-upload" style="margin-left:0" @click="handleAdd2">添加</el-button>
          </div>

          <el-table :data="learnList" border style="width: 100%" highlight-current-row>
            <el-table-column align="center" label="序号" width="65">
              <template slot-scope="scope">
                <span>{{scope.row.id}}</span>
              </template>
            </el-table-column>

            <el-table-column align="center" label="提交者" width="150">
              <template slot-scope="scope">
                <span>{{scope.row.teacherName}}</span>
              </template>
            </el-table-column>

            <el-table-column align="center" label="课题">
              <template slot-scope="scope">
                <span>{{scope.row.title}}</span>
              </template>
            </el-table-column>

            <el-table-column align="center" label="记录时间" width="300">
              <template slot-scope="scope">
                <span>{{scope.row.created}}</span>
              </template>
            </el-table-column>

            <el-table-column align="center" label="操作" width="300" class-name="small-padding fixed-width" fixed="right">
              <template slot-scope="scope">
                <el-button size="mini" type="primary" icon="el-icon-search" @click="handleDownload(scope.row)">查看
                </el-button>
                <el-button size="mini" type="success" icon="el-icon-edit" @click="handleDownload(scope.row)">编辑
                </el-button>
                <el-button size="mini" type="danger" icon="el-icon-delete" @click="handleDelete(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      learnList: [
        {
          id: 1,
          teacherName: "主任",
          title: "Java面向对象四大特性",
          created: "2018-04-29 13:11"
        }
      ]
    };
  },
  methods: {
    handleAdd() {
      this.$router.push({ path: "/teach/record/edit",query: { editType: 1} });
    },
    handleAdd2() {
       this.$router.push({ path: "/teach/record/edit",query: { editType: 2} });
    }
  }
};
</script>