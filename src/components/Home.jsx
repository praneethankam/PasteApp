import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router';
import { addtopastes,updatetopastes } from '../redux/pasteSlice';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
  const [title,setTitle] = useState('');
  const [value,setValue] = useState('');
  const [searchParams,setSearchParams] = useSearchParams();
  const pasteId = searchParams.get('pasteId')
  const dispatch = useDispatch();
  const pastes = useSelector((state)=>
    state.paste.pastes
  );
  useEffect(()=>{
    if (pasteId){
      const paste = pastes.find((item)=>item._id===pasteId)
      console.log(pastes)
      setTitle(paste.title)
      setValue(paste.value)
    }
   
  },[pasteId])

function create() {
  if (value.trim() && title.trim()) {
    const paste = {
      title: title.trim(),
      value: value.trim(),
      _id: pasteId || Date.now().toString(),
      CreatedAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updatetopastes(paste)); // update
    } else {
      dispatch(addtopastes(paste)); // create
    }

    // Reset fields
    setTitle('');
    setValue('');
    setSearchParams({});
  } 
  else {
   
    toast.error("Don't leave any field empty");
  }
}


return (
  <div className="bg-gray-800 flex-grow flex items-center justify-center p-6">
    <div className="w-full h-full min-h-[500px] flex flex-col  max-w-3xl bg-gray-700 rounded-2xl shadow-xl p-6 space-y-4">
      
      <input
        type="text"
        placeholder="Enter Title Here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 rounded-md bg-gray-600 text-white placeholder-gray-300 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />

      <textarea
        value={value}
        placeholder="Enter Content"
        onChange={(e) => setValue(e.target.value)}
        className="w-full flex-grow p-3 rounded-md bg-gray-600 text-white placeholder-gray-300 border border-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />

      <button
        onClick={create}
        className="w-full bg-cyan-600 text-white py-2 rounded-md hover:bg-cyan-700 transition duration-200"
      >
        {pasteId ? "Update" : "Create"}
      </button>
    </div>
  </div>
);


}

export default Home
