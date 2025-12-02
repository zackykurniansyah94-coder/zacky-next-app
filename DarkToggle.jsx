'use client'
import { useEffect, useState } from 'react'
export default function DarkToggle(){
  const [dark, setDark] = useState(false);
  useEffect(()=> {
    const t = localStorage.getItem('theme');
    if(t === 'dark'){ document.documentElement.classList.add('dark'); setDark(true); }
    const els = document.querySelectorAll('.reveal');
    setTimeout(()=> els.forEach(e=>e.classList.add('show')),120);
  },[]);
  function toggle(){
    if(document.documentElement.classList.contains('dark')){
      document.documentElement.classList.remove('dark'); localStorage.setItem('theme','light'); setDark(false);
    } else {
      document.documentElement.classList.add('dark'); localStorage.setItem('theme','dark'); setDark(true);
    }
  }
  return <button onClick={toggle} style={{padding:8,borderRadius:8}}>{dark ? 'Light' : 'Dark'}</button>
}
