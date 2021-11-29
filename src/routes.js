import showBlogs from "./Components/showBlogs.vue";
import addBlog from "./Components/addBlog.vue";
import singleBlog from "./Components/singleBlog.vue";

export default [
  {
    path: "/",
    component: showBlogs
  },
  {
    path: "/add",
    component: addBlog
  },
  {
    path: "/blog/:id",
    component: singleBlog
  }
];
