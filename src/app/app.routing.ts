import {RouterModule, Routes} from "@angular/router";
import {PaginaWebComponent} from "./pagina-web/pagina-web.component";
import {CarritoComponent} from "./carrito/carrito.component";
import {CambiarContrasenyaComponent} from "./cambiar-contrasenya/cambiar-contrasenya.component";
import {CondicionesComponent} from "./condiciones/condiciones.component";
import {ContactoComponent} from "./contacto/contacto.component";
import {FormularioComponent} from "./formulario/formulario.component";
import {Formulario2Component} from "./formulario2/formulario2.component";
import {MovilesComponent} from "./moviles/moviles.component";
import {OrdenadoresComponent} from "./ordenadores/ordenadores.component";
import {PerifericosComponent} from "./perifericos/perifericos.component";
import {MenuComponent} from "./menu/menu.component";
import {RestaurarComponent} from "./restaurar/restaurar.component";
import {DatosComponent} from "./datos/datos.component";
import {FormulariconsultesComponent} from "./formulariconsultes/formulariconsultes.component";
import {GraficsComponent} from "./grafics/grafics.component";
import {InfoappleComponent} from "./infoapple/infoapple.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/pagina-web', pathMatch: 'full'},
  {path:'restaurar', component: RestaurarComponent},
  {path:'pagina-web', component: PaginaWebComponent},
  {path:'carrito', component: CarritoComponent },
  {path:'condiciones', component: CondicionesComponent },
  {path:'contacto', component: ContactoComponent },
  {path:'formulario', component: FormularioComponent },
  {path:'formulario2', component: Formulario2Component },
  {path:'moviles', component:  MovilesComponent},
  {path:'ordenadores', component:  OrdenadoresComponent},
  {path:'perifericos', component:  PerifericosComponent},
  {path:'menu', component:  MenuComponent},
  {path:'canvi', component:  CambiarContrasenyaComponent},
  {path:'datos', component: DatosComponent},
  {path:'formulariconsultes', component: FormulariconsultesComponent},
  {path:'grafics', component: GraficsComponent},
  {path:'infoapple', component: InfoappleComponent}
]

export const routing= RouterModule.forRoot(appRoutes)
