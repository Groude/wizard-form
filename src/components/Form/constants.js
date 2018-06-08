export const constants = {
  startStep: 1,
  endStep: 4
};

export const dataInitialState = {
  firstName: '',
  lastName: '',
  middleName: '',
  mail: '',
  phone: '',
  birth: '',
  gender: '',
  city: ''
}

// export const dataInitialState = {
//   firstName: 'Кирилл',
//   lastName: 'Мартынов',
//   middleName: 'Анатольевич',
//   mail: 'thekirchik@gmail.com',
//   phone: '+79787294863',
//   birth: '15.02.1995',
//   gender: 'male',
//   city: 'Simferopol'
// }

export const stepOneInitial = {
  firstName: '',
  lastName: '',
  middleName: '',
  mail: '',
  phone: '',
}

export const stepTwoInitial = {
  birth: '',
  gender: 'male',
  city: ''
}

export const stepThreeInitial = {
  id: '',
  location: '',
  departmentCode: '',
  dateId: ''
}

export const stepsObject = { 
  1: 'stepOne', 
  2: 'stepTwo', 
  3: 'stepThree' 
};