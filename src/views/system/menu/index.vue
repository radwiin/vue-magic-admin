<template>
  <page-container header="Menu" class="system-menu">
    <vs-table>
      <template #thead>
        <vs-tr>
          <vs-th width="40%">
            Name
          </vs-th>
          <vs-th width="40%">
            Email
          </vs-th>
          <vs-th width="20%">
            Id
          </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr :key="i" v-for="(tr, i) in users">
          <vs-td> {{ tr.name }} </vs-td>
          <vs-td>
            {{ tr.email }}
          </vs-td>
          <vs-td>
            {{ tr.id }}
          </vs-td>

          <template #expand>
            <vs-table>
              <template #tbody>
                <vs-tr :key="i" v-for="(tr, i) in users">
                  <vs-td width="40%"> # {{ tr.name }} </vs-td>
                  <vs-td width="40%">
                    {{ tr.email }}
                  </vs-td>
                  <vs-td width="20%">
                    {{ tr.id }}
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </template>
        </vs-tr>
      </template>
    </vs-table>
  </page-container>
</template>

<script>
export default {
  name: 'SystemMenu',
  data: () => ({
    editActive: false,
    edit: null,
    editProp: '',
    search: '',
    allCheck: false,
    page: 1,
    max: 3,
    active: 0,
    selected: [],
    users: [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        website: 'hildegard.org'
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        website: 'anastasia.net'
      },
      {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        website: 'ramiro.info'
      },
      {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        website: 'kale.biz'
      },
      {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        website: 'demarco.info'
      },
      {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        website: 'ola.org'
      },
      {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        website: 'elvis.io'
      },
      {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        website: 'jacynthe.com'
      },
      {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        website: 'conrad.com'
      },
      {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        website: 'ambrose.net'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.system-menu {
  ::v-deep .vs-table__tr__expand {
    .vs-table__expand__td {
      background: none !important;

      &__content {
        // height: unset !important;

        &__sub {
          padding: 0px;

          .vs-table__tbody {
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
              // -webkit-transform: translate(-100%);
              // transform: translate(-100%);
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
</style>
