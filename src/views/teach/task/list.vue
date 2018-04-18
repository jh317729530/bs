<template>
    <div class="tab-container">
        <el-tabs style='margin-top:15px;' v-model="activeName" type="card">
            <el-tab-pane v-for="(item) in tabs" :key="item.label" :label="item.label">
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import listTabPlane from './components/listTabPlane'
export default {
  name: "tab",
  data() {
    return {
      activeName: "taskList",
      tabs: [
          {label: '任务列表', key: 'taskList'}
      ]
    };
  }
};
</script>


<style scoped>
.tab-container {
  margin: 30px;
}
</style>

