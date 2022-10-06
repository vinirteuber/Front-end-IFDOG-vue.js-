<script>
export default {
  props: ["comentarios"],
};
</script>
  
  <template>
  <div class="comentarios">
    <div class="full">
      <h1>{{ comentarios.autor.username }}</h1>
      <h2>{{ comentarios.comentario }}</h2>
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



h1{
  background: -webkit-linear-gradient(45deg, #8a93e4, #00b7ff, #3071e7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 16pt;
}

h2{
  margin-top: 7px;
  margin-left: 10px;
  font-size: 10pt;
}



.full{
  margin-left: 5%;
  display: flex;
  color: #eff;
}

</style>
  