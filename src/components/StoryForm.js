import { LitElement, html, css } from 'lit';

class StoryForm extends LitElement {
  static styles = css`
    .form-group {
      margin-bottom: 1rem;
    }
  `;

  handleSubmit(event) {
    event.preventDefault();
    const description = this.shadowRoot.querySelector('#description').value;
    const photo = this.shadowRoot.querySelector('#photo').files[0];
    // Handle form submission logic
  }

  render() {
    return html`
      <form @submit=${this.handleSubmit}>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea id="description" class="form-control" rows="3" required></textarea>
        </div>
        <div class="form-group">
          <label for="photo">Photo</label>
          <input type="file" id="photo" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary">Add Story</button>
      </form>
    `;
  }
}

customElements.define('story-form', StoryForm);