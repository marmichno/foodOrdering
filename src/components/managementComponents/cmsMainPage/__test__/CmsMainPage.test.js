import {CmsMainPage} from '../CmsMainPage';
import TestRenderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


const store = createStore(() => [], {}, applyMiddleware());

test("matches snapshot", () => {
    const tree = TestRenderer.create(<Provider store={store}><CmsMainPage/></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});