/**
 * ==============================================
 * Created by SaiJia Technology.
 * Author: ZhiHuaWei <zhihua_wei@foxmail.com>
 * Date: 2019/8/23 15:07
 * Project: YunAdmin后台管理系统
 * Version: 1.0.0
 * Power: login.js
 * ==========================================
 */

/**
 * 验证表单数据是否合法
 */
function verify() {
	if($("#username").val() == '') {
		layer.msg('用户名不能为空！');
		return false;
	} else if($("#password").val() == '') {
		layer.msg('登录密码不能为空！');
		return false;
	} else if($("#verify_code").val() == '') {
		layer.msg('请输入验证码！');
		return false;
	} else if($("#verify_code").val().length != 6) {
		layer.msg('验证码输入有误，请重新输入！');
		return false;
	}
	return true;
}