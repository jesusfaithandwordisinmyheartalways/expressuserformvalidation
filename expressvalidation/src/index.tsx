


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './pages/form';
import Submit from './pages/submit';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const MainApp: React.FC = () => {
      return (
        <>
          <Router>
            <Routes>
              <Route path='/' element={<Form />}/>
              <Route path='/submit' element={<Submit />}/>
            </Routes>
          </Router>
        
        </>
      )
}
root.render( <MainApp />);


