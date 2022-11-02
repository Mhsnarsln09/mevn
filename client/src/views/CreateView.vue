<template>
  <div>
    <post-form
      :post="post"
      @sendPost="(value) => (post = value)"
      :submitForm="submitForm"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import PostForm from "../components/Crud/PostForm.vue";

export default defineComponent({
  components: { PostForm },
  data() {
    return {
      post: {
        title: "",
        content: "",
        creator: "",
        _id: null,
      },
      API_URL: "http://localhost:5000/crud",
    };
  },
  methods: {
    async submitForm() {
      console.log("JSLKSAJDSAHDJSAH", this.post);
      await axios.post(this.API_URL, this.post);
      this.$router.push({ name: "home" });
    },
  },
});
</script>
