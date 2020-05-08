import React from 'react';
import NewsArticle from './NewsArticle';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('NewsArticle', () => {
    it('display correct information in the NewsArticle', () => {
        const { getByText, getByAltText } = render(
            <NewsArticle 
                image={'image.jpg'}
                headline={'The Who postpones Denver Concert at the Pepsi Center'}
                description={'Classic-rock band The Who has postponed its Denver concert.'}
                link={'https://theknow.denverpost.com/'}
            />);
        expect(getByAltText('')).toBeInTheDocument();
        expect(getByText('The Who postpones Denver Concert at the Pepsi Center')).toBeInTheDocument();
        expect(getByText('Classic-rock band The Who has postponed its Denver concert.')).toBeInTheDocument();
        expect(getByText('Link to Article')).toBeInTheDocument();
    });
});