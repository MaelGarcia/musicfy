import React, {useState} from 'react';
import { Button } from 'semantic-ui-react';
import {getAuth,onAuthStateChanged} from "firebase/auth";
export default function App() {
  const [user, setUser] = useState(undefined);
  const auth = getAuth;
  console.log(onAuthStateChanged);
  onAuthStateChanged(auth,(user)=>{
    console.log(user);
    setUser(user)
  })
  if(user === undefined) return null;

  return (
    <div>
      <h1>hola Musicfy</h1>

      <Button primary>Click Here</Button>
      <Button secondary>Click Here</Button>
    </div>
  )
}
