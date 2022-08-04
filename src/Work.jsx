import "./Work.scss";
import BrandedHeader from "./components/navigation/BrandedHeader/BrandedHeader";
import WorkCard from "./components/WorkCard/WorkCard";
import PageTitle from "./components/PageTitle/PageTitle";
import work from "./content/work";

function Work() {
  return (
    <div>
      <PageTitle content="User Experience Design" />
      <div className="workTable">
        {work.map((workItem) => {
          return (
            <WorkCard key={workItem.key} id={workItem.key} title={workItem.title} skills={workItem.skills} date={workItem.date} to={workItem.path}/>
          )
        })}
      </div>

    </div>
  )
}

export default Work;