import MuiSwitch, { SwitchProps } from '@mui/material/Switch';

type Props = SwitchProps;

export const Switch = ({ ...props }: Props) => {
  return <MuiSwitch {...props} />;
};
