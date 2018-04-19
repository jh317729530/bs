<template>
    <div>
        <div v-html="content"></div>
        <div class="sub-navbar subtitle">
            <sticky>
                <template v-if="fetchSuccess">
                    <el-button v-loading="loading" style="margin-left: 10px;" type="success">发布
                    </el-button>
                    <el-button v-loading="loading" type="warning">草稿</el-button>
                    <el-button v-loading="loading" type="info">取消</el-button>
                </template>
            </sticky>
        </div>
    </div>
</template>

<script>
import Sticky from "@/components/Sticky"; // 粘性header组件

export default {
  name: "taskDetail",
  props: {
    content: {
      type: String,
      default: ""
    }
  },
  components: {
    Sticky
  },
  data() {
    return {
      loading: false,
      fetchSuccess: true
    };
  }
};
</script>



