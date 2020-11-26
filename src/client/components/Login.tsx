import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { newAuthor } from '../types'
import { json, SetAccessToken, User} from '../utils/api';

const Login: React.FC<ILoginProps> = (props: ILoginProps) => {
    const [newAuthor, setNewAuthor] = React.useState<newAuthor>({
        email: "",
        password: "",
    });

    React.useEffect(() => {
        if(User && User.role === 'admin') {
            alert('You are already logged in!');
            props.history.push('/')
        }
    }, [])

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewAuthor({
        email: e.target.value,
        password: newAuthor.password,
    });

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewAuthor({
        email: newAuthor.email,
        password: e.target.value,
    });

  
    const handleLoginSubmit = async () => {
        try {
            let result = await json('/api/auth/login', 'POST', newAuthor);
            if(result) {
                SetAccessToken(result.token, { userid: result.userid, role: result.role })
                if(result.role === 'admin') {
                    props.history.push('/blog/create');
                } else {
                    props.history.push('/');
                }
            } else {
                //checking a login status
            }
        } catch (err) {
            console.log(err);
            throw err;
        }
        // await fetch("/auth/login/", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(newAuthor)
        // });

        // props.history.push(`/`);
    }

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Email</h5>
                    <input type="text" placeholder="example@email.com" onChange={handleEmailChange} />
                    <h5 className="card-title mt-3">Password</h5>
                    <input type="password" onChange={handlePasswordChange} />
                    <button className="btn btn-sm btn-outline-dark float-right mx-1 mt-3" onClick={handleLoginSubmit}>Login</button>
                </div>
            </div>
        </div>
        
    )
}

export interface ILoginProps extends RouteComponentProps { }

export default Login;