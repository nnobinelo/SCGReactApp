import React from 'react'
import { getImage } from '../../firebasePreloader'
import SupMat from './SupMat'
import Summary from './Summary'

// keep in mind that any strings from firebase like text or description will actually be an array where
// the first element is the string, the second is the color, and the third is the font
const GameDiv = (props) => {
  const { featureGraphic, supplementalMaterials, summary } = props
  return (
    <div>
      {/* first come the feature featureGraphic */}
      <div className="parallax-container">
        <div className="parallax">
          {/* if the actual (intrinsic) size of the image is too small parallaxing will not work on smaller screens */}
          <img src={getImage(featureGraphic)} alt="something should be appear here lol" intrinsicsize="1638x800" />
        </div>
      </div>

      {/* then any supplemental materials for the game */}
      {supplementalMaterials && supplementalMaterials.map((item, index) => {
        return (
          <SupMat {...item} key={index} />
        )
      })}

      {/* finally a summary for the game with google play and app store links */}
      <Summary {...summary}/>
    </div>
  )
}

export default GameDiv