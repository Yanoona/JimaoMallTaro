export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/photograph/index",
    "pages/dshop/index",
    "pages/message/index",
    "pages/my/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "集贸集市",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    custom: true,
    color: "#000000",
    selectedColor: "#DC143C",
    backgroundColor: "#ffffff",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
      },
      {
        pagePath: "pages/photograph/index",
        text: "视频",
      },
      {
        pagePath: "pages/dshop/index",
        text: "促销",
      },
      {
        pagePath: "pages/message/index",
        text: "消息",
      },
      {
        pagePath: "pages/my/index",
        text: "我的",
      },
    ],
  },
});
