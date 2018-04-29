<template>
    <div class="app-container" style="padding-top: 0">
        <p class="warn-content">
            <a target="_blank">编辑听课记录
            </a>
        </p>
        <el-form ref="learn-form" :model="learnForm" :inline="true" label-width="80px">
            <el-row>
                <el-form-item label="记录时间">
                    <el-date-picker v-model="learnForm.created" type="datetime" placeholder="选择日期时间">
                    </el-date-picker>
                </el-form-item>

                <el-form-item label="授课人" v-if="editType === 1">
                    <el-input v-model="learnForm.teacherName"></el-input>
                </el-form-item>

                <el-form-item label="授课时间" v-if="editType === 1">
                    <el-date-picker v-model="learnForm.teachTime" type="datetime" placeholder="选择日期时间">
                    </el-date-picker>
                </el-form-item>
            </el-row>

            <el-row>
                <el-form-item label="课题">
                    <el-input v-model="learnForm.created" style="width: 750px"></el-input>
                </el-form-item>
            </el-row>

            <el-row>
                <div class="editor-container">
                    <tinymce :height=400 ref="editor" v-model="learnForm.content"></tinymce>
                </div>
            </el-row>

            <el-form-item>
                <el-upload style="margin-top: 20px" class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
                    <el-button size="small" type="primary">点击上传文件</el-button>
                </el-upload>
            </el-form-item>

            <el-row>
                <el-form-item style="margin-top: 20px">
                    <el-button type="primary">提交</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-row>

        </el-form>

    </div>
</template>

<script>
import Tinymce from "@/components/Tinymce";

export default {
  components: {
    Tinymce
  },
  data() {
    return {
      learnForm: {
        created: ""
      },
      editType: 1
    };
  },
  created () {
    this.editType = this.$route.query.editType
  }
};
</script>

