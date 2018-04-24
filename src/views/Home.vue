<template>
    <div class="page-home">
        <ui-header></ui-header>
        <main class="page-body">
            <div class="banner">
                <div class="container">
                    <h2 class="title">简单，好用的API服务平台</h2>
                    <div class="content">移动互联网时代，云设 API 是一个为您提供 API 管理、API 测试、API 监控、API 文档的综合性 API 服务平台。</div>
                    <div class="content">你还在用 Word 管理接口文档吗？你还在使用拼接 URL 测试吗？你 OUT 了！</div>
                    <a class="btn">开始使用</a>
                </div>
            </div>
            <div class="container">
                <ul class="function-list">
                    <li class="item">
                        <router-link to="/a">
                            <img class="ic" src="/static/img/function-1.png">
                            <h3 class="title">API文档</h3>
                            <div class="content">结构化文档操作，自动化测试</div>
                        </router-link>
                    </li>
                    <li class="item">
                        <router-link to="/a">
                            <img class="ic" src="/static/img/function-2.png">
                            <h3 class="title">API监控</h3>
                            <div class="content">提升接口运维响应效率</div>
                        </router-link>
                    </li>
                    <li class="item">
                        <router-link to="/a">
                            <img class="ic" src="/static/img/function-3.png">
                            <h3 class="title">API网关</h3>
                            <div class="content">高性能、高可用的API网关服务</div>
                        </router-link>
                    </li>
                    <li class="item">
                        <router-link to="/a">
                            <img class="ic" src="/static/img/function-4.png">
                            <h3 class="title">API服务</h3>
                            <div class="content">API接口服务领域的专业服务商</div>
                        </router-link>
                    </li>
                </ul>
            </div>
            <section class="index-section">
                <h2 class="title">API接口服务，选择优质的接口</h2>
                <div class="content">致力于成为最专业稳定的接口服务商</div>
                <img class="img" src="/static/img/index-1.png">
            </section>
        </main>
        <ui-footer></ui-footer>
    </div>
</template>

<script>
    export default {
        data () {
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/var";

    .banner {
        height: 400px;
        padding-top: 100px;
        background-image: url("/static/img/bg_0.jpg");
        color: #fff;
        .title {
            margin-bottom: 48px;
            font-size: 48px;
            font-weight: 100;
            text-align: center;
        }
        .content {
            font-size: 18px;
            text-align: center;
        }
        .btn {
            display: none;
        }
    }
    .container {
        width: 1000px;
        margin: 0 auto;
    }
    .function-list {
        padding: 80px 0;
        @include clearfix;
        .item {
            float: left;
            width: 25%;
            text-align: center;
        }
        .ic {
            width: 120px;
        }
        .title {
            color: #333;
        }
        .content {
            color: #999;
        }
    }
    .index-section {
        padding: 56px;
        /*background-color: #fafafa;*/
        background-color: #fff;
        .title {
            text-align: center;
            font-size: 48px;
            padding-bottom: 40px;
            font-weight: 100;
        }
        .content {
            font-size: 18px;
            line-height: 34px;
            padding-bottom: 80px;
            text-align: center;
            color: #666;
        }
        .img {
            display: block;
            width: 700px;
            margin: 0 auto;
        }
    }
</style>
