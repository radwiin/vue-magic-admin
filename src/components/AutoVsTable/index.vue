<template>
  <vs-table v-bind="$attrs" v-on="$listeners" class="auto-vs-table">
    <template #thead>
      <vs-tr>
        <vs-th :key="i" v-for="(th, i) in column" :width="th.width">
          {{ th.label }}
        </vs-th>
      </vs-tr>
    </template>
    <template #tbody>
      <vs-tr :key="i" v-for="(tr, i) in data">
        <vs-td :key="i" v-for="(td, i) in column" :width="td.width">
          <slot :name="td.prop" :row="tr">
            {{ tr[td.prop] }}
          </slot>
        </vs-td>
        <template #expand v-if="tr.children">
          <auto-vs-table :column="column" :data="tr.children">
            <template v-for="col in column" #[col.prop]="slotProps">
              <slot :name="col.prop" v-bind="slotProps"> </slot>
            </template>
          </auto-vs-table>
        </template>
      </vs-tr>
    </template>
  </vs-table>
</template>

<script>
export default {
  name: 'AutoVsTable',
  inheritAttrs: false,
  props: {
    column: {
      type: Array,
      default: () => [
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
      ]
    },
    data: {
      type: Array,
      default: () => [
        {
          id: '1',
          name: 'name',
          email: 'email'
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
    }
  }
}
</script>
<style lang="scss" scoped>
.auto-vs-table {
  ::v-deep .vs-table__tr.isExpand:not(:first-of-type) + .vs-table__tr__expand td {
    border-radius: 0px 0px 0px 0px !important;
  }
  ::v-deep .vs-table__tr__expand {
    .vs-table__expand__td {
      background: none !important;

      &__content {
        height: unset !important;

        &__sub {
          padding: 0px;

          .vs-table {
            &__thead {
              .vs-table__th {
                padding: 0px;

                &__content {
                  height: 0px;
                  overflow: hidden;
                }
              }
            }

            &__tbody {
              &::after {
                content: '';
                position: absolute;
                left: 0px;
                top: 0px;
                background: rgba(var(--vs-color), 0.3);
                width: 4px;
                height: 100%;
                opacity: 0;
                -webkit-transition: all 0.25s ease;
                transition: all 0.25s ease;
                border-radius: 0px 10px 10px 0px;
                z-index: 60;
                transform: translate(0);
                opacity: 1;
              }

              .vs-table__tr {
                &:hover {
                  background: rgba(var(--vs-gray-1), 1) !important;
                }

                .vs-table__td {
                  padding: 10px 12px;
                  background: rgba(var(--vs-bg), 0.1) !important;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
