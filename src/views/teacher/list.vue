<template>
    <div class="components-container">
        <div class="editor-container">
            <dnd-list :list1="selectedKeywords" :list2="allKeywords" list1Title="已选关键字" list2Title="可选关键字"></dnd-list>
        </div>
    </div>
</template>
<script>
import DndList from '@/components/DndList'

export default {
  name: 'researchKeyword',
  components: { DndList },
  data () {
      return {
         selectedKeywords: [],
         allKeywords: ['Java','计算机科学与技术','MySql']
      }
  }
}
</script>

