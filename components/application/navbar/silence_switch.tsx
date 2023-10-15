import React from 'react';
import { SwitchField, useTheme } from '@aws-amplify/ui-react';

interface Props {
  isSilent: boolean;
  onToggle: (silent: boolean) => void;
}

const SilenceSwitchButton: React.FC<Props> = ({ isSilent, onToggle }) => {
  const { tokens } = useTheme();
  return (
    <SwitchField
      trackColor={tokens.colors.background.secondary}  // Using Amplify's theme color
      trackCheckedColor={tokens.colors.background.primary}  // Using Amplify's theme color
      size={"small"}
      isDisabled={false}
      label="Silence"

      labelPosition="start"
      onChange={(e) => {
        onToggle(e.target.checked);
      }}
      checked={isSilent}
      color={tokens.colors.background.primary}
    />
  );
};

export default SilenceSwitchButton;
