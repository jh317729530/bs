<template>
    <div class="components-container app-container">
        <div class="editor-container">
            <dnd-list :list1="selectedKeywords" :list2="allKeywords" list1Title="已选关键字" list2Title="可选关键字" @pushToLeft="pushToLeft" @pushToRight="pushToRight"></dnd-list>
        </div>
        <div class="operate-container">
            <el-row>
                <el-col :span="2">
                    <el-button type="primary" @click="saveKeywords">保存</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import DndList from '@/components/DndList'
import { getKeywords, setKeywords } from '@/api/keywords'
import { Message } from 'element-ui'

export default {
  name: 'researchKeyword',
  components: { DndList },
  data() {
    return {
      selectedKeywords: [],
      allKeywords: [],
      selectedIds: [],
      noSelectedIds: []
    }
  },
  methods: {
    fetchData() {
      getKeywords().then((res) => {
        this.allKeywords = res.info.noSelectedKeywords
        this.selectedKeywords = res.info.selectedKeywords
        this.allKeywords.forEach((keyword) => {
          this.noSelectedIds.push(keyword.id)
        })
      })
    },
    saveKeywords() {
    //   this.selectedKeywords.forEach((keyword) => {
    //     this.selectedIds.push(keyword.id)
    //   })

    //   this.allKeywords.forEach((keyword) => {
    //     this.noSelectedIds.push(keyword.id)
    //   })
      console.log(this.noSelectedIds)
      setKeywords(this.selectedIds, this.noSelectedIds).then(() => {
        Message.success('设置成功')
      })
    },
    pushToLeft(id) {
      this.selectedIds.push(id)
      console.log(this.selectedIds)
    },
    pushToRight(id) {
      this.noSelectedIds.push(id)
      console.log(this.noSelectedIds)
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


