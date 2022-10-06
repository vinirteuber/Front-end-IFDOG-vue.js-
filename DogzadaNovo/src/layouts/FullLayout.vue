          
<script>
  import { mapState, mapStores} from 'pinia'
  import { useAuthStore } from '@/stores/auth'
export default {
  // data() {
  //   return {
  //     user: [],
  //   };
  // },
  async created() {
    const user = await axios.get("http://191.52.55.103:8000/token/", user);
    this.user = cachorros.data;
  },
  computed: {
    ...mapStores(useAuthStore),
    ...mapState(useAuthStore, ['username'])
  }
};
</script>
<template>
  <header>
    <div class="logo">
      <picture>
        <source srcset="@/assets/img/logomobile.png" media="(max-width: 890px)">
        <img src="@/assets/img/IMG_20220714_153653.png" alt="" />
      </picture>

      <div class="menu">
        <ul>
          <li>
            <a href="/cachorrada">Home</a>
          </li>
          <li>
            <a href="/comentarios">Aba de Comentarios</a>
          </li>

          <li>
            <a href="/contate">Sobre nós</a>
          </li>
          <li>
            <a href="/login">Meu Perfil</a>
          </li>
          <li v-if="username">
            <a href="/cadastro">{{username}}</a>
          </li>
          <li v-else="username">
            <a href="/signin">Login/Registro</a>
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

