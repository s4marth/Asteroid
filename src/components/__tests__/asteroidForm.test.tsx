import React from 'react';
import { render, screen, cleanup, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import '@testing-library/jest-dom'
import AsteroidForm from '../asteroidForm';
const { expect, describe, it } = require('@jest/globals');

jest.mock('../asteroidForm.tsx')

afterEach(cleanup);

const mockdata = {
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/1/1.jpg",
      "https://cdn.dummyjson.com/product-images/1/2.jpg",
      "https://cdn.dummyjson.com/product-images/1/3.jpg",
      "https://cdn.dummyjson.com/product-images/1/4.jpg",
      "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
    ]
  }
//@ts-ignore
global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(mockdata);
      },
    });
  });


test('should reneder form component', ()=>{
    const mockFunction = jest.fn();
     render(<Router><AsteroidForm onSearch={mockFunction}/> </Router>)
     const formelem = screen.getByTestId('form1');
     expect(formelem).toBeInTheDocument()
     expect(screen.getByLabelText(/Asteroid ID/i)).toBeInTheDocument();
    
})


test('Input field',  () => {
    render(<Router><AsteroidForm onSearch={() => {}} /></Router>);
    const formlabel = screen.getByPlaceholderText('textinput') as HTMLInputElement;;
   
    fireEvent.change(formlabel, { target: { value: '1023456' } });
    expect(formlabel.value).toBe('1023456');
 
  });

  test('button trigger', async() => {
    render(<Router><AsteroidForm onSearch={() => {}} /></Router>);
    const formlabel = screen.getByPlaceholderText('textinput') as HTMLInputElement;;
    fireEvent.change(formlabel, { target: { value: '3542519' } });

    const submitButton = screen.getByText('Search');
    fireEvent.click(submitButton);
    await waitFor(() => {
        expect(jest.fn()).toHaveBeenCalledTimes(1);
        //expect(mockFunction).toHaveBeenCalledWith('/asteroid-details');
    });
  });


