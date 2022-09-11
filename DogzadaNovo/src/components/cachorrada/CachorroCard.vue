<script>
  export default {
    props: ["cachorro"],
  };
</script>

<template>
  <div class="card">
    <img
      src="@/assets/img/guia_racas_golden_retriever_dogvibe.jpg"
      alt="gato"
    />
    <h1>{{ cachorro.nome }}</h1>
    <div class="descricao">
      {{ cachorro.descricao }}
    </div>

    <div class="button">
      <a href="/comentarios"><button>clique aqui</button></a>
      <div class="help-link">
        <span><a href="#">Estou em apuros? Clique aqui</a></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .descricao {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 306px;
  }
</style>
