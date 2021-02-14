<template>
  <b-navbar class="footer" toggleable="lg" type="dark" fixed="bottom" variant="dark">
    <img alt="Vue logo" src="../assets/logo.png">
  </b-navbar>
</template>

<script>
export default {
  name: 'Footer',
};
</script>
<style scoped>
  .footer {
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

  }
  .footer img {
    max-height: 25px;
  }
</style>
