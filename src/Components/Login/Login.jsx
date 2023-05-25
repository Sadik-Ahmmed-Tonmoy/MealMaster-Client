import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Login = () => {

  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [userNotFoundMessage, setUserNotFoundMessage] = useState("")


  const handleEmail = (event) => {
    const emailInput = event.target.value;
    setEmail(emailInput)
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailInput)) {
      setEmailError("Please provide a valid email")
    }
    else {
      setEmailError("")
    }
  }

  const handlePassword = (event) => {
    const passwordInput = event.target.value;
    setPassword(passwordInput);
    if (passwordInput.length < 6) {
      setPasswordError("Password must be at least 6 characters long")
    }
    else {
      setPasswordError("")
    }
  }

  const handleShowPass = () => {
    setShowPass(!showPass)
  }

  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname || "/";

  const { loginUser, auth, provider, githubProvider, setLoading  } = useContext(AuthContext)

  const handleSubmit = (event) => {
    event.preventDefault();

    if (emailError) {
      event.target.email.focus()
      return;
    }
    else if (passwordError) {
      event.target.password.focus()
      return
    }

    if (email, password) {
      loginUser(email, password)
        .then(result => {
          console.log(result.user)
          navigate(from || "/")
        })
        .catch(error => {
          setUserNotFoundMessage(error.message)
        })
    }
  }

  const handleGoogleLogin = () => {
    setLoading(true)
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        navigate(from || "/")
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // The email of the user's account used.
        const email = error?.customData?.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  const handleGithubLogin = () => {
    setLoading(true)
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        navigate(from || "/")
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  }



  return (
    <div>
      <div className='border p-4 rounded-md md:w-2/4 mx-auto md:mt-10 bg-cyan-200'>
        <h2 className='text-center font-bold text-4xl'>Login</h2>
        {userNotFoundMessage && <span className='text-lg bg-red-600 font-bold'>{userNotFoundMessage}</span>}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="email2"
                value="Your email"
              />
            </div>
            <TextInput
              id="email2"
              type="email"
              name='email'
              value={email}
              onChange={handleEmail}
              placeholder="name@something.com"
              required={true}
              shadow={true}
            />
            {emailError && <span className='text-lg bg-red-600 font-bold'>{emailError}</span>}
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="password2"
                value="Your password"
              />
            </div>
            <TextInput
              id="password2"
              type={showPass ? "text" : "password"}
              name='password'
              value={password}
              onChange={handlePassword}
              placeholder='password here'
              required={true}
              shadow={true}
            />

          </div>


          <div className="flex items-center gap-2  justify-between relative">
            {passwordError && <span className='text-lg bg-red-600 font-bold'>{passwordError}</span>}
            <div>
              <Checkbox id="remember" />
              <Label htmlFor="remember">
                Remember me
              </Label>
            </div>
            {password && <div className='absolute md:bottom-12 bottom-12 right-0'>
              {showPass ? <Button onClick={handleShowPass} size="xs">
                Hide Password
              </Button> : <Button onClick={handleShowPass} size="xs">
                Show Password
              </Button>}
            </div>}

          </div>
          <Button type="submit" className='m-3 w-6/12 mx-auto'>
            Submit
          </Button>
          <h2 className='font-bold text-lg text-center'>Or use one of this options</h2>

          <Button onClick={handleGoogleLogin} color="light">
           <FcGoogle></FcGoogle> <span className='mx-2'>Login with Google</span>
          </Button>
          <Button onClick={handleGithubLogin} color="light">
           <BsGithub></BsGithub> <span className='mx-2'>Login with Github</span>
          </Button>
          <hr />

          <h2 className='text-center font-bold text-2xl'>{`Don't have account ?`}</h2>

          <Link state={location.state} to="/UserIdLayout/register">
            <Button className='mb-4 md:w-4/12 mx-auto bg-green-500'>
              Create New Account
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;