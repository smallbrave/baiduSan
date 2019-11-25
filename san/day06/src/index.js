var Son = san.defineComponent({
    template: 
    `
    <div class='child'>
            <span>子组件：</span>
            <input type='text' value="{= message =}">
            <button on-click='askParent'>通知父组件</button><br/>  
    </div>
    `,
    initData: function(){
        return {
            message: "",
        }
    },
    askParent: function(){
        var msg = this.data.get('message');
        this.dispatch("UI:msgChange",msg);      //向父组件传递信息
    },
    created() {
        this.data.set('message','');
    }
})

var Father = san.defineComponent({
    components:{
        'son': Son
    },
    template:
    `<div class='father'>
        <son message="{{ default }}"></son>
        <span>我是父组件:</span><input type='text' value="{= default =}" 
        disabled="{{status?false:true}}" on-input='ask'>
    </div>
    `,
    initData: function(){
        return {
            default: "静静等待用户输入",
            status: false
        }
    },
    messages: {                //通过messages构建进行一个传递信息的捕获
        "UI:msgChange": function(args){
            var change = this.data.get('status');
            console.log(this.data.set('status',!change));
            var text = args.value;
            this.data.set("default",text);
            this.dispatch("UI:msgChange",text);
        }
    },
    ask:function(){
        this.dispatch("UI:msgChange",this.data.get('default'));
    },
    inited(){
        this.data.set('default',"静静等待用户输入");
    }
})
var MyApp = san.defineComponent({
    components:{
        'father':Father,
    },
    template:
    `<div class='grand'>
        <father default="{{ default }}"></father>
        <span>我是更高级的父组件：</span><input type="text" value="{= default =}"
        disabled="{{status?false:true}}">
    </div>
    `,
    initData:function(){
        return{
            default: "我也静静等待用户输入" ,
            status: false
        }
    },
    messages: {
        "UI:msgChange":function(args){
            console.log(this.data.set('status',true));
            var text = args.value;
            this.data.set("default",text);
        }
    }

})
var myApp = new MyApp();
myApp.attach(document.body);