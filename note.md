---
---

# 开发步骤

1. app.ts 如何文件，配置 nodemon 监听文件变化自动重启，使用 tsc 进行 ts 编译（由于使用 tsc 进行编译可以使用 import 进行模块引入）
2. 统一处理 req 解析需要的参数 使用 querystring，将 get 请求的 params 解析为对象，post 的请求的 body 解析为对象
3. 构造 ResModel 对象作为接口请求的统一包装对象
4. 在 router 里面分别处理各个 api 接口的业务逻辑
