<template>
  <h2>{{ this.child_active_menu[0].menu_title_head }}</h2>
</template>
<script>
export default {
  name: "Head",
  props: ["child_active_menu"]
};
</script>
