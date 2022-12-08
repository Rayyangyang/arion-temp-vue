<template>
  <div>
    <el-button @click="mergerGroup">合并</el-button>
    <el-button @click="splitGroup">拆分</el-button>
    <vxe-table ref="xTable" border resizable :align="allAlign" :merge-cells="mergeCells" :data="tableData">
      <vxe-column type="checkbox" width="60" />
      <vxe-column field="name" title="Name" />
      <vxe-column field="role" title="Role" />
      <vxe-column field="sex" title="Sex" />
      <vxe-column field="age" title="Age" />
    </vxe-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allAlign: null,
      tableData: [
        { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
        { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
        { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
        { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
        { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' },
      ],
      mergeCells: [
        // { row: 1, col: 1, rowspan: 3, colspan: 3 },
        // { row: 4, col: 3, rowspan: 2, colspan: 0 },
      ],
    };
  },
  methods: {
    mergerGroup() {
      console.log(this.$refs.xTable.getCheckboxRecords());

      const selectedRows = this.$refs.xTable.getCheckboxRecords();
      console.log('selectedRows', selectedRows);
      // 判断是否能合并
      let key = true;
      const firObj = selectedRows[0];
      let mergeIndexArr = [];
      selectedRows.forEach((ele, i) => {
        if (firObj.role !== ele.role || firObj.sex !== ele.sex) {
          key = false;
        }
      });

      if (!key) {
        this.$message.error('不能合并');
        return;
      }

      // 将table 排序

      this.mergeCells.push({ row: 6, col: 3, rowspan: 3, colspan: 0 });
    },
    splitGroup() {
      this.mergeCells.pop({ row: 6, col: 3, rowspan: 3, colspan: 0 });
    },
  },
};
</script>

<style lang="scss" scoped></style>
