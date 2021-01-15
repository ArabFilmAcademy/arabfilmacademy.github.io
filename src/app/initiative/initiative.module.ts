import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitiativeComponent } from './initiative.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { Angulartics2Module } from 'angulartics2';
import { InitiativeRoutingModule } from '@app/initiative/initiative-routing.module';
import { InitiativeCardComponent } from './initiative-card/initiative-card.component';
import { InitiativeListComponent } from './initiative-list/initiative-list.component';
import { InitiativeDetailsComponent } from './initiative-details/initiative-details.component';
import { InitiativeCategoryComponent } from './initiative-category/initiative-category.component';
import { ParticipateComponent } from './participate/participate.component';
import { ParticipantFormComponent } from './participate/participant-form/participant-form.component';
import { ParticipateButtonComponent } from './participate/participate-button/participate-button.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    Angulartics2Module,
    InitiativeRoutingModule,
  ],
  declarations: [
    InitiativeComponent,
    InitiativeCardComponent,
    InitiativeListComponent,
    InitiativeDetailsComponent,
    InitiativeCategoryComponent,
    ParticipateComponent,
    ParticipantFormComponent,
    ParticipateButtonComponent,
  ],
})
export class InitiativeModule {}
