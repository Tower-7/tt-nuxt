import request from "./request";
/**
 * 获取轮播图
 */
export function fetchList() {
  return request({
    url: "banner/list",
    method: "get"
  });
}
