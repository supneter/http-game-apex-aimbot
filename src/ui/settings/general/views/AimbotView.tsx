import * as app from '..';
import * as React from 'react';
import * as ui from 'ui';

export const AimbotView = ui.createView<{vm: app.AimbotViewModel}>(({vm}) => (
  <ui.material.FormGroup>
    <ui.material.Typography variant="h5">
      {app.language.generalAimbot}
    </ui.material.Typography>
    <ui.material.FormControlLabel
      label={app.language.generalAimbotPlayers}
      control={<ui.material.Switch
        onChange={x => vm.aimbotEnable.change(x.target.checked)}
        checked={vm.aimbotEnable.value} />} />
  </ui.material.FormGroup>
));
