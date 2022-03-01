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
        const response: AxiosResponse = await instanceAPI.get("/", {
            params: {
                action: ApiActions.Search,
                sessid: sessionID,
                q: query
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