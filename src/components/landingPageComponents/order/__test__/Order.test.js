import {Order} from '../Order';
import TestRenderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(() => [], {}, applyMiddleware());

test("matches snapshot", () => {
    const tree = TestRenderer.create(<Provider store={store}><Order/></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});