// export default function postsReducer(posts, action) {
//   switch(action.type) {
//     case 'added': {
//       return [
//         ...posts,
//         {
//           id: action.id,
//           title: action.title,
//           description: action.description,
//           likes :action.likes
//         }
//       ]
//     }
//     case 'deleted': {
//       return posts.filter((p) => p.id !== action.id)
//     }
//     default: {
//       throw Error('Unknown action: '+ action.type)
//     }
//   }
// }
