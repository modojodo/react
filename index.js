/**
 * Created by umerhassan on 6/9/19.
 */
const rootElement = document.getElementById('root');
ReactDOM.render(element, rootElement);
class Grid extends React.Component {
  render() {
    return (
      <div id="grid">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>
    )
  }
}

ReactDOM.render(<Grid/>, rootElement);