<template>
    <div>
    <form>
      <label>Select User:</label>
      <select v-model="selectedUserId" @change="setSelectedUserId">
        <option :key="user.id" v-for="user in allUsers" :value="user.id" >{{ user.name }}</option>
      </select>
      <br />
      <label>Update it's name:</label>
      <input v-model="updateName" type="text" @input="setUpdateName"/>
      <br />
      <button @click.prevent="handleUpdate">Update</button>
    </form>
  </div>
</template>

<script>
import { mapActions,mapGetters, mapMutations, } from 'vuex';


export default {
    name:"UpdateUser-component",
    data(){
        return{
            users:[],
            selectedUserId:'',
            updateName:'',
        }
    },
    methods:{
        ...mapActions(['fetchUsers','updateUser']),
        ...mapMutations(['setSelectedUserId','setUpdateName']),
        handleUpdate() {
            this.updateUser()
    }
    },
    computed:mapGetters(['allUsers']),
    created(){
        this.fetchUsers()
    }
}
</script>

<style scoped>

div{
    margin-top:1%;
}


select{
    padding: 1px;
    margin-left: 3.6%;
}

</style>