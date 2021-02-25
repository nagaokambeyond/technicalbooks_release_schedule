<template>
  <b-navbar type="light" variant="light">
    <b-navbar-brand href="#" v-if="this.child_active_menu !== null">
      {{ this.child_active_menu[0].menu_title_head }}
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav >
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="SNS" right>
          <b-dropdown-item v-on:click="share('facebook')">
            <i class="devicon-facebook-plain colored">Facebook</i>
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
     </b-collapse>

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
