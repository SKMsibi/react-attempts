import { createStore } from 'redux';
import reducer from './reducers';
import { compose } from 'redux';
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

export default createStore(reducer, enhancers)