<template>
    <div class="page-about">
        <ui-header></ui-header>
        <main class="page-body">
            <div class="container container-main">
                <article class="article">
                    <div class="api-item" v-for="api in apis">
                        <div class="api-info"><span class="key">接口地址：</span>{{ api.requestURL }}</div>
                        <div class="api-info"><span class="key">返回格式：</span>{{ api.contentType }}</div>
                        <div class="api-info">
                            <span class="key">请求方式：</span>
                            <span class="badge" v-for="method in api.requestMethod">{{ method }}</span>
                        </div>
                        <!--<div class="api-info">-->
                            <!--<span class="key">请求示例：</span>-->
                            <!--{{ getExample(api) }}-->
                        <!--</div>-->
                        <div class="api-info">
                            <span class="key">接口描述：</span>
                            {{ api.desc }}
                        </div>
                        <!--<div class="api-info">-->
                            <!--<span class="key">调用样例及调试工具：</span>-->
                            <!--API测试工具-->
                        <!--</div>-->
                        <div class="api-info">请求参数说明：</div>
                        <table class="table table-bordered">
                            <tr>
                                <th>名称</th>
                                <th>类型</th>
                                <th>必填</th>
                                <th>说明</th>
                            </tr>
                            <tr v-for="param in api.params">
                                <td>{{ param.name }}</td>
                                <td>{{ param.type }}</td>
                                <td>{{ param.required ? '是' : `否，默认${param.default}` }}</td>
                                <td>{{ param.desc }}</td>
                            </tr>
                        </table>
                        <div class="api-info">返回参数说明：</div>
                        <!--<table class="table table-bordered">-->
                            <!--<tr>-->
                                <!--<th>名称</th>-->
                                <!--<th>类型</th>-->
                                <!--<th>说明</th>-->
                            <!--</tr>-->
                            <!--<tr v-for="param in api.params">-->
                                <!--<td>{{ param.name }}</td>-->
                                <!--<td>{{ param.type }}</td>-->
                                <!--<td>{{ param.desc }}</td>-->
                            <!--</tr>-->
                        <!--</table>-->
                        <div class="api-info">JSON返回示例：</div>
                        <code><pre>{{ api.successReturn }}</pre></code>
                    </div>
                </article>

                $.ajax({url:"/jquery/test1.txt",async:false});
            </div>
        </main>
        <ui-footer></ui-footer>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                apis: [
                    {
                        desc: '获取支持的字体列表。',
                        requestURL: 'http://api.font.yunser.com/fonts',
                        requestMethod: ['GET'],
//                    contentType: 'application/json',
                        contentType: 'JSON',
                        params: [
                            {
                                name: 'key',
                                type: 'String',
                                required: true,
                                desc: '这是描述'
                            },
                            {
                                name: 'key2',
                                type: 'String',
                                required: true,
                                desc: '这是描述'
                            }
                        ],
                        successReturn: `{
    "code": 0,
    "data": [
        {
            "id": "1",
            "name": "华康娃娃",
            "image": "/img/1.png",
            "font": "华康娃娃体W5(P).ttf",
            "tags": [
                "艺术字"
            ]
        },
        {
            "id": "2",
            "name": "方正剪纸",
            "image": "/img/2.png",
            "font": "方正剪纸简体.ttf",
            "tags": [
                "艺术字"
            ]
        }
    ]
}`
                    },
                    {
                        desc: '文字转图片。',
                        requestURL: 'http://api.font.yunser.com/font',
                        requestMethod: ['GET'],
//                    contentType: 'application/json',
                        contentType: 'JSON',
                        params: [
                            {
                                name: 'text',
                                type: 'String',
                                required: true,
                                desc: '文字'
                            },
                            {
                                name: 'color',
                                type: 'String',
                                required: false,
                                desc: '颜色',
                                default: '#000000'
                            },
                            {
                                name: 'font',
                                type: 'String',
                                required: true,
                                desc: '字体名称'
                            },
                            {
                                name: 'type',
                                type: 'String',
                                required: false,
                                desc: '图片格式，取值 png 或 svg',
                                default: 'png'
                            },
                            {
                                name: 'size',
                                type: 'Integer',
                                required: false,
                                desc: '文字大小（px），不超过 1024',
                                default: '36'
                            }
                        ],
                        successReturn: `{
    "code": 0,
    "data": "/tmp/94b74be0-e077-11e7-a6ce-ef845c1f823b.svg"
}`
                    },
                    {
                        desc: '重新生成预览图片。',
                        requestURL: 'http://api.font.yunser.com/font/init',
                        requestMethod: ['GET'],
                        contentType: 'JSON',
                        successReturn: `{
    "code": 0,
    "data": ""
}`
                    },
                    {
                        desc: '获取 API 版本号。',
                        requestURL: 'http://api.font.yunser.com/version',
                        requestMethod: ['GET'],
                        contentType: 'JSON',
                        successReturn: `{
    "code": 0,
    "data": "1.0.0"
}`
                    },
                    // TODO
                    {
                        desc: '调试接口，获取缺失的字体列表',
                        requestURL: 'http://api.font.yunser.com/font/debug',
                        requestMethod: ['GET'],
                        contentType: 'JSON',
                        successReturn: `{
    code: 0,
    data: []
}`
                    }
                ]
            }
        },
        mounted() {
        },
        methods: {
            getExample(api) {
                return 'http://v.juhe.cn/calendar/day?date=2015-1-1&key=您申请的appKey'
            }
        }
    }
</script>

<style scoped>
</style>
