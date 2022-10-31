<template>
  <v-app>
    <v-main>
      <navbar-componet></navbar-componet>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavbarComponet from './components/layout/NavbarComponet.vue'

export default defineComponent({
  components: { NavbarComponet },
  name: 'App',

  data () {
    return {
      //
    }
  },
})
</script>
