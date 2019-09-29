import React from 'react'
import { getImage } from '../../firebasePreloader'

const SupMat = (props) => {
    const { image, description, title, mediaAlignment, backgroundColor, video, mediaHeight, mediaWidth } = props

    const aspectRatio = mediaHeight / mediaWidth * 100

    if (image) {
        return (
            <div className={backgroundColor + " supMat"}>
                {(() => {
                    switch (mediaAlignment) {
                        case 'right':
                            return (
                                <div className="container">
                                    <div className="row">
                                        <div className={"valign-wrapper col s12 m6 left"} style={{ height: mediaHeight + "px" }}>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col s12">
                                                        {title ? <h1 className={"left-align " + title[1]} style={{ fontFamily: title[2] }}>{title[0]}</h1> : null}
                                                    </div>
                                                    <div className="col s12">
                                                        {description ? <h3 className={"right-align " + description[1]} style={{ fontFamily: description[2] }}>{description[0]}</h3> : null}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col s12 m6 centerFlexbox">
                                            <img className="zoomImage zoomLeft responsive-img" src={getImage(image)} alt="text me" />
                                        </div>
                                    </div>
                                </div>
                            )
                        case 'left':
                            return (
                                <div className="container">
                                    <div className="row">
                                        <div className="col s12 m6 centerFlexbox">
                                            <img className="zoomImage zoomRight responsive-img" src={getImage(image)} alt="text me" />
                                        </div>
                                        <div className={"valign-wrapper col s12 m6 right"} style={{ height: mediaHeight + "px" }}>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col s12">
                                                        {title ? <h1 className={"right-align " + title[1]} style={{ fontFamily: title[2] }}>{title[0]}</h1> : null}
                                                    </div>
                                                    <div className="col s12">
                                                        {description ? <h3 className={"left-align " + description[1]} style={{ fontFamily: description[2] }}>{description[0]}</h3> : null}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        case 'center':
                            return (
                                <div className="container">
                                    <div className="row">
                                        <div className="col s12 m4 valign-wrapper" style={{ height: mediaHeight + "px" }}>
                                            {title ? <h1 className={"right-align " + title[1]} style={{ fontFamily: title[2] }}>{title[0]}</h1> : null}
                                        </div>
                                        <div className="col s12 m4 centerFlexbox">
                                            <img className="zoomImage zoomCenter responsive-img" src={getImage(image)} alt="text me" />
                                        </div>
                                        <div className="col s12 m4 valign-wrapper" style={{ height: mediaHeight + "px" }}>
                                            {description ? <h3 className={"left-align " + description[1]} style={{ fontFamily: description[2] }}>{description[0]}</h3> : null}
                                        </div>
                                    </div>
                                </div>
                            )
                        default:
                            return null
                    }
                })()}
            </div>
        )
    }
    else if (video) {
        return (
            <div className={backgroundColor + " supMat videoSupMatContainer"} style={{ maxHeight: (mediaHeight + 40) + "px", overflow: 'hidden' }}>
                {(() => {
                    switch (mediaAlignment) {
                        case 'right':
                            return (
                                <div className="container">
                                    <div className="row">
                                        <div className={"valign-wrapper col s12 m6 left"} style={{ height: mediaHeight + "px" }}>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col s12">
                                                        {title ? <h1 className={"left-align " + title[1]} style={{ fontFamily: title[2] }}>{title[0]}</h1> : null}
                                                    </div>
                                                    <div className="col s12">
                                                        {description ? <h3 className={"right-align " + description[1]} style={{ fontFamily: description[2] }}>{description[0]}</h3> : null}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col s12 m6 centerFlexbox">
                                            <div className="video" style={{ maxHeight: mediaHeight + "px", maxWidth: mediaWidth + "px", paddingBottom: aspectRatio + "%" }}>
                                                <iframe title="gameplay" width={mediaWidth} height={mediaHeight} src={video} frameBorder="0" allowFullScreen style={{ maxHeight: mediaHeight + "px", maxWidth: mediaWidth + "px" }}></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        case 'left':
                            return (
                                <div className="container">
                                    <div className="row">
                                        <div className="col s12 m6 centerFlexbox">
                                            <div className="video" style={{ maxHeight: mediaHeight + "px", maxWidth: mediaWidth + "px", paddingBottom: aspectRatio + "%" }}>
                                                <iframe title="gameplay" width={mediaWidth} height={mediaHeight} src={video} frameBorder="0" allowFullScreen style={{ maxHeight: mediaHeight + "px", maxWidth: mediaWidth + "px" }}></iframe>
                                            </div>
                                        </div>
                                        <div className={"valign-wrapper col s12 m6 right"} style={{ height: mediaHeight + "px" }}>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col s12">
                                                        {title ? <h1 className={"right-align " + title[1]} style={{ fontFamily: title[2] }}>{title[0]}</h1> : null}
                                                    </div>
                                                    <div className="col s12">
                                                        {description ? <h3 className={"left-align " + description[1]} style={{ fontFamily: description[2] }}>{description[0]}</h3> : null}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        case 'center':
                            return (
                                <div className="container">
                                    <div className="row">
                                        <div className="col s12 m4 valign-wrapper" style={{ height: mediaHeight + "px" }}>
                                            {title ? <h1 className={"right-align " + title[1]} style={{ fontFamily: title[2] }}>{title[0]}</h1> : null}
                                        </div>
                                        <div className="col s12 m4 centerFlexbox">
                                            <div className="video" style={{ maxHeight: mediaHeight + "px", maxWidth: mediaWidth + "px", paddingBottom: aspectRatio + "%" }}>
                                                <iframe title="gameplay" width={mediaWidth} height={mediaHeight} src={video} frameBorder="0" allowFullScreen style={{ maxHeight: mediaHeight + "px", maxWidth: mediaWidth + "px" }}></iframe>
                                            </div>
                                        </div>
                                        <div className="col s12 m4 valign-wrapper" style={{ height: mediaHeight + "px" }}>
                                            {description ? <h3 className={"left-align " + description[1]} style={{ fontFamily: description[2] }}>{description[0]}</h3> : null}
                                        </div>
                                    </div>
                                </div>
                            )
                        default:
                            return null
                    }
                })()}
            </div>
        )
    }
}

export default SupMat