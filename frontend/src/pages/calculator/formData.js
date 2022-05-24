const formData = [
  {
    id: 'radio1',
    type: 'radioInput',
    title: 'Wybierz rodzaj oprocentowania',
    name: 'interest_type',
    value1: 'fixed',
    value2: 'WIBOR',
    value1Name: 'oprocentowanie stałe',
    value2Name: 'oprocentowanie zmienne',
  },
  {
    id: 'radio2',
    type: 'radioInput',
    title: 'Wybierz rodzaj rat',
    name: 'installment_type',
    value1: 'descending',
    value2: 'fixed',
    value1Name: 'raty malejące',
    value2Name: 'raty stałe',
  },
  {
    id: 'input1',
    type: 'valueInput',
    title: 'Wprowadź kwotę kredytu',
    name: 'credit_amount',
    min: 0,
    max: 1000000,
    step: 50000,
    addonAfter: 'zł',
    marks: { 0: '0', 1000000: '1 000 000' },
  },
  {
    id: 'input2',
    type: 'valueInput',
    title: 'Podaj wkład własny',
    name: 'down_payment',
    min: 0,
    max: 500000,
    step: 10000,
    addonAfter: 'zł',
    marks: { 0: '0', 500000: '500 000' },
  },
  {
    id: 'input3',
    type: 'valueInput',
    title: 'Wybierz długość trwania kredytu',
    name: 'loan_term',
    min: 0,
    max: 35,
    step: 5,
    addonAfter: 'lat',
    marks: { 0: '0', 35: '35' },
  },
  {
    id: 'input4',
    type: 'valueInput',
    title: 'Wprowadź oprocentowanie',
    name: 'interest_rate',
    min: 0,
    max: 20,
    step: 0.1,
    addonAfter: '%',
    marks: { 0: '0', 20: '20' },
  },
  {
    id: 'input5',
    type: 'valueInput',
    title: 'Wprowadź prowizję',
    name: 'commission',
    min: 0,
    max: 10,
    step: 0.1,
    addonAfter: '%',
    marks: { 0: '0', 10: '10' },
  },
];

export default formData;
