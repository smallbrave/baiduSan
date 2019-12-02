var task = san.defineComponent({
    template:
    `<div class="container">
       <div class="detail">
           <h3>{{title}}</h3>
           <div class="content">
               <p>标题：<slot name="title"/></p>
               <p>内容：<slot name="content"/></p>
               <p>时间：<slot name="time"/></p>
           </div> 
       </div>
    </div>`,
    initData: function(){
        return {
            title: "",
        }
    }
})

var Menu = san.defineComponent({
    template:
    `<div class='box'>
        <h1>任务栏</h1>
        <div class='box-content'>     
        <task-menu s-for="item in items" title="{{item.h1}}">
              <span slot='title'>{{item.title}}</span>
              <span slot='content'>{{item.content}}</span>
              <span slot='time'>{{item.time}}</span>
        </task-menu>
        </div>
    </div>`,
    components:{
        'task-menu': task
    },
    initData: function(){
        return {
            items:[],
        }
    }
})
var App = new Menu({
    data:{
        items:[
            {
                h1:"任务一",
                title:"你不知道的事儿",
                content:"多的是，你不知道的是",
                time:"2019-12-01 12:00:00"
            },
            {
                h1:"任务二",
                title:"在一起",
                content:"就在一起，希望与你相遇",
                time:"2019-12-01 12:00:02"
            },
            {
                h1:"任务三",
                title:"星月神话",
                content:"等待你，不朽的神话，不知道",
                time:"2019-12-02 13:00:00"
            },
            {
                h1:"任务四",
                title:"go back",
                content:"i will catch you ,please stop",
                time:"2019-12-02 14:00:00"
            }, 
            {
                h1:"任务五",
                title:"一点一点",
                content:"爱你又像魔力，一点一点不记得",
                time:"2019-12-10 09:00:00"
            },            
            {
                h1:"任务六",
                title:"天天",
                content:"天天想你，天天问自己，我爱你",
                time:"2019-12-20 11:00:00"
            },                                   
        ]
    }
})

App.attach(document.body);