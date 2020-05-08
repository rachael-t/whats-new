import React from 'react';
import SearchForm from './SearchForm';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('SearchForm', () => {
    it('should search by text input by a user', () => {
        const mockDisplayFilteredNews = jest.fn();
        const { getByPlaceholderText, getByText } = render(<SearchForm 
            displayFilteredNews={mockDisplayFilteredNews}
        />);

        fireEvent.change(getByPlaceholderText('Search news articles'), {target: {value: 'flu'}});
        fireEvent.click(getByText('Search'));

        expect(mockDisplayFilteredNews).toHaveBeenCalledWith('flu');
    });
});