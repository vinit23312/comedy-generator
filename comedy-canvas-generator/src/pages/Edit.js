import React,{useState, createRef} from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useSearchParams } from 'react-router-dom';
import Text from '../components/Text';
import {exportComponentAsJPEG} from "react-component-export-image";

const EditPage=()=>{
    const [params] = useSearchParams();
    console.log(params.get('url'));
    const memeRef= createRef();
    const[count,setCount] =useState(0);
    const addText=()=>{
          setCount(count+1)
    }
     return (
     <div>
     <div ref={memeRef} className='meme mt-5 mb-5'>
        <img src={params.get('url')} width="250px"/>
    
            {Array(count).fill(0).map((e)=>(<Text/>))}
        
     </div>
      <Button onClick={addText}>Add Text</Button>
      <Button variant="success" onClick={e=>{exportComponentAsJPEG(memeRef)}}>Save</Button>

     </div>
     )
}
export default EditPage;