//import { useState } from 'react'
import { Post, PostType } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import './global.css'
import styles from './App.module.css'

const posts: PostType[] = [
  {
    id:1,
    author:{
      avatarUrl: 'https://avatars.githubusercontent.com/u/165072062?v=4',
      name: 'Vitória Graff',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph' ,content: 'Fala galeraa 👋'},
      {type:'paragraph' , content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link' ,content:'👉 jane.design/doctorcare'}    
    ],
    publishedAt: new Date('2024-11-21 13:06:30'),
    },
    {
      id:2, 
      author:{
        avatarUrl: 'https://avatars.githubusercontent.com/u/165072062?v=4',
        name: 'Vitória Graff',
        role: 'Web Developer'
      },
      content: [
        {type: 'paragraph' ,content: 'Fala galeraa 👋'},
        {type:'paragraph' , content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link' ,content:'👉 jane.design/doctorcare'}    
      ],
      publishedAt: new Date('2024-11-21 13:06:30'),
      }

];
  

export default function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return(
              <Post 
                key={post.id}
                post= {post}
             />
            )
          })}
        </main>
      </div>
    </div>
  )
}

