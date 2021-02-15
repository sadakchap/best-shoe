import loadingGif from "../../assets/gifs/spinner.gif"

const Spinner = () => {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", margin: "2em auto" }}
      >
        <img src={loadingGif} alt="loading..." height="100px" width="100px" />
        <div>Loading...</div>
      </div>
    );
}

export default Spinner
