<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container-fluid">
      {{ getMenuTitleHead() }}
    </div>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav" role="list">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            SNS
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li
              class="dropdown-item devicon-facebook-plain colored"
              @click="share('facebook')"
            >
              Facebookでシェアする
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Menu } from "../lib/interface";

const props = defineProps<{
  child_active_menu: Menu[];
}>();

const getMenuTitleHead = () => {
  if (props.child_active_menu != null && props.child_active_menu.length > 0) {
    return props.child_active_menu.at(0)?.menu_title_head;
  } else {
    return null;
  }
};

const share = (sns: string) => {
  let href = "";
  const shareUrl =
    "https://nagaokambeyond.github.io/technicalbooks_release_schedule/";
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
};
</script>
