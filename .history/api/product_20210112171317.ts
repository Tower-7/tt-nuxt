import request from "./request";
/**
 * 获取轮播图
 */
function fetchList() {
  return request({
    url: "product/list",
    method: "get"
  });
}
export { fetchList };
