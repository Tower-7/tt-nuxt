import request from "./request";
/**
 * 获取商品列表
 */
function fetchList() {
  return request({
    url: "product/list",
    method: "get"
  });
}
export { fetchList };
