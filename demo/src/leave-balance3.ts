import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('my-slot-leave-balance')
export class MySlotLeaveBalance extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif;
      background: #fff;
      padding: 16px;
      border-radius: 12px;
      border: 1px solid #e0e0e0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
      width: 100%;
      max-width: 1000px;
      box-sizing: border-box;
    }

    h3 {
      margin: 0 0 16px 0;
      font-size: 1.1rem;
      font-weight: 600;
      color: #222;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 16px;
      justify-items: stretch;
      align-items: stretch;
    }

    /* 🎨 Style slotted elements as cards automatically */
    ::slotted(*) {
      /* ✅ FIX: Set a default text color for all slotted content */
      color: #333;
      
      background: #fafafa;
      border-radius: 8px;
      padding: 20px;
      text-align: center;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
      border: 1px solid #eee;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      min-height: 120px;
      margin: 0;
    }

    ::slotted(*:hover) {
      transform: translateY(-4px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    }

    /* REMOVED: ::slotted(.label) and ::slotted(.value) 
      These rules don't work as expected because ::slotted() 
      cannot select descendants (parts inside) of the slotted elements.
      The slotted elements must style themselves.
    */
    
    .empty-state {
      font-size: 0.9rem;
      color: #777;
      text-align: center;
      padding: 20px 0;
    }

    /* 📱 Responsive adjustments */
    @media (max-width: 768px) {
      .grid {
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 12px;
      }
    }

    @media (max-width: 480px) {
      .grid {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      }
    }
  `;

  @state()
  private _hasChildren = false;

  private _handleSlotChange(e: Event) {
    const slot = e.target as HTMLSlotElement;
    this._hasChildren = slot.assignedNodes({ flatten: true }).length > 0;
  }

  render() {
    return html`
      <h3>Leave Balances</h3>
      <div class="grid">
        <slot @slotchange=${this._handleSlotChange}></slot>
      </div>
      
      ${!this._hasChildren
        ? html`
            <div class="empty-state">
              No leave balances available to display.
            </div>
          `
        : ''}
    `;
  }
}