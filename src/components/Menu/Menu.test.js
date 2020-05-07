import React from 'react';
import Menu from './Menu';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Menu', () => {
    it('should display topic selections', () => {
        const { getByText } = render(<Menu />);

        expect(getByText('Local')).toBeInTheDocument();
        expect(getByText('Entertainment')).toBeInTheDocument();
        expect(getByText('Health')).toBeInTheDocument();
        expect(getByText('Science')).toBeInTheDocument();
        expect(getByText('Technology')).toBeInTheDocument();
    });

    it('when a topic is clicked changeSelectedNews should be called', () => {
        const mockChangeSelectedNews = jest.fn();
        const { getByText } = render(
            <Menu 
                changeSelectedNews={mockChangeSelectedNews}
            />);

        fireEvent.click(getByText('Health'));
        expect(mockChangeSelectedNews).toHaveBeenCalled();
    });
});