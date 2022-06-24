import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { fireEvent } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import SideDrawer from './SideDrawer';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';



describe('SideDrawer component', () => {
    test('should render the sidedrawer with animations at responsive pages', () => {

      const {container} = render(
          <Provider store={store}>
              <SideDrawer /> 
          </Provider> 
      );
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      const boxElement = container.getElementsByClassName('side-drawer animate__animated animate__fadeInRight animate__faster');
      expect(boxElement[0]).toBeInTheDocument();
    });

    test('should close the sideDrawer when handleClick is executed', () => {
    
        render(
            <Provider store={store}>
                <SideDrawer /> 
            </Provider> 
        );
      const closeIconElement = screen.getByTestId('icon-button-element');
      fireEvent.click(closeIconElement)
      const boxElement = screen.getByTestId('box-drawer-id')
      expect(boxElement).toHaveStyle('visibility: hidden')
    });
});

