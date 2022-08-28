import * as app from '..';
import * as React from 'react';
import * as ui from 'ui';

export const SenseView = ui.createView<{vm: app.AimbotViewModel}>(({vm}) => (
  <ui.material.FormGroup>
    <ui.material.Typography variant="h5">
      {app.language.generalSense}
    </ui.material.Typography>
    <ui.material.FormControlLabel
      label={app.language.generalSenseItems}
      control={<ui.material.Switch
        onChange={x => vm.aimbotEnable.change(x.target.checked)}
        checked={vm.aimbotEnable.value} />} />
  </ui.material.FormGroup>
));
