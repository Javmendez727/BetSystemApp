import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { fireEvent } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { Provider } from 'react-redux';
import { store } from '../../store/store';



describe('Navbar component', () => {
    test('should open the sideDrawer when handleClick is executed', () => {
    
        render(
            <Provider store={store}>
                <Navbar /> 
            </Provider> 
        );

        const openIconElement = screen.getByTestId('toogle-icon-button');
        fireEvent.click(openIconElement)
        const closeIconElement = screen.getByTestId('icon-button-element');
        expect(closeIconElement).toBeInTheDocument()

    });
});

