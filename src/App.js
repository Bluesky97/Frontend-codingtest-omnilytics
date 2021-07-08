import './App.css';
import {Button, Grid} from "@material-ui/core";
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
}
  generateAlphabetical() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < 10; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
  }

  generateRealNumber () {
    var numbers = Math.floor(Math.random() * 100000) + 1;
    return numbers;
  }

  generateInteger () {
    var integers = Math.floor(Math.random() * 100) + 1;
    return integers;
  }

  generateAlphanumerics() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 10; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
  }
  generate() {
    var generate = "Alphabetical String: " + this.generateAlphabetical() + "\r\n" + "Real numbers: " + this.generateRealNumber() + "\r\n" + "Integers: " + this.generateInteger() + "\r\n" + "Alphanumerics: " + this.generateAlphanumerics();
    return generate;
  }
  generateFile = () => {
    const element = document.createElement("a");
    const file = new Blob([this.generate()], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }
  state = {isHidden: true}
  toggleHidden = () => {
    this.setState((prevState)=>({isHidden: !prevState.isHidden}))
  }

  render () {
    return (
      <div className="App">
        <Grid
            container
            direction="column"
            alignItems="center"
            style={{margin: "auto", border: "solid black 1px", width: "50%"}}
        >
            <Grid item style={{marginBottom: "15px"}}>
                <Button variant="outlined" onClick={this.generateFile} >Generate</Button>
            </Grid>

            <Grid item style={{marginBottom: "15px"}}>
                <a href="#" onClick={this.generateFile}><span>Link </span></a>
            </Grid>

            <Grid item style={{marginBottom: "15px"}}>
                <Button variant="outlined" onClick={this.toggleHidden} >Report</Button>
            </Grid>
            <Grid item>
              {!this.state.isHidden && <div>
                <p>Alphabetical String: {this.generateAlphabetical()}</p>
                <p>Real numbers: {this.generateRealNumber()}</p>
                <p>Integers: {this.generateInteger()}</p>
                <p>Alphanumerics: {this.generateAlphanumerics()}</p>
                </div>}
            </Grid>
        </Grid>

      </div>
    )
  }
}

export default App;
