<template>
  <div class="tudo">
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
            <h1>Nome:</h1>
          </div>
          <div class="peso">
            <h1>Peso:</h1>
          </div>
          <div class="altura">
            <h1>Altura:</h1>
          </div>
          <div class="Descrição">
            <h1>Descrição:</h1>
            <span
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              error fugit, consequuntur iste fuga, omnis deserunt voluptates
              minima vitae nisi debitis nam quam ducimus reprehenderit! Pariatur
              quo ut libero aliquid.</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
