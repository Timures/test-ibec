<template>
  <div>
    <div class="row">
      <div class="col-lg-6 col-md-12 col-sm-12">
        <Account />
      </div>

      <div class="col-lg-6 col-md-12 col-sm-12">
        <Operation />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6 col-md-12 col-sm-12">
        <Account />
      </div>

      <div class="col-lg-6 col-md-12 col-sm-12">
        <Operation />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6 col-md-12 col-sm-12">
        <Account />
      </div>

      <div class="col-lg-6 col-md-12 col-sm-12">
        <Operation />
      </div>
    </div>
    
  </div>
</template>

<script>
import Account from '@/components/Account'
import Operation from '@/components/Operation'
export default {
  components: {
    Account,
    Operation
  }
}
</script>

<style>

</style>
