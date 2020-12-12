import React , {useRef,useState} from 'react';
import { Form, Button, Card,Alert } from "react-bootstrap";
import {useAuth} from '../contexts/AuthContext'
import {Link,useHistory } from 'react-router-dom';

export default function ForgotPassword() {
    const emailRef = useRef();
   

    const {login, currentUser, ForgotPassword } = useAuth();
    const [error,setError] = useState('');
    const [message,setMessage] = useState('');
    const [loading,setLoading] = useState(false);
    const history = useHistory();

    async function HandleSubmit(e) {
        e.preventDefault();
        
      

        try {
            setMessage('');
            setError('');
            setLoading(true);
            await ForgotPassword (emailRef.current.value);
            setMessage('Check your inbox for further instructions')
        }catch{
            setError('Failed to Reset Password');
            setLoading(false);
        }
    }

    return (
        <div>
        <Card>
            <Card.Body>
                <h2 className = "text-center mb-4">Forgot Password</h2>
             
                {message && <Alert variant = "success">{message}</Alert>}
                {error && <Alert variant = "danger">{error}</Alert>}
                <Form onSubmit={HandleSubmit} >
                    <Form.Group id="email">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit" >Reset Password</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className='text-center mt-2' >
           <Link to="/login" >Login</Link>
        </div>
        </div>
    )
}