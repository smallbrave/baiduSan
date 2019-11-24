var MyApp = san.defineComponent({
    template:`
    <div>
        <input type='text' placeholder='姓名（String）' value='{= name =}'>
        <input type='number' placeholder='年龄（Number）' value='{= age =}'>
        <input type='text' placeholder='简介（String）' value='{= des =}'>
        <p><span>信息：</span><button on-click='clear()'>移出信息</button></p>
        <p><span>姓名：</span><span>{{ name }}</span></p>
        <p><span>年龄：</span><span>{{ age }}</span></p>
        <p><span>简介：</span><span>{{ des }}</span></p>
    </div>
    `  ,
    initData: function(){
        return {
            name: "",
            age: "",
            des: ""
        }      
    },
    clear: function(){
        this.data.set('name',"");
        this.data.set('age',"");
        this.data.set('des',"");
   }
})
var myApp = new MyApp();
myApp.attach(document.body);