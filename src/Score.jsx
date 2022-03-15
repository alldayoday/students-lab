const Score = (props) => {
  return (  
    <>
    <div className="list-group-item">
      Score: {props.score.score}
      <div></div>
      Date: {props.score.date}
    </div>
    </>
  );
}

export default Score;