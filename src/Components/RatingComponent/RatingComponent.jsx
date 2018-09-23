import React from 'react';
import MainLayout from '../../MainLayout';
import './Style.css';

const RatingComponent = (props = {}) => {
    const {
        location
    } = props;

    return (
        <div className="rating">
            <MainLayout>
                <div className="data">
                    <div className="rating-header">
                        <div className="overall">
                            <h2>Overall Rating</h2>
                            <p className="ratingNumber">4.3</p>
                        </div>
                        <div className="description">
                            <h2>123 River creek</h2>
                            <p><b>Description</b></p>
                            <p>Magnificent rental opportunity, minutes to the downtown core. This Urban oasis stays true to its Victorian roots and features high ceilings, crown moldings, decorative trim and the list goes on. The 4 floors of living space provide plenty of room and the second floor media room is sure to be a hit. Finished basement, bright and open kitchen, and a lovely garden.</p>
                        </div>
                    </div>
                    <h2>Ratings</h2>
                    <div className="rating-entries">
                        <div className="ratings">
                            <div className="overall">
                                <p>AnonGuy1</p>
                                <p className="ratingNumber">4.3</p>
                            </div>
                            <div className="description">
                                This place is good.
                            </div>
                        </div>
                        <div className="ratings">
                            <div className="overall">
                                <p>AnonGuy2</p>
                                <p className="ratingNumber">2.3</p>
                            </div>
                            <div className="description">
                               This place is not good because...
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </div>
    )
};

export default RatingComponent;