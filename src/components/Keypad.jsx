import Button from "./Button";

const buttons = [
  "7","8","9","/",
  "4","5","6","*",
  "1","2","3","-",
  "0",".","=","+",
  "C"
];

function Keypad({ onClick }) {

  return (

    <div className="keypad">

      {buttons.map((btn, index) => (
        <Button
          key={index}
          value={btn}
          onClick={onClick}
        />

      ))}

    </div>

  );
}

export default Keypad;