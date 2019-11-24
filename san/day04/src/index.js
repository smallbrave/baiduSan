var MyApp = san.defineComponent({
    template:
    `<div>
    <button on-click='add()'>添加</button>
    <table>
        <thead>
            <tr>
            <td>姓名</td>
            <td>审核状态</td>
            <td>操作</td>
            </tr> 
        </thead>
        <tbody>
            <tr s-for='item,index in list'>
            <td>{{item.name}}</td>
            <td>{{item.status}}</td>
            <td><button on-click='doing(index,item.do)'>{{item.do}}</button></td>
            </tr>
        </tbody> 
    </table>
    </div>`,
    initData: function(){
        return {
            list:[
                {
                    name: '张三',
                    status: '合格',
                    do: '删除'
                },            {
                    name: '李四',
                    status: '不合格',
                    do: '删除'
                },            {
                    name: '王五',
                    status: '待审核',
                    do: '审核'
                },            {
                    name: '赵六',
                    status: '待审核',
                    do: '审核'
                },            {
                    name: '孙七',
                    status: '待审核',
                    do: '审核'
                }
            ]
        }
    },
    doing: function(index,value){
        if(value == "删除"){
            this.data.splice('list',[index,1]);
        }
        if(value == "审核"){
            console.log("1");
            this.data.set('list['+index+'].status',"合格");
            this.data.set('list['+index+'].do',"删除");
        }
    },
    add: function(){
        this.data.push('list',{name: "四环",status: '未审核',do: '审核'});
    }
})

var myApp = new MyApp();
myApp.attach(document.body);