<template>
  <b-navbar type="light" variant="light">
    <h3 v-if="this.child_active_menu !== null">
      {{ this.child_active_menu[0].menu_title_head }}
      <button v-on:click="share('facebook')">
        <i class="devicon-facebook-plain colored"></i>
      </button>
    </h3>
  </b-navbar>
</template>

<script>
export default {
  name: "Head",
  props: ["child_active_menu"],
  methods: {
    share: function(sns) {
      let href = "";
      const shareUrl = "https://nagaokambeyond.github.io/technicalbooks_release_schedule/";
      switch (sns) {
        case "facebook":
          href = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
          break;
        // case "twitter":
        //   href = `https://twitter.com/intent/tweet?url=${shareUrl}`;
        //   break;
        // case "line":
        //   href = `https://social-plugins.line.me/lineit/share?url=${shareUrl}`;
        //   break;
      }
      if (href === "") {
        return;
      }
      window.open(href, "_blank"); // 新規タブでSNSのシェアページを開く
    }
  }
};
</script>
