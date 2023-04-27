export class Producte {
  prod_codi?: number;
  prod_nom?: string;
  prod_infoenvio?: string;
  prod_preu?: number;
  prod_tipus?: string;


  constructor(prod_codi: number, prod_nom: string, prod_infoenvio: string, prod_preu: number, prod_tipus: string) {
    this.prod_codi = prod_codi;
    this.prod_nom = prod_nom;
    this.prod_infoenvio = prod_infoenvio;
    this.prod_preu = prod_preu;
    this.prod_tipus = prod_tipus;
  }
}

