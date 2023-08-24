<script>
import {
    RouterLink
} from 'vue-router';
import HeaderComp from '../components/Header.vue'
import axios from 'axios'

export default {

    name: 'HomePage',
    data() {
        return {
            username: '',
            resturants: []
        }

    },
    components: {
        HeaderComp,
        RouterLink
    },

    methods: {
        async deleteData(id) {
            const result = await axios.delete("http://localhost:3000/resturants/"+id);
            if (result.status == 200) {
                   this.loadData();
            }

        },

        async loadData() {
            const user = localStorage.getItem('user-Info');
            this.username = JSON.parse(user).username
            if (!user) {
                this.$router.push({
                    name: 'Signup'
                })
            }

            let resData = await axios.get('http://localhost:3000/resturants');
            this.resturants = resData.data;
        }

    },
    mounted() {
        this.loadData()

    }
}
</script>

<template>
<HeaderComp />
<h1>Welcome {{ username }}</h1>
<div class="table-container">
    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Actions</th>
        </tr>
        <tr v-for="items in resturants" key="items.id">
            <td>{{items.id}}</td>
            <td>{{items.resname}}</td>
            <td>{{items.resadd}}</td>
            <td>{{items.phnnumber}}</td>
            <td>
                <RouterLink class="updbtn" :to="'/update/'+items.id">Update</RouterLink>
                <button  class="delbtn" v-on:click="deleteData(items.id)">Delete</button>

            </td>

        </tr>
    </table>

</div>
</template>

<style>
.table-container {
    display: flex;
    justify-content: center;
}

table {
    border-collapse: collapse;
    background-color: rgb(201, 197, 197);
    width: 70%;

}

td,
th {
    border: 1px solid white;
    padding: 10px;
    text-align: start;
}

th {
    background-color: green;
    color: aliceblue;
}

tr:hover {

    background-color: black;
    color: white;
}

td>.updbtn{
    text-decoration: none;
    margin-right: 10px;
    background-color: rgb(14, 65, 1);
    padding: 5px;
    color: white;
    border-radius: 10px;
    font-size: 16px;
}

td>.delbtn{
    background-color: rgb(209, 0, 0);
    margin-left: 10px;
    color: white;
    outline: none;
    border: none;
    padding: 5px;
    border-radius: 10px;
    font-size: 16px;
    
}

</style>
