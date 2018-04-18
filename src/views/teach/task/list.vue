<template>
    <div class="tab-container">
        <el-tabs style='margin-top:15px;' v-model="activeName" type="card" editable >
            <el-tab-pane v-for="(item) in tabs" :key="item.key" :label="item.label">
                <list-tab-Plane v-if="item.isList"></list-tab-Plane>
                <div v-else>{{ item.content }}</div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import listTabPlane from './components/listTabPlane'
export default {
  name: "tab",
  components: {
      listTabPlane
  },
  data() {
    return {
      activeName: "taskList",
      tabs: [
          {label: '任务列表', key: 'taskList', isList: true},
          {label: '一个新的任务', key: 'newTask', isList: false, content: '这是给你的任务'}
      ]
    };
  },
  methods: {  
  }
};
</script>


<style scoped>
.tab-container {
  margin: 30px;
}
</style>

