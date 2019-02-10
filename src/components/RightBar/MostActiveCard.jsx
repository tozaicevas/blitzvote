import React from 'react'
import { Feed } from 'semantic-ui-react'

const MostActiveCard = ({candidate, answersCount}) => {
    const ago = Math.floor(Math.random() * 3) + 1  + " day ago";
    return (
        <Feed>
            <Feed.Event>
                <Feed.Label image={candidate.photo} />
                <Feed.Content>
                    <strong>{candidate.name}</strong>
                    <Feed.Date style={{marginTop:'2px'}} content={ago} />
                    <Feed.Summary>
                        Atsakė klausimų: {answersCount}
                    </Feed.Summary>
                </Feed.Content>
            </Feed.Event>
        </Feed>
    );
};
export default MostActiveCard
