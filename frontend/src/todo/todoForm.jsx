import React from "react";
import Grid from "../templente/grid";
import IconButton from "../templente/iconButton";

export default (props) => (
  <div role="form" className="todoForm">
    <Grid cols="12 9 10">
      <input id="description" className="form-control" placeholder="Adicione uma tarefa"/>
    </Grid>

    <Grid cols="12 3 2">
      <IconButton style="primary" icon="plus" />
    </Grid>
  </div>
);
