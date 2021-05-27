import {CmsProductsManagement} from '../CmsProductsManagement';
import "@testing-library/jest-dom/extend-expect";
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import mockedAxios from 'axios';
import axios from 'axios';
import validProductsJson from '../__mocks__/validProducts.json';
import TestRenderer from "react-test-renderer";


const store = createStore(() => [], {}, applyMiddleware());

test("checks if products are visible after api call", async () => {
    mockedAxios.get.mockResolvedValueOnce({data: validProductsJson});

    const {getAllByText} = render(<Provider store={store}><CmsProductsManagement/></Provider>);

    await waitFor(() => {
        expect(getAllByText('philadelphia'));
        expect(getAllByText('rice,nori,salmon,philadelphia cream'));
        expect(getAllByText('6.00$'));
    })
});

test("checks if product is visible/isnt visible after search", async () => {
    mockedAxios.get.mockResolvedValueOnce({data: validProductsJson});

    const {getAllByText, findByTestId} = render(<Provider store={store}><CmsProductsManagement/></Provider>);

    const input = await findByTestId('searchbar');

    await waitFor(() =>{
        fireEvent.change(input, {target: { value:"philadelphia" }});
    })

    const prawns = screen.queryByText('prawn');

    await waitFor(() => {
        expect(getAllByText('philadelphia'));
        expect(getAllByText('rice,nori,salmon,philadelphia cream'));
        expect(getAllByText('6.00$'));
        expect(prawns).toBeNull();
    })
});

test("matches snapshot", () => {
    const tree = TestRenderer.create(<Provider store={store}><CmsProductsManagement/></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});
