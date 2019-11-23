import axios from "axios";

export const KANYE_DATA_START = "KANYE_DATA_START";
export const KANYE_DATA_SUCCESS = "KANYE_DATA_SUCCESS";
export const KANYE_DATA_FAIL = "KAYNE_DATA_FAIL";

export const getKanyeData = () => dispatch => {
    dispatch({ type: KANYE_DATA_START });

    axios
        .get("https://api.kanye.rest")
        .then(res => {
            console.log(res);
            dispatch({
                type: KANYE_DATA_SUCCESS,
                payload: res.data
            })
        }
        )
        .catch(err => {
            console.log(err);
            dispatch({
                type: KANYE_DATA_FAIL,
                payload: "error loading data"
            })
        })
}