jest.unmock('axios');
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {CmsProductsManagement} from '../CmsProductsManagement';
import "@testing-library/jest-dom/extend-expect";
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import mockedAxios from 'axios';
import validProductsJson from '../__mocks__/validProducts.json';
import validGroupsJson from '../__mocks__/validGroups.json';
import TestRenderer from "react-test-renderer";


const store = createStore(() => [], {}, applyMiddleware());
const mock = new MockAdapter(axios);

test("checks if products are visible after api call", async () => {

    mock.onGet("http://localhost:8080/api/product").reply(200, validProductsJson);
    mock.onGet("http://localhost:8080/api/group").reply(200, validGroupsJson);

    const {getAllByText} = render(<Provider store={store}><CmsProductsManagement/></Provider>);

    await waitFor(() => {
        expect(getAllByText('philadelphia'));
        expect(getAllByText('rice,nori,salmon,philadelphia cream'));
        expect(getAllByText('6.00$'));
    })
});

test("checks if products groups are visible after api call", async () => {

    mock.onGet("http://localhost:8080/api/product").reply(200, validProductsJson);
    mock.onGet("http://localhost:8080/api/group").reply(200, validGroupsJson);

    const {getAllByText, getByTestId} = render(<Provider store={store}><CmsProductsManagement/></Provider>);

    await waitFor(() => {
        fireEvent.click(getByTestId("groupSelect"));
    })

    await waitFor(() => {
        expect(getAllByText('sushi rolls'));
        expect(getAllByText('prawns'));
        expect(getAllByText('others'));
        expect(getAllByText('sets'));
    })
});

test("checks if product is visible/isnt visible after search", async () => {

    mock.onGet("http://localhost:8080/api/product").reply(200, validProductsJson);
    mock.onGet("http://localhost:8080/api/group").reply(200, validGroupsJson);

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
