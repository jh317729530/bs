<template>
    <div class="app-container calendar-list-container">
        <div class="filter-container">
            <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="标题" v-model="listQuery.title">
            </el-input>
            <el-select clearable style="width: 90px" class="filter-item" v-model="listQuery.score" placeholder="评分">
                <el-option v-for="item in scoreOptions" :key="item" :label="item" :value="item">
                </el-option>
            </el-select>
            <el-button class="filter-item" type="primary" v-waves icon="el-icon-search" @click="handleFilter">查询</el-button>
            <el-button class="filter-item" type="success" v-waves icon="el-icon-upload" @click="isUploadVisable = true">上传</el-button>
        </div>

        <el-table :data="workList" style="width: 100%" border fit highlight-current-row>
            <el-table-column align="center" label="序号" width="65">
                <template slot-scope="scope">
                    <span>{{scope.row.id}}</span>
                </template>
            </el-table-column>

            <el-table-column width="150px" align="center" label="上传时间">
                <template slot-scope="scope">
                    <span>{{scope.row.uploadTime}}</span>
                </template>
            </el-table-column>

            <el-table-column min-width="150px" label="标题" align="center">
                <template slot-scope="scope">
                    <span class="link-type">{{scope.row.title}}</span>
                </template>
            </el-table-column>

            <el-table-column width="110px" align="center" label="上传者">
                <template slot-scope="scope">
                    <span>{{scope.row.author}}</span>
                </template>
            </el-table-column>

            <el-table-column width="80px" label="评分" align="center">
                <template slot-scope="scope">
                    <svg-icon v-for="n in +scope.row.score" icon-class="star" class="meta-item__icon" :key="n"></svg-icon>
                </template>
            </el-table-column>

            <el-table-column align="center" label="下载量" width="95">
                <template slot-scope="scope">
                    <span v-if="scope.row.downloadCount" class="link-type">{{scope.row.downloadCount}}</span>
                    <span v-else>0</span>
                </template>
            </el-table-column>

            <el-table-column align="center" label="操作" width="230" class-name="small-padding fixed-width">
                <template slot-scope="scope">
                    <el-button size="mini" type="primary" icon="el-icon-download">下载
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

        <div class="block" style="margin-top: 20px">
            <el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper" :total="1">
            </el-pagination>
        </div>

        <el-dialog :visible.sync="isUploadVisable" title="上传教学成果">
            <el-input v-model="uploadTitle" placeholder="输入标题"></el-input>
            <el-upload style="margin-top: 30px" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或
                    <em>点击上传</em>
                </div>
            </el-upload>
            <span slot="footer" class="dialog-footer">
                <el-button @click="isUploadVisable = false">取 消</el-button>
                <el-button type="primary" @click="isUploadVisable = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
  name: "resultList",
  data() {
    return {
      workList: [
        {
          id: 1,
          uploadTime: "2018-04-19",
          title: "Java面向对象编程",
          author: "王小明2",
          score: 3,
          downloadCount: 50
        },
        {
          id: 2,
          uploadTime: "2018-04-19",
          title: "数据结构与算法",
          author: "王小明2",
          score: 2,
          downloadCount: 3
        },
        {
          id: 3,
          uploadTime: "2018-04-19",
          title: "C语言程序设计",
          author: "王小明",
          score: 1,
          downloadCount: 26
        },
        {
          id: 4,
          uploadTime: "2018-04-19",
          title: "编译原理",
          author: "王小明",
          score: 1,
          downloadCount: 11
        }
      ],
      scoreOptions: [1, 2, 3],
      listQuery: {
        title: "",
        score: undefined
      },
      isUploadVisable: false,
      uploadTitle: ""
    };
  }
};
</script>
