<template>
    <div class="row">
        <!-- new pizza -->
        <div class="col-sm-12 col-md-8">
            <new-pizza/>
        </div>
        <!-- Menu -->
        <div class="col-sm-12 col-md-4">
            <h3 class="text-muted my-5">菜单</h3>
            <table class="table">
                <thead class="thead-default">
                <tr>
                    <th>品种</th>
                    <th>删除</th>
                </tr>
                </thead>
                <tbody v-for="item in menuItems" :key="item.name">
                <tr>
                    <td>{{item.name}}</td>
                    <td>
                        <button @click="deleteData(item)" class="btn btn-sm btn-outline-danger">&times;</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import newPizza from './newPizza'
export default {
    name: "Admin",
    data() {
        return {
            name: 'tzj',
            menuItems: [],
        }
    },
    methods: {
        deleteData(item) {
            this.menuItems.splice(this.menuItems.indexOf(item),1)
            axios.delete(`/menu/${item.id}.json`)
                .then(res => console.log(res))
                .catch(error => console.log(error))
        }
    },
    components: {
        newPizza,
    },
    created() {
        axios.get('/menu.json')
            .then(res => {
                Object.keys(res.data).forEach(item => res.data[item].id = item)
                this.menuItems = Object.values(res.data)
                console.log(this.menuItems)
            })
    }
}
</script>

<style scoped>

</style>
