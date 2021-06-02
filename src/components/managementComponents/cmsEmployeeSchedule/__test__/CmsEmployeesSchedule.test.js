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

test("checks if employees are visible after api call", async () => {

    mock.onGet("http://localhost:8080/api/employee").reply(200, validEmployeeJson);
    mock.onGet("http://localhost:8080/api/schedule/2021/6").reply(200, validSchedulesJson);
    mock.onGet("http://localhost:8080/api/shift").reply(200, validShiftsJson);

    const {getAllByText} = render(<Provider store={store}><CmsEmployeesSchedule/></Provider>);

    await waitFor(() => {
        expect(getAllByText('Marcin'));
    })
});

test("checks if shift could be added to schedule", async () => {

    mock.onGet("http://localhost:8080/api/employee").reply(200, validEmployeeJson);
    mock.onGet("http://localhost:8080/api/schedule/2021/6").reply(200, validSchedulesJson);
    mock.onGet("http://localhost:8080/api/shift").reply(200, validShiftsJson);
    mock.onPost("http://localhost:8080/api/schedule").reply(200);

    const {getAllByText, getByTestId} = render(<Provider store={store}><CmsEmployeesSchedule/></Provider>);

    await waitFor(() => {
        fireEvent.click(getByTestId("shift1"));
    });

    await waitFor(() => {
        fireEvent.click(getByTestId("numOfDay9_482"));
    });

    await waitFor(() => {
        expect(mock.history.post[0].data).toBe(JSON.stringify({"date":"2021-06-10","shiftEntity":{"id":546},"employeeEntity":{"id":482}}));
    })
    
    mock.resetHistory();
});

test("checks if shift could be deleted from schedule", async () => {

    mock.onGet("http://localhost:8080/api/employee").reply(200, validEmployeeJson);
    mock.onGet("http://localhost:8080/api/schedule/2021/6").reply(200, validSchedulesJson);
    mock.onGet("http://localhost:8080/api/shift").reply(200, validShiftsJson);
    mock.onPost("http://localhost:8080/api/schedule").reply(200);
    mock.onDelete("http://localhost:8080/api/schedule/609").reply(200);

    const {getAllByText, getByTestId} = render(<Provider store={store}><CmsEmployeesSchedule/></Provider>);

    await waitFor(() => {
        fireEvent.click(getByTestId("dayOff"));
    })

    await waitFor(() => {
        fireEvent.click(getByTestId("numOfDay0_482"));
    });

    await waitFor(() => {
        expect(mock.history.delete[0].url).toBe('http://localhost:8080/api/schedule/609');
    });
});


test("matches snapshot", () => {
    const tree = TestRenderer.create(<Provider store={store}><CmsEmployeesSchedule/></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});
