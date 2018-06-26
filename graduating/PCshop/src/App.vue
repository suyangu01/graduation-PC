<template>
    <div id="app">
        <transition name="fade"
                    mode="out-in">
                <router-view></router-view>
        </transition>
    </div>
</template>
<script>
    export default {
        name: 'app',
        components: {}
    }
</script>

<style>
    body {
        margin: 0;
        padding: 0;
        font-family: inherit;
        font-size: 14px;
    }

    #app {
        margin: 0;
        padding: 0;
        top: 0;
        bottom: 0;
        width: 100%;
    }

</style>
