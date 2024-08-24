import { LitElement, html } from 'lit';
import './StoryForm.js';

class AddStoryPage extends LitElement {
  render() {
    return html`
      <div class="container">
        <h1>Add Story</h1>
        <story-form></story-form>
      </div>
    `;
  }
}

customElements.define('add-story-page', AddStoryPage);