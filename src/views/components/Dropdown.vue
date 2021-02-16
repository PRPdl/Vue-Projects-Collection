<template>
  <div
    class="menu-item"
    tabindex="0"
    @focus="isOpen = true"
    @focusout="isOpen = false"
    :class="{ openMenu: openMenu }"
  >
    <a href="#" tabindex="0" @focus="isOpen = true">
      {{ title }}
    </a>
    <svg viewBox="0 0 1030 638" width="10">
      <path
        d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z"
        fill="#FFF"
      ></path>
    </svg>

    <transition name="fade" appear>
      <div class="sub-menu" v-show="isOpen">
        <div class="submenu-item" v-for="(item, i) in items" :key="i">
          <a href="item.link" tabindex="-1">{{ item.title }} </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "drpodown",
  props: ["title", "items"],
  data() {
    return {
      isOpen: false,
    };
  },

  computed: {
    openMenu() {
      return this.isOpen;
    },
  },
};
</script>

<style scoped>
* {
  outline: none;
}
.menu-item {
  display: flex;
}
.menu-item a {
  text-decoration: none;
  color: inherit;
}

.menu-item svg {
  width: 10px;
  margin-left: 10px;
}

.sub-menu {
  position: absolute;
  background-color: #222;
  left: 50%;
  transform: translateY(25%) translateX(-50%);
  width: 100px;
  border-radius: 0px 0px 16px 16px;
  z-index: 1;
}

.submenu-item {
  padding-bottom: 10px;
  padding-top: 10px;
}

.submenu-item:nth-child(1) {
  margin-top: 10px;
}

.submenu-item:hover {
  border-bottom: 3px solid transparent;
  background-color: #444;
  border-bottom-color: #ff5858;
  border-radius: 10px 10px 10px 10px;
}

.openMenu {
  background-color: rgb(109, 121, 109);
  border-bottom: 3px solid transparent;
  border-bottom-color: #ff5858;
  border-radius: 10px 10px 10px 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>