import { AxiosResponse } from "axios";
import { ApiActions, NewQuestion, Question, BitrixResponse, Section, SectionSort, GetQuestionsPayload } from "../types";
import instanceAPI from "./instance";
import qs from 'qs';

const getSections = async (sessionId: string) : Promise<Section[]> => {
    try {
        const response: AxiosResponse = await instanceAPI.get("/", {
            params: {
                action: ApiActions.Sections,
                sessid: sessionId
            }
        })

        const bxResponse: BitrixResponse = response.data;

        const shortSections: SectionSort[] = bxResponse.data;
        const sections: Section[] = shortSections.map(section => ({
            ...section,
            questions: [],
            page: 0,
            pages: 0,
        }));
        return sections;
    } catch (error) {
        return []
    }
}

const getQuestions = async ({
    sessionId,
    selectedSection,
    size,
    q
} : GetQuestionsPayload) : Promise<Section> => {
    try {
        const response: AxiosResponse = await instanceAPI.get("/", {
            params: { 
                action: ApiActions.Questions,
                sessid: sessionId,
                sectionId: selectedSection.ID,
                page: selectedSection.page,
                size,
                q
            }
        })

        const bitrixResponse: BitrixResponse = response.data;

        const questions: Section = bitrixResponse.data;
        return questions
    } catch (error) {
        return selectedSection
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
        const response: AxiosResponse = await instanceAPI.get("/", {
            params: {
                action: ApiActions.Search,
                sessid: sessionID,
                q: query
            }
        });

        const bitrixResponse: BitrixResponse = response.data;

        const questions : Question[] = bitrixResponse.data;

        return questions;

    } catch (error) {
        return []   
    }
};

const getQuestionById =async (questionId: number, sessid: string ) : Promise<Question | null> => {
    try {
        const response: AxiosResponse = await instanceAPI.get("/", {
            params: {
                action: ApiActions.GetQuestion,
                sessid,
                questionId
            }
        })

        const bitrixResponse: BitrixResponse = response.data;

        const question : Question | null = bitrixResponse.data;

        return question

    } catch (error) {
        return null
    }
}

export const api = {
    getSections,
    getQuestions,
    newQuestion,
    getQuestionById,
    search,
}