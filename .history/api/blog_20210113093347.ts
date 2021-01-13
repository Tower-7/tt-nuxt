import request from "./request";
/**
 * 获取商品列表
 */
function fetchList() {
  return request({
    url: "case/list",
    method: "get"
  });
}
export { fetchList };
