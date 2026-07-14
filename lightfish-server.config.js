import { defineConfig } from '@lightfish/server';

export default defineConfig({
  apiDir: './server/router',
  appName: '__PROJECT_NAME__', // 应用名称，用于数据库schema前缀
});
