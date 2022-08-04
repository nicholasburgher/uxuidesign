import "./WorkCard.scss";
import { useNavigate } from 'react-router-dom';

function WorkCard(props) {
  const navigate = useNavigate();
  return (
    <div className="WorkCard" id={props.id} onClick={() => navigate(props.to)}>
      <h3 className="title">{props.title}</h3>
      <p className="skills">{props.skills}</p>
      <p className="dates">{props.date}</p>
    </div>
  )
}

export default WorkCard;