<template>
    <div class="components-container app-container">
        <div class="editor-container">
            <dnd-list :list1="selectedKeywords" :list2="allKeywords" list1Title="已选关键字" list2Title="可选关键字"></dnd-list>
        </div>
        <div class="operate-container">
            <el-row>
                <el-col :span="2">
                    <el-button type="primary">保存</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import DndList from '@/components/DndList'

export default {
  name: 'researchKeyword',
  components: { DndList },
  data() {
    return {
      selectedKeywords: [],
      allKeywords: [
        { id: 1, keyword: 'Java' },
        { id: 2, keyword: '计算机科学与技术' },
        { id: 3, keyword: 'MySql' },
        { id: 4, keyword: 'Redis' },
        { id: 5, keyword: 'Spring' },
        { id: 6, keyword: 'SpringBoot' },
        { id: 7, keyword: 'ElasticSearch' },
        { id: 8, keyword: '前端' },
        { id: 9, keyword: '大数据' },
        { id: 10, keyword: '人工智能' },
        { id: 11, keyword: 'Vue' },
        { id: 12, keyword: '深度学习' },
        { id: 13, keyword: '区块链' }
      ]
    }
  }
}
</script>
<style>
.operate-container{
    margin-left: 250px
}
</style>


