import PageTitle from "../components/PageTitle/PageTitle";
import { useNavigate } from "react-router-dom";
import work from "../content/work";
//Builder
import buildBlock from "../scripts/buildBlock";

function WorkPageTemplate(props) {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{display: "flex", flexDirection: "row", gap: "8px"}}>
        <PageTitle content="Work" action={() => {console.log("heading-back"); navigate('../work')}}/><PageTitle content={`> ${props.title}`} />
      </div>
      <section className="article-content">
        {work[props.index].content && work[props.index].content.map(buildBlock)}
      </section>
    </div>
  )
}

export default WorkPageTemplate;