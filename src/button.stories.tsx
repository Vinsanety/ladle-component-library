import type { Story } from "@ladle/react";

export const PrimaryButton: Story = () => <button>Primary</button>;

export const SecondaryButton: Story = () => (
  <button className="secondary">Secondary</button>
);

export const OutlinedButton: Story = () => (
  <button type="button" className="outlined">
    Outlined
  </button>
);

export const TextLink: Story = () => <a href="">Text Link</a>;
