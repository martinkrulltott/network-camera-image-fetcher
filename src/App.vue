<template>
  <div id="app">
    <CameraImage/>
  </div>
</template>

<script>
import CameraImage from './components/CameraImage.vue'

export default {
  name: 'app',
  components: {
    CameraImage
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>