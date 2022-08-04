import PageTitle from "../components/PageTitle/PageTitle";
import { useNavigate } from "react-router-dom";
function WorkPageTemplate(props) {
  const navigate = useNavigate();
  return (
    <div style={{display: "flex", flexDirection: "row", gap: "8px"}}>
      <PageTitle content="Work" action={() => {console.log("heading-back"); navigate('work')}}/><PageTitle content={`> ${props.title}`} />
    </div>
  )
}

export default WorkPageTemplate;