import { IPushOptions, IGoOptions, IPopOptions, IReplaceOptions, IReLaunchOptions } from '../types';
import {initApi} from '../common';

export const push = initApi.push((options: IPushOptions) => {
  const { url, success, fail, complete } = options;
  my.navigateTo({
    url,
    success: function() {
      success && success();
    },
    fail: function(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res);
    }
  });
});

export const back = initApi.back((options?: IPopOptions) => {
  const { success, fail, complete } = options || {};
  my.navigateBack({
    delta: 1,
    success: function() {
      success && success();
    },
    fail: function(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res);
    }
  });
});

export const replace = initApi.replace((options?: IReplaceOptions) => {
  const { url, success, fail, complete } = options || {};
  my.redirectTo({
    url,
    success: function() {
      success && success();
    },
    fail: function(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res);
    }
  });
});

export const go = initApi.go((options: IGoOptions) => {
  const { step, success, fail, complete } = options;
  if (step < 0) {
    my.navigateBack({
      delta: Math.abs(step),
      success: function() {
        success && success();
      },
      fail: function(res) {
        fail && fail(res);
      },
      complete(res) {
        complete && complete(res);
      }
    });
  } else {
    fail && fail({errMsg: 'step不能大于或等于0'});
    complete && complete({errMsg: 'step不能大于或等于0'});
  }
});
export const reLaunch = initApi.reLaunch((options: IReLaunchOptions) => {
  const { url, success, fail, complete } = options;
  my.reLaunch({
    url,
    success: function() {
      success && success();
    },
    fail: function(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res);
    }
  });
});

export default {
  push,
  back,
  reLaunch,
  replace,
  go
};
