<template>
  <div id="app">
    <TheHead :child_active_menu="active_menu"></TheHead><br />
    <Books :child_active_menu="active_menu" :child_menu_id="active_menu_id">
    </Books>
  </div>
</template>

<script lang="ts">
import axios, { AxiosResponse, AxiosError } from "axios";
import { defineComponent } from "vue";
import TheHead from "./components/TheHead.vue";
import Books from "./components/Books.vue";
import { Menu } from "./lib/interface";

export default defineComponent({
  name: "App",
  components: {
    TheHead,
    Books,
  },
  data() {
    return {
      active_menu_id: 1 as number,
      menu: [] as Menu[],
      active_menu: null as unknown as Menu,
    };
  },
  methods: {
    setActiveMenu(): void {
      let self: any = this;
      if (self.menu === null) {
        return;
      }
      self.active_menu = self.menu.filter(
        (r: any) => r.id === self.active_menu_id
      );
    },
  },
  created: function () {
    let self = this;
    axios
      .get(
        "https://nagaokambeyond.github.io/technicalbooks_release_schedule/assets/json/menu.json"
      )
      .then(function (response: AxiosResponse<Menu[]>) {
        self.menu = response.data;
        self.setActiveMenu();
      })
      .catch((e: AxiosError<{ error: string }>) => console.log(e.message));
  },
});
</script>
