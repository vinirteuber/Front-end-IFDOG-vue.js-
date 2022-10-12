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
          <li>
            <RouterLink to="/login">Meu Perfil</RouterLink>
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
