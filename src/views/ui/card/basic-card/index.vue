<template>
  <page-container header="Basic Card">
    <vs-row justify="space-between" class="row">
      <vs-col w="6" class="col">
        <mg-card>
          <p>
            The one minute. The soldier’s minute. In a battle, that’s all you get. One minute of everything at once. And anything before is nothing.
            Everything after, nothing. Nothing in comparison to that one minute. --S1.Ep6
          </p>
          <p style="margin-bottom: 0;">
            She’s in the past. The past is not my concern. The future is no longer my concern, either. --S1.Ep6
          </p>
        </mg-card>
      </vs-col>
      <vs-col w="6" class="col">
        <mg-card content-color="#ff9f43">
          <p>
            The one minute. The soldier’s minute. In a battle, that’s all you get. One minute of everything at once. And anything before is nothing.
            Everything after, nothing. Nothing in comparison to that one minute. --S1.Ep6
          </p>
          <p style="margin-bottom: 0;">
            She’s in the past. The past is not my concern. The future is no longer my concern, either. --S1.Ep6
          </p>
        </mg-card>
      </vs-col>
    </vs-row>
    <vs-row justify="space-between" class="row">
      <vs-col w="6" class="col">
        <mg-card title="Basic Card">
          <p>
            The one minute. The soldier’s minute. In a battle, that’s all you get. One minute of everything at once. And anything before is nothing.
            Everything after, nothing. Nothing in comparison to that one minute. --S1.Ep6
          </p>
          <p>
            She’s in the past. The past is not my concern. The future is no longer my concern, either. --S1.Ep6
          </p>
        </mg-card>
      </vs-col>
      <vs-col w="6" class="col">
        <mg-card title="Basic Card" title-color="#66c67c" content-color="#ff9f43">
          <p>
            The one minute. The soldier’s minute. In a battle, that’s all you get. One minute of everything at once. And anything before is nothing.
            Everything after, nothing. Nothing in comparison to that one minute. --S1.Ep6
          </p>
          <p>
            She’s in the past. The past is not my concern. The future is no longer my concern, either. --S1.Ep6
          </p>
        </mg-card>
      </vs-col>
    </vs-row>
    <vs-row justify="space-between" class="row">
      <vs-col w="6" class="col">
        <mg-card title="Basic Card" subtitle="Good taste is for people who can't afford sapphires.">
          <p>
            The one minute. The soldier’s minute. In a battle, that’s all you get. One minute of everything at once. And anything before is nothing.
            Everything after, nothing. Nothing in comparison to that one minute. --S1.Ep6
          </p>
          <p>
            She’s in the past. The past is not my concern. The future is no longer my concern, either. --S1.Ep6
          </p>
        </mg-card>
      </vs-col>
      <vs-col w="6" class="col">
        <mg-card
          title="Basic Card"
          title-color="#66c67c"
          subtitle="Good taste is for people who can't afford sapphires."
          subtitle-color="#b8c2cc"
          content-color="#ff9f43"
        >
          <p>
            The one minute. The soldier’s minute. In a battle, that’s all you get. One minute of everything at once. And anything before is nothing.
            Everything after, nothing. Nothing in comparison to that one minute. --S1.Ep6
          </p>
          <p>
            She’s in the past. The past is not my concern. The future is no longer my concern, either. --S1.Ep6
          </p>
        </mg-card>
      </vs-col>
    </vs-row>
    <vs-row justify="space-between" class="row">
      <vs-col w="6" class="col">
        <mg-card
          title="Basic Card"
          subtitle="Good taste is for people who can't afford sapphires."
          subtitle-color="rgba(255, 255, 255, 0.6)"
          card-background="#706ae8"
        >
          <p>
            The one minute. The soldier’s minute. In a battle, that’s all you get. One minute of everything at once. And anything before is nothing.
            Everything after, nothing. Nothing in comparison to that one minute. --S1.Ep6
          </p>
          <p>
            She’s in the past. The past is not my concern. The future is no longer my concern, either. --S1.Ep6
          </p>
        </mg-card>
      </vs-col>
      <vs-col w="6" class="col">
        <mg-card
          title="Basic Card"
          subtitle="Good taste is for people who can't afford sapphires."
          subtitle-color="rgba(255, 255, 255, 0.6)"
          card-background="#66c67c"
        >
          <p>
            The one minute. The soldier’s minute. In a battle, that’s all you get. One minute of everything at once. And anything before is nothing.
            Everything after, nothing. Nothing in comparison to that one minute. --S1.Ep6
          </p>
          <p>
            She’s in the past. The past is not my concern. The future is no longer my concern, either. --S1.Ep6
          </p>
        </mg-card>
      </vs-col>
    </vs-row>
    <vs-row justify="space-between" class="row">
      <vs-col w="6" class="col">
        <mg-card
          title="Basic Card"
          subtitle="Good taste is for people who can't afford sapphires."
          card-background="linear-gradient(120deg, rgb(127, 127, 213), rgb(134, 168, 231), rgb(145, 234, 228))"
        >
          <p>
            The one minute. The soldier’s minute. In a battle, that’s all you get. One minute of everything at once. And anything before is nothing.
            Everything after, nothing. Nothing in comparison to that one minute. --S1.Ep6
          </p>
          <p>
            She’s in the past. The past is not my concern. The future is no longer my concern, either. --S1.Ep6
          </p>
        </mg-card>
      </vs-col>
      <vs-col w="6" class="col">
        <mg-card
          title="Basic Card"
          subtitle="Good taste is for people who can't afford sapphires."
          card-background="linear-gradient(to right, rgb(86, 171, 47), rgb(168, 224, 99))"
        >
          <p>
            The one minute. The soldier’s minute. In a battle, that’s all you get. One minute of everything at once. And anything before is nothing.
            Everything after, nothing. Nothing in comparison to that one minute. --S1.Ep6
          </p>
          <p>
            She’s in the past. The past is not my concern. The future is no longer my concern, either. --S1.Ep6
          </p>
        </mg-card>
      </vs-col>
    </vs-row>
    <vs-row justify="space-between" class="row">
      <vs-col w="6" class="col">
        <mg-card
          title="Basic Card"
          subtitle="Good taste is for people who can't afford sapphires."
          :card-background="
            `linear-gradient(120deg, rgba(109, 213, 237, 0.8), rgba(33, 147, 176, 0.5)), url(${require('@/assets/card-bg-image-demo-1.jpg')}) center center/cover`
          "
        >
          <p>
            The one minute. The soldier’s minute. In a battle, that’s all you get. One minute of everything at once. And anything before is nothing.
            Everything after, nothing. Nothing in comparison to that one minute. --S1.Ep6
          </p>
          <p>
            She’s in the past. The past is not my concern. The future is no longer my concern, either. --S1.Ep6
          </p>
        </mg-card>
      </vs-col>
      <vs-col w="6" class="col">
        <mg-card
          title="Basic Card"
          subtitle="Good taste is for people who can't afford sapphires."
          :card-background="
            `linear-gradient(120deg, rgba(247, 97, 161, 0.5), rgba(140, 27, 171, 0.8)), url(${require('@/assets/card-bg-image-demo-2.jpg')}) center center/cover`
          "
        >
          <p>
            The one minute. The soldier’s minute. In a battle, that’s all you get. One minute of everything at once. And anything before is nothing.
            Everything after, nothing. Nothing in comparison to that one minute. --S1.Ep6
          </p>
          <p>
            She’s in the past. The past is not my concern. The future is no longer my concern, either. --S1.Ep6
          </p>
        </mg-card>
      </vs-col>
    </vs-row>
  </page-container>
</template>

<script>
export default {
  name: 'basic-card'
}
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 0.75rem;
}

.row {
  margin: 0 -0.7rem;
  width: unset;

  .col {
    padding: 0 0.7rem 1.4rem;
  }
}
</style>
