<script>
import Comentarios from "@/components/cachorrada/Comentarios.vue";
import axios from "axios";
export default {
  components: { Comentarios },
  data() {
    return {
      comentarios: [],
    };
  },
  methods: {
    addComment() {
        if (this.comentarios.trim() === '') {
          return;
        }

        this.$emit('add-todo', {
          comentario: this.comentarios,
        });

        this.comentario = '';
      }
  },
  async created() {
    const comentarios = await axios.get("http://127.0.0.1:8000/coments/");
    this.comentarios = comentarios.data;
    
  },
};
</script>
<template>
  <div class="outer">
    <div class="container">
      <div class="map">
        <img src="@/assets/img/ifcmapatt.png" alt="" />
      </div>
      <div class="comment">
        <input
          type="text"
          style="padding: 4px"
          placeholder="escreva seu comentario
        "
        />
        <div class="submit">
          <button v-on:click="addComment" type="submit" class="btn btn-primary">Enviar</button>
        </div>
      </div>
    </div>
  </div>

  <div class="card-group">
    <Comentarios
      v-for="comentario in comentarios"
      :key="comentario.id"
      :comentarios="comentario"
    />
  </div>
</template>

<style scoped>
.outer {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  margin-left: 1rem;
  background: -webkit-linear-gradient(45deg, #8a93e4, #00b7ff, #3071e7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.comment {
  margin-top: 790px;
  display: flex;
  height: 40px;
  margin-left: 15px;
}

input {
  color: #eef;
  background: rgba(22, 30, 53, 0.65);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(12.5px);
  -webkit-backdrop-filter: blur(12.5px);
  width: 470px;
  border-radius: 15px;
  outline: 0;
}

button {
  border-radius: 15px;
  background: linear-gradient(to right, #0419d6, #00b7ff);
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 100;
  width: 70px;
  height: 40px;
}

button:hover {
  border-radius: 15px;
  background: linear-gradient(to right, rgb(230, 108, 169), #970584);
  font-weight: 100;
}

.map img {
  height: 840px;
  border-radius: 16px 0px 0px 16px;
}

.container {
  display: flex;
  border-radius: 16px 16px 16px 16px;
  margin-top: 5rem;
  background: rgba(22, 30, 53, 0.65);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(12.5px);
  -webkit-backdrop-filter: blur(12.5px);
  border-radius: 10px;
  border: 0px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0px 5px 30px #232733;
  width: 1500px;
  height: 840px;
}
</style>
