import React, { Component } from 'react'

class QuizQuestionButton extends Component {
HandleClick(button_text){
this.props.ClickHandler(this.props.button_text)
}
render(){
return(

<li><button onClick={this.HandleClick.bind(this)}>{this.props.button_text}</button></li>
)


}
}


export default QuizQuestionButton
