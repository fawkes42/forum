import { Header } from "./components/Header"
import './globals.css'

import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

function App() {

  const posts = [
    {
      id: 1,
      author: {
        name: "Pedro Tozzi",
        avatarUrl: "https://github.com/fawkes42.png",
        role: "A real procrastinator"
      },
      publishedAt: "2021-03-01T10:00:00.000Z",
      content: [
        {
          type: "paragraph",
          text: "Hello guys, I'm Pedro Tozzi, a real procrastinator. I'm a software developer and I'm currently working at Agilus."
        },
        {
          type: "paragraph",
          text: "I'm a huge fan of Rick Astley and I'm always listening to his music."
        },
        {
          type: "link",
          text: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }
      ]
    },
    {
      id: 2,
      author: {
        name: "Maria Fernanda",
        avatarUrl: "https://i.pravatar.cc/150?img=1",
        role: "Advocate"
      },
      publishedAt: "2022-03-01T10:00:00.000Z",
      content: [
        {
          type: "paragraph",
          text: "My name is Maria Fernanda and I'm an advocate. I'm a huge fan of Rick Astley and I'm always listening to his music."
        },
      ]
    },
    {
      id: 3,
      author: {
        name: "Giovanna Lopes",
        avatarUrl: "https://i.pravatar.cc/420?img=42",
        role: "Marketing"
      },
      publishedAt: new Date() - 1000 * 60 * 60,
      content: [
        {
          type: "paragraph",
          text: "My name is Giovanna Lopes and I'm a marketing. I aint a huge fan of good music."
        },
      ]
    }
  ]

  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content}
              />
            )
          }
          )}
        </main>
      </div>
    </div>
  )
}

export default App
