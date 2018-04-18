<template>
  <div class="createPost-container">
    <el-form class="form-containe" :model="postForm" ref="postForm">
      <sticky :className="'sub-navbar subtitle'">
        <template v-if="fetchSuccess">
          <el-button v-loading="loading" style="margin-left: 10px;" type="success">发布
          </el-button>
          <el-button v-loading="loading" type="warning">草稿</el-button>
          <el-button v-loading="loading" type="info">取消</el-button>
        </template>
      </sticky>

      <div class="createPost-main-container">

        <el-row>
          <el-col :span="21">
            <el-form-item style="margin-bottom: 40px;" prop="title">
              <MDinput name="name" v-model="postForm.title" required :maxlength="100">
                标题
              </MDinput>
              <span v-show="postForm.title.length>=26" class='title-prompt'>app可能会显示不全</span>
            </el-form-item>

            <div class="postInfo-container">
              <el-row>
                <el-col :span="8">
                  <el-button type="primary" @click="notice = true">选择通知教师</el-button>
                </el-col>

                <el-col :span="8">
                  <el-form-item label-width="80px" label="发布时间:" class="postInfo-container-item">
                    <el-date-picker v-model="postForm.display_time" type="datetime" format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期时间">
                    </el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>

        <el-form-item style="margin-bottom: 40px;" label-width="45px" label="摘要:">
          <el-input type="textarea" class="article-textarea" :rows="1" autosize placeholder="请输入内容" v-model="postForm.task_short">
          </el-input>
          <span class="word-counter" v-show="contentShortLength">{{contentShortLength}}字</span>
        </el-form-item>

        <div class="editor-container">
          <tinymce :height=400 ref="editor" v-model="postForm.content"></tinymce>
        </div>

        <div style="margin-bottom: 20px;">
          <Upload v-model="postForm.file_url"></Upload>
        </div>
      </div>

    </el-form>

    <el-dialog :visible.sync="notice" title="选择通知的用户">
      <el-transfer filterable :filter-method="filterMethod" :titles="['选择教师','通知列表']" filter-placeholder="请输入教师姓名" v-model="selectedTeacher" :data="teacher">
      </el-transfer>
      <span slot="footer" class="dialog-footer">
        <el-button @click="notice = false">取 消</el-button>
        <el-button type="primary" @click="notice = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import Upload from '@/components/Upload/singleImage3'
import MDinput from '@/components/MDinput'
import Sticky from '@/components/Sticky' // 粘性header组件

const taskForm = {
  title: '',
  content: '',
  task_short: '',
  display_time: undefined,
  file_url: ''
}

export default {
  name: 'taskDetail',
  components: { Tinymce, MDinput, Upload, Sticky },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      postForm: Object.assign({}, taskForm),
      fetchSuccess: true,
      loading: false,
      notice: true,
      teacher: [
        { key: 1, label: '王小明', disabled: false },
        { key: 2, label: '王小明2', disabled: false }
      ],
      selectedTeacher: []
    }
  },
  computed: {
    contentShortLength() {
      return this.postForm.task_short.length
    }
  },
  methods: {
    filterMethod(query, item) {
      return item.label.search(query) > -1
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.title-prompt {
  position: absolute;
  right: 0px;
  font-size: 12px;
  top: 10px;
  color: #ff4949;
}
.createPost-container {
  position: relative;
  .createPost-main-container {
    padding: 40px 45px 20px 50px;
    .postInfo-container {
      position: relative;
      @include clearfix;
      margin-bottom: 10px;
      .postInfo-container-item {
        float: left;
      }
    }
    .editor-container {
      min-height: 200px;
      margin: 0 0 30px;
      .editor-upload-btn-container {
        text-align: right;
        margin-right: 10px;
        .editor-upload-btn {
          display: inline-block;
        }
      }
    }
  }
  .word-counter {
    width: 40px;
    position: absolute;
    right: -10px;
    top: 0px;
  }
}
</style>
