const decks = {
  React: {
    id: 'React',
    title: 'React',
    cards: {
      '001': {
        id: '001',
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      '002': {
        id: '002',
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    },
    results: {
      '2020-02-20': {
        correct: ['001'],
        incorrect: ['002']
      }
    }
  },
  JavaScript: {
    id: 'JavaScript',
    title: 'JavaScript',
    cards: {
      '003': {
        id: '003',
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.'
      }
    },
    results: {
      '2020-02-20': {
        correct: ['003'],
        incorrect: []
      }
    }
  }
};

export default decks;
