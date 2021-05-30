import {CmsProductGroups} from '../CmsProductGroups';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import mockedAxios from 'axios';
import validGroupsJson from '../__mocks__/validGroups.json';
import TestRenderer from "react-test-renderer";
import {render, fireEvent, waitFor, screen} from '@testing-library/react';

const store = createStore(() => [], {}, applyMiddleware());

test("checks if groups are visible after api call", async () => {
    mockedAxios.get.mockResolvedValueOnce({data: validGroupsJson});

    const {getAllByText} = render(<Provider store={store}><CmsProductGroups/></Provider>);

    await waitFor(() => {
        expect(getAllByText('sushi rolls'));
        expect(getAllByText('prawns'));
        expect(getAllByText('others'));
        expect(getAllByText('sets'));
    })
});

test("matches snapshot", () => {
    const tree = TestRenderer.create(<Provider store={store}><CmsProductGroups/></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});
