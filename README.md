# Getting Started with Create React App

npm run build - to build;

API

### GET SECTIONS

#### Request

    params
        action: getSections,
        sessid: string;

#### Response
    data:
        ID: string;
        NAME: string


### GET QUESTIONS

#### Request

    params
        action: getListFaq,
        sessid: string;

#### Response
    data:
        ID: number,
        IBLOCK_SECTION_ID: number,
        NAME: string;
        DETAIL_TEXT: string;
        DETAIL_TYPE: string;

### POST ADD QUESTIONS

#### Request

    params
        action: newQuestion,
        sessid: string;
        body: 
            NAME: string;
            DETAIL_TEXT: string;
            USER_ID?: string;

#### Response
    data:
        true
