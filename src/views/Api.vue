<template>
    <div class="page-about">
        <ui-header></ui-header>
        <main class="page-body">
            <div class="side-menu">
                <ui-list>
                    <ui-list-item title="市场首页" to="/apis">
                        <ui-icon slot="left" value="home"/>
                    </ui-list-item>
                    <ui-list-item title="最新发布" to="/apis">
                        <ui-icon slot="left" value="star"/>
                    </ui-list-item>
                    <ui-list-item title="最受欢迎" to="/apis">
                        <ui-icon slot="left" value="star"/>
                    </ui-list-item>
                </ui-list>
                <ui-divider></ui-divider>
                <ui-list>
                    <ui-sub-header>分类</ui-sub-header>
                    <ui-list-item title="生活常用" to="/types/1">
                        <ui-icon slot="left" value="inbox"/>
                    </ui-list-item>
                    <ui-list-item title="即使通讯" to="/types/2">
                        <ui-icon slot="left" value="inbox"/>
                    </ui-list-item>
                    <ui-list-item title="其他服务" to="/types/3">
                        <ui-icon slot="left" value="inbox"/>
                    </ui-list-item>
                </ui-list>
            </div>
            <div class="main-content">
                <router-view/>
            </div>
        </main>
        <ui-footer></ui-footer>
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

    .page-body {
        overflow: hidden;
        @inlcude clearfix;
    }
    .side-menu {
        float: left;
        width: 256px;
        border-right: 1px solid rgba(0,0,0,.12);
    }
    .main-content {
        float: left;
        width: 900px;
        padding: 16px;
    }


</style>
