import {ContactUs} from '../ContactUs';
import TestRenderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";

test("matches snapshot", () => {
    const tree = TestRenderer.create(<ContactUs/>).toJSON();
    expect(tree).toMatchSnapshot();
});