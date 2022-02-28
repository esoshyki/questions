import { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";
import { ApiActions, BitrixQuestion, BitrixSection } from "../types";

const BXparams = {
    c: "manao:support.faq",
    mode: "class",
  };

const sessionId = "e14e316cb5cbcae4320a834ebb234f56";

const questions: BitrixQuestion[] = [
    {
        ID: 495,
        IBLOCK_SECTION_ID: 275,
        NAME: "Где получить информацию новому сотруднику?",
        DETAIL_TEXT: "<p>Информация для новых сотрудников представлена в курсе Курс для новых сотрудников.</p>",
        DETAIL_TYPE: "html"
    },
    {
        ID: 496,
        IBLOCK_SECTION_ID: 275,
        NAME: "Как найти номер телефона нужного сотрудника?",
        DETAIL_TEXT: "<p>Выполните следующие действия. Перейдите на страницу Поиск сотрудника (Сотрудники > Поиск сотрудника). В форме поиска укажите фамилию и имя сотрудника. Нажмите кнопку Найти. В найденной визитке сотрудника посмотрите номер его телефона. Если телефон не указан, то вы можете написать персональное сообщение сотруднику и спросить его телефон.</p>",
        DETAIL_TYPE: "html"
    },
    {
        ID: 497,
        IBLOCK_SECTION_ID: 275,
        NAME: "Возможен ли карьерный рост?",
        DETAIL_TEXT: "<p>Карьерный рост, конечно же, возможен. На странице Вакансии (Компания > Карьера, вакансии) представлены имеющиеся в компании вакансии. Вы можете отправить резюме на интересующую вас должность.</p>",
        DETAIL_TYPE: "html"
    },
    {
        ID: 499,
        IBLOCK_SECTION_ID: 276,
        NAME: "Возможно ли создать общий архив с документами?",
        DETAIL_TEXT: "<p>Откройте страницу График отсутствий (Сотрудники > График отсутствий). Если сотрудника нет в списке отсутствующих по той или иной причине, то значит, сотрудник находится на работе.</p>",
        DETAIL_TYPE: "html"
    },
    {
        ID: 500,
        IBLOCK_SECTION_ID: 276,
        NAME: "Возможно ли создать персональный архив документов?",
        DETAIL_TEXT: "<p>Да, если на личной странице доступен функционал Файлы. В этом случае, чтобы только владелец мог управлять своими файлами, на странице персональные настроек в полях Кто может изменять файлы и Кто может просматривать файлы необходимо установить значение Только я.</p>",
        DETAIL_TYPE: "html"
    }
]

const sections: BitrixSection[] = [
    {
        ID: 275,
        NAME: "Работа в компании",
    },
    {
        ID: 276,
        NAME: "Работа с документами",
    },
    {
        ID: 277,
        NAME: "Использование сервисов портала",
    }
]
  

export const createMockInstance = (axiosInstance: AxiosInstance) => {
    const mock = new MockAdapter(axiosInstance, { delayResponse: 1500 });

    mock.onGet("/", {
        params: {
            ...BXparams, action: ApiActions.Questions,
            sessId: sessionId
        }
    }).reply(200, {data: questions});

    mock.onGet("/", {
        params: {
            ...BXparams, action: ApiActions.Sections,
            sessId: sessionId
        }
    }).reply(200, { data: sections})

    mock.onPost("/").reply(200, {
        data: true
    })

    return mock
};