import axios from "axios";
import { URL_API_CONSTANTS } from "../../constants";
const instance = axios.create({
    baseURL: URL_API_CONSTANTS.DEFAULT_URL_API,
    //timeout: 1000,
    //headers: {'X-Custom-Header': 'foobar'}
  });

//cấu hình dữ liêu trả về
instance.interceptors.response.use(function (response) {
  return response.data ? response.data : {statusCode: response.status, message: response.statusText};
}, function (error) {
  const res = {data :{}, status: 0, message: '', headers: {}};
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    res.data = error.response.data;
    res.status = error.response.status;
    res.message = error.response.statusText;
    res.headers = error.response.headers;
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log('Error', error.message);
  }
  // return Promise.reject(error);
  return res;
});
export default instance