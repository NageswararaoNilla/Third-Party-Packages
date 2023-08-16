import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

const overlayStyles = {
  backgroundColor: '#ffff',
}

const ReactPopUp = () => (
  <div className="popup-container">
    <Popup
      trigger={
        <button className="trigger-button" type="button">
          Trigger
        </button>
      }
      position="top center"
      overlayStyle={overlayStyles}
    >
      <div>
        <p>React is a popular and widely used programming language</p>
      </div>
    </Popup>
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          Trigger
        </button>
      }
    >
      {close => (
        <>
          <div>
            <p>React is a popular and widely used programming language</p>
          </div>
          <button
            type="button"
            className="trigger-button"
            onClick={() => close()}
          >
            Close
          </button>
        </>
      )}
    </Popup>
  </div>
)
export default ReactPopUp
