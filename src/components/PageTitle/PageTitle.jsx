import "./PageTitle.scss";

function PageTitle(props) {
    return (
        <div className={`pageTitle ${props.action ? "clickable" : ""}`} onClick={props.action}>
            {props.content}
        </div>
    )
}

export default PageTitle;