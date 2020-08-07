<template>
  <page-container header="Menu">
    <auto-vs-table :column="column" :data="data"> </auto-vs-table>
  </page-container>
</template>

<script>
import { query, add, update, remove } from '@/api/system/menu'
export default {
  name: 'SystemMenu',
  data: () => ({
    column: [
      {
        prop: 'name',
        label: 'Name',
        width: '20%'
      },
      {
        prop: 'path',
        label: 'Path',
        width: '20%'
      },
      {
        prop: 'component',
        label: 'Component',
        width: '20%'
      },
      {
        prop: 'meta',
        label: 'Meta',
        width: '40%'
      }
    ],
    data: []
  }),
  created() {
    this.refreshTable()
  },
  methods: {
    refreshTable() {
      query().then(rsp => {
        this.data = rsp.data
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
