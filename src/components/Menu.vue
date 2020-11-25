<template>
  <div>
    <ul class="nav nav-tabs">
      <li class="nav-item" v-for="word in child_menu" :key="word.id">
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
          {{ word.menu_title }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: ["child_menu_id", "child_menu"],
  computed: {
    local_active_page: {
      get: function() {
        return this.child_menu_id;
      },
      set: function(value) {
        this.$emit("input", value);
      }
    }
  }
};
</script>

<style scoped></style>
