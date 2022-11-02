<template>
  <v-container>
    <v-row>
      <v-col v-for="(post, i) in posts" :key="i">
        <div class="d-flex align-center flex-column">
          <div class="text-subtitle-2">{{ post.title }}</div>
          <v-card width="400" :subtitle="post.content" :text="post.creator">
            <div class="d-flex justify-center align-center">
              <v-btn
                color="warning"
                class="ma-4"
                size="small"
                @click.prevent="editRoute(post._id)"
              >
                Edit
              </v-btn>
              <v-btn
                color="error"
                size="small"
                @click.prevent="removePost(post._id)"
              >
                Delete
              </v-btn>
            </div>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios, { AxiosResponse } from "axios";
import CrudModels from "../../models/CrudModels";

export default defineComponent({
  data() {
    return {
      posts: new Array<CrudModels>(),
      API_URL: "http://localhost:5000/crud",
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      await axios(this.API_URL).then(
        (result: AxiosResponse<Array<CrudModels>>) => {
          this.posts = result.data;
        }
      );
    },
    editRoute(id: string | null) {
      this.$router.push({
        name: "update",
        params: {
          id: id,
        },
      });
    },
    async removePost(id: string | null) {
      await axios.delete(`${this.API_URL}/${id}`);
      this.getPosts();
    },
  },
});
</script>
