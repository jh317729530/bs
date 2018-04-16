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

                <div style="margin-bottom: 20px;">
                    <Upload v-model="postForm.file_url"></Upload>
                </div>
            </div>
        </el-form>
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
      loading: false
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
      min-height: 500px;
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
