import {useState} from "react";
import styles from './question.module.css'
const Question = ({infoQuestion})=>{
    const [showInfo , setShowInfo] = useState(false);
    return (
        <div className={styles.question}>
            <header>
                <h4>
                    {infoQuestion.title}
                </h4>
                <button onClick={()=>setShowInfo(!showInfo)}>
                    {
                        showInfo ? '-' : '+'
                    }
                </button>
            </header>
            {
                showInfo &&
                    <p>
                        {infoQuestion.info}
                    </p>
            }
        </div>
    )
}
export default Question
