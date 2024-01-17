import PlayBackIcon from '../../images/play-back.svg';
import PlayForwardIcon from '../../images/play-forward.svg';
import PlayIcon from '../../images/play.svg';

import './styles.css';

const MenuPlayer = ({
    startTime,
    finishTime
}) => {
    const hasTimes = startTime && finishTime;

    return (
        
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row gap-12 mb-7">
                <img src={PlayBackIcon} />
                <img src={PlayIcon} />
                <img src={PlayForwardIcon} />
            </div>
            {hasTimes && 
                <div className="flex flex-col w-full">
                    <div className="menu-player-progress-bar"/>
                    <div className="flex w-full justify-between">
                        <p>{startTime}</p>
                        <p>{finishTime}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export { MenuPlayer };