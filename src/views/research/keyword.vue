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
import { getKeywords } from '@/api/keywords'

export default {
  name: 'researchKeyword',
  components: { DndList },
  data() {
    return {
      selectedKeywords: [],
      allKeywords: []
    }
  },
  methods: {
    fetchData() {
      getKeywords().then((res) => {
        console.log(res)
        this.allKeywords = res.info.noSelectedKeywords
        this.selectedKeywords = res.info.selectedKeywords
      })
    }
  },
  created () {
    this.fetchData()
  }
}
</script>
<style>
.operate-container{
    margin-left: 250px
}
</style>


