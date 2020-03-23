<template>
<div id="map" class="smallMap">
  <yandex-map 
    :coords="coords3"
    :zoom="13" 
    
    @click="onClick"
  >
    <ymap-marker 
      :coords="coords" 
      marker-id="123"
      :balloon-template="balloonTemplate" 
      hint-content="«Mega Park Алматы»." 
    />

    <ymap-marker 
      :coords="coords2" 
      marker-id="124" 
      hint-content="«БЦ НурлыТау»."
      :icon="markerIcon"
    />
  </yandex-map>
</div>
  
</template>

<script>
export default {
  data: () => ({
    coords3: [43.256976962361776,76.94582346289054],
    coords: [
      43.26719918496454,
      76.92992234390462,
    ],
    coords2: [
      43.231240766846874,
      76.94499163145854
    ],
    markerIcon: {
      layout: 'default#imageWithContent',
      imageHref: 'https://image.flaticon.com/icons/png/512/33/33444.png',
      imageSize: [30, 30],
      imageOffset: [0, 0],
      content: '',
      contentOffset: [0, 15],
      contentLayout: ''
    }
  }),
  computed: {
    balloonTemplate() {
      return `
        <h1 class="red">«Mega Park Алматы».</h1>
        <img src="http://via.placeholder.com/350x150">
      `
    }
  },
  methods: {
    onClick(e) {
      this.coords = e.get('coords');
    },
  },
};
</script>

<style scoped>
#map {
  width: 100%;
  max-width: 768px;
  height: 100vh;
  max-height: 600px;
}

.ymap-container {
  height: 100%;
}

.red {
  color: red;
}
</style>