import ProjectTwo from '@/assets/ProjectTwo.png'
import { ProjectsData } from '../static'
import './styles.scss'


export default function ProjectOne() {
  const projectID = 1;

  return (
    <div className='project_two_container section'>
      <div className="project_two">
        <div className="copy_project_two">
          <h1 className='copy_headline_two'>{ProjectsData[projectID].title}</h1>
          <p className='copy_description_two'>{ProjectsData[projectID].descriptionOne}</p>
          <p className='copy_description_two'>{ProjectsData[projectID].descriptionTwo}</p>
          <div className="links">
            <a target="_blank" rel="noopener noreferrer" href={ProjectsData[projectID].githubLink}>
              <i className=" fa-brands fa-github">
              </i>
            </a>
          </div>
        </div>
        <div className="graphics_two">
          <figure className='project_photo'>
            <img src={ProjectTwo} alt="Voucher C.R.U.D App Project on a iPhone 14 pro max frame" />
          </figure>
        </div>
      </div>
    </div>
  )
}
