<template>
<div>
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
                    <div class="col-sm-12 pull-right">
                        <boot-page :async="false" :data="lists" :lens="lenArr" :page-len="pageLen" :param="param"></boot-page>
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
            lenArr: [3, 50, 100], // 每页显示长度设置
            pageLen: 5, // 可显示的分页数
            // url: '/bootpage/', // 请求路径
            param: {}, // 传递参数
            lists: [
                {num: 1, author: 'luozh', contents: '123', remark: 'dsds'},
                {num: 1, author: 'luozh', contents: '123', remark: 'dsds'},
                {num: 1, author: 'luozh', contents: '123', remark: 'dsds'},
                {num: 1, author: 'luozh', contents: '123', remark: 'dsds'},
                {num: 1, author: 'luozh', contents: '123', remark: 'dsds'},
                {num: 1, author: 'luozh', contents: '123', remark: 'dsds'}
            ], // 表格原始数据
            tableList: [] // 分页组件传回的分页后数据
        }
    },
    components: {
        bootPage
    },
    events: {

        // 分页组件传回的表格数据
        'data' (data) {
            this.tableList = data
        }
    }
}
</script>

<style>
@import url('./assets/css/bootstrap.min.css');
</style>