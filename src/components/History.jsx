function History({ history }) {

  return (

    <div className="history">

      <h3>History</h3>

      {history.length === 0 && <p>No calculations yet</p>}

      {history.map((item, index) => (
        <div key={index} className="history-item">
          {item}
        </div>
      ))}

    </div>

  );
}

export default History;