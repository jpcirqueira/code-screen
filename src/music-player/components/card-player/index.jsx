import { MenuPlayer } from '../menu-player';
import Cover from '../../images/cover.png';

import './styles.css';

const CardPlayer = ({ title, subTitle, startTime, finishTime}) => {

    return (
        <div className="card-content">
            <div className='card-header'>
                <img src={Cover}/>
                <div className='card-header-description'>
                    <p className='card-title'>{title}</p>
                    <p className='card-subtitle'>{subTitle}</p>
                </div>
            </div>
            <MenuPlayer 
                startTime={startTime}
                finishTime={finishTime}
            />
        </div>
    );
}

export { CardPlayer };