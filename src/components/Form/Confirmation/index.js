import React from 'react';

class Confirmation extends React.Component {
  render() {
    const { firstName, lastName, middleName, mail, phone, city, birth, gender, id, location, departmentCode, dateId} = this.props.data;

    return (
      <React.Fragment>
        <div className="confirmation">
          <h2 className="confirmation__title">Ваши данные</h2>
          <div className="confirmation__data">
            <div>
              <p className="confirmation__label">Полное имя:</p>
              <p>{`${lastName} ${firstName} ${middleName}`}</p>
            </div>
            <div>
              <p className="confirmation__label">Дата рождения:</p>
              <p>{`${birth}`}</p>
            </div>
          </div>
          <div className="confirmation__data">
            <div>
              <p className="confirmation__label">Почта:</p>
              <p>{`${mail}`}</p>
            </div>
            <div>
              <p className="confirmation__label">Телефон:</p>
              <p>{`${phone}`}</p>
            </div>
          </div>
          <h4 className="confirmation__subtitle">Паспортные данные:</h4>
          <div className="confirmation__data confirmation__data--three">
            <div>
              <p className="confirmation__label">Серия и Номер:</p>
              <p>{`${id}`}</p>
            </div>
            <div>
              <p className="confirmation__label">Код подразделения:</p>
              <p>{`${departmentCode}`}</p>
            </div>
            <div>
              <p className="confirmation__label">Выдан:</p>
              <p>{`${dateId}`}</p>
            </div>
          </div>
          <div className="confirmation__data confirmation__data--full">
            <div>
              <p className="confirmation__label">Кем выдан:</p>
              <p>{`${location}`}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Confirmation;