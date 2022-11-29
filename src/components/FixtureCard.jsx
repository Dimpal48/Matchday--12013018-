import React from 'react'
import './style.css'

export default function FixtureCard({fixture}) {

    return (
        <div className='fixture-card fixture-card-cover'>
            <h3>
                {fixture?.tournament[0]?.name}
            </h3>
            <p>{fixture?.round}</p>
            <div className='fixture-card-result'>
                <p>v/s</p>
                <div className='fixture-score'>
                    <div className='fixture-score-left'>
                        {fixture?.winner === fixture?.team1[0]?.name && <img alt='crown' className='crown' src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/08f830ae-ce65-42f5-b243-b7a3f8a15b5f/crown.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221128T190657Z&X-Amz-Expires=86400&X-Amz-Signature=f501f853432baf18036fd2112e74e09b9d76bafe8c6abd0f44e969bef54b8ca4&X-Amz-SignedHeaders=host&x-id=GetObject" />}
                        <img className='flag' src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg" alt="flag" />
                    </div>
                    <div className='fixture-score-main'>
                        <div>
                            {fixture?.a1 + " - " + fixture?.b1} ,{" "}
                            {fixture?.a2 + " - " + fixture?.b2}{(fixture?.a3 != 0 || fixture?.b3 != 0) && (" , " + fixture?.a2 + " - " + fixture?.b2)}
                        </div>
                    </div>
                    <div className='fixture-score-right'>
                        {fixture?.winner === fixture?.team2[0]?.name && <img className='crown' src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/08f830ae-ce65-42f5-b243-b7a3f8a15b5f/crown.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221128T190657Z&X-Amz-Expires=86400&X-Amz-Signature=f501f853432baf18036fd2112e74e09b9d76bafe8c6abd0f44e969bef54b8ca4&X-Amz-SignedHeaders=host&x-id=GetObject" alt='crown' />}
                        <img className='flag' src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg" alt="flag" />
                    </div>
                </div>
                <div className='fixture-score-name'>
                    <div className='fixture-score-name-left'>
                        <h6>{fixture?.team1[0]?.name}</h6>
                    </div>
                    <div className='fixture-score-name-main'>
                        <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/da00ca61-beb4-4735-8ff8-f6cff8597fc3/logo_white.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221128T191152Z&X-Amz-Expires=86400&X-Amz-Signature=386226ab0ac0104c044ec616b292ab9feb672a06456aab2b952622379e0f17c2&X-Amz-SignedHeaders=host&x-id=GetObject" alt="logo" />
                    </div>
                    <div className='fixture-score-name-right'>
                        <h6>{fixture?.team2[0]?.name}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
