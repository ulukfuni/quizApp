import Inferno from 'inferno';
import Component from 'inferno-component';

class CheckBox extends Component {
	state = {
		isChecked: false,
	}
	
	toggleCheckBoxChange = () => {
		const {handleCheckBoxChange, label} = this.props;
		
		this.setState(({isChecked}) => (
			{
				isChecked: !isChecked,
			}
		));
		
		handleCheckBoxChange(label);
	}
	
	render() {
		const { label } = this.props;
		const { isChecked } = this.state;
		
		return(
			<label>
				<input
					type='checkbox'
					value={label}
					checked={isChecked}
					onChange={this.toggleCheckBoxChange}
				/>
				{label}
			</label>
		);
	}
}

export default CheckBox;