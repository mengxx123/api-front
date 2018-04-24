<template>
    <div class="container">
        <ul class="recommend-list">
            <li class="item">
                <router-link class="link" to="/">
                    <img class="ic" src="/static/img/api_qrcode.png">
                    <div class="main">
                        <div class="name">二维码生成</div>
                        <div class="type">开发服务</div>
                        <div class="info">32 应用接入</div>
                    </div>
                </router-link>
            </li>
            <li class="item">
                <router-link class="link" to="/">
                    <img class="ic" src="/static/img/api_sms.png">
                    <div class="main">
                        <div class="name">短信服务</div>
                        <div class="type">开发服务</div>
                        <div class="info">80 应用接入</div>
                    </div>
                </router-link>
            </li>
            <li class="item">
                <router-link class="link" to="/">
                    <img class="ic" src="/static/img/api_feedback.png">
                    <div class="main">
                        <div class="name">意见反馈</div>
                        <div class="type">开发服务</div>
                        <div class="info">2 应用接入</div>
                    </div>
                </router-link>
            </li>
            <li class="item">
                <router-link class="link" to="/">
                    <img class="ic" src="/static/img/api_qrcode.png">
                    <div class="main">
                        <div class="name">二维码生成</div>
                        <div class="type">开发服务</div>
                        <div class="info">32 应用接入</div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                version: ''
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
</style>
