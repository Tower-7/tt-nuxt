import request from "./request";
/**
 * 获取轮播图
 */
export function fetchSeo(id: any) {
  return request({
    url: "seo/detail",
    method: "get",
    params: { id }
  });
}
