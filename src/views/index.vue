<template>
  <div class="index-page">
    <ResultPager v-if="done" />
    <Collector v-else @submit="handleSubmit" :name="name" :location="location" />
  </div>
</template>

<script>
import Collector from './Collector'
import ResultPager from './Result'

export default {
  name: 'IndexPage',
  components: {
    Collector,
    ResultPager,
  },
  data() {
    return {
      done: false,
      name: '',
      location: '',
    }
  },
  methods: {
    handleSubmit({name, location}) {
      this.done = true
      this.name = name
      this.location = location
    }
  }
}
</script>

<style scoped>

</style>
