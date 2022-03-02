import { AxiosResponse } from "axios";
import { ApiActions, NewQuestion, Question, BitrixResponse, Section } from "../types";
import instanceAPI from "./instance";
import qs from 'qs';

const getQuestions = async (sessionId: string) : Promise<Question[]> => {
    try {
        const response: AxiosResponse = await instanceAPI.get("/", {
            params: { 
                action: ApiActions.Questions,
                sessid: sessionId
            }
        })

        const bitrixResponse: BitrixResponse = response.data;

        const questions: Question[] = bitrixResponse.data;
        return questions
    } catch (error) {
        return []
    }
};

const getSections = async (sessionId: string) : Promise<Section[]> => {
    try {
        const response: AxiosResponse = await instanceAPI.get("/", {
            params: {
                action: ApiActions.Sections,
                sessid: sessionId
            }
        });

        const bitrixResponse: BitrixResponse = response.data;

        const sections: Section[] = bitrixResponse.data;
        return sections
    } catch (error) {
        return []
    }
};

const newQuestion = async (sessionId: string, question: NewQuestion) : Promise<BitrixResponse> => {
    try {
        const response: AxiosResponse = await instanceAPI.post("/", qs.stringify({
            fields: question
        }), {
            params: {
                action: ApiActions.NewQuestion,
                sessid: sessionId
            },
            headers: {
                "Content-Type" : "application/x-www-form-urlencoded",
                charset: "UTF-8",
                "X-Requested-With" : "XMLHttpRequest",
                Accept: "*/*"
            }
        });

        const bitrixResponse: BitrixResponse = response.data;
        return bitrixResponse;
    } catch (error: any) {
        return {
            data: false,
            status: "success",
            errors: [error]
        }
    }
}

const search = async (query: string, sessionID: string) : Promise<Question[]> => {
    try {
        console.log(`query`, query);
        console.log("sessid", sessionID);
        const response: AxiosResponse = await instanceAPI.get("/", {
            params: {
                action: ApiActions.Search,
                sessid: sessionID,
                q: query
            }
        });

        console.log(response);

        const bitrixResponse: BitrixResponse = response.data;

        const questions : Question[] = bitrixResponse.data;

        return questions;

    } catch (error) {
        return []   
    }
}

export const api = {
    getQuestions,
    getSections,
    newQuestion,
    search
}