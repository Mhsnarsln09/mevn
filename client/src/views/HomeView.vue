<template>
<div>
 <PostList/>
</div>
</template>

<script lang="ts">
import PostList from '../components/Crud/PostList.vue';
import { defineComponent } from 'vue';

// Components

export default defineComponent({
    name: "HomeView",
    components: { PostList }
});
</script>
