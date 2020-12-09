import React, {Suspense, lazy} from 'react';
import './App.css'

const Todo = lazy(() => import('./Todos/Index'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}> 
        <Todo />
    </Suspense>
  )
}
export default App;
