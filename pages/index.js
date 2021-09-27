
import styles from '../styles/Home.module.css'
import Question from '../compoents/Question';
import data from '../data'
import { useState } from 'react'
const Home = ()=>{
  const [question , setQuestion] = useState(data);
  return (
    <div className={styles.Home}>
        <div className={styles.container}>
          {
            question.map(item=>{
              return <Question infoQuestion={item} key={item.id}/>
            })
          }
        </div>
    </div>
  )
}
export default Home;
