<template>
    <div class="col-sm-12">
        <table class="table">
            <thead class="thead-default">
            <tr>
                <th>尺寸</th>
                <th>价格</th>
                <th>加入</th>
            </tr>
            </thead>
            <tbody v-for="item in menuItems" :key="item.name">
            <tr>
                <td><strong>{{item.name}}</strong></td>
            </tr>
            <tr v-for="option in item.options" :key="option.size">
                <td>{{option.size}}</td>
                <td>{{option.price}}</td>
                <td><button class="btn btn-sm btn-outline-success">+</button></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "Memu",
    data() {
        return {
            menuItems: [
                {
                    name: '榴莲pizza',
                    description: '',
                    options: [
                        {
                            size: '9',
                            price: 38,
                        },
                        {
                            size: '11',
                            price: 58,
                        },
                    ]
                },
                {
                    name: '火龙果pizza',
                    description: '',
                    options: [
                        {
                            size: '9',
                            price: 38,
                        },
                        {
                            size: '11',
                            price: 58,
                        },
                    ]
                },
                {
                    name: '抹茶pizza',
                    description: '',
                    options: [
                        {
                            size: '9',
                            price: 38,
                        },
                        {
                            size: '11',
                            price: 58,
                        },
                    ]
                },
            ]
        }
    }
}
</script>

<style scoped>

</style>
