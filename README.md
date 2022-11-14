
<h1 align="center">Arion Web Temp (vue2)</h1>

技术栈
----
- vue2: ...
- Element Ui 2.13.x :

环境和依赖
----

- node
- yarn
- webpack
- eslint
- husky
- @vue/cli
- sass



项目下载和运行
----

- 安装依赖
```
npm install --registry=https://registry.npm.taobao.org
```

- 开发模式运行
```
yarn dev
```

- 编译项目
```
yarn build
```

- Lints and fixes files
```
yarn lint
```

Eslint 规则
----
- 单引号为主
- 代码结束加上分号
- 箭头函数只有一个参数忽略括号
- 构造函数大写
- 未改变的变量使用const声明
- script内的 钩子函数顺序
- order: 
  * "el"
  * "name"
  * "key",
  * "parent",
  * "functional",
  * ["delimiters", "comments"],
  * ["components", "directives", "filters"],
  * "extends",
  * "mixins",
  * ["provide", "inject"],
  * "ROUTER_GUARDS",
  * "layout",
  * "middleware",
  * "validate",
  * "scrollToTop",
  * "transition",
  * "loading",
  * "inheritAttrs",
  * "model",
  * ["props", "propsData"],
  * "emits",
  * "setup",
  * "asyncData",
  * "data",
  * "fetch",
  * "head",
  * "computed",
  * "watch",
  * "watchQuery",
  * "LIFECYCLE_HOOKS",
  * "methods",
  * ["template", "render"],
  * "renderError"
- …………


Husky提交 规则
----

 * feat：新增功能
 * fix：bug 修复
 * docs：文档更新
 * style：不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
 * refactor：重构代码(既没有新增功能，也没有修复 bug)
 * perf：性能, 体验优化
 * test：新增测试用例或是更新现有测试
 * build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
 * ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
 * chore：不属于以上类型的其他类型，比如构建流程, 依赖管理
 * revert：回滚某个更早之前的提交

代码行数 规则
----

- 单个函数代码块内的代码不超过100⾏
- 单个vue不能超过600行代码
  * 正常情况下单个文件内的代码若超过600行，应该考虑需要将代码按功能进行整合、优化、分离。

注释 规则
----
- 业务复杂、关键地方需要有说明注释。特别是针对状态值的
- 组件公用需要为每个函数、每个props增加注释。另外在代码关键地方也需要加注释
