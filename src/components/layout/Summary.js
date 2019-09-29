import React from 'react'
import { getImage } from '../../firebasePreloader'

const Summary = (props) => {
    const { image, description, title, mediaAlignment, backgroundColor, video, mediaHeight, mediaWidth, playStoreLink, appStoreLink } = props

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
                                        <div className={"col s12 m6 left"}>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col s12">
                                                        {title ? <h4 className={"center-align " + title[1]} style={{ fontFamily: title[2] }}>{title[0]}</h4> : null}
                                                    </div>
                                                    <div className="col s12">
                                                        {description ? <h5 className={"summaryDescription center-align " + description[1]} style={{ fontFamily: description[2] }} dangerouslySetInnerHTML={{ __html: description[0] }} /> : null}
                                                    </div>
                                                    <div className="col s12">
                                                        <div className="col s12 m6 centerFlexbox">
                                                            <a target="_blank" rel="noopener noreferrer" href={playStoreLink}><img className="zoomImage zoomCenter responsive-img" src="/images/googlePlayBadge.png" width="355" height="105" alt="google play link" /></a>
                                                        </div>
                                                        <div className="col s12 m6 centerFlexbox">
                                                            <a target="_blank" rel="noopener noreferrer" href={appStoreLink}><img className="zoomImage zoomCenter responsive-img" src="/images/appleAppStoreBadge.png" width="355" height="105" alt="google play link" /></a>
                                                        </div>
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
                                        <div className={"col s12 m6 right"}>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col s12">
                                                        {title ? <h4 className={"center-align " + title[1]} style={{ fontFamily: title[2] }}>{title[0]}</h4> : null}
                                                    </div>
                                                    <div className="col s12">
                                                        {description ? <h5 className={"summaryDescription center-align " + description[1]} style={{ fontFamily: description[2] }} dangerouslySetInnerHTML={{ __html: description[0] }} /> : null}
                                                    </div>
                                                    <div className="col s12">
                                                        <div className="col s12 m6 centerFlexbox">
                                                            <a target="_blank" rel="noopener noreferrer" href={playStoreLink}><img className="zoomImage zoomCenter responsive-img" src="/images/googlePlayBadge.png" width="355" height="105" alt="google play link" /></a>
                                                        </div>
                                                        <div className="col s12 m6 centerFlexbox">
                                                            <a target="_blank" rel="noopener noreferrer" href={appStoreLink}><img className="zoomImage zoomCenter responsive-img" src="/images/appleAppStoreBadge.png" width="355" height="105" alt="google play link" /></a>
                                                        </div>
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
                                        <div className="col s12 m4 left valign-wrapper" style={{ height: mediaHeight + "px" }}>
                                            {title ? <h4 className={"center-align " + title[1]} style={{ fontFamily: title[2] }}>{title[0]}</h4> : null}
                                        </div>
                                        <div className="col s12 m4 centerFlexbox">
                                            <img className="zoomImage zoomRight responsive-img" src={getImage(image)} alt="text me" />
                                        </div>
                                        <div className="col s12 m4 right">
                                            <div className="container">
                                                <div className="row removeRowMargin">
                                                    <div className="col s12">
                                                        {description ? <h5 className={"summaryDescription center-align " + description[1]} style={{ fontFamily: description[2] }} dangerouslySetInnerHTML={{ __html: description[0] }} /> : null}
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col s12">
                                                        <div className="col s12 m6 centerFlexbox">
                                                            <a target="_blank" rel="noopener noreferrer" href={playStoreLink}><img className="zoomImage zoomCenter responsive-img" src="/images/googlePlayBadge.png" width="355" height="105" alt="google play link" /></a>
                                                        </div>
                                                        <div className="col s12 m6 centerFlexbox">
                                                            <a target="_blank" rel="noopener noreferrer" href={appStoreLink}><img className="zoomImage zoomCenter responsive-img" src="/images/appleAppStoreBadge.png" width="355" height="105" alt="google play link" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
            <div className={backgroundColor + " supMat"}>
                {(() => {
                    switch (mediaAlignment) {
                        case 'right':
                            return (
                                <div className="container">
                                    <div className="row">
                                        <div className={"col s12 m6 left"}>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col s12">
                                                        {title ? <h4 className={"center-align " + title[1]} style={{ fontFamily: title[2] }}>{title[0]}</h4> : null}
                                                    </div>
                                                    <div className="col s12">
                                                        {description ? <h5 className={"summaryDescription center-align " + description[1]} style={{ fontFamily: description[2] }} dangerouslySetInnerHTML={{ __html: description[0] }} /> : null}
                                                    </div>
                                                    <div className="col s12">
                                                        <div className="col s12 m6 centerFlexbox">
                                                            <a target="_blank" rel="noopener noreferrer" href={playStoreLink}><img className="zoomImage zoomCenter responsive-img" src="/images/googlePlayBadge.png" width="355" height="105" alt="google play link" /></a>
                                                        </div>
                                                        <div className="col s12 m6 centerFlexbox">
                                                            <a target="_blank" rel="noopener noreferrer" href={appStoreLink}><img className="zoomImage zoomCenter responsive-img" src="/images/appleAppStoreBadge.png" width="355" height="105" alt="google play link" /></a>
                                                        </div>
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
                                        <div className={"col s12 m6 right"}>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col s12">
                                                        {title ? <h4 className={"center-align " + title[1]} style={{ fontFamily: title[2] }}>{title[0]}</h4> : null}
                                                    </div>
                                                    <div className="col s12">
                                                        {description ? <h5 className={"summaryDescription center-align " + description[1]} style={{ fontFamily: description[2] }} dangerouslySetInnerHTML={{ __html: description[0] }} /> : null}
                                                    </div>
                                                    <div className="col s12">
                                                        <div className="col s12 m6 centerFlexbox">
                                                            <a target="_blank" rel="noopener noreferrer" href={playStoreLink}><img className="zoomImage zoomCenter responsive-img" src="/images/googlePlayBadge.png" width="355" height="105" alt="google play link" /></a>
                                                        </div>
                                                        <div className="col s12 m6 centerFlexbox">
                                                            <a target="_blank" rel="noopener noreferrer" href={appStoreLink}><img className="zoomImage zoomCenter responsive-img" src="/images/appleAppStoreBadge.png" width="355" height="105" alt="google play link" /></a>
                                                        </div>
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
                                        <div className="col s12 m4 left valign-wrapper" style={{ height: mediaHeight + "px" }}>
                                            {title ? <h4 className={"center-align " + title[1]} style={{ fontFamily: title[2] }}>{title[0]}</h4> : null}
                                        </div>
                                        <div className="col s12 m4 centerFlexbox">
                                            <div className="video" style={{ maxHeight: mediaHeight + "px", maxWidth: mediaWidth + "px", paddingBottom: aspectRatio + "%" }}>
                                                <iframe title="gameplay" width={mediaWidth} height={mediaHeight} src={video} frameBorder="0" allowFullScreen style={{ maxHeight: mediaHeight + "px", maxWidth: mediaWidth + "px" }}></iframe>
                                            </div>
                                        </div>
                                        <div className="col s12 m4 right">
                                            <div className="container">
                                                <div className="row removeRowMargin">
                                                    <div className="col s12">
                                                        {description ? <h5 className={"summaryDescription center-align " + description[1]} style={{ fontFamily: description[2] }} dangerouslySetInnerHTML={{ __html: description[0] }} /> : null}
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col s12">
                                                        <div className="col s12 m6 centerFlexbox">
                                                            <a target="_blank" rel="noopener noreferrer" href={playStoreLink}><img className="zoomImage zoomCenter responsive-img" src="/images/googlePlayBadge.png" width="355" height="105" alt="google play link" /></a>
                                                        </div>
                                                        <div className="col s12 m6 centerFlexbox">
                                                            <a target="_blank" rel="noopener noreferrer" href={appStoreLink}><img className="zoomImage zoomCenter responsive-img" src="/images/appleAppStoreBadge.png" width="355" height="105" alt="google play link" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

export default Summary