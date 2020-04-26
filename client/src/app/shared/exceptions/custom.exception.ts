import Swal from 'sweetalert2';

export class CustomException extends Error {
  constructor({ message }: { message: string }) {
    super(message);
    this.showError();
  }

  showError() {
    Swal.fire('Error', this.message, 'error');
  }
}
