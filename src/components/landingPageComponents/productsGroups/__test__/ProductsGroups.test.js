import ProductsGroups from '../../productsGroups/ProductsGroups';
import validProductGroupJson from '../__mocks__/validProductGroup.json';
import mockedAxios from 'axios';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import {render, fireEvent, waitFor} from '@testing-library/react';
import TestRenderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import React from "react";


const store = createStore(() => [], {}, applyMiddleware());

test("checks if product group is visible after api get call", async () => {
    mockedAxios.get.mockResolvedValueOnce({data: validProductGroupJson});

    const {getByTestId, getByText} = render(<Provider store={store}><ProductsGroups/></Provider>);

    await waitFor(() => {
        expect(getByText('sushi rolls'));
    })
});

test("check if other product groups than default are showing after onClick event", async() => {
    mockedAxios.get.mockResolvedValueOnce({data: validProductGroupJson});

    const {getByTestId, getByText} = render(<Provider store={store}><ProductsGroups/></Provider>);

    fireEvent.click(getByTestId('dropDown'))

    await waitFor(() =>{
        expect(getByText('prawns'));
    })
});

test("check if produdct group is changed after click on other group from dropdown", async() => {
    mockedAxios.get.mockResolvedValueOnce({data: validProductGroupJson});

    const {getByTestId} = render(<Provider store={store}><ProductsGroups/></Provider>);

    fireEvent.click(getByTestId('dropDown'));

    await waitFor(() =>{
        fireEvent.click(getByTestId('group1'));
    });

    await waitFor(() =>{
        expect(getByTestId('selected').textContent).toBe("prawns");
    })
});

test("Initial render should call dispatch one time after api call", async() => {
    mockedAxios.get.mockResolvedValueOnce({data: validProductGroupJson});

    const {getByTestId} = render(<Provider store={store}><ProductsGroups/></Provider>);

    store.dispatch = jest.fn();

    await waitFor(() =>{
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    })
});

test("On product group click dispatch should be called", async() => {
    mockedAxios.get.mockResolvedValueOnce({data: validProductGroupJson});

    const {getByTestId} = render(<Provider store={store}><ProductsGroups/></Provider>);

    store.dispatch = jest.fn();

    fireEvent.click(getByTestId('dropDown'));

    await waitFor(() =>{
        fireEvent.click(getByTestId('group1'));
    });

    await waitFor(() =>{
        expect(store.dispatch).toHaveBeenCalledTimes(2);
    })
});

test("matches snapshot", () => {
    const tree = TestRenderer.create(<Provider store={store}><ProductsGroups/></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});