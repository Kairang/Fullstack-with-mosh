import Joi from 'joi-browser';
import { Redirect } from 'react-router-dom';
import auth from '../services/authServer';
import Form from './common/form';

export default class Login extends Form {
    state = {
        data: { email: '', password: '' },
        errors: {},
    };
    schema = {
        email: Joi.string().required().label('Email'),
        password: Joi.string().required().label('Password'),
    };

    doSubmit = async () => {
        // handle login form submission
        const { email, password } = this.state.data;
        try {
            await auth.login(email, password);
            const { state } = this.props.location;

            window.location = state ? state.from.pathname : '/movies';
        } catch (ex) {}
    };

    render() {
        const { errors } = this.state;

        if (auth.getCurrentUser()) return <Redirect to="/" />;

        return (
            <div>
                <h1>Login</h1>
                <form style={{ maxWidth: 400 }} onSubmit={this.handleSubmit}>
                    {this.renderFormInput('email', 'Email', 'text', true)}
                    {this.renderFormInput('password', 'Password', 'password')}
                    {errors.message && (
                        <div className="mb-4">
                            <small className="text-danger">{errors.message}</small>
                        </div>
                    )}
                    {this.renderButton('Login')}
                </form>
            </div>
        );
    }
}
