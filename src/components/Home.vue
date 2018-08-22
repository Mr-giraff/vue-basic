<template>
    <div class="row">
        <div id="home" class="col-sm-12 text-center">
            <div class="background">
                <h1>欢迎大家品尝晓道的蛋糕</h1>
                <h2>这里有你喜欢的水果</h2>
                <button @click="gotoMenu" class="btn btn-success">
                    Let,s order!
                </button>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "Home",
    methods: {
        gotoMenu() {
            // 跳转到上次记录
            // this.$router.go(-1);

            // 到指定页面replace:1.url
            // this.$router.replace('/menu');

            // 到指定页面replace:2.传参
            // this.$router.replace({name:'menuLink'})

            // 到指定页面push方式:1.url
            // this.$router.push('/about')

            // 到指定页面push方式:2.传参
            this.$router.push({name: 'aboutLink'})
        }
    }
}
</script>

<style scoped>
    #home {
        background: url("../../src/assets/logo.png");
        height: 85vh;
        padding: 10%;
    }

    h1, h2 {
        margin: 6%;
    }

    .background {
        background: #eee;
        opacity: 0.8;
        max-width: 70vh;
        margin: 0 auto;
        padding: 20px 0;
    }
</style>