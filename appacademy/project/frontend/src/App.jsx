import {useState, useEffect} from 'react'
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import * as sessionActions from './store/session'
import AllSpots from './components/AllSpots/AllSpots';
import SpotInfo from './components/SpotInfo/SpotInfo';
import CreateSpot from './components/CreateSpot/CreateSpot';
import Reviews from './components/SpotInfo/Review';
import ManageSpots from './components/ManageSpots/ManageSpots';
import DeleteSpot from './components/DeleteSpot/DeleteSpot';
import DeleteReview from './components/DeleteReview/DeleteReview';


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
    }, {
      path:'/spots/:spotId',
      element: <SpotInfo/>
    }, {
      path:'/spots/:spotId/reviews',
      element: <Reviews/>
    }, {
      path: '/create-spot',
      element: <CreateSpot mode="create"/>
    }, {
      path:'/manage-spots',
      element:<ManageSpots/>
    },{
      path:'/update-spot/:spotId',
      element:<CreateSpot mode="update"/>
    }, {
      path:'/delete-spot',
      element:<DeleteSpot/>
    }, {
      path:'/delete-review',
      element:<DeleteReview />
    }
    ]
  }
])


function App() {
  return <RouterProvider router={router}/>;
}

export default App;
