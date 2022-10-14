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
    const user = await axios.get("http://localhost:8000/token/", user);
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
    <div class="tudo">

      <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>
        
        <ul class="menu__box">
          <li>  <RouterLink to="/cachorrada">Home</RouterLink></li>
          <li><RouterLink to="/comentarios">Aba de Comentarios</RouterLink></li>
          <li><RouterLink to="/contate">Sobre nós</RouterLink></li>
          <li v-if="username">
            <RouterLink to="/singout">{{ username }}</RouterLink>
          </li>
          <li v-else="username">
            <RouterLink to="/signin">Login/Registro</RouterLink>
          </li>
    </ul>
  </div>

  <div class="logo">
    <RouterLink to="/cachorrada">
      <picture>
        <source
        srcset="@/assets/img/logomobile.png"
        media="(max-width: 890px)"
        />
        <img src="@/assets/img/IMG_20220714_153653.png" alt="" />
      </picture></RouterLink>
    
      
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
  </div>
  </header>
  <RouterView />
</template>

<style scoped>


.hamburger-menu{
  z-index: 10;
  display: none;
  visibility: hidden ;
}

#menu__toggle {
  opacity: 0;
}
#menu__toggle:checked + .menu__btn > span {
  transform: rotate(45deg);
}
#menu__toggle:checked + .menu__btn > span::before {
  top: 0;
  transform: rotate(0deg);
}
#menu__toggle:checked + .menu__btn > span::after {
  top: 0;
  transform: rotate(90deg);
}
#menu__toggle:checked ~ .menu__box {
  left: 0 !important;
}
.menu__btn {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 1;
}
.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #616161;
  transition-duration: .25s;
}
.menu__btn > span::before {
  content: '';
  top: -8px;
}
.menu__btn > span::after {
  content: '';
  top: 8px;
}
.menu__box {
  display: block;
  position: fixed;
  top: 0;
  left: -100%;
  width: 300px;
  height: 100%;
  margin: 0;
  padding: 80px 0;
  list-style: none;
  background-color: #ECEFF1;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
  transition-duration: .25s;
}
.menu__item {
  display: block;
  padding: 12px 24px;
  color: #333;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition-duration: .25s;
}
.menu__item:hover {
  background-color: #CFD8DC;
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
    visibility: vi;

  }

  .tudo{
  display: flex;
  align-items: center;
  justify-content: center;
} 


  section.images .circle {
    clip-path: circle(35% at right 80%);
  }

  .hamburger-menu{
    display: block;
    visibility: visible ;
}
}
</style>
