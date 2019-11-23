import React from "react";
import { connect } from "react-redux";
import { getKanyeData } from "../actions";

const KanyeData = props => {
    return (
        <>
            <button onClick={() => {
                props.getKanyeData();
            }}>Talk to Kanye</button>
            {props.error && <div>{props.error}</div>}
            {props.isLoading ? (
                <div>loading data...</div>
            ) : (
                <div><span>Kanye says: </span>{props.quote}</div>
            )}
        </>
    )
}

const mapStatetoProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        quote: state.quote
    }
}

export default connect(mapStatetoProps, { getKanyeData })(KanyeData);