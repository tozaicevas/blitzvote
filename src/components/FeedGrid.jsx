import React from "react";
import { Grid, Image } from "semantic-ui-react";

const FeedGrid = () => (
  <Grid celled="internally">
    <Grid.Row>
      <Grid.Column width={3}>
        <Image src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
      </Grid.Column>
      <Grid.Column width={10}>
        <Image src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
        <Image src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
      </Grid.Column>
      <Grid.Column width={10}>
        <Image src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default FeedGrid;
