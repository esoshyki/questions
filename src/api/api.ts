import { AxiosResponse } from "axios";
import { ApiActions, BitrixResponse, Question } from "../types";
import instanceAPI from "./instance";

const getQuestions = async (sessionId: string) : Promise<Question[]> => {
    try {
        const response: AxiosResponse = await instanceAPI.get("/", {
            params: { 
                action: ApiActions.Questions,
                sessId: sessionId
            }
        })

        const bitrixResponse: BitrixResponse = response.data;

        console.log(bitrixResponse);

        const questions: Question[] = bitrixResponse.data;
        return questions
    } catch (error) {
        return []
    }
};

export const api = {
    getQuestions
}