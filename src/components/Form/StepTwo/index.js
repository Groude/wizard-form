import React from 'react';

class StepTwo extends React.Component {
  render() {
    const { birth, gender, city} = this.props.data;
    return (
      <React.Fragment>
        <div className="form__group form__group--flex">
          <input type="date" name="birth" className="form__input" value={birth} onChange={this.props.getValue} placeholder="Дата рождения" />
          <select name="gender" className="form__select" value={gender} onChange={this.props.getValue}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <span className="input-name">Дата Рождения</span>
          <span className="input-name input-name--gender">Пол</span>
        </div>
        <div className="form__group">
          <input type="text" name="city" className="form__input" value={city} onChange={this.props.getValue} placeholder="Место проживания" />
          <span className="input-name">Место проживания</span>
        </div>
      </React.Fragment>
    );
  }
}

export default StepTwo;