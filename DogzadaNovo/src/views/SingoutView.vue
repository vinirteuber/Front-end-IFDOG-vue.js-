<script>
  import { mapState, mapStores } from "pinia";
  import { useAuthStore } from "@/stores/auth";
  import axios from "axios";
  export default {
    data() {
      return {
        user: {
          username: "",
          email: "",
          first_name: "",
        },
      };
    },
    // async created() {
    //   // const user = await axios.get("http://localhost:8000/token/");
    //   // this.user = cachorros.data;
    // },
    async created() {
    const res = await axios.get(`http://localhost:8000/usuarios/${this.id}/`);
    this.user = res.data;
  },
  
  alterarImagemPerfil() {
      const imagem = this.$refs["input-imagem-perfil"].files[0];
      const reader = new FileReader();
      const _this = this;

      reader.onload = async () => {
        const resultado = reader.result.split(",")[1];

        await axios.patch(`/usuarios/${_this.usuario.id}/`, {
          imagem_perfil: resultado,
        });

        _this.getUsuario();
      };

      reader.readAsDataURL(imagem);
    },
    methods: {
      
     
      async editarPerfil() {
        try {
          await axios.patch(
            `http://localhost:8000/usuarios/${this.id}/`,
            this.user,
            alert("por favor deslogar para salvar as informações")
          );
        } catch {
          alert("Algo deu errado, tente novamente ");
        }
      },
    },
    computed: {
      ...mapStores(useAuthStore),
      ...mapState(useAuthStore, ["username", "email", "id", "first_name"]),
    },
    
    mounted() {
      this.user.email = this.email;
      this.user.username = this.username;
      this.user.first_name = this.first_name;
    },
  };
</script>

<template>
  <div>
    <div class="outer">
      <div class="circle-1"></div>
      <div class="circle-2"></div>
      <div class="container">

        <div class="avatar">       
          <img :src="user.foto.url" />
        </div>
        <div class="user-name">
          <div>
            <h1>{{ username }}</h1>
          </div>
        </div>
        <div class="user-email">
          <div>
            <span>{{ first_name }}</span>
          </div>
        </div>

        <span>Nova nome:</span>
        <div class="new">
          <input
            type="text"
            v-model="user.username"
            @keydown.enter="editarPerfil()"
          />
          <div class="btn"></div>
        </div>
        <span>Nova email:</span>
        <div class="new">
          <input
            type="text"
            v-model="user.email"
            @keydown.enter="editarPerfil()"
          />
          <div class="btn"></div>
        </div>
        <div class="new">
          <span>Nova senha:</span>
        </div>
        <div class="password">
          <input type="text" @keydown.enter="editarPerfil()" />
        </div>
        <div class="new">
          <span>Confirme a senha:</span>
        </div>
        <div class="re-password">
          <input type="text" @keydown.enter="editarPerfil()" />
          <div class="btn"></div>
          <button
          class="text-white-perfil"
          @click="$refs['input-imagem-perfil'].click()"
          v-if="!$route.params.id"
        >
          Alterar foto de Perfil
        </button>
        <input
        type="file"
        v-show="false"
        ref="input-imagem-perfil"
        @change="alterarImagemPerfil"
      />
        </div>
        <div class="logout">
          <a href="/signin">
            <button>Sair</button>
            <button @click="editarPerfil">Alterar</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

  input {
    width: 350px;
    height: 40px;
    margin-top: 1rem;
    background-color: #161e35;
    border-radius: 6px;
    color: #fff;
    outline: none;
    padding: 3% 5%;
  }

  .user-name {
    background: -webkit-linear-gradient(45deg, #8a93e4, #00b7ff, #3071e7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .user-email {
    color: #eef;
  }

  button {
    background: linear-gradient(to right, #0419d6, #00b7ff);
    color: #fff;
    width: 150px;
    height: 40px;
    border-radius: 40px;
    margin-top: 20px;
    cursor: pointer;
  }

  button:hover {
    background: linear-gradient(to right, rgb(230, 108, 169), #970584);
    color: #fff;
    height: 40px;
    border-radius: 40px;
  }

  span {
    color: #eef;
  }

  .logout button {
    margin-top: 60px;
    width: 400px;
  }
  .nickname {
    display: flex;
  }

  .re-password {
    display: flex;
  }

  .circle-1 {
    position: absolute;
    height: 100%;
    width: 100%;
    background: -webkit-linear-gradient(45deg, #212979, #3c88a6, #204486);
    clip-path: circle(40% at left 80%);
    z-index: 0;
  }

  .circle-2 {
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(45deg, #8a93e4, #00b7ff, #3071e7);
    clip-path: circle(40% at right 80%);
    z-index: 0;
  }

  .outer {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container {
    background: rgba(22, 30, 53, 0.65);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(12.5px);
    -webkit-backdrop-filter: blur(12.5px);
    width: 80%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .avatar img {
    width: 300px;
    border-radius: 200px;
    border: 6px solid #eef;
  }
</style>
