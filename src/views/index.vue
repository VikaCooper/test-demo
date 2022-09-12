<template>
  <div class="index-page">
    <ResultPager v-if="done" :name="name" :location="location" :type="type"/>
    <Collector v-else @confirm="handleSubmit" />
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
      type: '',
    }
  },
  methods: {
    handleSubmit({name, location, type}) {
      this.done = true
      this.name = name
      this.location = location
      this.type = type
    }
  }
}
</script>

<style scoped>

</style>
