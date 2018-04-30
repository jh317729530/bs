<template>
    <div class='chart-container'>
        <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="图表" name="chart">
                <div class='chart-container'>
                    <chart height="100%" width="100%"></chart>
                </div>
            </el-tab-pane>
            <el-tab-pane label="列表" name="list">

            </el-tab-pane>
        </el-tabs>

        <!-- <chart height="100%" width="100%"></chart> -->
        <!-- <div class='chart-container'>
            <chart height='100%' width='100%'></chart>
        </div> -->
    </div>
</template>

<script>
import Chart from "@/components/Charts/chart";
export default {
  components: { Chart },
  data() {
    return {
      activeName: "chart"
    };
  }
};
</script>

<style scoped>
.chart-container {
  position: relative;
  padding: 20px;
  width: 100%;
  height: 85vh;
}
</style>

