<template>
    <h1>
        Admin
    </h1>
</template>

<script>
export default {
    name: "Admin",
    data() {
        return {
            name: 'tzj'
        }
    },
    // 组件内守卫
    beforeRouteEnter(to, from, next) {
        next(vm => {
            alert(`Hello:${vm.name}`)
        })
    },
    // 组件内守卫
    beforeRouteLeave(to, from, next) {
        if (confirm('确定离开吗？') === true) {
            next()
        } else {
            next(false)
        }
    }
}
</script>

<style scoped>

</style>