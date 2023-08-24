<script>
import axios from 'axios'

  export default{
    name: 'Signup',
    data(){
        return {

            username:'',
            email:'',
            password:'',
        }
    },
    methods:{
       async sendData()
        {
            
            console.log(this.username , this.email , this.password)
            let result = await axios.post("http://localhost:3000/users",{
                username:this.username,
                email:this.email,
                password:this.password,
            });
            console.log(result);
            if(result.status == 201){
               
               localStorage.setItem('user-Info',JSON.stringify(result.data));
               this.$router.push({name : 'HomePage'})

            }else{

            }
            

        }
    },
    mounted()
    {
        const  user = localStorage.getItem('user-Info');
        if(user)
        {
            this.$router.push({
                name: 'HomePage'
            })
        }
    }
  }

</script>


<template>

    <div class="container">
        <h1>SignUp</h1>
        <input type="text" placeholder="UserName" class="form-field" v-model="username">
        <input type="email" placeholder="Email" class="form-field"   v-model="email">
        <input type="password" placeholder="Password" class="form-field"  v-model="password">
        <button class="signup-button" v-on:click="sendData()">SignUp</button>

    </div>
  

</template>


<style scoped>
h1{
    color: green;
}

.container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form-field{
    margin: 10px;
    padding: 10px;
    width: 30%;
    border-radius: 4px;
    border: none;
    background-color: rgb(201, 197, 197);
    outline: none;
}

input[type = text]:focus{
    border: 1px solid green;
}

.signup-button{
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


@media screen and (min-width: 0px ) and ( max-width :850px){
    .form-field{
        width: 70%;
    }
    
}




</style>