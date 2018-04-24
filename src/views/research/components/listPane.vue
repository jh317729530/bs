<template>
    <div>
        <el-input style='width:180px;' placeholder="输入标题搜索" prefix-icon="el-icon-document"></el-input>
        <el-input style='width:180px;' placeholder="输入上传者搜索" prefix-icon="el-icon-document"></el-input>

        <el-button type="primary">查询</el-button>
        <el-table :data="list" border style="width: 100%;margin-top: 15px">
            <el-table-column prop="date" align="center" label="上传日期" width="180px">
            </el-table-column>
            <el-table-column prop="title" align="center" label="标题">
            </el-table-column>
            <el-table-column prop="rate" align="center" label="评分" width="180px">
                <template slot-scope="scope">
                    <el-rate v-model="scope.row.rate" disabled show-score text-color="#ff9900" score-template="{value}" v-if="scope.row.rate">
                    </el-rate>
                    <span v-else>未评分</span>
                </template>
            </el-table-column>
            <el-table-column prop="author" align="center" label="上传者" width="180px">
            </el-table-column>
            <el-table-column prop="status" align="center" label="状态" width="180px">
                <template slot-scope="scope">
                    <span v-if="scope.row.status === 1">审核通过</span>
                    <span v-if="scope.row.status === 2">未通过</span>
                </template>
            </el-table-column>
            <el-table-column align="center" label="操作" width="180px" fixed="right">
                <template slot-scope="scope">
                    <el-button type="primary" v-if="!scope.row.rate" v-popover:setRate>评分</el-button>
                    <el-button v-if="scope.row.status === 2" v-popover:setReview>审核</el-button>

                    <el-popover ref="setRate" placement="top" width="160" trigger="click">
                        <div>
                            <el-rate v-model="rate" show-score @change="saveRate">
                            </el-rate>
                        </div>
                    </el-popover>

                    <el-popover ref="setReview" placement="top" width="170" trigger="click">
                        <el-button size="small" type="success" @click="review(1)">通过</el-button>
                        <el-button size="small" type="danger" @click="review(2)">不通过</el-button>
                    </el-popover>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
  name: "listPane",
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      rate: null,
      visible: false
    };
  },
  methods: {
    saveRate(rate) {
      this.rate = rate;
      this.visible = false;
      this.list[2].rate = rate;
    },
    review(pass) {
      this.list[2].status = pass
    }
  }
};
</script>

