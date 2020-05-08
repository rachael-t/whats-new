import React from 'react';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('App', () => {
  it('should display a topic`s articles when a specific topic is clicked', () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText('Health'));
    expect(getByText('Optimism has a surprising benefit: Better heart health, study finds')).toBeInTheDocument();
  });

  it('should display filtered news articles for a topic once searched', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    fireEvent.click(getByText('Health'));
    fireEvent.change(getByPlaceholderText('Search news articles'), {target: {value: 'heart'}});
    fireEvent.click(getByText('Search'));
    expect(getByText('Optimism has a surprising benefit: Better heart health, study finds')).toBeInTheDocument();
  });

  it('should display a message if no articles match the search text', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    fireEvent.click(getByText('Health'));
    fireEvent.change(getByPlaceholderText('Search news articles'), {target: {value: 'cat'}});
    fireEvent.click(getByText('Search'));
    expect(getByText('No articles match your search.')).toBeInTheDocument();
  });

});
