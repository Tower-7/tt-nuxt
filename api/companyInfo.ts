import request from "./request";
/**
 * 获取企业信息
 */
function fetchData() {
  return request({
    url: "/company/intro",
    method: "get"
  });
}
export { fetchData };
