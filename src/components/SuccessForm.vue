<template>
  <div class="success">
    <div class="modal">
      <div class="modal-body">
        <p>Клиент добавлен в базу</p>
      </div>
      <div class="modal-footer">
        <button v-on:click="addClient">Добавить клиента</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuccessForm',
  methods: {
    addClient: function(){
      document.querySelector('.modal').classList.remove('show');
      document.querySelector('.form-container').classList.remove('hide');
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/success.scss';
</style>