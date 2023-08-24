<script>
import Header from './Header.vue';
import axios from 'axios'
export default{
    name:'Add',
    data(){
        return{
            resName:'',
            resAddress:'',
            phnNumber:'',
        }
    },
    methods:{

        async addRes()
        {
            let resturant = await axios.post('http://localhost:3000/resturants',{
                resname : this.resName,
                resadd : this.resAddress,
                phnnumber : this.phnNumber,
            })
            if(resturant.status == 201){
                
                this.$router.push({
                    name:'HomePage'
                })
            
            }
            
        }

    }
    ,
    components:{
        Header
    },
    mounted()
    {
        let user = localStorage.getItem('user-Info');
        if(!user){
            this.$router.push({
                name: 'Login'
            })
        }
    }
   

}


</script>


<template>
<Header></Header>
   <div class="form-container">
    
    <div class="my-form">
        <h1 class="form-text">Add Resturants</h1>
        <input type="text" placeholder="Resturant Name" class="my-form-field" v-model="resName">
        <input type="text" placeholder="Resturant Address" class="my-form-field" v-model="resAddress">
        <input type="number" placeholder="Contact No" class="my-form-field" v-model="phnNumber">
        <button class="my-form-button" v-on:click="addRes()">Add</button>
    </div>
   </div>


</template>

<style scoped>
.form-text{
    text-align: center;
    color: green;
}
.form-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75vh;
   
   
}
.my-form{
    display: flex;
    flex-direction: column;
    width: 50%;
    

    
}
.my-form-field{
    border: 1px solid green;
    outline: none;
    padding: 10px;
    margin: 10px;
    background-color: rgb(201, 197, 197);
    color: black;
    border-radius: 5px;
}

.my-form-button{
    background-color: green;
    border: none;
   padding: 10px;
    color: white;
    font-weight: bold;
    margin: 10px;
    border-radius: 5px;
    font-size: 18px;

}
.my-form-button:hover{
    background-color: rgb(201, 197, 197);
    color: black;
    cursor: padding;
}

</style>