import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as Components from './components';

export const App: React.FC = () => {
  const [headerText, setHeaderText] = React.useState<string>('');

  return (
    <div className="App">
      <Components.Selectors onHeaderTextChange={setHeaderText}/>
    </div>
  );
}
