"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const login = async () => {
      common_vendor.index.showModal({
        title: "\u6E29\u99A8\u63D0\u793A",
        content: "\u4EB2\uFF0C\u6388\u6743\u5FAE\u4FE1\u767B\u5F55\u540E\u624D\u80FD\u6B63\u5E38\u4F7F\u7528\u5C0F\u7A0B\u5E8F\u529F\u80FD",
        success(res) {
          if (res.confirm) {
            common_vendor.index.getUserProfile({
              desc: "\u6CE8\u518C\u7528\u6237\u4FE1\u606F\u4F7F\u7528",
              lang: "zh_CN",
              success(res2) {
                console.log("res", res2);
                common_vendor.index.login({
                  provider: "weixin",
                  success(loginRes) {
                    console.log("loginRes.authResult", loginRes);
                    common_vendor.rn.callFunction({
                      name: "user",
                      data: {
                        code: loginRes.code,
                        avatarUrl: res2.userInfo.avatarUrl,
                        gender: res2.userInfo.gender,
                        nickName: res2.userInfo.nickName
                      }
                    }).then((res3) => {
                    });
                  }
                });
              }
            });
          } else {
            common_vendor.index.showToast({
              title: "\u60A8\u53D6\u6D88\u4E86\u6388\u6743",
              duration: 2e3
            });
          }
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(login)
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/lixudong/Documents/HBuilderProjects/cloud-test/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
