import React from 'react';

class StepOne extends React.Component {
  render() {
    const { firstName, lastName, middleName, mail, phone } = this.props.data;
    
    return (
      <React.Fragment>
        <div className="form__group">
          <input className="form__input" name="firstName" value={firstName} onChange={this.props.getValue} placeholder="Имя" />
          <span className="input-name">Имя</span>
        </div>
        <div className="form__group">
          <input className="form__input" name="lastName" value={lastName} onChange={this.props.getValue} placeholder="Фамилия" />
          <span className="input-name">Фамилия</span>
        </div>
        <div className="form__group">
          <input className="form__input" name="middleName" value={middleName} onChange={this.props.getValue} placeholder="Отчество" />
          <span className="input-name">Отчество</span>
        </div>
        <div className="form__group">
          <input className="form__input" name="mail" value={mail} onChange={this.props.getValue} placeholder="E-mail" />
          <span className="input-name">Почта</span>
        </div>
        <div className="form__group">
          <input className="form__input" name="phone" value={phone} onChange={this.props.getValue} placeholder="Телефон" />
          <span className="input-name">Телефон</span>
        </div>
      </React.Fragment>
    );
  }
}

export default StepOne;