<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <nuxt-link exact no-prefetch active-class="active" class="nav-link" to="/">Главная</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link exact active-class="active" class="nav-link" to="/users">О нас</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link exact active-class="active" class="nav-link" to="/contacts">Контакты</nuxt-link>
      </li>
      
    </ul>
  </div>
</nav>
</template>

<style lang="scss" scoped>
.navbar {
  padding: 0;
}
.nav {
  &-item {
    
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10px 36px;
    // border-right: 1px solid rgb(65, 63, 63);
    border-radius: 3px;
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);
    background: rgb(227,227,227);
    background: linear-gradient(0deg, rgba(227,227,227,1) 0%, rgba(255,255,255,1) 96%, rgba(227,227,227,1) 100%);
  }
  &-link {
    color: #4d4d4d;
    font-family: Arial;
    font-size: 13px;
    font-weight: 400;
    line-height: 22px;
  }
}
@media (min-width: 320px) and (max-width: 767px){
  .navbar-toggler{
    margin-bottom: 20px;
    justify-content: flex-end;
    &.collapsed {
      justify-content: flex-end;
    }
  }
   
}
</style>