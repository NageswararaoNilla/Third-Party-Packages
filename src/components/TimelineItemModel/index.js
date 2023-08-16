import {Chrono} from 'react-chrono'

const items = [
  {
    title: 'May 1940',
    cardTitle: 'Dunkirk',
    cardSubtitle: 'Men of the British Expeditionary Force.',
    cardDetailedText:
      'On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and attacking northern France.',
  },
]

const items1 = [{title: '2018'}, {title: '2019'}, {title: 'more'}]

const TimelineItemModel = () => (
  <div className="chrono-container">
    <Chrono
      mode="VERTICAL"
      items={items1}
      theme={{
        primary: 'red',
        secondary: 'blue',
        cardBgColor: 'yellow',
        cardForeColor: 'violet',
        titleColor: 'red',
      }}
    >
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/csk-logo-img.png"
          className="image"
          alt="chennai-super-kings"
        />
      </div>
      <div>
        <h1>Mumbai Indians</h1>
        <p>IPL Team winner for the year 2019 is Mumbai Indians.</p>
      </div>
      <div>
        <h1>For More Examples</h1>
        <a
          href="https://react-chrono-uc7v-d7n17x6r4-prabhuignoto.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          https://react-chrono-uc7v-d7n17x6r4-prabhuignoto.vercel.app
        </a>
      </div>
    </Chrono>
    <Chrono items={items} />
  </div>
)

export default TimelineItemModel
