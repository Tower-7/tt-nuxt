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
/**
 * 获取商品列表
 */
function fetchDetail(id: any) {
  return request({
    url: "product/detail",
    method: "get",
    params: { id }
  });
}
export { fetchList, fetchDetail };
