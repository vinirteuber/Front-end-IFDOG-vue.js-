<script>
import CachorroCard from "@/components/cachorrada/CachorroCard.vue";
import axios from "axios";
import { mapStores, mapState } from "pinia";
import { useAuthStore } from "@/stores/auth";
export default {
  components: { CachorroCard },
  data() {
    return {
      cachorro:{},
    };
  },
  async created() {
      // const user = await axios.get("http://localhost:8000/token/");
      // this.user = cachorros.data;
    },
    methods: {
      async addDog() {
        try {
          const addCachorro = await axios.post(
            "http://localhost:8000/cachorros/",
            this.cachorro,
            //alert("")
          );
        } catch {
          alert("Erro 2222");
        }
      },
    },
    computed: {
      ...mapStores(useAuthStore),
      ...mapState(useAuthStore, ["id"]),
    },
  //   async sendFile() {
  //     let dataForm = new FormData();
  //     for (let file of this.$refs.files.files) {
  //       dataForm.append(`file`, file);
  //     }
  //     let res = await fetch(`http://localhost:8000/media/images`, {
  //       method: 'POST',
  //       body: dataForm,
  //     });
  //     let data = await res.json();
  //     console.log(data);
  //   },
  };
</script>

<template>
  <div class="outer">
    <div class="form">
      <main>
        <form action="#">
          <div class="circle-primary"></div>
          <div class="container">
            <div class="form-header">
              <div class="title">
                <h1>Adicione um novo cachorro:</h1>
              </div>
            </div>

            <div class="input-group">
              <div class="input-box">
                <label for="firstname">Nome do cão</label>
                <input
                @keydown.enter="addDog()"
                  id="nome"
                  type="text"
                  name="nome"
                  placeholder="nome"
                  v-model="cachorro.nome"
                  required
                />
              </div>

              <div class="input-box">
                <label for="lastname">desc</label>
                <input
                @keydown.enter="addDog()"
                  id="descricao"
                  type="text"
                  name="descricao"
                  placeholder="desc"
                  v-model="cachorro.descricao"
                  required
                />
              </div>


              <div class="input-box">
                <label for="email">Peso</label>
                <input
                @keydown.enter="addDog()"
                  id="peso "
                  type="text"
                  name="peso"
                  placeholder="peso"
                  v-model="cachorro.peso"
                  required
                />
              </div>

              <div class="input-box">
                <label for="number">altura</label>
                <input
                @keydown.enter="addDog()"
                  id="altura"
                  type="text"
                  name="altura"
                  v-model="cachorro.altura"
                  required
                  placeholder="altura"
                />
              </div>

              <div class="input-box">
                <label for="password">responsavel</label>
                <input
                @keydown.enter="addDog()"
                  id="nome_responsavel"
                  type="text"
                  name="nome_responsavel"
                  placeholder="responsavel"
                  v-model="cachorro.nome_responsavel"
                  required
                />
              </div>

              <div class="input-box">
                <label for="confirmPassword">tel_responsavel</label>
                <input
                  @keydown.enter="addDog()"
                  id="tel_responsavel"
                  type="text"
                  name="tel_responsavel"
                  placeholder="tel_responsavel"
                  v-model="cachorro.tel_responsavel"
                  required
                />
              </div>
            </div>

            <div class="continue-button">
              <button @click.prevent="addDog">Adicione</button>
            </div>
          </div>
        </form>
      </main>
      <section class="images">
        <img src="@/assets/img/image-3.svg" alt="image" />
        <div class="circle"></div>
      </section>
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
