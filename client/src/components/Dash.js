
import React from 'react';
import { Link } from 'react-router-dom'

const Dash = () => {
    return (
        <div>
            <h2>  dash board</h2>
            <div className="fixed-action-btn">
                <Link to="/survey"
                    className="btn-floating btn-large red">
                    <i class="material-icons" >add</i>

                </Link>
            </div>
        </div>
    )
}

export default Dash;