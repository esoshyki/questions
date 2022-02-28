import { AxiosResponse } from "axios";
import { ApiActions, BitrixQuestion, BitrixResponse, BitrixSection } from "../types";
import instanceAPI from "./instance";

const getQuestions = async (sessionId: string) : Promise<BitrixQuestion[]> => {
    try {
        const response: AxiosResponse = await instanceAPI.get("/", {
            params: { 
                action: ApiActions.Questions,
                sessId: sessionId
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
                sessId: sessionId
            }
        });

        const bitrixResponse: BitrixResponse = response.data;

        const sections: BitrixSection[] = bitrixResponse.data;
        return sections
    } catch (error) {
        return []
    }
}

export const api = {
    getQuestions,
    getSections
}