import "./errorPage.css";

const ErrorPage = () => (
    <div className="error-page-content">
        <img src={require("../../images/error-page.jpg")} alt="not found" className="error-page-image" />
        <div className="error-page-text">
            <h1>Oops an error occurred</h1>
            <h2>Try again later</h2>
        </div>
    </div>
);

export default ErrorPage;