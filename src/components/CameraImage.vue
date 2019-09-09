<template>
  <div>
    <div v-if="showStream">
      <img src="https://kitese.duckdns.org/stream">
    </div>
    <div v-else>
      Hello world
    </div>
  </div>
</template>

<script>
export default {
  name: 'CameraImage',
  data() {
    return {
      showStream: true
    };
  },
  mounted: function () {
    setTimeout( ()=> {
      this.showStream = false
   }, 10000) // TODO: Change to 3 minutes for Prod
  }
}
</script>
