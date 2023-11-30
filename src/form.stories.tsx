import type { Story } from "@ladle/react";

export const Input: Story = () => (
  <>
    <label htmlFor="input-email-address">Email</label>
    <input
      id="input-email-address"
      type="email"
      name="input"
      placeholder="name@mail.com"
    />
  </>
);

export const Select: Story = () => (
  <>
    <label htmlFor="select-contact-reason">Contact reason</label>
    <select id="select-contact-reason" name="select">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  </>
);

export const Textarea: Story = () => (
  <>
    <label htmlFor="textarea-message">Message</label>
    <textarea
      id="textarea-message"
      name="textarea"
      placeholder="Enter message..."
    ></textarea>
  </>
);

export const Radio: Story = () => (
  <>
    <label htmlFor="morning" className="radio-label">
      <input type="radio" id="morning" value="morning" name="radio" />
      Morning
    </label>
    <label htmlFor="afternoon" className="radio-label">
      <input type="radio" id="afternoon" value="afternoon" name="radio" />
      Afternoon
    </label>
    <label htmlFor="evening" className="radio-label">
      <input type="radio" id="evening" value="evening" name="radio" />
      Evening
    </label>
  </>
);

export const Checkbox: Story = () => (
  <>
    <label htmlFor="checkbox-copy" className="checkbox-label">
      <input id="checkbox-copy" type="checkbox" />
      Send myself a copy
    </label>
  </>
);
