import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Container,
  Icon,
  Image,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Search,
  Input
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ padding: 0, paddingBottom: "3px" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item
                  onClick={() => this.props.clearFilters()}
                  active={this.props.activeLink === "/"}
                >
                  <Image
                    size="mini"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
                    style={{ marginRight: "1.5em" }}
                  />
                  <NavLink to="/">Sužinok</NavLink>
                </Menu.Item>
                <Menu.Item active={this.props.activeLink === "/neatsakyti"}>
                  <NavLink to="/neatsakyti">Neatsakyti</NavLink>
                </Menu.Item>
                <Menu.Item active={this.props.activeLink === "/candidates"}>
                  <NavLink to="/candidates">Kandidatai</NavLink>
                </Menu.Item>
                <Container fluid={true}>
                  <Menu.Item>
                    <Input icon="search" placeholder="Search..." />
                  </Menu.Item>
                </Container>
                <Menu.Item position="right">
                  <Button as="a" inverted={!fixed}>
                    Prisijungti
                  </Button>
                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                  >
                    Registruotis
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
          <Menu.Item as="a">Work</Menu.Item>
          <Menu.Item as="a">Company</Menu.Item>
          <Menu.Item as="a">Careers</Menu.Item>
          <Menu.Item as="a">Log in</Menu.Item>
          <Menu.Item as="a">Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 350, padding: "1em 0em" }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted>
                    Log in
                  </Button>
                  <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children, activeLink, clearFilters }) => (
  <div>
    <DesktopContainer clearFilters={clearFilters} activeLink={activeLink}>
      {children}
    </DesktopContainer>
    <MobileContainer activeLink={activeLink}>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const HomepageLayout = props => (
  <ResponsiveContainer
    clearFilters={props.onClearFilters}
    activeLink={props.link}
  >
    {props.children}
  </ResponsiveContainer>
);

const mapStateToProps = state => ({
  link: state.router.location.pathname
});

const mapDispatchToProps = dispatch => ({
  onClearFilters: () => dispatch({ type: "FILTER_CLEAR" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomepageLayout);
