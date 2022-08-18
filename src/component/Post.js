import React from 'react';
import { Link } from 'react-router-dom';


const Post = () => {
    return (
        <>
            <div className='panel panel-success'>
                <div className='panel-heading'>Post</div>
                <div className='panel-body'>
                    Post is a the Lorem ipum filling text is used by graphic designers, programmers and printers with the aim of occupying the spaces of a website, an advertising product or an editorial production whose final text is not yet ready.

                    This expedient serves to get an idea of the finished product that will soon be printed or disseminated via digital channels.


                    In order to have a result that is more in keeping with the final result, the graphic designers, designers or typographers report the Lorem ipsum text in respect of two fundamental aspects, namely readability and editorial requirements.

                </div>
                <h2>
                    Java script
                </h2>
                {/* <Link to='/Post/js' className=' btn btn-danger'> */}
                <Link to='/Post/js?page=1' className=' btn btn-danger'>

                    Details
                </Link>
                <h2>
                    Node
                </h2>
                <Link to='/Post/node?page=2' className=' btn btn-success'>
                    Details
                </Link>

                <h2>
                    React
                </h2>
                <Link to='/Post/react?page=3' className=' btn btn-primary'>
                    Details
                </Link>



            </div>

        </>
    )
}
export default Post