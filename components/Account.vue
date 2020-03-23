<template>
  <div>
    <div class="account mb-4">
      <div class="account-icon">
        <img  src="~/assets/images/Suitcase.png" alt="suitcase">
      </div>
      <div class="account-header">
        Мои счета
      </div>
      <div class="account-body"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.account {
  position: relative;
  padding: 15px 10px 10px 46px;
  border-radius: 3px;
  border: 1px solid #fff;
  box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);
  background: rgb(234,234,234);
  background: radial-gradient(circle, rgba(234,234,234,1) 0%, rgba(235,235,235,1) 50%, rgba(234,234,234,1) 100%);
  &-icon {
    position: absolute;
    top: -5px;
    left: 10px;
  }
  &-header {
    color: $red;
    font-family: Arial;
    font-size: 24px;
    font-weight: 400;
    line-height: 22px;
    padding-bottom: 5px;
    border-bottom: 1px solid $red;
  }
  &-body {
    min-height: 256px;
  }
}

</style>