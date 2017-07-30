import axios from 'axios'
axios.interceptors.request.use(function (config) {
    config.withCredentials = true;
    return config;
}, function (err) {
    return Promise.reject(error);
});
//axios.defaults.headers.common['Authorization'] ='Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODQwMTU3MTc2NyIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE1MDEzOTczMTd9.qp7wxWMpguDyGf6acDAcrsVl1Mk7sDAtjT20LBJ8eYBszYZjaMWXgRqUJKI35cMZ91-RssaleCgUJSxaMzHYDQ';