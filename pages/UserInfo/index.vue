<!--个人信息-->
<template>
	<div>

		<div class="mright AccountSummary">
			<h2>基本信息</h2>
			<table class="basic-info table1" border="0">
				<tbody>
					<tr>
						<td class="col1">交易密码</td>
						<td>
							<span id="lbPayPwd" class="u-PayPwd">未密码</span>
							<router-link to="/ChangePayPasswd">
								<el-button round size="mini" id="lbBPayPwd">更改交易密码</el-button>
							</router-link>
						</td>
					</tr>
					<tr>
						<td class="col1">认证手机</td>
						<td>
							<span id="lbMobile" class="u-mobile">1772***9314</span>
							<router-link to="/PwdVerify">
								<el-button round size="mini" id="lbBMobile">更改手机号</el-button>
							</router-link>
						</td>
					</tr>
					<tr>
						<td class="col1">认证邮箱</td>
						<td>
							<span class="u-mail"><span id="lbMail" class="u-mail">还未认证</span></span>
							<router-link to="/PwdVerify2">
								<el-button round size="mini" id="lbBMail">立即认证</el-button>
							</router-link>
						</td>
					</tr>
					<tr>
						<td class="col1">拍卖出价资格</td>
						<td>
							<span id="lbPaiMai" class="u-Paimai">没有资格</span>
							<router-link to="/MyAuctionPower">
								<el-button round size="mini">升级
								</el-button>
							</router-link>

						</td>
					</tr>
				</tbody>
			</table>
			<div class="hr"></div>
			<h2>安全设置<span class="Small">您上次登录时间是<span id="lbfldLastLoginTime">2018-10-23 10:05:05</span>，登录IP是：<span id="lbIP">10.81.85.227</span></span></h2>
			<table class="table2" border="0">
				<tbody>
					<tr>
						<td>
							<div class="safe-grade">安全指数：</div>
						</td>
						<td>
							<div class="score-step">
								<el-progress :percentage="80" color="#E4393C"></el-progress>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			<table class="table3" border="0">
				<tbody>
					<tr>
						<td class="bg">
							<div class="ico-state ico-pwd-1"></div>
						</td>
						<td>
							登录密码<br> 定期修改登录密码，可提高账户安全性。
						</td>
					</tr>
					<tr>
						<td>
							<div class="ico-state ico-card-0"></div>
						</td>
						<td>
							身份验证
						</td>
					</tr>
					<tr>
						<td>
							<div class="ico-state ico-pwd-0"></div>
						</td>
						<td>
							交易密码<br> 互联网账号存在被盗风险，建议您定期更改交易密码以保护账户安全。
						</td>
					</tr>
					<tr>
						<td>
							<div class="ico-state ico-mobile-1"></div>
						</td>
						<td>
							手机认证<br> 互联网账号存在被盗风险，建议您定期更改交易密码以保护账户安全。
						</td>
					</tr>
					<tr>
						<td>
							<div class="ico-state ico-mail-0"></div>
						</td>
						<td>
							邮箱认证<br> 互联网账号存在被盗风险，建议您定期更改交易密码以保护账户安全。
						</td>
					</tr>
				</tbody>
			</table>
			<div class="remind">
				<b>联系客服人工处理 <a href="" target="_blank">点击发站内信给Jerry</a></b><br> 您可以通过提供相关身份信息，申请客服人工找回。
				<br> 1 填写账户信息核实身份；<br> 2 客服人工审核2个工作日；<br> 3 审核通过，成功修改。<br>
				<br>
			</div>
		</div>

	</div>
</template>

<script>
	import '~/assets/css/UserInfo.css'
	import '~/assets/css/jystyle.css'
	export default {

	}
</script>

<style>

</style>