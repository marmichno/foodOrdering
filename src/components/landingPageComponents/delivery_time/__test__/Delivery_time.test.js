import {DeliveryTime} from '../Delivery_time';
import {BrowserRouter} from 'react-router-dom';
import TestRenderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";

test("matches snapshot", () => {
    const tree = TestRenderer.create(<BrowserRouter><DeliveryTime/></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
});