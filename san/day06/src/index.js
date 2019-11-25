var MyApp = san.defineComponent({
    template: 
    `
    <div>
        <p>
            <span>子组件：</span>
            <input type='text' value="{= message =}">
            <button on-click='askParent'>通知父组件</button><br/>
            <br/>
            <p>{{change?message:default}}</p>
        </p>
        <p>{{change?message:default}}</p>   
    </div>
    `,
    initData: function(){
        return {
            message: "",
            default: "静静等待用户输入",
            change: false,
        }
    },
    askParent: function(){
        var status = this.data.get('change');
        this.data.set('change',!status);
    }
})
var myApp = new MyApp();
myApp.attach(document.body);