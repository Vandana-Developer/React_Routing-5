import React from 'react';

const postDetails = (props) => {
    return (
        <>
            <div className='panel panel-danger'>
                <div className='panel-heading'>{props.match.params.topic} postDetails</div>
                <div className='panel-body'>
                    {props.match.params.topic} is a the Lorem ipsum filling text is used by graphic designers, programmers and printers with the aim of occupying the spaces of a website, an advertising product or an editorial production whose final text is not yet ready.
                    This expedient serves to get an idea of the finished product that will soon be printed or disseminated via digital channels.
                    In order to have a result that is more in keeping with the final result, the graphic designers, designers or typographers report the Lorem ipsum text in respect of two fundamental aspects, namely readability and editorial requirements.

                </div>
                <div>
                    This is page number {props.location.search.split('=')[1]}
                </div>
            </div>

        </>
    )
}

export default postDetails;