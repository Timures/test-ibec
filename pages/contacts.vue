<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="mb-3">Контакты</h1>
          <div>
            <YandexMap></YandexMap>
          </div>
          
        </div>
      </div>
    </div>
    

    
    
  </div>
</template>

<script>
import YandexMap from '@/components/YandexMap'
export default {
  components: {
    YandexMap
  }
}
</script>