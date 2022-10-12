<script>
import { mapState, mapStores } from "pinia";
import { useAuthStore } from "@/stores/auth";
export default {
  // data() {
  //   return {
  //     user: [],
  //   };
  // },
  async created() {
    const user = await axios.get("http://192.168.100.52:8000/token/", user);
    this.user = cachorros.data;
  },
  computed: {
    ...mapStores(useAuthStore),
    ...mapState(useAuthStore, ["username"]),
  },
};
</script>
<template>
  <header>
    <div class="outer">
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a href="#"><li>Home</li></a>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Info</li></a>
            <a href="#"><li>Contact</li></a>
            <a href="https://erikterwan.com/" target="_blank"
              ><li>Show me more</li></a
            >
          </ul>
        </div>
      </nav>
    </div>
    <div class="logo">
      <picture>
        <source
          srcset="@/assets/img/logomobile.png"
          media="(max-width: 890px)"
        />
        <img src="@/assets/img/IMG_20220714_153653.png" alt="" />
      </picture>

      <div class="menu">
        <ul>
          <li>
            <RouterLink to="/cachorrada">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/comentarios">Aba de Comentarios</RouterLink>
          </li>

          <li>
            <RouterLink to="/contate">Sobre nós</RouterLink>
          </li>
          <li v-if="username">
            <RouterLink to="/singout">{{ username }}</RouterLink>
          </li>
          <li v-else="username">
            <RouterLink to="/signin">Login/Registro</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
.outer {
  margin: 0;
  padding: 0;
    display: none;
    visibility: hidden;
  /* make it look decent enough */
  background: #232323;
  color: #cdcdcd;
  font-family: "Avenir Next", "Avenir", sans-serif;
}

#menuToggle {
  display: block;
  position: relative;
  top: 50px;
  left: 50px;

  z-index: 1;

  -webkit-user-select: none;
  user-select: none;
}

#menuToggle a {
  text-decoration: none;
  color: #232323;

  transition: color 0.3s ease;
}

#menuToggle a:hover {
  color: tomato;
}

#menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;

  cursor: pointer;

  opacity: 0;
  z-index: 2;

  -webkit-touch-callout: none;
}

#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;

  background: #cdcdcd;
  border-radius: 3px;

  z-index: 1;

  transform-origin: 4px 0px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}

#menu {
  position: absolute;
  width: 300px;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}

#menu li {
  padding: 10px 0;
  font-size: 22px;
}

#menuToggle input:checked ~ ul {
  transform: none;
}

@media only screen and (min-width: 900px) and (max-width: 1880px) {
  .outer {
    display: none;
    visibility: hidden;
  }
}

@media only screen and (max-width: 890px) {
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu {
    display: none;
    visibility: hidden;
  }

  section.images .circle {
    clip-path: circle(35% at right 80%);
  }
}
</style>
