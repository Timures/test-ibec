<template>
  <section>
    <h1 class="mb-3">{{ pageTitle }}</h1>
    <ul class="decimal">
      <li v-for="user of users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  async fetch({store}) {
    if(store.getters['users/users'].length === 0) {
      await store.dispatch('users/fetch')
    }
  },
  data: () => ({
    pageTitle: 'О нас'
  }),
  computed: {
    users() {
      return this.$store.getters['users/users']
    }
  },
  methods: {
    openUser(user) {
      this.$router.push('/users/' + user.id)
    }
  }
}
</script>

<style lang="scss" scoped>
  .decimal {
    list-style-type: decimal;
  }
</style>