<script>
import Comentarios from "@/components/cachorrada/Comentarios.vue";
import axios from "axios";
import { mapStores, mapState } from 'pinia'
import { useAuthStore } from '@/stores/auth'
export default {
  components: { Comentarios },
  data() {
    return {
      comentarios: [],
      comentario: {
        texto: "",
        autor: 0
      }
    };
  },
  computed: {
    ...mapStores(useAuthStore),
    ...mapState(useAuthStore, ['id'])
  },
  // created() {
  //   this.comentario.usuario = username.id
  // }
  methods: {
    async addComment() {
      if (this.comentario.texto.trim() === '') {
        return;
      }

      // this.$emit('add-todo', {
      //   comentario: this.comentarios,
      // });

      this.comentario.autor = this.id;
      await axios.post('http://191.52.55.103:8000/coments/', this.comentario)
      await this.getAllComments()
    },
    async getAllComments(){
      const comentarios = await axios.get("http://191.52.55.103:8000/coments/");
      this.comentarios = comentarios.data;
    }
  },
  async created() {
    await this.getAllComments()
  },
};
</script>
<template>
  <div class="outer">
    <div class="container">
      <div class="map">
        <img src="@/assets/img/ifcmapatt.png" alt="" />
      </div>
      <div class="comentarios">
    <Comentarios
      v-for="comentario in comentarios"
      :key="comentario.id"
      :comentarios="comentario"
    />
  </div>
      <div class="enviar">
        <input
          type="text"
          style="padding: 4px"
          placeholder="escreva seu comentario
        "
        v-model="comentario.texto"
        />
        <div class="submit">
          <button v-on:click.prevent="addComment" type="submit" class="btn btn-primary">Enviar</button>
          
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

.comentarios{
  width: 0px;
  height: 90px;
}


.outer {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  background: -webkit-linear-gradient(45deg, #8a93e4, #00b7ff, #3071e7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.enviar {
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
  font-weight: 50 0;
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
  background: #161e35a6;
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
