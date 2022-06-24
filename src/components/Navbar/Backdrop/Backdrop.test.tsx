import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react';
import Backdrop from './Backdrop';

describe('Backdrop component', () => {
    test('should render the backdrop when the sideDrawer appears', () => {
        const {container} = render(<Backdrop />);

        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        const boxElement = container.getElementsByClassName('backdropStyle');
        expect(boxElement[0]).toBeInTheDocument();
    });
});