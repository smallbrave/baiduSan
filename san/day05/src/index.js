var MyApp = san.defineComponent({
    template: 
    `<div on-click='toggle' class="{{curColor?'change':'curColor'}}" 
     style="width:100px;height:100px;">
    </div>
    `,
    initData: function(){
        return {
            curColor: true,
        }
    },
    toggle: function()
    {
        var current = this.data.get('curColor');
        this.data.set('curColor',!current);
    }
})
var myApp = new MyApp();
myApp.attach(document.body);