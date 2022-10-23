<script>
import { mapState, mapStores } from "pinia";
import { useAuthStore } from "@/stores/auth";
export default {
  async created() {
    const user = await axios.get("http://localhost:8000/token/", user);
    this.user = cachorros.data;
  },
  async editarPerfil() {
    try {
      await axios.p("http://localhost:8000/token/", user);
    } catch {
      alert("Erro");
    }
  },
  computed: {
    ...mapStores(useAuthStore),
    ...mapState(useAuthStore,["username", "email"]),
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
        <img
          src="https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_1x1.jpg"
          alt=""
        />
      </div>
      <div class="user-name">
        <div>
          <h1>{{ username }}</h1>
        </div>
      </div>
      <div class="user-email">
        <div>
          <span>{{ email }}</span>
        </div>
      </div>

      <div class="inp">
        <div class="new">
          <span>Novo nome:</span>
        </div>
        <div class="nickname">
          <input type="text" />
          <div class="btn">
            <button @click="alterarPerfil">alterar</button>
          </div>
        </div>
        <div class="new">
          <span>Nova senha:</span>
        </div>
        <div class="password">
          <input type="text" />
        </div>
        <div class="new">
          <span>Confirme a senha:</span>
        </div>
        <div class="re-password">
          <input type="text" />
          <div class="btn">
            <button>alterar</button>
          </div>
        </div>
        <div class="logout">
          <a href="/signin">
            <button>Sair</button>
          </a>
        </div>
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
