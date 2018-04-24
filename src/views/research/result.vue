<template>
    <div class="app-container">
        <el-tabs tab-position="left" type="border-card">
            <el-tab-pane label="成果列表">
                <list-pane :list="dataList"></list-pane>
            </el-tab-pane>
            <el-tab-pane label="成果详情">
                <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false">
                </el-upload>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import listPane from "./components/listPane";
export default {
  name: "result",
  components: {
    listPane
  },
  data() {
    return {
      dataList: [
        {
          date: "2018-04-24",
          title: "教研室工作管理平台的设计",
          rate: 2.5,
          author: "John",
          status: 1
        },
        {
          date: "2018-04-24",
          title: "作业管理平台",
          rate: 5,
          author: "Levis",
          status: 1
        },
        {
          date: "2018-04-24",
          title: "基于数据挖掘的血尿指标与胆结石的相关研究",
          rate: undefined,
          author: "Jack",
          status: 2
        },
        {
          date: "2018-04-24",
          title: "基于J2EE架构的职场交流平台的设计",
          rate: 3.8,
          author: "Mike",
          status: 1
        }
      ],
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}] 
    }
  }
};
</script>

