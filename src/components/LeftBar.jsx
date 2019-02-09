import React from "react";
import { List } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";

const LeftBar = () => (
  <List selection verticalAlign="middle">
    <List.Item>
      <Icon name="book" size="large" />
      <List.Content>
        <List.Header>Svietimas</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Icon name="recycle" size="large" />
      <List.Content>
        <List.Header>Ekologija</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Icon name="shield" size="large" />
      <List.Content>
        <List.Header>Saugumas</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Icon name="computer" size="large" style={{ paddingRight: "0.15em" }} />
      <List.Content>
        <List.Header>Technologijos</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Icon name="money" size="large" style={{ paddingRight: "0.15em" }} />
      <List.Content>
        <List.Header>Ekonomika</List.Header>
      </List.Content>
    </List.Item>
  </List>
);

export default LeftBar;
