import { certificados } from "../data/CertificadosData"


function useCertificados(nome:string) {


    const dataCertificados = certificados.filter(certificado => certificado.categoria.includes(nome))





  return {
    dataCertificados,
  }
}

export default useCertificados
