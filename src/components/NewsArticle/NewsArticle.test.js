import React from 'react';
import NewsArticle from './NewsArticle';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('NewsArticle', () => {
    it('display correct information in the NewsArticle', () => {
        const { getByText } = render(
            <NewsArticle 
                image={'https://theknow.denverpost.com/wp-content/uploads/2016/03/CDXXTHEWHODSC_4082x.jpg'}
                headline={'The Who postpones Denver Concert at the Pepsi Center'}
                description={'Classic-rock band The Who has postponed its Denver concert.'}
                link={'https://theknow.denverpost.com/2019/09/27/the-who-postpones-denver-concert/225182/'}
            />);
        expect(getByText('https://theknow.denverpost.com/wp-content/uploads/2016/03/CDXXTHEWHODSC_4082x.jpg')).toBeInTheDocument();
        expect(getByText('The Who postpones Denver Concert at the Pepsi Center')).toBeInTheDocument();
        expect(getByText('Classic-rock band The Who has postponed its Denver concert.')).toBeInTheDocument();
        expect(getByText('https://theknow.denverpost.com/2019/09/27/the-who-postpones-denver-concert/225182/')).toBeInTheDocument();
    });
});