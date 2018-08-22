<template>
    <div>
        <div class="card text-dark bg-light mb-3">
            <div class="card-header">关于我们</div>
            <div class="card-body">
                <h4 class="card-title">联系我们</h4>
                <p class="card-text">11111111@qq.com</p>
            </div>
        </div>
        <div class="list-group mb-5">
            <router-link class="nav-link list-group-item list-group-item-action" :to="{name:'phoneLink'}">电话
            </router-link>
            <router-link class="nav-link list-group-item list-group-item-action" :to="{name:'personLink'}">姓名
            </router-link>
            <router-view></router-view>
        </div>
    </div>

</template>

<script>
export default {
    name: "Contact"
}
</script>

<style scoped>

</style>