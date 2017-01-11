import Inferno from 'inferno';
import Component from 'inferno-component';
import Logo from './logo';
import Quiz from './quiz';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="App">
							<Logo width="80" height="80"/>
							<h2>Quiz</h2>
							<Quiz></Quiz>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
