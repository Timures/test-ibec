<template>
  <div>
    <div class="container-fluid main">
    
      <div class="row header-top">
        <div class="col"></div>
      </div>
      <div class="container">
        <div class="row header mt-4 mb-5">
          <div class="col d-flex">
            <nuxt-link class="logo" to="/"></nuxt-link>
            <div class="d-flex flex-column ml-3">
              <div class="header-title">My Account</div>
              <Navbar />
            </div>
            
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-9 col-sm-12">
            <main>
              <nuxt />
            </main>
          </div>
          <div class="col-md-3 col-sm-12">
            <div class="sidebar">
              <Rates />
              <Auto />
              <Deposit />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <footer class="footer">
            </footer>
          </div>
        </div>
      </div>      
    </div>
    
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Rates from '@/components/Rates'
import Auto from '@/components/Auto'
import Deposit from '@/components/Deposit'

export default {
  components: {
    Navbar,
    Auto,
    Rates,
    Deposit
  }
}
</script>

<style lang="scss">
.main {
  background: rgb(234,234,234);
background: linear-gradient(90deg, rgba(234,234,234,1) 0%, rgba(249,249,249,1) 50%, rgba(234,234,234,1) 100%);
  
}
.logo {
  display: inline-block;
  width: 97px;
  height: 97px;
  box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);
  background-color: $red;
}
.header {
  &-top {
    height: 85px;
    
    box-shadow: 0px 1px 5px 0 rgba(0,0,0,0.05);
  }
  
  &-title {
    color: $red;
    font-family: Arial;
    font-size: 24px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 16px;
  }
}

.sidebar {
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 320px) and (max-width: 767px){
    margin-top: 24px;
    justify-content: center;
  }
}
.footer {
  height: 100px;
}
</style>
