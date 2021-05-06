import {Delivery_details} from '../Delivery_details';
import {BrowserRouter, Router} from 'react-router-dom';
import {render, fireEvent, waitFor} from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createMemoryHistory } from "history";
import * as redux from 'react-redux';
import TestRenderer from "react-test-renderer";


const store = createStore(() => [], {}, applyMiddleware());

test("input is visible on deliveryType delviery", () => {

    const spy = jest.spyOn(redux, 'useSelector');
    spy.mockReturnValue([]);

    const history = createMemoryHistory();
    const location = {
        pathname: '/order/choose_delivery/delivery_details',
        state: {
            deliveryType:"delivery"
        }
    }
    history.push(location);


    const {getAllByText} = render(<BrowserRouter><Provider store={store}>
    <Delivery_details location={history.location}/>
    </Provider></BrowserRouter>);


    expect(getAllByText('City'));

});

test("Input isnt visible on delivery type pickUp", () => {

    const spy = jest.spyOn(redux, 'useSelector');
    spy.mockReturnValue([]);

    const history = createMemoryHistory();
    const location = {
        pathname: '/order/choose_delivery/delivery_details',
        state: {
            deliveryType:"pickUp"
        }
    }
    history.push(location);


    const {queryByTestId} = render(<BrowserRouter><Provider store={store}>
    <Delivery_details location={history.location}/>
    </Provider></BrowserRouter>);

    expect(queryByTestId("city")).toBeNull();

});

test("correct subtotal value", () => {
    const spy = jest.spyOn(redux, 'useSelector');
    spy.mockReturnValue([{ 
        price:"6.00",
        name:"philadelphia",
        quantity:5
     }]);

    const history = createMemoryHistory();
    const location = {
        pathname: '/order/choose_delivery/delivery_details',
        state: {
            deliveryType:"pickUp"
        }
    }
    history.push(location);


    const {getByText} = render(<BrowserRouter><Provider store={store}>
    <Delivery_details location={history.location}/>
    </Provider></BrowserRouter>);

    expect(getByText('Total amount: 30.00$'));

});

test("user may only choose one checkbox", async () => {
    const spy = jest.spyOn(redux, 'useSelector');
    spy.mockReturnValue([{ 
        price:"6.00",
        name:"philadelphia",
        quantity:5
     }]);

    const history = createMemoryHistory();
    const location = {
        pathname: '/order/choose_delivery/delivery_details',
        state: {
            deliveryType:"pickUp"
        }
    }
    history.push(location);

    const {getByTestId} = render(<BrowserRouter><Provider store={store}>
    <Delivery_details location={history.location}/>
    </Provider></BrowserRouter>);

    const paymentInAdvance = getByTestId("paymentInAdvance");
    const paymentOnDelivery = getByTestId("paymentOnDelivery");

    fireEvent.click(paymentOnDelivery);
    fireEvent.click(paymentInAdvance);

    await waitFor(() => {
        expect(paymentInAdvance).toHaveClass('active');
        expect(paymentOnDelivery).not.toHaveClass('active');
    });
});


test("matches snapshot", () => {
    const spy = jest.spyOn(redux, 'useSelector');
    spy.mockReturnValue([{ 
        price:"6.00",
        name:"philadelphia",
        quantity:5
     }]);

    const history = createMemoryHistory();
    const location = {
        pathname: '/order/choose_delivery/delivery_details',
        state: {
            deliveryType:"pickUp"
        }
    }
    history.push(location);

    const tree = TestRenderer.create(<BrowserRouter><Provider store={store}><Delivery_details location={history.location}/></Provider></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
});

test("matches snapshot2", () => {
    const spy = jest.spyOn(redux, 'useSelector');
    spy.mockReturnValue([{ 
        price:"6.00",
        name:"philadelphia",
        quantity:5
     }]);

    const history = createMemoryHistory();
    const location = {
        pathname: '/order/choose_delivery/delivery_details',
        state: {
            deliveryType:"delivery"
        }
    }
    history.push(location);

    const tree = TestRenderer.create(<BrowserRouter><Provider store={store}><Delivery_details location={history.location}/></Provider></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
});