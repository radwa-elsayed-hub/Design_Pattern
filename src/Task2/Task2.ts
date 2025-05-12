console.log("task2");
type ToastType = 'default' | 'success' | 'error';

class ToastManager {
    private container: HTMLElement;

    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'toast-container';
        document.body.appendChild(this.container);
        this.injectStyles();
    }

    private injectStyles() {
        const style = document.createElement('style');
        style.textContent = `
        /* Toast Styles */
        .toast-container {
          position: fixed;
          top: 1rem;
          right: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          z-index: 9999;
        }
        .toast {
          padding: 1rem;
          border-radius: 6px;
          min-width: 200px;
          color: white;
          font-weight: bold;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          animation: fadein 0.3s ease, fadeout 0.5s ease 3.5s;
        }
        .toast-default {
          background: #333;
        }
        .toast-success {
          background: #28a745;
        }
        .toast-error {
          background: #dc3545;
        }
      
        /* Button Styles */
        button.toast-btn {
          border: none;
          padding: 0.6rem 1rem;
          margin: 0.3rem;
          border-radius: 6px;
          color: white;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .toast-btn.default {
          background: #333;
        }
        .toast-btn.success {
          background: #28a745;
        }
        .toast-btn.error {
          background: #dc3545;
        }
        .toast-btn.dismiss {
          background: #6c757d;
        }
      
        .toast-btn:hover {
          filter: brightness(1.1);
        }
      
        @keyframes fadein {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      
        @keyframes fadeout {
          to { opacity: 0; transform: translateY(-10px); }
        }
      `;
      
        document.head.appendChild(style);
    }

    public show(message: string, type: ToastType = 'default') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;

        this.container.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 4000);
    }

    public clearAll() {
        this.container.innerHTML = '';
    }
}

const toastManager = new ToastManager();

export const toast = (message: string) => {
    toastManager.show(message, 'default');
};

toast.success = (message: string) => {
    toastManager.show(message, 'success');
};

toast.error = (message: string) => {
    toastManager.show(message, 'error');
};

toast.dismissAll = () => {
    toastManager.clearAll();
};
