<template>
    <div class="userInfo-container">
        <el-row>
            <el-col :span="12">
                <el-row>
                    <el-col :span="8">
                        <div class="detail-info">
                            <div class="label">姓名</div>
                            <div class="label-con"> {{ userInfo.name }} </div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="detail-info">
                            <div class="label">性别</div>
                            <div class="label-con">
                                <span v-if="userInfo.sex === 1">男</span>
                                <span v-else>女</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="detail-info">
                            <div class="label">工号</div>
                            <div class="label-con"> {{ userInfo.no }} </div>
                        </div>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="8">
                        <div class="detail-info">
                            <div class="label">年龄</div>
                            <div class="label-con"> {{ userInfo.age }} </div>
                        </div>
                    </el-col>

                    <el-col :span="8">
                        <div class="detail-info">
                            <div class="label">出生日期</div>
                            <div class="label-con"> {{ userInfo.birthday }} </div>
                        </div>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col>
                        <div class="detail-info">
                            <div class="label">个人简介</div>
                            <div class="label-con"> {{ userInfo.description }} </div>
                        </div>
                    </el-col>
                </el-row>

            </el-col>

            <el-col :span="12" push="3">
                <div class="img-con">
                    <img :src="userInfo.imgUrl">
                </div>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="3">
                <el-button type="primary" @click="handleUpdateUserInfo">修改用户信息</el-button>
            </el-col>
            <el-col :span="3">
                <el-button type="primary" @click="handleUpdatePassword">修改密码</el-button>
            </el-col>
        </el-row>

        <el-dialog title="修改个人信息" :visible.sync="changeUserInfoDialogVisable">
            <el-form :rules="rules" ref="userInfo" label-position="right" label-width="90px" style='width: 430px; margin-left:40px;'>
                <el-form-item label="姓名:" prop="name">
                    <el-input :value="userInfo.name" style='width: 200px;'></el-input>
                </el-form-item>

                <el-form-item label="性别:" prop="sex">
                    <el-select class="filter-item" :value="userInfo.sex" placeholder="请选择">
                        <el-option v-for="item in  sexOption" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="年龄:" prop="age">
                    <el-input :value="userInfo.age" style='width: 60px;'></el-input>
                </el-form-item>

                <el-form-item label="出生日期:" prop="birthday">
                    <el-date-picker :value="userInfo.birthday" value-format="yyyy-MM-dd" type="date" placeholder="Please pick a date"></el-date-picker>
                </el-form-item>

                <el-form-item label="个人简介:" prop="description">
                    <el-input :value="userInfo.description" type="textarea" :autosize="{minRows: 3, maxRows: 3}"></el-input>
                </el-form-item>

                <el-form-item label="照片:" prop="imgUrl">
                    <el-upload class="avatar-uploader" action="" :show-file-list="false">
                        <img v-if="userInfo.imgUrl" :src="userInfo.imgUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
            </el-form>

            <div slot="footer" class="dialog-footer">
                <el-button @click="changeUserInfoDialogVisable = false">取消</el-button>
                <el-button type="primary">保存</el-button>
            </div>
        </el-dialog>

        <el-dialog title="修改用户密码" :visible.sync="changeUserPassword">
            <el-form :rules="rules" ref="password" label-position="right" label-width="90px" style='width: 430px; margin-left:40px;'>
                <el-form-item label="新密码" prop="firstPassword">
                    <el-input style='width: 200px;' type="password" placeholder="请输入新密码"></el-input>
                </el-form-item>

                <el-form-item label="确认密码" prop="secondPassword">
                    <el-input style='width: 200px;' type="password" placeholder="再次输入新密码"></el-input>
                </el-form-item>
            </el-form>

            <div slot="footer" class="dialog-footer">
                <el-button @click="changeUserPassword = false">取消</el-button>
                <el-button type="primary">保存</el-button>
            </div>
        </el-dialog>
    </div>

</template>
<script>
export default {
  name: 'userInfo',
  data() {
    return {
      userInfo: {
        name: '王祖贤',
        age: 18,
        sex: 2,
        no: '123455',
        birthday: '2000-07-03',
        description:
          '按时付款就奥胖傅家坡地方恐怕速度快佛牌上岛咖啡破快速跌破飞机送PDF就跑到附近pods附件破损的积分跑附件是破解收到',
        imgUrl:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523041156&di=c91d384019df1e04dac42300a31e94df&imgtype=jpg&er=1&src=http%3A%2F%2Fs7.rr.itc.cn%2Fg%2FwapChange1%2F20158_8_12%2Fa03po78235513601405.jpg'
      },
      changeUserInfoDialogVisable: false,
      sexOption: [{ value: 1, label: '男' }, { value: 2, label: '女' }],
      changeUserPassword: false
    }
  },
  methods: {
    handleUpdateUserInfo() {
      this.changeUserInfoDialogVisable = true
    },
    handleUpdatePassword() {
      this.changeUserPassword = true
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.userInfo-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
  margin: 30px;

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}

.detail-info {
  .label {
    font-family: "PingFang SC";
    text-align: left;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    line-height: 1;
    padding: 11px 12px 11px 16px;
    box-sizing: border-box;
    color: blue;
  }
  .label-con {
    font-family: "PingFang SC";
    line-height: 36px;
    position: relative;
    font-size: 14px;
    margin-left: 120px;
  }
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

