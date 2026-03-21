import "./Display.css"
import {useEffect, useState} from "react"

function Display({expression,result}){

  const [animate,setAnimate] = useState(false)

  useEffect(()=>{

    setAnimate(true)

    const t = setTimeout(()=>{
      setAnimate(false)
    },350)

    return ()=>clearTimeout(t)

  },[result])


  return(

    <div className="display">

      <div className="display-expression">
        {expression}
      </div>

      <div
        className={
          animate
            ? "display-result result-pop"
            : "display-result"
        }
      >
        {result}
      </div>

    </div>

  )

}

export default Display