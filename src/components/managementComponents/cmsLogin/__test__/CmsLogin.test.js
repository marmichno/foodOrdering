import {CmsLogin} from '../CmsLogin';
import {BrowserRouter} from 'react-router-dom';
import TestRenderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";

test("matches snapshot", () => {
    const tree = TestRenderer.create(<BrowserRouter><CmsLogin/></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
});