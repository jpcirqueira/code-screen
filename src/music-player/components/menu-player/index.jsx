import PlayBackIcon from '../../images/play-back.svg';
import PlayForwardIcon from '../../images/play-forward.svg';
import PlayIcon from '../../images/play.svg';

import './styles.css';

const MenuPlayer = ({
    startTime,
    finishTime
}) => {

    return (
        <div className='menu-player-content'>
            <div className="menu-player-actions">
                <img src={PlayBackIcon} />
                <img src={PlayIcon} />
                <img src={PlayForwardIcon} />
            </div>
            <div className="menu-player-progress">
                <div className="menu-player-progress-bar"/>
                <div className="menu-player-progress-time">
                    <p>{startTime}</p>
                    <p>{finishTime}</p>
                </div>
            </div>
        </div>
    )
}

export { MenuPlayer };