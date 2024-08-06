export interface IBook {
    "id": string,
    "type": string,
    "attributes": IBookAttribute,
    "relationships": {
        "chapters": {
            "data": IChapterID[]
        }
    },
    "links": {
        "self": string
    }
}
export interface IBookAttribute {
    "slug": string,
    "author": string,
    "cover": string,
    "dedication": string,
    "pages": number,
    "release_date": string,
    "summary": string,
    "title": string,
    "wiki": string
}
export interface IChapterID {
    "id": string,
    "type": "chapter"
};

export interface IChapter {
    "id": string,
    "type": string,
    "attributes": IChapterAttributes,
    "relationships": {
        "book": {
            "data": {
                "id": string,
                "type":string
            }
        }
    },
    "links": {
        "self": string
    }
}

export interface IChapterAttributes {
    "slug": string,
    "order": number,
    "summary": string,
    "title": string
}