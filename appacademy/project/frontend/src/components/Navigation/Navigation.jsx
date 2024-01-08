import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css'


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
//brings in navlinks and the profilebutton component

//returns the navigation component and its components
  return (
    <ul>
      <li>
        <NavLink exact to="/">Home</NavLink>
      </li>
      {isLoaded && (
        <li>
            <ProfileButton user={sessionUser}/>
        </li>
      )}
    </ul>
  );
}

export default Navigation;

// import { NavLink } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import ProfileButton from './ProfileButton'
// import * as sessionActions from '../../store/session'

// function Navigation({isLoaded}){
//     const sessionUser = useSelector(state => state.session.user)
//     const dispatch = useDispatch()

//     const logout = (e) => {
//         e.preventDefault()
//         dispatch(sessionActions.logout())
//     }
//     const sessionLinks = sessionUser ? (
//         <>
//         <li>
//             <ProfileButton user={sessionUser}/>
//         </li>
//         <li>
//             <button onClick={logout}>Log Out</button>
//         </li>
//         </>
//     ): (
//         <>
//         <li>
//             <NavLink to="/login">Log In</NavLink>
//         </li>
//         <li>
//             <NavLink to='/signup'>Sign Up</NavLink>
//         </li>
//         </>
//     )
//     return (
//         <ul>
//             <li>
//                 <NavLink to='/'>Home</NavLink>
//             </li>
//             {isLoaded && sessionLinks}
//         </ul>
//     )
// }

// export default Navigation
/*
the only time to
*/