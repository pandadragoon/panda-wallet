'use strict'

const data = {
  cards: [{
    id: 0,
    type: 'visa',
    number: 1234567825622562,
    validThru: '12/17',
    transactions: [{
      action: 'debit',
      type: 'Electronics',
      number: '#343223',
      date: new Date("July 12, 2015"),
      amount: '650.00',
      description: 'Apple iPhone6, 6g GB'
    }, {
      action: 'credit',
      type: 'Payment',
      number: '#343212',
      date: new Date("July 11, 2015"),
      amount: '900.00',
      description: 'Funds Added'
    }, {
      action: 'debit',
      type: '',
      number: '#343566',
      date: new Date("July 11, 2015"),
      amount: '84.96',
      description: 'Energy Bill'
    }, {
      action: 'debit',
      type: 'Food&Health',
      number: '#34365',
      date: new Date("July 11, 2015"),
      amount: '122.75',
      description: 'Mega Image SRL'
    }, {
      action: 'debit',
      type: '',
      number: '#343253',
      date: new Date("July 09, 2015"),
      amount: '200.00',
      description: 'ATM DV24'
    }, {
      action: 'debit',
      type: 'Gas',
      number: '#343279',
      date: new Date("July 09, 2015"),
      amount: '650.00',
      description: 'Apple iPhone6, 6g GB'
    }]
  }, {
    id: 1,
    type: 'amex',
    number: 123456789121001,
    validThru: '07/19',
    transactions: [{
      action: 'debit',
      type: 'Electronics',
      number: '#343223',
      date: new Date("July 12, 2015"),
      amount: '650.00',
      description: 'Apple iPhone6, 6g GB'
    }, {
      action: 'credit',
      type: 'Payment',
      number: '#343212',
      date: new Date("July 11, 2015"),
      amount: '900.00',
      description: 'Funds Added'
    }, {
      action: 'debit',
      type: '',
      number: '#343566',
      date: new Date("July 11, 2015"),
      amount: '84.96',
      description: 'Energy Bill'
    }, {
      action: 'credit',
      type: 'Payment',
      number: '#343212',
      date: new Date("July 11, 2015"),
      amount: '900.00',
      description: 'Funds Added'
    }, {
      action: 'debit',
      type: 'Gas',
      number: '#343279',
      date: new Date("July 09, 2015"),
      amount: '650.00',
      description: 'Apple iPhone6, 6g GB'
    }]
  }, {
    id: 2,
    type: 'mastercard',
    number: 1234567883358335,
    validThru: '09/17',
    transactions: [{
      action: 'debit',
      type: 'Electronics',
      number: '#343223',
      date: new Date("July 12, 2015"),
      amount: '650.00',
      description: 'Apple iPhone6, 6g GB'
    }, {
      action: 'credit',
      type: 'Payment',
      number: '#343212',
      date: new Date("July 11, 2015"),
      amount: '900.00',
      description: 'Funds Added'
    }, {
      action: 'debit',
      type: '',
      number: '#343253',
      date: new Date("July 09, 2015"),
      amount: '200.00',
      description: 'ATM DV24'
    }, {
      action: 'debit',
      type: 'Gas',
      number: '#343279',
      date: new Date("July 09, 2015"),
      amount: '650.00',
      description: 'Apple iPhone6, 6g GB'
    }]
  }, ]
}