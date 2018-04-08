<template>
    <div class="app-container">
        <el-input style='width:340px;' placeholder="输入文章名称搜索" prefix-icon="el-icon-document"></el-input>
        <el-input style='width:180px;' placeholder="输入作者名称搜索" prefix-icon="el-icon-document"></el-input>
        <el-button style='margin-bottom:20px;' type="primary" icon="document">查询</el-button>

        <el-table :data="articleList" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit highlight-current-row>
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
        </el-table>
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
  }
};
</script>

