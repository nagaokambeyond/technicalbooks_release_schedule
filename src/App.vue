<template>
  <div id="app">
    <Head></Head><br />
    <Menu :child_page="active_page" @input="active_page = $event"></Menu>
    <Books :child_page="active_page"></Books>
  </div>
</template>

<script>
import Head from "./components/Head.vue";
import Menu from "./components/Menu.vue";
import Books from "./components/Books.vue";

export default {
  components: {
    Head,
    Menu,
    Books
  },
  data() {
    return {
      active_page: 2
    };
  }
};
</script>
