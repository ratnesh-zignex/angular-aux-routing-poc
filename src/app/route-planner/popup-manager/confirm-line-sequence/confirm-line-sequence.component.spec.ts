import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { KeycloakService } from 'keycloak-angular';
import { HttpService } from 'src/app/shared/services/http.service';

import { ConfirmLineSequenceComponent } from './confirm-line-sequence.component';

describe('ConfirmLineSequenceComponent', () => {
  let component: ConfirmLineSequenceComponent;
  let fixture: ComponentFixture<ConfirmLineSequenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    providers: [HttpService, KeycloakService],
    imports: [HttpClientTestingModule, RouterTestingModule, ConfirmLineSequenceComponent]
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmLineSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
