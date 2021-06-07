import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredinfo/Featuredinfo'
import Sidebar from '../../components/sidebar/Sidebar'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import { userData } from '../../dummyData'
import './home.css'



export default function Home() {
  return (
    <div className="container">
      <div className="sidebarContainer">
        <Sidebar />
      </div>

      <div className="home">
        <FeaturedInfo />
        <Chart
          data={userData}
          dataKey="name"
          dataKeyLine="Active User"
          grid
          title="User Analytics"
        />
        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>
    </div>
  );
}
