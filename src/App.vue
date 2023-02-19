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

interface Menu {
  id: number;
  menu_title_head: string;
  menu_title: string;
  menu_data_url: string;
  menu_keyword_url: string;
  menu_top_url: string;
}

@Options({
  components: {
    Head,
    Books
  },
  data() {
    return {
      active_menu_id: 1 as number,
      menu: [] as Menu[],
      active_menu: null as unknown as Menu
    };
  },
  methods: {
    setActiveMenu(): void {
      let self:any = this;
      if (self.menu === null) {
        return;
      }
      self.active_menu = self.menu.filter((r:any) => r.id === self.active_menu_id);
    }
  },
  created: function() {
    let self = this;
    axios
      .get<Menu>(
        "https://nagaokambeyond.github.io/technicalbooks_release_schedule/assets/json/menu.json"
      )
      .then(function(response : any) {
        self.menu = response.data;
        self.setActiveMenu();
      })
      .catch(e => console.log(e.response));
  }
})
export default class App extends Vue {}
</script>
