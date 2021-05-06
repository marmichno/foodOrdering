import {Choose_delivery} from '../Choose_delivery';
import {BrowserRouter} from 'react-router-dom';
import TestRenderer from "react-test-renderer";

test("matches snapshot", () => {
    const tree = TestRenderer.create(<BrowserRouter><Choose_delivery/></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
});