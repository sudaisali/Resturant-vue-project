<script>
import { RouterLink } from 'vue-router';

export default{
    name: 'HeaderComp',
    methods: {
        logOut() {
            localStorage.clear();
            this.$router.push({
                name: 'Login'
            });
        }
    },
    components: { RouterLink }
}
</script>


<template>
    <div class="container">
       <router-link to="/">Home</router-link>
       <router-link to="/add">Add Resturant</router-link>
       <a v-on:click="logOut()">Logout</a>
    </div>
</template>


<style scoped>
.container{
    display: flex;
    width: 100%;
    background-color: gray;
   
}

.container >a{
    padding: 15px;
    text-decoration: none;
    color: white;
    font-size: 19px;
    margin-left: 25px ;
    cursor: pointer;
}

.container>a:hover{
    background-color: rgb(0, 0, 0);
}

</style>

