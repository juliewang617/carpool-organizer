import React from "react";

export default function Event(props){
    // an Event has the following props: name, date, description, list of rides,
    // and waitlist 

    // need to organize the list of rides into return and depart. 

    return(
        <div class="my-5 w-90 m-auto">
            <div class="text-light p-3 bg-primary rounded d-flex flex-column" 
            style={{height: '6rem'}}>
                <div class="d-flex mb-2" style={{height: '2rem'}}>
                    <h4 class="me-3 my-auto">{props.eventName}</h4>
                    <p class="my-auto">{props.eventDate}</p>
                </div>
                <p>{props.eventDescription}</p>
            </div>

            { props.eventRides.length != 0 && 
                <div class="w-100 d-flex h-auto">
                    <div class="w-50 border border-dark border-top-0 
                    border-bottom-0 border-start-0 p-3">
                        <p>{props.eventRides}</p>
                    </div>
                    <div class="w-50 p-3">
                    </div>
                </div>
            }

        </div>
    )
}