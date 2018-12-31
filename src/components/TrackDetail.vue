<template lang="pug">
  .container
    .columns
      .columns.is-5.is-offset-4
        nm-track(:track="track")
</template>

<script>
import TrackServices from '@/services/track'
import NmTrack from '@/components/Track.vue'

export default {
  components: { NmTrack },

  data () {
    return {
      track: {}
    }
  },

  created () {
    const id = this.$route.params.id

    TrackServices.getById(id)
      .then(res => {
        console.log(res)
        this.track = res
      })
  }
}
</script>

<style lang="scss" scope>
  .columns {
    margin: 30px;
  }
</style>
