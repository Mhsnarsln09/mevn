<template>
  <div>
    {{message}}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
data(){
    return {
        message="hata vermesin",
    }
}
})
</script>
