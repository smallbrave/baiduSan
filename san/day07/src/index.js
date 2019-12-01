var sanInput = san.defineComponent({
    template:
    `<input type='text' name='inputs' value='{= inputs =}' placeholder="请输入"><br>
    `,
    initData: function(){
        return {
            inputs:"" 
        }
    }
});
var sanCheckbox = san.defineComponent({
    template:
    `<div class='checkboxs'>
        多选框：<br>
        <input type='checkbox' id='kangkang' name='checkbox' value='kangkang' checked='{= checkboxs =}'>
        <lable for='kangkang'>kangkang</lable>
        <input type='checkbox' id='smallbrave' name='checkbox'  value='smallbrave' checked='{= checkboxs =}'>
        <lable for='smallbrave'>smallbrave</lable>
        <input type='checkbox' id='xixihaha' name='checkbox'  value='xixihaha' checked='{= checkboxs =}'>
        <lable for='xixihaha'>xixihaha</lable> 
    </div>`,
    initData: function(){
        return {
            checkboxs: []
        }
    }
});

var sanRadio = san.defineComponent({
    template:
    `<div class='radios'>
        单选框：<br>
        <input type='radio' name='radio' id='kangkang' value='kangkang' checked='{= radios =}'>
        <lable for='kangkang'>kangkang</lable>
        <input type='radio' name='radio' id='smallbrave' value='smallbrave' checked='{= radios =}'>
        <lable for='smallbrave'>smallbrave</lable>
    </div>
     `,
    initData: function(){
        return {
            radios: "kangkang"
        }
    }
});

var sanSelect = san.defineComponent({
    template:
    `<select checked='{= selects =}'>
        <option value='kangkang'>kangkang</option>
        <option value='smallbrave'>smallbrave</option>
        <option value='xixihaha'>xixihaha</option>
    </select>
    `,
    initData: function(){
        return {
            selects: "kangkang"  
        }
    }
})

var MyApp = san.defineComponent({
    components:{
        'san-input': sanInput,
        'san-radio': sanRadio,
        'san-checkbox': sanCheckbox,
        'san-select': sanSelect
    },
    template:
    `
    <div>
       <san-input></san-input>
       <san-radio></san-radio>
       <san-checkbox></san-checkbox>
       <san-select></san-select>
    </div>  
    `,
});

var myApp = new MyApp();
myApp.attach(document.body);
