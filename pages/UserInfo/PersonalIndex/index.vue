<template>
  <div>
    <!-- 个人资料 begin -->
    <div class="mright">
      <h2 style="color:#646464; margin:20px 0 0 20px;">基本资料</h2>
      <table class="userinfo_table base-info">
        <tbody>
          <tr>
            <td class="col1">用户名：</td>
            <td class="col2">
              <label>
                <b>sktsky</b>
              </label>
            </td>
          </tr>
          <tr>
            <td class="col1">用户头像：</td>
            <td class="col2">
              <span class="pf-avatar-box" id="pf-avatar-box">
                <img
                  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551588234161&di=d42aa874facd50a30bd056fb344baa6e&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F24%2F20181224120245_ynyhc.jpg"
                  width="80"
                  height="80"
                >
              </span>
            </td>
          </tr>
          <tr>
            <td class="col1">手机号码：</td>
            <td class="col2">
              <div style="float:left;">
                <b>1557736666</b>
              </div>
              <div class="goto" style="float:left; margin-left:6px;">
                <el-button plain size="mini" type="primary">修改绑定</el-button>
              </div>
            </td>
          </tr>
          <tr>
            <td class="col1">邮箱：</td>
            <td class="col2">
              <div style="float:left;">
                <b>www.987456123@qq.com</b>
              </div>
              <div class="goto" style="float:left; margin-left:6px;">
                <el-button plain size="mini" type="primary">修改绑定</el-button>
              </div>
            </td>
          </tr>
          <tr>
            <td class="col1">所在地：</td>
            <td class="col2">
              <div style="float:left;">
                <el-cascader :disabled="true" :options="options" v-model="selectedOptions3"></el-cascader>
              </div>
            </td>
          </tr>
          <tr>
            <td class="col1">性别：</td>
            <td class="col2">
              <div style="float:left;">
                <b>男</b>
              </div>
            </td>
          </tr>
          <tr>
            <td class="col1">生日：</td>
            <td class="col2">
              <div style="float:left;">
                <b>1998-08-26</b>
              </div>
            </td>
          </tr>
          <tr>
            <td class="col1">QQ号码：</td>
            <td class="col2">
              <div style="float:left;">
                <b>741852963</b>
              </div>
            </td>
          </tr>
          <tr>
            <td class="col1">微信：</td>
            <td class="col2">
              <div style="float:left;" v-for="(msg,index) in items" :key="index">
                <b>{{msg.weixin}}</b>
              </div>
            </td>
          </tr>
          <tr>
            <td class="col1">爱好：</td>
            <td class="col2">
              <div style="float:left;">
                <b>游泳，爬山，射箭</b>
              </div>
            </td>
          </tr>
          <tr>
            <td class="col1">联系地址：</td>
            <td class="col2">
              <div style="float:left;">
                <b>广东省深圳市龙华区振华时代广场301室</b>
              </div>
            </td>
          </tr>
          <tr>
            <td class="col1">个人简介：</td>
            <td class="col2">
              <div style="float:left;">
                <b>这是一段个人简介，雅昌艺术网是世界知名的中国艺术品权威门户网站,是雅昌《中国艺术品数据库》的重要应用平台,涵盖字画拍卖,艺术品投资,画廊古董古玩交易信息等,是中国信誉服务专业收藏...</b>
              </div>
            </td>
          </tr>
          <tr>
            <td class="col1"></td>
            <td class="col2">
              <el-button
                icon="el-icon-edit-outline"
                @click="handleEdit()"
                round
                type="primary"
              >修改个人信息</el-button>
            </td>
          </tr>
        </tbody>
      </table>
      <br>
      <el-dialog title="个人信息编辑" :model="form" label-width="80px" :visible.sync="dialogFormVisible">
        <el-form label-width="80px">
          <el-row>
            <el-col :span="12">
              <el-form-item label="用户名">
                <el-input :disabled="true" v-model="form.name" placeholder="用户名"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="上传头像:">
            <el-upload
              ref="upload"
              action="http://localhost:8082/upload.do"
              name="picFile"
              list-type="picture-card"
              :file-list="fileList"
              :on-preview="handlePictureCardPreview"
              :on-success="handleSuccess"
              :on-remove="handleRemove"
              :before-upload="beforeAvatarUpload"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt>
            </el-dialog>
          </el-form-item>
          <el-row>
            <el-col :span="12">
              <el-form-item label="手机号码">
                <el-input :disabled="true" v-model="form.phone" placeholder="手机号码"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="邮箱">
                <el-input :disabled="true" v-model="form.email" placeholder="邮箱"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="所在地">
            <el-cascader
              size="large"
              :options="options"
              v-model="form.province"
              @change="handleChanges1"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="性别:">
            <el-radio-group v-model="form.gender">
              <el-radio v-model="form.gender" label="男" border></el-radio>
              <el-radio v-model="form.gender" label="女" border></el-radio>
              <el-radio v-model="form.gender" label="其他" border></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="生日:">
            <el-date-picker
              v-model="form.birthday"
              type="date"
              placeholder="选择日期"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd"
            ></el-date-picker>
          </el-form-item>
          <el-row>
            <el-col :span="12">
              <el-form-item label="QQ号码">
                <el-input v-model="form.qq" placeholder="QQ号码"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="微信">
                <el-input v-model="form.weixin" placeholder="微信"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="爱好:">
            <el-col :span="24">
              <el-checkbox-group v-model="form.hobby">
                <el-checkbox label="瓷器" name="hobby"></el-checkbox>
                <el-checkbox label="玉器" name="hobby"></el-checkbox>
                <el-checkbox label="字画" name="hobby"></el-checkbox>
                <el-checkbox label="钱币" name="hobby"></el-checkbox>
                <el-checkbox label="木器" name="hobby"></el-checkbox>
                <el-row>
                  <el-checkbox label="铜器" name="hobby"></el-checkbox>
                  <el-checkbox label="珠宝" name="hobby"></el-checkbox>
                  <el-checkbox label="钟表西洋器" name="hobby"></el-checkbox>
                  <el-checkbox label="文献书籍" name="hobby"></el-checkbox>
                </el-row>
                <el-checkbox label="杂项" name="hobby"></el-checkbox>
              </el-checkbox-group>
            </el-col>
          </el-form-item>
          <el-row>
            <el-col :span="18">
              <el-form-item label="联系地址:">
                <el-input v-model="form.address"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-form-item label="个人简介:">
                <el-input type="textarea" v-model="form.profile" :rows="5"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item>
            <el-button icon="el-icon-circle-check" type="primary" @click="save()">保存</el-button>
            <el-button icon="el-icon-circle-close" @click="dialogFormVisible = false">关闭</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import "~/assets/css/element.css"; //element自定义样式
import "~/assets/css/element-icons.ttf";
import "~/assets/css/element-icons.woff";
import "~/assets/css/UserInfo.css"; //用户页面样式
import "~/assets/css/jystyle.css"; //家园样式
import personalIndexApi from "@/api/personalIndex"; //用户数据api
// import { getData } from "~/plugins/axios.js";
import { regionData } from "element-china-area-data";
export default {
  data() {
    return {
      province: [],
      options: regionData,
      selectedOptions3: ["440000", "440300", "440306"],
      dialogImageUrl: "",
      dialogVisible: false,
      fileList: [],
      form: {
        sellerId: "1", //商家名称
        headPic: "", //上传头像
        province: [], //所在地
        gender: "", //性别
        birthday: "", //生日
        qq: "", //QQ
        weixin: "", //微信
        hobby: [], //爱好
        address: "", //地址
        profile: "" //个人简介
      },
      dialogFormVisible: false //编辑窗口是否可见
    };
  },

  // 	//刷新数据
  // 	// created(){
  // 	//   this.asyncData()
  // 	//   personalIndexApi.getList().then( response=>{
  // 	//     this.items=response.data
  // 	//   })
  // 	// },
  methods: {
    //获得用户信息
    asyncData() {
      return personalIndexApi.getList().then(res => {
        return {
          items: res.data
        };
      });
    },
    //保存数据提交
    save() {
      personalIndexApi.save(this.form).then(require => {
        //消息提示
        this.$message({
          message: response.data.message,
          type: response.data.success ? "true" : "false"
        });
      });
      this.dialogFormVisible = false; //关闭窗口
    },
    //打开编辑窗口
    handleEdit() {
      this.dialogFormVisible = true; //打开窗口
    },
    //图片上传成功后赋值
    handleSuccess(response, file, fileList) {
      //console.log(file)
      var self = this;
      self.fileList.push(file.response.url);
      self.form.headPic = self.fileList;
      //console.log(self.form.file);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 800px;
}
</style>