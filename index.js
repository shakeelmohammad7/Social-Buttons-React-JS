const Button = (props) => {
  //  Write your code here.
  const { className, btnText } = props;
  return <button className={`button ${className}`}>{btnText}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="btn-container">
      <Button className="like-btn" btnText="Like" />
      <Button className="comment-btn" btnText="Comment" />
      <Button className="share-btn" btnText="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
