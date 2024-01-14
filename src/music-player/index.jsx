import { CardPlayer } from "./components/card-player";

import './styles.css';

const MusicPlayer = () =>{

    return(
        <div className="music-player-content">
            <CardPlayer
                title="God's Plan"
                subTitle="Drake"
                startTime='03:20'
                finishTime='00:12'
                size="xl"
            />
            <div className="content-left">
                <CardPlayer
                    title="Highest in the room"
                    subTitle="Travis Scott"
                    startTime='03:20'
                    finishTime='00:12'
                    size="md"
                />
                <CardPlayer
                    title="Maquina do tempo"
                    subTitle="Matuê"
                    size="md"
                />
            </div>
        </div>
    )
}


export { MusicPlayer };

