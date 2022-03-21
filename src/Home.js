import React from "react";
import { PropsAndState } from './components/PropsAndState'


export const Home = () => (
    <>
        <h2>A.$.A.P</h2>
        <small>Here at A.$.A.P we care even when your loved ones can't be there.</small>

        <address>
            <div>Visit Us at a site near you</div>
            <div>300 Ready and Willing Blvd</div>
        </address>
        <PropsAndState yourName={"MDB"} />
    </>
)