<template>
  <div>
    <post-form :post="post" :submitForm="submitForm" />
  </div>
</template>

<script lang="ts">
import axios, { AxiosResponse } from "axios";
import { defineComponent } from "vue";
import PostForm from "../components/Crud/PostForm.vue";
import CrudModels from "../models/CrudModels";

export default defineComponent({
  components: { PostForm },
  data() {
    return {
      post: {
        title: "",
        content: "",
        creator: "",
        _id: "" as string | null,
      },
      API_URL: "http://localhost:5000/crud",
    };
  },
  methods: {
    async submitForm() {
      await axios.put(`${this.API_URL}/${this.$route.params.id}`, this.post);
      this.$router.push({ name: "home" });
    },
    getPosts() {
      axios(`${this.API_URL}/${this.$route.params.id}`).then(
        (result: AxiosResponse<CrudModels>) => {
          this.post = result.data;
        }
      );
    },
  },
  mounted() {
    this.getPosts();
  },
});
</script>
