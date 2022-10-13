<script>
  import { mapState } from "pinia";
  import axios from "axios";
  export default {
    name: "cachorros",
    props: ["id"],
    data() {
      return {
        value: 1,
        cachorros: [],
        cachorro: {
          cachorro: 0,
          peso: "",
          altura: "",
          descricao: "",
          nome: "",
        },
      };
    },
    methods: {
      async getAllCachorros(id) {
        await this.$get(
          `especificacoes/cachorros/${id}/`,
          this.especificacoes.cachorros
        );
      },
      async postEspecificacoes() {
        this.especificacoes.cachorros = this.$route.params.id;
        await this.$post("cachorros/", this.especificacoes);
        await this.getAllEspecificacoes();
      },
    },
    async created() {
      const res = await axios.get(
        `http://localhost:8000/cachorros/${this.id}/`
      );
      this.cachorro = res.data;
    },
    computed: {
      ...mapState("auth", ["cachorros"]),
    },
  };
</script>

<template>
  <div class="tudo">
    {{ id }}
    <div class="avatar">
      <img
        src="https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_1x1.jpg"
        alt=""
      />
    </div>
    <div class="container">
      <div class="infos">
        <div class="camps">
          <div class="nome">
            <h1>Nome:</h1> {{ cachorro.nome }}
          </div>
          <div class="peso">
            <h1>Peso:</h1> {{cachorro.peso}}
          </div>
          <div class="altura">
            <h1>Altura:</h1> {{cachorro.altura}}
          </div>
          <div class="Descrição">
            <h1>Descrição:</h1>{{ cachorro.descricao }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

  .nome{display: flex;}

  .peso{display: flex;}

  .altura{display: flex;}




  .avatar img {
    width: 300px;
    border-radius: 200px;
    border: 6px solid #eef;
  }
  .tudo {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .container {
    width: 50%;
    background-color: transparent;
    backdrop-filter: blur(50px);
    padding: 30px 35px;
    border-radius: 30px;
    box-shadow: 0px 5px 30px rgb(2, 48, 85);
  }

  .infos h1 {
    background: -webkit-linear-gradient(45deg, #8a93e4, #00b7ff, #3071e7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .infos span {
    color: #eef;
  }
</style>
