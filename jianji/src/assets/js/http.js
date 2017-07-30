import axios from 'axios';
const baseURL='http://192.168.8.177';
var http = axios.create({
    baseURL: baseURL,
    // auth: {
    // 	username: 'Bearer',
    // 	password: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODQwMTU3MTc2NyIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE1MDEzOTczMTd9.qp7wxWMpguDyGf6acDAcrsVl1Mk7sDAtjT20LBJ8eYBszYZjaMWXgRqUJKI35cMZ91-RssaleCgUJSxaMzHYDQ',
    // }
    // headers:{
    // 	'authorization':'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODQwMTU3MTc2NyIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE1MDEzOTczMTd9.qp7wxWMpguDyGf6acDAcrsVl1Mk7sDAtjT20LBJ8eYBszYZjaMWXgRqUJKI35cMZ91-RssaleCgUJSxaMzHYDQ',
    // 	"accept": "application/json"}
});
//http.defaults.headers.common["Authorization"] = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODQwMTU3MTc2NyIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE1MDEzOTczMTd9.qp7wxWMpguDyGf6acDAcrsVl1Mk7sDAtjT20LBJ8eYBszYZjaMWXgRqUJKI35cMZ91-RssaleCgUJSxaMzHYDQ'
// 添加响应拦截器
http.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
// axios.create({
//   baseURL:"",
//   headers: {'Origin':'192.168.8.177'}
// });
export default http;