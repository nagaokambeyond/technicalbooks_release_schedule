<template>
  <div>
    <ul class="nav nav-tabs">
      <li class="nav-item" v-for="word in menu" :key="word.id">
        <label
          v-bind:class="[
            local_active_page === word.id
              ? 'btn btn-primary btn-sm'
              : 'btn btn-outline-primary btn-sm'
          ]"
        >
          <input
            type="radio"
            class="nav-link"
            v-model="local_active_page"
            v-bind:value="word.id"
          />
          {{ word.title }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Menu",
  props: ["child_page"],
  data() {
    return {
      menu: []
    };
  },
  mounted: function() {
    axios
      .get("../assets/json/menu.json")
      .then(response => (this.menu = response.data))
      .catch(response => console.log(response));
  },
  computed: {
    local_active_page: {
      get: function() {
        return this.child_page;
      },
      set: function(value) {
        this.$emit("input", value);
      }
    }
  }
};
</script>

<style scoped></style>
