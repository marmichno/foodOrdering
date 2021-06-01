jest.unmock('axios');
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {CmsEmployeesRoles} from '../CmsEmployeesRoles';
import "@testing-library/jest-dom/extend-expect";
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import validEmployeesRolesJson from '../__mocks__/validEmployeesRoles.json';
import TestRenderer from "react-test-renderer";

const store = createStore(() => [], {}, applyMiddleware());

const mock = new MockAdapter(axios);

test("checks if employees roles are visible after api call", async () => {

    mock.onGet("http://localhost:8080/api/role").reply(200, validEmployeesRolesJson);

    const {getAllByText} = render(<Provider store={store}><CmsEmployeesRoles/></Provider>);

    await waitFor(() => {
        expect(getAllByText('sushi chef'));
        expect(getAllByText('123'));
    })
});

test("matches snapshot", () => {
    const tree = TestRenderer.create(<Provider store={store}><CmsEmployeesRoles/></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});
