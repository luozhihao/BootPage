<template>
<div class="box">
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th width="10%">id</th>
                <th width="30%">name</th>
                <th width="40%">content</th>
                <th width="20%">remark</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="data in tableList">
                <td v-text="data.num"></td>
                <td v-text="data.author"></td>
                <td v-text="data.contents"></td>
                <td v-text="data.remark"></td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="4">
                    <div class="pull-left">
                        <button class="btn btn-default" @click="refresh">刷新</button>
                    </div>
                    <div class="pull-right">
                        <boot-page v-ref:page :async="false" :data="lists" :lens="lenArr" :page-len="pageLen" :param="param"></boot-page>
                    </div>
                </td>
            </tr>
        </tfoot>
    </table>
</div>
</template>

<script>
import bootPage from './components/BootPage.vue'

export default {
    data () {
        return {
            lenArr: [5, 50, 100], // 每页显示长度设置
            pageLen: 5, // 可显示的分页数
            // url: '/bootpage/', // 请求路径
            param: {}, // 传递参数
            lists: [
                {num: 1, author: 'luozh', contents: 'BootPage是一款支持静态数据和服务器数据的表格分页组件', remark: 'dsds'},
                {num: 2, author: 'luozh', contents: '支持调整每页显示行数和页码显示个数，样式基于bootstrap', remark: 'dsds'},
                {num: 3, author: 'luozh', contents: '<boot-page>标签中async指是否从服务器端获取数据，false为否', remark: 'dsds'},
                {num: 4, author: 'luozh', contents: 'data为静态的表格数据数组；', remark: 'dsds'},
                {num: 5, author: 'luozh', contents: 'lens为每页显示行数的数组', remark: 'dsds'},
                {num: 6, author: 'luozh', contents: 'page-len为可显示的页码数', remark: 'dsds'},
                {num: 7, author: 'luozh', contents: '服务器回传参数为{data:[], page_num: 6}, 其中data为表格数据，page_num为总页数', remark: 'dsds'},
                {num: 8, author: 'luozh', contents: '可以调用this.$refs.page.refresh()刷新表格数据', remark: 'dsds'}
            ], // 表格原始数据
            tableList: [] // 分页组件传回的分页后数据
        }
    },
    components: {
        bootPage
    },
    methods: {
        refresh () {
            this.$refs.page.refresh()
        }
    },
    events: {

        // 分页组件传回的表格数据
        'data' (data) {
            this.tableList = data
        },

        // 刷新数据
        'refresh' () {
            this.refresh()
        }
    }
}
</script>

<style>
@import url('./assets/css/bootstrap.min.css');

.box {
    padding: 100px;
}
</style>