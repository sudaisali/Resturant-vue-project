<script>
import axios from 'axios'
import {
    RouterLink
} from 'vue-router';
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }

    },
    methods: {

       async validate() {

        let user = await axios.get(
            `http://localhost:3000/users?email=${this.email}&password=${this.password}`
        );
        if(user.status == 200 && user.data.length > 0){
           localStorage.setItem('user-Info' , JSON.stringify(user.data[0]));
           this.$router.push({
            name: 'HomePage'
           })
        }
            
        }

    },
    mounted()
    {
        let user = localStorage.getItem('user-Info');
        if(user)
        {
            this.$router.push({
                name: 'HomePage'
            })

        }

    },

    components: {
        RouterLink
    }

}
</script>

<template>
<div class="container">
    <h1>Login</h1>
    <input type="email" placeholder="Email" class="form-field" v-model="email">
    <input type="password" placeholder="Password" class="form-field" v-model="password">
    <button class="login-button" v-on:click="validate()">Login</button>
    <p>
        <RouterLink to="/Signup" class="signup-link">SignUp</RouterLink>
    </p>
</div>
</template>

<style scoped>
h1 {
    color: green;
}

.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form-field {
    margin: 10px;
    padding: 10px;
    width: 30%;
    border-radius: 4px;
    border: none;
    background-color: rgb(201, 197, 197);
    outline: none;
}

input[type=text]:focus {
    border: 1px solid green;
}

.login-button {
    background-color: green;
    border: none;
    padding: 10px;
    border-radius: 7px;
    width: 120px;
    margin-top: 15px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    color: white;
}

@media screen and (min-width: 0px) and (max-width :850px) {
    .form-field {
        width: 70%;
    }

}

.signup-link {
    text-decoration: none;
    color: green;
    font-size: 15px;
    font-weight: bold;
}
</style>
