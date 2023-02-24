import { Header } from "./components/Header"
import './globals.css'

import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Pedro" content="A real procrastinator" />
          <Post author="Pedro" content="A real procrastinator" />
          <Post author="Pedro" content="A real procrastinator" />
        </main>
      </div>
    </div>
  )
}

export default App
