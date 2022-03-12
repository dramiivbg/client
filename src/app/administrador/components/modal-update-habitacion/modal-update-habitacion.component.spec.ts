import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalUpdateHabitacionComponent } from './modal-update-habitacion.component';

describe('ModalUpdateHabitacionComponent', () => {
  let component: ModalUpdateHabitacionComponent;
  let fixture: ComponentFixture<ModalUpdateHabitacionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUpdateHabitacionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalUpdateHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
