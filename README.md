BootPage
---

## 组件介绍
一款支持静态数据和服务器数据的表格分页组件，支持调整每页显示行数和页码显示个数，样式基于bootstrap

![image](https://i.imgsafe.org/d46e5e1.gif)

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
                    <div class="col-sm-12 pull-right">
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
		                {num: 1, author: 'luozh', contents: '123', remark: 'bootPage'},
		                {num: 1, author: 'luozh', contents: '123', remark: 'bootPage'},
		                {num: 1, author: 'luozh', contents: '123', remark: 'bootPage'},
		                {num: 1, author: 'luozh', contents: '123', remark: 'bootPage'},
		                {num: 1, author: 'luozh', contents: '123', remark: 'bootPage'},
		                {num: 1, author: 'luozh', contents: '123', remark: 'bootPage'}
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
	<boot-page :async="true" :lens="lenArr" :url="url" :page-len="pageLen" :param="param"></boot-page>
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
		    		this.$broadcast('refresh') // 这里提供了一个表格刷新功能
		    	}
		    },
		    components: {
		        bootPage
		    },
		    events: {

		        // 分页组件传回的表格数据（这里即为服务器传回的数据）
		        'data' (data) {
		            this.tableList = data
		        }
		    }
		}
		</script>
```

> 使用时需要引入bootstrap,
> 所有代码及demo都在本项目中，请下载后运行
