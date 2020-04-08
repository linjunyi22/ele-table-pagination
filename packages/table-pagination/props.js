// Element UI Table attributes
export let ElementUITableProps = {
  size: String,

  height: [String, Number],

  maxHeight: [String, Number],

  fit: {
    type: Boolean,
    default: true
  },

  stripe: Boolean,

  border: Boolean,

  rowKey: [String, Function],

  showHeader: {
    type: Boolean,
    default: true
  },

  showSummary: Boolean,

  sumText: String,

  summaryMethod: Function,

  rowClassName: [String, Function],

  rowStyle: [Object, Function],

  cellClassName: [String, Function],

  cellStyle: [Object, Function],

  headerRowClassName: [String, Function],

  headerRowStyle: [Object, Function],

  headerCellClassName: [String, Function],

  headerCellStyle: {
    type: [Object, Function],
    default: () => {
      return { background: "rgba(240, 242, 245, 1)", color: "#606266" };
    }
  },

  highlightCurrentRow: Boolean,

  currentRowKey: [String, Number],

  emptyText: String,

  expandRowKeys: Array,

  defaultExpandAll: Boolean,

  defaultSort: Object,

  tooltipEffect: String,

  spanMethod: Function,

  selectOnIndeterminate: {
    type: Boolean,
    default: true
  },

  indent: {
    type: Number,
    default: 16
  },

  treeProps: {
    type: Object,
    default() {
      return {
        hasChildren: "hasChildren",
        children: "children"
      };
    }
  },

  lazy: Boolean,

  load: Function
};

// Element UI Pagination attributes
export let ElementUIPaginationProps = {
  pageSize: {
    type: Number,
    default: 10
  },

  small: Boolean,

  pageCount: Number,

  pagerCount: {
    type: Number,
    validator(value) {
      return (
        (value | 0) === value && value > 4 && value < 22 && value % 2 === 1
      );
    },
    default: 7
  },

  currentPage: {
    type: Number,
    default: 1
  },

  layout: {
    default: "prev, pager, next, jumper, ->, total"
  },

  pageSizes: {
    type: Array,
    default() {
      return [10, 20, 30, 40, 50, 100];
    }
  },

  popperClass: String,

  prevText: String,

  nextText: String,

  background: Boolean,

  disabled: Boolean,

  hideOnSinglePage: Boolean
};
