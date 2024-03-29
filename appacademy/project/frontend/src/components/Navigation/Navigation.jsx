import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css'


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
//brings in navlinks and the profilebutton component

//returns the navigation component and its components
  return (
    <div>
    <ul>
      <div>
        <NavLink className='navlink-logo' to="/">
          <div className='logo'>
            {/* <img src='https://media.designrush.com/inspiration_images/135187/conversions/_1511452487_364_Airbnb-mobile.jpg' alt='airbnb logo' /> */}
            <img src='/airbnb(spun).png' alt='airbnb logo'/>
            <span className='landrnr'>LandRnR</span>
          </div>
        </NavLink>
      </div>
      <div className='right-nav'>
        {sessionUser && (
          <div>
            <button className='button1'><NavLink to="/create-spot" className='create-new-spot-link'>Create a New Spot</NavLink></button>
          </div>
        )}

        {isLoaded && (
          <div>
            <ProfileButton user={sessionUser} />
          </div>
        )}
      </div>
    </ul>
    <div className='line2'></div>
    </div>

  );
}

export default Navigation;
