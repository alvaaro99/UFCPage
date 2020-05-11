import Swal from 'sweetalert2';

export class SuccessAlert {
  constructor(private message: string) {
    Swal.fire({ icon: 'success', title: this.message });
  }
}
