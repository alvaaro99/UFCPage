import Swal from 'sweetalert2';

export class LoadingAlert {
  constructor() {
    Swal.fire({
      title: 'Cargando',
      onBeforeOpen: () => Swal.showLoading(),
      allowEscapeKey: false,
      allowOutsideClick: false,
    });
  }

  close() {
    Swal.close();
  }
}
