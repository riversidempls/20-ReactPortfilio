import React from 'react';
import gisImage from '../../assets/gis/gis_app.png';
function GIS() {
    return (
        <section className="my-5">
            <h1 id="gis">GIS Application Development</h1>
            <div className="my-2">
                <p>
                    If a picture tells a thousand words, then a digital map can tell a thousand pictures. Zoom in or out to expand details
                    and see spatial information in a new context using custom base maps designed with solid user experience in mind. This
                    Geospatial data set represents 20+ years of conservation practices installed on public and private lands across Minnesota.
                    Reported to the Board of Water and Soil Resources using the eLINK Grant and Project Tracking web application.
                </p>
            </div>
            <img src={gisImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    );
}

export default GIS;