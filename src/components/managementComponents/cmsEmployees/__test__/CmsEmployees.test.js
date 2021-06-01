jest.unmock('axios');
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {CmsEmployees} from '../CmsEmployees';
import "@testing-library/jest-dom/extend-expect";
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import validEmployeesJson from '../__mocks__/validEmployees.json';
import validEmployeesRolesJson from '../__mocks__/validEmployeesRoles.json';
import TestRenderer from "react-test-renderer";

const store = createStore(() => [], {}, applyMiddleware());

const mock = new MockAdapter(axios);

test("checks if employees are visible after api call", async () => {

    mock.onGet("http://localhost:8080/api/employee").reply(200, validEmployeesJson);
    mock.onGet("http://localhost:8080/api/role").reply(200, validEmployeesRolesJson);

    const {getAllByText} = render(<Provider store={store}><CmsEmployees/></Provider>);

    await waitFor(() => {
        expect(getAllByText('Dyl'));
        expect(getAllByText('123234123'));
        expect(getAllByText('sushi chef'));
        expect(getAllByText('asd'));
    })
});

test("checks if employees roles are visible after api call", async () => {

    mock.onGet("http://localhost:8080/api/role").reply(200, validEmployeesRolesJson);
    mock.onGet("http://localhost:8080/api/employee").reply(200, validEmployeesJson);

    const {getAllByText} = render(<Provider store={store}><CmsEmployees/></Provider>);

    await waitFor(() => {
        expect(getAllByText('sushi chef'));
    })
});

test("matches snapshot", () => {
    const tree = TestRenderer.create(<Provider store={store}><CmsEmployees/></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});
