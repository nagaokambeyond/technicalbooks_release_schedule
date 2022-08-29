<template>
  <div id="app">
    <Head :child_active_menu="active_menu"></Head><br />
    <Books :child_active_menu="active_menu" :child_menu_id="active_menu_id"> </Books>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Head from "./components/Head.vue";
import Books from "./components/Books.vue";
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
    Head,
    Books
  },
  data() {
    return {
      active_menu_id: 1,
      menu: null,
      active_menu: null
    };
  },
  methods: {
    setActiveMenu: function() {
      if (this.menu === null) {
        return;
      }
      this.active_menu = this.menu.filter((r:any) => r.id === this.active_menu_id);
    }
  },
  created: function() {
    let self = this;
    axios
      .get(
        "https://nagaokambeyond.github.io/technicalbooks_release_schedule/assets/json/menu.json"
      )
      .then(function(response) {
        self.menu = response.data;
        self.setActiveMenu();
      })
      .catch(response => console.log(response));
  }
})
export default class App extends Vue {}
</script>
