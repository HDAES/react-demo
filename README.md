# 项目说明

## 1.拉取项目

```
git clone xxxxxxx
```

## 2.进入项目，拉取依赖

```
cd admin
yarn OR npm install
```

## 3.运行项目

```
yarn start   		//启动本地测试环境
yarn start:pro		//启动本地线上环境
yarn build:dev		//打包测试开发环境
yarn build:pro		//打包线上开发环境
```

## 4.文件目录

- build   										      **打包后的文件
- public 					 					        **公共文件
  - assets  								        **静态文件
    - image							            **图片
- src                               **主要内容
  -  http                           **请求文件
    - api                           **api路径
    - axios                         **请求的封装
    - index                         **请求的方法
  - pages                           **全部页面
  - redux                           **数据管理
  - router                          **路由管理
    - index          			          **路由文件
    - touter.config                 **路由配置文件  

## 5.  依赖

| `React`: `^17.0.2`             | [Github](https://github.com/facebook/react)    [官网](https://react.docschina.org/) |
| ------------------------------ | ------------------------------------------------------------ |
| `Axios`：`^0.21.1`             | [Github](https://github.com/axios/axios)                     |
| `React-redux`：`^7.2.3`        | [Github](https://github.com/reduxjs/react-redux)  [官网](https://redux.js.org/faq/react-redux) |
| `redux`：`^4.0.5`              | [Github](https://github.com/reduxjs/redux)  [官网](https://redux.js.org/) |
| `antd`：`^4.15.1`              | [Github](https://github.com/ant-design/ant-design)  [官网](https://ant.design/index-cn) |
| `@ant-design/charts`：`^1.1.2` | [Github](https://github.com/ant-design/ant-design-charts)  [官网](https://charts.ant.design/) |
| `react-router-dom`：`^5.2.0`   | [Github](https://github.com/ReactTraining/react-router#readme) |





