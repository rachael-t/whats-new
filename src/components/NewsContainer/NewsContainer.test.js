import React from 'react';
import NewsContainer from './NewsContainer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('NewsContainer', () => {
    it('displays a news container', () => {
        const { getByText } = render(<NewsContainer 
            selectedNews={[
                {
                    id:1,
                    headline:"Things happened",
                    description:"It was wild",
                    url:"https://denverpost.com/"
                },
                {
                    id:2,
                    headline:"Something else happened",
                    description:"It was not very exciting",
                    url:"https://denverpost.com/"
                },
                {
                    id:3,
                    headline:"There was weather",
                    description:"We experienced weather outside today",
                    url:"https://denverpost.com/"
                },
            ]}
        />);
        expect(getByText('There was weather')).toBeInTheDocument();
    }); 
});