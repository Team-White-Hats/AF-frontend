// productAdmin.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductAdmin from '../../tests/Product/ProductAdmin.test'
// Mock Axios
jest.mock('axios', () => ({
  post: jest.fn(() => Promise.resolve({})),
  get: jest.fn(() => Promise.resolve({ data: [] })),
  put: jest.fn(() => Promise.resolve({})),
  delete: jest.fn(() => Promise.resolve({})),
}));

// Mock VueSweetalert2
jest.mock('sweetalert2', () => ({
  fire: jest.fn(() => Promise.resolve({})),
}));

describe('ProductAdmin', () => {
  beforeEach(() => {
    render(<ProductAdmin />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders Product Admin component', () => {
    expect(screen.getByText('Product Management')).toBeInTheDocument();
  });

  test('handles form submission', () => {
    const productNameInput = screen.getByPlaceholderText('Product Name');
    const productCategorySelect = screen.getByLabelText('Product Category');
    const contactsInput = screen.getByPlaceholderText('Manufacture Contacts');
    const quantityInput = screen.getByPlaceholderText('Quantity');
    const productPriceInput = screen.getByPlaceholderText('Price');
    const statusSelect = screen.getByLabelText('Status');
    const smallDesTextarea = screen.getByPlaceholderText('Small Description');
    const longDesTextarea = screen.getByPlaceholderText('Additional Info');
    const addButton = screen.getByText('Add Product');

    // Fill in form inputs
    fireEvent.change(productNameInput, { target: { value: 'Test Product' } });
    fireEvent.change(productCategorySelect, { target: { value: 'Handloom Textiles' } });
    fireEvent.change(contactsInput, { target: { value: '1234567890' } });
    fireEvent.change(quantityInput, { target: { value: '10' } });
    fireEvent.change(productPriceInput, { target: { value: '100' } });
    fireEvent.change(statusSelect, { target: { value: 'Available' } });
    fireEvent.change(smallDesTextarea, { target: { value: 'Small Description' } });
    fireEvent.change(longDesTextarea, { target: { value: 'Long Description' } });

    // Submit form
    fireEvent.click(addButton);

    // Check that Axios post method was called
    expect(require('axios').post).toHaveBeenCalledWith(
      'http://localhost:8000/api/product/create/',
      {
        productName: 'Test Product',
        productCategory: 'Handloom Textiles',
        productPrice: '100',
        contacts: '1234567890',
        productImage: '',
        quantity: '10',
        status: 'Available',
        smallDes: 'Small Description',
        longDes: 'Long Description',
      }
    );
  });

  test('handles form validation', () => {
    const addButton = screen.getByText('Add Product');

    // Submit form without filling in required fields
    fireEvent.click(addButton);

    // Check that Axios post method was not called
    expect(require('axios').post).not.toHaveBeenCalled();
  });

  test('handles form update', () => {
    const productNameInput = screen.getByPlaceholderText('Product Name');
    const productCategorySelect = screen.getByLabelText('Product Category');
    const contactsInput = screen.getByPlaceholderText('Manufacture Contacts');
    const quantityInput = screen.getByPlaceholderText('Quantity');
    const productPriceInput = screen.getByPlaceholderText('Price');
    const statusSelect = screen.getByLabelText('Status');
    const smallDesTextarea = screen.getByPlaceholderText('Small Description');
    const longDesTextarea = screen.getByPlaceholderText('Additional Info');
    const updateButton = screen.getByText('Update Product');

    // Fill in form inputs
    fireEvent.change(productNameInput, { target: { value: 'Updated Product' } });
    fireEvent.change(productCategorySelect, { target: { value: 'Handloom Textiles' } });
    fireEvent.change(contactsInput, { target: { value: '1234567890' } });
    fireEvent.change(quantityInput, { target: { value: '10' } });
    fireEvent.change(productPriceInput, { target: { value: '100' } });
    fireEvent.change(statusSelect, { target: { value: 'Available' } });
    fireEvent.change(smallDesTextarea, { target: { value: 'Small Description' } });
    fireEvent.change(longDesTextarea, { target: { value: 'Long Description' } });

    // Submit form
    fireEvent.click(updateButton);

    // Check that Axios put method was called
    expect(require('axios').put).toHaveBeenCalledWith(
      'http://localhost:8000/api/product/update/',
      {
        productName: 'Updated Product',
        productCategory: 'Handloom Textiles',
        productPrice: '100',
        contacts: '1234567890',
        productImage: '',
        quantity: '10',
        status: 'Available',
        smallDes: 'Small Description',
        longDes: 'Long Description',
      }
    );
  });

  test('handles product deletion', () => {
    const deleteButton = screen.getByText('Delete Product');

    // Click delete button
    fireEvent.click(deleteButton);

    // Check that Axios delete method was called
    expect(require('axios').delete).toHaveBeenCalledWith(
      'http://localhost:8000/api/product/delete/'
    );
  });

  test('displays success message on successful form submission', async () => {
    const addButton = screen.getByText('Add Product');

    // Submit form
    fireEvent.click(addButton);

    // Wait for success message to appear
    await screen.findByText('Product added successfully');

    // Check that success message is displayed
    expect(screen.getByText('Product added successfully')).toBeInTheDocument();
  });

  test('displays error message on failed form submission', async () => {
    // Mock Axios post method to simulate error
    require('axios').post.mockImplementationOnce(() =>
      Promise.reject(new Error('Error adding product'))
    );

    const addButton = screen.getByText('Add Product');

    // Submit form
    fireEvent.click(addButton);

    // Wait for error message to appear
    await screen.findByText('Error adding product');

    // Check that error message is displayed
    expect(screen.getByText('Error adding product')).toBeInTheDocument();
  });
});