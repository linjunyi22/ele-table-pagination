export let elTableMethods = ref => {
  return {
    methods: {
      clearSelection() {
        this.refs[ref].clearSelection();
      },
      toggleRowSelection(row, selected) {
        this.refs[ref].toggleRowSelection(row, selected);
      },
      toggleAllSelection() {
        this.refs[ref].toggleAllSelection();
      },
      toggleRowExpansion(row, expanded) {
        this.refs[ref].toggleRowExpansion(row, expanded);
      },
      setCurrentRow(row) {
        this.refs[ref].setCurrentRow(row);
      },
      clearSort() {
        this.refs[ref].clearSort();
      },
      clearFilter(columnKey) {
        this.refs[ref].clearFilter(columnKey);
      },
      doLayout() {
        this.refs[ref].doLayout();
      },
      sort(prop, order) {
        this.refs[ref].sort(prop, order);
      }
    }
  };
};
