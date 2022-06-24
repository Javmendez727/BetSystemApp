import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import configureStore from "redux-mock-store";
import { fireEvent } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import MatchModule from './MatchModule';
import { Provider } from 'react-redux';
import { store } from '../../../../store/store';
import { EventType } from '../../../../types/get_events_data_response';



describe('MatchModule component', () => {
    const mockEventsArray: EventType = {
        id: "EVT_1",
		name: "Real Madrid vs Barcelona",
		markets: [
			{
				id: "MKT_1",
				name: "Team to Win",
				selections: [
					{
						id: "SEL_1",
						name: "Real Madrid",
						price: 1.23,
                        marketType: 1,
					},
					{
						id: "SEL_2",
						name: "Barcelona",
						price: 2.05,
                        marketType: 1,
					}
				]
			},
			{
				id: "MKT_2",
				name: "Player to Score First",
				selections: [
					{
						id: "SEL_3",
						name: "Ronaldo",
						price: 1.15,
                        marketType: 2,

					},
					{
						id: "SEL_4",
						name: "Messi",
						price: 1.30,
                        marketType: 2,
					},
					{
						id: "SEL_5",
						name: "Bale",
						price: 1.35,
                        marketType: 2,
					}
				]
			}
		]
    }

    beforeEach(() => {
        window.open = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should render the component', () => {
        render(
            <Provider store={store}>
                <MatchModule matchInfo={mockEventsArray}/> 
            </Provider> 
        );
        const boxElement = screen.getByTestId('container-match-id');
        expect(boxElement).toBeInTheDocument();
    });

    test('should remove item from selected list when its pressed twice', () => {
    
        render(
            <Provider store={store}>
                <MatchModule matchInfo={mockEventsArray}/> 
            </Provider> 
        );
        const fisrtButtonElement = screen.getByTestId('first-button-id');
        fireEvent.click(fisrtButtonElement)
        fireEvent.click(fisrtButtonElement)
        expect(store.getState().app.selectedList).toHaveLength(0);

        const middleButtonElement = screen.getByTestId('middle-button-id');
        fireEvent.click(middleButtonElement)
        fireEvent.click(middleButtonElement)
        expect(store.getState().app.selectedList).toHaveLength(0);

        const endButtonElement = screen.getByTestId('last-button-id');
        fireEvent.click(endButtonElement)
        fireEvent.click(endButtonElement)
        expect(store.getState().app.selectedList).toHaveLength(0);

    });

    test('should change the colour of the buttons at ToWin section when are pressed', () => {
    
        render(
            <Provider store={store}>
                <MatchModule matchInfo={mockEventsArray}/> 
            </Provider> 
        );
      const localButtonElement = screen.getByTestId('local-button-id');
      const visitButtonElement = screen.getByTestId('visit-button-id');

      fireEvent.click(localButtonElement)
      expect(localButtonElement).toHaveClass('MuiButton-containedSuccess')
      fireEvent.click(localButtonElement)
      expect(localButtonElement).toHaveClass('MuiButton-containedPrimary')
      fireEvent.click(visitButtonElement)
      expect(visitButtonElement).toHaveClass('MuiButton-containedSuccess')
      fireEvent.click(visitButtonElement)
      expect(visitButtonElement).toHaveClass('MuiButton-containedPrimary')
    });
});

describe('MatchModule component with only ToWin selections', () => {
    const mockStore = configureStore();
    const testStore = mockStore({
        app: { selectedList: [
            {
                id: "SEL_1",
                name: "Real Madrid",
                price: 1.23,
                marketType: 1,
            },
            {
                id: "SEL_2",
                name: "Barcelona",
                price: 2.05,
                marketType: 1,
            }
        ] } 
    });
    const mockEventsArray: EventType = {
        id: "EVT_1",
		name: "Real Madrid vs Barcelona",
		markets: [
			{
				id: "MKT_1",
				name: "Team to Win",
				selections: [
					{
						id: "SEL_1",
						name: "Real Madrid",
						price: 1.23,
                        marketType: 1,
					},
					{
						id: "SEL_2",
						name: "Barcelona",
						price: 2.05,
                        marketType: 1,
					}
				]
			}
		]
    }

    beforeEach(() => {
        window.open = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should render match module with ToWin section only', () => {
        render(
            <Provider store={testStore}>
                <MatchModule matchInfo={mockEventsArray}/> 
            </Provider> 
        );
        const localButtonElement = screen.getByTestId('local-button-id');
        fireEvent.click(localButtonElement)
        expect(localButtonElement).toHaveClass('MuiButton-containedSuccess')
        
    });
});


describe('MatchModule component with only ToScoreWin selections', () => {
    const mockStore = configureStore();
    const testStore = mockStore({
        app: { selectedList: [
            {
                id: "SEL_3",
                name: "Ronaldo",
                price: 1.15,
                marketType: 2,
            },
            {
                id: "SEL_4",
                name: "Messi",
                price: 1.30,
                marketType: 2,
            },
            {
                id: "SEL_5",
                name: "Bale",
                price: 1.35,
                marketType: 2,
            }
        ] } 
    });
    const mockEventsArray: EventType = {
        id: "EVT_1",
        name: "Real Madrid vs Barcelona",
        markets: [
            {
                id: "MKT_1",
                name: "Player to Score First",
                selections: [
                    {
                        id: "SEL_3",
                        name: "Ronaldo",
                        price: 1.15,
                        marketType: 2,
                    },
                    {
                        id: "SEL_4",
                        name: "Messi",
                        price: 1.30,
                        marketType: 2,
                    },
                    {
                        id: "SEL_5",
                        name: "Bale",
                        price: 1.35,
                        marketType: 2,
                    }
                ]
            }
        ]
    }

    beforeEach(() => {
        window.open = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should render match module with ToWin section only', () => {
        render(
            <Provider store={testStore}>
                <MatchModule matchInfo={mockEventsArray}/> 
            </Provider> 
        );
        const firstButtonElement = screen.getByTestId('first-button-id');
        fireEvent.click(firstButtonElement)
        expect(firstButtonElement).toHaveClass('MuiButton-containedSuccess')
        
    });
});