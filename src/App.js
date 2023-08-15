import VideoPlayer from './components/VideoPlayer'
import BarChartComponent from './components/BarChartComponent'
import PieChartComponent from './components/PieChartComponent'

import './App.css'

const App = () => (
  <div className="packages-container">
    <VideoPlayer />
    <BarChartComponent />
    <PieChartComponent />
  </div>
)

export default App
