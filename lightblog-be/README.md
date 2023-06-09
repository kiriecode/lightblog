# 本地运行 - 后端

## 安装依赖

```shell
pnpm i
```

## 创建数据库

1. 手动创建 database

- 创建一个名为`blog`的数据库.
- 编码为`utf8mb4`

2. 创建数据库表结构

- 手动执行

  - 在数据库中执行`/src/config/blog-init.sql`中的 SQL 语句.
  - 里面的`insert`数据也会一起放进去.

- 自动执行
  - 设置 TypeORM 的 `synchronize=true` 自动创建数据库表结构.


## 配置连接信息

### 配置环境变量

在服务器中使用环境变量配置数据库连接信息.

```shell
# 请修改为自己的数据库配置
export DB_HOST=localhost
export DB_PORT=3306
export DB_USERNAME=username
export DB_PASSWORD=password
export DB_DATABASE=blog
```


### 直接修改

修改`/src/config/index.ts`中的数据库配置

```ts
// 修改为自己的数据库配置
export const DATASOURCE = {
  host: 'localhost',
  port: 3306,
  username: 'username',
  password: 'password',
  database: 'blog',
  synchronize: false, // 是否自动修改表结构
};
```

请注意: synchronize 项 在生产环境中设为 false; 开发环境中设可以为 true. 否则会导致数据丢失.


## 启动服务

```shell
# 开发环境
pnpm dev

# 生产环境
# 支持热修改
pnpm start
```

## 打包

```shell
pnpm build
```

# 项目结构:

```shell
lightblog-be
├── src
│   ├── dist : 编译后的文件
│   ├── app.ts : 入口文件
│   ├── routes.ts : 路由配置, 转发请求到Controller
│   ├── controller
│   │   └── ...Controller.ts : ...Controller 层: 处理请求, 检查参数, 调用Service
│   ├── Service
│   │   └── ...Service.ts : ...Servic 层: 处理业务逻辑, 调用实体类仓库对象
│   ├── entities
│   │   └── ...ts : ...实体
│   ├── types : 类型声明
│   │   ├── index.d.ts : 通用类型声明
│   │   └── ...d.ts : ...类型声明
│   ├── errors : 自定义错误
│   ├── config
│   │   ├── index.ts : 声明全局变量等配置
│   │   ├── data-source.ts : 数据库配置
│   │   └── blog-init.sql : 初始化数据库SQL语句, 带一些测试数据
│   └── utils
│       ├── winstonLogger.ts : 日志工具
│       ├── routerResponse.ts : 统一响应格式
│       ├── errorHandler.ts : 统一错误处理
│       └── tool.ts : 常用工具类
├── node_modules : 依赖包
├── public
│   └── logs : 日志文件
├── .gitignore : git忽略文件
├── .prettierrc : prettier配置
├── .eslintrc.js : eslint配置
├── package.json : 项目依赖, 脚本等信息
├── tsconfig.json : typescript配置
└── README.md : 项目说明
```
