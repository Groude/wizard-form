import React from 'react';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import Confirmation from './Confirmation';
import { constants, stepOneInitial, stepTwoInitial, stepThreeInitial, stepsObject} from './constants';

class Form extends React.Component {
  state = {
    step: 1,
    error: false,
    buttonDisabled: true,
    stepOne: stepOneInitial,
    stepTwo: stepTwoInitial,
    stepThree: stepThreeInitial,
    finish: {}
  };

  getValue = (event) => {
    const { name, value } = event.target;
    const { step } = this.state;
    const emptyForm = this.formValidation(stepsObject[step]);
    
    if (emptyForm) {
      this.setState({ buttonDisabled: false })
    }

    this.setState(prevState => ({
      [stepsObject[step]]: {
        ...prevState[stepsObject[step]],
        [name]: value
      }
    }));
  };

  formValidation = (currentStep) => {
    return !Object.keys(this.state[currentStep]).some((field) => this.state[currentStep][field] === '');
  }

  handleNext = (event) => {
    event.preventDefault();

    const { step } = this.state;
    const emptyForm = this.formValidation(stepsObject[step]);

    if (this.state.step === 3) {
      const finish = {
        ...this.state.finish,
        ...this.state.stepOne,
        ...this.state.stepTwo,
        ...this.state.stepThree
      }
      this.setState({ finish: finish })
    }

    if (emptyForm) {
      this.setState((prevState) => ({
        error: false,
        buttonDisabled: true,
        step: prevState.step + 1
      }));
    } else {
      this.setState({ error: true})
    }
  }

  handleBack = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      buttonDisabled: false,
      step: prevState.step - 1
    }))
  };

  handleDirection = (direction) => {
    this.setState((prevState) => ({
      step: prevState.step + direction,
    }));
  }

  onFinishReg = (event) => {
    event.preventDefault();
    
    this.setState({
      step: 1,
      stepOne: stepOneInitial,
      stepTwo: stepTwoInitial,
      stepThree: stepThreeInitial,
      finish: {}
    });
  }

  renderCurrentStep = () => {
    switch (this.state.step) {
      case 1:
        return <StepOne data={ this.state.stepOne } getValue={(event) => this.getValue(event)} />
      case 2:
        return <StepTwo data={ this.state.stepTwo } getValue={(event) => this.getValue(event)} />
      case 3:
        return <StepThree data={ this.state.stepThree } getValue={this.getValue} />
      case 4:
        return <Confirmation data={ this.state.finish } />
      default:
        return <StepOne />
    }
  }

  render() {
    return (
      <div className={`form-wrapper ${this.state.error ? 'form-wrapper--error' : ''}`}>
        <ul className="progressbar">
          <li className="active">Шаг 1</li>
          <li className={this.state.step >= 2 ? `active` : ''}>Шаг 2</li>
          <li className={this.state.step >= 3 ? `active` : ''}>Шаг 3</li>
          <li className={this.state.step === 4 ? `active` : ''}>Шаг 4</li>
        </ul>
        {
          this.state.error && <p className="error-message">Заполните все поля</p>
        }
        <form className="form" onSubmit={ this.state.step === constants.endStep ? this.onFinishReg : this.handleNext }>
          { this.renderCurrentStep() }
          <div className="button-group">
            {
              this.state.step > constants.startStep &&
              <button 
                className="button" 
                onClick={this.handleBack}
              >
                Назад
              </button>
            }
            { 
              this.state.step === constants.endStep && 
              <button 
                className="button button--submit"
              >
                Отправить
              </button>}
            {
              this.state.step < constants.endStep && 
              <button 
                className="button button--next" 
                type="submit"
                disabled={this.state.buttonDisabled}
              >
                Вперед
              </button>
            }
          </div>
        </form>
      </div>
    );
  }
}

export default Form;