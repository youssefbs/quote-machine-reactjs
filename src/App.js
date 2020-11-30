import React from 'react';
import './App.css';
import Quote from './Components/Quote'

class App extends React.Component{
 constructor(props){
    super(props);
    this.state={
            quotes:[],
            color:['salmon','firebrick','green','teal','plum','peru'],
            indiceQ:0,
            indiceC:0,
    }
    fetch("https://type.fit/api/quotes")
    .then((response)=> {
        return response.json();
    })
      .then((data)=> {
          this.state.quotes=data
      },()=>console.log('fin'));
      console.log('Fin Construcor');
  }

  

  changeQuote=()=>{
    const {indiceQ,indiceC,quotes,color}=this.state;
    const lenQ=quotes.length;
    const lenC=color.length;

    if(lenQ-1===indiceQ){

        this.setState({indiceQ:0});
    }
    else{

      this.setState((prevState)=>{
        console.log(prevState.indiceQ);
        return {indiceQ:prevState.indiceQ+1}
      })
    }
    
    if(lenC-1===indiceC){

      this.setState({indiceC:0});
  }
  else{

    this.setState((prevState)=>{
      console.log(prevState.indiceC);
      return {indiceC:prevState.indiceC+1}
    })
  }
  }

  render(){
    return(
      <div className='App' id='quote-box' style={{color:this.state.color[this.state.indiceC],backgroundColor:this.state.color[this.state.indiceC]}}>
          <Quote indiceQ={this.state.indiceQ}  quotes={this.state.quotes} changeQuote={this.changeQuote}/>
      </div>
    ) 
   
  }
}

export default App;
