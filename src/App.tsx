import React from 'react';
import './App.css';
import * as Components from './components';

export const App: React.FC = () => {
  const [headerText, setHeaderText] = React.useState<string>('');
  const [headerFontSize, setHeaderFontSize] = React.useState<string>('');

  return (
    <div className="main">
      <Components.Selectors onTextChange={setHeaderText} onFontSizeChange={setHeaderFontSize} type='Header' />
    </div>
  );
}
