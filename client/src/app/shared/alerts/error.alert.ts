import Swal from 'sweetalert2';

export class ErrorAlert {
  constructor(private message: string) {
    Swal.fire('Error', this.message, 'error');
  }

  close() {
    Swal.close();
  }
}
