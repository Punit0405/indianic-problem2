import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Books from './components/Books';
import getApiCall from './components/axiosServices';
import { MemoryRouter } from 'react-router-dom';

jest.mock('./components/axiosServices');
// Mock the API call

// Mock the data returned by the API
const mockBooks = [
    {
        "id": "0fef89ab-87f0-4e75-ae6c-67398354c723",
        "type": "book",
        "attributes": {
            "slug": "harry-potter-and-the-philosopher-s-stone",
            "author": "J. K. Rowling",
            "cover": "https://www.wizardingworld.com/images/products/books/UK/rectangle-1.jpg",
            "dedication": "For Jessica, who loves stories, for Anne, who loved them too, and for Di, who heard this one first",
            "pages": 223,
            "release_date": "1997-06-26",
            "summary": "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!",
            "title": "Harry Potter and the Philosopher's Stone",
            "wiki": "https://harrypotter.fandom.com/wiki/Harry_Potter_and_the_Philosopher's_Stone"
        },
        "relationships": {
            "chapters": {
                "data": [
                    {
                        "id": "72d84f31-f66d-4e40-ac5c-ad12a8fb5557",
                        "type": "chapter"
                    },
                    {
                        "id": "ba723844-69c2-4d53-8378-c1e5402b7791",
                        "type": "chapter"
                    },
                    {
                        "id": "fd89865d-97c6-401a-ba6e-4a48802d5f20",
                        "type": "chapter"
                    },
                    {
                        "id": "761fc687-1658-4c75-a237-8d4664bb6da9",
                        "type": "chapter"
                    },
                    {
                        "id": "2c001dc9-ccd3-4e3d-a64d-56bc91db0193",
                        "type": "chapter"
                    },
                    {
                        "id": "99dc2092-912c-4055-b0cf-9ebfa6425bd0",
                        "type": "chapter"
                    },
                    {
                        "id": "d1bacead-8704-4cf6-bb26-7adef9a15e1f",
                        "type": "chapter"
                    },
                    {
                        "id": "c9f82edb-6f55-4705-9de8-b343924aaf41",
                        "type": "chapter"
                    },
                    {
                        "id": "55fe2a2d-fed0-475d-be76-eb9022174d2a",
                        "type": "chapter"
                    },
                    {
                        "id": "39046650-d411-40f3-8a27-f294ad3dfba5",
                        "type": "chapter"
                    },
                    {
                        "id": "4ac84fad-80fd-45c9-a37e-3835f4f0abef",
                        "type": "chapter"
                    },
                    {
                        "id": "9b3f1b9f-c04b-45f4-a2c2-2204e7b95353",
                        "type": "chapter"
                    },
                    {
                        "id": "8ba5a0f3-c3d1-4d28-88a0-719f06e0accf",
                        "type": "chapter"
                    },
                    {
                        "id": "1ae9eabd-834a-4316-8921-e23ee5a353c8",
                        "type": "chapter"
                    },
                    {
                        "id": "ed7c3a3d-5c85-4b78-9eec-0b717d77e30f",
                        "type": "chapter"
                    },
                    {
                        "id": "7dad2147-1e3a-4f71-9d22-cef754ca822c",
                        "type": "chapter"
                    },
                    {
                        "id": "20e234e0-0717-4b11-b50a-8d6174ba6ae4",
                        "type": "chapter"
                    }
                ]
            }
        },
        "links": {
            "self": "/v1/books/0fef89ab-87f0-4e75-ae6c-67398354c723"
        }
    },
    {
        "id": "f0c06d4c-0fa9-412b-acc0-6d1490b91731",
        "type": "book",
        "attributes": {
            "slug": "harry-potter-and-the-chamber-of-secrets",
            "author": "J. K. Rowling",
            "cover": "https://www.wizardingworld.com/images/products/books/UK/rectangle-2.jpg",
            "dedication": "For Séan P. F. Harris, getaway driver and foul-weather friend",
            "pages": 251,
            "release_date": "1998-07-02",
            "summary": "Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft And Wizardry for his second year, Harry hears strange whispers echo through empty corridors – and then the attacks start. Students are found as though turned to stone... Dobby's sinister predictions seem to be coming true.",
            "title": "Harry Potter and the Chamber of Secrets",
            "wiki": "https://harrypotter.fandom.com/wiki/Harry_Potter_and_the_Chamber_of_Secrets"
        },
        "relationships": {
            "chapters": {
                "data": [
                    {
                        "id": "afff3a3b-3c0f-422b-8652-14454d1c63c9",
                        "type": "chapter"
                    },
                    {
                        "id": "dbe230c2-7e08-4e10-b3a0-7bb259d97d3d",
                        "type": "chapter"
                    },
                    {
                        "id": "4b65108f-0e1c-41d5-8838-7b8a8cae2eac",
                        "type": "chapter"
                    },
                    {
                        "id": "b171974a-39e5-424f-976c-443529f2bcee",
                        "type": "chapter"
                    },
                    {
                        "id": "72a0ff2f-5a48-408d-8263-b75f99154bca",
                        "type": "chapter"
                    },
                    {
                        "id": "294ceac4-6f1c-4e7d-a77d-b33b6217fdc2",
                        "type": "chapter"
                    },
                    {
                        "id": "eabdc1e8-c678-4248-9d2d-ce9f79994bb1",
                        "type": "chapter"
                    },
                    {
                        "id": "e5183c7f-d559-4b9b-8bd8-bfd65475077d",
                        "type": "chapter"
                    },
                    {
                        "id": "80ed09ce-d337-40b5-a14c-9deecc11878d",
                        "type": "chapter"
                    },
                    {
                        "id": "2484bcec-3a4e-458e-8ebf-99bf02fe28a1",
                        "type": "chapter"
                    },
                    {
                        "id": "adb1b78a-20a3-4b33-9f69-ef6d0fbd5a7d",
                        "type": "chapter"
                    },
                    {
                        "id": "a2892a04-2672-44c3-95da-d0ead252c8c2",
                        "type": "chapter"
                    },
                    {
                        "id": "e8d87848-19a5-46ad-a19f-77b5989e1d03",
                        "type": "chapter"
                    },
                    {
                        "id": "3a55c220-94d3-4114-ab9d-d7f3318c66e3",
                        "type": "chapter"
                    },
                    {
                        "id": "73dd893c-006b-496d-b966-92759be582ba",
                        "type": "chapter"
                    },
                    {
                        "id": "f99f8fe0-e002-490d-ba23-1b68b7f6dff6",
                        "type": "chapter"
                    },
                    {
                        "id": "b344937b-2868-439e-a15a-e661d103455d",
                        "type": "chapter"
                    },
                    {
                        "id": "853a43ba-2f87-432f-b8ff-85b975a4f9d6",
                        "type": "chapter"
                    }
                ]
            }
        },
        "links": {
            "self": "/v1/books/f0c06d4c-0fa9-412b-acc0-6d1490b91731"
        }
    }
];

describe('Books Component', () => {
  beforeEach(() => {
    // @ts-ignore
    getApiCall.mockResolvedValue({ data: { data: mockBooks } });
  });

  it('should fetch and display books', async () => {
    render(
    <MemoryRouter>
    <Books/>
    </MemoryRouter>
);

    // Verify that books are being fetched and displayed
    await waitFor(() => {
      expect(screen.getByText('Books')).toBeInTheDocument();
      expect(screen.getByText(`Harry Potter and the Philosopher's Stone`)).toBeInTheDocument();
      expect(screen.getByText('Harry Potter and the Chamber of Secrets')).toBeInTheDocument();
    });
  });

  it('should handle errors', async () => {
    // Simulate an API error
    // @ts-ignore
    getApiCall.mockRejectedValue(new Error('Failed to fetch'));

    render(<Books />);

    // Verify that the component does not crash on error
    await waitFor(() => {
      expect(screen.getByText('Books')).toBeInTheDocument();
      // You can also add specific error handling checks here if implemented
    });
  });
});
