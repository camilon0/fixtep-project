import { workerTypes } from "../types/workerTypes";

const workerState = {
    worker: []
}

export const workerReducer = (state= workerState, action) => {
    switch (action.type) {
        case workerTypes.GET_WORKER:
            return{
                ...state,
                worker: action.payload.worker
            };
        case workerTypes.FILTERED_WORKER:
            return{
                ...state,
                worker: action.payload.worker
            };
        default:
            return state ;
    }
}