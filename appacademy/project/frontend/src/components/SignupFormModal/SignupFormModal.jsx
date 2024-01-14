import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import * as sessionActions from '../../store/session';
import './SignUpFormPage.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();
//handles the submission of the signup form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors({});
      return dispatch(
        sessionActions.signup({
          email,
          username,
          firstName,
          lastName,
          password
        })
      )
        .then(closeModal)
        .catch(async (res) => {
          const data = await res.json();

          if (data && data.errors) {
            setErrors(data.errors);
          }
        });
    } else {
      return setErrors({
        ...errors,
        confirmPassword: "Confirm Password field must be the same as the Password field"
      });
    }
  };
//returns the signup form component and its components
  return (
    <div className='logout-modal'>
      <div className='log-title'>Sign Up</div>
      <div className='errors'>
        {Object.values(errors).map((error, idx) => (
          <p key={idx}>{error}</p>
        ))}
      </div>
     <div className='content'>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              value={firstName}
              placeholder='First Name'
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
         <label>
            <input
              type="text"
              value={lastName}
              placeholder='Last Name'
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
          <label>
            <input
              type="text"
              value={email}
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            <input
              type="text"
              value={username}
              placeholder='UserName'
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>

          <label>
            <input
              type="password"
              value={password}
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
         <label>
            <input
              type="password"
              value={confirmPassword}
              placeholder='Confirm Password'
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
          <div className='signup'><button type="submit" disabled={
            email.length < 1 ||
            lastName.length < 1 ||
            firstName.length < 1 ||
            username.length < 4 ||
            password.length < 6 ||
            confirmPassword.length < 6
          }>Sign Up</button></div>
        </form>
      </div>
    </div>
  );
}

export default SignupFormPage;

// function SignupFormModal() {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const { closeModal } = useModal();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (password === confirmPassword) {
//       setErrors({});
//       return dispatch(
//         sessionActions.signup({
//           email,
//           username,
//           firstName,
//           lastName,
//           password
//         })
//       )
//         .then(closeModal)
//         .catch(async (res) => {
//           const data = await res.json();
//           if (data?.errors) {
//             setErrors(data.errors);
//           }
//         });
//     }
//     return setErrors({
//       confirmPassword: "Confirm Password field must be the same as the Password field"
//     });
//   };

//   return (
//     <>
//       <h1>Sign Up</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email
//           <input
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </label>
//         {errors.email && <p>{errors.email}</p>}
//         <label>
//           Username
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </label>
//         {errors.username && <p>{errors.username}</p>}
//         <label>
//           First Name
//           <input
//             type="text"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             required
//           />
//         </label>
//         {errors.firstName && <p>{errors.firstName}</p>}
//         <label>
//           Last Name
//           <input
//             type="text"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//             required
//           />
//         </label>
//         {errors.lastName && <p>{errors.lastName}</p>}
//         <label>
//           Password
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </label>
//         {errors.password && <p>{errors.password}</p>}
//         <label>
//           Confirm Password
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </label>
//         {errors.confirmPassword && (
//           <p>{errors.confirmPassword}</p>
//         )}
//         <button type="submit">Sign Up</button>
//       </form>
//     </>
//   );
// }

// export default SignupFormModal;
