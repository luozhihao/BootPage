BootPage
---

## 组件介绍
一款支持静态数据和服务器数据的表格分页组件，支持调整每页显示行数和页码显示个数，样式基于bootstrap
> 注：在使用ES6及vue-loader的vue项目中才能使用本组件，请求本地json文件数据可能会失败，请使用服务器端数据测试

![image](https://github.com/luozhihao/BootPage/blob/master/src/assets/images/demo.gif)

在线演示：https://luozhihao.github.io/BootPage/index.html

## 如何使用

HTML文档:
```html
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
                        <button class="btn btn-default" v-on:click="refresh">刷新</button>
                    </div>
                    <div class="pull-right">
                        <boot-page :async="false" :data="lists" :lens="lenArr" :page-len="pageLen" :param="param"></boot-page>
                    </div>
                </td>
            </tr>
        </tfoot>
    </table>
```

使用静态数据javascript:
```javascript
	<script>
		import bootPage from './components/BootPage.vue'

		export default {
		    data () {
		        return {
		            lenArr: [10, 50, 100], // 每页显示长度设置
		            pageLen: 5, // 可显示的分页数
		            lists: [
		                {num: 1, author: 'luozh', contents: 'BootPage是一款支持静态数据和服务器数据的表格分页组件', remark: 'dsds'},
                        {num: 2, author: 'luozh', contents: '支持调整每页显示行数和页码显示个数，样式基于bootstrap', remark: 'dsds'},
                        {num: 3, author: 'luozh', contents: '<boot-page>标签中async指是否从服务器端获取数据，false为否', remark: 'dsds'},
                        {num: 4, author: 'luozh', contents: 'data为静态的表格数据数组；', remark: 'dsds'},
                        {num: 5, author: 'luozh', contents: 'lens为每页显示行数的数组', remark: 'dsds'},
                        {num: 6, author: 'luozh', contents: 'page-len为可显示的页码数', remark: 'dsds'},
                        {num: 7, author: 'luozh', contents: '服务器回传参数为{data:[], page_num: 6}, 其中data为表格数据，page_num为总页数', remark: 'dsds'},
                        {num: 8, author: 'luozh', contents: '可以调用this.$refs.page.refresh()刷新表格数据', remark: 'dsds'}
		            ], // 表格原始数据，使用服务器数据时无需使用
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
```

使用服务器数据的组件HTML:
```html
	<boot-page v-ref:page :async="true" :lens="lenArr" :url="url" :page-len="pageLen" :param="param"></boot-page>
```

使用服务器数据javascript:
```javascript
	<script>
		import bootPage from './components/BootPage.vue'

		export default {
		    data () {
		        return {
		            lenArr: [10, 50, 100], // 每页显示长度设置
		            pageLen: 5, // 可显示的分页数
		            url: '/bootpage/', // 请求路径
		            param: {}, // 向服务器传递参数
		            tableList: [] // 分页组件传回的分页后数据
		        }
		    },
		    methods: {
		    	refresh () {
		    		this.$refs.page.refresh() // 这里提供了一个表格刷新功能
		    	}
		    },
		    components: {
		        bootPage
		    },
		    events: {

		        // 分页组件传回的表格数据（这里即为服务器传回的数据）
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
```

组件自带向服务器传递的参数为:
```javascript
    {
        active: 1, // 当前页码
        length: 5  // 每页显示个数
    }
```

服务器回传的参数需为:
```javascript
    {
        data: [], // 表格数据
        page_num: 5  // 总页数
    }
```

> 使用时需要引入bootstrap,
> 所有代码及demo都在本项目中，请下载后在BootPage目录运行：
```javascript
    npm install
    npm run dev
```

