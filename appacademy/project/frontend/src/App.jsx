import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation/Navigation';
import Spots from './components/Spots/Spots'
import SingleSpot from './components/SingleSpot/SingleSpot';
import SpotCreate from './components/SpotCreate/SpotCreate';
import ManageSpots from './components/ManageSpots/ManageSpots';
import SpotUpdate from './components/SpotUpdate/SpotUpdate';

//main function that calls in a restore user function, and making it where it is loaded equals true
function App() {
  const dispatch = useDispatch();
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => {
      setLoaded(true)
    })
  }, [dispatch])
//Routes that are supposed to point to a component
  return (
    <>
    { Loaded &&
      <>
        <Navigation isLoaded={Loaded}/>
        <Routes>
          <Route path='/' element={<Spots />} />
          <Route path='/spots/:spotId' element={<SingleSpot />} />
          <Route path='/spots/new' element={<SpotCreate />} isUpdate={false} />
          <Route path='/spots/:spotId/edit' element={<SpotUpdate isUpdate={true}/>} />
          <Route path='/spots/current' element={<ManageSpots />} />
          <Route path='*' element={<h1>404 Page Not Found</h1>} />
        </Routes></>
    }
   </>
  )
}

export default App;
