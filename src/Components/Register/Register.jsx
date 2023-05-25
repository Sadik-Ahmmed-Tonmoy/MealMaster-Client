import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)
  const from = location?.state?.from?.pathname || "/";
  console.log(from)


  const { registerUser } = useContext(AuthContext)

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

    const name = event.target.name.value;
    const image = event.target.image.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(name, image, email, password, event)

    registerUser(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        navigate(from || "/")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

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
  const handleAccepted =(event) => {
    console.log(event)
  }


  return (
    <div>
      <div className='border p-4 rounded-md md:w-2/4 mx-auto bg-cyan-200'>
        <h2 className='text-center font-bold text-4xl'>SignUp</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="name"
                value="Your Name"
              />
            </div>
            <TextInput
              id="name"
              type="name"
              name='name'
              required={true}
              shadow={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="password2"
                value="Image URL"
              />
            </div>
            <TextInput
              id="image_URL"
              name='image'
              required={true}
              shadow={true}
            />
          </div>

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
            {emailError && <span className='bg-red-600 font-bold text-lg'>{emailError}</span>}
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


          <div className="flex items-center gap-2 justify-between relative">
            {passwordError && <span className='bg-red-600 font-bold text-lg'>{passwordError}</span>}
            <div>
              <Checkbox 
              id="agree" 
              onClick={handleAccepted}
              />
              <Label htmlFor="agree">
                I agree with the
                <Link to="/UserIdLayout/terms"
                  className="text-blue-600 hover:underline dark:text-blue-500">
                  terms and conditions
                </Link>
              </Label>
            </div>
            <div className='absolute md:bottom-20 bottom-24 right-0'>
              {showPass ? <Button onClick={handleShowPass} size="xs">
                Hide Password
              </Button> : <Button onClick={handleShowPass} size="xs">
                Show Password
              </Button>}
            </div>
          </div>
          <Button type="submit" className='m-3 w-6/12 mx-auto'>
            Create New Account
          </Button>

          <hr />

          <h2 className='text-center font-bold text-xl'>Already have an account ?</h2>

          <Link to="/UserIdLayout/login">
            <Button type="submit" className='mb-4 md:w-4/12 mx-auto bg-green-500'>
              Login
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;