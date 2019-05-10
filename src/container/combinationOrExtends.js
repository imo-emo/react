// 组合 or 继承
// react具有强大的组合模型,我们建议使用组合而不是继承来复用组件之间的代码
// 包含关系
// 一些组件提前不能知道它们的子组件是什么,建议将组件直接将属性传递到组件调用的输出
// let SplitPane = (props)=>{
//     return (
//         <div>
//             {props.left?props.left:''}
//             {props.right?props.right:''}
//         </div>
//     )
// }
// let app = () =>{
//     return (
//         <div>
//             <SplitPane
//                 left={LeftComponent}
//                 right={RightComponent}
//             />
//         </div>
//     )
// }
// function FancyBorder(props) {
//     return (
//       <div className={'FancyBorder FancyBorder-' + props.color}>
//         {props.children}
//       </div>
//     );
// }
// function WelcomeDialog() {
//     return (
//       <FancyBorder color="blue">
//         <h1 className="Dialog-title">
//           Welcome
//         </h1>
//         <p className="Dialog-message">
//           Thank you for visiting our spacecraft!
//         </p>
//       </FancyBorder>
//     );
// }
//使用 props.children 来做容器放置 组件中包含的元素, 类似于 vue的slot 


//react理念
// 我们概念中react最初的目的是使用js创建大型的，快速响应的网络应用,它在我们的facebook,和 instagram中实践已经非常好了
// react的众多有点之一是它让你在你编写代码的时候同时也在思考你的应用,这篇文章中，我们会带你们使用react一起
// 实现理念
// 1.把ui划分出层级组件
// 2.使用react创建一个静态版本
// 3.定义ui状态的最小表示
// 4.确定你的state应该位于哪里
// 5.添加反向数据流