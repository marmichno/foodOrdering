import Products from '../Products';
import validProductsJson from '../__mocks__/validProducts.json';
import mockedAxios from 'axios';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import {render, fireEvent, waitFor} from '@testing-library/react';
import TestRenderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";

const store = createStore(() => [], {}, applyMiddleware());

test("checks if products are visible after api call", async () => {
    mockedAxios.get.mockResolvedValueOnce({data: validProductsJson});

    const {getAllByText} = render(<Provider store={store}><Products/></Provider>);

    await waitFor(() => {
        expect(getAllByText('philadelphia'));
        expect(getAllByText('rice,nori,salmon,philadelphia cream'));
        expect(getAllByText('~ 6.00'));
    })
});

test("check if button calls dispatch", async () => {
    mockedAxios.get.mockResolvedValueOnce({data: validProductsJson});

    const {getByTestId} = render(<Provider store={store}><Products/></Provider>);

    store.dispatch = jest.fn();

    await waitFor(() => {
        fireEvent.click(getByTestId("addToCartBtn0"));
    })


    expect(store.dispatch).toHaveBeenCalledTimes(1);
});

test("matches snapshot", () => {
    const tree = TestRenderer.create(<Provider store={store}><Products/></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});
