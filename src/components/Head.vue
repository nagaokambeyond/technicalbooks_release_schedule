<template>
  <b-navbar type="light" variant="light">
    <h3>{{ this.child_active_menu[0].menu_title_head }}</h3>
  </b-navbar>
</template>
<script>
export default {
  name: "Head",
  props: ["child_active_menu"]
};
</script>
