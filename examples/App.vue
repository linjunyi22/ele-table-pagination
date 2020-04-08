<template>
  <div id="app">
    <ele-table-pagination :query-method="queryMethod" layout="total, sizes, prev, pager, next">
      <el-table-column prop="prop1" label="label1"></el-table-column>
      <el-table-column prop="prop2" label="label2"></el-table-column>
    </ele-table-pagination>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    async queryMethod({ currentPage, pageSize }) {
      // requests or handle ...
      return {
        tableData: [
          {
            prop1: "foo1",
            prop2: "bar1"
          },
          {
            prop1: "foo2",
            prop2: "bar2"
          }
        ],
        dataCount: 10
      };
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
