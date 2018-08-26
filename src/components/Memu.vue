<template>
    <div class="row">
        <!--菜单-->
        <div class="col-sm-12 col-md-8">
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
                    <td>
                        <button
                                @click="addToBasket(item,option)"
                                class="btn btn-sm btn-outline-success">+
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <!--购物车-->
        <div class="col-sm-12 col-md-4">
            <div v-if="baskets.length>0">
                <table class="table">
                    <thead class="thead-default">
                    <tr>
                        <th>数量</th>
                        <th>品种</th>
                        <th>价格</th>
                    </tr>
                    </thead>
                    <tbody v-for="item in baskets" :key="item.size">
                    <tr>
                        <td>
                            <button @click="decreaseQuantity(item)" class="btn btn-sm">-</button>
                            <span>{{item.quantity}}</span>
                            <button @click="increaseQuantity(item)" class="btn btn-sm">+</button>
                        </td>
                        <td>{{item.name}}/{{item.size}}</td>
                        <td>{{item.price}}</td>
                    </tr>
                    </tbody>
                </table>
                <p>总价：{{total + 'RMB'}}</p>
                <button class="btn btn-success btn-block">提交</button>
            </div>
            <div v-else>
                {{basketText}}
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "Memu",
    data() {
        return {
            baskets: [],
            basketText: '购物车缺货',
            menuItems: [],
        }
    },
    computed: {
        total() {
            let total = 0
            this.baskets.forEach(item => {
                total += item.price
            })
            return total
        }
    },
    methods: {
        addToBasket(item, option) {
            let basket = {
                name: item.name,
                size: option.size,
                price: option.price,
                quantity: 1,
            }

            if (this.baskets.length > 0) {
                const result = this.baskets.find(basket => basket.name === item.name && basket.size === option.size)
                if (result) {
                    result.quantity++
                    result.price += option.price
                } else {
                    this.baskets.push(basket)
                }
            } else {
                this.baskets.push(basket)
            }
        },
        decreaseQuantity(item) {
            item.price -= item.price / item.quantity
            item.quantity--
            if (item.quantity === 0) {
                this.removeFormBaskets(item)
            }
        },
        increaseQuantity(item) {
            item.price += item.price / item.quantity
            item.quantity++
        },
        removeFormBaskets(item) {
            this.baskets.splice(this.baskets.indexOf(item), 1)
        }
    },
    created() {
        axios.get('/menu.json')
            .then(res => {
                Object.keys(res.data).forEach(item => {
                    const data = res.data[item]
                    data.id = item
                    data.options && data.options.forEach(option => {
                        option.price = option.price ? option.price * 1 : 0
                    })
                })
                this.menuItems = res.data
            })
    }
}
</script>

<style scoped>

</style>
