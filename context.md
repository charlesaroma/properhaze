Prompt 1: Project Foundations & Landing Page Structure
"Please set up the foundational structure for my Vite React.js project. I'm using Tailwind CSS 4.1, Iconify, React Router DOM, and Framer Motion. Organize the core files, including App.jsx and index.css, making sure index.css contains the provided color palette variables from my UI Handoff Notes.

For the landing page, include a Navbar with the logo on the left and Login & Signup buttons on the far right. Below that, create a Hero/Landing Page Search Section, followed by an Events Carousel Slider. Finish the landing page with a simple Footer.

Important: Structure the code so each page (e.g., LandingPage.jsx) resides in its own folder, with its sections (like the search and carousel) nested within that folder for better organization."

Prompt 2: Settings Page - Basic Info Section
"Now, let's focus on the Settings Page. Start by implementing the Basic Info Section based on the 'UI Handoff Notes'. This section should have fields pre-filled with current user data. The 'Save Details' button should be disabled by default, activating only when any field is edited. The 'Cancel' button must revert all changes and reset the form state.

Ensure all input fields are validated: Email must follow standard email formatting. Phone number validation is not required at this level (handled via backend)."

Prompt 3: Settings Page - Password Section
"Next, implement the Password Section on the Settings Page, adhering strictly to the 'UI Handoff Notes'. All fields in this section must be filled to activate the 'Save Details' button. The 'New Password' and 'Confirm Password' fields must match; if they don't, display an error message 'Passwords do not match' using the specified semantic-content-error color (#B91C1C).

The 'Current password' field is required for validation before any password update. Also, ensure the 'New Password' meets these requirements (which should be displayed below the input fields):

Minimum 8 characters

At least 1 lowercase character

At least 1 uppercase character

At least 1 number, symbol, or whitespace character

The 'Save Details' button for this section should be disabled by default and only activate when all password fields are valid and filled. The 'Cancel' button must reset the form to its default state."

Prompt 4: Settings Page - Social Accounts Section
"For the Settings Page, please implement the Social Accounts Section as per the 'UI Handoff Notes'. All fields in this section are optional and should be pre-filled if data exists. The 'Save Details' button should only activate when any of the fields are edited.

URL validation should occur on blur, ensuring proper formatting (e.g., starts with https:// or www.). For icons, use platform-specific icons (24px by 24px), vertically aligned with their respective input fields. The 'Save Details' button should remain disabled until a change is detected, and the 'Cancel' button should restore previous data."

Prompt 5: Shared Functionality & Final Instructions
"Finally, implement the shared functionality for the 'Save Details' and 'Cancel' buttons across all Settings Tabs, as described in the 'UI Handoff Notes'. The 'Save Details' button should be disabled by default, only activating when the form state is changed and valid. On hover, it should show a subtle shadow or border transition, and on click, display a loading spinner until the process is complete. The 'Cancel' button must clear unsaved input and reset fields to their last saved state, navigating away only if intentionally used.

Crucially, implement all form validation using Formik and Yup, which I've already installed. Please correct anything wrong in the existing codebase based on these instructions and the UI handoff, ensuring the color palette variables in @index.css are correctly used."


Sources
