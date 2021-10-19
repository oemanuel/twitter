import { Link } from 'react-router-dom'
import Metadata from "../../../lib/metadata";
import { Input, Form, Button, Logo } from '../../../components'
import { useState } from 'react';
import { useHistory } from 'react-router'
import { signUpUser } from '../../../services/userService'

const SignUp = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const handleSignUp = (event) => {
        event.preventDefault();
        signUpUser(name, email, username, password, password)
            .then(data => {
                history.push("/login");
            })
            .catch((err) => {
                console.log("err", err);
            });
    };

    return (
        <>
            <Metadata title="Join Twitter today." description="Join Twitter today. Sign up Sign in. Follow what interests you. Find out what people are talking about. Join the conversation." route="register" />
            <div className='h-full flex justify-center items-center py-8 px-8'>
                <section className='w-96 space-y-4'>
                    <Logo />
                    <p className='text-black-light text-base font-normal'>My Twitter</p>
                    <h1 className='text-black font-bold text-3xl'>Create your account</h1>
                    <Form>
                        <Input id="namedInput" type="text" name="name" title='Name' required onChange={event => setName(event.target.value)} value={name} />
                        <Input id="userNamedInput" type="text" name="userName" title='Username' required onChange={event => setUsername(event.target.value)} value={username} />
                        <Input id="emailInput" type="email" name="email" title='Email' required onChange={event => setEmail(event.target.value)} value={email} />
                        <Input id="passwordInput" type='password' name="password" title='Password' required onChange={event => setPassword(event.target.value)} value={password} />
                        <Input id="passwordConfirmatioInput" type='password' name="passwordConfirmation" title='Password Confirmation' required />
                        <div className='pt-8'>
                            <Button onClick={handleSignUp} aria-label='sign up on twitter' title='Sign up' />
                        </div>
                    </Form>
                    <div className='flex justify-center' >
                        <p className='text-black-light text-base'>
                            Already have an account?
                            <Link className='text-blueTwitter' to="/login"> Login </Link>
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}

export default SignUp;