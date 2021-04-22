export default {
  platformId:function(name){/*获取vue路由后面的参数*/
    // eslint-disable-next-line no-sparse-arrays
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
  },
  getQueryString:function(name){
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
  },
  getMsg:function(name){/*获取参数*/
    return this.getQueryString(name)||this.platformId(name)
  },
}