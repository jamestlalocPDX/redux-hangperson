import React from 'react';
import Player1View from './Player1View';
import Player2View from './Player2View/Player2View';


class HangpersonControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: true,
      phraseToGuess: null
    };
  }

  handleClick = () => {
    console.log("handleClick was reached")
    this.setState({formVisibleOnPage: false});
  }

  handleAddingNewPhrase = (phrase) => {
    this.setState({phraseToGuess: phrase})
    this.setState({formVisibleOnPage: false});
  }

  render(){
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <Player1View onNewGameCreation = {this.handleAddingNewPhrase}/>
    } else {
      currentlyVisibleState = <Player2View onGuessingLetter = {this.handleClick} />
    }


    return (
      <React.Fragment>
        { currentlyVisibleState }
      </React.Fragment>
    );
  }
}


export default HangpersonControl;