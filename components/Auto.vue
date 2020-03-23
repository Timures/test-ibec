<template>
  <div>
    <div class="auto mb-3 mx-2">
      <div class="auto-body"></div>
      <div class="auto-footer">
        Кредит Auto
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.auto {
  padding: 0;
  border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  border: 1px solid #fff;
  box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);
  background: rgb(234,234,234);
  background: radial-gradient(circle, rgba(234,234,234,1) 0%, rgba(235,235,235,1) 50%, rgba(234,234,234,1) 100%);
  width: 165px;
  min-width: 165px;
  &-body {
    background-image: url('~assets/images/autocredit.png');
    min-height: 172px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  &-footer {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    padding: 10px 15px;
    background-color: $red;
    color: #ffffff;
    font-family: Arial;
    font-size: 12px;
    font-weight: bold;
    line-height: 22px;
  }
}

</style>