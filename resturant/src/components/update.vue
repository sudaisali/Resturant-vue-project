<script>

import Header from './Header.vue';
import axios from 'axios'

export default{
    name:'Update',
    data()
    {
        return{
            updateName:'',
            updateAddress:'',
            updateNumber:''
        }
    },
    methods:{

        async updateRes(){

            const result = await axios.put("http://localhost:3000/resturants/"+this.$route.params.id,{
                resname:this.updateName,
                resadd:this.updateAddress,
                phnnumber:this.updateNumber,
            })
            if(result.status == 200){
                this.$router.push({
                    name:'HomePage'
                })
            }

        }

    },
    components:
    {
        Header

    },

    async mounted()
    {
        let user = localStorage.getItem('user-Info');
        if(!user){
            this.$router.push({
                name: 'Login'
            })
        }

        const result = await axios.get("http://localhost:3000/resturants/"+this.$route.params.id);
        const val = result.data;
        console.log(val)
        this.updateName = val.resname
        this.updateAddress = val.resadd
        this.updateNumber = val.phnnumber
       

    }
}

</script>


<template>
    <Header></Header>


    <div class="form-container">
    
    <div class="my-form">
        <h1 class="form-text">Update Resturants</h1>
        <input type="text" placeholder="Resturant Name" class="my-form-field" v-model="updateName">
        <input type="text" placeholder="Resturant Address" class="my-form-field" v-model="updateAddress">
        <input type="number" placeholder="Contact No" class="my-form-field" v-model="updateNumber">
        <button class="my-form-button" v-on:click="updateRes()">Update</button>
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