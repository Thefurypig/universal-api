import {
  RequestOptions,
  ResponseData,
} from '../types';
import { isDingdingMiniapp } from '@uni/env';
import {initApi} from '../common';

function request(options: RequestOptions) {
  // return new Promise((resolve, reject) => {
  let { url, method, data, dataType, headers, timeout, success, fail, complete } = options;
  const request = isDingdingMiniapp ? dd.httpRequest : my.request;
  request({
    url,
    headers,
    method,
    data,
    timeout,
    dataType,
    success: function(res: ResponseData) {
      success && success(res);
    },
    fail: function(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res);
    }
  });
}
export default initApi(request);