import React from "react"
import { EventCard } from "./event/EventCard"
import { ContactUsCard } from "./contactUs/ContactUsCard"
import { AboutUsCard } from "./aboutUs/AboutUsCard"
import { PropsAndState} from "./PropsAndState"
import "./Asap.css"

export const Asap = () => (
    <>
        <h2>A$AP </h2>
        <small>No Child Left Behind</small>

        <address>        
            <div>Coming to A City Near You</div>
            <div>1203 Shhh Lane</div>
        </address>

    
        <PropsAndState yourName="Lynn" />
    
        <h2>Events</h2>
        <article className="events">
            <EventCard />
            <EventCard />
            <EventCard />
        </article>

        <h2>Contact Us</h2>
        <article className="contact_infos">
            <ContactUsCard />
        </article>

        <h2>About Us</h2>
        <article className="contact_infos">
            <AboutUsCard />
        </article>

    </>
)
