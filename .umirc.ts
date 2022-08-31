import { defineConfig } from 'dumi';

const repo = 'HDesign';

export default defineConfig({
  title: 'HDesign',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',

  base: `/${repo}/`, // 打包路径配置
  publicPath: `/${repo}/`,
  locales: [
    // 多国语言顺序配置
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
});
