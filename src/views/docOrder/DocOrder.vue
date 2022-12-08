<template>
  <div class="doc-order-container">
    <el-button @click="mergeGroup">同组</el-button>
    <el-table
      border
      size="mini"
      height="100%"
      :data="tableData"
      :span-method="cellMerge"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column label="设备" align="center" prop="a" />
      <el-table-column label="参数" align="center" prop="b" />
      <el-table-column label="数值" align="num" prop="c" />
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        { a: '2222', b: '1', c: '2' },
        { a: '111', b: '1', c: '2' },
        { a: '111', b: '2', c: '3' },
        { a: '111', b: '2', c: '3' },
        { a: '111', b: '2', c: '3' },
        { a: '2222', b: '1', c: '2' },
        { a: '2222', b: '1', c: '2' },
        { a: '111', b: '2222', c: '3333' },
        { a: '111', b: '2222', c: '3333' },
      ],
      spanArr: [],
      multipleSelection: [],
    };
  },
  created() {
    this.getSpanArr(this.tableData, 'a');
  },
  methods: {
    // 同组
    mergeGroup() {
      console.log('mergeGroup');
      // 判断是否能同组
      // 频次、给药途径、用药天数 完全一支时才能同组
      console.log(this.multipleSelection);
      // a b c 相同时才能合并
      let key = true;
      const firObj = this.multipleSelection[0];
      this.multipleSelection.forEach((ele, i) => {
        if (firObj.a !== ele.a || firObj.b !== ele.b || firObj.c !== ele.c) {
          key = false;
        }
      });

      if (!key) {
        this.$message.error('不能合并');
        return;
      }
      console.log(99);

      // 标记需要合并的行
      this.multipleSelection = this.multipleSelection.map(ele => (ele.isMerge = true));

      // 合并
      this.getSpanArr(this.tableData, 'a');
    },
    // groupBy 数组
    groupBy(data, params) {
      const groups = {};
      data.forEach(v => {
        const group = JSON.stringify(v[params]);
        groups[group] = groups[group] || [];
        groups[group].push(v);
      });
      return Object.values(groups);
    },
    // 计算 数据合并 索引
    getSpanArr(data, params) {
      // 接收重构数组
      let arr = [];

      // 设置索引
      let pos = 0;

      // 控制合并的数组
      this.spanArr = [];

      // arr 处理
      this.groupBy(data, params).map(v => (arr = arr.concat(v)));

      // this.tableData = arr
      arr.map(res => {
        data.shift();
        data.push(res);
      });

      // spanArr 处理
      const redata = arr.map(v => v[params]);
      redata.reduce((old, cur, i) => {
        if (i === 0) {
          this.spanArr.push(1);
          pos = 0;
        } else {
          if (cur === old) {
            this.spanArr[pos] += 1;
            this.spanArr.push(0);
          } else {
            this.spanArr.push(1);
            pos = i;
          }
        }
        return cur;
      }, {});
    },

    // 合并 tableData 数据
    cellMerge({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 1) {
        const _row = this.spanArr[rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col,
        };
      }
    },
    // 多选
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>
<style lang="scss" scoped>
.doc-order-container {
  width: 100vw;
  height: 100vh;
  padding: 20px;
}
</style>
