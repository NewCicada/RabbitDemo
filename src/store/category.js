import { getCategoriesAPI } from "@/api/home";
// 导入分类常量数据
import { topCategories } from "@/api/constants";

const category = {
  namespaced: true, //开启命名空间
  state() {
    return {
      list: topCategories.map((name, i) => ({ name, id: i })), //分类列表
    };
  },
  mutations: {
    setCategories(state, payload) {
      state.list = payload;
    },
    /**
     * 控制导航下拉菜单的显示
     * @param state 状态对象
     * @param index 一级分类ID
     */
    open(state, index) {
      state.list[index].open = true;
    },
    /**
     * 控制导航下拉菜单的隐藏
     * @param state 状态对象
     * @param index 一级分类ID
     */
    close(state, index) {
      state.list[index].open = false;
    },
  },
  actions: {
    /**
     * 获取分类数据
     * @param commit
     * @returns {Promise<void>}
     */
    async getCategories({ commit }) {
      const data = await getCategoriesAPI();
      console.log("res", data);
      // 为每一个元素添加open属性（下拉菜单展示属性）
      data.result.forEach((item) => (item.open = false));
      commit("setCategories", data.result);
    },
  },
};
/**
 * @homeAPI 分类页API
 */
import request from "@/utils/request";

/**
 * 获取指定一级分类数据
 * @param id 一级分类ID
 * @returns {*}
 */
export function getTopCategoryById(id) {
  return request.get("/category", { id });
}

/**
 * 根据二级分类ID获取筛选条件
 * @param id 二级分类ID
 * @returns {*}
 */
export function getSubCategoryFilterById(id) {
  return request.get("/category/sub/filter", { id });
}

/**
 * 获取商品列表
 * @param params 分类id、筛选条件、排序条件、分页信息
 * @returns {*}
 */
export function getGoodsReq(params) {
  return request.post("/category/goods", params);
}

export default category;
