import PlayBackIcon from '../../images/play-back.svg';
import PlayForwardIcon from '../../images/play-forward.svg';
import PlayIcon from '../../images/play.svg';

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
                    <div className="bg-medium h-1.5 rounded-xl opacity-30"/>
                    <div className="flex w-full justify-between mt-1">
                        <p className='text-sm text-light mt-0'>{startTime}</p>
                        <p className='text-sm text-light mt-0'>{finishTime}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export { MenuPlayer };