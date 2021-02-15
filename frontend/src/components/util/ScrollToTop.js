import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";


const ScrollToTop = ({ history }) => {

    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        }
        // eslint-disable-next-line
  }, []);
    return (
        <React.Fragment />
    )
}


export default withRouter(ScrollToTop)