<template>
    <div class="app-container">
        <el-input style='width:340px;' placeholder="输入文章名称搜索" prefix-icon="el-icon-document"></el-input>
        <el-input style='width:180px;' placeholder="输入作者名称搜索" prefix-icon="el-icon-document"></el-input>
        <el-button style='margin-bottom:20px;' type="primary" icon="document">查询</el-button>

        <!-- <el-table :data="articleList" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit highlight-current-row>
            <el-table-column align="center" label='序号' width="95">
                <template slot-scope="scope">
                    {{scope.$index+1}}
                </template>
            </el-table-column>

            <el-table-column label="文章标题">
                <template slot-scope="scope">
                    {{scope.row.title}}
                </template>
            </el-table-column>

            <el-table-column label="作者" width="110" align="center">
                <template slot-scope="scope">
                    <el-tag>{{scope.row.author}}</el-tag>
                </template>
            </el-table-column>

            <el-table-column label="阅读量" width="115" align="center">
                <template slot-scope="scope">
                    {{scope.row.pageviews}}
                </template>
            </el-table-column>

            <el-table-column align="center" label="日期" width="220">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span>{{scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}')}}</span>
                </template>
            </el-table-column>
        </el-table> -->
        <div class="waterfall">
            <el-card class="box-card item" @click="open">
                <div slot="header" class="clearfix">
                    <span>[译] HTTPS 的故事</span>
                </div>
                <div class="text item">
                    本文其实总体算是一篇译文，原作在此 HTTPS explained with carrier pigeons, 看完不禁感叹作者的思路清奇，于是跟风把原文重新“诠释”一下 ...你...
                </div>
            </el-card>

            <el-card class="box-card item" @click="open">
                <div slot="header" class="clearfix">
                    <span>[译] HTTPS 的故事</span>
                </div>
                <div class="text item">
                    本文其实总体算是一篇译文，原作在此 HTTPS explained with carrier pigeons, 看完不禁感叹作者的思路清奇，于是跟风把原文重新“诠释”一下 ...你...
                </div>
            </el-card>

            <el-card class="box-card item" @click="open">
                <div slot="header" class="clearfix">
                    <span @click="open">[译] HTTPS 的故事</span>
                </div>
                <div class="text item" @click="open">
                    本文其实总体算是一篇译文，原作在此 HTTPS explained with carrier pigeons, 看完不禁感叹作者的思路清奇，于是跟风把原文重新“诠释”一下 ...你... 本文其实总体算是一篇译文，原作在此 HTTPS explained with carrier pigeons, 看完不禁感叹作者的思路清奇，于是跟风把原文重新“诠释”一下 ...你... 本文其实总体算是一篇译文，原作在此 HTTPS explained with carrier pigeons, 看完不禁感叹作者的思路清奇，于是跟风把原文重新“诠释”一下 ...你... 本文其实总体算是一篇译文，原作在此 HTTPS explained with carrier pigeons, 看完不禁感叹作者的思路清奇，于是跟风把原文重新“诠释”一下 ...你...
                </div>
            </el-card>

            <el-card class="box-card item" @click="open">
                <div slot="header" class="clearfix">
                    <span>[译] HTTPS 的故事</span>
                </div>
                <div class="text item">
                    本文其实总体算是一篇译文，原作在此 HTTPS explained with carrier pigeons, 看完不禁感叹作者的思路清奇，于是跟风把原文重新“诠释”一下 ...你...
                </div>
            </el-card>

            <el-card class="box-card item" @click="open">
                <div slot="header" class="clearfix">
                    <span>[译] HTTPS 的故事</span>
                </div>
                <div class="text item">
                    本文其实总体算是一篇译文，原作在此 HTTPS explained with carrier pigeons, 看完不禁感叹作者的思路清奇，于是跟风把原文重新“诠释”一下 ...你...
                </div>
            </el-card>

            <el-card class="box-card item" @click="open">
                <div slot="header" class="clearfix">
                    <span>[译] HTTPS 的故事</span>
                </div>
                <div class="text item">
                    本文其实总体算是一篇译文，原作在此 HTTPS explained with carrier pigeons, 看完不禁感叹作者的思路清奇，于是跟风把原文重新“诠释”一下 ...你...
                </div>
            </el-card>

        </div>

    </div>
</template>
<script>
export default {
  name: "researchResource",
  data() {
    return {
      articleList: [
        {
          title: "啊实打实的",
          author: "asd",
          pageviews: 100,
          timestamp: "2018-4-01 15:34"
        },
        {
          title: "啊实打实的",
          author: "asd",
          pageviews: 100,
          timestamp: "2018-4-01 15:34"
        }
      ]
    };
  },
  methods: {
    open() {
      window.open('http://www.baidu.com')
    }
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

