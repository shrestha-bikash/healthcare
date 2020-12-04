import { React } from 'react';
import Signup from '../components/Singup'
import Signin from '../components/Signin'

function RegisterLoginPage() {

    return (
        <div className="register-login-page">
            <div className="card">
                <div className="row">
                    <div className="col-md-6 signup-sec">
                        <h4>Register your account</h4>
                        <Signup/>
                    </div>
                    <div className="col-md-6 login-sec">
                        <h4>Sing in</h4>
                        <Signin/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterLoginPage;