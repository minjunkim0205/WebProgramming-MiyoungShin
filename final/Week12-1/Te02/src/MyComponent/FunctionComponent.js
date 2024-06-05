const FunctionComponent = ({title, content, id, children}) => {
  return (
    <div style={{ border: "1px solid blue", margin: "10px", padding: "10px", width: "500px"}}>
      <div style={{ color: "green" }}>
        <h2>title = {title}</h2>
        <h2>content = {content}</h2>
        <h2>id = {id}</h2>
        <h2>{children ? children : "children 속성 없음"}</h2>
      </div>
    </div>
  );
}
export default FunctionComponent;