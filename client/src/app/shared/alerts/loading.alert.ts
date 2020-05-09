import Swal from 'sweetalert2';

export class LoadingAlert {
  constructor() {
    Swal.fire({ title: 'Cargando', onBeforeOpen: () => Swal.showLoading() });
  }

  close() {
    Swal.close();
  }
}
