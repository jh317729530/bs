<template>
    <div class="app-container">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>记录</span>
                <el-button style="float: right" type="success" @click="handleEdit" v-if="editButtonVisible" size="mini">编辑</el-button>
                <el-button style="float: right; margin: 0 5px" type="danger" @click="handleCancel" v-if="!editButtonVisible" size="mini">取消</el-button>
                <el-button style="float: right; margin: 0 5px" type="primary" @click="handleSave" v-if="!editButtonVisible" size="mini">保存</el-button>
            </div>
            <div>
                <el-form ref="learn-form" :model="learnForm" :inline="true" label-width="80px">
                    <el-row>
                        <el-form-item label="记录时间">
                            <el-date-picker v-model="learnForm.created" type="datetime" placeholder="选择日期时间" :disabled="canNotEdit">
                            </el-date-picker>
                        </el-form-item>

                        <el-form-item label="授课人">
                            <el-input v-model="learnForm.teacherName" :disabled="canNotEdit"></el-input>
                        </el-form-item>

                        <el-form-item label="授课时间">
                            <el-date-picker v-model="learnForm.teachTime" type="datetime" placeholder="选择日期时间" :disabled="canNotEdit">
                            </el-date-picker>
                        </el-form-item>
                    </el-row>

                    <el-row>
                        <el-form-item label="课题">
                            <el-input v-model="learnForm.title" style="width: 750px" :disabled="canNotEdit"></el-input>
                        </el-form-item>
                    </el-row>

                    <el-row>
                        <div>

                        </div>
                    </el-row>

                    <!-- <el-form-item>
                        <el-upload style="margin-top: 20px" class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :disabled="canNotEdit">
                            <el-button size="small" type="primary">点击上传</el-button>
                        </el-upload>
                    </el-form-item> -->

                    <!-- <el-row>
                        <el-form-item style="margin-top: 20px">
                            <el-button type="primary">提交</el-button>
                            <el-button>取消</el-button>
                        </el-form-item>
                    </el-row> -->

                </el-form>
            </div>
        </el-card>

        <el-card class="box-card" style="margin-top: 20px">
            <div slot="header" class="clearfix">
                <span>内容</span>
                <el-button style="float: right" type="success" @click="handleContentEdit" v-if="contentEditButtonVisible" size="mini">编辑</el-button>
                <el-button style="float: right; margin: 0 5px" type="danger" @click="handleContentCancel" v-if="!contentEditButtonVisible" size="mini">取消</el-button>
                <el-button style="float: right; margin: 0 5px" type="primary" @click="handleContentSave" v-if="!contentEditButtonVisible" size="mini">保存</el-button>
            </div>
            <div>
                <div class="editor-container" v-if="contentEdit">
                    <tinymce :height=400 ref="editor" v-model="learnForm.content"></tinymce>
                </div>
                <div :v-else="!contentEdit">

                </div>
            </div>
        </el-card>
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
        created: "",
        title: "aa"
      },
      canNotEdit: true,
      editButtonVisible: true,
      contentEditButtonVisible: true,
      contentEdit: false
    };
  },
  methods: {
    handleEdit() {
      this.canNotEdit = false;
      this.editButtonVisible = false;
    },
    handleSave() {
      this.canNotEdit = true;
      this.editButtonVisible = true;
    },
    handleCancel() {
      this.canNotEdit = true;
      this.editButtonVisible = true;
    },
    handleContentEdit() {
      this.contentEditButtonVisible = false
      this.contentEdit = true
    },
    handleContentSave() {
      this.contentEditButtonVisible = true;
      this.contentEdit = false
    },
    handleContentCancel() {
      this.contentEditButtonVisible = true;
      this.contentEdit = false
    }
  }
};
</script>
