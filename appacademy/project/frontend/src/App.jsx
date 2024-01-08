import {useState, useEffect} from 'react'
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import * as sessionActions from './store/session'
import AllSpots from './components/AllSpots/AllSpots';

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
      element: <AllSpots/>
    }
    ]
  }
])


function App() {
  return <RouterProvider router={router}/>;
}

export default App;
