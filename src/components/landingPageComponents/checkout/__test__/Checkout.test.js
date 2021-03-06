import Checkout from '../Checkout';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as redux from 'react-redux';
import {render, fireEvent, waitFor} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import TestRenderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";


const store = createStore(() => [], {}, applyMiddleware());

test("checks message if store is empty", async () => {

    const spy = jest.spyOn(redux, 'useSelector');
    spy.mockReturnValue([])

    const {getAllByText} = render(<BrowserRouter><Provider store={store}><Checkout/></Provider></BrowserRouter>);

    await waitFor(() => {
        expect(getAllByText('Your cart is empty :('));
    })
});

test("test if product is rendered", async () => {

    const spy = jest.spyOn(redux, 'useSelector');
    spy.mockReturnValue([{ 
        price:"6.00",
        name:"philadelphia",
        quantity:1
     }])


    const {getByText} = render(<BrowserRouter><Provider store={store}><Checkout/></Provider></BrowserRouter>);

    await waitFor(() => {
        expect(getByText('philadelphia'));
    })
});


test("check if + calls dispatch", async () => {
    const spy = jest.spyOn(redux, 'useSelector');
    spy.mockReturnValue([{ 
        price:"6.00",
        name:"philadelphia",
        quantity:1
     }]);

     store.dispatch = jest.fn();

     const {getByTestId} = render(<BrowserRouter><Provider store={store}><Checkout/></Provider></BrowserRouter>);

     await waitFor(() => {
         fireEvent.click(getByTestId("plus"));
     })
 
 
     expect(store.dispatch).toHaveBeenCalledTimes(1);
});

test("check if - calls dispatch", async () => {
    
    store.dispatch = jest.fn();

    const spy = jest.spyOn(redux, 'useSelector');
    spy.mockReturnValue([{ 
        price:"6.00",
        name:"philadelphia",
        quantity:2
     }]);

     const {getByTestId} = render(<Provider store={store}><BrowserRouter><Checkout/></BrowserRouter></Provider>);

     await waitFor(() => {
         fireEvent.click(getByTestId("minus"));
     })
 
    expect(store.dispatch).toHaveBeenCalledTimes(1);

});

test("subtotal has correct value", async () => {
    const spy = jest.spyOn(redux, 'useSelector');
    spy.mockReturnValue([{ 
        price:"6.00",
        name:"philadelphia",
        quantity:10
     }])

     const {getByText} = render(<Provider store={store}><BrowserRouter><Checkout/></BrowserRouter></Provider>);
     
     expect(getByText('Subtotal: 60.00$'));
});

test("matches snapshot", () => {
    const spy = jest.spyOn(redux, 'useSelector');
    spy.mockReturnValue([{ 
        price:"6.00",
        name:"philadelphia",
        quantity:2
     }]);

    const tree = TestRenderer.create(<Provider store={store}><BrowserRouter><Checkout/></BrowserRouter></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});