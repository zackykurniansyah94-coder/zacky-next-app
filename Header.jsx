'use client'
import Image from 'next/image'
import DarkToggle from './DarkToggle'
export default function Header(){
  return (
    <header className="card" style={{marginBottom:20}}>
      <div style={{display:'flex',alignItems:'center',gap:16}}>
        <Image src="/avatar.jpg" alt="avatar" width={88} height={88} className="avatar" />
        <div>
          <h2 style={{margin:0}}>ZACKY KURNIANSYAH</h2>
          <p style={{margin:0}}>IT Testing • System Analysis • Application Support</p>
          <div style={{marginTop:8}}>
            <a href="mailto:Zackykurniansyah09@gmail.com">Email</a> • <a href="https://linkedin.com/in/Zackykurniansyah-8378a5155/" target="_blank">LinkedIn</a>
          </div>
        </div>
        <div style={{marginLeft:'auto'}}><DarkToggle /></div>
      </div>
    </header>
  )
}
