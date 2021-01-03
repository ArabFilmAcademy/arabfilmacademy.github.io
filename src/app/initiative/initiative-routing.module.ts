import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { Shell } from '@app/shell/shell.service';
import { InitiativeComponent } from '@app/initiative/initiative.component';
import { InitiativeDetailsComponent } from '@app/initiative/initiative-details/initiative-details.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/initiatives', pathMatch: 'full' },
    { path: 'initiatives', component: InitiativeComponent, data: { title: marker('Initiatives') } },
    { path: 'initiative/:id', component: InitiativeDetailsComponent, data: { title: marker('Initiatives') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class InitiativeRoutingModule {}
