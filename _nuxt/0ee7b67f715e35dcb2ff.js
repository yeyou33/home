(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{528:function(e,t,a){"use strict";a.r(t);var l=a(108),o=a.n(l),r={data:function(){return{labelPosition:"top",parentIdd:[],parentId:[],parentList:[],options:[],dialogImageUrl:"",dialogVisible:!1,fileList:[],hidelist:[],active:"",form:{categoryId:"",category:"",radio1:"",radio2:"",radio3:"",radio4:"",phone:"",title:"",name:"",list:[],desc:"",image:[]}}},methods:{handleSuccess:function(e,t,a){this.fileList.push(t.response.url),this.form.image=this.fileList},handleRemove:function(e,t){console.log(e,t)},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},onSubmit:function(){var e=this.form;o.a.post("https://www.easy-mock.com/mock/5bef818022aea84bf63bfe30/user/user/upload",e).then(function(e){console.log(e)}).catch(function(e){console.log(e)}),console.log("submit!")},handleChange:function(e){var t=this;o.a.get("http://localhost:8082/itemCat/findByParentId.do?",{params:{parentId:e}}).then(function(e){t.parentIdd=e.data})},Change:function(e){console.log(e);var t=this;o.a.get("http://localhost:8082/itemCat/findByParentId.do?",{params:{parentId:e}}).then(function(e){console.log(e),t.hidelist=e.data,console.log(t.hidelist)})},needChange:function(e){this.active=e}},created:function(e){var t=this;o.a.get("http://localhost:8082/itemCat/findByParentId.do?",{params:{parentId:0}}).then(function(e){t.parentId=e.data})}},i=a(24),n=Object(i.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"jd_cz_tbcon"},[a("div",{staticClass:"jd_cz_bcon"},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"藏品分类："}},[a("el-select",{attrs:{"value-key":"id",placeholder:"请选择藏品分类"},on:{change:e.handleChange},model:{value:e.form.categoryId,callback:function(t){e.$set(e.form,"categoryId",t)},expression:"form.categoryId"}},e._l(e.parentId,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1),e._v(" "),a("el-select",{attrs:{"value-key":"id",placeholder:"请选择藏品分类"},on:{change:e.Change},model:{value:e.form.category,callback:function(t){e.$set(e.form,"category",t)},expression:"form.category"}},e._l(e.parentIdd,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"鉴定方式："}},[a("el-radio-group",{model:{value:e.form.radio1,callback:function(t){e.$set(e.form,"radio1",t)},expression:"form.radio1"}},[a("el-radio",{attrs:{label:3,border:""}},[e._v("有偿鉴定")]),e._v(" "),a("el-radio",{attrs:{label:6,border:""}},[e._v("加急鉴定")]),e._v(" "),a("el-radio",{attrs:{label:9,border:""}},[e._v("指定鉴定")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"选择鉴定师："}},[a("el-radio-group",{model:{value:e.form.radio2,callback:function(t){e.$set(e.form,"radio2",t)},expression:"form.radio2"}},[a("el-radio",{attrs:{label:1,border:""}},[e._v("全部")]),e._v(" "),a("el-radio",{attrs:{label:2,border:""}},[e._v("排除")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"鉴定结果："}},[a("el-radio-group",{model:{value:e.form.radio3,callback:function(t){e.$set(e.form,"radio3",t)},expression:"form.radio3"}},[a("el-radio",{attrs:{label:1,border:""}},[e._v("隐藏")]),e._v(" "),a("el-radio",{attrs:{label:2,border:""}},[e._v("不隐藏")]),a("label",[e._v("选择隐藏鉴定结果将多扣20藏币！")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"手机短信提醒："}},[a("el-radio-group",{on:{change:e.needChange},model:{value:e.form.radio4,callback:function(t){e.$set(e.form,"radio4",t)},expression:"form.radio4"}},[a("el-radio",{attrs:{label:1,border:""}},[e._v("需要")]),e._v(" "),a("el-radio",{attrs:{label:2,border:""}},[e._v("不需要")])],1)],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:1==e.active,expression:"active==1"}],attrs:{label:"手机号码："}},[a("el-input",{staticStyle:{width:"60%"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"帖子标题："}},[a("el-input",{staticStyle:{width:"60%"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"添加标签："}},[a("el-input",{staticStyle:{width:"60%"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"推荐标签："}},[a("el-checkbox-group",{staticStyle:{"padding-top":"8px"},attrs:{max:5,size:"small"},model:{value:e.form.list,callback:function(t){e.$set(e.form,"list",t)},expression:"form.list"}},e._l(e.hidelist,function(t,l){return a("el-checkbox",{key:l,attrs:{label:t}},[e._v(e._s(t.name))])}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"藏品描述："}},[a("el-input",{staticStyle:{width:"75%"},attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),e._v(" "),a("el-form-item",[a("el-upload",{ref:"upload",attrs:{action:"http://localhost:8082/upload.do",name:"picFile","list-type":"picture-card","file-list":e.fileList,"on-preview":e.handlePictureCardPreview,"on-success":e.handleSuccess,"on-remove":e.handleRemove}},[a("i",{staticClass:"el-icon-plus"})]),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("发布")]),e._v(" "),a("el-button",[e._v("重填")])],1)],1)],1),e._v(" "),a("div",{staticClass:"fl up_announcement"},[a("b",[e._v("提示：")]),a("br"),e._v(" 1、上传前您必须同意：本网认为东西不对或图片不清楚有权删除和编辑；\n\t\t"),a("br"),e._v(" "),a("div",{staticStyle:{position:"relative","padding-top":"8px"}},[e._v("\n\t\t\t2、用微信收订单消息和管理订单\n\t\t\t"),a("font",{attrs:{color:"#ff4a0a"}},[e._v("(new)")]),e._v("："),a("br")],1),e._v("\n\t\t3、图片上传按钮显示红色叉叉，可能FLASH插件版本太低，需要安装FLASH插件\n\t\t"),a("a",{attrs:{href:"http://get.adobe.com/cn/flashplayer/",target:"_blank"}},[a("font",{attrs:{color:"#00CC00"}},[e._v("下载安装")])],1),e._v("（安装完成后需刷新当前页面）；"),a("br"),e._v(" 4、如果点击上传图片后没有反映，请使用IE或者360浏览器；\n\t\t"),a("br"),e._v(" 5、为了保证您能更快更顺畅的上传图片，我们建议您把图片控制在100K以内，图片超过1M很容易超时出错；\n\t\t"),a("br"),e._v(" 6、如果无法上传，请联系QQ：\n\t\t"),e._m(0),e._v("、\n\t\t"),e._m(1),e._v("，联系电话：0571-87357345（工作日：9:00-17:30）。\n\t")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("a",{attrs:{target:"_blank",href:"tencent://message/?uin=3503899378&Site=%E5%8D%8E%E5%A4%8F%E6%94%B6%E8%97%8F%E7%BD%91&Menu=yes"}},[t("img",{staticStyle:{"vertical-align":"middle",border:"0px"},attrs:{src:"images/wp_3.gif",alt:"点击这里给我发消息"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("a",{attrs:{target:"_blank",href:"tencent://message/?uin=1548588393&Site=%E5%8D%8E%E5%A4%8F%E6%94%B6%E8%97%8F%E7%BD%91&Menu=yes"}},[t("img",{staticStyle:{"vertical-align":"middle",border:"0px"},attrs:{src:"images/wp_3.gif",alt:"点击这里给我发消息"}})])}],!1,null,null,null);n.options.__file="Estimation_M2_a.vue";t.default=n.exports}}]);