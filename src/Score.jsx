const Score = (props) => {
  return (  
    <>
    <div>
      Score: {props.score.score}
    </div>
    <div>
      Date: {props.score.date}
    </div>
    </>
  );
}

export default Score;