<template>
    <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <img src="../assets/cake.png" alt="" class="mx-auto d-block">
                    <form @submit.prevent="onSubmit" action="" class="">
                        <div class="form-group">
                            <label for="email">邮箱</label>
                            <input type="email" class="form-control" v-model="email" id="email">
                        </div>
                        <div class="form-group">
                            <label for="password">密码</label>
                            <input type="password" class="form-control" v-model="password" id="password">
                        </div>
                        <button type="submit" class="btn btn-block btn-success">登录</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "Login",
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        onSubmit() {
            axios.get('/users.json')
                .then(res => {
                    console.log(res)
                    const data = Object.values(res.data).find(item => item.email === this.email);
                    if (data) {
                        data.password === this.password ? this.$router.push({name: 'homeLink'}) : console.log('密码不正确')
                    } else {
                        console.log('账号不存在')
                    }
                })
        }
    }
}
</script>

<style scoped>

</style>