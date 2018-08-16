import { createStore } from 'redux';
import reducer from './reducers';
import { compose } from '../../../../.cache/typescript/3.0/node_modules/redux';
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

export default createStore(reducer, enhancers)