handleSubmit = task => {
    this.setState ({ tasks : [...this.state.tasks, task]});
}

class SubmitForm extends Component {
    state = { term: '' }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.task === '') return;
        this.props.onFormSubmit(this.state.term);
        this.setState ({ term : '' })
    }
    render() { 
        return ( 
            <form>
                <input 
                    type='text'
                    placeholder='Enter Task'
                    value={this.state.term}
                    onChange = {(e) = this.setState({term: e.target.value})}
                />
                <button>Submit</button>
            </form>
         );
    }
}
 
export default SubmitForm;