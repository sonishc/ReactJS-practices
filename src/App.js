import React from 'react';
import './App.css';

function App() {
  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  const O1 = {
    type: 'p',
    props: {
      key: 1,
      children: 'Yep'
    }
  }
  let welcome1 = React.createElement(O1.type, O1.props)

  const O2 = {
    type: 'button',
    props: {
      key: 2,
      children: 'Yep'
    },
  }
  let welcome2 = React.createElement(O2.type, O2.props)

  const O3 = {
    type: 'div',
    props: {
      children: [welcome1, welcome2]
    },
  }
  let allInOne = React.createElement(O3.type, O3.props)

  const user = {
    firstName: "Serhii",
    lastName: "Onishchuk"
  };

  return (
    <div className="App">
      {formatName(user)}
      { allInOne }
    </div>
  );
}

export default App;
