import VideoPlayer from './components/VideoPlayer'
import BarChartComponent from './components/BarChartComponent'
import PieChartComponent from './components/PieChartComponent'
import TimelineItemModel from './components/TimelineItemModel'

import './App.css'

const App = () => (
  <div className="packages-container">
    <VideoPlayer />
    <h1 className="heading">Bar Chart</h1>
    <BarChartComponent />
    <h1 className="heading">Pie Chart</h1>
    <PieChartComponent />
    <h1 className="heading">Timeline Item Model using Chrono</h1>
    <TimelineItemModel />
  </div>
)

export default App
