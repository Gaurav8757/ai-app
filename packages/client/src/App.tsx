// import { useState } from 'react'
import { useEffect, useState } from 'react';
import './App.css';
import { Button } from './components/ui/button';

function App() {
   const [message, setMessage] = useState('');

   useEffect(() => {
      fetch('/api/hello')
         .then((resp) => resp.json())
         .then((data) => setMessage(data.message));
   }, []);

   return (
      <div className="flex justify-center">
         <p className="font-bold p-4 text-3xl">{message}</p>
         <Button variant="destructive" className="cursor-pointer">
            Click Me
         </Button>
      </div>
   );
}

export default App;
