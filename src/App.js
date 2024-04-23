import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <RegistrationForm />
      <div class="ripple-background">
  <div class="circle xxlarge shade1"></div>
  <div class="circle xlarge shade2"></div>
  <div class="circle large shade3"></div>
  <div class="circle medium shade4"></div>
  <div class="circle small shade5"></div>
</div>

  {/* <footer>
    <p>© By Aditya Sharma</p>
  </footer> */}
    </div>
  );
};

export default App;
