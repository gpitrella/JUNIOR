import './SideBar.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


function SideBar() {

  return (
      <SideNav
          id="toolbar_sidebar"
          onSelect={(selected) => {
              // Add your code here
          }}
      >
          <SideNav.Toggle id="sidebar_toggle"/>
          <SideNav.Nav defaultSelected="home">
              <NavItem eventKey="home">
                  <NavIcon>
                      <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText>
                      Home
                  </NavText>
              </NavItem>
              <NavItem eventKey="charts">
                  <NavIcon>
                      <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText>
                      Charts
                  </NavText>
                  <NavItem eventKey="charts/linechart">
                      <NavText>
                          Line Chart
                      </NavText>
                  </NavItem>
                  <NavItem eventKey="charts/barchart">
                      <NavText>
                          Bar Chart
                      </NavText>
                  </NavItem>
              </NavItem>
          </SideNav.Nav>
      </SideNav>
 
  )
}


export default SideBar;