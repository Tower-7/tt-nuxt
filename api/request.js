import axios from "axios";

const service = axios.create({
  baseURL: "http://8.210.11.11:8000/",
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000
});
// request interceptor
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);
// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data; //res is my own data
    if (res.code === 200) {
      return res.data;
    } else {
      Message({
        message: res.msg || "Error",
        type: "error",
        duration: 2 * 1000
      });
      return Promise.reject(new Error(res.msg || "Error"));
    }
  },
  error => {
    console.log("err" + error); // for debug
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);
export default service; //导出封装后的axios
