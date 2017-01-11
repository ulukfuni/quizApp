import Inferno from 'inferno';
import Component from 'inferno-component';
import CheckBox from './checkbox';
import questions from './questions';

class Quiz extends Component {
	state = {
		correct: false,
		currentQuestion: questions[0],
		currentPostion: 0,
	}
	componentWillMount = () => {
		this.selectedCheckboxes = new Set();
	}
	toggleCheckBox = label => {
		if (this.selectedCheckboxes.has(label)){
			this.selectedCheckboxes.delete(label);
		} else {
			this.selectedCheckboxes.add(label);
		}
	}
	handleFormSubmit = formSubmitEvent => {
		formSubmitEvent.preventDefault();
		
		for (const checkbox of this.selectedCheckboxes) {
			console.log(checkbox + ' is selected');
		}
		//check correct answer here
		if (this.state.correct) {
			//go to next question
		}
		console.log(this.selectedCheckboxes);
	}
	createCheckBox = label => (
		<CheckBox
		label={label.choice}
		handleCheckBoxChange={this.toggleCheckBox}
		key={label.id}
		/>
	);
	render() {
		const data = this.state.currentQuestion;
		var checkboxes = data.choices.map(answer => {
			return this.createCheckBox(answer);
		});
		return (
			<form onsubmit={this.handleFormSubmit}>
				<h2>{data.question}</h2>
				{checkboxes}
				<button className="btn btn-default" type="submit">Check Answer</button>
			</form>
		);
	}
}

export default Quiz;