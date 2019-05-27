import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {
HandleClick(buttonText){

}
render(){
  return(
    <main>
            <section>
              <p>{this.props.quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
              <ul>
              {this.props.quiz_question.answer_options.map((answer_options, index) => {
                return  <QuizQuestionButton key={index} button_text={answer_options}
                ClickHandler={this.HandleClick.bind(this)} />
              } )}

              </ul>
            </section>
          </main>
  )
}
}


export default QuizQuestion
