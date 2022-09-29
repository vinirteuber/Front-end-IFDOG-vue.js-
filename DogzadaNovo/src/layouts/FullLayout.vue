<template>
  <header>
    <div class="logo">
      <picture>
        <source srcset="@/assets/img/logomobile.png" media="(max-width: 890px)" >
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
          <li>
            <a href="/signin">Login/Registro</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <RouterView />
</template>

<script>
export default {
    data() {
      return {
        user: [],
      };
    },
    async created() {
      const user = await axios.get("http://localhost:8000/token/", user);
      this.user = cachorros.data;
    },
  };
</script>


<style scoped>
    @media only screen and (max-width: 890px) {

    .logo{

      display: flex;
      align-items: center;
      justify-content: center;
    }    
        
        .menu{
        display: none;
      visibility: hidden;
      }

    section.images .circle {
      clip-path: circle(35% at right 80%);
    }
  }


</style>

