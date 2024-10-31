import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import AddTour from './AddTour';

jest.mock('axios');

describe('AddTour', () => {
  test('should add a new tour', async () => {
    render(<AddTour />);

    // Mock axios post method
    axios.post.mockResolvedValueOnce({ data: 'Tour Added' });

    // Fill the form inputs
    fireEvent.change(screen.getByPlaceholderText('Enter tour name'), {
      target: { value: 'Test Tour' },
    });
    fireEvent.change(screen.getByLabelText('Tour Type'), {
      target: { value: 'Adventure' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter location'), {
      target: { value: 'Test Location' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter amount'), {
      target: { value: '100' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter no of people'), {
      target: { value: '5' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter here...'), {
      target: { value: 'Test Description' },
    });
    fireEvent.change(screen.getByPlaceholderText('Select Image'), {
      target: { value: 'test-image-url.jpg' },
    });

    // Submit the form
    fireEvent.submit(screen.getByRole('button', { name: 'Submit' }));

    // Assert the API call and navigation
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(
      'http://localhost:8070/tour/addTOUR',
      {
        tourName: 'Test Tour',
        tourType: 'Adventure',
        location: 'Test Location',
        amount: '100',
        noOfPeople: '5',
        description: 'Test Description',
        image: 'test-image-url.jpg',
      }
    );
    expect(screen.getByText('Tour Added')).toBeInTheDocument();
    expect(screen.getByText('All Tour Table').closest('a')).toHaveAttribute(
      'href',
      '/allTOUR-table'
    );
  });
});
