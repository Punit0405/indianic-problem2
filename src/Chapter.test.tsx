
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import getApiCall from './components/axiosServices';
import { MemoryRouter } from 'react-router-dom';
import Chapter from './components/chapter';

jest.mock('./components/axiosServices');
// Mock the API call

// Mock the data returned by the API
const mockChapter = {
    "id": "72d84f31-f66d-4e40-ac5c-ad12a8fb5557",
    "type": "chapter",
    "attributes": {
      "slug": "the-boy-who-lived",
      "order": 1,
      "summary": "In the first chapter, we are introduced the Dursley family: Mr. and Mrs. Dursley and his son Dudley. They live on Privet Drive number four and are proud of being completely normal. One day, Mr. Dursley notices many strange things: people wearing odd-looking colorful robes and talking about 'You-Know-Who', a peculiar cat, as well as strangers who hug him and tell him to celebrate. That night, Professor Dumbledore, Professor McGonagall and Rubeus Hagrid meet in Privet Drive. They discuss the tragic deaths of James and Lily Potter and the survival of their son Harry. The chapter ends with them leaving the baby on the Dursleys' doorstep with a letter explaining the circumstances.",
      "title": "The Boy Who Lived"
    },
    "relationships": {
      "book": {
        "data": {
          "id": "0fef89ab-87f0-4e75-ae6c-67398354c723",
          "type": "book"
        }
      }
    },
    "links": {
      "self": "/v1/books/0fef89ab-87f0-4e75-ae6c-67398354c723/chapters/72d84f31-f66d-4e40-ac5c-ad12a8fb5557"
    }
  };
const mockChapter2 = {
    "id": "72d84f31-f66d-4e40-ac5c-ad12a8fb5557",
    "type": "chapter",
    "attributes": {
      "slug": "the-boy-who-lived",
      "order": 1,
      "summary": null,
      "title": "The Boy Who Lived"
    },
    "relationships": {
      "book": {
        "data": {
          "id": "0fef89ab-87f0-4e75-ae6c-67398354c723",
          "type": "book"
        }
      }
    },
    "links": {
      "self": "/v1/books/0fef89ab-87f0-4e75-ae6c-67398354c723/chapters/72d84f31-f66d-4e40-ac5c-ad12a8fb5557"
    }
  };

describe('Chapter Summary Component', () => {
  beforeEach(() => {
    // @ts-ignore
    getApiCall.mockResolvedValue({ data: { data: mockChapter } });
  });

  it('Should fetch chapter and display the summary', async () => {
    render(
    <MemoryRouter>
    <Chapter/>
    </MemoryRouter>
);

    // Verify that books are being fetched and displayed
    await waitFor(() => {
      expect(screen.getByText('Chapter Summary')).toBeInTheDocument();
      expect(screen.getByText(`In the first chapter, we are introduced the Dursley family: Mr. and Mrs. Dursley and his son Dudley. They live on Privet Drive number four and are proud of being completely normal. One day, Mr. Dursley notices many strange things: people wearing odd-looking colorful robes and talking about 'You-Know-Who', a peculiar cat, as well as strangers who hug him and tell him to celebrate. That night, Professor Dumbledore, Professor McGonagall and Rubeus Hagrid meet in Privet Drive. They discuss the tragic deaths of James and Lily Potter and the survival of their son Harry. The chapter ends with them leaving the baby on the Dursleys' doorstep with a letter explaining the circumstances.`)).toBeInTheDocument();
    });
  });

  it('should handle errors', async () => {
    // Simulate an API error
    // @ts-ignore
    getApiCall.mockRejectedValue(new Error('Failed to fetch'));

    render(<Chapter/>);

    // Verify that the component does not crash on error
    await waitFor(() => {
      expect(screen.getByText('Chapter Summary')).toBeInTheDocument();
      // You can also add specific error handling checks here if implemented
    });
  });
});
describe('Chapter null Summary Component', () => {
  beforeEach(() => {
    // @ts-ignore
    getApiCall.mockResolvedValue({ data: { data: mockChapter2 } });
  });

  it('Should fetch chapter and display the summary', async () => {
    render(
    <MemoryRouter>
    <Chapter/>
    </MemoryRouter>
);

    // Verify that books are being fetched and displayed
    await waitFor(() => {
      expect(screen.getByText('Chapter Summary')).toBeInTheDocument();
      expect(screen.getByText('No Summary Available')).toBeInTheDocument();
    });
  });

  it('should handle errors', async () => {
    // Simulate an API error
    // @ts-ignore
    getApiCall.mockRejectedValue(new Error('Failed to fetch'));

    render(<Chapter/>);

    // Verify that the component does not crash on error
    await waitFor(() => {
      expect(screen.getByText('Chapter Summary')).toBeInTheDocument();
      // You can also add specific error handling checks here if implemented
    });
  });
});
