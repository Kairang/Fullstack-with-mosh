import genreApi from '../api/genreApi';
import Form from './common/form';
import Joi from 'joi-browser';

class GenreForm extends Form {
    state = {
        data: {
            name: '',
        },
        errors: {},
    };

    schema = {
        _id: Joi.string(),
        name: Joi.string().required().label('Name'),
    };

    doSubmit = async () => {
        try {
            await genreApi.createGenre(this.state.data);
            this.props.history.push('/admin/genres');
        } catch (err) {}
    };

    render() {
        return (
            <div>
                <h1>Genre Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderFormInput('name', 'Name', 'text', true)}
                    {this.renderButton('Save')}
                </form>
            </div>
        );
    }
}

export default GenreForm;
