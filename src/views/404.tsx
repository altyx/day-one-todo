import React from 'react';
import LinkPath from '../shared/components/link';

function NotFound() {
  return (
    <div className="App">
      <h1>La page n&apos;existe pas</h1>
      <LinkPath path="/">Retour à la liste des todos</LinkPath>
    </div>
  );
}

export default NotFound;
