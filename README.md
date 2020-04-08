# Element table pagination

## Summary
* 基于 Element-UI 的 table 和 pagination 组件的二次封装
* Element-UI 版本 >= 2.13.0
* Vue 版本 >= 2.3.0



## INSTALL

```
$ npm i --save ele-table-pagination
```



## API

### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ------ | ------ |
| auto-load | 是否默认加载数据，若为 true 则调用 query-method 中的方法 | boolean | true,false |true|
| pagination-position | 分页栏布局位置 | string | left,center,right |center|
| loading-text | loading 动画的文本内容 | string | - |正在加载中|
| query-method | **必填**，表格回调函数，回调函数需要返回一个 固定数据格式的 Promise 对象 | function | - |async ({ currentPage, pageSize }) => { return { tableData: [], dataCount: 0 };}|



### 方法

| 方法名             | 说明                              | 参数 |
| ------------------ | --------------------------------- | ---- |
| refreshQueryMethod | 调用query-method 中指定的回调函数 | -    |

* 支持 Element-UI Table 组件除 data 外的全部属性和全部事件及方法，详情请查阅 [Element-UI Table 文档](https://github.com/ElemeFE/element/blob/dev/examples/docs/zh-CN/table.md#table-attributes)
* 支持 Element-UI Pagination 组件除 total 外的全部属性和全部事件，详情请查阅 [Element-UI Pagination 文档](https://github.com/ElemeFE/element/blob/dev/examples/docs/zh-CN/pagination.md)



### 备注

1. 当 currentPage 属性或 pageSize 属性发生变化时，会自动调用 query-method 中的回调函数。
2. 当 pageSize 属性发生变化时，currentPage 属性会重置为 1，即自动跳转到第一页。



## Quick Start

在 main.js 中配置：

```javascript
import Vue from 'vue'
import EleTablePagination from 'ele-table-pagination'

Vue.use(EleTablePagination)
```



在项目中使用：

```vue
<template>
  <ele-table-pagination 
    :query-method="queryMethod"
    :auto-load="false"
    ref="table">
    <el-table-column prop="foo" label="fooLable"></el-table-column>
    <el-table-column prop="bar" label="barLabel"></el-table-column>
  </ele-table-pagination>
</template>


<script>
	export default {
  	methods: {
      // 必填的 queryMethod,返回 promise 对象
      // 回调参数 { currentPage, pageSize }
      async queryMethod({ currentPage, pageSize }) {
        // requests or something handle ...
        return {
          tableData: [
            {
              foo: "foo1",
              bar: "bar1"
            },
            {
              foo: "foo2",
              bar: "bar2"
            }
          ],
          dataCount: 10
        };
      },
      refreshTable(){
        this.refs.table.refreshQueryMethod()
      }
    }
  };
</script>
```



