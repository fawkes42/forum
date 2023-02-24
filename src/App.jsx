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
          <Post author="Pedro" content="A real procrastinator" avatar="https://github.com/fawkes42.png" />
          <Post author="Emma" content="Advocate" avatar="https://i.pravatar.cc/150?img=1" />
          <Post author="Monique" content="Student" avatar="https://i.pravatar.cc/120?img=2" />
        </main>
      </div>
    </div>
  )
}

export default App
