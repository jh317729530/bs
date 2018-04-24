<template>
    <div class="app-container">
        <el-input style='width:340px;' placeholder="输入文章名称搜索" prefix-icon="el-icon-document" v-model="queryTitle"></el-input>
        <el-button style='margin-bottom:20px;' type="primary" icon="document" @click="search">查询</el-button>
        <div class="waterfall">
            <el-card class="box-card item" @click="open" v-for="item1 in articleList" :key="item1.title">
                <div slot="header" class="clearfix" @click="open(item1.url)">
                    <span>{{item1.title}}</span>
                </div>
                <div class="text item" @click="open(item1.url)">
                    {{item1.shortContent}}
                </div>
            </el-card>
        </div>

    </div>
</template>
<script>
import { getResearch } from '@/api/research'
export default {
  name: "researchResource",
  data() {
    return {
      articleList: [],
      queryTitle: ''
    };
  },
  methods: {
    open(url) {
      window.open(url)
    },
    fetchData(title) {
      getResearch(title).then(res => {
        this.articleList = res.info
      })
    },
    search() {
      console.log(this.queryTitle)
      this.fetchData(this.queryTitle)
    }
  },
  created () {
    this.fetchData()
  }
};
</script>

<style>
.box-card {
  float: left;
  margin: 10px;
}
.waterfall {
  -moz-column-count: 4; /* Firefox */
  -webkit-column-count: 4; /* Safari 和 Chrome */
  column-count: 4;
  -moz-column-gap: 1em;
  -webkit-column-gap: 1em;
  column-gap: 1em;
}

.item {
  padding: 1em;
  margin: 0 0 1em 0;
  -moz-page-break-inside: avoid;
  -webkit-column-break-inside: avoid;
  break-inside: avoid;
}
</style>

