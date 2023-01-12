<template>
    <div>
        <h3>Add User</h3>
        <div>
            <form @submit="onSubmit">
                <input type="text" v-model="name" placeholder="add user...">
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name:"AddUser-component",
    data(){
        return{
            name: ''
        } 
    },
    methods:{
        ...mapActions(['addUser']),
        onSubmit(e){
            e.preventDefault();
            this.addUser(this.name)
        }
    }
}
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>