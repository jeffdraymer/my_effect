import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

//import images
import Animals from '../../img/Impact Tallies/animals_helped.png'
import Blood from '../../img/Impact Tallies/blood_given.png'
import Caregiving from '../../img/Impact Tallies/caregiving_hours.png'
import Civic from '../../img/Impact Tallies/civic_engagement_hours.png'
import Dollars from '../../img/Impact Tallies/dollars_collected.png'
import Donations from '../../img/Impact Tallies/donations_collected.png'
import Healthy from '../../img/Impact Tallies/healthy_actions.png'
import Houses from '../../img/Impact Tallies/houses_built.png'
import Jobs from '../../img/Impact Tallies/jobs_created.png'
import Lives from '../../img/Impact Tallies/lives_saved.png'
import Meals from '../../img/Impact Tallies/meals_given.png'
import Mentorship from '../../img/Impact Tallies/mentorship_hours.png'
import People from '../../img/Impact Tallies/people_helped.png'
import Probono from '../../img/Impact Tallies/pro_bono_service_hours.png'
import Medical from '../../img/Impact Tallies/provided_medical_care.png'

//Import styles
import './styles.css';

class Carousel extends Component {
    responsive = {
        0: { items: 7 }
    };

    items = [
        { src: Animals, text: "Animals Helped", total: "5", alt: "Animals Helped" },
        { src: Blood, text: "Blood Given", total: "25", alt: "Blood Given" },
        { src: Caregiving, text: "Caregiving Hours", total: "5", alt: "Caregiving Hours" },
        { src: Civic, text: "Civic Engagement Hours", total: "6", alt: "Civic Engagement Hours" },
        { src: Dollars, text: "Dollars Collected", total: "7", alt: "Dollars Collected" },
        { src: Donations, text: "Donations Collected", total: "8", alt: "Donations Collected" },
        { src: Healthy, text: "Healthy Actions", total: "81", alt: "Healthy Actions" },
        { src: Houses, text: "Houses Built", total: "24", alt: "Houses Built" },
        { src: Jobs, text: "Jobs Created", total: "22", alt: "Jobs Created" },
        { src: Lives, text: "Lives Saved", total: "11", alt: "Lives Saved" },
        { src: Meals, text: "Meals Given", total: "33", alt: "Meals Given" },
        { src: Mentorship, text: "Mentorship Hours", total: "33", alt: "Mentorship Hours" },
        { src: People, text: "People Helped", total: "15", alt: "People Helped" },
        { src: Probono, text: "Pro-Bono Service Hours", total: "51", alt: "Pro-Bono Service Hours" },
        { src: Medical, text: "Provided Medical Care", total: "2", alt: "Provided Medical Care" }
    ];


    galleryItem = (item, i) => (
        <div key={i} className="carousel-text"><img src={item.src} alt={item.alt} className="carousel-image" />
            <div>{item.text}</div>
            <div>{item.total}</div>
        </div>
    );

    render() {
        const items = this.items.map(this.galleryItem);

        return (

            <div className="row">
                <div className="col-1 ">
                    <i onClick={() => this.Carousel._slidePrev()} className='fas fa-chevron-circle-left blue carousel-button' />
                </div>
                <div className="col-10 col-centered">
                    <AliceCarousel
                        items={items}
                        startIndex={0}
                        fadeOutAnimation={true}
                        dotsDisabled={true}
                        buttonsDisabled={true}
                        responsive={this.responsive}
                        ref={el => this.Carousel = el}
                    >
                    </AliceCarousel>
                </div>
                <div className="col-1 carousel-button">
                    <i onClick={() => this.Carousel._slideNext()} className='fas fa-chevron-circle-right blue carousel-button' />
                </div>
            </div >

        )

    }
};

export default Carousel;



