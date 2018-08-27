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
        }
    },
    computed: {
        menuItems() {
            return this.$store.state.menuItems
        }
    },
    methods: {
        deleteData(item) {
            // this.menuItems.splice(this.menuItems.indexOf(item), 1)
            axios.delete(`/menu/${item.id}.json`)
                .then(res => console.log(res))
                .then(res => this.$store.commit('removeMenuItem', item))
                .catch(error => console.log(error))
        }
    },
    components: {
        newPizza,
    },
    created() {
        this.http.get('/menu.json')
            .then(res => {
                this.$store.commit('setMenuItems', res.data)
            })
    }
}
</script>

<style scoped>

</style>
