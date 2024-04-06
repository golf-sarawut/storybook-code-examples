import './index.css';
import React from 'react';

export type ToggleSwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange }) => {
  const handleToggle = () => {
    onChange(!checked);
  };

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleToggle}
      />
      <span className="switch" />
    </label>
  );
};