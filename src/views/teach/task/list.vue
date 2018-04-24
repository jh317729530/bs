<template>
    <div class="tab-container">
        <el-tabs style='margin-top:15px;' v-model="activeTabName" type="border-card" @tab-remove="removeTab">
            <el-tab-pane v-for="(item) in tabs" :key="item.id" :name="item.name" :label="item.label" :closable="!item.isList">
                <list-tab-Plane v-if="item.isList" @ievent="ievent"></list-tab-Plane>
                <task-detail v-else :content="item.content" :taskId="parseInt(item.name)" :status="item.status"></task-detail>
            </el-tab-pane>
        </el-tabs>

    </div>
</template>

<script>
import listTabPlane from './components/listTabPlane'
import TaskDetail from './components/TaskDetail'
export default {
  name: 'tab',
  components: {
    listTabPlane,
    TaskDetail
  },
  data() {
    return {
      activeTabName: '0',
      tabs: [{ name: '0', label: '任务列表', key: 'taskList', isList: true }]
    }
  },
  methods: {
    ievent(data) {
      // console.log('allData:', data)
      const task = data.task
      const tab = {
        name: task.id.toString(),
        created: task.created,
        label: task.title,
        isList: false,
        content: task.content,
        status: task.status
      }
      let exist = false
      this.tabs.forEach(existTab => {
        if(existTab.name === tab.name) {
          exist = true
        }
      })
      if(!exist){
        this.tabs.push(tab)
      }
      this.activeTabName = tab.name
    },
    removeTab(targetName) {
      const tabs = this.tabs
      if (targetName === '0') {
        return
      }
      let activeTabName = this.activeTabName
      if (activeTabName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeTabName = nextTab.name
            }
          }
        })
      }
      this.activeTabName = activeTabName
      this.tabs = tabs.filter(tab => tab.name !== targetName)
    }
  }
}
</script>


<style scoped>
.tab-container {
  margin: 30px;
}
</style>

