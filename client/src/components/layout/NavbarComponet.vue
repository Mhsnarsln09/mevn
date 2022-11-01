<template>
  
    <v-card style="position: sticky; top: 0; z-index: 2">
    <v-layout>
      <v-app-bar color="primary">
          <v-toolbar-title>APP</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-col cols="auto">
          <v-row no-gutters>
            <v-col>
            <v-btn v-for="(link,index) in links"
        :key="index"
        @click="direction(index)"
      >
        {{ link.name }}
      </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-app-bar>
      <v-main></v-main>
    </v-layout>
  </v-card>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
  data(){
    return{
      links : [
        {
          id:1,
          name:"home"
        },
        {
          id:2,
          name: "create"
        }
      ] 
    }
  },
  methods:{
   direction(i:number){
   this.$router.push({name:this.links[i].name})  
   }
  }
  })
  </script>