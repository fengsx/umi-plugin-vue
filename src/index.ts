import { IApi } from '@umijs/types';

const { VueLoaderPlugin } = require('vue-loader');

export default function(api: IApi) {
  api.describe({
    key: 'vue',
    enableBy: api.EnableBy.config,
    config: {
      default: {
        polyfill: false,
      },
      schema(joi) {
        return joi.object({
          polyfill: joi.boolean(),
        });
      },
    },
  });

  api.chainWebpack(memo => {
    memo.module
      .rule('vue')
      .test(/\.vue$/)
      .use('vue-loader')
      .loader('vue-loader');

    memo.module
      .rule('css')
      .test(/\.css$/)
      .use('vue-style-loader')
      .loader('vue-style-loader');

    memo.plugin('VueLoaderPlugin').use(VueLoaderPlugin);

    return memo;
  });
}
