<template>
    <div class="app-container calendar-list-container">
        <div class="filter-container">
            <el-input style="width: 200px;" class="filter-item" placeholder="标题" v-model="listQuery.title">
            </el-input>
            <!-- <el-select clearable style="width: 90px" class="filter-item" v-model="listQuery.score" placeholder="评分">
                <el-option v-for="item in scoreOptions" :key="item" :label="item" :value="item">
                </el-option>
            </el-select> -->
            <el-button class="filter-item" type="primary" icon="el-icon-search">查询</el-button>
            <el-button class="filter-item" type="success" icon="el-icon-upload" @click="isUploadVisable = true">上传</el-button>
        </div>

        <el-table :data="workList" style="width: 100%" border fit highlight-current-row>
            <el-table-column align="center" label="序号" width="65">
                <template slot-scope="scope">
                    <span>{{scope.row.id}}</span>
                </template>
            </el-table-column>

            <el-table-column width="150px" align="center" label="上传时间" :formatter="DateFormatter">{{created}}
            </el-table-column>

            <el-table-column min-width="150px" label="标题" align="center">
                <template slot-scope="scope">
                    <span class="link-type">{{scope.row.title}}</span>
                </template>
            </el-table-column>

            <el-table-column width="110px" align="center" label="上传者">
                <template slot-scope="scope">
                    <span>{{scope.row.teacherName}}</span>
                </template>
            </el-table-column>

            <!-- <el-table-column width="80px" label="评分" align="center">
                <template slot-scope="scope">
                    <svg-icon v-for="n in +scope.row.score" icon-class="star" class="meta-item__icon" :key="n"></svg-icon>
                </template>
            </el-table-column> -->

            <el-table-column align="center" label="下载量" width="95">
                <template slot-scope="scope">
                    <span v-if="scope.row.downloadCount" class="link-type">{{scope.row.downloadCount}}</span>
                    <span v-else>0</span>
                </template>
            </el-table-column>

            <el-table-column align="center" label="操作" width="230" class-name="small-padding fixed-width">
                <template slot-scope="scope">
                    <el-button size="mini" type="primary" icon="el-icon-download" @click="handleDownload(scope.row)">下载
                    </el-button>
                    <el-button size="mini" type="danger" icon="el-icon-delete" @click="handleDelete(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <div class="block" style="margin-top: 20px">
            <el-pagination :page-size="pageQuery.pageSize" @current-change="handleCurrentChange" :total="pageQuery.total" :current-page="pageQuery.currentPage" layout="prev, pager, next">
            </el-pagination>
        </div>

        <el-dialog :visible.sync="isUploadVisable" title="上传教学成果">
            <el-form :model="form" :rules="rules" ref="uploadform">
                <el-form-item label="标题" prop="title">
                    <el-input v-model="form.title" placeholder="输入标题"></el-input>
                </el-form-item>
                <el-upload style="margin-top: 30px" show-file-list drag action="/api/common/upload" :on-success="uploadSuccess" :limit=1 multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或
                        <em>点击上传</em>
                    </div>
                </el-upload>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="isUploadVisable = false">取 消</el-button>
                <el-button type="primary" @click="submit('form')">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { add, getResultList, updateResult, deleteResult } from "@/api/teach";
import { Message } from "element-ui";
import { parseTime } from '@/utils'
import { download } from '@/api/common'

export default {
  name: "resultList",
  data() {
    return {
      workList: [],
      scoreOptions: [1, 2, 3],
      listQuery: {
        title: "",
        score: undefined
      },
      isUploadVisable: false,
      uploadTitle: "",
      uploadFile: "",
      form: {
        title: "",
        fileUrl: ""
      },
      rules: {
        title: [{ required: true, message: "请输入标题名称", trigger: "blur" }]
      },
      pageQuery: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      }
    };
  },
  methods: {
    uploadSuccess(response, file, fileList) {
      this.form.fileUrl = response.info;
    },
    submit() {
      this.$refs["uploadform"].validate(valid => {
        console.log(valid);
        if (valid) {
          add(this.form.title, this.form.fileUrl).then(() => {
            Message.success("提交成功");
            this.isUploadVisable = false;
            this.fetchData()
          });
        }
      });
    },
    fetchData(title, pageNum, pageSize) {
      getResultList(title, pageNum, pageSize).then(res => {
        console.log(res)
        const data = res.info
        this.pageQuery.currentPage = data.pageNum
        this.pageQuery.pageSize = data.pageSize
        this.pageQuery.total = data.total
        this.workList = data.result
      });
    },
    DateFormatter(row, column, cellValue, index) {
     return row.created.substring(0,10)
    },
    handleCurrentChange(val) {
      this.pageQuery.currentPage = val
      this.fetchData('',this.pageQuery.currentPage)
    },
    handleDownload(row) {
    //   download(row.fileUrl)
      window.open('http://localhost:8080/common/download?fileName='+row.fileUrl);
      updateResult(row.id)
      this.fetchData();
    },
    handleDelete(row) {
      deleteResult(row.id)
      this.fetchData()
    }
  },
  created() {
    this.fetchData();
  }
};
</script>
