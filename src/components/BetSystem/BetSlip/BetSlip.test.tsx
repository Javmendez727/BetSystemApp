import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import configureStore from "redux-mock-store";
import { act, fireEvent, render, screen } from '@testing-library/react';
import BetSlip from './BetSlip';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import getEventsData from '../../../store/thunks/getEventsData';
import { setAddItemBetList } from '../../../store/actions/actions';



describe('BetSlip component', () => {
    const mockStore = configureStore();
    const testStore = mockStore({
        app:{   eventList: [
                {
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
                                    price: 1.23
                                },
                                {
                                    id: "SEL_2",
                                    name: "Barcelona",
                                    price: 2.05
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
                                    price: 1.15
                                },
                                {
                                    id: "SEL_4",
                                    name: "Messi",
                                    price: 1.30
                                },
                                {
                                    id: "SEL_5",
                                    name: "Bale",
                                    price: 1.35
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "EVT_2",
                    name: "Atletico Madrid vs Malaga",
                    markets: [
                        {
                            id: "MKT_3",
                            name: "Team to Win",
                            selections: [
                                {
                                    id: "SEL_6",
                                    name: "Atletico",
                                    price: 1.40
                                },
                                {
                                    id: "SEL_7",
                                    name: "Malaga",
                                    price: 3.05
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "EVT_3",
                    name: "Empty Event that shouldn't render",
                    markets: []
                }
                ],
                selectedList: [
                    {
                        id: "SEL_1",
                        name: "Real Madrid",
                        price: 1.23,
                        marketType: 1,
                    },
                    {
                        id: "SEL_3",
                        name: "Ronaldo",
                        price: 1.15,
                        marketType: 2,
                    },
                ]
            } 
    });

    test('should render the matches selected', () => {

        render(
            <Provider store={testStore}>
                <BetSlip /> 
            </Provider> 
        );
        const buttonElement = screen.getAllByTestId('delete-button-id');
        expect(buttonElement).toHaveLength(2);
    });

    test('should delete an item when the button is pressed', () => {

        render(
            <Provider store={store}>
                <BetSlip /> 
            </Provider> 
        );
        act(() => {
            store.dispatch(getEventsData());
            store.dispatch(setAddItemBetList({
                id: "SEL_6",
                name: "Atletico",
                price: 1.40,
                marketType: 1
            }));
        });
    
        const buttonElement = screen.getByTestId('delete-button-id');
        fireEvent.click(buttonElement)
        expect(store.getState().app.selectedList).toHaveLength(0);
    });
});

