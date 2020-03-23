<template>
  <div>
    <div class="rates mb-4 mx-2">
      <div class="rates-header">Курс обмена валют:</div>
      <div class="rates-body"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.rates {
  width: 165px;
  min-width: 165px;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #fff;
  box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);
  background: rgb(234,234,234);
  background: radial-gradient(circle, rgba(234,234,234,1) 0%, rgba(235,235,235,1) 50%, rgba(234,234,234,1) 100%);
  &-header {
    color: #4c4c4c;
    font-family: Arial;
    font-size: 13px;
    font-weight: bold;
    line-height: 22px;
  }
  &-body {
    min-height: 156px;
  }
}

</style>