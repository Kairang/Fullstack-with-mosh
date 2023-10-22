import Joi from 'joi-browser';
import { Redirect } from 'react-router-dom';
import auth from '../services/authServer';
import { register } from '../services/userService';
import Form from './common/form';

class Register extends Form {
    state = {
        data: { name: '', password: '', email: '' },
        errors: {},
    };
    schema = {
        email: Joi.string().email().required().label('Email'),
        password: Joi.string().min(5).required().label('Password'),
        name: Joi.string().required().label('Name'),
    };

    doSubmit = async () => {
        try {
            const res = await register(this.state.data);
            auth.loginWithJwt(res.headers['x-auth-token']);

            window.location = '/movies';
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.email = ex.response.data;
                this.setState({ errors });
            }
        }
    };

    render() {
        if (auth.getCurrentUser()) return <Redirect to="/" />;

        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit} style={{ maxWidth: 400 }}>
                    {this.renderFormInput('email', 'Email', 'text', true)}
                    {this.renderFormInput('name', 'Name', 'text', true)}
                    {this.renderFormInput('password', 'Password', 'password', true)}
                    {this.renderButton('Register')}
                </form>
            </div>
        );
    }
}

export default Register;
