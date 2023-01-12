<template>
  <div id="app">
    <div class="container">
      <AddUser class="adduser"></AddUser>
      <UpdateUser></UpdateUser>
      <Users/>
    </div>
  </div>
</template>

<script>
import Users from './components/Users.vue'
import AddUser from './components/AddUser'
import UpdateUser from './components/UpdateUser'

export default {
  name: 'App',
  components: {
    Users,
    AddUser,
    UpdateUser
  }
}
</script>

<style>
  body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}

.adduser{
  color:green;
  font-size: large;
}
</style>
