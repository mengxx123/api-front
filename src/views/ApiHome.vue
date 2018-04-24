<template>
    <div class="container">
        <div>
            <a href="">
                <img src="/static/img/market-banner.png">
            </a>
        </div>
        <h2 class="section-title">推荐服务</h2>
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
        <h2 class="section-title">加入市场</h2>
        <ul class="reason-list">
            <li class="item">
                <router-link class="link" to="/">
                    <img class="ic" src="/static/img/advance_1.png">
                    <div class="main">
                        <div class="name">提升开发效率</div>
                        <div class="type">提供丰富的接口服务</div>
                    </div>
                </router-link>
            </li>
            <li class="item">
                <router-link class="link" to="/">
                    <img class="ic" src="/static/img/advance_2.png">
                    <div class="main">
                        <div class="name">服务转化为收益</div>
                        <div class="type">把您的服务共享出来</div>
                    </div>
                </router-link>
            </li>
            <li class="item">
                <router-link class="link" to="/">
                    <img class="ic" src="/static/img/advance_3.png">
                    <div class="main">
                        <div class="name">意见反馈</div>
                        <div class="type">找不到服务,接口有错误</div>
                    </div>
                </router-link>
            </li>
        </ul>
        <!--<h2>生活/天气/健康</h2>-->
        <!--<h2>开发工具</h2>-->
        <!--<di>字体</di>-->
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
            this.$http.get('/version').then(
                response => {
                    let data = response.data
                    if (data.code === 200) {
                        console.log(data)
                        this.version = data.data
                    }
                },
                response => {
                    console.log(response)
                })
//            this.$http.post('/example', this.$qs.stringify({
//                param1: 'value1',
//                param2: 'value2'
//            })).then(
//                response => {
//                    let data = response.data
//                    if (data.code === 200) {
//                        console.log(data.data)
//                    }
//                },
//                response => {
//                    console.log(response)
//                })
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/var.scss";

    .reason-list {
        @include clearfix;
        .item {
            float: left;
            width: 33.33%;
            margin-bottom: 16px;
            @include clearfix;
        }
        .link {
            display: block;
            width: 100%;
            height: 100%;
            color: inherit;
        }
        .ic {
            float: left;
            width: 80px;
            height: 80px;
            margin-right: 8px;
        }
        .main {
            float: left;
        }
        .name {
            margin-top: 16px;
            font-size: 16px;
        }
        .type {

        }
    }
</style>
