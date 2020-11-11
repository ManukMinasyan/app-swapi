import {reactive, toRef} from 'vue';
import * as api from '../plugins/api'

/**
 * @type {UnwrapNestedRefs<{peopleList: []}>}
 */
const state = reactive({
    peopleList: []
});

/**
 * @returns {Promise<*>}
 */
export async function getPeople() {
    const response = await api.fetch({
        url: `/people/`,
        resource: 'v1',
    })
    state.peopleList = response.results
    return response;
}

/**
 * @param id
 * @returns {Promise<*>}
 */
export async function getShowPeople(id) {
    return await api.fetch({
        url: `/people/${id}/`,
        resource: 'v1',
    })
}

/**
 * @returns {string|number|SpeechRecognitionResultList}
 */
export function peopleList() {
    return state.peopleList;
}

export function getIdByUrl(url) {
    let item = url.split('/')
    return item[item.length-2];
}

export function usePeople() {
    return {
        state,
        getPeople,
        getShowPeople,
        peopleList: toRef(state, 'peopleList'),
        getIdByUrl
    }
}