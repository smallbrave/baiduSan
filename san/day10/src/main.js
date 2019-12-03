import san from 'san'
import child from './child.san'
// const ChildTransition = san.defineComponent({
//     template: `<div>
//       <div s-transition="transition('slide')">Child elements with transition effects.</div>
//     </div>`,
//     transition
//   })
  
  // a list of tracked elements
//   const ListTransition = san.defineComponent({
//     template: `<ul>
//       <li s-for="item in list trackBy item" s-transition="transition('slide', 300)">Listed element with transition effects.</li>
//     </ul>`,
//     initData () {
//       return {
//         list: [1, 2, 3, 4, 5]
//       }
//     },
//     transition
//   }) 

   var app = new child();
   app.attach(document.body);