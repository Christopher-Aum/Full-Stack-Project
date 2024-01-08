import {useState, useEffect} from 'react'
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import SignUpFormPage from "./components/SignupFormPage/SignUpFormPage";
import Navigation from './components/Navigation/Navigation';
import * as sessionActions from './store/session'

//function that checks if something is loaded, and dispatches the restoreUser function upon every rerender
function Layout(){
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(()=> {
    dispatch(sessionActions.restoreUser()).then(()=> {
      setIsLoaded(true)
    })
  }, [dispatch])

  return (
    <>
    <Navigation isLoaded={isLoaded}/>
    {isLoaded && <Outlet/>}
    </>
  )
}
//router handles the routing of locations based on the url
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [

      {path: '/',
      element: <h1>Welcome!</h1>
    },
  {
    path:'/signup',
    element:<SignUpFormPage/>
  }
    ]
  }
])


function App() {
  return <RouterProvider router={router}/>;
}

export default App;
