import axios from "axios"
// 创建axios实例
const requests = axios.create({
  baseURL: "http://sentence.iciba.com", // api的base_url
  timeout: 5000 // 请求超时时间
})

export default requests