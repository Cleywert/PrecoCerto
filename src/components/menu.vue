<template>
  <b-navbar type="dark" variant="dark" class="px-5">
    <!-- <div class="container"> -->
    <b-navbar-brand>
      <img src="@/assets/logo-pc-min.png" height="50px" alt="" />
    </b-navbar-brand>
    <b-collapse is-nav>
      <b-navbar-nav>
        <b-nav-item to="/" active-class="active">Dashboard</b-nav-item>
        <b-nav-item active-class="active">Gerenciar</b-nav-item>
        <b-nav-item active-class="active">Otimizar</b-nav-item>
        <b-nav-item active-class="active">Simular</b-nav-item>
        <b-nav-item active-class="active">Histórico</b-nav-item>
        <b-nav-item active-class="active">Configurar</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    <b-navbar-nav class="ml-auto">
      <b-nav-item style="margin-right: 16px">
        <b-icon-bell-fill></b-icon-bell-fill>
        <span class="badge-alert text-dark bg-warning">2</span>
      </b-nav-item>
      <b-nav-item>
        cleywert@gmail.com
        <b-icon-person-fill></b-icon-person-fill>
      </b-nav-item>
    </b-navbar-nav>
    <!-- </div> -->
  </b-navbar>
</template>

<script>
export default {};
</script>

<style>
.active {
  border-bottom: 1px solid #ffa500;
}
.badge-alert {
  margin-top: -10px;
  position: absolute;
  font-size: 0.8em;
  border-radius: 50%;
  padding: 0 5px;
}
</style>