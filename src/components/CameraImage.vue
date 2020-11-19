<template>
  <div>
    <div v-if="showStream">
      <img src="https://kitese.duckdns.org:8080/stream" class="stream"/>
    </div>
    <div v-else class="overlay" v-on:click="continueStream">
      <span>Klicka för att fortsätta streamen</span>
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
    this.activateTimeout();
  },
  methods: {
    continueStream: function() {
      this.showStream = true;
      this.activateTimeout();
    },
    activateTimeout: function() {
      setTimeout( ()=> {
        this.showStream = false
      }, 120000)
    }
  }
}
</script>

<style lang="scss">
.stream {
  max-width: 100%;
  height: auto;
}
.overlay {
  background: #a2a2a2;
  color: #fff;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
}
</style>