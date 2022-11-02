<template>
  <v-card class="mx-auto" max-width="344" title="User Registration">
    <v-container>
      <v-form @submit.prevent="submitForm">
        <v-text-field
          v-model="postForm.title"
          color="primary"
          label="Title"
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model="postForm.content"
          color="primary"
          label="Content"
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model="postForm.creator"
          color="primary"
          label="Creator"
          variant="underlined"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn
          class="mt-2 pa-2"
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
        >
          Submit
        </v-btn>
      </v-form>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import CrudModels from "../../models/CrudModels";
import { defineComponent, PropType } from "@vue/runtime-core";

export default defineComponent({
  props: {
    submitForm: {},
    post: {
      type: Object as PropType<CrudModels>,
      required: true,
    },
  },
  computed: {
    postForm: {
      get() {
        return this.post;
      },
      set(value: any) {
        this.$emit("sendPost", value);
      },
    },
  },
});
</script>
