import React, { useState } from "react";

function Form2() {
    const [newsletter, setNewsletter] = useState(false);

    function handleNewsletterChange(event) {
      // .checked, not .value!
      setNewsletter(event.target.checked);
    }

    return (
      <form>
        <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
        <input
          type="checkbox"
          id="newsletter"
          onChange={handleNewsletterChange}
          /* checked instead of value */
          checked={newsletter}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }

export default Form2;