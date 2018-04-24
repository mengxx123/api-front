<template>
    <header class="page-header">
        <ui-appbar :title="title">
            <ui-icon-button icon="menu" slot="left"/>
            <ui-flat-button label="首页" to="/" slot="right"/>
            <!--<ui-flat-button label="市场" to="/market" slot="right"/>-->
            <ui-flat-button label="市场" to="/apis" slot="right"/>
            <ui-flat-button label="价格" to="/price" slot="right"/>
            <ui-flat-button label="工具" to="/tool" slot="right"/>
            <ui-flat-button label="免费接口" to="/apis/1" slot="right"/>
            <ui-flat-button label="帮助" to="/help" slot="right"/>
            <ui-flat-button label="关于" to="/about" slot="right"/>
        </ui-appbar>
    </header>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        props: {
            title: {
                type: String,
                default: '云设 API'
            }
        },
        mounted() {
        },
        methods: {
        }
    }
</script>
