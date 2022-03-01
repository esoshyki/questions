import { AxiosResponse } from "axios";
import { ApiActions, BitrixNewQuestion, BitrixQuestion, BitrixResponse, BitrixSection } from "../types";
import instanceAPI from "./instance";
import qs from 'qs';

const getQuestions = async (sessionId: string) : Promise<BitrixQuestion[]> => {
    try {
        const response: AxiosResponse = await instanceAPI.get("/", {
            params: { 
                action: ApiActions.Questions,
                sessid: sessionId
            }
        })

        const bitrixResponse: BitrixResponse = response.data;

        const questions: BitrixQuestion[] = bitrixResponse.data;
        return questions
    } catch (error) {
        return []
    }
};

const getSections = async (sessionId: string) : Promise<BitrixSection[]> => {
    try {
        const response: AxiosResponse = await instanceAPI.get("/", {
            params: {
                action: ApiActions.Sections,
                sessid: sessionId
            }
        });

        const bitrixResponse: BitrixResponse = response.data;

        const sections: BitrixSection[] = bitrixResponse.data;
        return sections
    } catch (error) {
        return []
    }
};

const newQuestion = async (sessionId: string, question: BitrixNewQuestion) : Promise<BitrixResponse> => {
    try {
        const response: AxiosResponse = await instanceAPI.post("/", qs.stringify({
            data: {
                fields: question
            }
        }), {
            params: {
                action: ApiActions.NewQuestion,
                sessid: sessionId
            },
            headers: {
                "Content-Type" : "application/x-www-form-urlencoded'"
            }
        });

        const data: BitrixResponse = response.data;
        return data;
    } catch (error: any) {
        return {
            data: false,
            status: "success",
            errors: [error]
        }
    }
}

const search = async (query: string, sessionID: string) : Promise<BitrixQuestion[]> => {
    try {
        const response: AxiosResponse = await instanceAPI.post("/", {
            data: {
                fields: {
                    query: query
                }
            }
        },
        {
            params: {
                action: ApiActions.Search,
                sessionID: sessionID,
            }
        });

        const bitrixResponse: BitrixResponse = response.data;

        const questions : BitrixQuestion[] = bitrixResponse.data;

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