import React from 'react';

class StepThree extends React.Component {
  render() {
    const { id, location, departmentCode, dateId} = this.props.data

    return (
      <React.Fragment>
        <div className="form__group">
          <input type="text" name="id" value={id} onChange={this.props.getValue} className="form__input" placeholder="Серия и Номер"/>
          <span className="input-name">Серия и Номер</span>
        </div>
        <div className="form__group">
          <input type="text" name="location" value={location} onChange={this.props.getValue} className="form__input" placeholder="Кем выдан"/>
          <span className="input-name">Кем выдан</span>
        </div>
        <div className="form__group">
          <input type="text" name="departmentCode" value={departmentCode} onChange={this.props.getValue} className="form__input" placeholder="Код подразделения"/>
          <span className="input-name">Код подразделения</span>
        </div>
        <div className="form__group">
          <input type="text" name="dateId" value={dateId} onChange={this.props.getValue} className="form__input" placeholder="Дата выдачи"/>
          <span className="input-name">Дата выдачи</span>
        </div>
      </React.Fragment>
    );
  }
}

export default StepThree;