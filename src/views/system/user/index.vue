<template>
  <page-container header="User">
    <auto-vs-table :column="column" :data="data"></auto-vs-table>
  </page-container>
</template>

<script>
export default {
  name: 'user',
  data: () => ({
    column: [
      {
        prop: 'name',
        label: 'Name',
        width: '40%'
      },
      {
        prop: 'email',
        label: 'Email',
        width: '40%'
      },
      {
        prop: 'id',
        label: 'Id',
        width: '20%'
      }
    ],
    data: [
      {
        id: '1',
        name: 'name',
        email: 'email',
        children: [
          {
            id: '4',
            name: 'name',
            email: 'email'
          },
          {
            id: '5',
            name: 'name',
            email: 'email'
          }
        ]
      },
      {
        id: '2',
        name: 'name',
        email: 'email'
      },
      {
        id: '3',
        name: 'name',
        email: 'email',
        children: [
          {
            id: '4',
            name: 'name',
            email: 'email'
          },
          {
            id: '5',
            name: 'name',
            email: 'email'
          }
        ]
      }
    ]
  })
}
</script>

<style></style>
