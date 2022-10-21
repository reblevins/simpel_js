const routeTemplates = await import.meta.glob('./routes/**/*.html')
  
const { createApp } = Vue

const app = createApp({
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
})
let routes = []
console.log(routeTemplates);
// for (const path in routeTemplates) {
//   await routeTemplates[path]().then(template => {
//     if (path === './routes/Home.html') {
//       const component = {
//         name: 'home',
//         data() {
//           return {
//             title: 'Hello Vue!',
//             showPosts: false
//           }
//         },
//         template
//       }
      
//       routes.push({ path: '/', name: 'index', component })
//     } else {
//       let pathName = path.match(/\.\/routes\/(\w*)\.html/)[1]
//       console.log(pathName);
//       let componentNameLower = componentName.toLocaleLowerCase()
//       let data = {
//         [componentNameLower]: null
//       }
//       const component = {
//         name: componentNameLower,
//         data() {
//           return data
//         },
//         template,
//         mounted() {
//           console.log("Mounted");
//           fetch(`http://0.0.0.0:3001/${componentNameLower}`)
//             .then((response) => response.json())
//             .then((data) => {
//               this[componentNameLower] = data;
//             })
//             .catch((err) => {
//               console.log(err.message);
//             });
//         }
//       }
//       routes.push({
//         path: `/${componentNameLower}`,
//         name: `${componentNameLower}`,
//         component
//       })
//     }
//   })
// }
// // console.log(routes);
// const router = VueRouter.createRouter({
// history: VueRouter.createWebHistory(import.meta.env.BASE_URL),
//   routes
// })

// app.use(router)
// app.mount('#app')