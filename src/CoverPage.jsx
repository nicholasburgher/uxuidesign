import { useNavigate } from 'react-router-dom';

function CoverPage() {
  const navigate = useNavigate();
  return (
    <div class="cover-page">
      <div style={{ textAlign: "center" }}>
        <h1>UX / UI Designer</h1>
        <h2>Nicholas Burgher</h2>
      </div>
      <h3 onClick={() => navigate('work')} style={{ cursor: "pointer" }}>ENTER</h3>
    </div>
  )
}
export default CoverPage;