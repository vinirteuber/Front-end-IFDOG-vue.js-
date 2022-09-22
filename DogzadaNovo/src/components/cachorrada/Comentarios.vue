<script>
export default {
  props: ["comentarios"],
};
</script>
  
  <template>
  <div class="card">
    <h1>{{ comentarios.autor }}</h1>
    <h2>{{ comentarios.comentario }}</h2>
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
  