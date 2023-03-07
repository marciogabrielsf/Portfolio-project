import Phone from '@/assets/voucher-crud-phone.png'
import { ProjectsData } from '../static'
import './styles.scss'


export default function ProjectOne() {
  const projectID = 0;

  return (
    <div className='project_one_container section'>
      <div className="graphics">
        <figure className='project_phone'>
          <img src={Phone} alt="Voucher C.R.U.D App Project on a iPhone 14 pro max frame" />
        </figure>
      </div>
      <div className="copy">
        <h1 className='copy_headline'>{ProjectsData[projectID].title}</h1>
        <p className='copy_description'>{ProjectsData[projectID].descriptionOne}</p>
        <p className='copy_description'>{ProjectsData[projectID].descriptionTwo}</p>
        <div className="links">
          <a target="_blank" rel="noopener noreferrer" href={ProjectsData[projectID].githubLink}>
            <i className=" fa-brands fa-github">
            </i>
          </a>
        </div>
      </div>
    </div>
  )
}
