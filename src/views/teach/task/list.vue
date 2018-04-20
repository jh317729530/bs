<template>
    <div class="tab-container">
        <el-tabs style='margin-top:15px;' v-model="activeTabName" type="border-card" @tab-remove="removeTab">
            <el-tab-pane v-for="(item) in tabs" :key="item.id" :name="item.name" :label="item.label" :closable="!item.isList">
                <list-tab-Plane v-if="item.isList" @ievent="ievent"></list-tab-Plane>
                <task-detail v-else :content="item.content"></task-detail>
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
      activeTabName: '1',
      tabs: [{ name: '1', label: '任务列表', key: 'taskList', isList: true }]
    }
  },
  methods: {
    ievent(data) {
      console.log('allData:', data)

      data.label = data.title
      data.name = '2'
      data.isList = false
      data.content = `<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1><p style="text-align: center; font-size: 15px;"><img title="TinyMCE Logo" src="//www.tinymce.com/images/glyph-tinymce@2x.png" alt="TinyMCE Logo" width="110" height="97" /><ul>
        <li>Our <a href="//www.tinymce.com/docs/">documentation</a> is a great resource for learning how to configure TinyMCE.</li><li>Have a specific question? Visit the <a href="https://community.tinymce.com/forum/">Community Forum</a>.</li><li>We also offer enterprise grade support as part of <a href="https://tinymce.com/pricing">TinyMCE premium subscriptions</a>.</li>
      </ul>
      `
      console.log('allData:', data)

      this.tabs.push(data)
      this.activeTabName = data.name
    },
    removeTab(targetName) {
      const tabs = this.tabs
      if (targetName === '1') {
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

