import axios from "axios"
const usersApi = 'https://jsonplaceholder.typicode.com/users'
const state = {
    users:[],
    selectedUserId:'',
    updateName:''
}
const getters = {
    allUsers: function(state){
        
        return state.users;
    },
    selectedUserId:state=>state.selectedUserId,
    updateName:state => state.updateName
}
const actions = {
    async fetchUsers({ commit }) {
        try {
          const response = await fetch(usersApi);
          const data = await response.json();
          commit('setUsers',data);
          
        } catch (error) {
          console.error(error);
        }
      },
      
      async addUser({commit},name){
        const response = await axios.post(usersApi,{name,completed:false})
        commit('newUser',response.data)
      },

      async deleteUser({commit},id){
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)

        commit('removeUser',id)
      },

      async updateUser({commit,state}){
        const selectedUser = state.users.find(user => user.id === state.selectedUserId);
        selectedUser.name = state.updateName;
        axios.put(`https://jsonplaceholder.typicode.com/users/${selectedUser.id}`, selectedUser)
      .then(() => {
        console.log('User updated successfully');
        commit('updateUser', selectedUser);
      }).catch(err => {
        console.log(err);
      });

      commit('updateUser',selectedUser)
      }
}
const mutations = {
    setUsers:function(state,users){
        state.users = users
    },

    //add one or more elements
    //to the beginning of an array and returns the new array
    newUser:function(state,user){
        state.users.unshift(user)
    },


    // create a new array that contains only
    // the users whose id does not match the passed id.
    removeUser:function(state,id){
        state.users = state.users.filter(function(user){
            return user.id !== id
        })
    },

    setSelectedUserId: (state, userId) => {
        state.selectedUserId = userId;
    },


    updateUser: (state, user) => {
        const userIndex = state.users.findIndex(u => u.id === user.id);
        state.users.splice(userIndex, 1, user);
    },

    setUpdateName: (state, name) => {
        state.updateName = name;
    },
}


export default{
    state,
    getters,
    actions,
    mutations
}