/**
 * Created by umerhassan on 6/9/19.
 */
const rootElement = document.getElementsByName('body');
console.log(rootElement);
const element = React.createElement('h1', { className: 'heading' }, 'Dummy Page');
ReactDOM.render(element, rootElement);