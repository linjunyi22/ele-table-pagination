# Element table pagination

## Summary
* 基于 Element-UI 的 table 和 pagination 组件的二次封装
* Element-UI 版本 >= 2.13.0
* Vue 版本 >= 2.3.0



## API

### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ------ | ------ |
| auto-load | 是否默认加载数据，若为 true 则调用 query-method 中的方法 | boolean | true,false |true|
| pagination-position | 分页栏布局位置 | string | left,center,right |center|
| loading-text | loading 动画的文本内容 | string | - |正在加载中|
| query-method | **必填**，表格回调函数，回调函数需要返回一个 固定数据格式的 Promise 对象 | function | - |async ({ currentPage, pageSize }) => { return { tableData: [], dataCount: 0 };}|



