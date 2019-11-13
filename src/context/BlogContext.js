import createDateContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const reducer = (state=[], action) => {
  switch(action.type) {
    case 'FETCH':
      return action.payload; // returns the source of truth
    case 'DELETE':
      return state.filter( post => post.id !== action.payload);
    case 'EDIT':
      return state.map(blog => {
        return blog.id === action.payload.id ? action.payload : blog;
      });
    default:
      return state;
    }
}

const fetchBlogPosts = (dispatch) => {
  return async () => {
    try {
      const res = await jsonServer.get('/blogposts');
      dispatch({ type: 'FETCH', payload: res.data });
    } catch(e) {

    }
  }
}

const addBlogPost = (dispatch) => {
  return async (blog, cb) => {
    try {
      await jsonServer.post('/blogposts', blog);
      if(cb) return cb();
    } catch(e) {
      console.log(e);
    }
  }
}

const editBlogPost = (dispatch) => {
  return async (updatedPost, cb) => {
    try {
      await jsonServer.put(`/blogposts/${id}`, updatedPost);
      if(cb) return cb();
    } catch(e) {
      console.log(e);
    }
  }
}

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    try {
      await jsonServer.delete(`/blogposts/${id}`);
      dispatch({ type: 'DELETE', payload: id });
    } catch(e) {
      console.log(e);
    }
  };
}

export const { Context, Provider } = createDateContext(
  reducer, 
  { fetchBlogPosts, addBlogPost, deleteBlogPost, editBlogPost },
  []
)


// const BlogContext = React.createContext();

// const reducer = (state=[], action) => {
//   switch(action.type) {
//     case 'ADD':
//       return [...state, { title: `Blog Post #${state.length + 1}`}];  
//     case 'DELETE':
//       return state;
//     case 'EDIT':
//       return state;
//     default:
//       return state;
//     }
// }

// export const BlogProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, []);

//   const addBlogPost = () => {
//     dispatch({ type: 'ADD' })
//   }

//   return <BlogContext.Provider value={{data:state, addBlogPost}}>{children}</BlogContext.Provider>
// }

// export default BlogContext;