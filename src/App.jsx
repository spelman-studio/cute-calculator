import { useState } from "react"
import "./App.css"

const themes = ["light", "dark"]

export default function App(){

const [theme,setTheme] = useState("light")
const [expression,setExpression] = useState("")
const [result,setResult] = useState("0")
const [history,setHistory] = useState([])
const [hearts,setHearts] = useState([])

const themeEmoji = {
  light:"🌞",
  dark:"🌙",
}

const themeColors = {
  light:"#BDE0FE",
  dark:"#B8C0FF",
}

function toggleTheme(){

  const next=(themes.indexOf(theme)+1)%themes.length
  const newTheme=themes[next]

  setTheme(newTheme)

  const meta=document.getElementById("theme-color-meta")

  if(meta){
    meta.setAttribute("content",themeColors[newTheme])
  }

}


function handleButton(val,e){

  createHeart(e)

  if(val==="C"){
    setExpression("")
    setResult("0")
    return
  }

  if(val==="="){
    try{
      const res=eval(expression)
      setResult(res)
      setHistory([{exp:expression,res},...history])
    }
    catch{
      setResult("error")
    }
    return
  }

  setExpression(expression+val)

}


function createHeart(e){

  const rect=e.target.getBoundingClientRect()

  const newHeart={
    id:Date.now(),
    x:rect.left+rect.width/2,
    y:rect.top
  }

  setHearts(h=>[...h,newHeart])

  setTimeout(()=>{
    setHearts(h=>h.filter(heart=>heart.id!==newHeart.id))
  },900)

}

return(

<div className={`app ${theme}`}>

<button className="theme-toggle" onClick={toggleTheme}>
{themeEmoji[theme]}
</button>

<div className="calculator">

<div className="display">

<div className="expression">
{expression || "0"}
</div>

<div className="result">
{result}
</div>

</div>


<div className="keypad">

{["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"].map(btn=>

<button
key={btn}
className="calc-button"
onClick={(e)=>handleButton(btn,e)}
>
{btn}
</button>

)}

<button
className="calc-button"
onClick={(e)=>handleButton("C",e)}
>
C
</button>

</div>


<div className="history">

{history.map((item,i)=>(

<div
key={i}
className="history-item"
>

{item.exp} = {item.res}

</div>

))}

</div>

</div>


{/* floating hearts */}

{hearts.map(h=>(

<span
key={h.id}
className="heart"
style={{
left:h.x,
top:h.y
}}
>
💖
</span>

))}

</div>

)

}