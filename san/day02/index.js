var MyApp = san.defineComponent({
    template:'<p> hello {{name}}! {{id}}</p>',
    initData:function(){
        return {
            name: 'World',
            id: "01"
        }
    }
})

var myApp = new MyApp();
myApp.attach(document.body);