<template>
    <div class="dashboard-container">
    <component :is="currentRole"></component>
  </div>
</template>

<script>
import adminDashboard from './admin'
export default {
  name: 'dashboard',
  components: { adminDashboard },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
