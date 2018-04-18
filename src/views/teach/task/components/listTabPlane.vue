<template>
    <el-table :data="taskList" border fit highlight-current-row style="width: 100%">

        <el-table-column align="center" label="序号" width="65" v-loading="loading" element-loading-text="正在加载">
            <template slot-scope="scope">
                <span>{{scope.row.id}}</span>
            </template>
        </el-table-column>

        <el-table-column min-width="300px" align="center" label="标题">
            <template slot-scope="scope">
                <span>{{scope.row.title}}</span>
            </template>
        </el-table-column>

        <el-table-column min-width="150px" align="center" label="发布人">
            <template slot-scope="scope">
                <span>{{scope.row.author}}</span>
            </template>
        </el-table-column>

        <el-table-column width="180px" align="center" label="发布时间">
            <template slot-scope="scope">
                <span>{{scope.row.createdTime}}</span>
            </template>
        </el-table-column>

        <el-table-column width="180px" align="center" label="任务状态">
            <template slot-scope="scope">
                <span>{{scope.row.status}}</span>
            </template>
        </el-table-column>

    </el-table>
</template>

<script>
export default {
  props: {
      type: {
          type: String,
          default: "list"
      }
  },
  name: "taskList",
  data() {
    return {
      taskList: [
          { id: 1,title: '一条新的任务',author:'主任',createdTime: '2018-04-18',status: '1'}
      ]
    };
  },
  handleTaskTabEdit(targetName,action) {
           if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      }
};
</script>

