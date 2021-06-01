jest.unmock('axios');
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {CmsEmployeesSchedule} from '../CmsEmployeeSchedule';
import "@testing-library/jest-dom/extend-expect";
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import validEmployeeJson from '../__mocks__/validEmployee.json';
import validSchedulesJson from '../__mocks__/validSchedules.json';
import validShiftsJson from '../__mocks__/validShifts.json';
import TestRenderer from "react-test-renderer";

const store = createStore(() => [], {}, applyMiddleware());

const mock = new MockAdapter(axios);

test("checks if shifts are visible after api call", async () => {

    mock.onGet("http://localhost:8080/api/employee").reply(200, validEmployeeJson);
    mock.onGet("http://localhost:8080/api/schedule/2021/6").reply(200, validSchedulesJson);
    mock.onGet("http://localhost:8080/api/shift").reply(200, validShiftsJson);

    const {getAllByText} = render(<Provider store={store}><CmsEmployeesSchedule/></Provider>);

    await waitFor(() => {
        expect(getAllByText('day off'));
        expect(getAllByText('513 - 16:30-24:30'));
        expect(getAllByText('547 - 16:30-24:30'));
        expect(getAllByText('546 - 16:30-24:30'));
        expect(getAllByText('548 - 16:30-24:30'));
    })
});

test("matches snapshot", () => {
    const tree = TestRenderer.create(<Provider store={store}><CmsEmployeesSchedule/></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});
