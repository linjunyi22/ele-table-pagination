<template>
  <div>
    <el-table
      v-loading="tableLoading"
      :element-loading-text="loadingText"
      :data="tableData"
      :height="height"
      :max-height="maxHeight"
      :stripe="stripe"
      :border="border"
      :size="size"
      :fit="fit"
      :show-header="showHeader"
      :highlight-current-row="highlightCurrentRow"
      :current-row-key="currentRowKey"
      :row-class-name="rowClassName"
      :row-style="rowStyle"
      :cell-class-name="cellClassName"
      :cell-style="cellStyle"
      :header-row-class-name="headerRowClassName"
      :header-row-style="headerRowStyle"
      :header-cell-class-name="headerCellClassName"
      :header-cell-style="headerCellStyle"
      :row-key="rowKey"
      :empty-text="emptyText"
      :default-expand-all="defaultExpandAll"
      :expand-row-keys="expandRowKeys"
      :default-sort="defaultSort"
      :tooltip-effect="tooltipEffect"
      :show-summary="showSummary"
      :sum-text="sumText"
      :summary-method="summaryMethod"
      :span-method="spanMethod"
      :select-on-indeterminate="selectOnIndeterminate"
      :indent="indent"
      :lazy="lazy"
      :load="load"
      :tree-props="treeProps"
      @select="(selection, row) => emitEventHandler('select', selection, row)"
      @select-all="selection => emitEventHandler('select-all', selection)"
      @selection-change="selection => emitEventHandler('selection-change', selection)"
      @cell-mouse-enter="(row, column, cell, event) => emitEventHandler('cell-mouse-enter', row, column, cell, event)"
      @cell-mouse-leave="(row, column, cell, event) => emitEventHandler('cell-mouse-leave', row, column, cell, event)"
      @cell-click="(row, column, cell, event) => emitEventHandler('cell-click', row, column, cell, event)"
      @cell-dblclick="(row, column, cell, event) => emitEventHandler('cell-dblclick', row, column, cell, event)"
      @row-click="(row, event, column) => emitEventHandler('row-click', row, event, column)"
      @row-dblclick="(row, event) => emitEventHandler('row-dblclick', row, event)"
      @row-contextmenu="(row, event) => emitEventHandler('row-contextmenu', row, event)"
      @header-click="(column, event) => emitEventHandler('header-click', column, event)"
      @header-contextmenu="(column, event) => emitEventHandler('header-contextmenu', column, event)"
      @sort-change="args => emitEventHandler('sort-change', args)"
      @filter-change="filters => emitEventHandler('filter-change', filters)"
      @current-change="(currentRow, oldCurrentRow) => emitEventHandler('current-change', currentRow, oldCurrentRow)"
      @header-dragend="(newWidth, oldWidth, column, event) => emitEventHandler('header-dragend', newWidth, oldWidth, column, event)"
      @expand-change="(row, expandedRowsOrexpanded) => emitEventHandler('expand-change', row, expandedRowsOrexpanded)"
    >
      <slot></slot>

      <slot name="append"></slot>
    </el-table>

    <div :style="{'text-align':paginationPosition,'margin-top':'15px'}">
      <el-pagination
        :total="dataCount"
        :page-size.sync="internalPageSize"
        :small="small"
        :page-count="pageCount"
        :pager-count="pagerCount"
        :current-page.sync="internalCurrentPage"
        :layout="layout"
        :page-sizes="pageSizes"
        :popper-class="popperClass"
        :prev-text="prevText"
        :next-text="nextText"
        :background="background"
        :disabled="disabled"
        :hide-on-single-page="hideOnSinglePage"
        @size-change="page => emitEventHandler('size-change',page)"
        @current-change="currentPage => emitEventHandler('current-change',currentPage)"
        @prev-click="currentPage => emitEventHandler('prev-click',currentPage)"
        @next-click="currentPage => emitEventHandler('next-click',currentPage)"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { ElementUITableProps, ElementUIPaginationProps } from "./props";

export default {
  name: "EleTablePagination",
  props: {
    ...ElementUITableProps,
    ...ElementUIPaginationProps,

    // custom attribute
    // 分页组件的位置，可选值：left,right,center
    paginationPosition: {
      type: String,
      default: "center"
    },

    // 加载文字
    loadingText: {
      type: String,
      default: "正在加载中"
    },

    // 当组件挂载完成后是否自动进行一次数据查询的标志
    autoLoad: {
      type: Boolean,
      default: true
    },

    // 表格查询回调函数，必填，函数需要返回一个 Promise，否则无法正确加载 loading 动画
    queryMethod: {
      type: Function,
      required: true,
      default: () => {
        return async ({ currentPage, pageSize }) => {
          return {
            tableData: [],
            dataCount: 0
          };
        };
      }
    }
  },
  data() {
    return {
      internalCurrentPage: 1,
      internalPageSize: 0,
      tableData: [], // 表格数据
      dataCount: 0, // 数据总数
      tableLoading: false // 表格加载动画 boolean
    };
  },
  watch: {
    currentPage: {
      immediate: true,
      handler(val) {
        this.internalCurrentPage = val;
      }
    },
    internalCurrentPage: {
      immediate: true,
      handler(newVal) {
        this.$emit("update:currentPage", newVal);
      }
    },
    pageSize: {
      immediate: true,
      handler(val) {
        this.internalPageSize = val;
      }
    },
    internalPageSize: {
      immediate: true,
      handler(newVal) {
        this.$emit("update:pageSize", newVal);
      }
    },
    "pageParams.pageSize"(n, o) {
      this.internalCurrentPage = 1;
    },
    "pageParams.currentPage"(n, o) {
      this.queryMethodWorking();
    }
  },
  computed: {
    // 分页参数，主要用于查询数据时提供页码和每页数量
    pageParams() {
      return {
        pageSize: this.internalPageSize,
        currentPage: this.internalCurrentPage
      };
    }
  },
  methods: {
    // 封装查询的回调函数，调用过程中加载 loading
    async queryMethodWorking() {
      try {
        this.tableLoading = true;
        const { tableData, dataCount } = await this.queryMethod(
          this.pageParams
        );
        this.dataCount = dataCount;
        this.tableData = tableData;
        this.tableLoading = false;
      } catch (e) {
        this.dataCount = 0;
        this.tableData = [];
        this.tableLoading = false;
        throw e;
      }
    },
    // emit 事件处理
    emitEventHandler(event, ...args) {
      this.$emit(event, ...args);
    },
    // 刷新表格数据
    refreshQueryMethod() {
      this.queryMethodWorking();
    }
  },
  created() {},
  mounted() {
    // 自动加载
    if (this.autoLoad) {
      this.queryMethodWorking();
    }
  }
};
</script>

<style lang='scss' scoped>
</style>