import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Book from './components/Book';
import getApiCall from './components/axiosServices';
import { MemoryRouter } from 'react-router-dom';

jest.mock('./components/axiosServices');
// Mock the API call

// Mock the data returned by the API
const mockChapters = [
    {
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
    },
    {
        "id": "ba723844-69c2-4d53-8378-c1e5402b7791",
        "type": "chapter",
        "attributes": {
            "slug": "the-vanishing-glass",
            "order": 2,
            "summary": "Many years later, Harry Potter is already 10 years old and still living with the Dursley family. They give a roof over his head, but overall they treat him more like a help than a family member. On the day of Dudley's birthday, the Dursleys want to visit the zoo and due to an unfortunate coincidence, they have to bring along Harry. The boy gets drawn into a conversation with a boa constrictor. When Dudley starts teasing Harry, the glass in front of the boa disappears. The snake escapes its terrarium, thanking Harry for the help, and spreads panic across visitors, Dursleys included.",
            "title": "The Vanishing Glass"
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
            "self": "/v1/books/0fef89ab-87f0-4e75-ae6c-67398354c723/chapters/ba723844-69c2-4d53-8378-c1e5402b7791"
        }
    },
    {
        "id": "fd89865d-97c6-401a-ba6e-4a48802d5f20",
        "type": "chapter",
        "attributes": {
            "slug": "the-letter-from-no-one",
            "order": 3,
            "summary": "It's the summer holiday before Harry and Dudley go to different schools - Harry's local school and Dudley's expensive private school. One morning during breakfast, the mail arrives at Dursley's home. Unexpectedly, there is a first-ever, strange looking letter to Harry. However the Dursleys don't allow Harry to read his letter and the next day more letters get into the house by all means, no matter how hard Dursleys try to get rid of them. Uncle Vernon decides to run away from the problem and takes the whole family to a hotel, but the letters are still following them. Finally, they end up in an old cabin on an island which can only be accessed by a boat, hoping to no longer get any letters. In the night, while Harry is counting the seconds till his 11th birthday, suddenly someone is hammering on the cabin's door.",
            "title": "The Letter from No One"
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
            "self": "/v1/books/0fef89ab-87f0-4e75-ae6c-67398354c723/chapters/fd89865d-97c6-401a-ba6e-4a48802d5f20"
        }
    },
    {
        "id": "761fc687-1658-4c75-a237-8d4664bb6da9",
        "type": "chapter",
        "attributes": {
            "slug": "the-keeper-of-the-keys",
            "order": 4,
            "summary": "The person hammering on the door enters the cabin and introduces himself as Hagrid, the Keeper of the Keys in Hogwarts School of Witchcraft and Wizardry. He is a half-giant and a friend of Harry's parents, Lily and James. Hagrid informs Harry about his magical heritage, reveals his true identity as a wizard, and explains that he is to attend Hogwarts. Hagrid's arrival marks the beginning of Harry's journey into the wizarding world, his introduction to the magical community and his newfound destiny.",
            "title": "The Keeper of the Keys"
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
            "self": "/v1/books/0fef89ab-87f0-4e75-ae6c-67398354c723/chapters/761fc687-1658-4c75-a237-8d4664bb6da9"
        }
    },
    {
        "id": "2c001dc9-ccd3-4e3d-a64d-56bc91db0193",
        "type": "chapter",
        "attributes": {
            "slug": "diagon-alley",
            "order": 5,
            "summary": "Hagrid takes Harry to the Leaky Cauldron, a wizarding inn, and then through a secret entrance in Leaky Cauldron's back wall to Diagon Alley. There Harry experiences a whole new world, visiting Gringotts to access his family vault, purchasing his school supplies and receiving his very own wand from Ollivanders. Additionally, Harry acquires Hedwig, a beautiful snowy owl, as a gift from Hagrid. It's a captivating introduction to the magical realm he's destined to be a part of.",
            "title": "Diagon Alley"
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
            "self": "/v1/books/0fef89ab-87f0-4e75-ae6c-67398354c723/chapters/2c001dc9-ccd3-4e3d-a64d-56bc91db0193"
        }
    },
    {
        "id": "99dc2092-912c-4055-b0cf-9ebfa6425bd0",
        "type": "chapter",
        "attributes": {
            "slug": "the-journey-from-platform-nine-and-three-quarters",
            "order": 6,
            "summary": "Harry is at King's Cross Station with the Dursleys, preparing to catch the train to Hogwarts. However, as he and the Dursleys are unable to find Platform Nine and Three-Quarters, where the train should leave, he get abandon from the Dursleys. Fortunately, Harry overhears a woman talking about Muggles and asks her for help in finding the hidden platform. Mrs. Weasley tells him to run into the barrier between platform nine and ten, and he miraculously passes through it, finally finding the train to Hogwarts. This unexpected encounter with Mrs. Weasley and her family marks the beginning of Harry's magical journey. He spends the trip to Hogwarts with the youngest Weasley, Ron. Additionally, Harry meets Draco Malfoy, a fellow student on the Hogwarts Express, who leaves a distinct impression with his aloof and arrogant demeanor.",
            "title": "The Journey from Platform Nine and Three-Quarters"
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
            "self": "/v1/books/0fef89ab-87f0-4e75-ae6c-67398354c723/chapters/99dc2092-912c-4055-b0cf-9ebfa6425bd0"
        }
    },
    {
        "id": "d1bacead-8704-4cf6-bb26-7adef9a15e1f",
        "type": "chapter",
        "attributes": {
            "slug": "the-sorting-hat",
            "order": 7,
            "summary": "Harry arrives at Hogwarts School of Witchcraft and Wizardry and is sorted into his house during the Sorting Hat ceremony. The hat briefly considers placing him in Slytherin, but ultimately chooses Gryffindor after Harry expresses a strong desire not to be in Slytherin. Throughout the ceremony, Harry becomes friends with Ron Weasley, who is also sorted into Gryffindor. Together they have their first encounters with several of the Hogwarts teachers, including Professor Dumbledore, Professor Snape, Professor McGonagall, and the quirky Professor Quirrell",
            "title": "The Sorting Hat"
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
            "self": "/v1/books/0fef89ab-87f0-4e75-ae6c-67398354c723/chapters/d1bacead-8704-4cf6-bb26-7adef9a15e1f"
        }
    },
    {
        "id": "c9f82edb-6f55-4705-9de8-b343924aaf41",
        "type": "chapter",
        "attributes": {
            "slug": "the-potions-master",
            "order": 8,
            "summary": "Harry attends his first Potions class at Hogwarts, taught by the enigmatic Professor Severus Snape. He quickly discovers that Snape has a strong dislike for him, leading to a tense and challenging class experience. Harry also attends to other classes, such as Transfiguration taught by Professor McGonagall and Charms with Professor Flitwick.",
            "title": "The Potions Master"
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
            "self": "/v1/books/0fef89ab-87f0-4e75-ae6c-67398354c723/chapters/c9f82edb-6f55-4705-9de8-b343924aaf41"
        }
    },
    {
        "id": "55fe2a2d-fed0-475d-be76-eb9022174d2a",
        "type": "chapter",
        "attributes": {
            "slug": "the-midnight-duel",
            "order": 9,
            "summary": "During his first flying lessons, hold by Madam Hooch, Harry's remarkable talent on a broomstick is noticed by Professor McGonagall, who recommends him for the Gryffindor Quidditch team. The tension between him and Draco Malfoy, who is clearly jealous of Harry's recognition, steadily escalates. Harry, Ron, and Hermione sneak out of their dormitories at night to challenge Malfoy to a duel. Harry and his friends do not encounter Malfoy, but instead, they stumble upon a massive three-headed dog guarding a mysterious trapdoor.",
            "title": "The Midnight Duel"
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
            "self": "/v1/books/0fef89ab-87f0-4e75-ae6c-67398354c723/chapters/55fe2a2d-fed0-475d-be76-eb9022174d2a"
        }
    },
    {
        "id": "39046650-d411-40f3-8a27-f294ad3dfba5",
        "type": "chapter",
        "attributes": {
            "slug": "hallowe-en",
            "order": 10,
            "summary": "Hermione Granger impresses her peers with her mastery of making a feather float with the Levitation Charm, 'Wingardium Leviosa'. However, her approach leads to a conflict with Ron, who finds her bossy. Later, during the Halloween feast, a troll is accidentally let into the castle. The troll makes its way into the girls' bathroom, where it threatens Hermione, who is alone and unaware of the danger. Harry and Ron, wondering where Hermione is, come to her rescue, successfully defeating the troll and solidifying their friendship.",
            "title": "Hallowe'en"
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
            "self": "/v1/books/0fef89ab-87f0-4e75-ae6c-67398354c723/chapters/39046650-d411-40f3-8a27-f294ad3dfba5"
        }
    },
    {
        "id": "4ac84fad-80fd-45c9-a37e-3835f4f0abef",
        "type": "chapter",
        "attributes": {
            "slug": "quidditch",
            "order": 11,
            "summary": "Harry joins the Gryffindor Quidditch team as the youngest Seeker in a century. During his first Quidditch match against Slytherin, Harry experiences a series of ups and downs, including Professor Snape's alleged attempt to jinx his broomstick, making it go haywire. Harry's determination prevails and he manages to catch the Golden Snitch, securing the victory for Gryffindor. After the match, Harry, Ron, and Hermione pay a visit to Hagrid to discuss Snape's role in the broomstick incident. Hagrid accidentally reveals information that it is his three-headed dog and it actually protects a big secret.",
            "title": "Quidditch"
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
            "self": "/v1/books/0fef89ab-87f0-4e75-ae6c-67398354c723/chapters/4ac84fad-80fd-45c9-a37e-3835f4f0abef"
        }
    },
    {
        "id": "9b3f1b9f-c04b-45f4-a2c2-2204e7b95353",
        "type": "chapter",
        "attributes": {
            "slug": "the-mirror-of-erised",
            "order": 12,
            "summary": "Harry discovers a mysterious mirror in an abandoned classroom at Hogwarts. When he looks into the mirror, he sees himself with his deceased parents, James and Lily Potter, who he never had a chance to know. Harry quickly becomes obsessed with returning to the mirror, leading to many late-night visits to the mirror room. Professor Dumbledore eventually intervenes, explaining the mirror's powers of showing the deeperst desires of a person's heart, and the danger of becoming lost in its illusions. He mentions that he now will move the mirror to another place.",
            "title": "The Mirror of Erised"
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
            "self": "/v1/books/0fef89ab-87f0-4e75-ae6c-67398354c723/chapters/9b3f1b9f-c04b-45f4-a2c2-2204e7b95353"
        }
    },
    {
        "id": "8ba5a0f3-c3d1-4d28-88a0-719f06e0accf",
        "type": "chapter",
        "attributes": {
            "slug": "nicolas-flamel",
            "order": 13,
            "summary": "Harry and his friends learn about Nicolas Flamel, a renowned alchemist who is believed to have created the Philosopher's Stone, an object with incredible powers. They discover that Flamel's work with the stone has contributed to his extraordinary longevity, and it's also rumored to produce the Elixir of Life, a potion that grants immortality. Harry accidentally overhears a mysterious conversation between Professor Snape and Professor Quirrell. Snape expresses his distrust of Quirrell's loyalty and his urgent need to know how to access the Philosopher's Stone, which is stored at Hogwarts.",
            "title": "Nicolas Flamel"
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
            "self": "/v1/books/0fef89ab-87f0-4e75-ae6c-67398354c723/chapters/8ba5a0f3-c3d1-4d28-88a0-719f06e0accf"
        }
    },
    {
        "id": "1ae9eabd-834a-4316-8921-e23ee5a353c8",
        "type": "chapter",
        "attributes": {
            "slug": "norbert-the-norwegian-ridgeback",
            "order": 14,
            "summary": "During a visit at Hagrid's hut, he reveals that he won a dragon egg in a card game. He becomes obsessed with hatching it - even though it's illegal - and invites Harry, Ron and Hermione to witness it. Unfortunately, they are being followed by Malfoy. To protect both Hagrid and dragon, Harry has an idea to smuggle the dragon, named Norbert, out of the castle to Charlie Weasley, who works with dragons in Romania. As Ron gets bitten by Norbert, Harry and Hermione  have to set out on the expedition on their own. The late-night excursion to the tower where Norbert is kept leads to a dangerous encounter with Draco Malfoy. They successfully pass Norbert to Charlie's friends, but they get caught by Mr Filch.",
            "title": "Norbert the Norwegian Ridgeback"
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
            "self": "/v1/books/0fef89ab-87f0-4e75-ae6c-67398354c723/chapters/1ae9eabd-834a-4316-8921-e23ee5a353c8"
        }
    },
    {
        "id": "ed7c3a3d-5c85-4b78-9eec-0b717d77e30f",
        "type": "chapter",
        "attributes": {
            "slug": "the-forbidden-forest",
            "order": 15,
            "summary": "Harry and Hermione serve detention in the Forbidden Forest as punishment for being out of their common room after hours. They are accompanied by Hagrid and encounter dangerous creatures, including a wounded unicorn and a mysterious centaur named Firenze. During their time in the forest, they witness a hooded figure drinking the blood of the unicorn. Firenze explains that drinking unicorn blood allows a person to prolong their life, but at a terrible cost - the drinker becomes cursed. Harry begins to suspect that Snape wants to obtain the Philosopher's Stone to help Voldemort regain his strength.",
            "title": "The Forbidden Forest"
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
            "self": "/v1/books/0fef89ab-87f0-4e75-ae6c-67398354c723/chapters/ed7c3a3d-5c85-4b78-9eec-0b717d77e30f"
        }
    },
    {
        "id": "7dad2147-1e3a-4f71-9d22-cef754ca822c",
        "type": "chapter",
        "attributes": {
            "slug": "through-the-trapdoor",
            "order": 16,
            "summary": "Harry, Ron, and Hermione, armed with the knowledge of Fluffy guarding the trapdoor, embark on a perilous journey to reach the Philosopher's Stone before it falls into the wrong hands. These include Devil's Snare, a plant that tries to strangle them, a life-sized wizard's chess match, a game of flying keys, and potions that must be consumed in the correct order to proceed. In the last puzzle it turns out that only Harry can proceed further, and Hermione decides to turn back to Ron, who got knocked out earlier in game of chess. Harry encounters an unexpected figure waiting for him.",
            "title": "Through the Trapdoor"
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
            "self": "/v1/books/0fef89ab-87f0-4e75-ae6c-67398354c723/chapters/7dad2147-1e3a-4f71-9d22-cef754ca822c"
        }
    },
    {
        "id": "20e234e0-0717-4b11-b50a-8d6174ba6ae4",
        "type": "chapter",
        "attributes": {
            "slug": "the-man-with-two-faces",
            "order": 17,
            "summary": "Harry confronts Professor Quirrell, who is attempting to steal the Stone. Harry faces Voldemort, who is attached to the back of Quirrell's head. Voldemort demands that Harry give him the Philosopher's Stone, but Harry's courage and selflessness protect the Stone from falling into Voldemort's grasp. The Philosopher's Stone is destroyed to prevent it from falling into the wrong hands. Dumbledore explains to Harry that his mother's love and the protection it provided played a crucial role in safeguarding the Stone.",
            "title": "The Man with Two Faces"
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
            "self": "/v1/books/0fef89ab-87f0-4e75-ae6c-67398354c723/chapters/20e234e0-0717-4b11-b50a-8d6174ba6ae4"
        }
    }
];

describe('Book Component', () => {
  beforeEach(() => {
    // @ts-ignore
    getApiCall.mockResolvedValue({ data: { data: mockChapters } });
  });

  it('Should fetch chapters and display chapters', async () => {
    render(
    <MemoryRouter>
    <Book/>
    </MemoryRouter>
);

    // Verify that chaptesr are being fetched and displayed
    await waitFor(() => {
      expect(screen.getByText('Chapters')).toBeInTheDocument();
      expect(screen.getByText(`The Boy Who Lived`)).toBeInTheDocument();
      expect(screen.getByText('Quidditch')).toBeInTheDocument();
      expect(screen.getByText('Norbert the Norwegian Ridgeback')).toBeInTheDocument();
    });
  });

  it('should handle errors', async () => {
    // @ts-ignore
    getApiCall.mockRejectedValue(new Error('Failed to fetch'));

    render(<Book />);

    // Verify that the component does not crash on error
    await waitFor(() => {
      expect(screen.getByText('Chapters')).toBeInTheDocument();
      // You can also add specific error handling checks here if implemented
    });
  });
});
