import { KANYE_DATA_START, KANYE_DATA_SUCCESS, KANYE_DATA_FAIL } from "../actions";

const initialState = {
    isLoading: false,
    error: "",
    quote: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case KANYE_DATA_START:
            return {
                ...state,
                isLoading: true,
            }
        case KANYE_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: "",
                quote: action.payload.quote
            }
        case KANYE_DATA_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;