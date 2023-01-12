<template>
    <div>
        <h3>Users</h3>
        <div class="users">
            <div :key="user.id" v-for="user in allUsers"
             class="user">{{ user.name }} <i @click="deleteUser(user.id)" class="fas fa-trash-alt"></i></div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name:"Users-component",
    methods:{
        ...mapActions(['fetchUsers','deleteUser'])
    },
    computed:mapGetters(['allUsers']),
    created(){
        this.fetchUsers()
    }
}
</script>

<style scoped>
.users {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.user {
  border: 1px solid rgb(51, 18, 238);
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  width: 60%;
  cursor: pointer;
}

i{
    position: absolute;
    bottom:10px;
    right: 10px;
    color:white;
    cursor: pointer;
}

</style>