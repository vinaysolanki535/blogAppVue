<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from "./Components/addBlog.vue";
import showBlogs from "./Components/showBlogs.vue";
import header from "./Components/header.vue";

export default {
  components: {
    "add-blog": addBlog,
    "show-blogs": showBlogs,
    "app-header": header
  },
  data() {
    return {};
  },

  methods: {}
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>
