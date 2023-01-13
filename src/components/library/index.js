/**
 * 全局组件——应用级
 */
//#region 【全局组件】
// 骨架组件
// import XtxSkeleton from "@/components/library/XtxSkeleton";
// 轮播组件
// import XtxCarousel from "@/components/library/XtxCarousel";
// 查看更多组件
// import XtxMore from "@/components/library/XtxMore";
//#endregion

//#region [全局指令]
import directiveLazy from "@/components/directives/lazy";
//#endregion

// 导入Message
import Message from "@/components/library/Message";

//#region[批量注册组件]
// 1.获取模块的路径集合
const importFn = require.context("./", false, /\.vue$/);
// console.dir(importFn);
// 2. 获取到导入的文件的路径
const keys = importFn.keys();
//#endregion

const library = {
  install(app) {
    // app.component("组件名称", "单文件组件");
    // app.component(XtxSkeleton.name, XtxSkeleton);
    // app.component(XtxCarousel.name, XtxCarousel);
    // app.component(XtxMore.name, XtxMore);
    // 注册指令
    directiveLazy(app);
    // 3.批量导入组件
    keys.forEach((item) => {
      const component = importFn(item).default;
      app.component(component.name, component);
    });
    // 将 Message 方法挂载到全局属性中
    app.config.globalProperties.$message = Message;
  },
};

export default library;
