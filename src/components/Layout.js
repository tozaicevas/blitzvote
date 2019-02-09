import React from 'react'
import { Container, Header, Image, Menu } from 'semantic-ui-react'

const Layout = () => (
  <div style={{ height: '100%' }}>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/510px-Flag_of_Europe.svg.png' style={{ marginRight: '1.5em' }} />
          Sužinok
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>
      </Container>
    </Menu>

    <Container text style={{ marginTop: '7em' }}>
      
    </Container>
  </div>
)

export default Layout;