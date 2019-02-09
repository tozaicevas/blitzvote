import React from "react";
import { List } from "semantic-ui-react";

const LeftBar = () => (
  <List selection verticalAlign="middle">
    <List.Item icon="users">
      <List.Content>
        <List.Header>Helen</List.Header>
      </List.Content>
    </List.Item>
    <List.Item icon="marker" content="New York, NY" />
    <List.Item
      icon="mail"
      content={<a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>}
    />
    <List.Item
      icon="linkify"
      content={<a href="http://www.semantic-ui.com">semantic-ui.com</a>}
    />
  </List>
);

export default LeftBar;
