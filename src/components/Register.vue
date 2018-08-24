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
                        <div class="form-group">
                            <label for="confirmPassword">确认密码</label>
                            <input type="password" class="form-control" v-model="confirmPassword" id="confirmPassword">
                        </div>
                        <button type="submit" class="btn btn-block btn-success">注册</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "Register",
    data() {
        return {
            email: '',
            password: '',
            confirmPassword: '',
        }
    },
    methods: {
        onSubmit() {
            const formData = {
                email: this.email,
                password: this.password,
                confirmPassword: this.confirmPassword,
            }
            if (this.password === this.confirmPassword) {
                axios.post('/users.json', formData)
                    .then(res => {
                        console.log(res)
                        this.$router.push({name: 'loginLink'})
                    })
                    .catch(error => {
                        console.log(error)
                    })
            } else {
                alert('密码不一致')
            }
        },
    },

}
</script>

<style scoped>

</style>
